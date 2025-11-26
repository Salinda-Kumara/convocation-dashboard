'use client';

import React, { useState } from 'react';
import styles from './DataTable.module.css';

export default function DataTable({ headers, rows }) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const handleSort = (index) => {
        let direction = 'asc';
        if (sortConfig.key === index && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key: index, direction });
    };

    const sortedRows = React.useMemo(() => {
        if (sortConfig.key === null) return rows;

        return [...rows].sort((a, b) => {
            const aVal = a[sortConfig.key] || '';
            const bVal = b[sortConfig.key] || '';

            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [rows, sortConfig]);

    const getStatusBadge = (status) => {
        if (!status) return null;

        const statusLower = status.toLowerCase();
        let className = styles.badge;

        if (statusLower.includes('in person')) {
            className += ' ' + styles.badgeBlue;
        } else if (statusLower.includes('approved') || statusLower.includes('confirmed') || statusLower.includes('paid') || statusLower.includes('completed') || statusLower.includes('collected') || statusLower.includes('yes') || statusLower.includes('participating') || statusLower.includes('issued')) {
            className += ' ' + styles.badgeSuccess;
        } else if (statusLower.includes('pending')) {
            className += ' ' + styles.badgeWarning;
        } else if (statusLower.includes('not submitted') || statusLower.includes('not paid') || statusLower.includes('no') || statusLower.includes('not participating')) {
            className += ' ' + styles.badgeDanger;
        } else {
            className += ' ' + styles.badgeDefault;
        }

        return <span className={className}>{status}</span>;
    };

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} onClick={() => handleSort(index)} className={styles.sortable}>
                                <div className={styles.headerContent}>
                                    {header}
                                    {sortConfig.key === index && (
                                        <span className={styles.sortIcon}>
                                            {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>
                                    {cellIndex > 2 ? getStatusBadge(cell) || cell : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
