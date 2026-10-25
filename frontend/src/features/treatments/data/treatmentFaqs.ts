export interface TreatmentFaqItem {
    id: string;
    question: string;
    answer: string;
}

export const TREATMENT_PAGE_FAQS: TreatmentFaqItem[] = [
    {
        id: "faq-trt-1",
        question: "How do I choose the most suitable treatment and hospital?",
        answer:
            "Our team reviews your current medical reports and diagnosis alongside senior clinical consultants from accredited partner hospitals. We present comparative options highlighting hospital infrastructure, surgeon expertise, and package details to help you make an informed choice.",
    },
    {
        id: "faq-trt-2",
        question: "How is the indicative treatment cost calculated?",
        answer:
            "Published estimates reflect standard baseline hospital tariffs for uncomplicated procedures, covering surgeon fees, standard operating theatre charges, designated hospital stay, and standard consumable materials. The final quote is verified after the hospital evaluates your recent diagnostic investigations.",
    },
    {
        id: "faq-trt-3",
        question: "Can I receive a specialist consultation prior to traveling?",
        answer:
            "Yes, we organize initial teleconsultations and written second opinions with authorized specialists. This ensures your clinical eligibility is confirmed and all pre-travel queries are addressed before booking flights.",
    },
    {
        id: "faq-trt-4",
        question: "What medical reports are required to initiate an inquiry?",
        answer:
            "Recent diagnostic summaries, blood reports, imaging files (such as MRI, CT, or X-rays in DICOM format), and clinical notes from your local attending physician provide the necessary information for partner hospitals to assess your case.",
    },
    {
        id: "faq-trt-5",
        question: "Who confirms the final treatment plan and procedure date?",
        answer:
            "All medical procedures, surgical plans, and scheduled dates are confirmed directly by the treating chief consultant and hospital clinical board following initial in-person evaluations upon arrival.",
    },
    {
        id: "faq-trt-6",
        question: "How far in advance should I book my medical trip?",
        answer:
            "We recommend initiating the inquiry 2 to 3 weeks before your intended travel date. This allows sufficient time to receive hospital estimates, process the Medical Visa (FRRO invitation letter), and book appropriate flights and accommodation.",
    },
];