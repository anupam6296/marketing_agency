import Link from 'next/link';
import styles from './work.module.css';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export const metadata = {
    title: 'Our Work | Dimagination',
    description: 'Case studies of brands we have scaled.',
};

// Mock Data - In production replace with prisma.caseStudy.findMany()
const caseStudies = [
    {
        slug: 'fintech-growth',
        title: 'Scaling FinTechly to 10k Users',
        category: 'Performance Marketing',
        image: '', // Use CSS placeholder
        excerpt: 'How we used LinkedIn Ads and a revamped landing page to lower CAC by 40%.'
    },
    {
        slug: 'ecoware-rebrand',
        title: 'EcoWare Global Rebrand',
        category: 'Branding & Identity',
        image: '',
        excerpt: 'A complete visual overhaul for a sustainable goods giant, resulting in 20% brand lift.'
    },
    {
        slug: 'urban-eats-seo',
        title: 'Dominating Local SEO for Urban Eats',
        category: 'SEO',
        image: '',
        excerpt: 'Tripling organic traffic in 6 months through hyper-local content strategy.'
    }
];

export default function WorkPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Selected Work</h1>
                    <p className={styles.subtitle}>
                        Results speak louder than words. Here is how we move the needle.
                    </p>
                </div>

                <div className={styles.grid}>
                    {caseStudies.map((project) => (
                        <Link key={project.slug} href={`/work/${project.slug}`} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <span>{project.category}</span>
                            </div>
                            <div className={styles.content}>
                                <h2 className={styles.projectTitle}>
                                    {project.title}
                                    <ArrowUpRight className={styles.arrow} size={24} />
                                </h2>
                                <p className={styles.excerpt}>{project.excerpt}</p>
                                <span className={styles.linkText}>Read Case Study</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <h2>Ready to be our next success story?</h2>
                    <Button href="/contact" size="lg" variant="primary">Start a Project</Button>
                </div>
            </div>
        </div>
    );
}
