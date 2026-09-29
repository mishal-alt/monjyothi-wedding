import { useEffect, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function diffParts(targetMs) {
  const diff = Math.max(0, targetMs - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown({ targetISO }) {
  const targetMs = new Date(targetISO).getTime()
  const [parts, setParts] = useState(() => diffParts(targetMs))

  useEffect(() => {
    const id = setInterval(() => setParts(diffParts(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  return (
    <div className="countdown reveal">
      <div className="count-card">
        <div className="count-num">{pad(parts.days)}</div>
        <div className="count-label">Days</div>
      </div>
      <div className="count-card">
        <div className="count-num">{pad(parts.hours)}</div>
        <div className="count-label">Hours</div>
      </div>
      <div className="count-card">
        <div className="count-num">{pad(parts.mins)}</div>
        <div className="count-label">Minutes</div>
      </div>
      <div className="count-card">
        {/* key change remounts the node each second, replaying the CSS pulse animation */}
        <div className="count-num pulse" key={parts.secs}>
          {pad(parts.secs)}
        </div>
        <div className="count-label">Seconds</div>
      </div>
    </div>
  )
}
