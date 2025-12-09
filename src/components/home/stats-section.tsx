"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/grid-items";

export function StatsSection() {
    return (
        <section className="text-center py-24 px-4">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
                Used by Millions
            </h2>
            <p className="text-muted mb-20 text-lg">Why millions of creators love Creati AI?</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <span className="text-7xl md:text-8xl font-bold tracking-tighter text-white mb-2">
                            {stat.value}
                        </span>
                        <span className="text-xs md:text-sm tracking-[0.2em] text-muted uppercase font-medium">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;
