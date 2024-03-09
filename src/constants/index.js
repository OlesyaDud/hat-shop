import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigHat1, bigHat2, bigHat3, customer1, customer2, prod1, prod2, prod3, prod4, thumbnailHat1, thumbnailHat2, thumbnailHat3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const hats = [
    {
        thumbnail: thumbnailHat1,
        bigHat: bigHat1,
    },
    {
        thumbnail: thumbnailHat2,
        bigHat: bigHat2,
    },
    {
        thumbnail: thumbnailHat3,
        bigHat: bigHat3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: prod1,
        name: "Sun-bloom Bonnets",
        price: "$200.20",
    },
    {
        imgURL: prod2,
        name: "Breezy-chic Brims",
        price: "$210.20",
    },
    {
        imgURL: prod3,
        name: "Tropic-aura Toppers",
        price: "$220.20",
    },
    {
        imgURL: prod4,
        name: "Beach-glow Floppies",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Experience hassle-free shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Shop with peace of mind through our secure payment options."
    },
    {
        imgURL: support,
        label: "Here to Assist",
        subtext: "Count on our dedicated team for support at every turn."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Jessica Sue White',
        rating: 4.5,
        feedback: "The meticulous attention to detail and the exceptional product quality surpassed all my expectations. I highly recommend it!"
    },
    {
        imgURL: customer2,
        customerName: 'Eren Keepling',
        rating: 4.5,
        feedback: "This product surpassed my expectations and left me thoroughly impressed. I'm certainly coming back for more!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Summer Collection", link: "/" },
            { name: "Beanies & Caps", link: "/" },
            { name: "Fedora Styles", link: "/" },
            { name: "Vintage Hats", link: "/" },
            { name: "Sun Protection Hats", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@example.com", link: "mailto:customer@example.com" },
            { name: "+000-000-0000", link: "tel:+000-000-0000" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];