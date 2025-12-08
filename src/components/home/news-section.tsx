"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { newsCards } from "@/data/grid-items";

export function NewsSection() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-8">Latest News</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                {newsCards.map((card) => (
                    <motion.div
                        key={card.id}
                        whileHover={{ scale: 1.03 }}
                        className="flex-shrink-0 w-80 group cursor-pointer"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-card-dark">
                            <video
                                src={card.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-white font-semibold">{card.title}</span>
                                <p className="text-gray-300 text-sm mt-1">{card.description}</p>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default NewsSection;
