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
}

export const gridItems: GridItem[] = [
    { id: 1, title: "FPV Drone", thumbnail: "https://placehold.co/270x480/1e3a5f/ffffff?text=FPV+Drone", category: "Show" },
    { id: 2, title: "Claw Machine", thumbnail: "https://placehold.co/270x480/4a1942/ffffff?text=Claw+Machine", category: "Snap" },
    { id: 3, title: "Spin Fall Pink", thumbnail: "https://placehold.co/270x480/831843/ffffff?text=Spin+Fall", category: "Show" },
    { id: 4, title: "Ocean Waves", thumbnail: "https://placehold.co/270x480/0369a1/ffffff?text=Ocean+Waves", category: "Snap" },
    { id: 5, title: "Neon City", thumbnail: "https://placehold.co/270x480/7c3aed/ffffff?text=Neon+City", category: "Speaker" },
    { id: 6, title: "Sunset Dance", thumbnail: "https://placehold.co/270x480/ea580c/ffffff?text=Sunset+Dance", category: "Show" },
    { id: 7, title: "Tech Review", thumbnail: "https://placehold.co/270x480/0891b2/ffffff?text=Tech+Review", category: "Speaker" },
    { id: 8, title: "Coffee Art", thumbnail: "https://placehold.co/270x480/78350f/ffffff?text=Coffee+Art", category: "Snap" },
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
    { id: 1, value: "0M", label: "GENERATION" },
    { id: 2, value: "0M", label: "TOTAL DOWNLOADS" },
    { id: 3, value: "0M", label: "MONTHLY ACTIVE USERS" },
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
