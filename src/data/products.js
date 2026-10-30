import Moisturizer from "../assets/Moisturiser.jpg"
import Vserum from "../assets/Vserum.jpg"
import Hserum from "../assets/Hserum.jpg"
import FaceCleanser from "../assets/FaceCleanser.jpg"
import Toner from "../assets/Toner.jpg"
import Sunscreen from "../assets/Sunscreen.jpg"
import Foundation from "../assets/Foundation.jpg"
import Lipgloss from "../assets/LipGlosses.jpg"
import Eyeshadow from "../assets/Eyeshadow.jpg"
import Blush from "../assets/Blush.jpg"
import Lipstick from "../assets/Lipstick.jpg"
import Mascara from "../assets/Mascara.jpg"


const products = [
        {
            id: 1,
            name: "Moisturizer",
            image: Moisturizer,
            price: "6,000",
            description: "A lightweight moisturizing cream that leaves skin feeling soft, smooth, and hydrated with a fresh, dewy finish."
        },

        {
            id: 2,
            name: "Vitamin C Serum",
            image: Vserum,
            price: "4,500",
            description: "A lightweight facial serum formulated to brighten the appearance of dull skin and give your complexion a radiant look."
        },

        {
            id: 3,
            name: "Hydrating Serum",
            image: Hserum,
            price: "6,000",
            description: "A refreshing, moisture-rich serum that leaves skin feeling hydrated, supple, and beautifully dewy."
        },

        {
            id: 4,
            name: "Face Cleanser",
            image: FaceCleanser,
            price: "7,000",
            description: "A daily cleanser that removes dirt, excess oil, and impurities without leaving your skin feeling overly dry."
        },

        {
            id: 5,
            name: "Toner",
            image: Toner,
            price: "8,500",
            description: "A lightweight toner that refreshes the skin after cleansing and prepares it for the rest of your skincare routine."
        },

        {
            id: 6,
            name: "Sunscreen SPF 50",
            image: Sunscreen,
            price: "17,000",
            description: "Everyday broad-spectrum sun protection in a lightweight formula designed for comfortable daily wear."
        },

        {
            id: 7,
            name: "Matte Foundation",
            image: Foundation,
            price: "10,000",
            description: "A blendable foundation with a smooth, soft-matte finish. Available in shades from fair beige to deep espresso to complement different skin tones."
        },

        {
            id: 8,
            name: "Lipgloss",
            image: Lipgloss,
            price: "2,000",
            description: "A non-sticky looking, high shine gloss in Baby Pink a sheer, delicate pink that gives your lips a juicy, glass like finish"
        },

        {
            id: 9,
            name: "Eyeshadow Palette",
            image: Eyeshadow,
            price: "15,000",
            description: "A mix of matte browns, soft pinks, champagne shimmer, and warm neutrals for creating everyday makeup and sultry evening looks."
        },

        {
            id: 10,
            name: "Blush",
            image: Blush,
            price: "8,000",
            description: " A soft pink blush that adds a fresh, youthful-looking flush to your cheeks with a smooth, buildable finish.",
            shades: ["Shades: Rosy Pink"]
        },

        {
            id: 11,
            name: "Lipstick",
            image: Lipstick,
            price: "4,000",
            description: " A sophisticated rosy-brown lipstick with a satin finish, perfect for everyday glam, brunch dates, and polished evening looks.",
            shades: ["Shade: Rosewood"]
        },

        {
            id: 12,
            name: "Mascara",
            image: Mascara,
            price: "4,000",
            description: " A deep black mascara designed to define lashes and create a fuller, more dramatic-looking effect for an eye-catching finish.",
            shades: ["Shade: Intense Black"]
        },

    ]

export default products