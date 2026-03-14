const OPERATIONS = [
  {
    title: "Industry",
    description:
      "Manufacturing and production form the backbone of our operations. We build what we need — and scale from there.",
  },
  {
    title: "Mining",
    description:
      "Organized resource gathering across highsec, feeding our production lines and building member capability.",
  },
  {
    title: "Exploration",
    description:
      "Scanning, probing and harvesting from the unknown. A steady source of income and operational variety.",
  },
  {
    title: "PvE",
    description:
      "Mission running and combat sites provide income, skill development and a foundation for future fleet operations.",
  },
];

export function CurrentOperationsSection() {
  return (
    <section id="operations" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Current Operations
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Highsec industrial foundation.
        </h3>
        <p className="text-muted max-w-2xl mb-12 leading-relaxed">
          Today, RosCro Industries operates from highsec space. Our focus is on
          building production capability, developing member skills and
          establishing the operational discipline required for future expansion.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {OPERATIONS.map((op) => (
            <div
              key={op.title}
              className="rounded border border-border bg-background p-6 hover:border-border-light transition-colors duration-200"
            >
              <h4 className="text-foreground font-semibold text-lg mb-2">
                {op.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {op.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
