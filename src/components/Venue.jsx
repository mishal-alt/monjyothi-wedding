export default function Venue({ venue }) {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(venue.name)}&output=embed`

  return (
    <section className="venue">
      <div className="wrap reveal">
        <div className="section-sub">Join us at</div>
        <h2 className="section-title">The Venue</h2>
        <div className="venue-address">{venue.name}</div>
        <div className="venue-sub">All functions will be held at this address</div>

        <div className="map-frame">
          <iframe
            title={`Map showing ${venue.name}`}
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a className="btn" href={venue.mapsUrl} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      </div>
    </section>
  )
}
