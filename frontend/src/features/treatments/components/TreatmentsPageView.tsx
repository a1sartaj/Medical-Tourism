"use client";

import { useState, useMemo } from "react";
import TreatmentsHeader from "./TreatmentsHeader";
import TreatmentCategoryPills from "./TreatmentCategoryPills";
import TreatmentFilters, { type FilterState } from "./TreatmentFilters";
import TreatmentList from "./TreatmentList";
import WhyArrangeThroughUs from "./WhyArrangeThroughUs";
import TreatmentFaqs from "./TreatmentFaqs";
import TreatmentsInquiryCta from "./TreatmentsInquiryCta";
import { TREATMENTS_DATA } from "../data/treatmentsData";

interface TreatmentsPageViewProps {
    initialSearchQuery?: string;
    initialCategory?: string;
}

export default function TreatmentsPageView({
    initialSearchQuery = "",
    initialCategory = "all",
}: TreatmentsPageViewProps) {
    const [filters, setFilters] = useState<FilterState>({
        searchQuery: initialSearchQuery,
        category: initialCategory,
        destination: "all",
        budget: "all",
    });

    const handleFilterChange = (updated: Partial<FilterState>) => {
        setFilters((prev) => ({ ...prev, ...updated }));
    };

    const handleResetFilters = () => {
        setFilters({
            searchQuery: "",
            category: "all",
            destination: "all",
            budget: "all",
        });
    };

    // Filter Logic
    const filteredTreatments = useMemo(() => {
        return TREATMENTS_DATA.filter((item) => {
            // 1. Text Search Match (Name + Description)
            if (filters.searchQuery.trim() !== "") {
                const query = filters.searchQuery.toLowerCase();
                const matchesName = item.name.toLowerCase().includes(query);
                const matchesDesc = item.description.toLowerCase().includes(query);
                const matchesCat = item.categoryName.toLowerCase().includes(query);
                if (!matchesName && !matchesDesc && !matchesCat) return false;
            }

            // 2. Specialty Category Match
            if (filters.category !== "all" && item.categoryId !== filters.category) {
                return false;
            }

            // 3. Destination Match
            if (
                filters.destination !== "all" &&
                item.destinationCode !== filters.destination
            ) {
                return false;
            }

            // 4. Budget Range Match
            if (filters.budget !== "all") {
                if (filters.budget === "under-3000" && item.startingCostUSD >= 3000)
                    return false;
                if (
                    filters.budget === "3000-6000" &&
                    (item.startingCostUSD < 3000 || item.startingCostUSD > 6000)
                )
                    return false;
                if (
                    filters.budget === "6000-10000" &&
                    (item.startingCostUSD < 6000 || item.startingCostUSD > 10000)
                )
                    return false;
                if (filters.budget === "above-10000" && item.startingCostUSD < 10000)
                    return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Section 1: Page Header with Breadcrumbs */}
            <TreatmentsHeader />

            {/* Section 3: Treatment Categories (Quick Pills) */}
            <TreatmentCategoryPills
                selectedCategory={filters.category}
                onSelectCategory={(catId) => handleFilterChange({ category: catId })}
            />

            {/* Section 2: Search, Filters & Counters */}
            <TreatmentFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
                resultsCount={filteredTreatments.length}
            />

            {/* Section 4: Treatment Listing Cards */}
            <main className="py-12 sm:py-16 px-4 sm:px-8 bg-slate-50/60 flex-1">
                <div className="max-w-7xl mx-auto">
                    <TreatmentList treatments={filteredTreatments} />
                </div>
            </main>

            {/* Section 5: Why Arrange Treatment Through Us */}
            <WhyArrangeThroughUs />

            {/* Section 6: Common Treatment FAQs */}
            <TreatmentFaqs />

            {/* Section 7: Final Treatment Inquiry CTA */}
            <TreatmentsInquiryCta />
        </div>
    );
}