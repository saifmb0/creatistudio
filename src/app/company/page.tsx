"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { portraits } from "@/data/company";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
                    >
                        Meet the Creators
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Real people creating amazing content with Creati Studio
                    </motion.p>
                </div>
            </section>

            {/* Portrait Grid */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
                    >
                        {portraits.map((portrait, index) => (
                            <motion.div
                                key={portrait.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                            >
                                <Image
                                    src={portrait.image}
                                    alt={portrait.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Creati Studio, we believe everyone should have the power to
                            create stunning video content. Our AI-powered tools democratize
                            video creation, making it accessible to creators, businesses, and
                            individuals worldwide.
                        </p>
                    </motion.div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-gray-900 mb-2">2023</div>
                            <div className="text-sm text-gray-500">Founded</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
                            <div className="text-sm text-gray-500">Active Users</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                            <div className="text-sm text-gray-500">Team Members</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Join Our Team
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We are always looking for talented individuals to join our mission
                        </p>
                        <button className="group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                            View Open Positions
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
