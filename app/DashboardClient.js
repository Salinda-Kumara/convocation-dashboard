'use client';

import { useState, useMemo, useEffect } from 'react';
import StatsCard from '@/components/StatsCard';
import SearchBar from '@/components/SearchBar';
import DataTable from '@/components/DataTable';
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
                const statusFields = row.slice(4); // Skip first 4 columns

                if (activeFilter === 'submitted') {
                    return rowText.includes('approved') || rowText.includes('confirmed');
                } else if (activeFilter === 'allApproved') {
                    // Check if ALL fields are approved/confirmed
                    return statusFields.length > 0 && statusFields.every(field => {
                        const fieldLower = (field || '').toLowerCase();
                        return fieldLower.includes('approved') || fieldLower.includes('confirmed');
                    });
                } else if (activeFilter === 'pending') {
                    return rowText.includes('pending');
                } else if (activeFilter === 'notSubmitted') {
                    return rowText.includes('not submitted') || rowText.includes('not paid');
                } else if (activeFilter === 'incomplete') {
                    // Has at least one "not submitted" and at least one other status
                    const hasNotSubmitted = statusFields.some(field => {
                        const fieldLower = (field || '').toLowerCase();
                        return fieldLower.includes('not submitted') || fieldLower.includes('not paid');
                    });
                    const hasOtherStatus = statusFields.some(field => {
                        const fieldLower = (field || '').toLowerCase();
                        return (fieldLower.includes('approved') || fieldLower.includes('confirmed') || fieldLower.includes('pending'));
                    });
                    return hasNotSubmitted && hasOtherStatus;
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
                    label="All Approved"
                    value={stats.allApproved}
                    icon="✓✓"
                    color="purple"
                    onClick={() => handleFilterClick('allApproved')}
                    isActive={activeFilter === 'allApproved'}
                />
                <StatsCard
                    label="Submitted"
                    value={stats.submitted}
                    icon="✓"
                    color="green"
                    onClick={() => handleFilterClick('submitted')}
                    isActive={activeFilter === 'submitted'}
                />
                <StatsCard
                    label="Approval Pending"
                    value={stats.pending}
                    icon="⏳"
                    color="orange"
                    onClick={() => handleFilterClick('pending')}
                    isActive={activeFilter === 'pending'}
                />
                <StatsCard
                    label="Incomplete"
                    value={stats.incomplete}
                    icon="⚠"
                    color="yellow"
                    onClick={() => handleFilterClick('incomplete')}
                    isActive={activeFilter === 'incomplete'}
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
                            Filtered: {
                                activeFilter === 'allApproved' ? 'All Approved' :
                                    activeFilter === 'submitted' ? 'Submitted' :
                                        activeFilter === 'pending' ? 'Approval Pending' :
                                            activeFilter === 'incomplete' ? 'Incomplete' :
                                                'Not Submitted'
                            } •{' '}
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
