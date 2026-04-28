import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import VideoCard from '@/components/VideoCard'
import { SITE, VIDEOS } from '@/lib/content'

export default function Home() {
  const featured = VIDEOS.slice(0, 3)
  const marquee = SITE.beats.concat(SITE.beats).concat(SITE.beats)

  return (
    <>
      <Hero />

      {/* Marquee strip */}
      <section className="bg-ink text-paper border-y border-paper/10 py-5 overflow-hidden">
        <div className="flex gap-16 marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-paper/70">
          {marquee.map((b, i) => (
            <span key={i} className="shrink-0 flex items-center gap-16">
              <span className="w-1 h-1 bg-gold rounded-full" />
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Featured work — now directly below hero */}
      <section className="bg-paper border-b border-ink/10">
        <div className="container-edge py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
                Latest Episodes
              </p>
              <h2 className="display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.0] tracking-[-0.04em] text-ink max-w-5xl">
                The stories shaping the week — broken down with the context headlines leave out.
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-signal transition-colors self-start md:self-end shrink-0"
            >
              All episodes <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featured.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-bone border-b border-ink/10">
        <div className="container-edge py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
              The Mission
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
              Based in<br />
              <span className="text-ink">{SITE.location}</span>
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display font-semibold text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.035em] text-ink max-w-5xl">
              {SITE.missionBody}
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {SITE.beats.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 border border-ink/15 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-mono text-ink/80"
                >
                  <span className="w-1 h-1 bg-ink" />
                  {b}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-ink link-underline"
            >
              Read the full bio <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Insight blurb */}
      <section className="container-edge py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
              Thesis
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="display font-medium text-3xl md:text-5xl lg:text-[60px] leading-[1.15] tracking-[-0.03em] text-ink max-w-5xl">
              <span className="text-signal">—&nbsp;</span>{SITE.missionBlurb}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
