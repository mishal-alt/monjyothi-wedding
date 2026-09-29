export default function CoupleSection({ bride, groom }) {
  return (
    <section style={{ background: 'var(--cream-deep)' }}>
      <div className="wrap">
        <div className="section-sub">With blessings from</div>
        <h2 className="section-title">The Groom &amp; Bride</h2>
        <div className="couple-grid">
          <div className="couple-card reveal">
            <div className="avatar">
              Groom's
              <br />
              Photo
            </div>
            <div className="couple-role">The Groom</div>
            <div className="couple-name">{groom.name}</div>
            <div className="parents">
              Son of
              <br />
              <b>{groom.father}</b> &amp; <b>{groom.mother}</b>
            </div>
          </div>
          <div className="couple-card reveal">
            <div className="avatar">
              Bride's
              <br />
              Photo
            </div>
            <div className="couple-role">The Bride</div>
            <div className="couple-name">{bride.name}</div>
            <div className="parents">
              Daughter of
              <br />
              <b>{bride.father}</b> &amp; <b>{bride.mother}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
