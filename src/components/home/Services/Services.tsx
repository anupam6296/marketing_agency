import Link from 'next/link';
import styles from './Services.module.css';
import { BarChart3, Palette, Globe, Search, Megaphone, PenTool } from 'lucide-react';
import { clsx } from 'clsx';

const services = [
    {
        icon: <BarChart3 size={32} />,
        title: 'Performance Marketing',
        description: 'Data-driven campaigns on Meta, Google, and LinkedIn that maximize ROI.',
        link: '/services#performance'
    },
    {
        icon: <Palette size={32} />,
        title: 'Branding & Identity',
        description: 'Crafting memorable brand stories, visual identities, and guidelines.',
        link: '/services#branding'
    },
    {
        icon: <Globe size={32} />,
        title: 'Web Design & Dev',
        description: 'High-conversion websites and landing pages built for speed and aesthetics.',
        link: '/services#web'
    },
    {
        icon: <Search size={32} />,
        title: 'SEO & Content',
        description: 'Organic growth strategies that put your brand at the top of search results.',
        link: '/services#seo'
    },
    {
        icon: <Megaphone size={32} />,
        title: 'Social Media Mgmt',
        description: 'Engaging community management and content calendars that build loyalty.',
        link: '/services#social'
    },
    {
        icon: <PenTool size={32} />,
        title: 'Creative Production',
        description: 'Ad creatives, motion graphics, and videos that stop the scroll.',
        link: '/services#creative'
    }
];

export function Services() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Expertise</h2>
                    <p className={styles.subtitle}>
                        Comprehensive digital solutions to fuel your growth engine.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link key={index} href={service.link} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
