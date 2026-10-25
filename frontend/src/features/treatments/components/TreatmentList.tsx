"use client";

import TreatmentCard from "./TreatmentCard";
import type { TreatmentListItem } from "../data/treatmentsData";
import { AlertCircle } from "lucide-react";

interface TreatmentListProps {
    treatments: TreatmentListItem[];
}

export default function TreatmentList({ treatments }: TreatmentListProps) {
    if (treatments.length === 0) {
        return (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-12 text-center space-y-3 max-w-xl mx-auto my-8">
                <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 mx-auto flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-800">
                    No Treatments Found
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                    No medical procedures match your selected filters. Try choosing a different specialty, adjusting your budget range, or clearing the search terms.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, idx) => (
                <TreatmentCard
                    key={treatment.id}
                    treatment={treatment}
                    index={idx}
                />
            ))}
        </div>
    );
}