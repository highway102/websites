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
    "An independent New York journalist reporting on the corporate moves, tax decisions, and political shifts reshaping the city — and the global economy that runs through it.",

  heroStatement: "Independent. New York. Journalism.",

  missionEyebrow: "The Mission",
  missionHeadline: "Independent. New York. Journalism.",
  missionBody:
    "A passionate New Yorker. An independent journalist. One city's story, told honestly.",
  missionBlurb:
    "Every city tells its story in its filings — who's listed where, who pays which tax, and who quietly walks away. New York is still mine to report.",

  aboutShort:
    "Independent journalist and lifelong New Yorker. Host of Omar's Talk Show — long-form reporting on the corporate decisions, tax shifts, and political fights reshaping the city he loves.",

  aboutLong: [
    "I'm Omar Ibrahim — a passionate New Yorker and independent journalist, and the host of Omar's Talk Show. I report on the corporate migration, tax decisions, and political fights reshaping New York City. The stories the press releases miss. The numbers the headlines underplay. The filings the editors skim past.",
    "The show publishes long-form reporting on YouTube — Goldman Sachs to Dallas, JPMorgan's $800 billion exit, Macy's closing 66 stores, the New York tax base resting on a few thousand people. No network. No donor class. No script. Just the receipts, the filings, and what they actually mean for the city.",
    "What drives the work is simple: I'm not leaving. New York's story isn't ending — it's being rewritten in board rooms and tax committees that don't answer to the people who built this place. The job is to keep showing up, keep reading the filings, and keep telling the story honestly. If you have a tip, a source, or a story you think should be told, the contact page is open.",
  ],

  beats: [
    "New York City",
    "Wall Street",
    "Corporate Migration",
    "City Politics",
  ],

  credentials: [
    "Host & Founder, Omar's Talk Show · YouTube",
    "Beat: New York City corporate, political &amp; economic affairs",
    "Independent — no network, no donor class, no script",
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
  summary?: string[]
}

const CTA = "Subscribe to Omar's Talk Show on YouTube for more breakdowns like this — and hit the bell so you never miss a new episode."

