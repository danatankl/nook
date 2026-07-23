import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero page-shell" id="top">
      <div className="hero-kicker"><span /> A home, collected slowly</div>
      <h1>People build homes,<br /><em>not rooms.</em></h1>
      <div className="hero-bottom">
        <p>Discover the small spaces that make a home feel personal. Save what speaks to you, then bring the pieces together in a way that is entirely your own.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#featured">Explore Nooks <ArrowUpRightIcon /></a>
          <a className="button button-secondary" href="#start">Start designing</a>
        </div>
      </div>
    </section>
  );
}

