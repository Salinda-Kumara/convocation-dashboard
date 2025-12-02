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
            submitted: 0,
            allApproved: 0,
            pending: 0,
            notSubmitted: 0,
            incomplete: 0,
            totalGuests: 0,
        };

        // Find "NO OF GUESTS ALLOWED" column index (handle newlines and case)
        const guestColumnIndex = headers.findIndex(h =>
            h.toLowerCase().replace(/\n/g, ' ').includes('no of guests')
        );

        // Define required columns for "All Approved" check
        const requiredColumns = [
            'Supplication Form',
            'SAB Alumni Registration Form',
            'Exit Interview Form',
            'Finance Clearance Form',
            'Convocation Payment'
        ];

        rows.forEach(row => {
            const rowText = row.join(' ').toLowerCase();
            const statusFields = row.slice(4); // Skip first 4 columns (S.No, Reg, Name, Name Appeared)

            // Check if at least one field is approved/confirmed in the required columns
            const hasApprovedInTarget = requiredColumns.some(columnName => {
                const columnIndex = headers.indexOf(columnName);
                if (columnIndex === -1) return false;
                const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                // Exclude negative statuses first
                if (fieldValue.includes('not ')) return false;
                return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
            });

            if (hasApprovedInTarget) {
                stats.submitted++;
            }

            // Check if ALL REQUIRED fields are approved/confirmed
            const requiredFieldsApproved = requiredColumns.every(columnName => {
                const columnIndex = headers.indexOf(columnName);
                if (columnIndex === -1) return false; // Column doesn't exist
                const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                // Exclude negative statuses first
                if (fieldValue.includes('not ')) return false;
                return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
            });
            if (requiredFieldsApproved) {
                stats.allApproved++;
            }

            if (rowText.includes('pending')) {
                stats.pending++;
            }

            // Check if ALL required columns are "Not Submitted" or "Pending"
            const allNotSubmittedOrPending = requiredColumns.every(columnName => {
                const columnIndex = headers.indexOf(columnName);
                if (columnIndex === -1) return false;
                const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                return fieldValue.includes('not submitted') || fieldValue.includes('not paid') || fieldValue.includes('pending') || fieldValue === '';
            });

            if (allNotSubmittedOrPending) {
                stats.notSubmitted++;
            }

            // Check if incomplete: has at least one "not submitted" and at least one other status
            const hasNotSubmitted = statusFields.some(field => {
                const fieldLower = (field || '').toLowerCase();
                return fieldLower.includes('not submitted') || fieldLower.includes('not paid');
            });
            const hasOtherStatus = statusFields.some(field => {
                const fieldLower = (field || '').toLowerCase();
                return (fieldLower.includes('approved') || fieldLower.includes('confirmed') || fieldLower.includes('pending'));
            });

            if (hasNotSubmitted && hasOtherStatus) {
                stats.incomplete++;
            }

            // Calculate total guests
            if (guestColumnIndex !== -1) {
                const rawValue = row[guestColumnIndex];
                const guests = parseInt(rawValue) || 0;
                stats.totalGuests += guests;
            }
        });

        // Calculate field-by-field completion stats
        const fieldStats = {};
        const statusColumns = headers.slice(4);

        statusColumns.forEach((header, index) => {
            const colIndex = index + 4;
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
