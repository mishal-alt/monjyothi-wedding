import { useState } from 'react'

export default function RsvpSection({ whatsappNumber, whatsappDisplay }) {
  const [note, setNote] = useState('')

  async function copyPhone() {
    const text = `+${whatsappNumber}`
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
        setNote('Copied!')
      } else {
        setNote(whatsappDisplay)
      }
    } catch {
      setNote(whatsappDisplay)
    }
    setTimeout(() => setNote(''), 1800)
  }

  return (
    <section>
      <div className="wrap">
        <div className="section-sub">We can&apos;t wait to celebrate</div>
        <h2 className="section-title">RSVP</h2>
        <div className="rsvp-card reveal">
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
            Kindly confirm your presence and reach out for any queries on WhatsApp.
          </p>
          <div className="rsvp-number">
            <span>{whatsappDisplay}</span>
            <button className="copy-btn" aria-label="Copy phone number" onClick={copyPhone}>
              ✓
            </button>
          </div>
          <span className="copy-note">{note}</span>
          <div>
            <a
              className="btn"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
