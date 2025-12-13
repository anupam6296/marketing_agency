import { Button } from '@/components/ui/Button/Button';
import styles from './page.module.css';
import { BarChart3, Palette, Globe, Search, Megaphone, PenTool, CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'Our Services | Dimagination',
    description: 'Performance marketing, branding, web design, and SEO services.',
};

const servicesList = [
    {
        id: 'performance',
        title: 'Performance Marketing',
        icon: <BarChart3 size={40} />,
        description: 'We run high-ROAS campaigns on Meta, Google, LinkedIn, and TikTok. We focus on acquisition costs and lifetime value.',
        features: ['Campaign Strategy', 'Ad Copy & Creative', 'A/B Testing', 'Conversion Tracking', 'Weekly Reporting']
    },
    {
        id: 'branding',
        title: 'Branding & Identity',
        icon: <Palette size={40} />,
        description: 'Your brand is more than a logo. We define your voice, visual identity, and positioning to stand out in a crowded market.',
        features: ['Logo Design', 'Brand Guidelines', 'Tone of Voice', 'Visual Assets', 'Rebranding']
    },
    {
        id: 'web',
        title: 'Web Design & Development',
        icon: <Globe size={40} />,
        description: 'We build fast, responsive, and SEO-friendly websites that convert visitors into customers.',
        features: ['UX/UI Design', 'Next.js Development', 'CMS Integration', 'Landing Pages', 'Performance Optimization']
    },
    {
        id: 'seo',
        title: 'SEO & Content',
        icon: <Search size={40} />,
        description: 'Long-term organic growth strategies. We help you dominate search results for high-intent keywords.',
        features: ['Technical SEO Audit', 'Keyword Strategy', 'Content Writing', 'Link Building', 'Local SEO']
    },
    {
        id: 'social',
        title: 'Social Media Management',
        icon: <Megaphone size={40} />,
        description: 'Building communities around your brand with engaging content and active management.',
        features: ['Content Calendar', 'Community Engagement', 'Influencer Marketing', 'Analytics', 'Trend Monitoring']
    },
    {
        id: 'creative',
        title: 'Creative Production',
        icon: <PenTool size={40} />,
        description: 'Visuals that sell. From static banners to high-production video ads.',
        features: ['Video Editing', 'Motion Graphics', 'Ad Banners', 'Photography', 'Graphic Design']
    }
];

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Services built for growth.</h1>
                    <p className={styles.subtitle}>
                        A comprehensive suite of digital capabilities to scale your business from every angle.
                    </p>
                </div>

                <div className={styles.grid}>
                    {servicesList.map((service) => (
                        <div key={service.id} id={service.id} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <div className={styles.content}>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <ul className={styles.features}>
                                    {service.features.map((feature, index) => (
                                        <li key={index} className={styles.feature}>
                                            <CheckCircle2 size={16} className={styles.check} /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.action}>
                                <Button href="/contact" variant="outline" size="sm">
                                    Inquire specific
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <h2>Not sure what you need?</h2>
                    <p>Let's hop on a call and figure it out together.</p>
                    <Button href="/contact" size="lg" variant="primary">
                        Book a Free Consultation
                    </Button>
                </div>
            </div>
        </div>
    );
}
