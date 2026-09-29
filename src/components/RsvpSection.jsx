import { useState } from 'react'

const DEFAULT_MESSAGE =
  "Hi! We're so excited to celebrate with you 🎉 Confirming our presence at the wedding!"

export default function RsvpSection({ whatsappNumber }) {
  const [message, setMessage] = useState(DEFAULT_MESSAGE)
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section>
      <div className="wrap">
        <div className="section-sub">We can&apos;t wait to celebrate</div>
        <h2 className="section-title">RSVP</h2>
        <div className="rsvp-card reveal">
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
            Kindly confirm your presence, or reach out with any questions — just send it straight to us on
            WhatsApp.
          </p>
          <textarea
            className="rsvp-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            aria-label="Message to send on WhatsApp"
          />
          <a className="btn" href={waLink} target="_blank" rel="noopener noreferrer">
            Send on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
