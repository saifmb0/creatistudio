"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { gridItems } from "@/data/grid-items";

export function MasonryGallery() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Show", "Snap", "Speaker"];

    const filteredItems = activeFilter === "All"
        ? gridItems
        : gridItems.filter(item => item.category === activeFilter);

    return (
        <section className="px-4 md:px-8">
            {/* Category Filter - Exact styling */}
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar justify-center">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            "h-[30px] px-4 rounded-full border text-xs transition-colors whitespace-nowrap",
                            activeFilter === filter
                                ? "bg-white/10 border-white/20 text-white"
                                : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* CSS Grid - Inch Perfect */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-2">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative group cursor-pointer overflow-hidden rounded-[10px] bg-card-dark aspect-[9/16]"
                    >
                        {item.thumbnail ? (
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        ) : (
                            <div
                                className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundColor: item.color || '#1c1c1e' }}
                            />
                        )}

                        {/* Hover Overlay - Darken + Generate Icon */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                <Play className="w-5 h-5 text-white fill-white" />
                            </div>
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
