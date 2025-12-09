import { ASSETS } from "./assets";

// News Cards for horizontal scroll section - with live video URLs
export interface NewsCard {
    id: number;
    title: string;
    description: string;
    video: string;
    thumbnail?: string;
    category: string;
}

export const newsCards: NewsCard[] = [
    {
        id: 1,
        title: "Google Veo 3.1",
        description: "Go viral now with the Veo 3.1.",
        video: ASSETS.news.veo,
        category: "AI Update",
    },
    {
        id: 2,
        title: "Try Sora 2 Now",
        description: "The Most Hyped Video Model By OpenAI.",
        video: ASSETS.news.sora,
        category: "New Feature",
    },
    {
        id: 3,
        title: "Try Nano Banana",
        description: "Nano Banana limited offer at Creati Studio.",
        video: ASSETS.news.banana,
        category: "Creative",
    },
];

// Masonry Grid Items (9:16 vertical videos)
export interface GridItem {
    id: number;
    title: string;
    thumbnail: string;
    category: "All" | "Show" | "Snap" | "Speaker";
    color?: string; // Fallback solid color
}

export const gridItems: GridItem[] = [
    { id: 1, title: "Claw Machine", thumbnail: ASSETS.grid.claw, category: "Show", color: "#4a1942" },
    { id: 2, title: "Spin Fall", thumbnail: ASSETS.grid.spin, category: "Snap", color: "#ea580c" },
    { id: 3, title: "Ocean Waves", thumbnail: ASSETS.grid.waves, category: "Show", color: "#0891b2" },
    { id: 4, title: "Cat Dance", thumbnail: ASSETS.grid.dance, category: "Snap", color: "#831843" },
    { id: 5, title: "Tech Bag", thumbnail: ASSETS.grid.bag, category: "Show", color: "#2563eb" },
    { id: 6, title: "Makeup", thumbnail: ASSETS.grid.makeup, category: "Snap", color: "#f472b6" },
    { id: 7, title: "Cream Model", thumbnail: ASSETS.grid.cream, category: "Speaker", color: "#fcd34d" },
    { id: 8, title: "Neon Palette", thumbnail: ASSETS.grid.neon, category: "Show", color: "#7c3aed" },
    { id: 9, title: "Supermodel", thumbnail: ASSETS.grid.supermodel, category: "Speaker", color: "#10b981" },
    { id: 10, title: "Floral Eyes", thumbnail: ASSETS.grid.floral, category: "Snap", color: "#f59e0b" },
    { id: 11, title: "Chic Fashion", thumbnail: ASSETS.grid.chic, category: "Show", color: "#ec4899" },
];

// Use Cases Section - with live video URLs
export interface UseCase {
    id: number;
    title: string;
    description: string;
    video: string;
    rotation: string;
}

export const useCases: UseCase[] = [
    {
        id: 1,
        title: "Sync Mode",
        description: "Drop your product URL to get a high-impact video in seconds.",
        video: ASSETS.useCases.sync,
        rotation: "rotate-[15deg]",
    },
    {
        id: 2,
        title: "Snap Mode",
        description: "Turn any image into a scroll-stopping video. One click, endless looks.",
        video: ASSETS.useCases.snap,
        rotation: "-rotate-[15deg]",
    },
    {
        id: 3,
        title: "Swap",
        description: "Instantly remix backgrounds, models, or products. Infinite assets.",
        video: ASSETS.useCases.swap,
        rotation: "rotate-[12deg]",
    },
];

// Stats Data
export interface Stat {
    id: number;
    value: string;
    label: string;
}

export const stats: Stat[] = [
    { id: 1, value: "100M", label: "GENERATION" },
    { id: 2, value: "10M", label: "TOTAL DOWNLOADS" },
    { id: 3, value: "2M", label: "MONTHLY ACTIVE USERS" },
];

// Viral Tags
export const viralTags = [
    "Ads By Veo3.1",
    "Viral By Sora2",
    "Product x SeeDance",
];

// Creator Tabs
export const creatorTabs = [
    { id: "create", label: "Create Video", isActive: true },
    { id: "image", label: "Image to video", isActive: false },
    { id: "veo", label: "VEO3.1", isActive: false, hasSparkle: true },
];

// Hero Video URL
export const heroVideoUrl = ASSETS.heroVideo;
