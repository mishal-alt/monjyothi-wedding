import floralBannerImg from '../assets/floral-banner.jpg'

export default function Footer({ names }) {
  return (
    <footer>
      <div className="script">{names}</div>
      <p>WITH LOVE, WE INVITE YOU TO OUR WEDDING CELEBRATION</p>
      <img className="floral-banner" src={floralBannerImg} alt="" aria-hidden="true" />
    </footer>
  )
}