// Sorted newest first. Real titles + real upload dates.
export const VIDEOS: Video[] = [
  {
    id: "sXetdFtIcQY",
    title: "Starbucks Workers Strike — Mayor Mamdani Panics as Starbucks Shuts Down in NYC",
    date: "Apr 10, 2026",
    summary: [
      "42 Starbucks locations across New York City have been permanently shut down — not relocated, closed. Manhattan corners. Brooklyn neighborhood shops. Queens commuter stops. Dark and locked in a matter of weeks. While CEO Brian Niccol pitched investors a \"Back to Starbucks\" turnaround, NYC was wrapping a three-year investigation that exposed exactly what executives think of the people pouring the coffee.",
      "Inside the episode: the $38.9 million December 2025 settlement — the largest worker-protection settlement in NYC history. More than 500,000 violations of New York's Fair Workweek Law across over 300 locations. Half a million violations against workers making lattes for a $37 billion-revenue company. At the same moment: 12,000 baristas in 85 cities walked off the job in an open-ended strike, four years into a contract fight. The episode walks through which specific NYC stores closed, what the city found, and the company line that's about to collide with Mayor Mamdani.",
      "42 stores, half a million violations, one mayor watching it all happen. The story isn't just about coffee. " + CTA,
    ],
  },
  {
    id: "Nv-FzYtSOkg",
    title: "New York Just Raised Taxes Again — Corporate America's Response Is Devastating",
    date: "Apr 9, 2026",
    summary: [
      "New York State just signed the largest budget in its history — $254 billion — and to fund it, Albany extended a top income tax rate of 10.9% on the state's highest earners. Stack New York City's own income tax on top, and Manhattan's wealthiest residents now face a combined effective rate approaching 14.8% — among the highest in the entire developed world. Corporate America is responding in ways the state may not be prepared for.",
      "Inside the episode: the budget mechanics, the corporate franchise tax surcharge that quietly expanded alongside the income tax, and the SALT-cap math that makes New York's effective burden higher than the headline rate suggests. The funding model where 1% of earners fund 45% of all personal income tax. The on-record warnings from State Comptroller Thomas DiNapoli about over-reliance on volatile Wall Street income. The IRS migration data and the corporate relocation announcements already in the public record.",
      "The fiscal math of New York is built on assumptions about who stays. The episode walks through what happens when those assumptions break. " + CTA,
    ],
  },
  {
    id: "TyPU8MYc7oA",
    title: "Goldman Sachs CEO Finally Speaks on Why He's Moving Thousands of New York Jobs to Texas",
    date: "Apr 8, 2026",
    summary: [
      "Goldman Sachs is sending its managers a message: move to Dallas, move to Salt Lake City, or leave. No negotiation. No appeal. CEO David Solomon has gone on record — repeatedly — about why. This isn't a startup burning runway. It's one of the most powerful financial institutions in human history, with 156 years of Wall Street DNA, making a $500 million bet that New York's best days are behind it.",
      "Inside the episode: Project Voyage, the internal initiative quietly launched in Q4 2024 that spans global banking, markets, engineering, marketing, and operations. The exact words David Solomon used in front of the Dallas Citizens Council in December 2022, when he told a roomful of Texas civic leaders that their state produces better engineers than New York. The hire of former Dallas Fed president Robert Kaplan as Goldman's vice chairman — institutional positioning, not cost-cutting. The 800,000-square-foot Victory Park campus opening in 2028, set to house 5,000 employees — about 10% of Goldman's global workforce.",
      "The CEO didn't just admit it. He explained it. The episode shows exactly why his answer should stop you cold. " + CTA,
    ],
  },
  {
    id: "KVth7OD1KZc",
    title: "Mayor Mamdani Loses It After Goldman Sachs Officially Moves",
    date: "Apr 6, 2026",
    summary: [
      "Goldman Sachs just officially moved its operation to Dallas — and the mayor's response, on the record, was that he wasn't too worried. This is the story of a city that built its identity, economy, and global prestige on Wall Street, and the mayor responding to its biggest firm walking out the door with a shrug. The dismissal is the most important part of the story, and the pattern has played out before in cities that didn't see it coming.",
      "Inside the episode: Project Voyage and Goldman's late-2024 ultimatum — Dallas, Salt Lake City, or out. The new $500 million Victory Park campus, 800,000 square feet across two buildings, set to house 5,000 employees by 2028. The trajectory: Goldman's Dallas headcount has tripled in six years, from 1,500 to 4,500. NYC office: 7,800. The gap is closing fast. Plus the cities Wall Street has emptied out before — and what New York's leadership is missing about how this ends.",
      "Goldman isn't leaving New York overnight. They're building the infrastructure to need it a lot less. The mayor's not too worried. He should be. " + CTA,
    ],
  },
  {
    id: "RDNG7nDGr9I",
    title: "Starbucks Just Closed 50 New York Locations — What They Said Will Make You Sick",
    date: "Apr 6, 2026",
    summary: [
      "Starbucks just closed dozens of New York City locations in the largest contraction in the company's history. NYC is ground zero. The closures are part of a billion-dollar restructuring CEO Brian Niccol announced as \"Back to Starbucks\" — but while he was pitching the turnaround to investors, the city was finishing a three-year investigation. What executives said next about the workers will make you sick.",
      "Inside the episode: Niccol's September 2025 memo to employees — the strategy, the rationale, the language about \"physical environment our customers and partners expect.\" Six consecutive quarters of declining same-store sales. Net income in fiscal 2025 down 51% to $1.48 billion. The 400 closures across North America. The 900 non-retail layoffs. And the December 2025 NYC settlement — $38.9 million, 500,000+ violations, 300+ stores investigated. The math behind the closures and the workforce that doesn't appear in the press release.",
      "Starbucks says the closures are about underperforming stores. The investigation says something else. The video walks through both — and the contradiction the company can't explain. " + CTA,
    ],
  },
  {
    id: "y1JVhc2TkT0",
    title: "Tech Billionaires Finally Reveal Why They Abandoned Canada — The Timeline Is Terrifying",
    date: "Apr 5, 2026",
    summary: [
      "A country built something extraordinary — an entire generation of the world's most brilliant engineers, researchers, and entrepreneurs. Foundational AI research. World-class graduates from Toronto, Waterloo, UBC. And year after year, decade after decade, watched every single one of them leave. This isn't inevitable. It wasn't just proximity to Silicon Valley. The timeline is terrifying because the decisions that drove it were specific.",
      "Inside the episode: April 16th, 2024 — Finance Minister Chrystia Freeland's federal budget that raised the capital gains inclusion rate from 50% to nearly 67% for corporations and trusts, and on individual gains above $250K. The Council of Canadian Innovators' open letter signed by over 1,000 tech leaders. Shopify CEO Tobi Lütke and President Harley Finkelstein on record opposing it. Wattpad co-founder Allen Lau's \"five-alarm fire\" warning on BNN Bloomberg. The historical exodus pattern that made the 2024 budget the gasoline, not the spark.",
      "Canada doesn't lack for talent. It doesn't lack for research. The episode walks through what it does lack — and why the country's most valuable people are voting with their feet. " + CTA,
    ],
  },
  {
    id: "FqMK6XcsDsQ",
    title: "London's Financial District Just Became a Ghost Town — The Data Is Devastating",
    date: "Apr 3, 2026",
    summary: [
      "Every vehicle that enters the City of London is photographed and logged before the driver finds parking. Every face passing a live facial recognition camera operated by City of London Police is checked against a watchlist in real time. Every phone moving through any of London's 270 underground stations has its unique identifier captured. The square mile that holds London's financial core is wrapped in a surveillance cordon — and most commuters have no idea it's running.",
      "Inside the episode: April 10th, 1992 — the IRA truck bomb at the Baltic Exchange that killed three people and caused £800 million in damage. The 1993 Bishopsgate bomb. The City's response — the \"traffic and security scheme\" that became the Ring of Steel. The progressive replacement of physical checkpoints with ANPR cameras at every entry point, the live facial recognition deployment, the phone-tracking infrastructure, and the post-pandemic emptying of the streets that has made the surveillance precision-targeted in ways it never was before.",
      "It started as a wall to stop bombs. It became something almost no one who works there was ever told about. The episode walks through what it captures, who controls the data, and what the courts have actually ruled. " + CTA,
    ],
  },
  {
    id: "f3MaS2q3sFE",
    title: "Macy's CEO Finally Speaks Out on Why They're Closing New York Stores",
    date: "Apr 2, 2026",
    summary: [
      "66 stores closed. Multiple locations across New York City — Brooklyn, the Bronx, Queens, Staten Island. Gone. After 166 years on Herald Square, Macy's CEO Tony Spring is finally admitting in front of cameras what the company had known for years. Something went very, very wrong. And Spring — brought in specifically to save the company — is being more honest about it than almost any executive in recent memory.",
      "Inside the episode: the January 2025 confirmation, the 22 states affected, the specific NYC stores embedded in actual neighborhoods. Tony Spring's National Retail Federation speech where he said Macy's \"was looking at ourselves in the mirror and seeing something we don't like.\" The 60,000 customers the company surveyed before drafting strategy — what they wanted, and what Macy's stopped delivering. The three-year, 150-store closure plan and the $600–700 million reinvestment in the 350 surviving locations.",
      "This isn't a corporate restructuring story. It's a reckoning. The episode walks through what the press release didn't tell you — and what the closures mean for the neighborhoods being left behind. " + CTA,
    ],
  },
  {
    id: "88YzoXQCnRM",
    title: "Canada Just Lost Its Biggest Tech Company — The Fallout Is Already Beginning",
    date: "Mar 31, 2026",
    summary: [
      "Canada's largest technology company — Ottawa-born, Canadian-built — is quietly repositioning itself as an American business. Not with a press conference. With a regulatory filing. February 11th, 2025: Shopify filed paperwork with the SEC that set off immediate alarm bells across Canada's financial sector. For the first time, the company filed a 10-K — the form for domestic US issuers — instead of the 40-F it had filed for a decade. \"Defcon 1 for Canada's capital markets,\" one analyst called it.",
      "Inside the episode: the regulatory mechanics — the new US employer identification number, the New York City office designation alongside Ottawa, the asset-flip on internal reports. The March 18th announcement that Shopify was transferring its US listing from NYSE to Nasdaq. The May 19th admission to the Nasdaq 100 — only the fourth Canadian-domiciled company ever admitted, and two of the first three were eventually removed. Plus how passive index funds, now ~21% of average US stock ownership, make this kind of redomiciliation a one-way valve.",
      "Shopify wasn't alone. Three of Canada's largest companies made similar moves in the same month. The episode walks through what they did, what it means for every Canadian holding it in their pension, and why the fallout is just beginning. " + CTA,
    ],
  },
  {
    id: "Thd5gV-GKnY",
    title: "Major Entertainment CEO Just Exposed Why He Left LA — It Changes Everything",
    date: "Mar 30, 2026",
    summary: [
      "Steven Spielberg spent more than 50 years building his life's work in Los Angeles. The films that defined American culture. Amblin, the production company that became a global institution. And on January 1st, 2026 — literal day of the new year — he became a New York resident. Same day his production company opened a new New York City office. Not a man moving closer to grandchildren. A calculated, simultaneous personal-business relocation executed with precision. With a deadline.",
      "Inside the episode: the Billionaire Tax Act of 2026 — California's proposed one-time 5% tax on the total assets of any California resident worth $1 billion or more. Forbes pegs Spielberg's net worth at $7.1 billion. The math: $355 million owed if he'd stayed and the tax passed. The retroactivity clause that would apply to anyone resident on January 1st, 2026 — making December 31st, 2025 the only window to legally avoid it. The careful spokesperson statement that addressed the family angle and refused to address the tax angle. And the broader entertainment exodus the timing fits inside.",
      "A spokesperson's silence can be louder than her statement. The episode walks through what's actually happening in LA right now — and why it's far worse than anyone is admitting. " + CTA,
    ],
  },
  {
    id: "i9kVKGz8uG8",
    title: "New York's Tax Revenue Just Collapsed",
    date: "Mar 29, 2026",
    summary: [
      "Imagine inheriting leadership of the greatest city on Earth and being handed a real budget — not the version advertised, the real one — staring back at a $12 billion hole. Not from a recession. Not from a pandemic. From people leaving. That is exactly what's happening in New York right now. The warnings were there for years. The data was public. The math was obvious. And the politicians kept spinning anyway.",
      "Inside the episode: the New York City budget — $119 billion in annual spending funded by an arithmetic almost no one says out loud. Fewer than 1% of NYC taxpayers pay more than 40% of the city's income tax revenue. The top 10% pay roughly two-thirds. The 41,000 people the entire municipal machinery rests on. According to the Citizens Budget Commission, more than 125,000 New Yorkers have moved to Florida in the past few years, taking nearly $14 billion in income with them. Plus the 1,700 millionaires who changed their address out of state in 2024 alone.",
      "New York built a financial house of cards. The episode walks through who's been quietly walking away — and what it means for your wallet, whether you live in NYC or not, because the pattern is spreading. " + CTA,
    ],
  },
  {
    id: "EIxqwb1-C-U",
    title: "JPMorgan Just Moved $800 Billion Out of New York",
    date: "Mar 28, 2026",
    summary: [
      "JPMorgan Chase spent $3 billion building the most spectacular headquarters in New York City history — 60 stories of bronze and glass, a ribbon-cutting ceremony, Jamie Dimon talking about 225 years of loyalty. Everybody's staring at the tower. Nobody noticed that the same bank now employs more people in Texas than New York: 31,500 to 24,000. That's not a footnote. It's a warning sign in a $3 billion disguise.",
      "Inside the episode: October 21st, 2025 — the 270 Park Avenue ribbon-cutting and the 7,000-employee Texas-vs-NY headcount gap nobody mentioned. The 2023 JPMorgan annual shareholder meeting Jamie Dimon held in Plano, Texas — not New York — where he told shareholders directly that Texas would be JPMorgan's number-one state soon. Bloomberg's reporting on credit risk jobs already moved to Texas. Compliance functions told they're \"no longer a New York priority.\" Senior consumer banking roles being relocated to Plano, Columbus, and Wilmington. The Partnership for New York City data behind the headline numbers.",
      "A $3 billion building is real. The investment is real. The loyalty speech is real. So is the strategy underneath, and the city betting its future on an industry that's quietly leaving. " + CTA,
    ],
  },
]
