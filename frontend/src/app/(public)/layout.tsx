import { Suspense, type ReactNode } from "react";
import Navbar from "@/features/navbar/components/Navbar";
import Footer from "@/features/footer/components/Footer";

function NavbarSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 h-18" />
  );
}

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 antialiased">
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}