"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Cooking", "Catering Setup", "Events"];

const galleryImages = [
    { id: 1, category: "Cooking", title: "Authentic Preparation", url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=640&auto=format&fit=crop" },
    { id: 2, category: "Catering Setup", title: "Elegant Buffet", url: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=640&auto=format&fit=crop" },
    { id: 3, category: "Events", title: "Wedding Celebration", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=640&auto=format&fit=crop" },
    { id: 4, category: "Cooking", title: "Traditional Flavors", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=640&auto=format&fit=crop" },
    { id: 5, category: "Catering Setup", title: "Fine Dining Ritual", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=640&auto=format&fit=crop" },
    { id: 6, category: "Events", title: "Festival Feast", url: "https://images.unsplash.com/photo-1520111663212-d04b898a9660?q=80&w=640&auto=format&fit=crop" },
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
                    <h2 className="text-gold-500 text-xs sm:text-sm font-sans font-bold uppercase tracking-widest mb-2 sm:mb-4">
                        Media Gallery
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8">
                        Visual Journey of <span className="text-gold-gradient">Taste</span>
                    </h3>

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {filteredImages.map((img) => (
                            <div
                                key={img.id}
                                className="relative aspect-square rounded-lg sm:rounded-2xl overflow-hidden group border border-white/5 transition-transform duration-500 hover:-translate-y-0.5"
                            >
                                <Image
                                    src={img.url}
                                    alt={img.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={70}
                                    className="object-cover md:transition-transform md:duration-700 md:group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                                    <div>
                                        <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">{img.category}</span>
                                        <h4 className="text-white font-serif text-lg sm:text-xl font-bold">{img.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
