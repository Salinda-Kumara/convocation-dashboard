'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import styles from './StatusChart.module.css';

const COLORS = {
    'Approved': '#10b981',
    'Pending': '#f59e0b',
    'Not Submitted': '#ef4444',
    'Other': '#64748b'
};

export default function StatusChart({ stats }) {
    const data = [
        { name: 'Approved', value: stats.approved },
        { name: 'Pending', value: stats.pending },
        { name: 'Not Submitted', value: stats.notSubmitted },
    ];

    const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        if (percent < 0.05) return null;

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                className={styles.label}
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className={styles.chartContainer}>
            <h3 className={styles.chartTitle}>📊 Status Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            background: 'rgba(30, 41, 59, 0.95)',
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                            borderRadius: '0.5rem',
                            color: '#e2e8f0'
                        }}
                    />
                    <Legend
                        wrapperStyle={{ color: '#e2e8f0', fontSize: '12px' }}
                        iconType="circle"
                        iconSize={8}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
