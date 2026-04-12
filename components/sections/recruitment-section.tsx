import { SITE_CONFIG } from "@/lib/site-config";

const STEPS = [
  {
    step: "01",
    title: "Register on NECM",
    description:
      "Create your account on our New Eden Community Manager portal. Quick registration, no hassle.",
  },
  {
    step: "02",
    title: "Submit your application",
    description:
      "Fill in the application form with your pilot details, interests and what you are looking for.",
  },
  {
    step: "03",
    title: "Await response",
    description:
      "Our recruiters review applications regularly. You will receive a response within a few days.",
  },
  {
    step: "04",
    title: "Link your Discord",
    description:
      "Once accepted, connect your Discord profile through NECM. Then pick your lane and start contributing.",
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
            Recruitment runs through NECM — our community management portal.
            Register, apply and get started in minutes.
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
            href={SITE_CONFIG.necmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
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
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Apply on NECM
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
