"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const pricingFeatures = [
    "230+ AI Avatars",
    "Unlimited video generation",
    "4K video export",
    "Priority support",
    "API access",
    "Custom branding",
];

export default function PlanPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-8 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                                The Ultimate Video Platform for Creators
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                                Join over 1M+ users today and start making AI videos with 230+
                                avatars. Transform your content creation workflow.
                            </p>

                            {/* Feature List */}
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {pricingFeatures.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-sm text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    href="#demo"
                                    className="group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Book A Demo
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href="#pricing"
                                    className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    View Pricing
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] max-w-md mx-auto">
                                {/* Main Image */}
                                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://placehold.co/500x625/fef3c7/000000?text=Model+Gold+Dress"
                                        alt="Model in gold dress"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Floating Product Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="absolute -right-8 top-1/3 bg-white rounded-2xl shadow-xl p-4 w-48"
                                >
                                    <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                                        <Image
                                            src="https://placehold.co/200x200/fef3c7/000000?text=Dress+Item"
                                            alt="Product item"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        Gold Shimmer Dress
                                    </div>
                                    <div className="text-xs text-gray-500">Featured Product</div>
                                </motion.div>

                                {/* Arrow */}
                                <svg
                                    className="absolute right-16 top-1/2 w-16 h-16 text-gray-400"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M20 32 C 30 28, 40 28, 50 32" />
                                    <path d="M45 28 L 50 32 L 45 36" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards Section */}
            <section id="pricing" className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Choose Your Plan
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Start free, upgrade when you need more power
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Free Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
                        >
                            <div className="text-sm font-medium text-gray-500 mb-2">Free</div>
                            <div className="text-4xl font-bold text-gray-900 mb-6">$0</div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> 10 videos/month
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> 720p export
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> Basic avatars
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-full border-2 border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
                                Get Started
                            </button>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900 rounded-3xl p-8 shadow-xl relative"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                                Most Popular
                            </div>
                            <div className="text-sm font-medium text-gray-400 mb-2">Pro</div>
                            <div className="text-4xl font-bold text-white mb-6">
                                $29<span className="text-lg font-normal text-gray-400">/mo</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-400" /> Unlimited videos
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-400" /> 4K export
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-400" /> All avatars
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-400" /> Priority support
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors">
                                Start Free Trial
                            </button>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
                        >
                            <div className="text-sm font-medium text-gray-500 mb-2">
                                Enterprise
                            </div>
                            <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> Everything in Pro
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> API access
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> Custom branding
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-green-500" /> Dedicated support
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-full border-2 border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">
                                Contact Sales
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
