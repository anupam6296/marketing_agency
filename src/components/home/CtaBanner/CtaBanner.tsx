import { Button } from '@/components/ui/Button/Button';
import styles from './CtaBanner.module.css';
import { Sparkles } from 'lucide-react';

export function CtaBanner() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to scale your imagination?</h2>
                    <p className={styles.description}>
                        Let's build something extraordinary together. Get your free strategy audit today.
                    </p>
                    <div className={styles.actions}>
                        <Button href="/contact" size="lg" variant="primary">
                            Book Strategy Call
                        </Button>
                        <Button href="/contact" size="lg" variant="ghost" className={styles.ghostBtn}>
                            <Sparkles size={18} /> Get Free Audit
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
