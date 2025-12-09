"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/grid-items";

export function StatsSection() {
    return (
        <section className="text-center py-20 px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
                Used by Millions
            </h2>
            <p className="text-[#9f9fa5] mb-16 text-base">Why millions of creators love Creati AI?</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="h-[280px] w-full rounded-3xl border border-white/5 bg-transparent flex flex-col items-center justify-center"
                    >
                        <span className="text-[6rem] font-bold tracking-tighter text-white mb-2">
                            {stat.value}
                        </span>
                        <span className="text-xs tracking-[0.2em] text-[#9f9fa5] uppercase font-medium">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;
