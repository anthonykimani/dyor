import Image from "next/image";
import { Spotlight } from "@/components/landing-page/Spotlight";
import { Podcasts } from "@/components/landing-page/Podcasts";
import { Footer } from "@/components/landing-page/Footer";
import { Hero } from "@/components/landing-page/Hero";
import { Navbar } from "@/components/landing-page/Navbar";
import { Newsletter } from "@/components/landing-page/Newsletter";
import { ScrollToTop } from "@/components/landing-page/ScrollToTop";

import { Team } from "@/components/landing-page/Team";

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <Navbar />
      <Hero />
      <Spotlight />
      <Podcasts />
      <Team />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
