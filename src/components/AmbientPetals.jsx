const petals = [
  { left: '6%', delay: '0s', duration: '18s' },
  { left: '20%', delay: '5s', duration: '22s' },
  { left: '35%', delay: '10s', duration: '16s' },
  { left: '50%', delay: '3s', duration: '20s' },
  { left: '65%', delay: '8s', duration: '19s' },
  { left: '80%', delay: '2s', duration: '21s' },
  { left: '92%', delay: '12s', duration: '17s' },
]

export default function AmbientPetals() {
  return (
    <div className="ambient-petals" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="ambient-petal"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  )
}
