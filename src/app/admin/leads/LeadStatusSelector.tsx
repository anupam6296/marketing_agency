'use client';

import { useState } from 'react';
import { updateLeadStatus } from '../actions';
import styles from './leads.module.css';
import { clsx } from 'clsx';

export function LeadStatusSelector({ id, currentStatus }: { id: string, currentStatus: string }) {
    const [status, setStatus] = useState(currentStatus);
    const [loading, setLoading] = useState(false);

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
        setLoading(true);
        await updateLeadStatus(id, newStatus);
        setLoading(false);
    };

    return (
        <select
            value={status}
            onChange={handleChange}
            disabled={loading}
            className={clsx(styles.select, styles[status.toLowerCase()])}
        >
            <option value="NEW">New</option>
            <option value="CONTACTED">Contacted</option>
            <option value="WON">Won</option>
            <option value="LOST">Lost</option>
        </select>
    );
}
