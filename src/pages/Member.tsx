import Reveal from '../components/Reveal'
import { PageHero, SectionTag } from '../components/ui'
import { MEMBERS } from '../data/members'

export default function Member() {
  const [ceo, ...rest] = MEMBERS

  return (
    <>
      <PageHero
        kicker="Member"
        title="The people behind."
        lead="挑戦を後押しするのは、いつも人。Globexaを動かすメンバーを紹介します。"
      />

      {/* Representative */}
      <section className="bg-white px-4 sm:px-10 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="01" en="Representative" />
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-100">
                <img
                  src={ceo.photo}
                  alt={`${ceo.name}（${ceo.roleJa}）`}
                  className="w-full h-full object-cover"
                />
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
      <section className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-32 border-t border-brand-100">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="02" en="Team" />
          <Reveal>
            <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl xl:text-8xl mb-3">
              Our <span className="text-brand-600">team</span>
            </h2>
            <p className="font-rounded font-bold text-ink/60 text-lg mb-12 sm:mb-16">
              個性が、価値になる。
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {rest.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <article className="group h-full rounded-3xl bg-white border border-brand-100 overflow-hidden transition-all duration-300 hover:border-brand-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden bg-brand-50">
                    <img
                      src={m.photo}
                      alt={`${m.name}（${m.roleJa}）`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-1.5">
                      {m.roleJa}
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
