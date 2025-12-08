import { HeroSection } from "@/components/home/hero-section";
import { NewsSection } from "@/components/home/news-section";
import { MasonryGallery } from "@/components/home/masonry-gallery";
import { FeatureCards } from "@/components/home/feature-cards";
import { StatsSection } from "@/components/home/stats-section";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <HeroSection />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-24 pb-20">
        <NewsSection />
        <MasonryGallery />
        <FeatureCards />
        <StatsSection />
        <Testimonials />

        {/* Bottom "Let's Start" CTA */}
        <section className="py-20 text-center relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-medium mb-8 text-white">
            Let&apos;s Start
          </h2>
          <div className="w-24 h-24 rounded-full border border-white/20 mx-auto flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
            <span className="text-2xl text-white">↗</span>
          </div>
        </section>
      </div>
    </div>
  );
}
