import type { Metadata } from "next";
import TrustIndicators from "@/features/home/components/TrustIndicators";
import PopularTreatments from "@/features/home/components/PopularTreatments";
import FeaturedHospitals from "@/features/home/components/FeaturedHospitals";
import FeaturedDoctors from "@/features/home/components/FeaturedDoctors";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";
import HowItWorks from "@/features/home/components/HowItWorks";
import TreatmentPackages from "@/features/home/components/TreatmentPackages";
import PatientServices from "@/features/home/components/PatientServices";
import PatientTestimonials from "@/features/home/components/PatientTestimonials";
import FAQSection from "@/features/home/components/FAQSection";
import FinalCta from "@/features/home/components/FinalCta";
import Hero from "@/features/home/components/Hero";
import MedicalGallery from "@/features/home/components/MedicalGallery";
import LatestBlogs from "@/features/home/components/LatestBlogs";

export const metadata: Metadata = {
    title: "CaresDaddy | Medical Tourism & Hospital Facilitation in India",
    description:
        "Connect with accredited hospitals and specialist doctors in India. Transparent treatment estimates, visa guidance, and patient assistance based in Saket, Delhi.",
    keywords: [
        "Medical Tourism India",
        "Hospitals in Saket Delhi",
        "Treatment Estimates India",
        "International Patient Assistance",
    ],
    alternates: {
        canonical: "https://caresdaddy.com",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <Hero />
            <TrustIndicators />
            <PopularTreatments />
            <FeaturedHospitals />
            <FeaturedDoctors />
            <WhyChooseUs />
            <HowItWorks />
            <TreatmentPackages />
            <PatientServices />
            <PatientTestimonials />
            <MedicalGallery />
            <LatestBlogs />
            <FAQSection />
            <FinalCta />
        </div>
    );
}