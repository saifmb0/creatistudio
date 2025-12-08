// Features page data
export interface Feature {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
}

export const features: Feature[] = [
    {
        id: 1,
        title: "High quality video output",
        description: "Generate stunning 4K videos with cinematic quality that rivals professional productions.",
        thumbnail: "https://placehold.co/120x90/6366f1/ffffff?text=4K",
    },
    {
        id: 2,
        title: "Customizable motion",
        description: "Control every aspect of movement with precision. From subtle gestures to dynamic action.",
        thumbnail: "https://placehold.co/120x90/8b5cf6/ffffff?text=Motion",
    },
    {
        id: 3,
        title: "Fast generation",
        description: "Get your videos in seconds, not hours. Our AI is optimized for speed without sacrificing quality.",
        thumbnail: "https://placehold.co/120x90/ec4899/ffffff?text=Fast",
    },
];

// Hero image grid for features page
export const featureImages = [
    "https://placehold.co/300x400/dc2626/ffffff?text=Red+Splash",
    "https://placehold.co/300x400/0369a1/ffffff?text=Ocean+Blue",
    "https://placehold.co/300x400/78350f/ffffff?text=Latte+Art",
    "https://placehold.co/300x400/7c3aed/ffffff?text=Fashion",
    "https://placehold.co/300x400/059669/ffffff?text=Nature",
    "https://placehold.co/300x400/ea580c/ffffff?text=Sunset",
];

// How-to steps
export interface HowToStep {
    step: number;
    title: string;
    description: string;
}

export const howToSteps: HowToStep[] = [
    {
        step: 1,
        title: "Upload your image",
        description: "Drag and drop any image or paste a URL to get started.",
    },
    {
        step: 2,
        title: "Customize settings",
        description: "Choose motion style, duration, and add any text prompts.",
    },
    {
        step: 3,
        title: "Generate & download",
        description: "Click generate and download your video in seconds.",
    },
];
