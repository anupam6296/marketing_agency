import Link from 'next/link';
import styles from './admin.module.css';
import { LayoutDashboard, Users, FileText, Settings, LogOut } from 'lucide-react';

export const metadata = {
    title: 'Admin Dashboard | Dimagination',
    robots: 'noindex, nofollow',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>Dimagination Admin</div>
                <nav className={styles.nav}>
                    <Link href="/admin/leads" className={styles.navItem}>
                        <Users size={20} /> Leads
                    </Link>
                    <Link href="/admin/posts" className={styles.navItem}>
                        <FileText size={20} /> Blog Posts
                    </Link>
                    <Link href="/admin/work" className={styles.navItem}>
                        <LayoutDashboard size={20} /> Projects
                    </Link>
                    <div className={styles.spacer} />
                    <button className={styles.navItem}>
                        <LogOut size={20} /> Logout
                    </button>
                </nav>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
