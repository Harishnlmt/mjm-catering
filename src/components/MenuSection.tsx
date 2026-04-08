"use client";

import React from "react";
import { motion } from "framer-motion";

const dishes = [
    {
        name: "Classic Biryani",
        description: "Authentic slow-cooked aromatic basmati rice with premium spices and meat.",
        price: "From ₹250",
    },
    {
        name: "Traditional Thali",
        description: "A complete meal featuring seasonal vegetables, dal, rice, and traditional desserts.",
        price: "From ₹350",
    },
    {
        name: "Golden Appetizers",
        description: "A variety of premium starters, from crispy samosas to honey-glazed wings.",
        price: "From ₹150",
    },
    {
        name: "Gourmet Desserts",
        description: "Traditional sweets like Gulab Jamun and modern pastries with a gold touch.",
        price: "From ₹200",
    },
];

const MenuSection = () => {
    return (
        <section id="menu" className="py-24 bg-zinc-950/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 text-sm sm:text-base font-sans font-bold uppercase tracking-widest mb-2"
                    >
                        Our Specialties
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8"
                    >
                        Sample <span className="text-gold-gradient">Dishes</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={dish.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 group hover:border-gold-500/30 transition-all duration-300"
                        >
                            <div className="flex-1">
                                <h4 className="text-xl sm:text-2xl font-serif font-bold mb-2 group-hover:text-gold-500 transition-colors">{dish.name}</h4>
                                <p className="text-white/60 font-sans text-sm sm:text-base">{dish.description}</p>
                            </div>
                            <div className="text-gold-500 font-bold text-lg sm:text-xl whitespace-nowrap">
                                {dish.price}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <p className="text-white/40 italic font-sans text-xs sm:text-sm mb-6 sm:mb-8">
                        * Custom menus available for all types of events. Contact us for detailed pricing.
                    </p>
                    <a
                        href="https://wa.me/917305658754"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-gold-500 text-gold-500 font-bold text-sm sm:text-base hover:bg-gold-500 hover:text-black transition-all duration-300"
                    >
                        Request Full Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
