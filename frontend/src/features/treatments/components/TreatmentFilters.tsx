"use client";

import { motion } from "framer-motion";
import { Search, MapPin, DollarSign, Stethoscope, RotateCcw } from "lucide-react";
import {
    TREATMENT_CATEGORIES,
    DESTINATION_OPTIONS,
    BUDGET_RANGES,
} from "../data/filterData";

export interface FilterState {
    searchQuery: string;
    category: string;
    destination: string;
    budget: string;
}

interface TreatmentFiltersProps {
    filters: FilterState;
    onFilterChange: (newFilters: Partial<FilterState>) => void;
    onReset: () => void;
    resultsCount: number;
}

export default function TreatmentFilters({
    filters,
    onFilterChange,
    onReset,
    resultsCount,
}: TreatmentFiltersProps) {
    const isFiltered =
        filters.searchQuery !== "" ||
        filters.category !== "all" ||
        filters.destination !== "all" ||
        filters.budget !== "all";

    return (
        <section className="py-6 px-4 sm:px-8 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto space-y-4">
                {/* Filter Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Keyword Search */}
                    <div className="relative flex items-center">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <input
                            type="text"
                            value={filters.searchQuery}
                            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                            placeholder="Search treatment (e.g. CABG, Knee)..."
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                        />
                    </div>

                    {/* Specialty Dropdown */}
                    <div className="relative flex items-center">
                        <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.category}
                            onChange={(e) => onFilterChange({ category: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {TREATMENT_CATEGORIES.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Destination / Hospital Location */}
                    <div className="relative flex items-center">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.destination}
                            onChange={(e) => onFilterChange({ destination: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {DESTINATION_OPTIONS.map((dest) => (
                                <option key={dest.value} value={dest.value}>
                                    {dest.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Indicative Budget Filter */}
                    <div className="relative flex items-center">
                        <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                        <select
                            value={filters.budget}
                            onChange={(e) => onFilterChange({ budget: e.target.value })}
                            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition appearance-none cursor-pointer"
                        >
                            {BUDGET_RANGES.map((b) => (
                                <option key={b.value} value={b.value}>
                                    {b.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Count & Reset Filter */}
                <div className="flex items-center justify-between text-xs pt-1">
                    <p className="text-slate-500">
                        Showing <strong className="text-slate-900">{resultsCount}</strong> verified treatments
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
                            <span>Reset all filters</span>
                        </motion.button>
                    )}
                </div>
            </div>
        </section>
    );
}