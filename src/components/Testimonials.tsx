"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Arjun Sharma",
        role: "Wedding Client",
        content: "The food was incredible! Every guest at our wedding was impressed by the taste and the presentation. Highly recommended!",
        rating: 5,
    },
    {
        name: "Priya Lakshmi",
        role: "Birthday Party",
        content: "Excellent service and mouth-watering dishes. They managed everything so professionally. Thank you MJM Catering!",
        rating: 5,
    },
    {
        name: "Robert Wilson",
        role: "Corporate Event",
        content: "A premium experience from start to finish. The gold-themed setup perfectly matched our event's luxury feel.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 text-sm sm:text-base font-sans font-bold uppercase tracking-widest mb-2"
                    >
                        Customer Reviews
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold"
                    >
                        Notes of <span className="text-gold-gradient">Appreciation</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl relative group"
                        >
                            <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gold-500 opacity-10 group-hover:opacity-30 transition-opacity" size={32} />
                            <div className="flex gap-1 mb-4 sm:mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                                ))}
                            </div>
                            <p className="text-white/70 sm:text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-sans">
                                "{t.content}"
                            </p>
                            <div>
                                <h4 className="text-lg sm:text-xl font-serif font-bold text-gold-500">{t.name}</h4>
                                <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
