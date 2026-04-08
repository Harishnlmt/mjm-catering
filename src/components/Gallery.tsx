"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Cooking", "Catering Setup", "Events"];

const galleryImages = [
    { id: 1, category: "Cooking", title: "Authentic Preparation", url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" },
    { id: 2, category: "Catering Setup", title: "Elegant Buffet", url: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop" },
    { id: 3, category: "Events", title: "Wedding Celebration", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" },
    { id: 4, category: "Cooking", title: "Traditional Flavors", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop" },
    { id: 5, category: "Catering Setup", title: "Fine Dining Ritual", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" },
    { id: 6, category: "Events", title: "Festival Feast", url: "https://images.unsplash.com/photo-1520111663212-d04b898a9660?q=80&w=800&auto=format&fit=crop" },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section id="gallery" className="py-16 sm:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 text-xs sm:text-sm font-sans font-bold uppercase tracking-widest mb-2 sm:mb-4"
                    >
                        Media Gallery
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8"
                    >
                        Visual Journey of <span className="text-gold-gradient">Taste</span>
                    </motion.h3>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 sm:px-6 py-2 rounded-full border text-xs sm:text-sm transition-all duration-300 ${activeCategory === cat
                                        ? "bg-gold-500 border-gold-500 text-black font-bold"
                                        : "border-white/20 text-white/60 hover:border-gold-500/50 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative aspect-square rounded-lg sm:rounded-2xl overflow-hidden group border border-white/5"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                                    <div>
                                        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">{img.category}</span>
                                        <h4 className="text-white font-serif text-lg sm:text-xl font-bold">{img.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
