export interface GalleryItem {
    id: string;
    title: string;
    caption: string;
    category: "Hospitals" | "Facilities" | "Patient Services";
    imageUrl: string;
    altText: string;
    hospitalName: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "gal-1",
        title: "Advanced Robotic Surgery Suite",
        caption: "State-of-the-art robotic system for minimally invasive orthopedic and cardiac surgeries.",
        category: "Facilities",
        hospitalName: "Max Super Speciality Hospital, Saket",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
        altText: "Modern robotic-assisted surgical theatre with high-definition digital monitors",
    },
    {
        id: "gal-2",
        title: "International Patient Executive Lounge",
        caption: "Dedicated registration, private consultation desks, and concierge waiting spaces.",
        category: "Patient Services",
        hospitalName: "Fortis Escorts Heart Institute",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        altText: "Comfortable international patient coordination lounge with reception desks",
    },
    {
        id: "gal-3",
        title: "Multi-Speciality Inpatient Campus",
        caption: "JCI & NABH accredited tertiary care healthcare facility infrastructure.",
        category: "Hospitals",
        hospitalName: "Medanta - The Medicity",
        imageUrl: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
        altText: "Exterior view of modern accredited multi-speciality hospital building",
    },
    {
        id: "gal-4",
        title: "Cardiac Catheterization Laboratory",
        caption: "High-precision fluoroscopy and angiography imaging for interventional procedures.",
        category: "Facilities",
        hospitalName: "Max Smart Super Speciality Hospital, Saket",
        imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
        altText: "Digital Cath Lab equipped with C-arm imaging equipment and surgical tables",
    },
    {
        id: "gal-5",
        title: "Private Deluxe Recovery Suite",
        caption: "Sanitized private patient rooms with medical gas connections and attendant amenities.",
        category: "Patient Services",
        hospitalName: "Fortis Memorial Research Institute",
        imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
        altText: "Well-lit private patient recovery room with hospital bed and lounge area",
    },
    {
        id: "gal-6",
        title: "Specialist Clinical Consultation Wing",
        caption: "Private diagnostic and doctor evaluation chambers designed for clear clinical reviews.",
        category: "Hospitals",
        hospitalName: "Indraprastha Apollo Hospital",
        imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        altText: "Physician examination chamber with modern medical evaluation tools",
    },
];