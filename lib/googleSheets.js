import { google } from 'googleapis';

export async function getSheetData() {
    try {
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
        return rows;
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        if (error.response) {
            console.error('Error response data:', JSON.stringify(error.response.data, null, 2));
        }
        return [];
    }
}
