import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About RosCro Industries",
  description:
    "RosCro Industries is an EVE Online corporation focused on industry, logistics, mining and long-term growth. Learn about our highsec operations and nullsec trajectory.",
  alternates: {
    canonical: "https://roscro.eu/about",
  },
  openGraph: {
    title: "About RosCro Industries",
    description:
      "An EVE Online industry corporation built on highsec production, structured logistics and disciplined long-term growth toward nullsec independence.",
    url: "https://roscro.eu/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-accent text-sm font-mono uppercase tracking-[0.25em] mb-4">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            About {SITE_CONFIG.corpName}
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            A project-driven EVE Online corporation for builders, industrialists
            and long-term players. Built on highsec industry. Heading toward
            nullsec independence.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* What We Do */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Highsec industry with a long-term purpose.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              RosCro Industries is an EVE Online corporation founded on
              industrial discipline and long-term ambition. We operate primarily
              in highsec space, where our members engage in manufacturing,
              mining, exploration and PvE activities that form the economic
              backbone of everything we build.
            </p>
            <p>
              Our day-to-day operations centre on practical output. We run
              organized mining fleets, maintain active production lines and
              support members who contribute to the shared industrial
              infrastructure. Every member has access to corporation resources,
              blueprints and guidance — regardless of experience level.
            </p>
            <p>
              We are not a social club that happens to play EVE. We are a
              working industry and logistics corporation with clear operational
              goals, structured projects and measurable progress. That
              distinction matters. Every activity we run — from resource
              gathering to market operations — serves a defined purpose within
              our broader development plan.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Our Vision */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Our Vision
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            From highsec foundation to nullsec independence.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              The long-term trajectory of RosCro Industries points toward
              nullsec sovereignty and independent operations. We intend to build
              the industrial capability, combat readiness and organizational
              discipline required to operate in sovereign null space — not as a
              renter or dependent vassal, but as a self-sufficient entity within
              a like-minded alliance.
            </p>
            <p>
              This is not a fantasy or a recruiting promise. It is a structured
              development plan. Every phase of our growth — from highsec
              production to small-gang PvP development to eventual nullsec
              transition — is designed to prepare us for the next stage. We
              build capability before we claim ambition.
            </p>
            <p>
              Nullsec is the trajectory. Highsec is where we earn the right to
              get there.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Who We Are Looking For */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Who We Are Looking For
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Pilots who build, contribute and stay.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              RosCro Industries welcomes pilots of all experience levels.
              Whether you are a new player exploring EVE Online for the first
              time or a veteran industrialist looking for a structured and
              serious highsec corporation, there is a place for you here.
            </p>
            <p>We look for pilots who share a few specific traits:</p>
          </div>

          <ul className="mt-6 space-y-3 text-muted">
            {[
              "Patience and long-term thinking",
              "Willingness to contribute to shared goals",
              "Interest in industry, mining, exploration or PvE",
              "Respect for other members' time and real-life commitments",
              "A preference for structure over chaos",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-6 text-muted leading-relaxed">
            <p>
              We do not require minimum skill points, mandatory activity levels
              or specific timezone availability. Real life comes first — always.
              When you are online, we want your time to matter.
            </p>
            <p>
              If you are looking for a beginner-friendly EVE Online corporation
              that values steady progress over hype, and substance over noise,
              RosCro is worth your consideration.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Long-Term Direction */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Long-Term Direction
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            A clear roadmap, built on capability.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed mb-10">
            <p>Our roadmap is straightforward:</p>
          </div>

          <div className="space-y-4">
            {[
              {
                phase: "01",
                title: "Industrial Foundation",
                text: "Establish a reliable highsec industrial base, grow membership and develop internal logistics. This is where we are now.",
              },
              {
                phase: "02",
                title: "Combat Development",
                text: "Introduce small-gang PvP operations, train fleet commanders and build combat confidence without relying on bloc-level support.",
              },
              {
                phase: "03",
                title: "Nullsec Transition",
                text: "Transition into nullsec with the industrial output, combat capability and organizational maturity to sustain independent operations.",
              },
              {
                phase: "04",
                title: "Permanent Presence",
                text: "Permanent nullsec presence — self-sufficient, project-driven and built to last.",
              },
            ].map((m) => (
              <div
                key={m.phase}
                className="flex gap-5 rounded border border-border bg-background p-5"
              >
                <span className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded border border-border-light font-mono text-xs text-accent">
                  {m.phase}
                </span>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">
                    {m.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted leading-relaxed">
            Each phase builds on the last. We do not skip steps. We do not
            pretend to be further along than we are. This honest approach is
            what separates RosCro from corporations that promise the galaxy and
            deliver nothing.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Our Culture */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Our Culture
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Calm, transparent and operational.
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Culture at RosCro Industries is intentionally understated. We do
              not cultivate meme identities or ego-driven leadership. We value
              calm communication, practical decision-making and mutual respect.
            </p>
            <p>
              Corporation leadership is accessible and transparent. Decisions
              are explained. Feedback is welcome. The goal is a working
              environment — one where experienced pilots can operate efficiently
              and newer players can learn without feeling lost.
            </p>
            <p>
              We use NECM — our community management portal — for recruitment
              and member management. Day-to-day coordination and social
              interaction happens through our Discord server, which members gain
              access to during the onboarding process. If you want to learn more
              before committing, our in-game public channel is always open.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to learn more?
          </h2>
          <p className="text-muted leading-relaxed max-w-xl mx-auto mb-8">
            If RosCro Industries sounds like the kind of corporation you have
            been looking for, take the next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-bright transition-colors duration-200"
            >
              How to Join
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded border border-border-light px-6 py-3 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors duration-200"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
