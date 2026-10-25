"use client";

import { motion } from "framer-motion";
import {
    Building2,
    FileSpreadsheet,
    Plane,
    UserCheck,
    HeartHandshake,
    ShieldCheck,
    HelpCircle,
    AlertCircle,
} from "lucide-react";
import { WHY_ARRANGE_SERVICES, type WhyArrangeItem } from "../data/whyArrange";

const iconMap: Record<string, React.ElementType> = {
    Building2,
    FileSpreadsheet,
    Plane,
    UserCheck,
    HeartHandshake,
    ShieldCheck,
};

export default function WhyArrangeThroughUs() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="max-w-2xl space-y-3"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Patient Advocacy & Travel Coordination</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Why Arrange Treatment Through Us?
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Planning medical care across borders can be daunting. We operate as your on-ground case facilitator in Saket, Delhi, ensuring smooth administrative coordination between you and treating hospital departments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WHY_ARRANGE_SERVICES.map((item: WhyArrangeItem, idx: number) => {
                        const Icon = iconMap[item.iconName] || ShieldCheck;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                    delay: (idx % 3) * 0.08,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -3 }}
                                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                    className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-3.5"
                >
                    <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                            Medical Coordination Notice
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            CaresDaddy.com provides non-clinical administrative coordination, hospital matching, and travel guidance. The platform does not give independent medical diagnoses, recommend treatments, or act as a substitute for qualified clinicians. All final clinical decisions and treatment approvals rest exclusively with the licensed healthcare team at the partner hospital.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}