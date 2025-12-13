import { Button } from '@/components/ui/Button/Button';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata = {
    title: 'About Us | Dimagination',
    description: 'We are a team of dreamers and doers turning imagination into reality.',
};

const team = [
    { name: 'Alex Dimagio', role: 'Founder & CEO', bio: 'Visionary with 10 years in diverse marketing roles.' },
    { name: 'Sarah Lee', role: 'Head of Creative', bio: 'Award-winning designer with a passion for bold aesthetics.' },
    { name: 'Mike Ross', role: 'Tech Lead', bio: 'Full-stack wizard ensuring pixel-perfect execution.' },
];

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Story Section */}
                <section className={styles.hero}>
                    <h1 className={styles.title}>About Dimagination.</h1>
                    <div className={styles.story}>
                        <p>
                            "Dimagination" combines <b>Digital</b> + <b>Imagination</b>. We believe that creativity without data is just art, and data without creativity is just numbers.
                        </p>
                        <p>
                            Founded in 2024, we set out to bridge the gap between "boring performance agencies" and "pretty creative shops". We do both. We build brands that look good and sell better.
                        </p>
                    </div>
                </section>

                {/* Values Section */}
                <section className={styles.valuesSection}>
                    <div className={styles.valueCard}>
                        <h3>Boldness</h3>
                        <p>We take risks. Safe is risky in a crowded world.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Transparency</h3>
                        <p>No hidden fees. No jargon. Just clear results.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Execution</h3>
                        <p>Ideas are cheap. We pride ourselves on getting things done.</p>
                    </div>
                </section>

                {/* Team Section */}
                <section className={styles.teamSection}>
                    <h2 className={styles.sectionTitle}>Meet the Team</h2>
                    <div className={styles.teamGrid}>
                        {team.map((member, i) => (
                            <div key={i} className={styles.memberCard}>
                                <div className={styles.avatarPlaceholder} />
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                                <p className={styles.memberBio}>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <h2>Join our journey</h2>
                    <p>We are always looking for talent and new partners.</p>
                    <div className={styles.ctaActions}>
                        <Button href="/contact" variant="primary">Work with us</Button>
                        <Button href="mailto:careers@dimagination.com" variant="outline">Join the team</Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
