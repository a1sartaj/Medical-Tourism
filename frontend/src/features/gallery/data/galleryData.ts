export interface GalleryItem {
    id: string;
    title: string;
    category: "infrastructure" | "technology" | "rooms" | "team";
    categoryLabel: string;
    hospitalName: string;
    location: string;
    imageUrl: string;
    description: string;
}

export const GALLERY_CATEGORIES = [
    { label: "All Photos", value: "all" },
    { label: "Hospital Campuses", value: "infrastructure" },
    { label: "Surgical Suites & Tech", value: "technology" },
    { label: "Inpatient Rooms & Lounges", value: "rooms" },
    { label: "Patient Care Teams", value: "team" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "gal-1",
        title: "Flagship Quaternary Campus",
        category: "infrastructure",
        categoryLabel: "Hospital Campus",
        hospitalName: "Max Super Speciality Hospital",
        location: "Saket, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
        description:
            "Exterior view of the multi-block tertiary care hospital campus in South Delhi featuring dedicated emergency bays and international intake reception.",
    },
    {
        id: "gal-2",
        title: "Da Vinci Xi Surgical Robotics Suite",
        category: "technology",
        categoryLabel: "Surgical Tech",
        hospitalName: "Max Super Speciality Hospital",
        location: "Saket, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
        description:
            "Fourth-generation multi-quadrant robotic console for minimally invasive urology, oncology, and cardiac interventions.",
    },
    {
        id: "gal-3",
        title: "International Patient Executive Lounge",
        category: "rooms",
        categoryLabel: "Patient Lounges",
        hospitalName: "Medanta - The Medicity",
        location: "Gurugram, NCR",
        imageUrl:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        description:
            "Comfortable waiting and private registration lounge equipped with multi-lingual assistance desks, complimentary refreshments, and currency exchange.",
    },
    {
        id: "gal-4",
        title: "Dedicated Cardiac Catheterization Lab",
        category: "technology",
        categoryLabel: "Surgical Tech",
        hospitalName: "Fortis Escorts Heart Institute",
        location: "Okhla, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
        description:
            "Digital biplane flat-panel cath lab for complex coronary angioplasties, structural heart repairs, and electrophysiology studies.",
    },
    {
        id: "gal-5",
        title: "Private Deluxe Patient Suite",
        category: "rooms",
        categoryLabel: "Inpatient Rooms",
        hospitalName: "Indraprastha Apollo Hospital",
        location: "Sarita Vihar, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
        description:
            "Spacious private room featuring an attendant sofa-bed, private bath, high-speed Wi-Fi, and electronic nursing call systems.",
    },
    {
        id: "gal-6",
        title: "On-Ground Patient Support Desk",
        category: "team",
        categoryLabel: "Care Teams",
        hospitalName: "CaresDaddy Headquarters",
        location: "Saket District Centre, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80",
        description:
            "Case management team coordinating airport transfers, medical visa approvals, and translator schedules for international patients.",
    },
    {
        id: "gal-7",
        title: "Advanced Critical Care ICU Pod",
        category: "infrastructure",
        categoryLabel: "Hospital Campus",
        hospitalName: "Medanta - The Medicity",
        location: "Gurugram, NCR",
        imageUrl:
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
        description:
            "HEPA-filtered positive pressure isolation cubicles with continuous hemodynamic telemetry and bedside blood gas monitoring.",
    },
    {
        id: "gal-8",
        title: "Post-Operative Rehabilitation Centre",
        category: "rooms",
        categoryLabel: "Inpatient Rooms",
        hospitalName: "Max Super Speciality Hospital",
        location: "Saket, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        description:
            "Physiotherapy and mobility gymnasium aiding rapid recovery for joint replacement and spinal rehabilitation patients.",
    },
    {
        id: "gal-9",
        title: "Multi-Lingual Interpreter Briefing",
        category: "team",
        categoryLabel: "Care Teams",
        hospitalName: "Fortis Escorts Heart Institute",
        location: "Okhla, New Delhi",
        imageUrl:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        description:
            "Native Arabic and Russian interpreters conducting pre-consultation briefings to ensure clear communication during physician rounds.",
    },
];