import yamazaki from '../assets/members/yamazaki.jpg'
import kawakura from '../assets/members/kawakura.jpg'
import konno from '../assets/members/konno.jpg'

export type Member = {
  name: string
  roleJa: string
  roleEn: string
  photo: string
  color: string
  note: string
}

/** Real members, in display order: 山﨑 → 川倉 → 金野. */
export const MEMBERS: Member[] = [
  {
    name: '山﨑 星河',
    roleJa: '代表取締役',
    roleEn: 'Founder & CEO',
    photo: yamazaki,
    color: '#2E7BEF',
    note: '「誰かが前に進むきっかけになりたい」。その想いひとつで、Globexaを立ち上げました。',
  },
  {
    name: '川倉 諒太',
    roleJa: '取締役',
    roleEn: 'Director',
    photo: kawakura,
    color: '#FF8A5B',
    note: '事業と組織を、前へ。現場と経営をつなぎ、挑戦を確かな成果へと変えていきます。',
  },
  {
    name: '金野 莉奈',
    roleJa: '広報',
    roleEn: 'Public Relations',
    photo: konno,
    color: '#FF7AB6',
    note: 'Globexaの想いを、世の中へ。人と機会をつなぐ発信で、挑戦の輪を広げます。',
  },
]
