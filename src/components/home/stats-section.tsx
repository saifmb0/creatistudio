"use client";

import { motion } from "framer-motion";

const STATS = [
    { value: "0M", label: "GENERATION" },
    { value: "0M", label: "TOTAL DOWNLOADS" },
    { value: "0M", label: "MONTHLY ACTIVE USERS" },
];

export function StatsSection() {
    return (
        <section className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
                Used by Millions
            </h2>
            <p className="text-muted mb-16">Why millions of creators love Creati AI?</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {STATS.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card rounded-3xl h-64 flex flex-col items-center justify-center border border-white/10"
                    >
                        <span className="text-6xl md:text-7xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                            {stat.value}
                        </span>
                        <span className="text-xs tracking-widest text-muted mt-4 uppercase">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;
