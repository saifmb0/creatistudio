"use client";

import { cn } from "@/lib/utils";
import { ASSETS } from "@/data/assets";

const CARDS = [
    {
        title: "Sync Mode",
        desc: "Drop your product URL to get a high-impact video in seconds.",
        video: ASSETS.useCases.sync,
        rotation: "lg:rotate-[15deg] lg:translate-x-6",
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        title: "Snap Mode",
        desc: "Turn any image into a scroll-stopping video. One click, endless looks.",
        video: ASSETS.useCases.snap,
        rotation: "lg:-rotate-[15deg] lg:-translate-x-6",
        gradient: "from-pink-500/20 to-orange-500/20",
    },
    {
        title: "Swap",
        desc: "Instantly remix backgrounds, models, or products. Infinite assets.",
        video: ASSETS.useCases.swap,
        rotation: "lg:rotate-[12deg] lg:translate-x-4",
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
];

export function FeatureCards() {
    return (
        <section className="space-y-16 py-10" id="use-cases">
            {CARDS.map((card, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "relative w-full rounded-[2rem] border border-white/10 bg-card-dark/40 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10",
                        "hover:border-white/20 transition-colors group"
                    )}
                >
                    {/* Ambient Gradient Background */}
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none",
                            card.gradient
                        )}
                    />

                    {/* Text Content */}
                    <div
                        className={cn(
                            "z-10 flex-1 space-y-4 md:max-w-md",
                            idx % 2 !== 0 && "md:order-2"
                        )}
                    >
                        <h3 className="text-3xl md:text-4xl font-medium text-white">
                            {card.title}
                        </h3>
                        <p className="text-muted text-lg leading-relaxed">{card.desc}</p>
                        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium text-white">
                            Get Started
                        </button>
                    </div>

                    {/* The Tilted Visual */}
                    <div className="relative w-full md:w-[45%] aspect-[4/3] flex items-center justify-center">
                        {/* The Card Container that rotates */}
                        <div
                            className={cn(
                                "relative w-[200px] md:w-[240px] h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out border border-white/10",
                                card.rotation,
                                "group-hover:scale-105"
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
