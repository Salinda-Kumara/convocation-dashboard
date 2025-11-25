'use client';

import { useState, useMemo, useEffect } from 'react';
import StatsCard from '@/components/StatsCard';
import SearchBar from '@/components/SearchBar';
import DataTable from '@/components/DataTable';
import StatusChart from '@/components/StatusChart';
import styles from './DashboardClient.module.css';

export default function DashboardClient({ headers: initialHeaders, rows: initialRows, stats: initialStats, fieldStats: initialFieldStats, totalStudents: initialTotalStudents }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState(null);
    const [headers, setHeaders] = useState(initialHeaders);
    const [rows, setRows] = useState(initialRows);
    const [stats, setStats] = useState(initialStats);
    const [fieldStats, setFieldStats] = useState(initialFieldStats);
    const [totalStudents, setTotalStudents] = useState(initialTotalStudents);

    // Auto-refresh data every 3 seconds
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                if (response.ok) {
                    const data = await response.json();
                    setHeaders(data.headers);
                    setRows(data.rows);
                    setStats(data.stats);
                    setFieldStats(data.fieldStats);
                    setTotalStudents(data.totalStudents);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const filteredRows = useMemo(() => {
        let result = rows;

        // Apply status filter
        if (activeFilter) {
            result = result.filter(row => {
                const rowText = row.join(' ').toLowerCase();

                if (activeFilter === 'approved') {
                    return rowText.includes('approved') || rowText.includes('confirmed');
                } else if (activeFilter === 'notSubmitted') {
                    return rowText.includes('not submitted') || rowText.includes('not paid');
                }

                return true;
            });
        }

        // Apply search filter
        if (searchTerm) {
            result = result.filter(row => {
                const searchLower = searchTerm.toLowerCase();
                return row.some(cell =>
                    cell && cell.toString().toLowerCase().includes(searchLower)
                );
            });
        }

        return result;
    }, [rows, searchTerm, activeFilter]);

    const handleFilterClick = (filterType) => {
        setActiveFilter(activeFilter === filterType ? null : filterType);
    };

    const handleExport = () => {
        // Create CSV content
        const csvContent = [
            headers.join(','),
            ...filteredRows.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');

        // Create download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `convocation-status-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Status Chart */}
            <div className={styles.chartSection}>
                <StatusChart stats={stats} />
            </div>

            {/* Stats Grid - Moved above table */}
            <div className={styles.statsGrid}>
                <StatsCard
                    label="Total Students"
                    value={stats.total}
                    icon="👥"
                    color="blue"
                    onClick={() => setActiveFilter(null)}
                    isActive={activeFilter === null}
                />
                <StatsCard
                    label="Approved"
                    value={stats.approved}
                    icon="✓"
                    color="green"
                    onClick={() => handleFilterClick('approved')}
                    isActive={activeFilter === 'approved'}
                />
                <StatsCard
                    label="Not Submitted"
                    value={stats.notSubmitted}
                    icon="✗"
                    color="red"
                    onClick={() => handleFilterClick('notSubmitted')}
                    isActive={activeFilter === 'notSubmitted'}
                />
            </div>

            {/* Search Bar */}
            <div className={styles.searchSection}>
                <SearchBar
                    onSearch={setSearchTerm}
                    placeholder="Search by name or registration number..."
                />
                <div className={styles.actions}>
                    {activeFilter && (
                        <span className={styles.filterBadge}>
                            Filtered: {activeFilter === 'approved' ? 'Approved' : 'Not Submitted'} •{' '}
                        </span>
                    )}
                    <span className={styles.resultCount}>
                        Showing {filteredRows.length} of {rows.length} students
                    </span>
                    <button onClick={handleExport} className={styles.exportBtn}>
                        📥 Export CSV
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <DataTable headers={headers} rows={filteredRows} />
        </>
    );
}
