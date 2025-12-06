'use client';

import { useState, useMemo, useEffect } from 'react';
import StatsCard from '@/components/StatsCard';
import SearchBar from '@/components/SearchBar';
import DataTable from '@/components/DataTable';
import styles from './DashboardClient.module.css';

export default function DashboardClient({ headers: initialHeaders, rows: initialRows, stats: initialStats, fieldStats: initialFieldStats, totalStudents: initialTotalStudents }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeList, setActiveList] = useState(null);

    // Define list ranges for S.No filtering
    const listRanges = {
        list1: { min: 1, max: 61, label: 'List 1 (1-61)' },
        list2: { min: 62, max: 107, label: 'List 2 (62-107)' },
        list3: { min: 108, max: 211, label: 'List 3 (108-211)' },
        list4: { min: 212, max: 258, label: 'List 4 (212-258)' },
        list5: { min: 259, max: 308, label: 'List 5 (259-308)' },
    };
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

        const interval = setInterval(fetchData, 30000); // Fetch every 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Define required columns for "All Approved" check
    const requiredColumns = [
        'Supplication Form',
        'SAB Alumni Registration Form',
        'Exit Interview Form',
        'Finance Clearance Form',
        'Convocation Payment'
    ];

    // Get rows filtered by list only (for stats calculation)
    const listFilteredRows = useMemo(() => {
        if (!activeList || !listRanges[activeList]) return rows;
        const { min, max } = listRanges[activeList];
        return rows.filter(row => {
            const sNo = parseInt(row[0], 10);
            return !isNaN(sNo) && sNo >= min && sNo <= max;
        });
    }, [rows, activeList]);

    // Calculate stats based on list-filtered rows
    const filteredStats = useMemo(() => {
        const baseRows = listFilteredRows;

        // Count submitted (at least one required field approved)
        const submitted = baseRows.filter(row => {
            return requiredColumns.some(columnName => {
                const columnIndex = headers.indexOf(columnName);
                if (columnIndex === -1) return false;
                const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                if (fieldValue.includes('not ')) return false;
                return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
            });
        }).length;

        // Count all approved (ALL required fields approved)
        const allApproved = baseRows.filter(row => {
            return requiredColumns.every(columnName => {
                const columnIndex = headers.indexOf(columnName);
                if (columnIndex === -1) return false;
                const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                if (fieldValue.includes('not ')) return false;
                return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
            });
        }).length;

        // Count pending
        const pending = baseRows.filter(row => {
            return row.join(' ').toLowerCase().includes('pending');
        }).length;

        // Count not submitted
        const notSubmitted = baseRows.filter(row => {
            return requiredColumns.every(columnName => {
                const columnIndex = headers.indexOf(columnName);
                if (columnIndex === -1) return false;
                const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                return fieldValue.includes('not submitted') || fieldValue.includes('not paid') || fieldValue.includes('pending') || fieldValue === '';
            });
        }).length;

        // Count incomplete
        const incomplete = baseRows.filter(row => {
            const statusFields = row.slice(4);
            const hasNotSubmitted = statusFields.some(field => {
                const fieldLower = (field || '').toLowerCase();
                return fieldLower.includes('not submitted') || fieldLower.includes('not paid');
            });
            const hasOtherStatus = statusFields.some(field => {
                const fieldLower = (field || '').toLowerCase();
                return fieldLower.includes('approved') || fieldLower.includes('confirmed') || fieldLower.includes('pending');
            });
            return hasNotSubmitted && hasOtherStatus;
        }).length;

        // Count total guests (sum of "No of Guests" column - handle newlines)
        const guestColumnIndex = headers.findIndex(h =>
            h.toLowerCase().replace(/\n/g, ' ').includes('no of guests')
        );
        const totalGuests = guestColumnIndex !== -1
            ? baseRows.reduce((sum, row) => sum + (parseInt(row[guestColumnIndex], 10) || 0), 0)
            : 0;

        return {
            total: baseRows.length,
            submitted,
            allApproved,
            pending,
            notSubmitted,
            incomplete,
            totalGuests
        };
    }, [listFilteredRows, headers]);

    const filteredRows = useMemo(() => {
        let result = rows;

        // Apply status filter
        if (activeFilter) {
            result = result.filter(row => {
                const rowText = row.join(' ').toLowerCase();
                const statusFields = row.slice(4); // Skip first 4 columns

                if (activeFilter === 'submitted') {
                    return requiredColumns.some(columnName => {
                        const columnIndex = headers.indexOf(columnName);
                        if (columnIndex === -1) return false;
                        const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                        // Exclude negative statuses first
                        if (fieldValue.includes('not ')) return false;
                        return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
                    });
                } else if (activeFilter === 'allApproved') {
                    // Check if ALL REQUIRED fields are approved/confirmed
                    return requiredColumns.every(columnName => {
                        const columnIndex = headers.indexOf(columnName);
                        if (columnIndex === -1) return false; // Column doesn't exist
                        const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                        // Exclude negative statuses first
                        if (fieldValue.includes('not ')) return false;
                        return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
                    });
                } else if (activeFilter === 'pending') {
                    return rowText.includes('pending');
                } else if (activeFilter === 'notSubmitted') {
                    return requiredColumns.every(columnName => {
                        const columnIndex = headers.indexOf(columnName);
                        if (columnIndex === -1) return false;
                        const fieldValue = (row[columnIndex] || '').toLowerCase().trim();
                        return fieldValue.includes('not submitted') || fieldValue.includes('not paid') || fieldValue.includes('pending') || fieldValue === '';
                    });
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

        // Apply list filter (S.No range)
        if (activeList && listRanges[activeList]) {
            const { min, max } = listRanges[activeList];
            result = result.filter(row => {
                const sNo = parseInt(row[0], 10); // S.No is first column
                return !isNaN(sNo) && sNo >= min && sNo <= max;
            });
        }

        return result;
    }, [rows, searchTerm, activeFilter, activeList, headers]);

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
                    value={filteredStats.total}
                    icon="👥"
                    color="blue"
                    onClick={() => setActiveFilter(null)}
                    isActive={activeFilter === null}
                />
                <StatsCard
                    label="All Approved"
                    value={filteredStats.allApproved}
                    icon="✓✓"
                    color="purple"
                    onClick={() => handleFilterClick('allApproved')}
                    isActive={activeFilter === 'allApproved'}
                />
                <StatsCard
                    label="Submitted"
                    value={filteredStats.submitted}
                    icon="✓"
                    color="green"
                    onClick={() => handleFilterClick('submitted')}
                    isActive={activeFilter === 'submitted'}
                />
                <StatsCard
                    label="Approval Pending"
                    value={filteredStats.pending}
                    icon="⏳"
                    color="orange"
                    onClick={() => handleFilterClick('pending')}
                    isActive={activeFilter === 'pending'}
                />
                <StatsCard
                    label="Incomplete"
                    value={filteredStats.incomplete}
                    icon="⚠"
                    color="yellow"
                    onClick={() => handleFilterClick('incomplete')}
                    isActive={activeFilter === 'incomplete'}
                />
                <StatsCard
                    label="Not Submitted"
                    value={filteredStats.notSubmitted}
                    icon="✗"
                    color="red"
                    onClick={() => handleFilterClick('notSubmitted')}
                    isActive={activeFilter === 'notSubmitted'}
                />
                <StatsCard
                    label="Total Guests"
                    value={filteredStats.totalGuests || 0}
                    icon="👨‍👩‍👧‍👦"
                    color="cyan"
                    onClick={() => { }} // No filter for guests
                    isActive={true} // Always active or maybe false? Let's keep it consistent visually.
                />
            </div>

            {/* Search Bar */}
            <div className={styles.searchSection}>
                <SearchBar
                    onSearch={setSearchTerm}
                    placeholder="Search by name or registration number..."
                />
                <div className={styles.listFilterWrapper}>
                    <span className={styles.listFilterLabel}>Select List</span>
                    <select
                        className={styles.listFilter}
                        value={activeList || ''}
                        onChange={(e) => setActiveList(e.target.value || null)}
                    >
                        <option value="">All Students</option>
                        {Object.entries(listRanges).map(([key, { label }]) => (
                            <option key={key} value={key}>{label}</option>
                        ))}
                    </select>
                </div>
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
