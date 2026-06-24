import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Top', ja: 'トップ', end: true, c: '#FF8A5B' },
  { to: '/mvv', label: 'MVV', ja: '理念', end: false, c: '#4FCB7B' },
  { to: '/member', label: 'Member', ja: 'メンバー', end: false, c: '#FF7AB6' },
  { to: '/company', label: 'Company', ja: '会社概要', end: false, c: '#6EB5FF' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const isTop = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  // Transparent only while over the Top page hero; solid white elsewhere.
  const solid = !isTop || scrolled

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[70] px-3 sm:px-5 pt-3 sm:pt-4">
        <div
          className={`max-w-[1400px] mx-auto flex items-center justify-between rounded-full pl-5 pr-3 sm:pl-7 sm:pr-4 h-14 sm:h-16 transition-all duration-500 ${
            solid
              ? 'bg-white/90 backdrop-blur-md shadow-[0_12px_40px_-16px_rgba(20,34,74,0.35)]'
              : 'bg-white/10 backdrop-blur-sm'
          }`}
        >
          <Link
            to="/"
            className={`font-anton text-2xl uppercase tracking-wide leading-none transition-colors ${
              solid ? 'text-brand-600' : 'text-white'
            }`}
          >
            Globexa
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wide transition-colors ${
                    solid
                      ? isActive
                        ? 'text-brand-600'
                        : 'text-ink/70 hover:text-brand-600'
                      : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="mailto:globexa@saiyo-p.com"
              className="hidden sm:inline-flex items-center rounded-full bg-brand-500 text-white text-sm font-bold px-5 h-10 shadow-[0_10px_24px_-10px_#2E7BEF] hover:bg-brand-600 hover:-translate-y-0.5 transition-all"
            >
              Contact
            </a>
            <button
              type="button"
              className={`md:hidden grid place-items-center w-10 h-10 rounded-full ${
                solid ? 'text-brand-600' : 'text-white'
              }`}
              aria-label="メニュー"
              onClick={() => setOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-brand-50 text-ink transition-[clip-path] duration-500 md:hidden ${
          open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)] pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 pt-3">
          <span className="font-anton text-2xl uppercase text-brand-600">Globexa</span>
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setOpen(false)}
            className="grid place-items-center w-10 h-10 rounded-full bg-white shadow"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="px-5 pt-8 flex flex-col">
          {LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 py-5 border-b border-brand-100"
            >
              <span className="font-anton text-sm" style={{ color: l.c }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-anton text-4xl uppercase flex-1 text-ink">{l.label}</span>
              <span className="text-xs text-ink/40 tracking-widest">{l.ja}</span>
            </NavLink>
          ))}
          <a
            href="mailto:globexa@saiyo-p.com"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-500 text-white text-lg font-bold py-4 shadow-lg"
          >
            Contact ↗
          </a>
        </nav>
      </div>
    </>
  )
}
