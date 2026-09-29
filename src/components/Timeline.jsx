import floralCornerImg from '../assets/floral-corner.png'

function toGCalUTC(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

function eventCalendarUrl(event, venueName) {
  const start = new Date(event.startISO)
  const end = new Date(start.getTime() + 2 * 3600000)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.name,
    dates: `${toGCalUTC(start)}/${toGCalUTC(end)}`,
    location: venueName,
    details: event.note,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

function CalendarPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M12 13v6M9 16h6" />
    </svg>
  )
}

export default function Timeline({ events, venueName }) {
  return (
    <section>
      <div className="wrap">
        <div className="section-sub">Four days of celebration</div>
        <h2 className="section-title">Wedding Functions</h2>
        <div className="timeline">
          {events.map((event) => (
            <article className="event-card reveal" key={`${event.name}-${event.day}`}>
              <img className="event-card-flower" src={floralCornerImg} alt="" aria-hidden="true" />
              <div className="event-date-label">
                {event.weekday}, {event.day} {event.month}
              </div>
              <h3 className="event-title">{event.name}</h3>
              <p className="event-row">
                <ClockIcon />
                {event.time}
              </p>
              <p className="event-row">
                <PinIcon />
                <span>{venueName}</span>
              </p>
              <p className="event-note">{event.note}</p>
              <a
                className="event-add"
                href={eventCalendarUrl(event, venueName)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarPlusIcon />
                Add this event
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
