import type { Metadata } from "next";
import { ExploreGrid } from "@/components/explore/explore-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Explore Bedroom Nooks — Nook",
  description: "Browse thoughtful corners, desk setups, and details that make a bedroom feel like your own.",
};

export default function ExplorePage() {
  return (
    <main>
      <SiteHeader />
      <header className="explore-intro page-shell">
        <p className="eyebrow">Small spaces, one bedroom</p>
        <h1>Make room for<br />what feels like <em>you.</em></h1>
        <p className="explore-lede">Explore the corners that shape a bedroom—from a desk that helps you focus to the art you wake up beside.</p>
      </header>
      <ExploreGrid />
      <SiteFooter />
    </main>
  );
}
