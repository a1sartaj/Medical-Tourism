"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Stethoscope } from "lucide-react";
import { toast } from "sonner";

export default function HeroSearch() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.info("Please enter a treatment, specialty, or procedure name.");
            return;
        }
        toast.success(`Searching for "${query}"...`);
        router.push(`/treatments?q=${encodeURIComponent(query.trim())}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl shadow-slate-950/40 flex flex-col sm:flex-row items-center gap-2 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20"
        >
            <div className="flex items-center gap-3 w-full px-3 py-1.5 flex-1">
                <Stethoscope className="w-5 h-5 text-blue-600 shrink-0" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search treatments (e.g. Knee Replacement, CABG, IVF)..."
                    className="w-full text-sm outline-none text-slate-800 placeholder:text-slate-400 bg-transparent font-normal"
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2 shrink-0 shadow-md shadow-blue-600/20"
            >
                <Search className="w-4 h-4" />
                <span>Search</span>
            </motion.button>
        </form>
    );
}