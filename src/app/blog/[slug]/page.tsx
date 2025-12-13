import { Button } from '@/components/ui/Button/Button';
import styles from '../blog.module.css';
import { ChevronLeft } from 'lucide-react';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Mock post content
    const post = {
        title: 'The Future of SEO in 2025: AI Overviews',
        date: 'Dec 10, 2024',
        author: 'Sarah Lee',
        content: `
      <p>Search engines are evolving faster than ever. With the introduction of AI Overviews (SGE), the traditional "10 blue links" are getting pushed further down.</p>
      <h3>What this means for brands</h3>
      <p>It's no longer enough to just target keywords. You need to be the source of truth that the AI cites. This means:</p>
      <ul>
        <li>Higher quality, expert-driven content</li>
        <li>Original data and unique insights</li>
        <li>Strong technical foundations</li>
      </ul>
      <p>At Dimagination, we are already optimizing our clients for this shift...</p>
    `
    };

    return (
        <div className={styles.page}>
            <article className={styles.container} style={{ maxWidth: '800px' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <Button href="/blog" variant="ghost" size="sm" leftIcon={<ChevronLeft size={16} />}>
                        Back to Blog
                    </Button>
                </div>

                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div className={styles.meta} style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                        <span className={styles.date}>{post.date} • by {post.author}</span>
                    </div>
                    <h1 className={styles.title} style={{ fontSize: '2.5rem' }}>{post.title}</h1>
                </header>

                <div className={styles.imagePlaceholder} style={{ marginBottom: '3rem' }}>
                    {/* Cover Image */}
                </div>

                <div
                    style={{
                        fontSize: '1.125rem',
                        lineHeight: 1.8,
                        color: 'var(--foreground)'
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </article>
        </div>
    );
}
