require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function analyzeData() {
    console.log('Analyzing Google Sheets Data...\n');

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

        console.log('=== DATA STRUCTURE ===');
        console.log(`Total Columns: ${headers.length}`);
        console.log(`Total Students: ${dataRows.length}\n`);

        console.log('=== COLUMN HEADERS ===');
        headers.forEach((header, index) => {
            console.log(`${index + 1}. ${header}`);
        });

        console.log('\n=== COMPLETION ANALYSIS ===');

        // Analyze each status column
        const statusColumns = headers.slice(3); // Skip first 3 columns (S.No, Reg, Name)
        const analysis = {};

        statusColumns.forEach((header, index) => {
            const colIndex = index + 3;
            const values = dataRows.map(row => row[colIndex] || '');

            const approved = values.filter(v => v.toLowerCase().includes('approved') || v.toLowerCase().includes('confirmed')).length;
            const pending = values.filter(v => v.toLowerCase().includes('pending')).length;
            const notSubmitted = values.filter(v => v.toLowerCase().includes('not submitted') || v.toLowerCase().includes('not paid')).length;
            const incomplete = values.filter(v => !v || v.trim() === '').length;

            analysis[header] = {
                approved,
                pending,
                notSubmitted,
                incomplete,
                total: dataRows.length,
                completionRate: Math.round(((approved) / dataRows.length) * 100)
            };
        });

        console.log('\nField-by-field completion:');
        Object.entries(analysis).forEach(([field, stats]) => {
            console.log(`\n${field}:`);
            console.log(`  ✓ Approved: ${stats.approved} (${Math.round(stats.approved / stats.total * 100)}%)`);
            console.log(`  ⏳ Pending: ${stats.pending} (${Math.round(stats.pending / stats.total * 100)}%)`);
            console.log(`  ✗ Not Submitted: ${stats.notSubmitted} (${Math.round(stats.notSubmitted / stats.total * 100)}%)`);
            console.log(`  Completion Rate: ${stats.completionRate}%`);
        });

        // Overall statistics
        console.log('\n=== OVERALL STATISTICS ===');
        const totalApproved = dataRows.filter(row => {
            const rowText = row.join(' ').toLowerCase();
            return rowText.includes('approved') || rowText.includes('confirmed');
        }).length;

        const totalPending = dataRows.filter(row => {
            return row.join(' ').toLowerCase().includes('pending');
        }).length;

        const totalNotSubmitted = dataRows.filter(row => {
            return row.join(' ').toLowerCase().includes('not submitted') || row.join(' ').toLowerCase().includes('not paid');
        }).length;

        console.log(`Total Students: ${dataRows.length}`);
        console.log(`Fully Approved: ${totalApproved}`);
        console.log(`Has Pending: ${totalPending}`);
        console.log(`Has Not Submitted: ${totalNotSubmitted}`);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

analyzeData();
