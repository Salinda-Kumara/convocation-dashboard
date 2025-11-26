import { google } from 'googleapis';

// Simple in-memory cache
let cache = {
    data: null,
    timestamp: null,
    ttl: 10000 // Cache for 10 seconds
};

export async function getSheetData() {
    try {
        // Check if cache is still valid
        const now = Date.now();
        if (cache.data && cache.timestamp && (now - cache.timestamp) < cache.ttl) {
            console.log('Returning cached data');
            return cache.data;
        }

        console.log('Fetching fresh data from Google Sheets');

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const gl = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A1:Z1000';

        const response = await gl.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return [];
        }

        // Update cache
        cache.data = rows;
        cache.timestamp = now;

        return rows;
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        if (error.response) {
            console.error('Error response data:', JSON.stringify(error.response.data, null, 2));
        }

        // Return cached data if available, even if expired
        if (cache.data) {
            console.log('Returning stale cached data due to error');
            return cache.data;
        }

        return [];
    }
}
