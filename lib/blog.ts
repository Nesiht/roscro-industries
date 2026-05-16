export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; href: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  tags: string[];
  seoKeywords?: string[];
  content: ContentBlock[];
};

const posts: BlogPost[] = [
  {
    slug: "after-exordium-the-first-real-home",
    title: "After Exordium: Finding Your First Real Home in EVE Online",
    excerpt:
      "Exordium is a major onboarding shift for EVE Online, but it is only the beginning. The most important post-tutorial decision is finding the right corporation that provides structure, stability and long-term direction.",
    description:
      "After Exordium, the right corporation matters more than ever. RosCro Industries offers a structured, long-term industrial home for new and experienced EVE Online pilots.",
    publishedAt: "2026-05-16",
    author: "RosCro Industries",
    tags: ["Exordium", "Recruitment", "Beginner Guide", "Corporation"],
    seoKeywords: [
      "EVE Online Exordium",
      "first corporation after Exordium",
      "EVE Online beginner corporation",
      "what to do after EVE tutorial",
      "RosCro Industries recruitment",
    ],
    content: [
      {
        type: "paragraph",
        text: "With the launch of the Cradle of War expansion on June 9, CCP Games is introducing one of the biggest changes to EVE Online's new player experience in years: Exordium.",
      },
      {
        type: "image",
        src: "/blog/Exordium_Header_1920x622.webp",
        alt: "Exordium promotional header artwork",
        caption: "Exordium launches with Cradle of War on June 9.",
      },
      {
        type: "paragraph",
        text: "For the first time, every new capsuleer will begin their journey inside a dedicated protected region designed to teach the foundations of New Eden in a safer and more structured environment.",
      },
      {
        type: "paragraph",
        text: "That is a good thing.",
      },
      {
        type: "paragraph",
        text: "EVE Online has always been a difficult game to enter. The scale, the complexity, the loss systems, the economy, the UI, the social structures - all of it can feel overwhelming to a completely new player. Many pilots quit long before they ever discover what makes EVE truly special.",
      },
      {
        type: "paragraph",
        text: "Exordium is clearly designed to solve that problem.",
      },
      {
        type: "paragraph",
        text: "But Exordium is only the beginning.",
      },
      {
        type: "paragraph",
        text: "Eventually, every new pilot will leave protected space and enter the real sandbox. And when that moment comes, the most important decision they will make is not which ship to fly or which skill to train next.",
      },
      {
        type: "paragraph",
        text: "It is finding the right corporation.",
      },
      {
        type: "heading",
        text: "Beyond the Tutorial",
      },
      {
        type: "paragraph",
        text: "Tutorial systems can teach mechanics.",
      },
      {
        type: "paragraph",
        text: "Corporations teach players how to live in New Eden.",
      },
      {
        type: "paragraph",
        text: "They teach:",
      },
      {
        type: "list",
        items: [
          "how to work together",
          "how to build something larger than yourself",
          "how the economy really functions",
          "how logistics, industry and cooperation create power",
          "how to recover after losses",
          "and how to find purpose inside a universe as large as EVE",
        ],
      },
      {
        type: "paragraph",
        text: "The transition out of Exordium is where many players will either find their long-term direction - or drift away from the game entirely.",
      },
      {
        type: "paragraph",
        text: "That transition matters.",
      },
      {
        type: "heading",
        text: "The Kind of Corporation We Want to Build",
      },
      {
        type: "paragraph",
        text: "RosCro Industries was built around the idea that EVE becomes far more interesting when players build together instead of playing alone.",
      },
      {
        type: "paragraph",
        text: "We are currently focused on highsec industry, mining, logistics, exploration and PvE, with long-term ambitions that reach far beyond that foundation. Our approach is deliberate and sustainable. We are not trying to rush new players into content they are not ready for, and we are not interested in treating pilots like disposable numbers in a recruitment spreadsheet.",
      },
      {
        type: "paragraph",
        text: "Real life comes first.",
      },
      {
        type: "paragraph",
        text: "What we want to create is a stable industrial community where new and experienced players can learn, contribute and grow over time.",
      },
      {
        type: "paragraph",
        text: "For many players leaving Exordium, the next challenge will not be surviving combat.",
      },
      {
        type: "paragraph",
        text: "It will be learning:",
      },
      {
        type: "list",
        items: [
          "how to earn consistently",
          "how markets work",
          "how production chains function",
          "how to cooperate with other pilots",
          "how to become part of something larger",
        ],
      },
      {
        type: "paragraph",
        text: "That is where corporations matter.",
      },
      {
        type: "heading",
        text: "Industry, Infrastructure and Learning",
      },
      {
        type: "paragraph",
        text: "One of the biggest misconceptions about EVE Online is that every meaningful path begins with PvP.",
      },
      {
        type: "paragraph",
        text: "In reality, New Eden runs on industry, logistics, production and coordination.",
      },
      {
        type: "paragraph",
        text: "Ships do not appear out of nowhere. Wars are not won by individual pilots alone. Entire regions are sustained by industrial infrastructure and organized communities.",
      },
      {
        type: "paragraph",
        text: "That side of EVE is what interests us most.",
      },
      {
        type: "paragraph",
        text: "RosCro Industries is building tools, infrastructure and systems designed to help players grow into that part of the game:",
      },
      {
        type: "list",
        items: [
          "industrial support",
          "shared blueprints",
          "organizational tooling",
          "community infrastructure",
          "operational coordination",
          "long-term progression",
        ],
      },
      {
        type: "paragraph",
        text: "Our goal is not simply to recruit players.",
      },
      {
        type: "paragraph",
        text: "Our goal is to help create pilots who still enjoy EVE years from now.",
      },
      {
        type: "image",
        src: "/blog/Exordium2d-map.webp",
        alt: "Map of the Exordium starter region",
        caption: "Exordium region layout and starter-system structure.",
      },
      {
        type: "heading",
        text: "The Future After Exordium",
      },
      {
        type: "paragraph",
        text: "Community reactions to Exordium have been mixed. Some players believe protected rookie space will improve retention and help more people discover the depth of EVE. Others worry it risks isolating new players from the harsh sandbox identity the game is known for.",
      },
      {
        type: "paragraph",
        text: "Both perspectives are understandable.",
      },
      {
        type: "paragraph",
        text: "But regardless of where people stand on the change itself, one thing is certain:",
      },
      {
        type: "paragraph",
        text: "Thousands of new players will soon leave Exordium looking for direction, stability and community.",
      },
      {
        type: "paragraph",
        text: "Strong corporations will matter more than ever.",
      },
      {
        type: "paragraph",
        text: "Exordium may be where new capsuleers begin.",
      },
      {
        type: "paragraph",
        text: "But the real story of EVE Online has always been written by the corporations, communities and players who choose to build something together.",
      },
      {
        type: "paragraph",
        text: "If you are beginning your journey beyond Exordium and looking for your first long-term home in New Eden, we would be happy to talk with you.",
      },
      {
        type: "link",
        text: "Join RosCro Industries on Discord",
        href: "https://discord.gg/zuZ4TwNekx",
      },
      {
        type: "paragraph",
        text: "Public in game channel: roscro-pub",
      },
    ],
  },
  {
    slug: "introducing-necm-eve-online-corporation-management",
    title:
      "Introducing NECM — Why Managing an EVE Online Corporation Shouldn\u2019t Feel Like a Second Job",
    excerpt:
      "Between processing applications, tracking fleet participation and managing marketplace logistics, the admin overhead can eclipse the actual gameplay. That\u2019s why we built New Eden Community Manager.",
    description:
      "Introducing New Eden Community Manager (NECM) \u2014 an open-source, self-hosted web application for EVE Online corporation and alliance management. Recruitment, fleet tracking, leaderboards, marketplace, doctrines and Discord integration.",
    publishedAt: "2026-04-12",
    author: "RosCro Industries",
    tags: ["NECM", "Corp Management", "Open Source", "Tools"],
    seoKeywords: [
      "EVE Online corporation management",
      "EVE Online corp tool",
      "NECM EVE Online",
      "New Eden Community Manager",
      "EVE Online fleet tracking",
      "EVE Online recruitment tool",
      "open source EVE tools",
    ],
    content: [
      {
        type: "paragraph",
        text: "If you\u2019ve ever run a corporation in EVE Online, you know the feeling. Between processing applications, tracking fleet participation, managing marketplace logistics, and keeping your Discord server in sync \u2014 the administrative overhead can eclipse the actual gameplay. That\u2019s why I built New Eden Community Manager (NECM), an open-source web application designed to give EVE corporation and alliance leaders the tools they need without the headache.",
      },
      {
        type: "heading",
        text: "What is NECM?",
      },
      {
        type: "paragraph",
        text: "New Eden Community Manager is a self-hosted web application built on modern technologies \u2014 Next.js, TypeScript, PostgreSQL, and Prisma \u2014 that serves as a centralized hub for EVE Online corporation management. It authenticates pilots through EVE Online\u2019s SSO, so there are no extra accounts to create. Log in with your EVE character, and the system knows who you are, what corporation you belong to, and what roles you should have.",
      },
      {
        type: "paragraph",
        text: "At its core, NECM replaces the patchwork of spreadsheets, Google Forms, Discord bots, and manual bookkeeping that most corporations rely on. It brings everything under one roof with a proper role-based access control system, audit logging, and a clean interface that works for both leadership and line members.",
      },
      {
        type: "image",
        src: "/blog/necm-dashboard.png",
        alt: "NECM dashboard showing pilot profile, corporation bulletins and quick action tiles",
        caption:
          "The NECM dashboard \u2014 corporation bulletins, pilot profile and quick actions at a glance.",
      },
      {
        type: "heading",
        text: "Recruitment That Actually Works",
      },
      {
        type: "paragraph",
        text: "One of the biggest time sinks for any CEO is recruitment. NECM provides a full application pipeline with customizable questions per corporation, multi-character support, and a status workflow that tracks applicants from submission through review, interview, acceptance, or rejection. Recruiters can manage their queue without needing full admin access, and every status change is logged and \u2014 optionally \u2014 announced in Discord.",
      },
      {
        type: "heading",
        text: "Fleet Participation Tracking",
      },
      {
        type: "paragraph",
        text: "Running fleets is the lifeblood of any active corporation, but tracking who showed up and rewarding consistent participation has always been painful. NECM includes a fleet management system with PAP (Participation Award Points) tracking, ESI verification against CCP\u2019s fleet API, and configurable PAP multipliers. Fleet commanders can register fleets, and the system automatically verifies participation through the EVE API. No more manually checking who was actually in fleet.",
      },
      {
        type: "image",
        src: "/blog/necm-members.png",
        alt: "NECM member roster showing PAPs, badges, doctrine readiness, last login and status per pilot",
        caption:
          "The member roster \u2014 PAPs, badges, doctrine compliance and activity status in one view.",
      },
      {
        type: "heading",
        text: "Leaderboards and Badges",
      },
      {
        type: "paragraph",
        text: "Gamification works. NECM includes a flexible leaderboard engine that can rank pilots across multiple metrics \u2014 fleet participation, PvP kills (via zKillboard integration), marketplace activity, and wormhole signature scanning. Leaderboards support configurable time periods, automatic recalculation, and even prize definitions for competitive seasons. Pair this with a badge system for recognizing achievements, and you have a genuine incentive structure that keeps members engaged.",
      },
      {
        type: "image",
        src: "/blog/necm-leaderboard.png",
        alt: "NECM leaderboard creation form with scope, metric and period configuration",
        caption:
          "Creating a leaderboard \u2014 scoped by corporation or alliance with flexible metrics and time periods.",
      },
      {
        type: "heading",
        text: "Marketplace",
      },
      {
        type: "paragraph",
        text: "The in-game market in EVE is powerful, but coordinating internal corp logistics \u2014 doctrine ship sales, transport contracts, buyback programs \u2014 is a different beast. NECM\u2019s marketplace module supports sell orders, buy requests, and transport listings with claim workflows, ISK pricing, and location data pulled from EVE\u2019s static data. It even calculates route distances between systems using jump data.",
      },
      {
        type: "image",
        src: "/blog/necm-marketplace.png",
        alt: "NECM marketplace showing transport contracts, buy orders and sell orders with ISK pricing",
        caption:
          "The marketplace \u2014 transport contracts, buy orders and sell listings with route calculations.",
      },
      {
        type: "heading",
        text: "Doctrines and Skill Tracking",
      },
      {
        type: "paragraph",
        text: "Every serious corporation maintains fleet doctrines, and making sure members can actually fly them is an eternal challenge. NECM lets leadership define doctrines with full fitting details and required skills, then checks members\u2019 actual skill levels through authenticated ESI endpoints. Pilots can see at a glance which doctrines they\u2019re ready for and what they still need to train.",
      },
      {
        type: "heading",
        text: "Surveys and Bulletins",
      },
      {
        type: "paragraph",
        text: "Need member feedback on a proposed policy change? Want to announce a deployment? NECM includes surveys with audience targeting (by role, corporation, or alliance) and a bulletin board system with pinning, publishing controls, and scope management. It\u2019s the internal communications platform that EVE never gave us.",
      },
      {
        type: "heading",
        text: "Discord Integration",
      },
      {
        type: "paragraph",
        text: "Let\u2019s be honest \u2014 Discord is where EVE communities actually live. NECM doesn\u2019t try to replace Discord; it enhances it. The application sends rich, color-coded webhook notifications for key events: new applications, status changes, survey publications, and marketplace claims. Each notification type goes to a configurable channel via separate webhook URLs, so your recruitment channel stays focused on recruitment and your logistics channel stays focused on logistics.",
      },
      {
        type: "paragraph",
        text: "Beyond webhooks, NECM supports full Discord OAuth account linking, allowing pilots to connect their Discord identity to their EVE characters. This opens the door for automated role synchronization between NECM\u2019s RBAC system and your Discord server roles \u2014 so when someone is promoted to Fleet Commander in NECM, their Discord roles can reflect that automatically.",
      },
      {
        type: "paragraph",
        text: "The integration is designed to be resilient. If Discord is down or a webhook URL isn\u2019t configured, the primary operation always succeeds. Notifications are a courtesy, never a blocker.",
      },
      {
        type: "heading",
        text: "WHMapper Integration",
      },
      {
        type: "paragraph",
        text: "For wormhole corporations, scanning is life. NECM integrates directly with WHMapper, a popular wormhole mapping tool, through a secure webhook pipeline. When a pilot scans signatures using WHMapper, the system automatically receives the data, identifies the scanning character, deduplicates signatures (so the same wormhole doesn\u2019t get counted twice), and credits the pilot on the appropriate leaderboard.",
      },
      {
        type: "paragraph",
        text: "The integration uses HMAC-SHA256 signature verification and replay protection, so it\u2019s secure out of the box. Even if a character isn\u2019t yet registered in NECM, the scan data is stored and can be attributed later. For wormhole corps that want to reward their scanners \u2014 and every wormhole corp should \u2014 this turns an invisible, thankless job into a recognized and tracked contribution.",
      },
      {
        type: "heading",
        text: "Why This Matters for a CEO",
      },
      {
        type: "paragraph",
        text: "Running an EVE corporation is a volunteer job with real organizational complexity. You\u2019re managing dozens or hundreds of people across time zones, coordinating military operations, handling logistics, and trying to keep morale high \u2014 all while presumably wanting to play the game yourself.",
      },
      {
        type: "paragraph",
        text: "Without proper tooling, the CEO becomes the bottleneck. \u201CDid anyone process that application?\u201D \u201CWho showed up to the fleet last Thursday?\u201D \u201CAre our new members actually trained for the doctrine?\u201D These questions shouldn\u2019t require digging through spreadsheets or pinging officers in Discord.",
      },
      {
        type: "paragraph",
        text: "NECM centralizes these workflows. It enforces permissions so you can safely delegate. It logs every administrative action so you have accountability. It automates the tedious parts \u2014 ESI verification, signature deduplication, leaderboard calculation \u2014 so your leadership team can focus on leading.",
      },
      {
        type: "paragraph",
        text: "The role-based access control system means you can give your recruiters exactly the access they need and nothing more. Your fleet commanders can manage PAPs without seeing applications. Your survey managers can publish feedback forms without touching marketplace listings. Delegation becomes safe and natural.",
      },
      {
        type: "heading",
        text: "Built for the Long Game",
      },
      {
        type: "paragraph",
        text: "NECM is designed with multi-corporation and multi-alliance extensibility in mind. The data model supports approved organizations, corporation-specific configurations, and alliance-level scoping. Whether you\u2019re running a small wormhole corp or a large nullsec alliance, the architecture scales with you.",
      },
      {
        type: "paragraph",
        text: "It\u2019s open source, self-hosted, and built on a stack that any modern web developer can contribute to. No vendor lock-in, no subscription fees, no data leaving your control.",
      },
      {
        type: "paragraph",
        text: "EVE Online is a game about building something together. New Eden Community Manager is a tool to help you do that without burning out.",
      },
    ],
  },
  {
    slug: "eve-online-industry-report-march-2026",
    title:
      "EVE Online Industry Report — March 2026 (NAV, Profit, Market Analysis)",
    excerpt:
      "March 2026 marks the first fully structured industry report from RosCro Industries. Adjusted NAV reached 28.5 billion ISK, with 476 million ISK in revenue and a 14.8% average margin.",
    description:
      "March 2026 industry report for RosCro Industries covering NAV, profit, market analysis, capital allocation and strategic direction for our EVE Online industrial operations.",
    publishedAt: "2026-04-02",
    author: "RosCro Industries",
    tags: ["Industry", "Reports", "Finance", "Corp Update"],
    seoKeywords: [
      "EVE Online industry report",
      "EVE Online market analysis",
      "EVE Online corporation finance",
      "NAV report EVE Online",
    ],
    content: [
      {
        type: "paragraph",
        text: "March 2026 marks the first fully structured industry report generated through our internal platform, EVE Industry Control. This report provides a detailed snapshot of RosCro Industries\u2019 financial position, operational performance and strategic direction.",
      },
      {
        type: "paragraph",
        text: "For corporations operating in EVE Online, transparency and data-driven decision-making are rare. Most groups operate on intuition and fragmented information. Our goal is to build a different kind of organization \u2014 one that measures, tracks and improves over time using real data.",
      },
      {
        type: "paragraph",
        text: "This report is part of that foundation.",
      },
      {
        type: "heading",
        text: "Executive Summary",
      },
      {
        type: "paragraph",
        text: "March was a growth-focused month. Adjusted NAV reached 28.5 billion ISK, representing a significant increase driven primarily by material acquisition and market repricing rather than realized profit.",
      },
      {
        type: "paragraph",
        text: "Revenue for the period totaled 476 million ISK, with a realized profit of 70.3 million ISK and an average margin of 14.8%. While these margins are healthy, they highlight a key imbalance in our current operations: we are effective at identifying value, but less effective at converting it into realized gains.",
      },
      {
        type: "paragraph",
        text: "This places the corporation in what can best be described as a positioning phase \u2014 accumulating assets, building inventory and preparing for larger-scale execution.",
      },
      {
        type: "heading",
        text: "NAV and Capital Allocation",
      },
      {
        type: "paragraph",
        text: "The composition of our NAV provides important insight into how capital is currently deployed.",
      },
      {
        type: "paragraph",
        text: "A significant portion of total value is tied up in blueprints and materials, which together represent over 70% of total NAV. Liquidity remains relatively low at 19.7%, indicating that most capital is not immediately accessible for redeployment.",
      },
      {
        type: "paragraph",
        text: "This allocation is intentional to a degree. Building an industrial base requires upfront investment in both blueprint libraries and raw materials. However, it also introduces risk. Capital that is not moving is capital that is not generating returns.",
      },
      {
        type: "paragraph",
        text: "Going forward, improving capital turnover will be a key priority.",
      },
      {
        type: "heading",
        text: "Realized vs Unrealized Performance",
      },
      {
        type: "paragraph",
        text: "One of the most important insights from this report is the distinction between realized profit and unrealized gains.",
      },
      {
        type: "paragraph",
        text: "While total NAV increased by over 2.1 billion ISK, only a small portion of that increase came from actual sales. The majority is attributed to market repricing of held assets.",
      },
      {
        type: "paragraph",
        text: "This means that current performance is sensitive to market conditions. If prices fall, a portion of that NAV growth could disappear without ever being realized.",
      },
      {
        type: "paragraph",
        text: "For an industrial corporation, this is a critical transition point. Growth must shift from valuation-based gains to execution-based profitability.",
      },
      {
        type: "heading",
        text: "Production and Market Execution",
      },
      {
        type: "paragraph",
        text: "The report highlights a clear issue across active projects: low sell-through.",
      },
      {
        type: "paragraph",
        text: "More than 20 active projects show sell-through below 20%, indicating that items are either poorly positioned in the market or priced incorrectly.",
      },
      {
        type: "paragraph",
        text: "At the same time, several items demonstrate strong performance, including Small Capacitor Booster II and Mining Survey Chipset II, with significantly higher ROI and better market absorption.",
      },
      {
        type: "paragraph",
        text: "This creates a clear operational directive:",
      },
      {
        type: "list",
        items: [
          "Focus production on high-liquidity items",
          "Reduce exposure to saturated markets",
          "Prioritize sell-through over theoretical profit margins",
        ],
      },
      {
        type: "paragraph",
        text: "In practical terms, this means producing less of what looks good on paper, and more of what actually sells.",
      },
      {
        type: "heading",
        text: "Liquidity and Risk",
      },
      {
        type: "paragraph",
        text: "Liquidity remains one of the most important risk factors identified in the report.",
      },
      {
        type: "paragraph",
        text: "With less than 20% of total NAV in liquid form, the corporation has limited flexibility to react to market changes. A large portion of capital is tied up in buy order escrow and materials, reducing operational agility.",
      },
      {
        type: "paragraph",
        text: "Additional risks include:",
      },
      {
        type: "list",
        items: [
          "Market repricing risk (NAV dependent on current prices)",
          "Capital lock-up in slow-moving inventory",
          "Overexposure to competitive, saturated markets",
          "Low execution efficiency across production pipelines",
        ],
      },
      {
        type: "paragraph",
        text: "These risks are typical for early-stage industrial corporations, but they must be addressed to sustain long-term growth.",
      },
      {
        type: "heading",
        text: "Strategic Direction",
      },
      {
        type: "paragraph",
        text: "March should not be evaluated purely on profit. It is more accurately viewed as a foundational phase.",
      },
      {
        type: "paragraph",
        text: "The corporation has successfully:",
      },
      {
        type: "list",
        items: [
          "Built a significant material base",
          "Established a broad production pipeline",
          "Implemented structured reporting and analytics",
          "Developed internal tools for tracking performance",
        ],
      },
      {
        type: "paragraph",
        text: "The next phase is execution.",
      },
      {
        type: "paragraph",
        text: "In April and beyond, the focus will shift toward:",
      },
      {
        type: "list",
        items: [
          "Increasing sell-through across all active projects",
          "Converting inventory into finished goods and market listings",
          "Improving capital efficiency and turnover",
          "Narrowing production to high-performing items",
        ],
      },
      {
        type: "paragraph",
        text: "The objective is not just to grow NAV, but to establish a repeatable cycle of production, sales and reinvestment.",
      },
      {
        type: "heading",
        text: "Why This Matters",
      },
      {
        type: "paragraph",
        text: "Most EVE Online corporations do not operate with this level of visibility. Decisions are often made without clear data, and performance is rarely measured in a structured way.",
      },
      {
        type: "paragraph",
        text: "By building and publishing these reports, RosCro Industries creates:",
      },
      {
        type: "list",
        items: [
          "Transparency for current and future members",
          "A measurable framework for improvement",
          "A long-term record of growth and decision-making",
        ],
      },
      {
        type: "paragraph",
        text: "This is not just an internal tool. It is part of the identity of the corporation.",
      },
      {
        type: "heading",
        text: "Looking Ahead",
      },
      {
        type: "paragraph",
        text: "This is the first iteration of a structured reporting model. Future reports will expand on this foundation with deeper analytics, improved accuracy and more advanced performance tracking.",
      },
      {
        type: "paragraph",
        text: "The goal is simple: build a corporation where decisions are informed, progress is measurable and growth is sustainable.",
      },
      {
        type: "paragraph",
        text: "If you are interested in EVE Online industry, market analysis or joining a data-driven corporation, RosCro Industries is actively recruiting.",
      },
    ],
  },
  {
    slug: "building-a-long-term-eve-online-corporation",
    title: "Building a Long-Term EVE Online Corporation",
    excerpt:
      "Most EVE corporations burn bright and collapse fast. RosCro Industries is built on a different premise — steady growth, real capability and a permanent home in New Eden.",
    description:
      "How RosCro Industries is building a lasting EVE Online corporation through phased industrial development, disciplined growth and long-term planning.",
    publishedAt: "2026-03-15",
    author: "RosCro Industries",
    tags: ["Corporation", "Vision", "Long-Term"],
    seoKeywords: [
      "EVE Online corporation",
      "long-term EVE corp",
      "building EVE corporation",
    ],
    content: [
      {
        type: "paragraph",
        text: "There is no shortage of corporations in EVE Online. At any given time, thousands of corps are recruiting, merging, collapsing and reforming. The lifecycle of the average EVE corporation is measured in months — sometimes weeks. Most start with ambition, burn through early enthusiasm and quietly dissolve once the founding members lose interest or move on.",
      },
      {
        type: "paragraph",
        text: "RosCro Industries was founded with a different premise. We are not building a corporation to fill a roster or chase short-term content. We are building an organization designed to persist — to grow steadily, develop real capability and create a permanent operational home for pilots who think in years, not weeks.",
      },
      {
        type: "heading",
        text: "The Problem with Short-Term Thinking",
      },
      {
        type: "paragraph",
        text: "EVE Online rewards patience, planning and compound effort. Industry profits scale with infrastructure investment. PvP capability grows with practice, doctrine refinement and fleet coordination over time. Territorial control demands logistics, diplomacy and organizational maturity that cannot be rushed.",
      },
      {
        type: "paragraph",
        text: "And yet, most corporations operate on impulse. They recruit aggressively, promise nullsec within weeks, burn through ISK on plans that never materialize and disband when the reality falls short of the pitch.",
      },
      {
        type: "paragraph",
        text: "The result is a cycle of pilot churn. New players join a corporation, witness the chaos, lose confidence and either quit EVE or move to the next corp that makes the same promises. Experienced players grow cynical and either go solo or join massive blocs where individual contribution is invisible.",
      },
      {
        type: "heading",
        text: "Our Approach",
      },
      {
        type: "paragraph",
        text: "RosCro Industries takes a deliberate, phased approach to growth. Our current operations are rooted in highsec industry — manufacturing, mining, exploration and PvE. These activities are not glamorous, but they are economically essential and operationally stable.",
      },
      {
        type: "paragraph",
        text: "From this foundation, we are developing the logistics capability, combat readiness and leadership structure required to eventually transition into nullsec. This is not a recruiting fantasy. It is a structured plan with defined phases and measurable milestones.",
      },
      {
        type: "paragraph",
        text: "Phase one focuses on industrial output and internal structure. Phase two introduces small-gang PvP and fleet development. Phase three targets nullsec transition with the operational maturity to sustain it. Phase four is permanent, self-sufficient nullsec presence. Each phase depends on the previous one. We do not skip steps.",
      },
      {
        type: "heading",
        text: "What This Means for Members",
      },
      {
        type: "paragraph",
        text: "For pilots who join RosCro Industries, this approach means several things. Every contribution matters. When you mine, manufacture, haul or run missions, you are feeding a shared economy that directly supports the corporation's trajectory.",
      },
      {
        type: "paragraph",
        text: "There is room to grow. Early members have opportunities to take on leadership roles, develop fleet skills and shape the direction of the organization. And there is no manufactured urgency. You will never be pressured to log in, attend mandatory operations or sacrifice your real life for a video game.",
      },
      {
        type: "paragraph",
        text: "We believe that the best EVE corporations are the ones that respect their members' autonomy while providing genuine structure and direction. That balance is what we are building.",
      },
      {
        type: "heading",
        text: "The Long Game",
      },
      {
        type: "paragraph",
        text: 'Building a lasting EVE corporation is not exciting on a day-to-day basis. It requires consistency, honesty and the willingness to do foundational work before chasing ambition. It means saying "we are in highsec" when other corps are pretending to be nullsec powerhouses. It means recruiting selectively instead of inviting everyone in local.',
      },
      {
        type: "paragraph",
        text: "But the payoff is real. A well-built corporation becomes a home — a persistent place in New Eden where your effort compounds, your relationships deepen and your gameplay has context and meaning beyond the next fleet.",
      },
      {
        type: "heading",
        text: "Looking Ahead",
      },
      {
        type: "paragraph",
        text: "In the coming months, our focus remains on expanding our industrial base, onboarding new members and refining our internal processes. We have begun publishing regular industry reports that track corporation performance, and we plan to expand this reporting to include quarterly strategic reviews.",
      },
      {
        type: "paragraph",
        text: "We are not in a hurry — but we are not standing still. That is what RosCro Industries is building. If that resonates with you, we would like to hear from you.",
      },
    ],
  },
  {
    slug: "beginner-friendly-industry-in-eve-online",
    title: "Beginner-Friendly Industry in EVE Online: Where to Start",
    excerpt:
      "EVE Online has one of the deepest player-driven economies in gaming. Here is how new players can get started with industry — and how RosCro Industries supports them.",
    description:
      "A practical guide for new EVE Online players interested in industry, mining and manufacturing. Learn how to get started and how a beginner-friendly corporation can help.",
    publishedAt: "2026-03-22",
    author: "RosCro Industries",
    tags: ["Industry", "Beginner Guide", "Mining"],
    seoKeywords: [
      "EVE Online industry guide",
      "beginner friendly EVE Online corp",
      "EVE Online mining",
      "EVE Online manufacturing",
    ],
    content: [
      {
        type: "paragraph",
        text: "EVE Online has one of the deepest and most interconnected economies in gaming. Nearly everything in the game — from frigates to capital ships, ammunition to structures — is manufactured by players. Industry is not a side activity in EVE; it is the foundation of the entire universe.",
      },
      {
        type: "paragraph",
        text: "For new players, the industry path can seem overwhelming. The interface is dense, the economics are real and the learning curve is steep. But with the right guidance and a supportive corporation, industry is one of the most rewarding and sustainable career paths in EVE Online.",
      },
      {
        type: "paragraph",
        text: "This guide covers the fundamentals of getting started with industry as a new player, and how a beginner-friendly corporation like RosCro Industries supports industrialists at every stage.",
      },
      {
        type: "heading",
        text: "Understanding the Basics",
      },
      {
        type: "paragraph",
        text: "At its core, EVE Online industry is about transforming raw materials into something more valuable. The simplest pipeline looks like this: mine ore, refine it into minerals, use blueprints to manufacture items, and sell them on the market.",
      },
      {
        type: "paragraph",
        text: "Each step requires skills, infrastructure and market awareness. As a new player, you will start with basic blueprints and T1 manufacturing. Over time, you can move into tech two production, invention, reactions, planetary interaction and even capital ship manufacturing. The key is to start small, learn the mechanics and scale up as your understanding and resources grow.",
      },
      {
        type: "heading",
        text: "Mining as a Starting Point",
      },
      {
        type: "paragraph",
        text: "Many new industrialists begin with mining. It provides a steady income stream, requires minimal initial investment and teaches you about the resource ecosystem in EVE Online. Highsec mining is safe, predictable and a reliable way to accumulate starting capital.",
      },
      {
        type: "paragraph",
        text: "In RosCro Industries, organized mining fleets are a regular activity. Fleet mining is more efficient than solo mining thanks to fleet boosts, and it provides a social foundation for new members. You mine, you chat, you learn — and the ore feeds either personal projects or corporation production goals.",
      },
      {
        type: "paragraph",
        text: "We provide guidance on ship fitting, skill training priorities and ore selection so new miners can maximize their output from the start.",
      },
      {
        type: "heading",
        text: "Manufacturing Your First Items",
      },
      {
        type: "paragraph",
        text: "Once you have minerals — whether from mining, purchasing on the market or a combination of both — manufacturing is the next step. The manufacturing system in EVE uses blueprints that define what materials are needed and how long production takes.",
      },
      {
        type: "paragraph",
        text: "Start with high-demand T1 items: ammunition, drones, modules and basic ships. Research your blueprints to improve material and time efficiency. Check market prices in your region before committing to a production run. Profit margins in highsec manufacturing are thin, so efficiency matters from the beginning.",
      },
      {
        type: "paragraph",
        text: "RosCro Industries maintains a corporation blueprint library that members can access. This removes one of the biggest barriers to entry for new industrialists — you do not need to invest billions in BPOs to start producing useful items.",
      },
      {
        type: "heading",
        text: "Logistics and the Supply Chain",
      },
      {
        type: "paragraph",
        text: "Industry is not just about building things. Moving materials and finished goods efficiently is a critical part of the pipeline. Hauling between trade hubs, managing buy and sell orders and optimizing your supply chain can be as engaging as the manufacturing itself.",
      },
      {
        type: "paragraph",
        text: "For new players, understanding trade routes, courier contracts and market dynamics adds depth to the industrial experience. In RosCro Industries, logistics is an active contribution area — pilots who enjoy hauling and market operations play a vital role in keeping the corporation supplied and competitive.",
      },
      {
        type: "heading",
        text: "Why Industry Matters Long-Term",
      },
      {
        type: "paragraph",
        text: "Industry scales in EVE. As your skills, ISK and infrastructure grow, your output grows with them. What starts as a single production line in a station can evolve into a multi-system manufacturing operation feeding alliance-level markets.",
      },
      {
        type: "paragraph",
        text: "For corporations like RosCro Industries, industrial output is the economic engine that powers every other activity. PvP fleets need ships and modules. Exploration pilots need probes and analysers. Every doctrine ship on a killmail was built by an industrialist somewhere.",
      },
      {
        type: "paragraph",
        text: "When you invest in industry, you are investing in capability that compounds over time. And in a corporation with long-term goals, that investment matters more than in most.",
      },
      {
        type: "heading",
        text: "Getting Started",
      },
      {
        type: "paragraph",
        text: "If you are new to EVE Online and interested in industry, the best way to start is to join a corporation that values and supports industrial players. RosCro Industries is a beginner-friendly highsec corporation actively recruiting pilots of all experience levels who want to build, produce and grow within a structured environment.",
      },
      {
        type: "paragraph",
        text: "Join our Discord, introduce yourself, and start building something that lasts.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
