/**
 * Original mascot "figurines" for the hero carousel — drawn from scratch as SVG
 * so the site ships no third-party character art. Four variants share the same
 * construction (a collectible-set feel) but differ in body color and topper.
 */

type Palette = { body: string; shade: string; belly: string; cheek: string; topper: string }

const PALETTES: Palette[] = [
  { body: '#FF8A5B', shade: '#E76F3D', belly: '#FFD3C0', cheek: '#FF5C8A', topper: '#6EB5FF' }, // orange / robot
  { body: '#4FCB7B', shade: '#33A85E', belly: '#CFEFD8', cheek: '#FF7AB6', topper: '#2E7BEF' }, // green / cat
  { body: '#FF7AB6', shade: '#E85C9C', belly: '#FFD7E8', cheek: '#FF4F7A', topper: '#FFC44D' }, // pink / star
  { body: '#FFC44D', shade: '#E8A52F', belly: '#FFE9BC', cheek: '#FF8A5B', topper: '#4FCB7B' }, // yellow / crown
]

function Topper({ variant, p }: { variant: number; p: Palette }) {
  switch (variant) {
    case 0: // antenna
      return (
        <g>
          <line x1="150" y1="132" x2="150" y2="96" stroke={p.shade} strokeWidth="7" strokeLinecap="round" />
          <circle cx="150" cy="90" r="13" fill={p.topper} />
          <circle cx="146" cy="86" r="4" fill="#fff" opacity="0.8" />
        </g>
      )
    case 1: // cat ears
      return (
        <g>
          <path d="M112 150 L96 104 L142 136 Z" fill={p.body} />
          <path d="M112 146 L104 118 L132 134 Z" fill={p.cheek} opacity="0.7" />
          <path d="M188 150 L204 104 L158 136 Z" fill={p.body} />
          <path d="M188 146 L196 118 L168 134 Z" fill={p.cheek} opacity="0.7" />
        </g>
      )
    case 2: // star antenna
      return (
        <g>
          <line x1="150" y1="134" x2="150" y2="104" stroke={p.shade} strokeWidth="6" strokeLinecap="round" />
          <path
            d="M150 70 l9 20 l22 2 l-16 15 l5 21 l-20 -11 l-20 11 l5 -21 l-16 -15 l22 -2 Z"
            fill={p.topper}
            stroke="#fff"
            strokeWidth="2"
          />
        </g>
      )
    default: // crown
      return (
        <g>
          <path
            d="M110 138 L110 104 L130 122 L150 96 L170 122 L190 104 L190 138 Z"
            fill={p.topper}
            stroke={p.shade}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="150" cy="100" r="5" fill="#fff" />
        </g>
      )
  }
}

export default function Figurine({ variant, className = '' }: { variant: number; className?: string }) {
  const p = PALETTES[variant % 4]
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
      <ellipse cx="150" cy="496" rx="104" ry="22" fill="#0A2A66" opacity="0.22" />
      <ellipse cx="150" cy="486" rx="100" ry="22" fill="#C9DEFF" />
      <ellipse cx="150" cy="478" rx="100" ry="22" fill="#FFFFFF" />

      {/* arms (behind body) */}
      <ellipse cx="74" cy="356" rx="20" ry="32" fill={p.shade} />
      <ellipse cx="226" cy="356" rx="20" ry="32" fill={p.shade} />

      {/* feet */}
      <ellipse cx="122" cy="470" rx="22" ry="13" fill={p.shade} />
      <ellipse cx="178" cy="470" rx="22" ry="13" fill={p.shade} />

      {/* body */}
      <path
        d="M150 250 C206 250 234 300 234 362 C234 432 200 468 150 468 C100 468 66 432 66 362 C66 300 94 250 150 250 Z"
        fill={p.body}
      />
      <ellipse cx="150" cy="384" rx="50" ry="60" fill={p.belly} opacity="0.75" />

      {/* head */}
      <circle cx="150" cy="196" r="74" fill={p.body} />
      <ellipse cx="150" cy="210" rx="56" ry="48" fill={p.belly} opacity="0.45" />

      {/* face */}
      <circle cx="113" cy="222" r="10" fill={p.cheek} opacity="0.5" />
      <circle cx="187" cy="222" r="10" fill={p.cheek} opacity="0.5" />
      <ellipse cx="126" cy="198" rx="12" ry="15" fill="#1B2440" />
      <ellipse cx="174" cy="198" rx="12" ry="15" fill="#1B2440" />
      <circle cx="122" cy="192" r="4" fill="#fff" />
      <circle cx="170" cy="192" r="4" fill="#fff" />
      <path d="M137 220 q13 13 26 0" stroke="#1B2440" strokeWidth="4" fill="none" strokeLinecap="round" />

      <Topper variant={variant % 4} p={p} />
    </svg>
  )
}
