import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#philosophy', label: 'Philosophy', ja: '理念' },
  { href: '#services', label: 'Services', ja: '事業' },
  { href: '#approach', label: 'Approach', ja: '流儀' },
  { href: '#company', label: 'Company', ja: '会社概要' },
]

/** Slim top nav that fades in once the hero is scrolled past. */
export default function Nav() {
  const [shown, setShown] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[70] transition-all duration-500 ${
          shown ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-brand-900/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center justify-between px-4 sm:px-8 h-16">
            <a
              href="#hero"
              className="font-anton text-2xl text-white uppercase tracking-wide leading-none"
            >
              Globexa
            </a>
            <nav className="hidden md:flex items-center gap-9">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
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
          {[...LINKS, { href: '#contact', label: 'Contact', ja: 'お問い合わせ' }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 py-5 border-b border-white/10"
            >
              <span className="font-anton text-sm text-white/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-anton text-4xl uppercase flex-1">{l.label}</span>
              <span className="text-xs text-white/50 tracking-widest">{l.ja}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
