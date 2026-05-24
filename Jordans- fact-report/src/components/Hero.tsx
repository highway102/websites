import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Radio, ScrollText } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-navy text-paper overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(116,242,41,0.26),transparent_24%),radial-gradient(circle_at_74%_40%,rgba(116,242,41,0.18),transparent_26%),linear-gradient(180deg,rgba(2,7,2,0.44),rgba(2,7,2,0.94))]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #8cff42 1px, transparent 1px), linear-gradient(to bottom, #8cff42 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="relative container-edge flex flex-col min-h-[100svh] pt-[96px] pb-14">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="mb-5 font-sans text-sm md:text-[15px] uppercase tracking-[0.18em] text-signal font-semibold">
              Facts. Context. Real impact.
            </p>

            <h1 className="display font-semibold text-[42px] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[88px] leading-[0.95] tracking-[-0.04em] text-paper max-w-4xl">
              The fact report
              <br />
              <span className="text-signal">with a sharper</span>
              <br />
              green-light signal.
            </h1>

            <p className="mt-7 md:mt-8 text-base md:text-lg text-paper/85 leading-relaxed max-w-xl">
              {SITE.tagline}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-signal/20 bg-[#071007]/80 px-4 py-4 shadow-[0_0_0_1px_rgba(116,242,41,0.06)]">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <MapPin size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Base</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">{SITE.location}</p>
              </div>
              <div className="border border-signal/20 bg-[#071007]/80 px-4 py-4 shadow-[0_0_0_1px_rgba(116,242,41,0.06)]">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <Radio size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Format</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">
                  Fast-turn commentary with a hard-edged briefing feel.
                </p>
              </div>
              <div className="border border-signal/20 bg-[#071007]/80 px-4 py-4 shadow-[0_0_0_1px_rgba(116,242,41,0.06)]">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <ScrollText size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Focus</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">
                  Politics, accountability, and what the record actually says.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-signal text-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors shadow-[0_0_28px_rgba(116,242,41,0.24)]"
              >
                Watch the work
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-signal/35 bg-paper/5 text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <span aria-hidden className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-signal z-10" />
              <span aria-hidden className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-signal z-10" />

              <div className="border border-signal/20 bg-black/45 backdrop-blur-sm shadow-[0_0_60px_rgba(116,242,41,0.18),0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,#071007_0%,#020702_100%)]">
                  <span className="absolute left-4 top-4 z-10 inline-flex items-center justify-center bg-signal px-2.5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink shadow-[0_0_24px_rgba(116,242,41,0.24)]">
                    {SITE.brandMark}
                  </span>
                  <img
                    src={SITE.portraitFrameImage}
                    alt={`${SITE.name} â€” ${SITE.role}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="border-t border-signal/20 bg-[#050905] px-5 py-5 md:px-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-2">
                    Commentary Desk Â· London
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-paper leading-none">
                        {SITE.name}
                      </p>
                      <p className="mt-2 text-paper/65 text-sm leading-relaxed">
                        Hosted by Jordan with direct commentary on the day&apos;s biggest political stories.
                      </p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal/80 shrink-0">
                      {SITE.brandMark}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
