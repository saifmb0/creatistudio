import { ASSETS } from "./assets";

// News Cards for horizontal scroll section
export interface NewsCard {
    id: number;
    title: string;
    description: string;
    video: string;
    category: string;
}

export const newsCards: NewsCard[] = [
    {
        id: 1,
        title: "Google Veo 3.1",
        description: "Go viral now with the Veo 3.1.",
        video: "https://res.creatiai.ai/web/creatiai/buzzy-index-feature-card-veo3_1-20251014.mp4",
        category: "AI Update",
    },
    {
        id: 2,
        title: "Try Sora 2 Now",
        description: "The Most Hyped Video Model By OpenAI.",
        video: "https://res.creatiai.ai/web/creatiai/buzzy-index-feature-card-veo3-20251014.mp4",
        category: "New Feature",
    },
    {
        id: 3,
        title: "Try Nano Banana",
        description: "Nano Banana limited offer at Creati Studio.",
        video: "https://res.creatiai.ai/web/creatiai/buzzy-index-feature-card-banana-20250918.mp4",
        category: "Creative",
    },
];

// Masonry Grid Items (9:16 vertical videos)
export interface GridItem {
    id: number;
    title: string;
    thumbnail: string;
    category: "All" | "Show" | "Snap" | "Speaker";
    color?: string;
}

export const gridItems: GridItem[] = [
    { id: 1, title: "FPV Drone", thumbnail: ASSETS.grid.fpv, category: "Show", color: "#1e3a5f" },
    { id: 2, title: "Claw Machine", thumbnail: ASSETS.grid.claw, category: "Show", color: "#4a1942" },
    { id: 3, title: "Spin Fall", thumbnail: ASSETS.grid.spin, category: "Snap", color: "#ea580c" },
    { id: 4, title: "Ocean Waves", thumbnail: ASSETS.grid.waves, category: "Show", color: "#0891b2" },
    { id: 5, title: "Palette", thumbnail: ASSETS.grid.palette, category: "Show", color: "#7c3aed" },
    { id: 6, title: "Cat Dance", thumbnail: ASSETS.grid.dance, category: "Snap", color: "#3b82f6" },
    { id: 7, title: "Black Bag", thumbnail: ASSETS.grid.bag, category: "Show", color: "#1c1c1e" },
    { id: 8, title: "Makeup", thumbnail: ASSETS.grid.makeup, category: "Snap", color: "#f472b6" },
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
