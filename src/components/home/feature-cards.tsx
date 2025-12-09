"use client";

import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/assets";

const CARDS = [
    {
        title: "Sync Mode",
        desc: "Drop your product URL to get a high-impact video in seconds.",
        video: ASSETS.useCases.sync,
        rotation: "rotate-[45deg]",
        glow: "shadow-[0_0_80px_rgba(42,100,242,0.4)]",
    },
    {
        title: "Snap Mode",
        desc: "Turn any image into a scroll-stopping video. One click, endless looks.",
        video: ASSETS.useCases.snap,
        rotation: "rotate-[-45deg]",
        glow: "shadow-[0_0_80px_rgba(255,100,50,0.4)]",
    },
    {
        title: "Swap",
        desc: "Instantly remix backgrounds, models, or products. Infinite assets.",
        video: ASSETS.useCases.swap,
        rotation: "rotate-[45deg]",
        glow: "shadow-[0_0_80px_rgba(50,255,200,0.4)]",
    },
];

export function FeatureCards() {
    return (
        <section className="space-y-6 py-10 px-4 md:px-8" id="use-cases">
            {CARDS.map((card, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "w-full rounded-3xl border border-white/10 bg-[#100f14] p-12 flex items-center justify-between gap-[60px]",
                        idx % 2 === 1 && "flex-row-reverse"
                    )}
                >
                    {/* Text Content */}
                    <div className="flex-1 max-w-md">
                        <h3 className="text-4xl font-semibold text-white mb-4">
                            {card.title}
                        </h3>
                        <p className="text-[#9f9fa5] text-lg leading-relaxed mb-8">
                            {card.desc}
                        </p>
                        <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium text-white">
                            Try Now
                        </button>
                    </div>

                    {/* The Tilted Visual */}
                    <div className="flex-shrink-0">
                        <div
                            className={cn(
                                "w-[240px] h-[320px] md:w-[280px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-105",
                                card.rotation,
                                card.glow
                            )}
                        >
                            <video
                                src={card.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default FeatureCards;
