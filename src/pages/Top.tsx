import { Link } from 'react-router-dom'
import { ArrowUpRight, Megaphone, Rocket, Star as StarIcon, Layers, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import { Marquee, SectionTag } from '../components/ui'
import { Blob, Ring, Dots, Star } from '../components/Shapes'
import { MEMBERS } from '../data/members'

type Service = {
  no: string
  ja: string
  en: string
  desc: string
  color: string
  Icon: LucideIcon
}
const SERVICES: Service[] = [
  {
    no: '01',
    ja: 'SNSマーケティング',
    en: 'Social Marketing',
    desc: '戦略設計から運用・分析まで一気通貫。数字の先にある「選ばれる理由」を育てます。',
    color: '#FF8A5B',
    Icon: Megaphone,
  },
  {
    no: '02',
    ja: 'プロモーション',
    en: 'Promotion',
    desc: '企画からキャスティング、実行まで。話題を生み、人を動かす仕掛けを設計します。',
    color: '#4FCB7B',
    Icon: Rocket,
  },
  {
    no: '03',
    ja: 'インフルエンサー育成',
    en: 'Influencer',
    desc: '発信者一人ひとりの強みを見極め、ファンと影響力を育てる。挑戦に伴走します。',
    color: '#FF7AB6',
    Icon: StarIcon,
  },
  {
    no: '04',
    ja: 'BPO',
    en: 'Business Process Outsourcing',
    desc: 'ノンコア業務を設計から運用までまるごと。標準化・効率化してお預かりします。',
    color: '#6EB5FF',
    Icon: Layers,
  },
  {
    no: '05',
    ja: '採用コンサルティング',
    en: 'Recruitment',
    desc: '母集団形成から選考設計、定着支援まで。欲しい人材に届く採用体験を設計します。',
    color: '#FFC44D',
    Icon: Target,
  },
]

export default function Top() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Mission intro */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-10 py-24 sm:py-36">
        <Blob className="top-10 -right-16 hidden sm:block" color="#6EB5FF" size={240} />
        <Dots className="bottom-16 left-6 text-brand-200 hidden sm:block" color="#B3D1FF" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="01" en="Mission" color="#2E7BEF" />
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20 items-center">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.9] text-ink text-5xl sm:text-7xl xl:text-8xl">
                See the
                <br />
                <span className="text-brand-500">unseen</span>{' '}
                <span className="inline-block text-pop-pink animate-wiggle">future.</span>
              </h2>
              <p className="mt-6 font-rounded font-bold text-xl sm:text-2xl text-ink/80">
                見えない未来を、創る。
              </p>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-base sm:text-lg leading-loose text-ink/70 mb-6 font-medium">
                  まだ形になっていない夢やアイデアを、一緒に具体的な行動へ変えていく。
                  SNSマーケティングを軸に、領域を越えて、誰かが前に進むきっかけを生み出します。
                </p>
              </Reveal>
              <Reveal delay={140}>
                <Link
                  to="/mvv"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-500 text-white px-7 py-4 text-base sm:text-lg font-bold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 14px 30px -10px #2E7BEF99' }}
                >
                  私たちのMVV
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-brand-50 px-4 sm:px-10 py-24 sm:py-36">
        <Ring className="top-24 right-[6%] hidden sm:block" color="#FFC44D" size={88} stroke={12} />
        <Star className="bottom-24 left-[4%] hidden sm:block" color="#4FCB7B" size={56} />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="02" en="Services" color="#FF8A5B" />
          <Reveal>
            <h2 className="font-anton uppercase leading-[0.92] text-ink text-4xl sm:text-6xl xl:text-7xl mb-3">
              Five crafts, <span className="text-brand-500">one purpose.</span>
            </h2>
            <p className="font-rounded font-bold text-ink/70 text-lg mb-12 sm:mb-16">
              5つの専門性で、挑戦を後押しする。
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {SERVICES.map((s, i) => (
              <Reveal key={s.no} delay={(i % 3) * 90}>
                <article
                  className="group relative h-full rounded-4xl bg-white p-7 sm:p-9 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: '0 18px 50px -28px rgba(20,34,74,0.45)' }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 w-32 h-32 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{ background: `${s.color}22` }}
                  />
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl grid place-items-center mb-6 transition-transform duration-300 group-hover:-rotate-6"
                      style={{ background: s.color }}
                    >
                      <s.Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
                    </div>
                    <span className="font-anton text-2xl" style={{ color: s.color }}>
                      {s.no}
                    </span>
                    <h3 className="font-rounded font-extrabold text-2xl sm:text-[26px] text-ink mt-1 mb-1.5 leading-snug">
                      {s.ja}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-4">
                      {s.en}
                    </p>
                    <p className="text-sm leading-loose text-ink/65 font-medium">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Member */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-10 py-24 sm:py-36">
        <Blob className="-top-10 -left-12 hidden sm:block" color="#FF7AB6" size={200} />
        <Dots className="bottom-20 right-8 hidden sm:block" color="#B3D1FF" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="03" en="Member" color="#FF7AB6" />
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.92] text-ink text-4xl sm:text-6xl xl:text-7xl">
                Meet the <span className="text-brand-500">team.</span>
              </h2>
              <p className="font-rounded font-bold text-ink/70 text-lg mt-3">
                挑戦を後押しする、Globexaの仲間たち。
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/member"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-200 text-brand-600 px-6 py-3 text-sm font-bold hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all"
              >
                メンバー紹介を見る
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {MEMBERS.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 100}>
                <article
                  className="group h-full rounded-4xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: '0 18px 50px -28px rgba(20,34,74,0.45)' }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.photo}
                      alt={`${m.name}（${m.roleJa}）`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute top-4 left-4 rounded-full px-3.5 py-1.5 text-xs font-bold text-white"
                      style={{ background: m.color }}
                    >
                      {m.roleJa}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.16em] mb-1.5"
                      style={{ color: m.color }}
                    >
                      {m.roleEn}
                    </p>
                    <h3 className="font-rounded font-black text-2xl sm:text-3xl text-ink mb-3">
                      {m.name}
                    </h3>
                    <p className="text-sm leading-loose text-ink/60 font-medium">{m.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-8 pb-20 sm:pb-28">
        <div
          className="relative max-w-6xl mx-auto rounded-5xl overflow-hidden text-white text-center px-6 sm:px-10 py-20 sm:py-28"
          style={{ background: 'linear-gradient(150deg, #2E7BEF 0%, #1149B0 60%, #0A2A66 100%)' }}
        >
          <Blob className="-top-10 -left-10" color="#FF7AB6" size={200} />
          <Ring className="bottom-8 right-10 hidden sm:block" color="#FFC44D" size={100} stroke={14} />
          <Star className="top-12 right-[18%] hidden sm:block" color="#6EB5FF" size={48} />
          <div className="relative flex flex-col items-center">
            <Reveal>
              <p className="font-rounded font-bold text-brand-200 text-lg sm:text-xl mb-5">
                一緒に、未来を創りましょう。
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-anton uppercase leading-[0.95] text-5xl sm:text-7xl xl:text-8xl mb-10">
                Let's talk.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <a
                href="mailto:globexa@saiyo-p.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-brand-600 font-anton uppercase text-xl sm:text-3xl tracking-tight px-8 py-4 hover:-translate-y-1 transition-transform shadow-xl"
              >
                globexa@saiyo-p.com
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
