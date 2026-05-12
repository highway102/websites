export const SITE = {
  name: "ZBN News",
  firstName: "ZBN",
  role: "Independent News Network",
  show: "ZBN News",
  network: "Zero Boundary Network",
  brandMark: "ZBN",
  channelHandle: "@omarstalkshow",
  channelUrl: "https://www.youtube.com/@omarstalkshow",
  email: "omarstalkshow@gmail.com",
  location: "NYC, New York",

  tagline:
    "Daily news, real insight, and fact-based commentary on politics, business, media narratives, and the stories reshaping New York and the country.",

  heroStatement: "Independent reporting. Fact-based analysis. Serious presentation.",

  missionEyebrow: "Network Mission",
  missionHeadline: "Build an independent network viewers can treat like a real daily briefing.",
  missionBody:
    "ZBN News is designed as a more serious network wrapper around the urgency, reporting instinct, and directness already working inside the current coverage.",
  missionBlurb:
    "The goal is to keep the independent voice while upgrading the presentation: stronger structure, fact-based framing, and a website that feels like a real newsroom instead of a one-off channel landing page.",

  aboutShort:
    "ZBN News is the Zero Boundary Network website: a sharper independent newsroom for breaking analysis, city politics, economic stress, media narratives, and current-issue briefings.",

  aboutLong: [
    "ZBN News is a network-style evolution of the independent commentary work already happening around Omar's Talk Show. The aim is not to sand down the edge. It is to present that edge with more institutional weight: cleaner sections, stronger editorial hierarchy, and a visual system that feels closer to a modern digital bureau than a creator homepage.",
    "The network is based in New York City and is built around independent, fact-based analysis. Omar brings the New York lens, particularly around corporate movement, fiscal pressure, and city-level political fallout. Felmon broadens the desk with fast-turn political analysis and a national commentary cadence suited to headline-driven coverage.",
    "The result is a site built to scale. ZBN News introduces a network identity that can support more shows, more recurring beats, and a stronger sense of editorial continuity over time without overstating the background behind the hosts.",
  ],

  beats: [
    "City Politics",
    "Economic Shifts",
    "Media Narratives",
    "Breaking Analysis",
  ],

  credentials: [
    "Independent, fact-based editorial positioning with a network-style presentation",
    "Active commentary, analysis, and on-camera delivery presented with a clearer editorial frame",
    "Launch structure built around embedded video briefings and reporting-led coverage",
    "Current featured reporting sourced from Omar's active YouTube output",
    "Designed as a more formal web front door for long-term network growth",
  ],

  social: {
    youtube: "https://www.youtube.com/@omarstalkshow",
    x: "https://x.com/OmarsTalkShow",
    instagram: "",
    linkedin: "",
  },
}

export type Host = {
  name: string
  role: string
  base: string
  focus: string
  blurb: string
  image: string
}

export const HOSTS: Host[] = [
  {
    name: "Omar I.",
    role: "Founding Host",
    base: "",
    focus: "Corporate exits, tax policy, city politics, and New York's economic realignment.",
    blurb:
      "Omar anchors the network's city-and-economy lane with reporting-heavy commentary built around filings, relocations, budget math, and the quiet institutional changes rewriting New York.",
    image: "/omar-host.jpg",
  },
  {
    name: "Felmon N.",
    role: "Founding Host",
    base: "",
    focus: "Political flashpoints, party fractures, media narratives, and fast-turn analysis.",
    blurb:
      "Felmon expands the desk into a broader headline machine: sharper reaction, argument-first episode framing, and a national political read built for fast-moving stories.",
    image: "/felmon-host.jpg",
  },
]

export const NETWORK_PILLARS = [
  {
    label: "Independent",
    title: "Editorially independent",
    body: "ZBN News is positioned around independent judgment, not party talking points, cable habits, or institutional spin.",
  },
  {
    label: "Fact-Based",
    title: "Receipts first",
    body: "Every segment is framed to feel grounded in reporting, documents, public statements, and verifiable context before opinion enters the frame.",
  },
  {
    label: "Experienced",
    title: "Built around active coverage",
    body: "The network presents itself as a serious desk shaped by ongoing analysis, on-camera delivery, and repeated coverage of high-stakes stories without leaning on inflated industry claims.",
  },
  {
    label: "Daily Briefing",
    title: "Made for the live news cycle",
    body: "The format is designed to move quickly without looking sloppy: direct briefings, embedded video, and a site built to update like a newsroom.",
  },
]

export const DESK_NOTES = [
  {
    label: "Headquarters",
    value: "New York City",
    body: "The station identity is anchored in New York City, New York, with the brand framed like a serious local-to-national digital news desk.",
  },
  {
    label: "Current Feed",
    value: "Latest Channel Sync",
    body: "The embedded lineup is synced to Omar's current YouTube uploads while the broader ZBN network identity continues to take shape.",
  },
  {
    label: "Editorial Standard",
    value: "Fact-Based",
    body: "The presentation emphasizes independent reporting, credible tone, and a cleaner editorial structure over creator-style branding.",
  },
]

export type Video = {
  id: string
  title: string
  host: string
  date?: string
  summary?: string[]
}

const CTA =
  "This is the kind of story ZBN can package more credibly: a direct host voice, a formal briefing layout, and a cleaner network front door for the work."

