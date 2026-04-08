"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-60 flex flex-col gap-3 sm:gap-4">
            <motion.a
                href="https://wa.me/917305658754"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:shadow-[0_0_20px_#25D366] transition-shadow duration-300"
            >
                <MessageSquare size={24} className="sm:size-28" />
            </motion.a>

            <motion.a
                href="tel:7305658754"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gold-500 flex items-center justify-center text-black shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,1)] transition-shadow duration-300"
            >
                <Phone size={24} className="sm:size-28" />
            </motion.a>
        </div>
    );
};

export default FloatingButtons;
