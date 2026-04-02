export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

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
  {
    slug: "roscro-industries-corp-update-march-2026",
    title: "RosCro Industries Corp Update — March 2026",
    excerpt:
      "March 2026 marks another month of steady progress. Here is where RosCro Industries stands — industrial output, recruitment, logistics and what comes next.",
    description:
      "March 2026 corporation update for RosCro Industries covering industrial output, mining operations, recruitment progress and near-term plans.",
    publishedAt: "2026-04-01",
    author: "RosCro Industries",
    tags: ["Corp Update", "Industry", "Reports"],
    seoKeywords: [
      "EVE Online corp update",
      "RosCro Industries",
      "EVE Online industry report",
    ],
    content: [
      {
        type: "paragraph",
        text: "March 2026 marks another month of steady progress for RosCro Industries. As part of our commitment to transparency and structured growth, this update covers what the corporation has been working on, where we stand and what comes next.",
      },
      {
        type: "heading",
        text: "Industrial Output",
      },
      {
        type: "paragraph",
        text: "Our manufacturing operations continue to expand. March saw consistent production across multiple product lines, with a focus on T1 modules, ammunition and ship hulls that serve both internal needs and market sales.",
      },
      {
        type: "paragraph",
        text: "Total adjusted NAV reached 28.508 billion ISK — a figure that reflects the combined value of corporation assets, liquid ISK, material stockpiles and active production investments. Revenue for the month came in at 476 million ISK, with a realized profit of 70.2 million ISK across 530 items sold.",
      },
      {
        type: "paragraph",
        text: "These numbers reflect a growing but still early-stage operation. We are not yet at the scale where production alone sustains major expansion, but the trajectory is clear and the month-over-month growth is consistent. For the full breakdown, our March 2026 Industry Report is available for download on the Reports section of our site.",
      },
      {
        type: "heading",
        text: "Mining Operations",
      },
      {
        type: "paragraph",
        text: "Organized mining fleets ran regularly throughout March, focused primarily on highsec ore extraction. Fleet participation has been stable, and we have continued to refine our fleet boosting and coordination processes.",
      },
      {
        type: "paragraph",
        text: "We are actively building our stockpile of refined minerals to support upcoming production goals. Mining remains one of our most accessible activities for new members and a consistent source of input for the production pipeline.",
      },
      {
        type: "heading",
        text: "Membership and Recruitment",
      },
      {
        type: "paragraph",
        text: "Recruitment remained open throughout March. We welcomed several new members who have already begun contributing to mining fleets and logistics operations. Our approach to recruitment — Discord-first, low-friction, no API gatekeeping — continues to work well for attracting pilots who value substance over process.",
      },
      {
        type: "paragraph",
        text: "We are still a small corporation by EVE standards, and that is intentional. We grow deliberately, ensuring each new member finds a role and integrates into the operational rhythm of the corp. Every pilot who joins during this foundational phase has the opportunity to shape how the corporation develops.",
      },
      {
        type: "heading",
        text: "Logistics Development",
      },
      {
        type: "paragraph",
        text: "March saw continued investment in our logistics infrastructure. Hauling routes between our primary operating systems have been mapped and optimized, and we have begun planning for expansion of our market supply operations.",
      },
      {
        type: "paragraph",
        text: "Logistics is an underrated contribution area in EVE Online, and pilots who enjoy hauling, market seeding and supply chain management continue to be some of our most valued members.",
      },
      {
        type: "heading",
        text: "Community and Culture",
      },
      {
        type: "paragraph",
        text: "One of the things that distinguishes RosCro from many other corporations is our approach to culture. We maintain a calm, professional and respectful environment. Drama is not tolerated, and leadership decisions are communicated transparently.",
      },
      {
        type: "paragraph",
        text: "Our Discord server remains the primary hub for all coordination. We have continued to refine our channel structure, improve onboarding documentation and create clearer pathways for new members to find their operational lane. Several members have taken initiative on personal projects within the corporation framework — production runs, market analysis and exploration mapping — which is exactly the kind of autonomous contribution we encourage.",
      },
      {
        type: "heading",
        text: "What Comes Next",
      },
      {
        type: "paragraph",
        text: "In April, our focus areas include expanding our blueprint library with additional T1 and faction blueprints, increasing production volume to improve margin on high-turnover items, continuing to develop internal tools for tracking production efficiency, and preparing foundational plans for phase two activities including small-gang PvP roam scheduling.",
      },
      {
        type: "paragraph",
        text: "We are not rushing any of these milestones. The goal is steady, measurable progress — not dramatic pivots or overcommitment.",
      },
      {
        type: "heading",
        text: "Looking Further Ahead",
      },
      {
        type: "paragraph",
        text: "While our immediate focus remains on phase one objectives, we have begun preliminary discussions about long-term planning for phase two. This includes identifying training priorities for small-gang PvP, evaluating fleet doctrines and considering how our industrial output can support future combat operations.",
      },
      {
        type: "paragraph",
        text: "These discussions are early-stage and exploratory. We are not committing to timelines, but we are ensuring that the conversation happens now so that the transition, when it comes, is informed and deliberate.",
      },
      {
        type: "paragraph",
        text: "RosCro Industries is exactly where we intend to be at this stage: building a stable industrial base, growing our membership thoughtfully and laying the groundwork for long-term expansion. Every month that passes with consistent output and engaged members is confirmation that our approach works. If you are interested in what we are building, our Discord is open.",
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
