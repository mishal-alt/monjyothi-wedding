import moment1 from '../assets/moments/moment-1.jpg'
import moment2 from '../assets/moments/moment-2.jpg'
import moment3 from '../assets/moments/moment-3.jpg'
import moment4 from '../assets/moments/moment-4.jpg'
import moment5 from '../assets/moments/moment-5.jpg'
import moment6 from '../assets/moments/moment-6.jpg'

const photos = [moment1, moment2, moment3, moment4, moment5, moment6]

export default function Gallery() {
  return (
    <section style={{ background: 'var(--cream-deep)' }}>
      <div className="wrap">
        <div className="section-sub">A few frames</div>
        <h2 className="section-title">Our Moments</h2>
        <div className="gallery">
          {photos.map((src, i) => (
            <div className="frame photo reveal" key={i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
