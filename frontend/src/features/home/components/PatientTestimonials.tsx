import Image from "next/image";
import { MessageSquareQuote, ShieldCheck, Star } from "lucide-react";
import { PATIENT_TESTIMONIALS } from "../data/patientTestimonials";

export default function PatientTestimonials() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        <span>Verified Patient Experiences</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        International Patient Feedback
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Real feedback shared by international patients regarding hospital facilitation, logistical support, and coordination services.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PATIENT_TESTIMONIALS.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
                        >
                            <div className="space-y-4">
                                {/* Rating & Verified Tag */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                                        ))}
                                    </div>
                                    {item.consentVerified && (
                                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                                            <ShieldCheck className="w-3.5 h-3.5" />
                                            Consent Verified
                                        </span>
                                    )}
                                </div>

                                {/* Quote Text */}
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                                    &ldquo;{item.feedback}&rdquo;
                                </p>
                            </div>

                            {/* Patient Profile Footer */}
                            <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                                {item.photo && (
                                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                        <Image
                                            src={item.photo}
                                            alt={item.patientName}
                                            fill
                                            sizes="44px"
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                                        <span className="truncate">{item.patientName}</span>
                                        <span title={item.country}>{item.flag}</span>
                                    </div>
                                    <div className="text-[11px] text-blue-600 font-semibold truncate">
                                        {item.treatmentCategory}
                                    </div>
                                    <div className="text-[10px] text-slate-400 truncate">
                                        {item.hospitalName}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compliance Note */}
                <p className="text-center text-[11px] text-slate-400 max-w-xl mx-auto">
                    Testimonials reflect individual administrative and non-clinical coordination experiences. Specific healthcare outcomes vary by individual diagnosis and clinical condition.
                </p>
            </div>
        </section>
    );
}