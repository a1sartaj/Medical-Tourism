"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowUpRight, BedDouble, Hotel } from "lucide-react";
import {
    TREATMENT_PACKAGES,
    CURRENCY_OPTIONS,
    type CurrencyRate,
} from "../data/treatmentPackages";

export default function PackagePricingGrid() {
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyRate>(
        CURRENCY_OPTIONS[0]
    );

    const formatPrice = (usdAmount: number) => {
        const converted = Math.round(usdAmount * selectedCurrency.rateAgainstUSD);
        return `${selectedCurrency.symbol}${converted.toLocaleString()}`;
    };

    return (
        <div className="space-y-8">
            {/* Currency Selector Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                    <span className="text-xs font-bold text-slate-900 block">
                        Select Preferred Currency
                    </span>
                    <span className="text-[11px] text-slate-500">
                        Indicative conversions calculated at estimated standard rates
                    </span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
                    {CURRENCY_OPTIONS.map((c) => (
                        <motion.button
                            key={c.code}
                            type="button"
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setSelectedCurrency(c)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${selectedCurrency.code === c.code
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-slate-600 hover:text-slate-950 hover:bg-white/80"
                                }`}
                        >
                            {c.code} ({c.symbol})
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Package Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TREATMENT_PACKAGES.map((pkg, idx) => (
                    <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.35,
                            delay: idx * 0.08,
                            ease: "easeOut",
                        }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div className="p-6 space-y-5">
                            <div>
                                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 mb-2">
                                    {pkg.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                    {pkg.title}
                                </h3>
                            </div>

                            {/* Price Heading */}
                            <div className="pb-4 border-b border-slate-100">
                                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide block">
                                    Indicative Package Starting At
                                </span>
                                <div className="text-3xl font-black text-slate-900 mt-1">
                                    {formatPrice(pkg.basePriceUSD)}
                                    <span className="text-xs font-normal text-slate-400 ml-1">
                                        / procedure
                                    </span>
                                </div>
                            </div>

                            {/* Stay Durations */}
                            <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                                <div className="flex items-center gap-2">
                                    <BedDouble className="w-4 h-4 text-blue-600 shrink-0" />
                                    <span>{pkg.hospitalStay}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Hotel className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>{pkg.hotelStay}</span>
                                </div>
                            </div>

                            {/* Inclusions */}
                            <div className="space-y-2 pt-2">
                                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                                    Package Inclusions
                                </span>
                                <ul className="space-y-1.5 text-xs text-slate-600">
                                    {pkg.inclusions.map((inc) => (
                                        <li key={inc} className="flex items-start gap-2">
                                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Exclusions */}
                            <div className="space-y-2 pt-2 border-t border-slate-100">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                    Important Exclusions
                                </span>
                                <ul className="space-y-1.5 text-xs text-slate-500">
                                    {pkg.exclusions.map((exc) => (
                                        <li key={exc} className="flex items-start gap-2">
                                            <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                            <span>{exc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 pt-0">
                            <Link
                                href={`/contact?package=${pkg.id}`}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition active:scale-95 flex items-center justify-center gap-1.5"
                            >
                                <span>Request Personalized Estimate</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}