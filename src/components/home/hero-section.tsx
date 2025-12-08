"use client";

import { useState } from "react";
import { Upload, Link as LinkIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/assets";

export function HeroSection() {
    const [activeTab, setActiveTab] = useState<"image" | "url" | "video">("image");

    return (
        <section className="relative pt-8 pb-16 flex flex-col items-center justify-center text-center px-4">
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
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-2">
                Go Viral with Creati
            </h1>
            <p className="text-muted mb-8 text-lg">
                Viral AI Video Generator For Url, Image Or Text To Video
            </p>

            {/* The Glass Input Card */}
            <div className="w-full max-w-3xl glass-card rounded-3xl p-2 md:p-4 backdrop-blur-xl bg-card-dark/60 border border-white/10">
                {/* Tabs */}
                <div className="flex gap-2 mb-4 p-1">
                    {[
                        { id: "image", icon: Upload, label: "Image" },
                        { id: "url", icon: LinkIcon, label: "URL" },
                        { id: "video", icon: Video, label: "Video" },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as "image" | "url" | "video")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                                activeTab === tab.id
                                    ? "bg-white/10 text-white"
                                    : "text-muted hover:text-white"
                            )}
                        >
                            <tab.icon size={16} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="h-32 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-muted hover:border-creati-blue/50 transition-colors cursor-pointer bg-charcoal/40">
                    <Upload className="mb-2 opacity-50" />
                    <span className="text-sm">Drop files here to add</span>
                </div>

                {/* Generate Button Row */}
                <div className="flex justify-between items-center mt-4 px-2">
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-muted bg-white/5">
                            Ads By Veo3.1
                        </span>
                        <span className="hidden sm:block px-3 py-1 rounded-full border border-white/10 text-xs text-muted bg-white/5">
                            Viral By Sora2
                        </span>
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full px-8 py-6 text-lg font-semibold hover:opacity-90 transition-opacity">
                        Generate
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
