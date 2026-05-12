// Single source of truth for swappable content.

export function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export const SITE = {
  name: "Omar Ibrahim",
  firstName: "Omar",
  role: "Independent Journalist · New York",
  show: "Omar's Talk Show",
  networkInitials: "OTS",
  networkName: "Omar's Talk Show",
  channelHandle: "@omarstalkshow",
  channelUrl: "https://www.youtube.com/@omarstalkshow",
  email: "omarstalkshow@gmail.com",
  location: "New York City, New York",

  tagline:
    "An independent New York journalist reporting on the corporate moves, tax decisions, and political shifts reshaping the city and the wider economy around it.",

  heroStatement: "Independent. New York. Journalism.",

  missionEyebrow: "The Mission",
  missionHeadline: "Independent. New York. Journalism.",
  missionBody:
    "A passionate New Yorker. An independent journalist. One city's story, told honestly.",
  missionBlurb:
    "Every city tells its story in its filings - who is listed where, who pays which tax, and who quietly walks away. New York is still mine to report.",

  aboutShort:
    "Independent journalist and lifelong New Yorker. Host of Omar's Talk Show - long-form reporting on the corporate decisions, tax shifts, and political fights reshaping the city he loves.",

  aboutLong: [
    "I'm Omar Ibrahim - a passionate New Yorker, independent reporter, and the host of Omar's Talk Show. I cover the corporate migration, tax decisions, and political fights reshaping New York City. The stories the press releases miss. The numbers the headlines underplay. The filings the editors skim past.",
    "Everything on the show is independently produced and published through Omar's Talk Show on YouTube - Goldman Sachs to Dallas, JPMorgan's office shifts, retail closures, tax flight, and the policy decisions behind them. No network. No donor class. No script. Just the receipts, the filings, and what they actually mean for the city.",
    "What drives the work is simple: I'm not leaving. New York's story isn't ending - it's being rewritten in board rooms and tax committees that don't answer to the people who built this place. The job is to keep showing up, keep reading the filings, and keep telling the story honestly. If you have a tip, a source, or a story you think should be told, the contact page is open.",
  ],

  beats: [
    "New York City",
    "Wall Street",
    "Corporate Migration",
    "City Politics",
  ],

  credentials: [
    "Host & Founder, Omar's Talk Show · YouTube",
    "Independent reporting published directly through Omar's Talk Show",
    "Coverage rooted in public records, earnings calls, filings, and policy",
  ],

  social: {
    youtube: "https://www.youtube.com/@omarstalkshow",
    x: "https://x.com/OmarsTalkShow",
    instagram: "",
    linkedin: "",
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  views?: string
  duration?: string
  summary?: string[]
}

// Sorted newest first. Refreshed from the live YouTube channel on May 11, 2026.
export const VIDEOS: Video[] = [
  {
    id: "KsC2QKA4kgo",
    title: "Governor Newsom ERUPTS After In-N-Out Burger OFFICIALLY Leaves California After 77 Years",
    date: "May 11, 2026",
    views: "15K views",
    duration: "18:46",
  },
  {
    id: "KCtgIjmJYz4",
    title: "Mamdani GOES NUTS After Secret Plan To PUNISH Companies That Leave NYC Gets EXPOSE",
    date: "May 10, 2026",
    views: "45K views",
    duration: "13:00",
  },
  {
    id: "aksyGjgkr-U",
    title: "Mayor Mamdani ERUPTS As Amazon Fresh SHUTS DOWN All NYC Locations For Good!",
    date: "May 10, 2026",
    views: "95K views",
    duration: "11:57",
  },
  {
    id: "DEJmL-yXAyc",
    title: "NEW YORK Just Lost Its BIGGEST Taxpayer - The Amount Will Make You SICK",
    date: "May 9, 2026",
    views: "74K views",
    duration: "20:20",
  },
  {
    id: "FCtEIuToHcY",
    title: "Mamdani IN SHOCK After New Yorkers FLEE Over $11 Billion ILLEGAL IMMIGRANT Bill",
    date: "May 8, 2026",
    views: "27K views",
    duration: "18:12",
  },
  {
    id: "_wWuYJ0F5YE",
    title: "California Governor SHOCKED After Mark Zuckerberg OFFICIALLY Flees To $170M Miami Mansion!",
    date: "May 7, 2026",
    views: "189K views",
    duration: "17:51",
  },
  {
    id: "M1L5LmF7h0Q",
    title: "Governor of New Jersey ERUPTS After ExxonMobil LEAVES For Texas After 144 Years!",
    date: "May 7, 2026",
    views: "584K views",
    duration: "11:07",
  },
  {
    id: "s_KGFlj-gn8",
    title: "JPMorgan Just Announced MASSIVE NYC Office Reduction - Jamie Dimon's Statement Is BRUTAL",
    date: "May 6, 2026",
    views: "112K views",
    duration: "14:24",
  },
  {
    id: "XCYGsvF17IM",
    title: "Mamdani IN SHOCK After Ken Griffin SCRAPS NYC Tower To DOUBLE DOWN On $2.5 Billion Miami HQ",
    date: "May 6, 2026",
    views: "207K views",
    duration: "17:06",
  },
  {
    id: "DWrzweyNNIQ",
    title: "Mamdani HUMILIATED After Trump DESTROYS His Tax Plan - BRUTAL",
    date: "May 5, 2026",
    views: "44K views",
    duration: "17:55",
  },
  {
    id: "rXCFm6VU7ow",
    title: "Mamdani LOSES IT After Hochul OFFICIALLY REJECTS $5.4B NYC Bailout For Good!",
    date: "May 5, 2026",
    views: "225K views",
    duration: "18:47",
  },
  {
    id: "OSnIRrnyxRI",
    title: "Mayor Mamdani HUMILIATED As His Own Governor BLOCKS $1 Billion Wall Street Tax",
    date: "May 5, 2026",
    views: "132K views",
    duration: "21:49",
  },
]
