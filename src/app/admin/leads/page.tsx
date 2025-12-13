import { getPrisma } from '@/db/prisma';

// Minimal shape used by the table; avoids relying on generated Prisma types at build time
type LeadRow = {
    id: string;
    name: string;
    email: string;
    company: string | null;
    budget: string | null;
    message: string;
    status: string;
    createdAt: Date;
};
import styles from './leads.module.css';
import { LeadStatusSelector } from './LeadStatusSelector'; // Client component

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
    const prisma = getPrisma();
    const leads: LeadRow[] = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div>
            <h1 className={styles.title}>Leads ({leads.length})</h1>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Budget</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.length === 0 ? (
                            <tr>
                                <td colSpan={7} className={styles.empty}>No leads found.</td>
                            </tr>
                        ) : (
                            leads.map((lead) => (
                                <tr key={lead.id}>
                                    <td>{lead.name}</td>
                                    <td><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                                    <td>{lead.company || '-'}</td>
                                    <td>{lead.budget || '-'}</td>
                                    <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <LeadStatusSelector id={lead.id} currentStatus={lead.status} />
                                    </td>
                                    <td className={styles.messageCol} title={lead.message}>
                                        {lead.message.length > 50 ? `${lead.message.substring(0, 50)}...` : lead.message}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
