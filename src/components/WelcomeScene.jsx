import coupleImg from '../assets/couple.png'
import lanternImg from '../assets/lantern.png'
import floralCornerImg from '../assets/floral-corner.png'

export default function WelcomeScene({ brideFirstName, groomFirstName, date }) {
  return (
    <section className="hero">
      <img className="lantern l" src={lanternImg} alt="" aria-hidden="true" />
      <img className="lantern r" src={lanternImg} alt="" aria-hidden="true" />

      <div className="arch-frame" aria-hidden="true">
        <svg viewBox="0 0 300 900">
          <path
            d="M14,900 L14,140 A136,136 0 0 1 286,140 L286,900"
            stroke="var(--gold)"
            strokeWidth="1.4"
            fill="none"
          />
        </svg>
      </div>

      <div className="wrap hero-inner reveal">
        <div className="eyebrow">You are invited</div>
        <h1 className="names">
          {groomFirstName}
          <span className="amp">&amp;</span>
          {brideFirstName}
        </h1>
        <div className="divider">
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </div>

        <div className="date-row">
          <span className="month">{date.month}</span>
          <span className="big">{date.day}</span>
          <span className="year">{date.year}</span>
        </div>
        <div className="sub-date">
          {date.weekday} · {date.time}
        </div>

        <div className="photo-slot">
          <img src={coupleImg} alt={`${groomFirstName} and ${brideFirstName}`} />
        </div>

        <div className="scroll-cue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <img className="floral-corner left" src={floralCornerImg} alt="" aria-hidden="true" />
      <img className="floral-corner right" src={floralCornerImg} alt="" aria-hidden="true" />
    </section>
  )
}
