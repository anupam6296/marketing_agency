'use client';

import image1 from '@/assets/testimonials/1.jpg'; // Placeholder assumption
import { useState } from 'react';
import styles from './Testimonials.module.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { clsx } from 'clsx';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'CMO at FinTechly',
        content: 'Dimagination completely transformed our digital presence. Our leads increased by 200% in the first quarter alone.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Marcus Chen',
        role: 'Founder, EcoWare',
        content: 'The creativity and strategic depth this team brings is unmatched. They don’t just run ads; they build brands.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Marketing Director, BrightSide',
        content: 'Professional, data-driven, and incredibly talented. The new website design has received endless compliments.',
        rating: 5,
    }
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Client Success Stories</h2>

                <div className={styles.carousel}>
                    <button onClick={prev} className={styles.navButton} aria-label="Previous testimonial">
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.card}>
                        <div className={styles.stars}>
                            {[...Array(testimonials[current].rating)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" className={styles.star} />
                            ))}
                        </div>
                        <p className={styles.quote}>"{testimonials[current].content}"</p>
                        <div className={styles.author}>
                            <p className={styles.name}>{testimonials[current].name}</p>
                            <p className={styles.role}>{testimonials[current].role}</p>
                        </div>
                    </div>

                    <button onClick={next} className={styles.navButton} aria-label="Next testimonial">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={clsx(styles.dot, i === current && styles.activeDot)}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
