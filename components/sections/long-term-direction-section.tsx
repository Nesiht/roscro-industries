const MILESTONES = [
  {
    phase: "01",
    title: "Industrial Foundation",
    description:
      "Establish reliable highsec production, grow member capability and build operational structure.",
    status: "Active",
  },
  {
    phase: "02",
    title: "Small-Gang PvP Development",
    description:
      "Develop combat capability through disciplined small-gang operations. Build fleet experience without bloc dependency.",
    status: "Planned",
  },
  {
    phase: "03",
    title: "Nullsec Transition",
    description:
      "Move into nullsec as a capable, self-sufficient corporation. Operate with independence within a like-minded alliance or bloc.",
    status: "Long-Term",
  },
  {
    phase: "04",
    title: "Permanent Operations",
    description:
      "Sustain independent nullsec presence. Continuous growth, structured projects and lasting contribution to New Eden.",
    status: "Trajectory",
  },
];

export function LongTermDirectionSection() {
  return (
    <section id="vision" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Long-Term Direction
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Nullsec is the trajectory, not a fantasy.
        </h3>
        <p className="text-muted max-w-2xl mb-14 leading-relaxed">
          We are building toward nullsec — not by rushing or pretending, but by
          developing real capability at every stage. Each phase prepares us for
          the next. The goal is permanence, not spectacle.
        </p>

        <div className="space-y-6">
          {MILESTONES.map((m) => (
            <div
              key={m.phase}
              className="flex gap-6 rounded border border-border bg-surface p-6 hover:border-border-light transition-colors duration-200"
            >
              <div className="flex-shrink-0">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded border border-border-light bg-background font-mono text-sm text-accent">
                  {m.phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-foreground font-semibold">{m.title}</h4>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${
                      m.status === "Active"
                        ? "bg-green-400/10 text-green-400"
                        : "bg-border text-muted"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
