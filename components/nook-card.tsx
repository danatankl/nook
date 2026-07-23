import type { Nook } from "@/data/nooks";
import { BookmarkIcon } from "./icons";
import { NookIllustration } from "./nook-illustration";

export function NookCard({ nook, index }: { nook: Nook; index: number }) {
  return (
    <article className="nook-card">
      <a className="card-image" href={`#nook-${index}`} aria-label={`Explore ${nook.title}`}>
        <NookIllustration palette={nook.palette} />
      </a>
      <div className="card-details">
        <div>
          <p>{nook.category}</p>
          <h3>{nook.title}</h3>
          <span>by {nook.creator}</span>
        </div>
        <button className="save-button" type="button" aria-label={`Save ${nook.title}`}><BookmarkIcon /></button>
      </div>
    </article>
  );
}

