import { getSheetData } from '@/lib/googleSheets';
import DashboardClient from './DashboardClient';
import styles from './page.module.css';

export const revalidate = 3; // Revalidate every 3 seconds

export default async function Home() {
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
    const statusColumns = headers.slice(3); // Skip S.No, Registration Number, Name

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

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Document Submission Dashboard</h1>
                    <p className={styles.subtitle}>Real-time student Submission tracking & analytics</p>
                </div>

                {data.length === 0 ? (
                    <div className={styles.error}>
                        <p>No data found. Please check your Google Sheet configuration.</p>
                    </div>
                ) : (
                    <DashboardClient
                        headers={headers}
                        rows={rows}
                        stats={stats}
                        fieldStats={fieldStats}
                        totalStudents={rows.length}
                    />
                )}
            </div>
        </main>
    );
}
