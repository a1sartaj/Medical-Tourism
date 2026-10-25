"use client";

import { motion } from "framer-motion";
import { Search, Stethoscope, Building2, MapPin, RotateCcw } from "lucide-react";
import {
    DOCTOR_SPECIALTIES,
    DOCTOR_DESTINATIONS,
    DOCTOR_HOSPITALS,
} from "../data/doctorsData";

export interface DoctorFilterState {
    searchQuery: string;
    specialty: string;
    destination: string;
    hospital: string;
}

interface DoctorFiltersProps {
    filters: DoctorFilterState;
    onFilterChange: (newFilters: Partial<DoctorFilterState>) => void;
    onReset: () => void;
    resultsCount: number;
}

export default function DoctorFilters({
    filters,
    onFilterChange,
    onReset,
    resultsCount,
}: DoctorFiltersProps) {
    const isFiltered =
        filters.searchQuery !== "" ||
        filters.specialty !== "all" ||
        filters.destination !== "all" ||
        filters.hospital !== "all";

    return (
        <section className="py-6 px-4 sm:px-8 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Section 27: Search by doctor name */}
                    <div className="relative flex items-center">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                            type="text"
                            value={filters.searchQuery}
                            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                            placeholder="Search doctor by name or condition..."
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                        />
                    </div>

                    {/* Section 28: Specialty filters */}
                    <div className="relative flex items-center">
                        <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.specialty}
                            onChange={(e) => onFilterChange({ specialty: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {DOCTOR_SPECIALTIES.map((s) => (
                                <option key={s.value} value={s.value}>
                                    {s.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Section 29: Destination filter */}
                    <div className="relative flex items-center">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.destination}
                            onChange={(e) => onFilterChange({ destination: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {DOCTOR_DESTINATIONS.map((d) => (
                                <option key={d.value} value={d.value}>
                                    {d.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Section 29: Hospital filter */}
                    <div className="relative flex items-center">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.hospital}
                            onChange={(e) => onFilterChange({ hospital: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {DOCTOR_HOSPITALS.map((h) => (
                                <option key={h.value} value={h.value}>
                                    {h.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Counter & Reset Action */}
                <div className="flex items-center justify-between text-xs pt-1">
                    <p className="text-slate-500">
                        Showing <strong className="text-slate-900">{resultsCount}</strong> verified clinical specialists
                    </p>

                    {isFiltered && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            type="button"
                            onClick={onReset}
                            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Reset filters</span>
                        </motion.button>
                    )}
                </div>
            </div>
        </section>
    );
}