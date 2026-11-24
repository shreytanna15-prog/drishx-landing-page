import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CatalogSection } from "@/components/catalog-section"
import { TransitSection } from "@/components/transit-section"
import { DualScreensSection } from "@/components/dual-screens-section"
import { AppDownloadSection } from "@/components/app-download-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F14] text-[#EAF0FA]">
      <Navbar />
      <main className="w-full pt-20">
        <HeroSection />
        <CatalogSection />
        <TransitSection />
        <DualScreensSection />
        <AppDownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
