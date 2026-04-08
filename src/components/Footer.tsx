"use client";

import React from "react";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 pt-12 sm:pt-20 pb-6 sm:pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient mb-4 sm:mb-6">MJM</h2>
                        <p className="text-white/50 leading-relaxed font-sans text-sm sm:text-base mb-6 sm:mb-8">
                            Providing high-quality cooking and catering services for all types of events with authentic taste and professional service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500 transition-all">
                                <Globe size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500 transition-all">
                                <MessageCircle size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500 transition-all">
                                <Send size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-4 sm:mb-8">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-4 text-white/50 font-sans text-sm sm:text-base">
                            <li><a href="#home" className="hover:text-gold-500 transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
                            <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
                            <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
                            <li><a href="#menu" className="hover:text-gold-500 transition-colors">Special Menu</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-4 sm:mb-8">Our Services</h3>
                        <ul className="space-y-2 sm:space-y-4 text-white/50 font-sans text-sm sm:text-base">
                            <li>Weddings</li>
                            <li>Birthday Parties</li>
                            <li>Baby Showers</li>
                            <li>House Warming</li>
                            <li>Temple Poojas</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-4 sm:mb-8">Contact Us</h3>
                        <ul className="space-y-3 sm:space-y-4 text-white/50 font-sans text-sm sm:text-base">
                            <li className="flex gap-3">
                                <Phone className="text-gold-500 shrink-0" size={18} />
                                <div>
                                    <p>7305658754</p>
                                    <p>6369534257</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-gold-500 shrink-0" size={18} />
                                <p>info@mjmcatering.com</p>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="text-gold-500 shrink-0" size={18} />
                                <p>Ithalar, The Nilgiris, Tamil Nadu</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 sm:pt-8 text-center text-white/30 text-xs sm:text-sm font-sans">
                    <p>© {new Date().getFullYear()} MJM Catering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
