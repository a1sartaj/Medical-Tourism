import Navbar from "@/features/navbar/components/Navbar";
import Footer from "@/features/footer/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}