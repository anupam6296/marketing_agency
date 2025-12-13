'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import styles from './ContactForm.module.css';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Gather form data
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Failed to submit');

            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className={styles.success}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll be in touch within 24 hours.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.grid}>
                <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" placeholder="Acme Inc." />
                </div>

                <div className={styles.field}>
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget">
                        <option value="">Select a range</option>
                        <option value="<5k">$1k - $5k</option>
                        <option value="5k-10k">$5k - $10k</option>
                        <option value="10k-50k">$10k - $50k</option>
                        <option value="50k+">$50k+</option>
                    </select>
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project goals..."
                />
            </div>

            {status === 'error' && (
                <div className={styles.error}>
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                </div>
            )}

            <Button
                type="submit"
                size="lg"
                isLoading={status === 'submitting'}
                className="w-full"
                rightIcon={status !== 'submitting' && <Send size={18} />}
            >
                Send Message
            </Button>
        </form>
    );
}
