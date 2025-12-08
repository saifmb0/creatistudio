"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
    return (
        <section className="py-16 overflow-hidden">
            <h2 className="text-2xl font-bold text-white mb-8">What People Say</h2>

            <div className="relative">
                <div className="flex animate-marquee">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="flex-shrink-0 w-80 mx-4 glass rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-sm">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                                </div>
                            </div>
                            <div className="star-gradient text-lg mb-3">★★★★★</div>
                            <p className="text-gray-300 text-sm leading-relaxed">
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
