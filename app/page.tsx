import { FeaturedNooks } from "@/components/featured-nooks";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <FeaturedNooks />
      <HowItWorks />
      <SiteFooter />
    </main>
  );
}

