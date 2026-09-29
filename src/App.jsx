import { useEffect, useRef, useState } from 'react'
import DoorsScene from './components/DoorsScene.jsx'
import WelcomeScene from './components/WelcomeScene.jsx'
import Countdown from './components/Countdown.jsx'
import FamilyInvitation from './components/FamilyInvitation.jsx'
import CoupleSection from './components/CoupleSection.jsx'
import Timeline from './components/Timeline.jsx'
import Venue from './components/Venue.jsx'
import Gallery from './components/Gallery.jsx'
import RsvpSection from './components/RsvpSection.jsx'
import Footer from './components/Footer.jsx'
import MusicToggle from './components/MusicToggle.jsx'
import { useRevealAll } from './hooks/useRevealAll.js'
import { wedding } from './data.js'

export default function App() {
  const [doorsOpening, setDoorsOpening] = useState(false)
  const [doorsHidden, setDoorsHidden] = useState(false)
  const musicRef = useRef(null)

  useRevealAll([doorsHidden])

  useEffect(() => {
    document.documentElement.classList.add('locked')
    return () => document.documentElement.classList.remove('locked')
  }, [])

  function handleOpen() {
    document.documentElement.classList.remove('locked')
    document.body.classList.remove('locked')
    setDoorsOpening(true)
    setTimeout(() => setDoorsHidden(true), 1100)
    musicRef.current?.tryPlay()
  }

  const brideFirstName = wedding.bride.name.split(' ')[0]
  const groomFirstName = wedding.groom.name.split(' ')[0]
  const coupleNames = `${groomFirstName} & ${brideFirstName}`

  return (
    <>
      <DoorsScene names={coupleNames} onOpen={handleOpen} opening={doorsOpening} hidden={doorsHidden} />

      <div className="device">
        <WelcomeScene
          brideFirstName={brideFirstName}
          groomFirstName={groomFirstName}
          date={wedding.weddingDateDisplay}
        />

        <section>
          <div className="wrap">
            <div className="section-sub">Counting down to</div>
            <h2 className="section-title">Our Wedding Day</h2>
            <Countdown targetISO={wedding.weddingDateISO} />
          </div>
        </section>

        <FamilyInvitation bride={wedding.bride} groom={wedding.groom} />

        <CoupleSection bride={wedding.bride} groom={wedding.groom} />
        <Timeline events={wedding.events} venueName={wedding.venue.name} />
        <Venue venue={wedding.venue} />
        <Gallery captions={wedding.galleryPlaceholders} />
        <RsvpSection whatsappNumber={wedding.whatsappNumber} whatsappDisplay={wedding.whatsappDisplay} />

        <Footer names={coupleNames} />
      </div>

      <MusicToggle ref={musicRef} show={doorsHidden} musicSrc={wedding.musicSrc} />
    </>
  )
}
