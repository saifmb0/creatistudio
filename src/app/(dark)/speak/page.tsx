"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { speakCards } from "@/data/speak";

export default function SpeakPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-8 pb-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                    >
                        AI Voice & Language
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-[#9f9fa5] max-w-2xl mx-auto"
                    >
                        Create videos in any language with our AI-powered voice generation
                    </motion.p>
                </div>
            </section>

            {/* Bento Grid Gallery */}
            <section className="py-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
                    >
                        {speakCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${card.size === "medium"
                                    ? "row-span-2"
                                    : card.size === "large"
                                        ? "col-span-2 row-span-2"
                                        : ""
                                    }`}
                            >
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Language Badge */}
                                {card.language && (
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-white font-bold text-lg drop-shadow-lg">
                                            {card.language}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Speak Any Language
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 text-center"
                        >
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                100+ Languages
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Support for over 100 languages and dialects
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass rounded-2xl p-6 text-center"
                        >
                            <div className="text-4xl mb-4">🎙️</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Natural Voices
                            </h3>
                            <p className="text-gray-400 text-sm">
                                AI-generated voices that sound human
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-2xl p-6 text-center"
                        >
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Instant Sync
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Perfect lip-sync in any language
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Try Speak AI Today
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Create multilingual videos that resonate with global audiences
                        </p>
                        <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Get Started Free
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
