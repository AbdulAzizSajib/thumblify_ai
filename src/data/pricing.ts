import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 19,
        period: "month",
        features: [
            "AI thumbnail generation",
            "Up to 50 thumbnails / month",
            "Basic customization tools",
            "Standard resolution",
            "Community support"
        ],
        mostPopular: false
    },
    {
        name: "Creator Pro",
        price: 49,
        period: "month",
        features: [
            "Unlimited AI thumbnails",
            "Advanced customization tools",
            "High-resolution exports",
            "YouTube & Shorts optimized",
            "Priority generation speed",
            "Premium creator support"
        ],
        mostPopular: true
    },
    {
        name: "Studio",
        price: 99,
        period: "month",
        features: [
            "Everything in Creator Pro",
            "Team collaboration access",
            "Multiple brand styles",
            "Bulk thumbnail generation",
            "Commercial usage license",
            "Dedicated priority support"
        ],
        mostPopular: false
    }
];
