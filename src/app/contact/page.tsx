import { ContactForm } from '@/components/contact/ContactForm/ContactForm';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us | Dimagination',
    description: 'Get in touch for a free strategy audit or to discuss your next project.',
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Let’s build something great.</h1>
                    <p className={styles.subtitle}>
                        Ready to grow? Fill out the form or book a call directly.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.contactCard}>
                            <h3>Contact Info</h3>
                            <div className={styles.item}>
                                <Mail className={styles.icon} />
                                <a href="mailto:hello@dimagination.com">hello@dimagination.com</a>
                            </div>
                            <div className={styles.item}>
                                <Phone className={styles.icon} />
                                <a href="tel:+15550000000">+1 (555) 000-0000</a>
                            </div>
                            <div className={styles.item}>
                                <MapPin className={styles.icon} />
                                <span>123 Innovation Dr, Tech City</span>
                            </div>
                        </div>

                        <div className={styles.calendarCard}>
                            <h3>Book a Call</h3>
                            <p>Skip the email tag and schedule a 15-min discovery call.</p>
                            <div className={styles.calendarPlaceholder}>
                                <Calendar size={32} />
                                <span>Calendar Embed Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
