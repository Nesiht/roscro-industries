import { SITE_CONFIG } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center py-32">
        {/* Corp Identity */}
        <p className="text-accent text-sm font-mono uppercase tracking-[0.25em] mb-4">
          EVE Online Corporation
        </p>

        {/* Corp Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          {SITE_CONFIG.corpName}
        </h1>

        {/* Headline */}
        <p className="text-xl sm:text-2xl text-muted font-light leading-relaxed max-w-2xl mx-auto mb-4">
          A project-driven corporation for builders,
          <br className="hidden sm:block" /> industrialists and long-term
          players.
        </p>

        {/* Supporting text */}
        <p className="text-muted/80 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Built on a highsec industrial foundation. Progressing steadily toward
          nullsec independence. Structured growth, real contribution, lasting
          results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={SITE_CONFIG.necmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Apply Now
          </a>
          <a
            href="#join"
            className="inline-flex items-center rounded border border-border-light px-6 py-3 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors duration-200"
          >
            See Recruitment
          </a>
        </div>

        {/* Public channel */}
        <p className="text-muted/60 text-xs font-mono">
          Public Channel:{" "}
          <span className="text-muted">{SITE_CONFIG.publicChannel}</span>
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
