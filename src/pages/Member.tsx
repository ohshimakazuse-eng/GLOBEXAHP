import Reveal from '../components/Reveal'
import { PageHero, SectionTag } from '../components/ui'
import { Blob, Ring, Star } from '../components/Shapes'

/**
 * NOTE: Only the representative (山﨑 星河) is verified from public sources.
 * The team entries below are placeholders — replace names / roles / photos
 * with real member data.
 */
const MEMBERS = [
  { initial: 'M', role: 'SNS Marketer', team: 'Marketing', note: 'アカウント設計から運用・分析まで。', color: '#FF8A5B' },
  { initial: 'P', role: 'Promotion Planner', team: 'Promotion', note: '話題を生む企画を、形にする。', color: '#4FCB7B' },
  { initial: 'I', role: 'Influencer Producer', team: 'Influencer', note: '発信者の挑戦に、伴走する。', color: '#FF7AB6' },
  { initial: 'O', role: 'BPO Operator', team: 'Operations', note: '業務を磨き、価値創造を支える。', color: '#6EB5FF' },
  { initial: 'R', role: 'Recruiting Consultant', team: 'Recruitment', note: '採用を、経営の戦略へ。', color: '#FFC44D' },
  { initial: 'C', role: 'Creative Designer', team: 'Creative', note: 'ブランドの世界観をデザインする。', color: '#9B8CFF' },
]

export default function Member() {
  return (
    <>
      <PageHero
        kicker="Member"
        title="The people behind."
        lead="挑戦を後押しするのは、いつも人。Globexaを動かすメンバーを紹介します。"
        accent="#FF7AB6"
      />

      {/* Representative */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-10 py-24 sm:py-32">
        <Star className="top-20 right-[8%] hidden sm:block" color="#FFC44D" size={56} />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="01" en="Representative" color="#2E7BEF" />
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <Blob className="-top-6 -left-6 -z-10" color="#FF7AB6" size={120} />
                <div
                  className="relative aspect-[4/5] rounded-5xl overflow-hidden grid place-items-center"
                  style={{ background: 'linear-gradient(150deg, #2E7BEF, #0A2A66)' }}
                >
                  <Ring className="top-8 right-8" color="#ffffff44" size={70} stroke={10} />
                  <span className="relative font-anton text-white/90 text-[8rem] leading-none">
                    星
                  </span>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="inline-block rounded-full bg-brand-50 text-brand-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] mb-4">
                  Founder &amp; CEO ／ 代表取締役
                </span>
                <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl leading-none mb-6">
                  山﨑 星河
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base sm:text-lg leading-loose text-ink/70 mb-5 font-medium">
                  「誰かが前に進むきっかけになりたい」。その想いひとつで、2025年にGlobexaを立ち上げました。
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base sm:text-lg leading-loose text-ink/70 font-medium">
                  SNSは、個人の挑戦を加速させる最大の武器です。私たちはその力を信じ、まだ見えない未来を、
                  仲間とクライアントとともに形にしていく。設立して間もない今だからこそ、
                  一人ひとりのアイデアが事業そのものを動かす。一緒に未来を創りましょう。
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="relative overflow-hidden bg-brand-50 px-4 sm:px-10 py-24 sm:py-32">
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="02" en="Team" color="#FF8A5B" />
          <Reveal>
            <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl xl:text-8xl mb-3">
              Our <span className="text-brand-500">team</span>
            </h2>
            <p className="font-rounded font-bold text-ink/70 text-lg mb-12 sm:mb-16">
              個性が、価値になる。
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {MEMBERS.map((m, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div
                  className="group relative h-full rounded-4xl bg-white p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: '0 18px 50px -28px rgba(20,34,74,0.4)' }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{ background: `${m.color}22` }}
                  />
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full grid place-items-center mb-6 transition-transform duration-300 group-hover:-rotate-6"
                      style={{ background: m.color }}
                    >
                      <span className="font-anton text-3xl text-white">{m.initial}</span>
                    </div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.16em] mb-2"
                      style={{ color: m.color }}
                    >
                      {m.team}
                    </p>
                    <h3 className="font-anton uppercase text-2xl sm:text-3xl text-ink mb-3">
                      {m.role}
                    </h3>
                    <p className="text-sm leading-loose text-ink/60 font-medium">{m.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs text-ink/40">
            ※ メンバー情報はサンプルです。実際の氏名・役割・写真に差し替えてください。
          </p>
        </div>
      </section>
    </>
  )
}
