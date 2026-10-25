"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ArrowRight, Stethoscope } from "lucide-react";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Doctors", href: "/doctors" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

function NavLinksDesktop() {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
                const isActive =
                    link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-xs font-semibold transition-colors duration-150 ${isActive
                                ? "text-blue-600 font-bold"
                                : "text-slate-600 hover:text-slate-950"
                            }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

function NavLinksMobile({ onClose }: { onClose: () => void }) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-2 pt-2">
            {NAV_LINKS.map((link) => {
                const isActive =
                    link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition ${isActive
                                ? "bg-blue-50 text-blue-600 font-bold"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
}

function NavLinksFallback() {
    return (
        <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
                <span
                    key={link.name}
                    className="text-xs font-semibold text-slate-400 select-none"
                >
                    {link.name}
                </span>
            ))}
        </nav>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
            {/* Top Utility Bar */}
            <div className="hidden lg:block bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+919818286609"
                            className="flex items-center gap-1.5 hover:text-white transition"
                        >
                            <Phone className="w-3 h-3 text-blue-400" />
                            <span>+91 9818286609</span>
                        </a>
                        <a
                            href="mailto:support@caresdaddy.com"
                            className="flex items-center gap-1.5 hover:text-white transition"
                        >
                            <Mail className="w-3 h-3 text-blue-400" />
                            <span>support@caresdaddy.com</span>
                        </a>
                    </div>
                    <span className="text-slate-400 font-medium">
                        International Medical Care Assistance Desk • Saket, Delhi
                    </span>
                </div>
            </div>

            {/* Main Navbar Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                        <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="text-lg font-black text-slate-950 tracking-tight leading-none block">
                            CaresDaddy<span className="text-blue-600">.com</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium tracking-wide block">
                            Medical Tourism Platform
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation Links inside Suspense */}
                <Suspense fallback={<NavLinksFallback />}>
                    <NavLinksDesktop />
                </Suspense>

                {/* Action Button */}
                <div className="hidden sm:flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm transition active:scale-95 flex items-center gap-1.5"
                    >
                        <span>Free Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition md:hidden"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4">
                    <Suspense fallback={<div className="h-32" />}>
                        <NavLinksMobile onClose={() => setIsOpen(false)} />
                    </Suspense>
                    <div className="pt-2 border-t border-slate-100">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full py-3 bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                        >
                            <span>Free Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}