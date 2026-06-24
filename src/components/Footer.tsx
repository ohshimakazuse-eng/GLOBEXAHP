import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Top' },
  { to: '/mvv', label: 'MVV' },
  { to: '/member', label: 'Member' },
  { to: '/company', label: 'Company' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-900 text-white px-4 sm:px-10 pt-20 sm:pt-28 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-8 pb-12 sm:pb-16 border-b border-white/15">
          <p className="font-rounded font-bold text-brand-200">見えない未来を創る</p>
          <Link to="/" className="font-anton uppercase text-6xl sm:text-8xl leading-[0.9]">
            Globexa
          </Link>
          <a
            href="mailto:globexa@saiyo-p.com"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-700 font-bold px-6 py-3.5 hover:-translate-y-0.5 transition-transform"
          >
            globexa@saiyo-p.com
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8">
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs font-bold uppercase tracking-[0.14em] text-white/55 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="text-xs tracking-wide text-white/45">
            © {year} Globexa Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
