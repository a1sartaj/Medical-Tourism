import type { LucideIcon } from "lucide-react";

interface StatCardProps {
    value: string;
    label: string;
    description?: string;
    icon: LucideIcon;
}

export default function StatCard({
    value,
    label,
    description,
    icon: Icon,
}: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {value}
                </span>
            </div>
            <div>
                <h3 className="text-sm font-bold text-slate-800">{label}</h3>
                {description && (
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}