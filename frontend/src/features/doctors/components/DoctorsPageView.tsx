"use client";

import { useState, useMemo } from "react";
import DoctorsHeader from "./DoctorsHeader";
import DoctorFilters, { type DoctorFilterState } from "./DoctorFilters";
import DoctorCard from "./DoctorCard";
import DoctorInquiryCta from "./DoctorInquiryCta";
import { DOCTORS_DATA } from "../data/doctorsData";
import { AlertCircle } from "lucide-react";

interface DoctorsPageViewProps {
    initialSearchQuery?: string;
    initialSpecialty?: string;
}

export default function DoctorsPageView({
    initialSearchQuery = "",
    initialSpecialty = "all",
}: DoctorsPageViewProps) {
    const [filters, setFilters] = useState<DoctorFilterState>({
        searchQuery: initialSearchQuery,
        specialty: initialSpecialty,
        destination: "all",
        hospital: "all",
    });

    const handleFilterChange = (updated: Partial<DoctorFilterState>) => {
        setFilters((prev) => ({ ...prev, ...updated }));
    };

    const handleReset = () => {
        setFilters({
            searchQuery: "",
            specialty: "all",
            destination: "all",
            hospital: "all",
        });
    };

    const filteredDoctors = useMemo(() => {
        return DOCTORS_DATA.filter((doc) => {
            // 1. Keyword search (Name, Specialty, Sub-specialties)
            if (filters.searchQuery.trim() !== "") {
                const query = filters.searchQuery.toLowerCase();
                const matchesName = doc.name.toLowerCase().includes(query);
                const matchesSpec = doc.specialtyName.toLowerCase().includes(query);
                const matchesSubs = doc.subSpecialties.some((s) =>
                    s.toLowerCase().includes(query)
                );
                if (!matchesName && !matchesSpec && !matchesSubs) return false;
            }

            // 2. Specialty match
            if (filters.specialty !== "all" && doc.specialtyId !== filters.specialty) {
                return false;
            }

            // 3. Destination match
            if (
                filters.destination !== "all" &&
                doc.cityCode !== filters.destination
            ) {
                return false;
            }

            // 4. Hospital match
            if (filters.hospital !== "all" && doc.hospitalId !== filters.hospital) {
                return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Section 26: Page Header */}
            <DoctorsHeader />

            {/* Sections 27, 28 & 29: Search & Filters */}
            <DoctorFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
                resultsCount={filteredDoctors.length}
            />

            {/* Section 30: Doctor Listing Cards */}
            <main className="py-12 sm:py-16 px-4 sm:px-8 bg-slate-50/60 flex-1">
                <div className="max-w-7xl mx-auto">
                    {filteredDoctors.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3 max-w-md mx-auto my-8">
                            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-slate-800">
                                No Doctors Found
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                No specialists match your selected criteria. Try adjusting your specialty or destination filters.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredDoctors.map((doc, idx) => (
                                <DoctorCard key={doc.id} doctor={doc} index={idx} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Section 33: Consultation Inquiry CTA */}
            <DoctorInquiryCta />
        </div>
    );
}