import Link from 'next/link';
import styles from './blog.module.css';
import { Button } from '@/components/ui/Button/Button';

export const metadata = {
    title: 'Blog | Dimagination',
    description: 'Insights on marketing, branding, and growth.',
};

const posts = [
    {
        slug: 'future-of-seo-2025',
        title: 'The Future of SEO in 2025: AI Overviews',
        excerpt: 'How Google SGE is changing the landscape and what brands need to do to stay visible.',
        date: 'Dec 10, 2024',
        tags: ['SEO', 'AI']
    },
    {
        slug: 'viral-marketing-myth',
        title: 'The Viral Marketing Myth',
        excerpt: 'Why chasing vitality is a bad strategy for sustainable growth, and what to do instead.',
        date: 'Nov 28, 2024',
        tags: ['Strategy', 'Social']
    },
    {
        slug: 'design-systems-guide',
        title: 'Why Your Startup Needs a Design System',
        excerpt: 'Scaling your product? Here is why a design system saves you money in the long run.',
        date: 'Nov 15, 2024',
        tags: ['Design', 'Product']
    }
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Insights & Ideas</h1>
                    <p className={styles.subtitle}>
                        Thoughts on the ever-changing landscape of digital.
                    </p>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                {/* Image would go here */}
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{post.date}</span>
                                    <div className={styles.tags}>
                                        {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                                    </div>
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>Read Article &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
