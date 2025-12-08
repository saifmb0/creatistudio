// News Cards for horizontal scroll section
export interface NewsCard {
    id: number;
    title: string;
    thumbnail: string;
    category: string;
}

export const newsCards: NewsCard[] = [
    {
        id: 1,
        title: "Google Veo 3.1",
        thumbnail: "https://placehold.co/400x225/6366f1/ffffff?text=Veo+3.1",
        category: "AI Update",
    },
    {
        id: 2,
        title: "Try Sora 2 Now",
        thumbnail: "https://placehold.co/400x225/8b5cf6/ffffff?text=Sora+2",
        category: "New Feature",
    },
    {
        id: 3,
        title: "Try Nano Banana",
        thumbnail: "https://placehold.co/400x225/ec4899/ffffff?text=Nano+Banana",
        category: "Creative",
    },
    {
        id: 4,
        title: "SeeDance Mode Launch",
        thumbnail: "https://placehold.co/400x225/f59e0b/ffffff?text=SeeDance",
        category: "Feature",
    },
    {
        id: 5,
        title: "4K Ultra Export",
        thumbnail: "https://placehold.co/400x225/10b981/ffffff?text=4K+Ultra",
        category: "Update",
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

// Use Cases Section
export interface UseCase {
    id: number;
    title: string;
    description: string;
    image: string;
    rotation: number;
}

export const useCases: UseCase[] = [
    {
        id: 1,
        title: "Sync Mode",
        description: "Perfect lip-sync for any language. Turn any avatar into a multilingual presenter.",
        image: "https://placehold.co/320x640/6366f1/ffffff?text=Sync+Mode",
        rotation: 15,
    },
    {
        id: 2,
        title: "Snap Mode",
        description: "Instant video from a single image. Watch your photos come alive.",
        image: "https://placehold.co/320x640/8b5cf6/ffffff?text=Snap+Mode",
        rotation: -15,
    },
    {
        id: 3,
        title: "Swap",
        description: "Replace products seamlessly. Perfect for e-commerce and advertisements.",
        image: "https://placehold.co/320x640/ec4899/ffffff?text=Swap",
        rotation: 12,
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
