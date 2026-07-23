const steps = [
  { number: "01", title: "Discover spaces", description: "Explore thoughtful corners and the stories behind why they work." },
  { number: "02", title: "Save what you love", description: "Collect the details, moods, and small ideas that feel like you." },
  { number: "03", title: "Make it your own", description: "Combine your favorite pieces into a home that tells your story." },
];

export function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="page-shell">
        <p className="eyebrow">How Nook works</p>
        <div className="how-heading"><h2>From inspiration<br />to <em>belonging.</em></h2><p>A home is not designed all at once. It comes together through the things you notice, keep, and make your own.</p></div>
        <ol className="steps">
          {steps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

