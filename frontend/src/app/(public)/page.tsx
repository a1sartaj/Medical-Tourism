import FAQSection from "@/features/home/components/FAQSection";
import FeaturedDoctors from "@/features/home/components/FeaturedDoctors";
import FeaturedHospitals from "@/features/home/components/FeaturedHospitals";
import FinalCta from "@/features/home/components/FinalCta";
import Hero from "@/features/home/components/hero/Hero";
import HowItWorks from "@/features/home/components/HowItWorks";
import PatientServices from "@/features/home/components/PatientServices";
import PatientTestimonials from "@/features/home/components/PatientTestimonials";
import PopularTreatments from "@/features/home/components/PopularTreatments";
import TreatmentPackages from "@/features/home/components/TreatmentPackages";
import TrustIndicators from "@/features/home/components/TrustIndicators";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";

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
            <FAQSection />
            <FinalCta />
        </div>
    );
}