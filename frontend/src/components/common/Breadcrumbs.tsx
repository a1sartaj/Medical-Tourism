import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500">
            <ol className="flex items-center gap-1.5 flex-wrap">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                    </Link>
                </li>

                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={item.label} className="inline-flex items-center gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            {isLast || !item.href ? (
                                <span className="font-semibold text-slate-900" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-slate-500 hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}