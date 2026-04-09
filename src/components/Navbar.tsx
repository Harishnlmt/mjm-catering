"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Gallery", href: "#gallery" },
        { name: "Menu", href: "#menu" },
        { name: "Testimonials", href: "#testimonials" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? "md:glass glass-mobile h-16" 
                    : "bg-transparent h-20"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <div className="shrink-0">
                    <Link href="/" className="text-xl sm:text-2xl font-serif font-bold text-gold-gradient">
                        MJM
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs sm:text-sm font-medium text-white/70 hover:text-gold-500 transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/917305658754"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 sm:px-6 py-2 rounded-full bg-gold-500 text-black font-semibold text-xs sm:text-sm hover:bg-gold-400 transition-all gold-glow-hover flex items-center gap-2 whitespace-nowrap"
                    >
                        <MessageSquare size={16} />
                        <span className="hidden sm:inline">Book Now</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white hover:text-gold-500 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-mobile absolute top-full left-0 right-0 p-4 sm:p-6 flex flex-col space-y-3 sm:space-y-4 items-center z-40 animate-in slide-in-from-top-5 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base sm:text-lg font-medium text-white/80 hover:text-gold-500 transition-colors w-full text-center py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-2 sm:gap-3 w-full border-t border-white/10 pt-3 sm:pt-4 mt-2">
                        <a
                            href="tel:7305658754"
                            className="flex items-center justify-center gap-2 w-full py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gold-500 text-gold-500 hover:bg-gold-500/10 transition-colors text-sm sm:text-base"
                        >
                            <Phone size={18} /> Call Now
                        </a>
                        <a
                            href="https://wa.me/917305658754"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gold-500 text-black font-semibold hover:bg-gold-400 transition-all text-sm sm:text-base"
                        >
                            <MessageSquare size={18} /> Book on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
