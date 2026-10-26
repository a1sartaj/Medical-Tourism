import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
    title: "Terms of Service | CaresDaddy.com",
    description:
        "Terms of service governing use of CaresDaddy.com, non-clinical medical travel facilitation, hospital coordination, and platform liability boundaries.",
    alternates: {
        canonical: "https://caresdaddy.com/terms-of-service",
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-slate-50/50 min-h-screen">
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Terms of Service" }]} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white">
                        Terms of Service
                    </h1>
                    <p className="text-xs text-slate-400">
                        Effective Date: October 2026 • CaresDaddy Medical Services (Saket, New Delhi)
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            1. Acceptance of Terms & Service Scope
                        </h2>
                        <p>
                            By accessing CaresDaddy.com or engaging our coordination services, you acknowledge and agree to be bound by these Terms of Service. CaresDaddy acts solely as an independent administrative facilitator connecting patients with accredited healthcare providers in India. CaresDaddy is not a licensed hospital, healthcare provider, or medical practice.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            2. Non-Clinical Administrative Role
                        </h2>
                        <p>
                            Information provided via our website, email correspondence, or messaging channels does not constitute formal medical diagnosis or advice. All clinical decisions, treatment protocols, surgical procedures, and post-operative evaluations remain exclusively under the independent professional judgment of the treating hospital medical board and attending clinicians.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            3. Treatment Quotations & Direct Financial Settlement
                        </h2>
                        <p>
                            All published tariffs, packages, and cost ranges are indicative estimates provided by partner hospitals for uncomplicated procedures. Final invoices are determined solely by the treating hospital following in-person diagnostics. All financial payments for medical care must be made directly to the treating hospital. CaresDaddy charges no markups on hospital clinical invoices.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            4. Travel, Visas, and Logistics
                        </h2>
                        <p>
                            CaresDaddy assists patients in obtaining hospital Medical Visa invitation letters. We do not guarantee visa approval, which remains the sovereign discretion of the Government of India. Flight changes, airline delays, and travel insurance remain the individual responsibility of the patient.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            5. Limitation of Liability & Governing Law
                        </h2>
                        <p>
                            CaresDaddy shall not be liable for any clinical outcomes, surgical complications, medical malpractice, or disputes arising between patients and partner hospitals. All claims relating to the use of our coordination services shall be governed exclusively by the laws of the National Capital Territory of Delhi, India.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}