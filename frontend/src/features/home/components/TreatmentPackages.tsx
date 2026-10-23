import { AlertCircle, Layers } from "lucide-react";
import PackagePricingGrid from "./PackagePricingGrid";

export default function TreatmentPackages() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50/70 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="max-w-2xl space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Transparent Pricing Models</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Treatment Cost & Indicative Packages
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Standard bundled treatment scopes to help international patients plan expenses clearly prior to departure.
                    </p>
                </div>

                {/* Client Interactive Pricing Grid */}
                <PackagePricingGrid />

                {/* Pricing & Estimation Medical Disclaimer */}
                <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 flex items-start gap-3.5">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                            Pricing Disclaimer & Assessment Requirement
                        </h4>
                        <p className="text-xs text-amber-900/80 leading-relaxed">
                            All package prices displayed above are strictly indicative starting estimates based on standard clinical workflows. Actual final hospital quotes are determined solely after evaluating your medical records, diagnostic imaging, pre-existing health parameters, and specific surgeon assessments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}