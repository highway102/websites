import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE } from '@/lib/content'

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

function SpotifyMark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden>
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm5.503 17.315a.748.748 0 0 1-1.03.247c-2.82-1.722-6.368-2.112-10.546-1.159a.75.75 0 0 1-.333-1.463c4.573-1.043 8.49-.6 11.661 1.336a.75.75 0 0 1 .248 1.039Zm1.471-3.272a.935.935 0 0 1-1.286.308c-3.227-1.984-8.147-2.559-11.964-1.399a.936.936 0 1 1-.544-1.791c4.36-1.324 9.781-.685 13.488 1.594a.936.936 0 0 1 .306 1.288Zm.126-3.409c-3.87-2.298-10.256-2.51-13.95-1.386a1.123 1.123 0 1 1-.654-2.149c4.24-1.289 11.297-1.04 15.749 1.602a1.123 1.123 0 1 1-1.145 1.933Z" />
      </svg>
    </span>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-[background,border,color] duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur text-ink border-b border-ink/10'
          : 'bg-transparent text-paper border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-edge flex h-[68px] md:h-[80px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src="/avatar.jpg"
            alt={SITE.name}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full object-contain bg-paper ring-1 ring-ink/10"
          />
          <span className="font-display text-[17px] md:text-[20px] font-semibold tracking-tight">
            {SITE.show}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'text-[12px] uppercase tracking-[0.18em] font-medium font-sans transition-opacity',
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={SITE.social.spotify}
            target="_blank"
            rel="noreferrer"
            className={[
              'inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-semibold font-sans px-4 py-2 transition-colors border',
              scrolled
                ? 'border-ink/15 text-ink hover:bg-ink hover:text-paper'
                : 'border-paper/30 text-paper hover:bg-paper hover:text-ink',
            ].join(' ')}
          >
            <SpotifyMark className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#1DB954] text-white shrink-0" />
            Spotify
          </a>
          <a
            href={SITE.channelUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              'text-[12px] uppercase tracking-[0.18em] font-semibold font-sans px-4 py-2 transition-colors',
              scrolled
                ? 'bg-ink text-paper hover:bg-signal'
                : 'bg-paper text-ink hover:bg-signal hover:text-paper',
            ].join(' ')}
          >
            Watch →
          </a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-paper text-ink border-t border-ink/10">
          <ul className="container-edge py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block py-4 text-xl font-display font-semibold tracking-tight border-b border-ink/10',
                      isActive ? 'text-signal' : 'text-ink',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={SITE.social.spotify}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 py-4 text-xl font-display font-semibold tracking-tight text-ink border-b border-ink/10"
              >
                <SpotifyMark className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1DB954] text-white shrink-0" />
                Listen on Spotify →
              </a>
            </li>
            <li>
              <a
                href={SITE.channelUrl}
                target="_blank"
                rel="noreferrer"
                className="block py-4 text-xl font-display font-semibold tracking-tight text-signal"
              >
                Watch on YouTube →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
