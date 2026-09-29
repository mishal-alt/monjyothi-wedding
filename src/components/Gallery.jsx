import ringImg from '../assets/story-ring.jpg'
import cafeImg from '../assets/story-cafe.jpg'

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M21 16l-5.5-5-4 4-2.5-2L3 18" />
    </svg>
  )
}

const photos = [
  { caption: 'The Promise', image: ringImg },
  { caption: 'Our Story', image: cafeImg },
]

export default function Gallery({ captions }) {
  return (
    <section style={{ background: 'var(--cream-deep)' }}>
      <div className="wrap">
        <div className="section-sub">A few frames</div>
        <h2 className="section-title">Our Moments</h2>
        <div className="gallery">
          {photos.map((photo) => (
            <div className="frame photo reveal" key={photo.caption}>
              <img src={photo.image} alt={photo.caption} />
              <div className="frame-cap">{photo.caption}</div>
            </div>
          ))}
          {captions.map((caption) => (
            <div className="frame reveal" key={caption}>
              <CameraIcon />
              <div className="tag">Photo coming soon</div>
              <div className="cap">{caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
