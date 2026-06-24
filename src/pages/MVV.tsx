import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import { PageHero } from '../components/ui'
import { Blob } from '../components/Shapes'

const VALUES = [
  { jp: 'まず、挑む。', en: 'Challenge first', text: '完璧な答えを待たない。やってみて、確かめて、前に進む。' },
  { jp: '誰かのために。', en: 'For someone', text: '相手の挑戦を、自分ごととして本気で背負う。' },
  { jp: '領域を越える。', en: 'Cross the line', text: '越境して掛け合わせ、見えなかった可能性を形にする。' },
  { jp: '速く、誠実に。', en: 'Speed & honesty', text: '早く動き、まっすぐ向き合う。それが信頼を積み上げる。' },
]

function Panel({
  no,
  en,
  color,
  jp,
  children,
}: {
  no: string
  en: string
  color: string
  jp: string
  children: ReactNode
}) {
  return (
    <Reveal>
      <article className="rounded-4xl bg-white p-7 sm:p-12 shadow-[0_18px_50px_-30px_rgba(20,34,74,0.4)]">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="grid place-items-center w-11 h-11 rounded-full font-anton text-lg text-white"
            style={{ background: color }}
          >
            {no}
          </span>
          <span className="font-anton uppercase tracking-wide text-xl" style={{ color }}>
            {en}
          </span>
        </div>
        <h2 className="font-rounded font-black text-ink leading-tight text-[2rem] sm:text-5xl mb-5">
          {jp}
        </h2>
        <div className="text-ink/70 font-medium leading-loose text-base sm:text-lg max-w-2xl">
          {children}
        </div>
      </article>
    </Reveal>
  )
}

export default function MVV() {
  return (
    <>
      <PageHero
        kicker="MVV"
        title="Mission. Vision. Value."
        lead="私たちが何のために存在し、どこを目指し、どう在るのか。Globexaの原点となる３つの言葉です。"
        accent="#4FCB7B"
      />

      <section className="relative overflow-hidden bg-brand-50 px-4 sm:px-8 py-20 sm:py-28">
        <Blob className="-top-10 -right-12 hidden sm:block" color="#6EB5FF" size={220} />
        <div className="relative max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
          <Panel no="01" en="Mission" color="#2E7BEF" jp="見えない未来を創る">
            まだ形になっていない夢やアイデアを、一緒に具体的な行動へ変えていく。
            世の中の「あったらいいな」を、誰かの一歩から現実にしていく。それが、私たちの使命です。
          </Panel>

          <Panel no="02" en="Vision" color="#FF7AB6" jp="誰かが前に進む、そのきっかけになる">
            挑戦する個人や企業の、最初の一歩を後押しする存在でありたい。SNSという「個の時代」の力を
            味方に、挑戦が正しく報われる社会をつくる。私たちは、その起点となるチームを目指します。
          </Panel>

          <Panel no="03" en="Value" color="#FF8A5B" jp="私たちの行動指針">
            <p className="mb-7">日々の判断のよりどころとなる、4つの価値観です。</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {VALUES.map((v, i) => {
                const c = ['#FF8A5B', '#4FCB7B', '#FF7AB6', '#6EB5FF'][i]
                return (
                  <div key={v.en} className="rounded-3xl bg-brand-50 p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                      <span
                        className="font-anton uppercase text-sm tracking-wide"
                        style={{ color: c }}
                      >
                        {v.en}
                      </span>
                    </div>
                    <h3 className="font-rounded font-black text-ink text-xl sm:text-2xl mb-1.5">
                      {v.jp}
                    </h3>
                    <p className="text-sm text-ink/65 font-medium leading-relaxed">{v.text}</p>
                  </div>
                )
              })}
            </div>
          </Panel>
        </div>
      </section>
    </>
  )
}
