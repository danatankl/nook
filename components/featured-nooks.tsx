import { featuredNooks } from "@/data/nooks";
import { ArrowUpRightIcon } from "./icons";
import { NookCard } from "./nook-card";

export function FeaturedNooks() {
  return (
    <section className="featured-section page-shell" id="featured">
      <div className="section-heading">
        <div><p className="eyebrow">A few places to begin</p><h2>Featured Nooks</h2></div>
        <a href="#all-nooks">View all spaces <ArrowUpRightIcon /></a>
      </div>
      <div className="nook-grid">
        {featuredNooks.map((nook, index) => <NookCard nook={nook} index={index} key={nook.title} />)}
      </div>
    </section>
  );
}

