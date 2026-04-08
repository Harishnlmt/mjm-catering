"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-500/5 blur-[150px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-gold-500 font-sans font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                        Exquisite Taste, Professional Service
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
                        MJM <span className="text-gold-gradient">Catering</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto font-sans mb-6 sm:mb-10 italic">
                        "You invite people, we impress them"
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <motion.a
                            href="tel:7305658754"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gold-500 text-black font-bold text-sm sm:text-base md:text-lg hover:bg-gold-400 transition-all gold-glow w-full sm:w-auto justify-center"
                        >
                            <Phone size={18} /> Call Now
                        </motion.a>
                        <motion.a
                            href="https://wa.me/917305658754"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-gold text-gold-500 font-bold text-sm sm:text-base md:text-lg hover:bg-gold-500/10 transition-all w-full sm:w-auto justify-center"
                        >
                            <MessageSquare size={18} /> WhatsApp
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-gold-500/50"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
