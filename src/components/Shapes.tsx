/** Decorative, non-interactive pop shapes for a playful, lively background. */

export function Blob({
  className = '',
  color = '#FF8A5B',
  size = 220,
  float = 'animate-float',
}: {
  className?: string
  color?: string
  size?: number
  float?: string
}) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none ${float} ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full animate-blob" style={{ background: color, opacity: 0.9 }} />
    </div>
  )
}

export function Ring({
  className = '',
  color = '#6EB5FF',
  size = 120,
  stroke = 14,
}: {
  className?: string
  color?: string
  size?: number
  stroke?: number
}) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full pointer-events-none animate-float-soft ${className}`}
      style={{
        width: size,
        height: size,
        border: `${stroke}px solid ${color}`,
      }}
    />
  )
}

export function Dots({
  className = '',
  color = '#1E5FD6',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      aria-hidden
      className={`absolute pointer-events-none ${className}`}
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
    >
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={10 + c * 24} cy={10 + r * 24} r="4" fill={color} />
        )),
      )}
    </svg>
  )
}

export function Star({
  className = '',
  color = '#FFC44D',
  size = 64,
}: {
  className?: string
  color?: string
  size?: number
}) {
  return (
    <svg
      aria-hidden
      className={`absolute pointer-events-none animate-spin-slow ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 0c4 28 18 42 46 46-28 4-42 18-46 50-4-32-18-46-46-50C32 42 46 28 50 0Z"
        fill={color}
      />
    </svg>
  )
}
