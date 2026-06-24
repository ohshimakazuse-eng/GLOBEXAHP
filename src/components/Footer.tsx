import { Link } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Top' },
  { to: '/mvv', label: 'MVV' },
  { to: '/member', label: 'Member' },
  { to: '/company', label: 'Company' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-900 text-white px-4 sm:px-10 pt-16 sm:pt-24 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pb-12 sm:pb-16 border-b border-white/15">
          <Link to="/" className="font-anton uppercase text-6xl sm:text-8xl leading-none">
            Globexa
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:globexa@saiyo-p.com"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-8 text-xs tracking-wide text-white/45">
          <span>© {year} Globexa Inc. All rights reserved.</span>
          <span className="font-anton uppercase tracking-normal text-sm text-white/60">
            見えない未来を創る
          </span>
        </div>
      </div>
    </footer>
  )
}
