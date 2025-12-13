import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';
import { ArrowRight, PlayCircle, Sparkles, Zap, Wand2 } from 'lucide-react';

export function Hero() {
    return (
        <section className={styles.hero}>
            {/* Animated Background Elements */}
            <div className={styles.bgElements}>
                <div className={styles.floatingOrb} style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
                <div className={styles.floatingOrb} style={{ top: '60%', right: '15%', animationDelay: '2s' }} />
                <div className={styles.floatingOrb} style={{ bottom: '30%', left: '20%', animationDelay: '4s' }} />
                <div className={styles.sparkle} style={{ top: '25%', right: '25%', animationDelay: '1s' }}>
                    <Sparkles size={24} />
                </div>
                <div className={styles.sparkle} style={{ bottom: '40%', right: '30%', animationDelay: '3s' }}>
                    <Zap size={20} />
                </div>
                <div className={styles.sparkle} style={{ top: '50%', left: '15%', animationDelay: '5s' }}>
                    <Wand2 size={22} />
                </div>
            </div>

            <div className={styles.blob} aria-hidden="true" />

            <div className={styles.content}>
                <div className={styles.badge}>
                    <Sparkles size={16} />
                    <span>Where Digital Meets Imagination</span>
                </div>

                <h1 className={styles.title}>
                    <span className={styles.word}>Turning</span>{' '}
                    <span className={styles.highlight}>
                        <span className={styles.imaginationText}>imagination</span>
                    </span>
                    <br />
                    <span className={styles.word}>into</span>{' '}
                    <span className={styles.gradientText}>measurable growth.</span>
                </h1>

                <p className={styles.description}>
                    Dimagination is the strategic performance agency for startups and SMBs.
                    We combine bold creativity with data-driven marketing to scale your brand.
                </p>

                <div className={styles.actions}>
                    <Button href="/contact" size="lg" rightIcon={<ArrowRight size={20} />} className={styles.primaryBtn}>
                        Book a Strategy Call
                    </Button>
                    <Button href="/work" variant="outline" size="lg" leftIcon={<PlayCircle size={20} />}>
                        View Our Work
                    </Button>
                </div>

                <div className={styles.metrics}>
                    <div className={styles.metric}>
                        <span className={styles.number}>$50M+</span>
                        <span className={styles.label}>Revenue Generated</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.number}>200+</span>
                        <span className={styles.label}>Brands Scaled</span>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.number}>15x</span>
                        <span className={styles.label}>Average ROI</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
