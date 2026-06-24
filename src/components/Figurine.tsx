/**
 * Original "figurine people" for the hero carousel — drawn from scratch as SVG
 * so the site ships no third-party character art. Four variants share the same
 * construction (a collectible-set feel) but differ in outfit, hair and face,
 * in a calm, blue-led palette.
 */

type Variant = {
  skin: string
  hair: string
  hairStyle: 'short' | 'side' | 'pony' | 'cap'
  outfit: string
  outfitDark: string
  accent: string
  glasses: boolean
  blush: boolean
}

const PANTS = '#33405E'
const PANTS_DARK = '#26314A'
const SHOES = '#E9EFF8'

const VARIANTS: Variant[] = [
  { skin: '#F1C7A1', hair: '#2A2320', hairStyle: 'short', outfit: '#1E3A6E', outfitDark: '#162B52', accent: '#6EB5FF', glasses: true, blush: false },
  { skin: '#F4CFAB', hair: '#3E2C22', hairStyle: 'side', outfit: '#2E7BEF', outfitDark: '#1E5FD6', accent: '#FFFFFF', glasses: false, blush: true },
  { skin: '#F1C7A1', hair: '#211B19', hairStyle: 'pony', outfit: '#6EB5FF', outfitDark: '#4F93E6', accent: '#1E3A6E', glasses: false, blush: true },
  { skin: '#F4CFAB', hair: '#34272E', hairStyle: 'cap', outfit: '#3B4A66', outfitDark: '#2A3750', accent: '#FFC44D', glasses: false, blush: false },
]

function Hair({ v }: { v: Variant }) {
  switch (v.hairStyle) {
    case 'short':
      return <path d="M96 188 C96 140 120 120 150 120 C180 120 204 140 204 188 C204 168 186 150 150 150 C114 150 114 170 96 188 Z" fill={v.hair} />
    case 'side':
      return (
        <g fill={v.hair}>
          <path d="M95 190 C95 138 122 118 150 118 C182 118 206 142 205 186 C198 160 176 150 150 150 C128 150 110 162 104 196 Z" />
          <path d="M150 150 C176 150 196 160 202 186 L206 176 C202 150 180 134 150 134 Z" />
        </g>
      )
    case 'pony':
      return (
        <g fill={v.hair}>
          <path d="M205 250 C232 242 232 196 214 188 L196 196 C212 206 214 236 200 252 Z" />
          <path d="M96 190 C96 138 120 116 150 116 C180 116 206 140 205 192 C198 162 178 150 150 150 C118 150 110 166 102 200 Z" />
        </g>
      )
    default: // cap
      return (
        <g>
          <path d="M92 158 C92 122 118 104 150 104 C188 104 210 130 210 158 L150 158 Z" fill={v.outfitDark} />
          <path d="M150 158 L222 162 C224 150 214 144 206 146 L150 150 Z" fill={v.outfit} />
          <path d="M96 158 C100 138 122 122 150 122 C150 122 130 130 122 158 Z" fill={v.hair} />
        </g>
      )
  }
}

export default function Figurine({ variant, className = '' }: { variant: number; className?: string }) {
  const v = VARIANTS[variant % 4]
  return (
    <svg
      viewBox="0 0 300 520"
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMax meet"
      role="img"
      aria-hidden
    >
      {/* pedestal */}
      <ellipse cx="150" cy="502" rx="96" ry="20" fill="#0A2A66" opacity="0.18" />
      <ellipse cx="150" cy="494" rx="90" ry="18" fill="#D6E6FF" />
      <ellipse cx="150" cy="488" rx="90" ry="18" fill="#FFFFFF" />

      {/* legs + shoes */}
      <rect x="120" y="356" width="26" height="120" rx="13" fill={PANTS} />
      <rect x="154" y="356" width="26" height="120" rx="13" fill={PANTS_DARK} />
      <ellipse cx="126" cy="480" rx="22" ry="12" fill={SHOES} />
      <ellipse cx="174" cy="480" rx="22" ry="12" fill={SHOES} />

      {/* arms (behind torso) */}
      <rect x="86" y="256" width="26" height="104" rx="13" fill={v.outfitDark} />
      <rect x="188" y="256" width="26" height="104" rx="13" fill={v.outfitDark} />
      <circle cx="99" cy="364" r="14" fill={v.skin} />
      <circle cx="201" cy="364" r="14" fill={v.skin} />

      {/* torso / outfit */}
      <path d="M104 268 C104 244 124 232 150 232 C176 232 196 244 196 268 L202 360 C202 372 192 380 180 380 L120 380 C108 380 98 372 98 360 Z" fill={v.outfit} />
      {/* collar + placket */}
      <path d="M134 234 L150 256 L166 234 C160 230 140 230 134 234 Z" fill={v.outfitDark} />
      <rect x="147" y="252" width="6" height="120" rx="3" fill={v.outfitDark} opacity="0.6" />
      <circle cx="150" cy="300" r="3.4" fill={v.accent} />
      <circle cx="150" cy="330" r="3.4" fill={v.accent} />

      {/* neck */}
      <rect x="138" y="214" width="24" height="26" rx="10" fill={v.skin} />

      {/* head */}
      <circle cx="150" cy="184" r="58" fill={v.skin} />
      <ellipse cx="108" cy="190" rx="9" ry="12" fill={v.skin} />
      <ellipse cx="192" cy="190" rx="9" ry="12" fill={v.skin} />

      {/* hair frames the face (drawn before facial features) */}
      <Hair v={v} />

      {/* blush */}
      {v.blush && (
        <g fill="#FF9AAE" opacity="0.55">
          <ellipse cx="120" cy="200" rx="10" ry="6" />
          <ellipse cx="180" cy="200" rx="10" ry="6" />
        </g>
      )}

      {/* eyebrows */}
      <path d="M122 170 q10 -5 20 0" stroke={v.hair} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M158 170 q10 -5 20 0" stroke={v.hair} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* eyes */}
      <ellipse cx="132" cy="186" rx="6.5" ry="8.5" fill="#23304A" />
      <ellipse cx="168" cy="186" rx="6.5" ry="8.5" fill="#23304A" />
      <circle cx="130" cy="183" r="2.2" fill="#fff" />
      <circle cx="166" cy="183" r="2.2" fill="#fff" />

      {/* nose + mouth (slight expression variety per variant) */}
      <path d="M148 196 q2 4 4 0" stroke={v.hair} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      {variant % 4 === 0 && <path d="M140 208 q10 6 20 0" stroke="#5A4636" strokeWidth="3" fill="none" strokeLinecap="round" />}
      {variant % 4 === 1 && <path d="M138 206 q12 10 24 0" stroke="#5A4636" strokeWidth="3" fill="none" strokeLinecap="round" />}
      {variant % 4 === 2 && <path d="M140 207 q10 7 20 0" stroke="#5A4636" strokeWidth="3" fill="none" strokeLinecap="round" />}
      {variant % 4 === 3 && <path d="M142 208 h16" stroke="#5A4636" strokeWidth="3" fill="none" strokeLinecap="round" />}

      {/* glasses */}
      {v.glasses && (
        <g stroke="#23304A" strokeWidth="3" fill="none">
          <circle cx="132" cy="186" r="13" />
          <circle cx="168" cy="186" r="13" />
          <path d="M145 186 h10" />
        </g>
      )}
    </svg>
  )
}
