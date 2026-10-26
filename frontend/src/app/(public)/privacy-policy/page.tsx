import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
    title: "Privacy Policy | CaresDaddy.com",
    description:
        "Privacy policy regarding patient data collection, diagnostic report transfers, data security, and consent management on CaresDaddy.com.",
    alternates: {
        canonical: "https://caresdaddy.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-slate-50/50 min-h-screen">
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
                <div className="max-w-4xl mx-auto space-y-4">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white">
                        Privacy Policy
                    </h1>
                    <p className="text-xs text-slate-400">
                        Effective Date: October 2026 • Patient Confidentiality Standard
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            1. Information We Collect
                        </h2>
                        <p>
                            To facilitate hospital second opinions and travel coordination, we collect personal identity data (name, email, phone, passport copies for visa invitation letters) and relevant clinical documents (imaging scans, physician summaries, and diagnostic reports).
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            2. How Your Medical Information Is Used
                        </h2>
                        <p>
                            Your medical data is shared strictly with accredited hospital clinical boards, chief consultants, and authorized international coordinators for the express purpose of evaluating your case and preparing formal treatment estimates. We do not sell, rent, or monetize patient information under any circumstances.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            3. Data Security & Encryption
                        </h2>
                        <p>
                            All files transmitted through CaresDaddy.com or our dedicated case management channels are stored in encrypted environments adhering to international health data handling standards. Access is restricted to authorized personnel managing your case.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-bold text-slate-900">
                            4. Patient Consent & Rights
                        </h2>
                        <p>
                            By submitting your diagnostic files, you provide explicit consent for CaresDaddy to transmit your information to selected hospital specialists. You retain the right to request deletion or modification of your records from our systems at any time by emailing privacy@caresdaddy.com.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}