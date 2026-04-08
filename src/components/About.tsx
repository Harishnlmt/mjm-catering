"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-24 bg-zinc-950/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden glass gold-glow-hover border border-gold-500/20">
                            {/* Owner Image Placeholder */}
                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-gold-500/30 italic text-xs sm:text-base">
                                [Owner Image Placeholder]
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                                <p className="text-gold-500 font-serif text-lg sm:text-2xl font-bold">MJM Catering Team</p>
                                <p className="text-white/60 text-xs sm:text-sm">Dedicated to taste</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-gold-500 opacity-30" />
                        <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-gold-500 opacity-30" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-gold-500 text-xs sm:text-sm font-sans font-bold uppercase tracking-widest mb-2 sm:mb-4">
                            Our Story
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
                            Crafting Culinary <br className="hidden sm:block" />
                            <span className="text-gold-gradient">Experiences</span>
                        </h3>

                        <div className="space-y-4 sm:space-y-6 text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
                            <p>
                                We provide high-quality cooking and catering services for all types of events with authentic taste and professional service.
                            </p>
                            <p>
                                At MJM Catering, we believe that every event is unique and deserves a menu that reflects its significance. From traditional temple poojas to modern corporate events, we bring the same level of dedication and passion to every dish we serve.
                            </p>
                            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                    <h4 className="text-gold-500 text-2xl sm:text-3xl font-serif font-bold mb-1">10+</h4>
                                    <p className="text-xs sm:text-sm uppercase tracking-wider text-white/40">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-gold-500 text-2xl sm:text-3xl font-serif font-bold mb-1">500+</h4>
                                    <p className="text-xs sm:text-sm uppercase tracking-wider text-white/40">Events Served</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
