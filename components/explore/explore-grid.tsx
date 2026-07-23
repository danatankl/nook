"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BookmarkIcon, SearchIcon } from "@/components/icons";
import { exploreCategories, exploreNooks } from "@/data/explore-nooks";

export function ExploreGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState<Set<number>>(() => new Set());

  const visibleNooks = useMemo(() => {
    const search = query.trim().toLowerCase();
    return exploreNooks.filter((nook) => {
      const matchesCategory = activeCategory === "All" || nook.category === activeCategory;
      const searchableContent = [nook.title, nook.category, nook.description, nook.creator, ...nook.details, ...nook.tags];
      const matchesSearch = !search || searchableContent.some((value) => value.toLowerCase().includes(search));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  function toggleSaved(id: number) {
    setSaved((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="explore-feed page-shell" aria-label="Explore Nooks">
      <div className="explore-tools">
        <label className="search-field">
          <SearchIcon />
          <span className="sr-only">Search Nooks</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder='Try “small desk” or “warm light”' type="search" />
        </label>
        <div className="filter-scroll" aria-label="Filter by category">
          {exploreCategories.map((category) => (
            <button className={activeCategory === category ? "filter-chip active" : "filter-chip"} key={category} onClick={() => setActiveCategory(category)} type="button" aria-pressed={activeCategory === category}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="feed-summary"><span>{visibleNooks.length} collectable Nooks</span><span>Small arrangements · lasting ideas</span></div>

      {visibleNooks.length ? (
        <div className="masonry-grid">
          {visibleNooks.map((nook) => (
            <article className="explore-card" key={nook.id}>
              <div className="explore-image" style={{ aspectRatio: `${nook.width} / ${nook.height}` }}>
                <Image src={nook.image} alt={`Temporary image placeholder for ${nook.title}`} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                <div className="image-wash" />
                <span className="card-category">{nook.category}</span>
                <button className={saved.has(nook.id) ? "floating-save saved" : "floating-save"} onClick={() => toggleSaved(nook.id)} type="button" aria-label={`${saved.has(nook.id) ? "Remove" : "Save"} ${nook.title}`} aria-pressed={saved.has(nook.id)}>
                  <BookmarkIcon /> <span>{saved.has(nook.id) ? "Saved" : "Save"}</span>
                </button>
              </div>
              <div className="explore-card-copy">
                <h2>{nook.title}</h2>
                <p className="nook-description">{nook.description}</p>
                <div className="collectable-details" aria-label="Collectable details">
                  <span className="detail-label">Collect</span>
                  <ul>{nook.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
                <div className="nook-meta"><span>by {nook.creator}</span><span>{nook.saves} saves</span></div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state"><p className="eyebrow">Nothing here yet</p><h2>Try a different corner.</h2><button onClick={() => { setQuery(""); setActiveCategory("All"); }} type="button">Clear filters</button></div>
      )}
    </section>
  );
}
