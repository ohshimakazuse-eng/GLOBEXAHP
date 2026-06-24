import Reveal from '../components/Reveal'
import { PageHero, SectionTag } from '../components/ui'
import { Blob, Ring, Dots, Star } from '../components/Shapes'

const VALUES = [
  {
    k: '01',
    title: 'Challenge first',
    ja: 'まず、挑む。',
    text: '完璧な答えを待たない。やってみて、確かめて、前に進む。挑戦の総量が、未来の解像度を上げる。',
    color: '#FF8A5B',
  },
  {
    k: '02',
    title: 'For someone',
    ja: '誰かのために。',
    text: '私たちの仕事は、誰かが前に進むきっかけになること。相手の挑戦を、自分ごととして本気で背負う。',
    color: '#4FCB7B',
  },
  {
    k: '03',
    title: 'Cross the line',
    ja: '領域を越える。',
    text: '職種も事業も、線を引かない。越境して掛け合わせるからこそ、見えなかった可能性が形になる。',
    color: '#FF7AB6',
  },
  {
    k: '04',
    title: 'Speed & honesty',
    ja: '速く、誠実に。',
    text: '早く動き、まっすぐ向き合う。スピードと誠実さの両立が、信頼を積み上げていく。',
    color: '#6EB5FF',
  },
]

export default function MVV() {
  return (
    <>
      <PageHero
        kicker="MVV"
        title="Mission. Vision. Value."
        lead="私たちが何のために存在し、どこを目指し、どう在るのか。Globexaの原点となる３つの言葉です。"
        accent="#4FCB7B"
      />

      {/* Mission */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-10 py-24 sm:py-32">
        <Blob className="-top-10 right-0 hidden sm:block" color="#6EB5FF" size={220} />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="01" en="Mission" color="#2E7BEF" />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.92] text-ink text-5xl sm:text-7xl xl:text-8xl">
                見えない
                <br />
                <span className="text-brand-500">未来を創る</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-loose text-ink/70 font-medium">
                まだ形になっていない夢やアイデアを、一緒に具体的な行動へ変えていく。
                世の中の「あったらいいな」を、誰かの一歩から現実にしていく。
                それが、私たちGlobexaの使命です。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-4 sm:px-8 py-6">
        <div
          className="relative max-w-6xl mx-auto rounded-5xl overflow-hidden text-white px-6 sm:px-14 py-20 sm:py-28"
          style={{ background: 'linear-gradient(150deg, #FF7AB6 0%, #E14F94 100%)' }}
        >
          <Ring className="top-10 right-10 hidden sm:block" color="#ffffff66" size={90} stroke={12} />
          <Star className="bottom-10 left-8 hidden sm:block" color="#FFC44D" size={56} />
          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] mb-6">
                02 — Vision
              </span>
              <h2 className="font-anton uppercase leading-[0.95] text-5xl sm:text-7xl xl:text-8xl">
                誰かが前に進む
                <br />
                きっかけになる
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-loose text-white/90 font-medium">
                挑戦する個人や企業の、最初の一歩を後押しする存在でありたい。
                SNSという「個の時代」の力を味方に、挑戦が正しく報われる社会をつくる。
                Globexaは、その起点となるチームを目指します。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="relative overflow-hidden bg-brand-50 px-4 sm:px-10 py-24 sm:py-32">
        <Dots className="top-16 right-8 hidden sm:block" color="#B3D1FF" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="03" en="Value" color="#FF8A5B" />
          <Reveal>
            <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl xl:text-8xl mb-3">
              How we <span className="text-brand-500">act</span>
            </h2>
            <p className="font-rounded font-bold text-ink/70 text-lg mb-12 sm:mb-16">
              私たちの行動指針。
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7">
            {VALUES.map((v, i) => (
              <Reveal key={v.k} delay={(i % 2) * 90}>
                <div
                  className="group relative h-full rounded-4xl bg-white p-8 sm:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: '0 18px 50px -28px rgba(20,34,74,0.4)' }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 w-28 h-28 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{ background: `${v.color}22` }}
                  />
                  <div className="relative">
                    <span className="font-anton text-5xl" style={{ color: v.color }}>
                      {v.k}
                    </span>
                    <h3 className="font-anton uppercase text-3xl sm:text-4xl text-ink mt-3">
                      {v.title}
                    </h3>
                    <p className="font-rounded font-bold text-lg sm:text-xl mb-4" style={{ color: v.color }}>
                      {v.ja}
                    </p>
                    <p className="text-sm sm:text-base leading-loose text-ink/65 font-medium">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
