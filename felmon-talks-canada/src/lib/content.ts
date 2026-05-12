// Single source of truth for swappable content.

export function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export const SITE = {
  name: 'Felmon Nicholas',
  firstName: 'Felmon',
  role: 'Political Analyst & Commentator',
  show: 'Felmon Talks Canada',
  networkInitials: 'FTC',
  networkName: 'Felmon Talks Canada',
  channelHandle: '@FelmonTalksCanada',
  channelUrl: 'https://www.youtube.com/@FelmonTalksCanada',
  email: 'felmontalks@gmail.com',
  location: 'Toronto, Ontario',
  joinedDate: 'Joined Mar 29, 2026',
  totalVideos: 'Recent uploads refreshed May 11, 2026',
  avatarImage: '/felmon-avatar.png',
  heroImage: '/felmon-headshot.png',

  tagline:
    'Political analysis and commentary focused on the forces shaping Canada, from affordability and housing to trade, institutions, and national leadership.',

  heroEyebrow: 'Political Analyst & Commentator - Toronto, Ontario',
  heroStatement: 'Canada. Politics. Commentary.',

  missionEyebrow: 'Canadian News',
  missionHeadline: 'Canada. Politics. Commentary.',
  missionBody:
    'Felmon Nicholas is a Toronto-based political analyst and commentator covering the biggest stories shaping Canada, with reporting and perspective built for viewers who want more than a headline.',
  missionBlurb:
    'Felmon Talks Canada breaks down Canadian politics, economic stress, housing, trade pressure, energy, and the decisions inside government that shape everyday life across the country.',

  aboutShort:
    'Felmon Nicholas is the host of Felmon Talks Canada, a Toronto-based YouTube platform focused on Canadian politics, policy, and public-interest commentary.',

  aboutLong: [
    "I'm Felmon Nicholas, a political analyst and commentator based in Toronto, Ontario, and the host of Felmon Talks Canada. I cover the Canadian stories that shape public life: economic pressure, political power, institutional decisions, and the national debates that too often get flattened into talking points.",
    'The show publishes long-form commentary and rapid-response analysis on YouTube, following the facts behind the headlines and translating complex political and economic developments into clear, direct reporting for a broad Canadian audience.',
    'Felmon Talks Canada is built around Canadian news first. From affordability and housing to trade, energy, federal leadership, and provincial flashpoints, the goal is to connect policy decisions to their real consequences for people across the country.',
  ],

  beats: [
    'Canadian Politics',
    'Housing & Affordability',
    'Trade & The Economy',
    'Energy & Public Policy',
  ],

  credentials: [
    'Host, Felmon Talks Canada - YouTube',
    'Toronto-based Canadian political commentary',
    'Recent public uploads refreshed from the YouTube channel feed on May 11, 2026',
  ],

  social: {
    youtube: 'https://www.youtube.com/@FelmonTalksCanada',
    x: '',
    instagram: '',
    linkedin: '',
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  summary?: string[]
}

type RawVideo = {
  id: string
  title: string
  date: string
}

function buildVideoSummary(video: RawVideo) {
  return [
    `Public YouTube listing: "${video.title}" appears on the Felmon Talks Canada channel page.`,
    `Published ${video.date}.`,
  ]
}

const rawVideos: RawVideo[] = [
  {
    id: 'lhihdioaw6M',
    title: 'Canada EXPLODES As Bank Of Canada DROPS STAGFLATION BOMBSHELL - THIS IS BAD!',
    date: 'May 8, 2026',
  },
  {
    id: 'mwhDL62tqhY',
    title: "Carney UNDER FIRE After Trump's Trade Czar PUBLICLY MOCKS Canada",
    date: 'May 7, 2026',
  },
  {
    id: 'WImCANcGWGg',
    title:
      'Canada STUNNED As It Becomes ONLY G7 Country To CONTRACT - Worst Economic Performance In Developed!',
    date: 'May 6, 2026',
  },
  {
    id: 'jcvLSZlN5u4',
    title: 'Carney UNDER FIRE After U.S. SCHEDULES Trade Talks With Mexico - Canada LEFT With NO Date!',
    date: 'May 2, 2026',
  },
  {
    id: 'iEYScWznm3o',
    title:
      "Canada FREAKS OUT After Carney THREATENS Oil Companies - Warns He's WATCHING If They Pocket The Fuel",
    date: 'Apr 23, 2026',
  },
  {
    id: 'OoVUzhjazfs',
    title: 'Canada ERUPTS As Carney Prepares Economic Update - One Year In And GDP Is STILL CONTRACTING!',
    date: 'Apr 22, 2026',
  },
  {
    id: 'UUy8RSTzhmc',
    title:
      "Canada EXPLODES After Trump THREATENS 100% Tariffs On ALL Canadian Goods - Carney's China Deal FAILS",
    date: 'Apr 21, 2026',
  },
  {
    id: '0BTTqi4W0uE',
    title: 'Canada IN SHOCK As Gas Prices HIT $1.82 Per Litre - Middle East Crisis CRUSHING Canadian Families',
    date: 'Apr 20, 2026',
  },
  {
    id: 't6NBdiu65gw',
    title: "Canada FREAKS OUT After Carney SUSPENDS Fuel Tax - But Critics Say It's TOO LITTLE TOO LATE!",
    date: 'Apr 19, 2026',
  },
  {
    id: 'TTtGWfW754s',
    title: 'Canada ERUPTS As 140,000 Canadians Go BANKRUPT!',
    date: 'Apr 10, 2026',
  },
]

export const VIDEOS: Video[] = rawVideos.map((video) => ({
  id: video.id,
  title: video.title,
  date: video.date,
  summary: buildVideoSummary(video),
}))
