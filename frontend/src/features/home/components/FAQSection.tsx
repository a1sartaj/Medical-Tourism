import Link from "next/link";
import { HelpCircle, PhoneCall } from "lucide-react";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Help & Answers</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Everything you need to know about international hospital referrals, estimates, and medical travel coordination.
                    </p>
                </div>

                <FAQAccordion />

                <div className="text-center pt-4">
                    <p className="text-xs text-slate-500">
                        Have a question that is not covered here?{" "}
                        <Link
                            href="/contact"
                            className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1 ml-1"
                        >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Contact our international patient desk</span>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}