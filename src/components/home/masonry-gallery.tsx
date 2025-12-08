"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Gallery items with varied aspect ratios for true masonry effect
const GALLERY_ITEMS = [
    { src: "https://placehold.co/400x600/1e3a5f/ffffff?text=FPV+Drone", title: "FPV Drone", category: "Show" },
    { src: "https://placehold.co/400x600/4a1942/ffffff?text=Claw+Machine", title: "Claw Machine", category: "Snap" },
    { src: "https://placehold.co/400x400/2563eb/ffffff?text=Blue+Bag", title: "Blue Bag", category: "Show" },
    { src: "https://placehold.co/400x600/831843/ffffff?text=Cat+Dance", title: "Cat Dance", category: "Snap" },
    { src: "https://placehold.co/400x500/0369a1/ffffff?text=Model", title: "Model", category: "Speaker" },
    { src: "https://placehold.co/400x400/7c3aed/ffffff?text=Palette", title: "Palette Fit", category: "Show" },
    { src: "https://placehold.co/400x600/ea580c/ffffff?text=Makeup", title: "Makeup", category: "Snap" },
    { src: "https://placehold.co/600x400/0891b2/ffffff?text=Car+Chase", title: "Car Chase", category: "Show" },
    { src: "https://placehold.co/400x600/78350f/ffffff?text=Cat+Ads", title: "Cat Ads", category: "Speaker" },
];

export function MasonryGallery() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Show", "Snap", "Speaker"];

    const filteredItems = activeFilter === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === activeFilter);

    return (
        <section>
            {/* Filter Pills */}
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            "px-6 py-1.5 rounded-full border text-sm transition-colors whitespace-nowrap",
                            activeFilter === filter
                                ? "bg-white/10 border-white/20 text-white"
                                : "border-transparent text-muted hover:bg-white/5"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* THE MASONRY FIX: CSS Columns */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {filteredItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-card-dark"
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-bold">
                                Try This
                            </button>
                        </div>
                        {/* Title */}
                        <div className="absolute bottom-3 left-3">
                            <span className="text-white text-sm font-medium drop-shadow-lg">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-sm transition-colors">
                    View More
                    <span className="rotate-90">›</span>
                </button>
            </div>
        </section>
    );
}

export default MasonryGallery;
