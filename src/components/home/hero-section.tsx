"use client";

import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/assets";

export function HeroSection() {
    const [inputValue, setInputValue] = useState("");

    return (
        <section className="flex-center relative z-10 flex-col overflow-hidden px-4 pb-5 pt-20 sm:pt-40">
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
                <div className="absolute inset-0 bg-gradient-to-b from-[#100f14]/80 via-[#100f14]/50 to-[#100f14]" />
            </div>

            {/* Heading - Exact typography */}
            <h1 className="text-[48px] md:text-[64px] font-medium leading-tight tracking-tight mb-3 text-white font-heading">
                Go Viral with Creati
            </h1>
            <p className="text-[#9f9fa5] mb-8 text-base max-w-xl">
                Viral AI Video Generator For Url, Image Or Text To Video
            </p>

            {/* The Input Engine - 800px, rounded-[32px] */}
            <div className="w-full max-w-[800px]">
                <div className="glass-panel rounded-[32px] p-3">

                    {/* Inner Content Box */}
                    <div className="h-28 bg-transparent rounded-[20px] flex gap-3">

                        {/* Left Icon - Grace Area (Exact: w-16 h-22 -rotate-6) */}
                        <div className="w-16 h-22 shrink-0 bg-[#2c2c2e] rounded-lg border border-white/10 -rotate-6 hover:rotate-0 transition-all cursor-pointer flex items-center justify-center self-center ml-2">
                            <Plus className="w-6 h-6 text-white/60" />
                        </div>

                        {/* Right - Textarea */}
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type an idea, watch it become art"
                            className="bg-transparent text-sm text-white placeholder:text-[#aeaeb2] resize-none h-full w-full p-3 outline-none"
                        />
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex justify-between items-center px-2 pt-2">
                        {/* Left - Dropdown */}
                        <button className="h-8 bg-[#18222b]/80 border border-[#41a2f2] text-[#41a2f2] rounded-lg text-sm font-bold px-3 flex items-center gap-1.5">
                            Create Video
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {/* Right - Generate Button */}
                        <button
                            disabled={!inputValue.trim()}
                            className={cn(
                                "h-11 w-40 rounded-full bg-[#2a64f2] text-white font-medium text-lg transition-all",
                                inputValue.trim()
                                    ? "hover:bg-[#3f73f3] opacity-100"
                                    : "opacity-50 cursor-not-allowed"
                            )}
                        >
                            Generate
                        </button>
                    </div>
                </div>

                {/* Viral Tags Row - Below Input (h-[26px] text-xs border-white/20 bg-white/5) */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["Ads By Veo3.1", "Viral By Sora2", "Product x SeeDance"].map((tag) => (
                        <span
                            key={tag}
                            className="h-[26px] px-3 rounded-full border border-white/20 bg-white/5 text-xs font-medium text-white backdrop-blur flex items-center"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
