"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sliders, Clock } from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { features, featureImages, howToSteps } from "@/data/features";

export default function FeaturesPage() {
    const featureIcons = [Zap, Sliders, Clock];

    return (
        <div className="min-h-screen bg-[#100f14]">
            <NavBar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                    >
                        Image to Video AI Generator
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-[#9f9fa5] max-w-2xl mx-auto"
                    >
                        Transform your static images into stunning, cinematic videos with our
                        AI-powered technology
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8"
                    >
                        <button className="group glass gradient-border px-8 py-4 rounded-full text-white font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-all">
                            Try It Now
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Hero Image Grid */}
            <section className="py-8 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                        {featureImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
                            >
                                <Image
                                    src={image}
                                    alt={`Feature image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Use Our Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
                    >
                        Why use our Image to Video AI?
                    </motion.h2>

                    <div className="space-y-6">
                        {features.map((feature, index) => {
                            const Icon = featureIcons[index];
                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-6 bg-[#1c1c1e] rounded-2xl p-6 hover:bg-[#252527] transition-colors"
                                >
                                    <div className="relative w-24 h-18 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How To Section */}
            <section className="py-24 px-6 bg-[#0c0b10]">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
                    >
                        How to Turn Image to Video
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
                    >
                        It only takes three simple steps to create stunning videos from your
                        images
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howToSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">
                                        {step.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to transform your images?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Join millions of creators using Creati Studio to bring their images
                            to life
                        </p>
                        <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                            Get Started Free
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
