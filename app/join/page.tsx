import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Join RosCro Industries",
  description:
    "Apply to join RosCro Industries — a beginner-friendly EVE Online corporation recruiting industry pilots, miners, explorers and long-term players. No hard requirements.",
  alternates: {
    canonical: "https://roscro.eu/join",
  },
  openGraph: {
    title: "Join RosCro Industries",
    description:
      "Recruitment is open. Join an EVE Online industry corporation with clear goals, structured growth and a real-life-first culture.",
    url: "https://roscro.eu/join",
    type: "website",
  },
};

const OFFER_ITEMS = [
  "Organized mining operations and fleet support",
  "Corporation blueprints and production facilities",
  "Structured projects with clear goals and progress tracking",
  "A calm, mature and well-organized Discord community",
  "Guidance for new players on industry, fitting, markets and logistics",
  "A defined long-term roadmap toward nullsec operations",
  "Leadership that communicates openly and values member input",
];

const STEPS = [
  {
    step: "01",
    title: "Register on NECM",
    description:
      "Create your account on our New Eden Community Manager portal at necm.roscro.eu. Quick signup — no EVE SSO required.",
  },
  {
    step: "02",
    title: "Submit your application",
    description:
      "Fill in the application form with your pilot name, interests, preferred activities in EVE and what you are looking for in a corporation.",
  },
  {
    step: "03",
    title: "Await response",
    description:
      "Our recruiters review applications regularly. You will receive a response through the portal, typically within a few days.",
  },
  {
    step: "04",
    title: "Link your Discord",
    description:
      "Once accepted, connect your Discord profile through NECM to join our community channels. Then find your lane and start contributing.",
  },
];

export default function JoinPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-accent text-sm font-mono uppercase tracking-[0.25em] mb-4">
            Recruitment
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Join {SITE_CONFIG.corpName}
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
            An EVE Online corporation for pilots who build, contribute and stay.
            Recruitment is open — apply through our community portal. No hard
            skill point requirements, no activity quotas.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={SITE_CONFIG.necmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              <ApplyIcon />
              Apply on NECM
            </a>
            <div className="inline-flex items-center gap-2 rounded bg-green-400/10 border border-green-400/20 px-4 py-2.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-green-400 font-semibold">
                Recruitment: {SITE_CONFIG.recruitmentStatus}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Who Should Join */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Who Should Join
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Built for builders. Open to all experience levels.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              RosCro Industries is designed for pilots who want more than a name
              on a roster. We are looking for players — new and experienced —
              who want to be part of something structured, productive and
              long-term.
            </p>
            <p>You should consider joining if:</p>
          </div>

          <ul className="mt-6 space-y-3 text-muted">
            {[
              "You are interested in industry, mining, exploration or PvE",
              "You want a corporation with clear goals and honest leadership",
              "You prefer steady growth over hype and drama",
              "You value real-life-first expectations with no activity quotas",
              "You want to contribute to shared projects with actual impact",
              "You are a new player looking for guidance, or a veteran looking for a serious home",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-muted leading-relaxed">
            We are not a mass-recruitment corporation. We do not spam invites in
            local or promise things we cannot deliver. Every pilot who joins
            RosCro is expected to participate on their own terms — and every
            contribution is valued.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* What We Offer */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            What We Offer
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Structure, direction and respect for your time.
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            As a member of RosCro Industries, you gain access to:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {OFFER_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded border border-border bg-background p-4"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-muted text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted leading-relaxed">
            We do not promise instant riches or flashy killboards. We offer a
            highsec industry corporation in EVE Online that takes itself
            seriously without taking itself too seriously. If you want structure
            and long-term growth, RosCro is worth a look.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Current Focus */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Current Focus
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Highsec operations. Real output.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              RosCro Industries currently operates from highsec space with a
              focus on industrial output. Our active operations include
              manufacturing, organized mining fleets, exploration content and
              PvE activities.
            </p>
            <p>
              We are actively expanding our logistics capability, growing our
              blueprint library and developing the internal structure needed for
              our next phase of growth. Every member who joins now has the
              opportunity to shape the direction of the corporation during a
              critical period of development.
            </p>
            <p>
              This is not a corporation in maintenance mode. This is a
              corporation being built — and early members are the foundation.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* How to Apply */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            How to Apply
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Four steps. Straightforward process.
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Joining RosCro Industries starts at our community portal. We use
            NECM to handle applications cleanly and efficiently. The process
            typically takes less than a few days.
          </p>

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
                  <h3 className="text-foreground font-semibold text-sm mb-1">
                    {s.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <a
              href={SITE_CONFIG.necmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              <ApplyIcon />
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

      <div className="section-divider" />

      {/* Why Join */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Why Join Us
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Serious enough to build something. Flexible enough to respect your
            time.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              There are thousands of corporations in EVE Online. Most of them
              are either inactive, disorganized or aggressively demanding.
              RosCro Industries exists in the space between.
            </p>
            <p>
              We are serious enough to have real goals and structure. We are
              flexible enough to respect your real life and personal pace. We
              are honest enough to tell you where we are — and where we are
              going — without exaggeration.
            </p>
            <p>
              If you want a corporation where your contributions matter, where
              leadership is transparent and where the long-term plan is more
              than a recruitment pitch — EVE Online players are welcome here.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={SITE_CONFIG.necmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              <ApplyIcon />
              Apply Now
            </a>
            <Link
              href="/about"
              className="inline-flex items-center rounded border border-border-light px-6 py-3 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
            <Link
              href="/blog"
              className="text-sm text-accent hover:text-accent-bright transition-colors duration-200"
            >
              Read the Blog →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ApplyIcon() {
  return (
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
  );
}
