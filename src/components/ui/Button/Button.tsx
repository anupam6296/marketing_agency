import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export function Button({
    children,
    className,
    variant = 'primary',
    size = 'md',
    href,
    isLoading,
    leftIcon,
    rightIcon,
    disabled,
    ...props
}: ButtonProps) {
    const buttonClass = clsx(
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
        className
    );

    const content = (
        <>
            {isLoading && <Loader2 className={styles.spinner} size={16} />}
            {!isLoading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            <span>{children}</span>
            {!isLoading && rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
    );

    if (href && !disabled && !isLoading) {
        return (
            <Link href={href} className={buttonClass}>
                {content}
            </Link>
        );
    }

    return (
        <button className={buttonClass} disabled={disabled || isLoading} {...props}>
            {content}
        </button>
    );
}
