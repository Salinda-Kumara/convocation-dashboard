'use client';

import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch, placeholder = 'Search...' }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onSearch(newValue);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.searchInput}
            />
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}
