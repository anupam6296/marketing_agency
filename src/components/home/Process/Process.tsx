import styles from './Process.module.css';
import { clsx } from 'clsx';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We dive deep into your brand, audience, and goals to build a winning strategy.'
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'We research competitors and define the roadmap with clear KPIs and timelines.'
    },
    {
        number: '03',
        title: 'Execution',
        description: 'Our creatives and experts launch campaigns, build pages, and produce content.'
    },
    {
        number: '04',
        title: 'Optimization',
        description: 'We monitor performance 24/7, A/B test, and scale what works for max ROI.'
    }
];

export function Process() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>How We Work</h2>
                    <p className={styles.subtitle}>From chaos to clarity in four steps.</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.marker}>
                                <span className={styles.number}>{step.number}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
