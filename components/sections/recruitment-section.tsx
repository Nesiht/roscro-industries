import { SITE_CONFIG } from "@/lib/site-config";

const STEPS = [
  {
    step: "01",
    title: "Join the Discord",
    description: "Introduce yourself in our Discord server. No forms, no SSO.",
  },
  {
    step: "02",
    title: "Tell us about yourself",
    description:
      "Share your interests, preferred activities in EVE and what you are looking for.",
  },
  {
    step: "03",
    title: "Speak with us",
    description:
      "Have a brief conversation so we can determine mutual fit. No interview — just a talk.",
  },
  {
    step: "04",
    title: "Get started",
    description:
      "Once accepted, you are in. Find your lane and start contributing at your own pace.",
  },
];

export function RecruitmentSection() {
  return (
    <section id="join" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Recruitment
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How to join.
          </h3>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Recruitment is straightforward. No applications, no bureaucracy.
            Discord is our front door.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded bg-green-400/10 border border-green-400/20 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-green-400 font-semibold">
              Recruitment: {SITE_CONFIG.recruitmentStatus}
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 rounded border border-border bg-background p-5"
            >
              <span className="flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded border border-border-light font-mono text-xs text-accent">
                {s.step}
              </span>
              <div>
                <h4 className="text-foreground font-semibold text-sm mb-1">
                  {s.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center space-y-4">
          <a
            href={SITE_CONFIG.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join Discord
          </a>
          <p className="text-muted text-sm">
            Or contact us in-game:{" "}
            <span className="text-foreground font-mono text-xs">
              {SITE_CONFIG.publicChannel}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
