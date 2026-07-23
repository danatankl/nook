import type { Metadata } from "next";
import { ExploreGrid } from "@/components/explore/explore-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Explore Nooks — Nook",
  description: "Browse thoughtful spaces and collect the details that feel like home.",
};

export default function ExplorePage() {
  return (
    <main>
      <SiteHeader />
      <header className="explore-intro page-shell">
        <p className="eyebrow">Spaces worth keeping</p>
        <h1>Find a corner<br />that feels like <em>you.</em></h1>
        <p className="explore-lede">Browse real spaces, quiet rituals, and thoughtful details. Save the pieces you want to live with.</p>
      </header>
      <ExploreGrid />
      <SiteFooter />
    </main>
  );
}

