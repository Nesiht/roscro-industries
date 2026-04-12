import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-7 w-7 rounded border border-border-light bg-surface-light flex items-center justify-center text-accent font-mono text-xs font-bold">
                RI
              </div>
              <span className="text-foreground font-semibold tracking-wide text-sm uppercase">
                {SITE_CONFIG.corpName}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              An EVE Online corporation built on industrial discipline and
              long-term ambition.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={SITE_CONFIG.necmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-bright transition-colors"
                >
                  NECM Portal
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-bright transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                In-Game Channel:{" "}
                <span className="text-foreground font-mono text-xs">
                  {SITE_CONFIG.publicChannel}
                </span>
              </li>
              <li>
                Recruitment:{" "}
                <span className="text-green-400 font-semibold">
                  {SITE_CONFIG.recruitmentStatus}
                </span>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-3">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-bright transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="hover:text-accent-bright transition-colors"
                >
                  Join
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-accent-bright transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Reports */}
          <div>
            <h4 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-3">
              Reports
            </h4>
            <p className="text-sm text-muted mb-2">
              Industry and NAV reports are published regularly.
            </p>
            <Link
              href="/#reports"
              className="text-sm text-accent hover:text-accent-bright transition-colors"
            >
              View latest report &rarr;
            </Link>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.corpName} &mdash; EVE
            Online Corporation
          </p>
          <p className="text-muted/60">
            EVE Online and all related trademarks are property of CCP hf.
          </p>
        </div>
      </div>
    </footer>
  );
}
