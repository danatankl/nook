import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <Link className="wordmark" href="/" aria-label="Nook home">nook</Link>
      <nav aria-label="Main navigation">
        <Link href="/explore">Explore</Link>
        <Link href="/#how-it-works">About</Link>
      </nav>
      <a className="sign-in" href="#sign-in">Sign in</a>
    </header>
  );
}
