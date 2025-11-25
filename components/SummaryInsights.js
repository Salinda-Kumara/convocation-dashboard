import styles from './SummaryInsights.module.css';

export default function SummaryInsights({ stats, fieldStats, totalStudents }) {
    const overallCompletion = stats.total > 0
        ? Math.round((stats.approved / stats.total) * 100)
        : 0;

    const avgFieldCompletion = fieldStats
        ? Math.round(Object.values(fieldStats).reduce((sum, field) => sum + field.completionRate, 0) / Object.keys(fieldStats).length)
        : 0;

    const studentsWithAllApproved = stats.approved;
    const studentsWithPending = stats.pending;
    const studentsWithNotSubmitted = stats.notSubmitted;

    const insights = [
        {
            icon: '📊',
            label: 'Overall Progress',
            value: `${overallCompletion}%`,
            description: `${studentsWithAllApproved} of ${totalStudents} students fully approved`,
            color: 'blue'
        },
        {
            icon: '📋',
            label: 'Average Field Completion',
            value: `${avgFieldCompletion}%`,
            description: 'Average completion rate across all fields',
            color: 'purple'
        },
        {
            icon: '⚠️',
            label: 'Action Required',
            value: studentsWithNotSubmitted,
            description: 'Students with incomplete submissions',
            color: 'orange'
        },
        {
            icon: '⏳',
            label: 'Under Review',
            value: studentsWithPending,
            description: 'Students with pending approvals',
            color: 'cyan'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>📈 Summary Insights</h3>
                <div className={styles.timestamp}>
                    Last updated: {new Date().toLocaleString()}
                </div>
            </div>
            <div className={styles.insightsGrid}>
                {insights.map((insight, index) => (
                    <div key={index} className={`${styles.insightCard} ${styles[insight.color]}`}>
                        <div className={styles.insightIcon}>{insight.icon}</div>
                        <div className={styles.insightContent}>
                            <div className={styles.insightLabel}>{insight.label}</div>
                            <div className={styles.insightValue}>{insight.value}</div>
                            <div className={styles.insightDescription}>{insight.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
