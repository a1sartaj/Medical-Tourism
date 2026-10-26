import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
    title: "Medical Disclaimer | CaresDaddy.com",
    description:
        "Formal medical disclaimer outlining non-clinical boundaries, educational scope, and doctor-patient relationship guidelines for CaresDaddy.com.",
    alternates: {
        canonical: "https://caresdaddy.com/medical-disclaimer",
    },
};

export default function MedicalDisclaimerPage() {
    return (
        <div className="bg-slate-50/50 min-h-screen">
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Medical Disclaimer" }]} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white">
                        Medical Disclaimer
                    </h1>
                    <p className="text-xs text-slate-400">
                        Important Legal & Clinical Notice for International Patients
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-900 leading-relaxed font-medium">
                            CaresDaddy.com is an informational, non-clinical medical travel facilitation service based in Saket, New Delhi. We do not provide clinical medical diagnoses, offer medical treatments, or prescribe pharmaceuticals.
                        </p>
                    </div>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            1. Educational Reference Only
                        </h2>
                        <p>
                            All content published on CaresDaddy.com—including procedure guides, indicative pricing ranges, recovery durations, and hospital profiles—is provided for educational and administrative reference only. It must not be regarded as medical advice, clinical diagnosis, or a recommendation for any specific medical procedure.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            2. No Doctor-Patient Relationship
                        </h2>
                        <p>
                            Submitting inquiries, participating in pre-travel case reviews, or communicating with CaresDaddy coordinators does not create a physician-patient relationship. A formal clinician-patient relationship is established only upon in-person clinical registration and consultation with a licensed doctor at an accredited partner hospital.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            3. Clinical Autonomy & Final Treatment Decisions
                        </h2>
                        <p>
                            All medical evaluations, surgical decisions, pre-operative clearances, hospital stays, and post-operative instructions are governed solely by licensed medical practitioners at partner hospitals. You must seek direct clinical counsel from qualified healthcare providers before starting any new treatment or discontinuing existing medical regimens.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            4. Emergency Medical Situations
                        </h2>
                        <p>
                            CaresDaddy is not equipped to handle acute, life-threatening emergency medical crises. If you are experiencing a severe medical emergency, seek immediate local emergency clinical attention or call local emergency dispatch services without delay.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}