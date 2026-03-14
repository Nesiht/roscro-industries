const AREAS = [
  {
    icon: "⚙",
    title: "Industry",
    description:
      "Manufacturing, invention and production. Turn raw materials into operational output.",
    suited: "For pilots who build.",
  },
  {
    icon: "⛏",
    title: "Mining",
    description:
      "Organized resource extraction across highsec belts and moons. Feed the production chain.",
    suited: "For pilots who gather.",
  },
  {
    icon: "🔭",
    title: "Exploration",
    description:
      "Probe scanning, relic and data sites. Generate income and discover opportunities beyond known space.",
    suited: "For pilots who search.",
  },
  {
    icon: "⚔",
    title: "PvE Combat",
    description:
      "Missions, anomalies and combat sites. Develop skills, earn ISK and prepare for future fleet operations.",
    suited: "For pilots who fight.",
  },
  {
    icon: "📦",
    title: "Logistics",
    description:
      "Hauling, market supply and operational support. Keep the corporation supplied and mobile.",
    suited: "For pilots who move.",
  },
  {
    icon: "🛡",
    title: "Future Combat Ops",
    description:
      "Small-gang PvP and fleet doctrine development. Part of our planned trajectory into nullsec capability.",
    suited: "For pilots ready to grow.",
  },
];

export function ContributionAreasSection() {
  return (
    <section id="contribute" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Contribution Areas
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Find where you fit.
        </h3>
        <p className="text-muted max-w-2xl mb-12 leading-relaxed">
          Every member contributes in their own way. These are the operational
          lanes available — each one matters to the whole.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area) => (
            <div
              key={area.title}
              className="rounded border border-border bg-background p-6 hover:border-border-light transition-colors duration-200 group"
            >
              <div className="text-2xl mb-3" aria-hidden="true">
                {area.icon}
              </div>
              <h4 className="text-foreground font-semibold text-lg mb-2">
                {area.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed mb-3">
                {area.description}
              </p>
              <p className="text-accent text-xs font-mono">{area.suited}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