export const VIDEOS: Video[] = [
  {
    id: "KsC2QKA4kgo",
    host: "Omar",
    title: "Governor Newsom ERUPTS After In-N-Out Burger OFFICIALLY Leaves California After 77 Years",
    date: "May 10, 2026",
    summary: [
      "A legacy-brand departure story framed around California's business climate, political fallout, and what it means when an institution with decades of roots decides to leave anyway.",
      "As a ZBN lead briefing, it works because it turns a familiar consumer brand into a broader argument about confidence, regulation, and why once-stable business loyalties start to break. " + CTA,
    ],
  },
  {
    id: "KCtgIjmJYz4",
    host: "Omar",
    title: "Mamdani GOES NUTS After Secret Plan To PUNISH Companies That Leave NYC Gets EXPOSE",
    date: "May 10, 2026",
    summary: [
      "A New York business-and-politics story centered on retaliation, corporate exits, and the pressure city leadership faces when confidence keeps slipping.",
      "This fits naturally into the ZBN catalog because it treats anti-exit policy as a real power story instead of a niche policy footnote.",
    ],
  },
  {
    id: "aksyGjgkr-U",
    host: "Omar",
    title: "Mayor Mamdani ERUPTS As Amazon Fresh SHUTS DOWN All NYC Locations For Good!",
    date: "May 10, 2026",
    summary: [
      "A retail-withdrawal story that uses Amazon Fresh's exit to spotlight neighborhood impact, city confidence, and the meaning of a full-market pullback.",
      "As a ZBN supporting story, it keeps the network anchored in its strongest lane: New York, corporate retrenchment, and what those decisions signal beyond the press release.",
    ],
  },
  {
    id: "aB77NgLg8-c",
    host: "Omar",
    title: "Cathie Wood FINALLY Speaks On Why ARK Invest OFFICIALLY Left NYC For Florida - BRUTAL!",
    date: "May 10, 2026",
    summary: [
      "A finance-and-relocation story that ties a recognizable investment brand to the larger contest between New York and Florida for capital, talent, and executive loyalty.",
      "For ZBN, it plays as strong archive material because it uses one firm's move to illustrate a larger competitiveness argument.",
    ],
  },
  {
    id: "DEJmL-yXAyc",
    host: "Omar",
    title: "NEW YORK Just Lost Its BIGGEST Taxpayer - The Amount Will Make You SICK",
    date: "May 9, 2026",
    summary: [
      "A fiscal-stress briefing built around tax exposure and the kind of high-end departure that can reshape a city's revenue picture in a hurry.",
      "In the ZBN archive, it works as a clean public-finance story with obvious stakes for budgets, politics, and long-run confidence.",
    ],
  },
  {
    id: "WwtR8c8Bf4s",
    host: "Omar",
    title: "Los Angeles IN SHOCK As The \"NEXT MAMDANI\" Is Set To Become Mayor",
    date: "May 8, 2026",
    summary: [
      "A crossover city-politics story that broadens the desk beyond New York while keeping the same focus on ideological leadership, urban pressure points, and public reaction.",
      "This stays valuable in the recent catalog because it extends the editorial lane without losing the station's appetite for city-level power stories.",
    ],
  },
  {
    id: "FCtEIuToHcY",
    host: "Omar",
    title: "Mamdani IN SHOCK After New Yorkers FLEE Over $11 Billion ILLEGAL IMMIGRANT Bill",
    date: "May 8, 2026",
    summary: [
      "A migration-and-city-cost story that frames public frustration through fiscal burden, residency decisions, and who absorbs the consequences.",
      "For ZBN, it reinforces the station's strongest lane around New York strain, policy backlash, and the politics of who stays versus who leaves.",
    ],
  },
  {
    id: "_wWuYJ0F5YE",
    host: "Omar",
    title: "California Governor SHOCKED After Mark Zuckerberg OFFICIALLY Flees To $170M Miami Mansion!",
    date: "May 7, 2026",
    summary: [
      "A high-profile wealth-migration story that uses Zuckerberg's move to examine prestige, power, and why elite figures increasingly choose Florida over legacy blue-state strongholds.",
      "It remains useful catalog material because it expands ZBN's geography while keeping the same money-movement thesis intact.",
    ],
  },
  {
    id: "M1L5LmF7h0Q",
    host: "Omar",
    title: "Governor of New Jersey ERUPTS After ExxonMobil LEAVES For Texas After 144 Years!",
    date: "May 7, 2026",
    summary: [
      "A legacy-corporate relocation story with a strong historical hook: a 144-year relationship breaking apart under the pressure of modern cost, tax, and strategic incentives.",
      "In the ZBN archive, it works as a direct corporate-exit story with obvious regional and political consequences.",
    ],
  },
]

export const PRESS: Array<{ name: string; url?: string }> = [
  { name: "Launch-ready newsroom shell" },
  { name: "Multi-host identity system" },
  { name: "Embedded lead-story playback" },
  { name: "Expandable network archive" },
]

export type PullQuote = { quote: string; attribution: string }

export const QUOTES: PullQuote[] = [
  {
    quote:
      "ZBN is the version of the brand that treats the work like a desk instead of a lone channel.",
    attribution: "Network Positioning",
  },
  {
    quote:
      "The independent voice stays intact, but the presentation earns more trust the moment the page loads.",
    attribution: "Design Direction",
  },
]
