"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { gridItems } from "@/data/grid-items";

export function MasonryGallery() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Show", "Snap", "Speaker"];

    const filteredItems = activeFilter === "All"
        ? gridItems
        : gridItems.filter(item => item.category === activeFilter);

    return (
        <section className="px-4">
            {/* Filter Pills */}
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar justify-center">
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
            <div className="columns-2 md:columns-4 gap-4 space-y-4">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-3xl bg-card-dark"
                    >
                        {item.thumbnail ? (
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        ) : (
                            <div
                                className="w-full h-[300px] transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundColor: item.color || '#1c1c1e' }}
                            />
                        )}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-bold">
                                Try This
                            </button>
                        </div>
                        {/* Title */}
                        <div className="absolute bottom-4 left-4 p-2">
                            <span className="text-white text-lg font-medium tracking-wide drop-shadow-lg">
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
