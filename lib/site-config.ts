export const SITE_CONFIG = {
  corpName: "RosCro Industries",
  discordUrl: "https://discord.gg/TXtvpa49",
  publicChannel: "roscro-pub",
  recruitmentStatus: "OPEN" as const,
};

export const REPORTS = [
  {
    title: "Monthly Industry Report",
    period: "March 2026",
    fileName: "eve-industry-report-march-2026.pdf",
    href: "/reports/eve-industry-report-march-2026.pdf",
    highlights: {
      adjustedNav: "28.508B ISK",
      revenue: "476.0M ISK",
      realizedProfit: "70.2M ISK",
      itemsSold: "530",
    },
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Operations", href: "#operations" },
  { label: "Vision", href: "#vision" },
  { label: "Contribute", href: "#contribute" },
  { label: "Join", href: "#join" },
] as const;
