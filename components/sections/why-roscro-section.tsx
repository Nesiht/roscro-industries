const REASONS = [
  {
    title: "Clear direction",
    description:
      "We have a defined trajectory — from highsec industry to nullsec independence. No guesswork, no drift.",
  },
  {
    title: "Real life comes first",
    description:
      "No activity requirements. No mandatory CTAs. Contribute when you can, at your own pace.",
  },
  {
    title: "Room to contribute early",
    description:
      "New pilots find meaningful work from day one. Your contribution matters regardless of skill points.",
  },
  {
    title: "Not mass-recruitment chaos",
    description:
      "We grow deliberately. Every member is a participant, not a number on a roster.",
  },
  {
    title: "Structured, not rigid",
    description:
      "We have goals and organization, but no authoritarian command chain. Discipline without drama.",
  },
  {
    title: "Built to last",
    description:
      "This is a long-term project. We are building something permanent — not chasing the next hype cycle.",
  },
];

export function WhyRoscroSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Why RosCro
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          A corporation worth joining.
        </h3>
        <p className="text-muted max-w-2xl mb-12 leading-relaxed">
          Most corporations are either too disorganized to hold together or too
          demanding to enjoy. RosCro occupies the ground between — serious
          enough to build something real, flexible enough to respect your time.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r) => (
            <div key={r.title} className="py-4">
              <h4 className="text-foreground font-semibold mb-2">{r.title}</h4>
              <p className="text-muted text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
