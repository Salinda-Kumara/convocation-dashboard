'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import styles from './CompletionChart.module.css';

const COLORS = {
    'Approved': '#10b981',
    'Pending': '#f59e0b',
    'Not Submitted': '#ef4444',
};

export default function CompletionChart({ fieldStats }) {
    // Transform data for the chart
    const data = Object.entries(fieldStats).map(([field, stats]) => ({
        name: field.length > 20 ? field.substring(0, 20) + '...' : field,
        fullName: field,
        Approved: stats.approved,
        Pending: stats.pending,
        'Not Submitted': stats.notSubmitted,
        completionRate: stats.completionRate,
    }));

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className={styles.tooltip}>
                    <p className={styles.tooltipTitle}>{data.fullName}</p>
                    <p className={styles.tooltipItem} style={{ color: '#10b981' }}>
                        ✓ Approved: {data.Approved}
                    </p>
                    <p className={styles.tooltipItem} style={{ color: '#f59e0b' }}>
                        ⏳ Pending: {data.Pending}
                    </p>
                    <p className={styles.tooltipItem} style={{ color: '#ef4444' }}>
                        ✗ Not Submitted: {data['Not Submitted']}
                    </p>
                    <p className={styles.tooltipCompletion}>
                        Completion: {data.completionRate}%
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.chartContainer}>
            <h3 className={styles.chartTitle}>Field-by-Field Completion Analysis</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                    <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: '#94a3b8' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ color: '#e2e8f0', paddingTop: '20px' }}
                        iconType="circle"
                    />
                    <Bar dataKey="Approved" fill="#10b981" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Pending" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="Not Submitted" fill="#ef4444" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
