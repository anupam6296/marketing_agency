'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { Button } from '@/components/ui/Button/Button';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';

import { ThemeToggle } from '@/components/ui/ThemeToggle/ThemeToggle';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Dimagination<span className={styles.dot}>.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(styles.navLink, pathname === link.href && styles.active)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Button href="/contact" variant="primary" size="sm">
                        Book a Call
                    </Button>
                </nav>

                {/* Mobile Filter Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={clsx(styles.mobileNav, mobileMenuOpen && styles.open)}>
                    <div className={styles.mobileNavContent}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className={styles.mobileCta}>
                            <Button href="/contact" variant="primary" size="lg" className="w-full">
                                Book a Strategy Call
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
