function DoorsEmblem() {
  const points = [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
    const rad = (deg * Math.PI) / 180
    return [30 + 18 * Math.cos(rad), 30 + 18 * Math.sin(rad)]
  })
  return (
    <svg className="doors-emblem" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="18" stroke="var(--gold)" strokeWidth="1" opacity=".8" />
      <circle cx="30" cy="30" r="12" stroke="var(--gold)" strokeWidth=".8" opacity=".55" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="var(--gold)" opacity=".85" />
      ))}
      <circle cx="30" cy="30" r="3" fill="var(--gold)" />
    </svg>
  )
}

function DoorPetals() {
  const petals = [
    { left: '10%', delay: '0s', duration: '13s' },
    { left: '26%', delay: '4s', duration: '15s' },
    { left: '46%', delay: '2s', duration: '12s' },
    { left: '64%', delay: '6s', duration: '14s' },
    { left: '80%', delay: '1s', duration: '16s' },
    { left: '92%', delay: '5s', duration: '13s' },
  ]
  return (
    <>
      {petals.map((p, i) => (
        <span
          key={i}
          className="door-petal"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </>
  )
}

function Sprig({ side }) {
  return (
    <svg className={`sprig ${side}`} viewBox="0 0 44 16" fill="none">
      <line x1="0" y1="8" x2="44" y2="8" stroke="var(--gold)" strokeWidth=".8" />
      <ellipse cx="14" cy="8" rx="5" ry="2.4" fill="var(--gold)" opacity=".8" transform="rotate(-20 14 8)" />
      <ellipse cx="30" cy="8" rx="5" ry="2.4" fill="var(--gold)" opacity=".8" transform="rotate(20 30 8)" />
    </svg>
  )
}

function DoorsCorners() {
  return (
    <>
      <span className="doors-corner tl" />
      <span className="doors-corner tr" />
      <span className="doors-corner bl" />
      <span className="doors-corner br" />
    </>
  )
}

function RibbonBow() {
  return (
    <svg className="ribbon-bow" viewBox="0 0 120 150" fill="none">
      <g className="ribbon-left">
        <path
          d="M58,60 C40,40 15,42 16,62 C17,80 42,78 58,66 Z"
          fill="var(--gold)"
          opacity=".9"
        />
        <polygon points="50,68 60,68 58,140 55,122 52,140" fill="var(--gold)" opacity=".85" />
      </g>
      <g className="ribbon-right">
        <path
          d="M62,60 C80,40 105,42 104,62 C103,80 78,78 62,66 Z"
          fill="var(--gold)"
          opacity=".9"
        />
        <polygon points="60,68 70,68 68,140 65,122 62,140" fill="var(--gold)" opacity=".85" />
      </g>
      <rect className="ribbon-knot" x="52" y="55" width="16" height="20" rx="6" fill="var(--gold-light)" />
    </svg>
  )
}

export default function DoorsScene({ names, onOpen, opening, hidden }) {
  const classes = ['doors-scene', opening && 'opening', hidden && 'hidden']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="door left" />
      <div className="door right" />
      <DoorPetals />
      <DoorsCorners />
      <div className="doors-face">
        <DoorsEmblem />
        <div className="doors-eyebrow-row">
          <Sprig side="left" />
          <div className="doors-eyebrow">You are invited</div>
          <Sprig side="right" />
        </div>
        <h1 className="doors-names">{names}</h1>
        <div className="doors-divider">
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </div>
        <button className="ribbon-btn" onClick={onOpen} aria-label="Untie the ribbon to open the invitation">
          <RibbonBow />
        </button>
        <div className="doors-caption">Tap to untie the ribbon</div>
      </div>
    </div>
  )
}
