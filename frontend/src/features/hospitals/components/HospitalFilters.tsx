"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Award, Stethoscope, RotateCcw } from "lucide-react";
import {
    HOSPITAL_CITIES,
    HOSPITAL_SPECIALTIES,
    ACCREDITATION_OPTIONS,
    FACILITY_FILTERS,
} from "../data/hospitalsData";

export interface HospitalFilterState {
    searchQuery: string;
    city: string;
    specialty: string;
    accreditation: string;
    selectedFacility: string;
}

interface HospitalFiltersProps {
    filters: HospitalFilterState;
    onFilterChange: (newFilters: Partial<HospitalFilterState>) => void;
    onReset: () => void;
    resultsCount: number;
}

export default function HospitalFilters({
    filters,
    onFilterChange,
    onReset,
    resultsCount,
}: HospitalFiltersProps) {
    const isFiltered =
        filters.searchQuery !== "" ||
        filters.city !== "all" ||
        filters.specialty !== "all" ||
        filters.accreditation !== "all" ||
        filters.selectedFacility !== "all";

    return (
        <section className="py-6 px-4 sm:px-8 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Keyword Search */}
                    <div className="relative flex items-center">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                            type="text"
                            value={filters.searchQuery}
                            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                            placeholder="Search hospital name or treatment..."
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                        />
                    </div>

                    {/* Destination / City */}
                    <div className="relative flex items-center">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.city}
                            onChange={(e) => onFilterChange({ city: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {HOSPITAL_CITIES.map((c) => (
                                <option key={c.value} value={c.value}>
                                    {c.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Specialty */}
                    <div className="relative flex items-center">
                        <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.specialty}
                            onChange={(e) => onFilterChange({ specialty: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {HOSPITAL_SPECIALTIES.map((s) => (
                                <option key={s.value} value={s.value}>
                                    {s.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Verified Accreditation */}
                    <div className="relative flex items-center">
                        <Award className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.accreditation}
                            onChange={(e) => onFilterChange({ accreditation: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {ACCREDITATION_OPTIONS.map((a) => (
                                <option key={a.value} value={a.value}>
                                    {a.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Facility Filters Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                            Facility:
                        </span>
                        <button
                            type="button"
                            onClick={() => onFilterChange({ selectedFacility: "all" })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${filters.selectedFacility === "all"
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                }`}
                        >
                            All
                        </button>
                        {FACILITY_FILTERS.map((f) => (
                            <button
                                key={f.value}
                                type="button"
                                onClick={() => onFilterChange({ selectedFacility: f.value })}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${filters.selectedFacility === f.value
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs">
                        <span className="text-slate-500">
                            Showing <strong className="text-slate-900">{resultsCount}</strong> hospitals
                        </span>
                        {isFiltered && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                type="button"
                                onClick={onReset}
                                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Reset</span>
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}