'use client';

import { useState, useEffect } from 'react';
import DashboardClient from './DashboardClient';
import styles from './page.module.css';

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/data');
            if (response.ok) {
                const result = await response.json();
                setData(result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Document Submission Dashboard</h1>
                        <p className={styles.subtitle}>Loading data...</p>
                    </div>
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Fetching latest data from Google Sheets...</p>
                    </div>
                </div>
            </main>
        );
    }

    if (!data || data.rows.length === 0) {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.error}>
                        <p>No data found. Please check your Google Sheet configuration.</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Document Submission Dashboard</h1>
                    <p className={styles.subtitle}>Real-time student Submission tracking & analytics</p>
                </div>

                <DashboardClient
                    headers={data.headers}
                    rows={data.rows}
                    stats={data.stats}
                    fieldStats={data.fieldStats}
                    totalStudents={data.totalStudents}
                />
            </div>
        </main>
    );
}
