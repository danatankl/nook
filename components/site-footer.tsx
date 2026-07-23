export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <div><a className="wordmark" href="#top">nook</a><p>Make a little space for yourself.</p></div>
      <div className="footer-links"><a href="#featured">Explore</a><a href="#how-it-works">About</a><a href="mailto:hello@nook.space">Contact</a></div>
      <p className="copyright">© {new Date().getFullYear()} Nook</p>
    </footer>
  );
}

