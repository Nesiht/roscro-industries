export const SITE_CONFIG = {
  corpName: "RosCro Industries",
  necmUrl: "https://necm.roscro.eu",
  discordUrl: "https://discord.gg/TXtvpa49",
  publicChannel: "roscro-pub",
  recruitmentStatus: "OPEN" as const,
};

export const REPORTS = [
  {
    title: "Monthly Industry Report",
    period: "May 2026",
    fileName: "eve-industry-report-may-2026.pdf",
    href: "/reports/eve-industry-report-may-2026.pdf",
    highlights: {
      adjustedNav: "34.407B ISK",
      revenue: "3.999B ISK",
      realizedProfit: "726.8M ISK",
      itemsSold: "3,750",
    },
  },
  {
    title: "Monthly Industry Report",
    period: "April 2026",
    fileName: "eve-industry-report-april-2026.pdf",
    href: "/reports/eve-industry-report-april-2026.pdf",
    highlights: {
      adjustedNav: "34.376B ISK",
      revenue: "2.359B ISK",
      realizedProfit: "476.9M ISK",
      itemsSold: "1,991",
    },
  },
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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/join" },
  { label: "Blog", href: "/blog" },
] as const;
