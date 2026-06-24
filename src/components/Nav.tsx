import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Top', ja: 'トップ', end: true },
  { to: '/mvv', label: 'MVV', ja: '理念', end: false },
  { to: '/member', label: 'Member', ja: 'メンバー', end: false },
  { to: '/company', label: 'Company', ja: '会社概要', end: false },
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

  // Transparent only while over the Top page hero; solid elsewhere.
  const solid = !isTop || scrolled

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[70]">
        <div
          className={`transition-colors duration-500 ${
            solid ? 'bg-brand-900/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-8 h-16">
            <Link
              to="/"
              className="font-anton text-2xl text-white uppercase tracking-wide leading-none"
            >
              Globexa
            </Link>
            <nav className="hidden md:flex items-center gap-9">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="mailto:globexa@saiyo-p.com"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-900 bg-white rounded-full px-5 py-2.5 hover:bg-brand-100 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button
              type="button"
              className="md:hidden text-white"
              aria-label="メニュー"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-brand-900 text-white transition-[clip-path] duration-500 md:hidden ${
          open ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)] pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16">
          <span className="font-anton text-2xl uppercase">Globexa</span>
          <button type="button" aria-label="閉じる" onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>
        <nav className="px-4 pt-8 flex flex-col">
          {LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 py-5 border-b border-white/10"
            >
              <span className="font-anton text-sm text-white/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-anton text-4xl uppercase flex-1">{l.label}</span>
              <span className="text-xs text-white/50 tracking-widest">{l.ja}</span>
            </NavLink>
          ))}
          <a
            href="mailto:globexa@saiyo-p.com"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-4 py-5 border-b border-white/10"
          >
            <span className="font-anton text-sm text-white/40">05</span>
            <span className="font-anton text-4xl uppercase flex-1">Contact</span>
            <span className="text-xs text-white/50 tracking-widest">お問い合わせ</span>
          </a>
        </nav>
      </div>
    </>
  )
}
