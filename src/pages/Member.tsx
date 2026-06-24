import Reveal from '../components/Reveal'
import { Grain, PageHero, SectionTag } from '../components/ui'

/**
 * NOTE: Only the representative (山﨑 星河) is verified from public sources.
 * The team entries below are placeholders — replace names / roles / photos
 * with real member data.
 */
const MEMBERS = [
  { initial: 'M', role: 'SNS Marketer', team: 'Marketing', note: 'アカウント設計から運用・分析まで。' },
  { initial: 'P', role: 'Promotion Planner', team: 'Promotion', note: '話題を生む企画を、形にする。' },
  { initial: 'I', role: 'Influencer Producer', team: 'Influencer', note: '発信者の挑戦に、伴走する。' },
  { initial: 'O', role: 'BPO Operator', team: 'Operations', note: '業務を磨き、価値創造を支える。' },
  { initial: 'R', role: 'Recruiting Consultant', team: 'Recruitment', note: '採用を、経営の戦略へ。' },
  { initial: 'C', role: 'Creative Designer', team: 'Creative', note: 'ブランドの世界観をデザインする。' },
]

export default function Member() {
  return (
    <>
      <PageHero
        kicker="Member"
        title="The people behind."
        lead="挑戦を後押しするのは、いつも人。Globexaを動かすメンバーを紹介します。"
      />

      {/* Representative */}
      <section className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-36">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="01" en="Representative" />
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden grid place-items-center"
                style={{ background: 'linear-gradient(160deg, #2E7BEF, #0A2A66)' }}
              >
                <Grain opacity={0.3} />
                <span className="relative font-anton text-white/90 text-[8rem] leading-none">星</span>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="font-anton uppercase text-brand-600 text-sm tracking-[0.18em] mb-3">
                  Founder &amp; CEO ／ 代表取締役
                </p>
                <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl leading-none mb-6">
                  山﨑 星河
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base sm:text-lg leading-loose text-ink/75 mb-5">
                  「誰かが前に進むきっかけになりたい」。その想いひとつで、2025年にGlobexaを立ち上げました。
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base sm:text-lg leading-loose text-ink/75">
                  SNSは、個人の挑戦を加速させる最大の武器です。私たちはその力を信じ、まだ見えない未来を、
                  仲間とクライアントとともに形にしていきます。設立して間もない今だからこそ、
                  一人ひとりのアイデアが、事業そのものを動かしていく。一緒に未来を創りましょう。
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="relative bg-brand-900 text-white px-4 sm:px-10 py-24 sm:py-36">
        <Grain />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="02" en="Team" light />
          <Reveal>
            <h2 className="font-anton uppercase text-5xl sm:text-7xl xl:text-8xl mb-12 sm:mb-16">
              Our team
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15">
            {MEMBERS.map((m, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="bg-brand-900 p-8 sm:p-10 h-full group">
                  <div
                    className="w-20 h-20 rounded-full grid place-items-center mb-6 transition-colors"
                    style={{ background: 'linear-gradient(160deg, #2E7BEF, #1149B0)' }}
                  >
                    <span className="font-anton text-3xl text-white">{m.initial}</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-300 mb-2">{m.team}</p>
                  <h3 className="font-anton uppercase text-2xl sm:text-3xl mb-3">{m.role}</h3>
                  <p className="text-sm leading-loose text-white/65">{m.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/40">
            ※ メンバー情報はサンプルです。実際の氏名・役割・写真に差し替えてください。
          </p>
        </div>
      </section>
    </>
  )
}
