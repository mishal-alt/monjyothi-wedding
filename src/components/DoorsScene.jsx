export default function DoorsScene({ names, onOpen, opening, hidden }) {
  const classes = ['doors-scene', opening && 'opening', hidden && 'hidden']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="door left" />
      <div className="door right" />
      <div className="doors-face">
        <div className="doors-eyebrow">You are invited</div>
        <h1 className="doors-names">{names}</h1>
        <button className="ring-btn" onClick={onOpen} aria-label="Open the invitation">
          Open
        </button>
        <div className="doors-caption">Tap the ring to open the doors</div>
      </div>
    </div>
  )
}
