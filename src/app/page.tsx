"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Upload, ArrowRight } from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  newsCards,
  gridItems,
  useCases,
  stats,
  viralTags,
  creatorTabs,
  GridItem,
} from "@/data/grid-items";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<string>("create");

  const filterCategories = ["All", "Show", "Snap", "Speaker"];

  const filteredItems =
    activeFilter === "All"
      ? gridItems
      : gridItems.filter((item) => item.category === activeFilter);

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
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          >
            Go Viral with Creati
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-[#9f9fa5] max-w-2xl mx-auto"
          >
            Viral AI Video Generator For Url, Image Or Text To Video
          </motion.p>

          {/* Creator Input Card */}
          <motion.div
            id="create"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto glass rounded-3xl p-6"
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {creatorTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {tab.label}
                  {tab.hasSparkle && <Sparkles className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>

            {/* Dropzone */}
            <div className="border-2 border-dashed border-gray-600 rounded-2xl p-12 mb-4 hover:border-gray-500 transition-colors cursor-pointer">
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <Upload className="w-10 h-10" />
                <span className="text-sm">Drop files here to add</span>
              </div>
            </div>

            {/* Text Input */}
            <div className="relative">
              <textarea
                placeholder="Type an idea, watch it become art"
                className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 resize-none h-24"
              />
              <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>

          {/* Viral Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            {viralTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Latest News</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {newsCards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1c1c1e]">
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
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex gap-3 mb-8">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat
                  ? "bg-white text-black"
                  : "text-gray-400 bg-white/5 hover:bg-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredItems.map((item: GridItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-4 break-inside-avoid"
              >
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#1c1c1e] group cursor-pointer">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-medium text-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
              <div
                className={`relative w-40 h-80 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 ${useCase.rotation}`}
              >
                <video
                  src={useCase.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Used by Millions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-2xl font-bold text-white">What People Say</h2>
        </div>
        <div className="relative">
          <div className="flex animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 mx-4 glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="star-gradient text-lg mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
