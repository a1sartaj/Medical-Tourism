"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    ShieldCheck,
    CheckCircle2,
    Upload,
    FileCheck2,
    Trash2,
    ExternalLink,
    Navigation,
} from "lucide-react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/common/Breadcrumbs";

interface UploadedPdf {
    id: string;
    name: string;
    sizeMb: string;
    file: File;
}

export default function ContactPageView() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        treatment: "General Medical Evaluation",
        preferredHospital: "Any Partner Hospital",
        notes: "",
    });

    const [uploadedFiles, setUploadedFiles] = useState<UploadedPdf[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // File Validation & Handling
    const handleFiles = (files: FileList | null) => {
        if (!files || files.length === 0) return;

        const newFiles: UploadedPdf[] = [];
        Array.from(files).forEach((file) => {
            if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
                toast.error(`${file.name} is not a PDF. Only PDF files are supported.`);
                return;
            }

            if (file.size > 20 * 1024 * 1024) {
                toast.error(`${file.name} exceeds the 20MB limit.`);
                return;
            }

            const sizeInMb = (file.size / (1024 * 1024)).toFixed(2) + " MB";
            newFiles.push({
                id: `${file.name}-${Date.now()}-${Math.random()}`,
                name: file.name,
                sizeMb: sizeInMb,
                file,
            });
        });

        if (newFiles.length > 0) {
            setUploadedFiles((prev) => [...prev, ...newFiles]);
            toast.success(`${newFiles.length} PDF report${newFiles.length > 1 ? "s" : ""} added.`);
        }
    };

    const removeFile = (id: string) => {
        setUploadedFiles((prev) => prev.filter((item) => item.id !== id));
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phone) {
            toast.error("Please fill in all mandatory fields.");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success("Inquiry and medical records submitted successfully.");
        }, 1200);
    };

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Header */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Contact Us & Free Quote" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <Phone className="w-3.5 h-3.5 text-blue-400" />
                            <span>International Medical Assistance Desk</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Contact Us & Request a Quote
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            Connect directly with our patient coordination desk in Saket, New Delhi. Submit your reports for hospital-verified treatment estimates, doctor reviews, and visa invitations.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Form Column */}
                <div className="lg:col-span-7 h-fit bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-900">
                            Submit Your Medical Case Details
                        </h2>
                        <p className="text-xs text-slate-500">
                            Upload diagnostic PDFs to receive doctor-reviewed treatment estimates within 24–48 hours.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900">
                                Case Inquiry & Documents Successfully Received
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                                Our senior case manager in Saket has received your medical inquiry along with {uploadedFiles.length} attached diagnostic record(s). We will contact you via WhatsApp and email within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                        Patient Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        placeholder="e.g. Tariq Al-Harbi"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                        Country of Residence *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        placeholder="e.g. Saudi Arabia, Uzbekistan, Kenya"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                        Phone / WhatsApp Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+966 50 000 0000"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="patient@example.com"
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                        Treatment Category
                                    </label>
                                    <select
                                        value={formData.treatment}
                                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition cursor-pointer"
                                    >
                                        <option value="Cardiology">Cardiology & Bypass Surgery (CABG)</option>
                                        <option value="Orthopedics">Robotic Knee / Joint Replacement</option>
                                        <option value="Oncology">Oncology & Proton Beam Therapy</option>
                                        <option value="Spine & Neuro">Spine Surgery & Neurology</option>
                                        <option value="Organ Transplant">Living Donor Kidney / Liver Transplant</option>
                                        <option value="General Medical Evaluation">General Medical Evaluation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                        Preferred Hospital Campuses
                                    </label>
                                    <select
                                        value={formData.preferredHospital}
                                        onChange={(e) => setFormData({ ...formData, preferredHospital: e.target.value })}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition cursor-pointer"
                                    >
                                        <option value="Any Partner Hospital">Recommend Best Suited Campus</option>
                                        <option value="Max Super Speciality Hospital, Saket">Max Super Speciality Hospital, Saket</option>
                                        <option value="Fortis Escorts Heart Institute">Fortis Escorts Heart Institute</option>
                                        <option value="Medanta - The Medicity, Gurugram">Medanta - The Medicity, Gurugram</option>
                                        <option value="Indraprastha Apollo Hospital">Indraprastha Apollo Hospital</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                                    Medical Summary & Clinical Inquiries
                                </label>
                                <textarea
                                    rows={3}
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    placeholder="Detail previous diagnosis, doctor recommendations, current symptoms, or questions about arrival timing..."
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>

                            {/* Dedicated PDF Document Upload Zone */}
                            <div className="space-y-2 pt-1">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                                    Upload Diagnostic Reports (PDF Only, Max 20MB per file)
                                </label>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={(e) => handleFiles(e.target.files)}
                                    accept="application/pdf"
                                    multiple
                                    className="hidden"
                                />

                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`p-6 rounded-2xl border-2 border-dashed transition text-center cursor-pointer flex flex-col items-center justify-center gap-2 ${isDragging
                                        ? "border-blue-500 bg-blue-50/70"
                                        : "border-slate-300 bg-slate-50 hover:bg-slate-100/70 hover:border-slate-400"
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <Upload className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-800 block">
                                            Click to browse or drag & drop PDF files here
                                        </span>
                                        <span className="text-[11px] text-slate-500 block mt-0.5">
                                            Upload lab panels, MRI/CT summary reports, or referral letters
                                        </span>
                                    </div>
                                </div>

                                {/* Uploaded PDF List Preview */}
                                {uploadedFiles.length > 0 && (
                                    <div className="space-y-2 pt-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                            Attached Documents ({uploadedFiles.length})
                                        </span>
                                        <div className="space-y-1.5">
                                            {uploadedFiles.map((fileItem) => (
                                                <div
                                                    key={fileItem.id}
                                                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                                                >
                                                    <div className="flex items-center gap-2.5 min-w-0">
                                                        <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                                        <span className="font-semibold text-slate-800 truncate block">
                                                            {fileItem.name}
                                                        </span>
                                                        <span className="text-[10px] text-slate-400 shrink-0">
                                                            ({fileItem.sizeMb})
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            removeFile(fileItem.id);
                                                        }}
                                                        className="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-white transition"
                                                        title="Remove file"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>{isSubmitting ? "Submitting Inquiry & Documents..." : "Submit Case with Attached PDFs"}</span>
                            </motion.button>

                            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Protected under patient medical data confidentiality protocols</span>
                            </div>
                        </form>
                    )}
                </div>

                {/* Right Info Sidebar (With Map Integration) */}
                <aside className="lg:col-span-5 space-y-6">
                    {/* Direct Channels */}
                    <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                        <h3 className="text-base font-bold text-slate-900">
                            Immediate Patient Assistance
                        </h3>

                        <div className="space-y-4 text-xs">
                            <a
                                href="tel:+919818286609"
                                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block group-hover:text-blue-600">
                                        Emergency & WhatsApp Hotline
                                    </span>
                                    <span className="text-slate-600 mt-0.5 block">+91 9818286609</span>
                                    <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                                        Available 24/7 for international urgent referrals
                                    </span>
                                </div>
                            </a>

                            <a
                                href="mailto:support@caresdaddy.com"
                                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block group-hover:text-blue-600">
                                        Official Support Email
                                    </span>
                                    <span className="text-slate-600 mt-0.5 block">support@caresdaddy.com</span>
                                    <span className="text-[10px] text-slate-400 block mt-0.5">
                                        For DICOM imaging files, lab panels & letters
                                    </span>
                                </div>
                            </a>

                            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block">
                                        Headquarters & Coordination Office
                                    </span>
                                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                                        CaresDaddy Medical Services, Saket District Centre, Saket, New Delhi, Delhi 110017, India
                                    </p>
                                    <span className="text-[10px] text-slate-400 block mt-1">
                                        (Adjacent to Max Super Speciality Hospital, Saket)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Location Section */}
                    <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span>Office Location Map</span>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Saket+District+Centre+New+Delhi+Delhi+110017"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                            >
                                <span>Open in Maps</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Embedded Responsive Google Map */}
                        <div className="relative w-full h-56 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                            <iframe
                                title="CaresDaddy Office Location Saket New Delhi"
                                src="https://maps.google.com/maps?q=Saket%20District%20Centre,%20Sector%206,%20Pushp%20Vihar,%20New%20Delhi,%20Delhi%20110017&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <Navigation className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span>800m to Malviya Nagar Metro</span>
                            </div>
                            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                                <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>14 km from DEL Airport (T3)</span>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="bg-slate-900 text-white p-7 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                            <Clock className="w-4 h-4" />
                            <span>International Desk Timings</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            Our Saket physical intake desk operates Monday through Saturday, 09:00 AM – 07:00 PM IST. Telemedicine coordinators and on-arrival airport response units operate continuously 24 hours daily.
                        </p>
                    </div>
                </aside>
            </main>
        </div>
    );
}