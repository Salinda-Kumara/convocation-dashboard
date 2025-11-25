import { getSheetData } from '@/lib/googleSheets';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const data = await getSheetData();
        const headers = data.length > 0 ? data[0] : [];
        const rows = data.length > 1 ? data.slice(1) : [];

        // Calculate statistics
        const stats = {
            total: rows.length,
            approved: 0,
            pending: 0,
            notSubmitted: 0,
        };

        rows.forEach(row => {
            const rowText = row.join(' ').toLowerCase();

            if (rowText.includes('approved') || rowText.includes('confirmed')) {
                stats.approved++;
            }

            if (rowText.includes('pending')) {
                stats.pending++;
            }

            if (rowText.includes('not submitted') || rowText.includes('not paid')) {
                stats.notSubmitted++;
            }
        });

        // Calculate field-by-field completion stats
        const fieldStats = {};
        const statusColumns = headers.slice(3);

        statusColumns.forEach((header, index) => {
            const colIndex = index + 3;
            const values = rows.map(row => row[colIndex] || '');

            const approved = values.filter(v => v.toLowerCase().includes('approved') || v.toLowerCase().includes('confirmed')).length;
            const pending = values.filter(v => v.toLowerCase().includes('pending')).length;
            const notSubmitted = values.filter(v => v.toLowerCase().includes('not submitted') || v.toLowerCase().includes('not paid')).length;

            fieldStats[header] = {
                approved,
                pending,
                notSubmitted,
                total: rows.length,
                completionRate: Math.round((approved / rows.length) * 100)
            };
        });

        return NextResponse.json({
            headers,
            rows,
            stats,
            fieldStats,
            totalStudents: rows.length,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
