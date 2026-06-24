import Reveal from '../components/Reveal'
import { PageHero, SectionTag } from '../components/ui'
import { Blob, Ring, Dots, Star } from '../components/Shapes'
import { MEMBERS } from '../data/members'

export default function Member() {
  const [ceo, ...rest] = MEMBERS

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
        <Dots className="bottom-16 left-6 hidden sm:block" color="#B3D1FF" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="01" en="Representative" color="#2E7BEF" />
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <Blob className="-top-6 -left-6 -z-10" color="#FF7AB6" size={120} />
                <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-[0_30px_70px_-30px_rgba(20,34,74,0.5)]">
                  <img
                    src={ceo.photo}
                    alt={`${ceo.name}（${ceo.roleJa}）`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="inline-block rounded-full bg-brand-50 text-brand-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] mb-4">
                  {ceo.roleEn} ／ {ceo.roleJa}
                </span>
                <h2 className="font-rounded font-black text-ink text-5xl sm:text-7xl leading-none mb-6">
                  {ceo.name}
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

      {/* Team */}
      <section className="relative overflow-hidden bg-brand-50 px-4 sm:px-10 py-24 sm:py-32">
        <Ring className="top-20 right-[8%] hidden sm:block" color="#FFC44D" size={88} stroke={12} />
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
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            {rest.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
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
                  <div className="p-6 sm:p-8">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.16em] mb-1.5"
                      style={{ color: m.color }}
                    >
                      {m.roleEn}
                    </p>
                    <h3 className="font-rounded font-black text-2xl sm:text-3xl text-ink mb-3">
                      {m.name}
                    </h3>
                    <p className="text-sm sm:text-base leading-loose text-ink/60 font-medium">
                      {m.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
