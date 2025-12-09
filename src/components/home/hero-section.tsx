"use client";

import { useState } from "react";
import { Upload, Link as LinkIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/assets";

export function HeroSection() {
    const [activeTab, setActiveTab] = useState<"image" | "url" | "video">("image");

    return (
        <section className="relative pt-20 pb-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-[-1] opacity-40">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={ASSETS.heroVideo}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-white">
                Go Viral with Creati
            </h1>
            <p className="text-muted mb-12 text-lg md:text-xl max-w-2xl">
                Viral AI Video Generator For Url, Image Or Text To Video
            </p>

            {/* The Pill Input Card */}
            <div className="w-full max-w-4xl relative">
                <div className="glass-card rounded-[2rem] p-3 backdrop-blur-xl bg-[#151515]/80 border border-white/10 flex flex-col gap-4">

                    {/* Top Row: Tabs */}
                    <div className="flex justify-start px-2 pt-1">
                        <div className="flex gap-1 bg-black/20 p-1 rounded-full">
                            {[
                                { id: "image", label: "IMAGE" },
                                { id: "url", label: "URL" },
                                { id: "video", label: "VIDEO" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as "image" | "url" | "video")}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full text-[10px] font-semibold transition-all uppercase tracking-wide",
                                        activeTab === tab.id
                                            ? "bg-white/10 text-white"
                                            : "text-muted hover:text-white"
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Middle Row: Input Field */}
                    <div className="px-4 py-2">
                        <input
                            type="text"
                            placeholder="Paste your video link here..."
                            className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/20 text-lg font-medium"
                        />
                    </div>

                    {/* Bottom Row: Tags & Button */}
                    <div className="flex justify-between items-end px-2 pb-1">
                        <div className="flex gap-2 mb-1">
                            <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-400 bg-[#1A1A1A]">
                                Ads By Veo3.1
                            </span>
                            <span className="hidden sm:block px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-400 bg-[#1A1A1A]">
                                Viral By Sora2
                            </span>
                        </div>

                        <Button className="bg-gradient-to-r from-[#2957FF] to-[#00C2FF] rounded-full px-8 py-6 text-base font-bold text-white hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(41,87,255,0.3)]">
                            Generate
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
