export function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <a className="wordmark" href="#top" aria-label="Nook home">nook</a>
      <nav aria-label="Main navigation">
        <a href="#featured">Explore</a>
        <a href="#how-it-works">About</a>
      </nav>
      <a className="sign-in" href="#sign-in">Sign in</a>
    </header>
  );
}

