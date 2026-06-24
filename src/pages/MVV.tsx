import Reveal from '../components/Reveal'
import { PageHero, SectionTag } from '../components/ui'

const VALUES = [
  {
    k: 'V1',
    title: 'Challenge first',
    ja: 'まず、挑む。',
    text: '完璧な答えを待たない。やってみて、確かめて、前に進む。挑戦の総量が、未来の解像度を上げる。',
  },
  {
    k: 'V2',
    title: 'For someone',
    ja: '誰かのために。',
    text: '私たちの仕事は、誰かが前に進むきっかけになること。相手の挑戦を、自分ごととして本気で背負う。',
  },
  {
    k: 'V3',
    title: 'Cross the line',
    ja: '領域を越える。',
    text: '職種も事業も、線を引かない。越境して掛け合わせるからこそ、見えなかった可能性が形になる。',
  },
  {
    k: 'V4',
    title: 'Speed & honesty',
    ja: '速く、誠実に。',
    text: '早く動き、まっすぐ向き合う。スピードと誠実さの両立が、信頼を積み上げていく。',
  },
]

export default function MVV() {
  return (
    <>
      <PageHero
        kicker="MVV"
        title="Mission. Vision. Value."
        lead="私たちが何のために存在し、どこを目指し、どう在るのか。Globexaの原点となる３つの言葉です。"
      />

      {/* Mission */}
      <section className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-36">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="01" en="Mission" />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.95] text-ink text-5xl sm:text-7xl xl:text-8xl">
                見えない
                <br />
                <span className="text-brand-600">未来を創る</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-loose text-ink/75">
                まだ形になっていない夢やアイデアを、一緒に具体的な行動へ変えていく。
                世の中の「あったらいいな」を、誰かの一歩から現実にしていく。
                それが、私たちGlobexaの使命です。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative bg-brand-900 text-white px-4 sm:px-10 py-24 sm:py-36 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="02" en="Vision" light />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.95] text-5xl sm:text-7xl xl:text-8xl">
                誰かが前に進む
                <br />
                <span className="text-brand-400">きっかけになる</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-loose text-white/75">
                挑戦する個人や企業の、最初の一歩を後押しする存在でありたい。
                SNSという「個の時代」の力を味方に、挑戦が正しく報われる社会をつくる。
                Globexaは、その起点となるチームを目指します。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="bg-white px-4 sm:px-10 py-24 sm:py-36">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="03" en="Value" />
          <Reveal>
            <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl xl:text-8xl mb-12 sm:mb-20">
              How we <span className="text-brand-600">act</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-brand-100">
            {VALUES.map((v, i) => (
              <Reveal key={v.k} delay={i * 90}>
                <div className="bg-white p-8 sm:p-12 h-full">
                  <span className="font-anton text-5xl sm:text-6xl text-brand-200 leading-none">
                    {v.k}
                  </span>
                  <h3 className="font-anton uppercase text-3xl sm:text-4xl text-ink mt-5 mb-1">
                    {v.title}
                  </h3>
                  <p className="font-anton text-brand-600 text-lg sm:text-xl mb-4">{v.ja}</p>
                  <p className="text-sm sm:text-base leading-loose text-ink/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
