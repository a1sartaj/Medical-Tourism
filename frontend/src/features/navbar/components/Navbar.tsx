"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, BRAND_CONFIG } from "../data/navbar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <p className="hidden sm:block text-slate-400">
                        Accredited International Healthcare Assistance Desk
                    </p>
                    <div className="flex items-center gap-6 ml-auto sm:ml-0">
                        <a
                            href={`tel:${BRAND_CONFIG.phone}`}
                            className="flex items-center gap-1.5 hover:text-white transition font-medium"
                        >
                            <Phone className="w-3.5 h-3.5 text-blue-400" />
                            <span>{BRAND_CONFIG.phoneDisplay}</span>
                        </a>
                        <a
                            href={BRAND_CONFIG.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 hover:text-emerald-400 transition font-medium text-emerald-500"
                        >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp Support</span>
                        </a>
                    </div>
                </div>
            </div>

            <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
                        C+
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                            Cares<span className="text-blue-600">Daddy</span>
                            <span className="text-xs text-slate-400 font-normal">.com</span>
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                            Medical Tourism Platform
                        </span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition ${isActive
                                        ? "text-blue-600 bg-blue-50/70"
                                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition active:scale-95"
                    >
                        <span>{BRAND_CONFIG.ctaText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                    aria-label="Toggle Navigation"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
                    >
                        <div className="px-5 py-4 space-y-1">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${pathname === link.href
                                            ? "text-blue-600 bg-blue-50 font-semibold"
                                            : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-center w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm"
                                >
                                    {BRAND_CONFIG.ctaText}
                                </Link>
                                <a
                                    href={`tel:${BRAND_CONFIG.phone}`}
                                    className="flex items-center justify-center gap-2 py-2.5 text-xs text-slate-600 font-medium"
                                >
                                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                                    Call: {BRAND_CONFIG.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}