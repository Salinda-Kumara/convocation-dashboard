import styles from './StatsCard.module.css';

export default function StatsCard({ label, value, icon, color = 'blue', onClick, isActive, percentage }) {
    return (
        <div
            className={`${styles.card} ${styles[color]} ${isActive ? styles.active : ''} ${onClick ? styles.clickable : ''}`}
            onClick={onClick}
        >
            <div className={styles.content}>
                <div className={styles.label}>{label}</div>
                <div className={styles.value}>{value}</div>
                {percentage !== undefined && (
                    <div className={styles.percentage}>{percentage}%</div>
                )}
            </div>
            {icon && <div className={styles.icon}>{icon}</div>}
        </div>
    );
}
