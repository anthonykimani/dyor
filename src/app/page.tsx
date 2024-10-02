import { Spotlight } from "@/components/landing-page/Spotlight";
import { Podcasts } from "@/components/landing-page/Podcasts";
import { Footer } from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import { Navbar } from "@/components/landing-page/Navbar";
import { Newsletter } from "@/components/landing-page/Newsletter";
import { ScrollToTop } from "@/components/landing-page/ScrollToTop";
import { Team } from "@/components/landing-page/Team";
import HeroSection from "@/components/landing-page/HeroSection";

export default async function Home() {
  return (
    <main className="bg-site  bg-no-repeat w-full">
      {/* Hero section */}
      <Navbar />
      <HeroSection />
      {/* @ts-expect-error */}
      <Hero />
      {/* @ts-expect-error */}
      <Spotlight />
      {/* @ts-expect-error */}
      <Podcasts />
      <Team />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
