import Link from 'next/link';
import styles from './Footer.module.css';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { clsx } from 'clsx';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.branding}>
                        <Link href="/" className={styles.logo}>
                            Dimagination<span className={styles.dot}>.</span>
                        </Link>
                        <p className={styles.tagline}>
                            Turning imagination into measurable growth.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="mailto:hello@dimagination.com" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Services</h4>
                            <ul>
                                <li><Link href="/services#performance">Performance Marketing</Link></li>
                                <li><Link href="/services#branding">Branding</Link></li>
                                <li><Link href="/services#web">Web & Creatives</Link></li>
                                <li><Link href="/services#seo">SEO</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/work">Case Studies</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <ul>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Dimagination. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
