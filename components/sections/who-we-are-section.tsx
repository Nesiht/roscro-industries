export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
          Who We Are
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Structure over chaos. Progress over noise.
        </h3>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            RosCro Industries is a project-driven EVE Online corporation for
            builders, industrialists and long-term players. We exist to create a
            permanent operational home — not a temporary roster of pilots
            passing through.
          </p>
          <p>
            We value contribution over activity metrics. There are no mandatory
            fleet pings, no participation quotas, and no pressure to log in on
            someone else&apos;s schedule. Real life comes first. When you are
            here, your work matters.
          </p>
          <p>
            Whether you are a new pilot learning the foundations of industry and
            exploration, or an experienced player looking for a structured
            environment with a clear trajectory — RosCro is built to accommodate
            both.
          </p>
        </div>

        {/* Key traits */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Project-Driven",
            "Newbro Friendly",
            "Veteran Compatible",
            "Real Life First",
          ].map((trait) => (
            <div
              key={trait}
              className="rounded border border-border bg-surface px-4 py-3 text-center text-sm text-foreground"
            >
              {trait}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
