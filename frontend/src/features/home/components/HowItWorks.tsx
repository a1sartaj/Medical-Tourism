import Link from "next/link";
import { ArrowRight, Workflow } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data/howItWorks";

export default function HowItWorks() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>Process Workflow</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        A clear, transparent six-step journey designed to coordinate your international medical care safely and efficiently.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {HOW_IT_WORKS_STEPS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.step}
                                className="group relative bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/80 p-7 transition-all duration-300 hover:shadow-lg hover:border-blue-500/40 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                                            {item.step}
                                        </span>
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Step {item.step} verified step</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Bar */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="space-y-1 text-center md:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold">
                            Ready to begin your medical consultation?
                        </h3>
                        <p className="text-xs text-slate-400">
                            Submit your inquiry or reports for an initial clinical estimate from partner hospitals.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition shadow-md active:scale-95 flex items-center gap-2 shrink-0"
                    >
                        <span>Start Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}