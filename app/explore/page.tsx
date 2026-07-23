import type { Metadata } from "next";
import { ExploreGrid } from "@/components/explore/explore-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Explore Nooks — Nook",
  description: "Discover small, recognizable arrangements you can collect and make your own.",
};

export default function ExplorePage() {
  return (
    <main>
      <SiteHeader />
      <header className="explore-intro page-shell">
        <p className="eyebrow">Small arrangements, lasting ideas</p>
        <h1>Find a corner<br />worth <em>collecting.</em></h1>
        <p className="explore-lede">A Nook is one recognizable arrangement you can save, adapt, and make your own—not an entire room.</p>
      </header>
      <ExploreGrid />
      <SiteFooter />
    </main>
  );
}
