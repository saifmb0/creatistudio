// Speak page gallery items (Bento grid)
export interface SpeakCard {
    id: number;
    image: string;
    language?: string;
    alt: string;
    size: "small" | "medium" | "large";
}

export const speakCards: SpeakCard[] = [
    {
        id: 1,
        image: "https://placehold.co/400x500/fecdd3/000000?text=Baby+Girl+Microphone",
        language: "Italian",
        alt: "Baby girl holding a microphone",
        size: "medium",
    },
    {
        id: 2,
        image: "https://placehold.co/400x400/f5f5f5/000000?text=White+Yeti+Sunglasses",
        alt: "White Yeti/Monster character in supermarket",
        size: "small",
    },
    {
        id: 3,
        image: "https://placehold.co/400x300/1c1917/ffffff?text=Man+in+Car",
        alt: "Man in a car selfie view",
        size: "small",
    },
    {
        id: 4,
        image: "https://placehold.co/400x500/92400e/ffffff?text=Fuzzy+Monster+30",
        alt: "Fuzzy brown monster with headphones",
        size: "medium",
    },
    {
        id: 5,
        image: "https://placehold.co/300x400/fed7aa/000000?text=Gingerbread+Man",
        alt: "Gingerbread man character",
        size: "small",
    },
    {
        id: 6,
        image: "https://placehold.co/400x400/f5f5f5/000000?text=Yeti+Tuxedo",
        alt: "White Yeti in white tuxedo with butter",
        size: "small",
    },
    {
        id: 7,
        image: "https://placehold.co/400x300/d97706/ffffff?text=Kangaroo+Creati",
        alt: "Kangaroo holding a Creati sign",
        size: "small",
    },
    {
        id: 8,
        image: "https://placehold.co/400x500/1d4ed8/ffffff?text=Baby+Brasil",
        language: "Português",
        alt: "Baby boy with headphones, blue BRASIL shirt",
        size: "medium",
    },
];
