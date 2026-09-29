import bgImg from '../assets/moments/moment-1.jpg'

export default function FamilyInvitation({ bride, groom }) {
  const brideFirst = bride.name.split(' ')[0]
  const groomFirst = groom.name.split(' ')[0]

  return (
    <section
      className="invite-section"
      style={{ backgroundImage: `linear-gradient(rgba(46,3,9,.7), rgba(46,3,9,.7)), url(${bgImg})` }}
    >
      <div className="wrap reveal">
        <p className="invite-line">
          {groom.father} &amp; {groom.mother}
        </p>
        <p className="invite-sub">request the pleasure of your company at the wedding of their son</p>
        <p className="invite-name">{groomFirst}</p>

        <p className="invite-and">and</p>

        <p className="invite-line">
          {bride.father} &amp; {bride.mother}
        </p>
        <p className="invite-sub">together with the family of their daughter</p>
        <p className="invite-name">{brideFirst}</p>

        <div className="invite-note">
          <p>
            With the blessings of our elders and the good wishes of family and friends, we joyfully invite you to
            be part of our wedding celebrations. Your presence would mean the world to us.
          </p>
        </div>
      </div>
    </section>
  )
}
