import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <div className="text-xl font-bold text-white tracking-tight">
                        Cares<span className="text-blue-500">Daddy</span>.com
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        International patient facilitation platform helping patients find verified hospitals and specialist care globally.
                    </p>
                    <div className="flex items-center gap-3 text-slate-300">
                        <a
                            href="https://wa.me/919818286609"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="hover:text-emerald-400 transition"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-400 transition"
                        >
                            <FaLinkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-blue-500 transition"
                        >
                            <FaFacebook className="w-4 h-4" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-pink-400 transition"
                        >
                            <FaInstagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold text-sm mb-4">Patient Services</h4>
                    <ul className="space-y-2 text-xs">
                        <li><Link href="/treatments" className="hover:text-white transition">Medical Treatments</Link></li>
                        <li><Link href="/hospitals" className="hover:text-white transition">Accredited Hospitals</Link></li>
                        <li><Link href="/doctors" className="hover:text-white transition">Specialist Doctors</Link></li>
                        <li><Link href="/patient-services" className="hover:text-white transition">Medical Visa & Travel</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold text-sm mb-4">Transparency</h4>
                    <ul className="space-y-2 text-xs">
                        <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                        <li><Link href="/medical-disclaimer" className="hover:text-white transition">Medical Disclaimer</Link></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm mb-4">Assistance Desk</h4>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                        <a href="tel:+919818286609" className="hover:underline">+91 98182 86609</a>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>support@caresdaddy.com</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Saket, Delhi, India</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-900 py-6 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                    <p>© <CurrentYear /> CaresDaddy.com. All rights reserved.</p>
                    <p>
                        Developed by{" "}
                        <a
                            href="https://digitalsdaddy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-500 hover:underline"
                        >
                            digitalsdaddy.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}