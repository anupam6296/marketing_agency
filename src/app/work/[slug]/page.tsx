import { Button } from '@/components/ui/Button/Button';
import styles from '../work.module.css'; // Reusing styles for simplicity or create new one
import { ChevronLeft } from 'lucide-react';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Mock data fetch
    const project = {
        title: 'Scaling FinTechly to 10k Users',
        category: 'Performance Marketing',
        date: 'October 2023',
        challenge: 'FinTechly was struggling with high CPA on Facebook Ads and low organic traffic.',
        solution: 'We implemented a full-funnel strategy. Top of funnel: Educational video ads. Middle: Webinar retargeting. Bottom: Direct demo booking.',
        results: [
            { label: 'CAC Reduction', value: '40%' },
            { label: 'New Users', value: '+10k' },
            { label: 'ROAS', value: '4.5x' }
        ]
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Button href="/work" variant="ghost" size="sm" leftIcon={<ChevronLeft size={16} />}>
                    Back to Work
                </Button>

                <header className={styles.header} style={{ marginTop: '2rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{project.category}</span>
                    <h1 className={styles.title} style={{ fontSize: '2.5rem' }}>{project.title}</h1>
                    <p className={styles.subtitle}>{project.date}</p>
                </header>

                <div className={styles.grid}>
                    <div className={styles.imagePlaceholder} style={{ background: 'var(--secondary)', height: '400px' }}>
                        {/* Hero Image Mock */}
                        Project Cover Image
                    </div>

                    <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Challenge</h2>
                            <p style={{ lineHeight: 1.6, color: 'var(--muted)' }}>{project.challenge}</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our Approach</h2>
                            <p style={{ lineHeight: 1.6, color: 'var(--muted)' }}>{project.solution}</p>
                        </section>

                        <section style={{ background: 'var(--secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Key Results</h2>
                            <div style={{ display: 'flex', gap: '3rem' }}>
                                {project.results.map((r, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)' }}>{r.value}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{r.label}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
