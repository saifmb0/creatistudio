"use client";

import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/assets";

const CARDS = [
    {
        title: "Sync Mode",
        desc: "Drop your product URL to get a high-impact video in seconds.",
        video: ASSETS.useCases.sync,
        rotation: "rotate-12",
        shadow: "shadow-[0_0_100px_-20px_rgba(41,87,255,0.3)]",
        position: "bottom-[-20px] right-[-20px]",
    },
    {
        title: "Snap Mode",
        desc: "Turn any image into a scroll-stopping video. One click, endless looks.",
        video: ASSETS.useCases.snap,
        rotation: "-rotate-12",
        shadow: "shadow-[0_0_100px_-20px_rgba(255,100,50,0.3)]",
        position: "bottom-[-20px] right-[20px]",
    },
    {
        title: "Swap",
        desc: "Instantly remix backgrounds, models, or products. Infinite assets.",
        video: ASSETS.useCases.swap,
        rotation: "rotate-6",
        shadow: "shadow-[0_0_100px_-20px_rgba(50,255,200,0.3)]",
        position: "bottom-[-20px] right-[-10px]",
    },
];

export function FeatureCards() {
    return (
        <section className="space-y-8 py-10 px-4" id="use-cases">
            {CARDS.map((card, idx) => (
                <div
                    key={idx}
                    className="relative w-full h-[500px] rounded-[2.5rem] border border-white/5 bg-[#0F0F11] overflow-hidden group"
                >
                    {/* Text Content - Top Left */}
                    <div className="absolute top-12 left-8 md:left-12 z-10 max-w-md">
                        <h3 className="text-4xl font-semibold text-white mb-4">
                            {card.title}
                        </h3>
                        <p className="text-[#888888] text-lg leading-relaxed mb-8">
                            {card.desc}
                        </p>
                        <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium text-white">
                            Try Now
                        </button>
                    </div>

                    {/* The Tilted Visual - Bottom Right */}
                    <div className={cn(
                        "absolute transition-transform duration-500 ease-out group-hover:scale-105",
                        card.position
                    )}>
                        <div
                            className={cn(
                                "w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10",
                                card.rotation,
                                card.shadow
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
