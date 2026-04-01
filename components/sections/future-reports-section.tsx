import { REPORTS } from "@/lib/site-config";

export function FutureReportsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-3">
            Reports
          </h2>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Industry &amp; NAV Reports
          </h3>
          <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
            Structured reporting on corporation progress, financials and
            operational milestones.
          </p>
        </div>

        <div className="space-y-4">
          {REPORTS.map((report) => (
            <div
              key={report.fileName}
              className="rounded border border-border bg-surface/50 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-accent mb-1">
                    {report.period}
                  </p>
                  <h4 className="text-lg font-semibold text-foreground">
                    {report.title}
                  </h4>
                </div>
                <a
                  href={report.href}
                  download
                  className="inline-flex items-center gap-2 rounded border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-border/50">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">
                    Adjusted NAV
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {report.highlights.adjustedNav}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">
                    Revenue
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {report.highlights.revenue}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">
                    Realized Profit
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {report.highlights.realizedProfit}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted mb-1">
                    Items Sold
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {report.highlights.itemsSold}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
