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
    title: "Join the Discord",
    description:
      "Our Discord server is where all communication happens. Join, look around and introduce yourself in the recruitment channel. No forms, no SSO.",
  },
  {
    step: "02",
    title: "Tell us about yourself",
    description:
      "Share your interests, preferred activities in EVE and what you are looking for in a corporation. There is no wrong answer.",
  },
  {
    step: "03",
    title: "Have a conversation",
    description:
      "A brief chat with a recruiter to determine mutual fit. This is not an interview — it is a talk between pilots.",
  },
  {
    step: "04",
    title: "Get your invite",
    description:
      "Once accepted, you receive a corporation invite in-game. Find your lane and start contributing at your own pace.",
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
            Recruitment is open — no hard skill point requirements, no activity
            quotas, no bureaucracy.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={SITE_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              <DiscordIcon />
              Join Discord
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
            Four steps. No bureaucracy.
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Joining RosCro Industries is straightforward. We do not require
            formal applications, API checks or skill point thresholds. The whole
            process typically takes less than a day.
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
              href={SITE_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              <DiscordIcon />
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
              href={SITE_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              <DiscordIcon />
              Join Discord
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

function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
