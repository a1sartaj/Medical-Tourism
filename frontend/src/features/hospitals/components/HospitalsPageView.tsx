"use client";

import { useState, useMemo } from "react";
import HospitalsHeader from "./HospitalsHeader";
import HospitalFilters, { type HospitalFilterState } from "./HospitalFilters";
import HospitalCard from "./HospitalCard";
import {
    DestinationInfo,
    HospitalFaqs,
    HospitalFinalCta,
} from "./HospitalExtras";
import { HOSPITALS_DATA } from "../data/hospitalsData";
import { AlertCircle } from "lucide-react";

interface HospitalsPageViewProps {
    initialSearchQuery?: string;
    initialCity?: string;
}

export default function HospitalsPageView({
    initialSearchQuery = "",
    initialCity = "all",
}: HospitalsPageViewProps) {
    const [filters, setFilters] = useState<HospitalFilterState>({
        searchQuery: initialSearchQuery,
        city: initialCity,
        specialty: "all",
        accreditation: "all",
        selectedFacility: "all",
    });

    const handleFilterChange = (updated: Partial<HospitalFilterState>) => {
        setFilters((prev) => ({ ...prev, ...updated }));
    };

    const handleReset = () => {
        setFilters({
            searchQuery: "",
            city: "all",
            specialty: "all",
            accreditation: "all",
            selectedFacility: "all",
        });
    };

    const filteredHospitals = useMemo(() => {
        return HOSPITALS_DATA.filter((hosp) => {
            // 1. Text Search
            if (filters.searchQuery.trim() !== "") {
                const query = filters.searchQuery.toLowerCase();
                const matchesName = hosp.name.toLowerCase().includes(query);
                const matchesTreatments = hosp.treatmentsOffered.some((t) =>
                    t.toLowerCase().includes(query)
                );
                if (!matchesName && !matchesTreatments) return false;
            }

            // 2. City
            if (filters.city !== "all" && hosp.cityCode !== filters.city) {
                return false;
            }

            // 3. Specialty
            if (filters.specialty !== "all") {
                const hasSpecialty = hosp.keySpecialties.some((s) =>
                    s.toLowerCase().includes(filters.specialty)
                );
                if (!hasSpecialty) return false;
            }

            // 4. Accreditation
            if (filters.accreditation !== "all") {
                if (
                    filters.accreditation === "jci" &&
                    !hosp.accreditations.some((a) => a.includes("JCI"))
                )
                    return false;
                if (
                    filters.accreditation === "nabh" &&
                    !hosp.accreditations.some((a) => a.includes("NABH"))
                )
                    return false;
                if (
                    filters.accreditation === "nabl" &&
                    !hosp.accreditations.some((a) => a.includes("NABL"))
                )
                    return false;
            }

            // 5. Facility
            if (
                filters.selectedFacility !== "all" &&
                !hosp.facilities.includes(filters.selectedFacility)
            ) {
                return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Section 1: Page Header */}
            <HospitalsHeader />

            {/* Section 2: Search and Filters */}
            <HospitalFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
                resultsCount={filteredHospitals.length}
            />

            {/* Section 3: Hospital Listing Cards */}
            <main className="py-12 sm:py-16 px-4 sm:px-8 bg-slate-50/60 flex-1">
                <div className="max-w-7xl mx-auto">
                    {filteredHospitals.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3 max-w-md mx-auto my-8">
                            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-slate-800">
                                No Hospitals Found
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                No accredited hospital campuses match your active filter criteria. Try expanding your search location or clearing filters.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredHospitals.map((hosp, idx) => (
                                <HospitalCard key={hosp.id} hospital={hosp} index={idx} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Section 4: Destination Information */}
            <DestinationInfo />

            {/* Section 5: FAQs */}
            <HospitalFaqs />

            {/* Section 6: Final CTA */}
            <HospitalFinalCta />
        </div>
    );
}