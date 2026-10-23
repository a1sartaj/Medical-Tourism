export interface NavItem {
    label: string;
    href: string;
}

export const NAV_LINKS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "Hospitals", href: "/hospitals" },
    { label: "Doctors", href: "/doctors" },
    { label: "Patient Services", href: "/patient-services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
];

export const BRAND_CONFIG = {
    name: "CaresDaddy.com",
    phone: "+91 9818286609",
    phoneDisplay: "+91 98182 86609",
    whatsappUrl: "https://wa.me/919818286609",
    ctaText: "Get Free Estimate",
};