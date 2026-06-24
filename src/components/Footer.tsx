import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Blob, Star } from './Shapes'

const LINKS = [
  { to: '/', label: 'Top' },
  { to: '/mvv', label: 'MVV' },
  { to: '/member', label: 'Member' },
  { to: '/company', label: 'Company' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-brand-600 text-white px-4 sm:px-10 pt-20 sm:pt-28 pb-10">
      <Blob className="-top-16 -left-10" color="#2E7BEF" size={240} />
      <Star className="top-16 right-[8%] hidden sm:block" color="#FFC44D" size={60} />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-8 pb-12 sm:pb-16 border-b border-white/20">
          <p className="font-rounded font-bold text-brand-100 text-lg">見えない未来を創る</p>
          <Link to="/" className="font-anton uppercase text-7xl sm:text-9xl leading-[0.85]">
            Globexa
          </Link>
          <a
            href="mailto:globexa@saiyo-p.com"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-600 font-bold px-6 py-3.5 hover:-translate-y-0.5 transition-transform shadow-lg"
          >
            globexa@saiyo-p.com
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8">
          <nav className="flex flex-wrap gap-2.5">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white/80 hover:bg-white hover:text-brand-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="text-xs tracking-wide text-white/55">
            © {year} Globexa Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
