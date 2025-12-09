"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="px-4 text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">The Voice from Community</h2>
            </div>

            <div className="relative overflow-hidden">
                <div className="flex animate-marquee gap-6">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="flex-shrink-0 h-[300px] w-[436px] rounded-3xl border border-white/10 bg-white/5 p-12 hover:border-white/20 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-base">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[#9f9fa5] text-xs uppercase tracking-wide">{testimonial.role}</div>
                                </div>
                            </div>
                            <div className="star-gradient text-lg mb-4">★★★★★</div>
                            <p className="text-[#9f9fa5] text-base leading-relaxed line-clamp-3">
                                &quot;{testimonial.quote}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
