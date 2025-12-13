import styles from './TrustLogos.module.css';
import { clsx } from 'clsx';
import { Star } from 'lucide-react';

const logos = [
    'TechFlow', 'Stark Industries', 'Wayne Ent.', 'Cyberdyne',
    'Oscorp', 'Umbrella Corp', 'Massive Dynamic', 'Aperture'
];

export function TrustLogos() {
    return (
        <section className={styles.section}>
            <div className={styles.starIcon}>
                <Star size={20} fill="currentColor" />
            </div>
            <p className={styles.label}>Trusted by forward-thinking companies</p>
            <div className={styles.scroller}>
                <div className={styles.track}>
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={`${logo}-${i}`} className={styles.logoItem}>
                            <span className={styles.logoText}>{logo}</span>
                            <div className={styles.logoShine} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
