require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function testConnection() {
    console.log('Testing Google Sheets Connection (Service Account)...');
    console.log('Client Email:', process.env.GOOGLE_CLIENT_EMAIL);
    console.log('Private Key present:', !!process.env.GOOGLE_PRIVATE_KEY);
    console.log('Spreadsheet ID:', process.env.GOOGLE_SHEET_ID);

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
        const range = 'Sheet1!A1:Z5';

        console.log(`Fetching range: ${range}`);
        const response = await gl.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        console.log('Success!');
        console.log('Data sample:', response.data.values);
    } catch (error) {
        console.error('Error details:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Status Text:', error.response.statusText);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error(error.message);
        }
    }
}

testConnection();
