require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function debugData() {
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
        const range = 'Sheet1!A:Z';

        const response = await gl.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;
        const headers = rows[0];
        const dataRows = rows.slice(1);

        const requiredColumns = [
            'Supplication Form',
            'SAB Alumni Registration Form',
            'Exit Interview Form',
            'Finance Clearance Form',
            'Convocation Payment'
        ];

        console.log('=== HEADERS ===');
        headers.forEach((h, i) => console.log(`${i}: ${h}`));

        console.log('\n=== REQUIRED COLUMN INDICES ===');
        requiredColumns.forEach(col => {
            const idx = headers.indexOf(col);
            console.log(`${col}: ${idx}`);
        });

        console.log('\n=== SAMPLE VALUES FROM FIRST 5 STUDENTS ===');
        dataRows.slice(0, 5).forEach((row, idx) => {
            console.log(`\nStudent ${idx + 1}:`);
            requiredColumns.forEach(col => {
                const colIdx = headers.indexOf(col);
                const value = row[colIdx] || '(empty)';
                console.log(`  ${col}: "${value}"`);
            });
        });

        console.log('\n=== UNIQUE VALUES IN TARGET COLUMNS ===');
        requiredColumns.forEach(col => {
            const colIdx = headers.indexOf(col);
            const values = new Set();
            dataRows.forEach(row => {
                const val = (row[colIdx] || '').trim();
                if (val) values.add(val);
            });
            console.log(`\n${col}:`);
            Array.from(values).sort().forEach(v => console.log(`  - "${v}"`));
        });

    } catch (error) {
        console.error('Error:', error.message);
    }
}

debugData();
