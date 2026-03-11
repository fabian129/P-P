import { TopMenu, GalleryGrid } from "@/components/GalleryGrid";
import { Footer } from "@/components/ContactSection";

export default function ListingsPage() {
  return (
    <main className="min-h-screen pt-4">
      <TopMenu />
      <GalleryGrid />
      
      {/* Footer wrapped in standard padding to match main page layout context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Footer />
      </div>
    </main>
  );
}
