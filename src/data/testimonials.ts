export interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    quote: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Content Creator",
        avatar: "https://placehold.co/48x48/6366f1/ffffff?text=SC",
        rating: 5,
        quote: "Creati Studio transformed my content workflow. The AI video generation is incredibly fast and the quality is amazing!",
    },
    {
        id: 2,
        name: "Marcus Johnson",
        role: "Marketing Director",
        avatar: "https://placehold.co/48x48/8b5cf6/ffffff?text=MJ",
        rating: 5,
        quote: "We've increased our video output by 10x while maintaining high quality. Game changer for our marketing team.",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Social Media Manager",
        avatar: "https://placehold.co/48x48/ec4899/ffffff?text=ER",
        rating: 5,
        quote: "The image-to-video feature is magical. Our engagement rates have skyrocketed since using Creati.",
    },
    {
        id: 4,
        name: "David Kim",
        role: "E-commerce Owner",
        avatar: "https://placehold.co/48x48/f59e0b/ffffff?text=DK",
        rating: 5,
        quote: "Product videos that used to take days now take minutes. My sales have increased by 40%!",
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "YouTuber",
        avatar: "https://placehold.co/48x48/10b981/ffffff?text=LT",
        rating: 5,
        quote: "The quality of AI-generated videos is indistinguishable from professional productions. Absolutely love it!",
    },
    {
        id: 6,
        name: "Alex Martinez",
        role: "Startup Founder",
        avatar: "https://placehold.co/48x48/3b82f6/ffffff?text=AM",
        rating: 5,
        quote: "Best investment we made for our marketing. The ROI is incredible with Creati Studio.",
    },
];
