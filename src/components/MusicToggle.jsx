import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

const MusicToggle = forwardRef(function MusicToggle({ show, musicSrc }, ref) {
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    const onPlay = () => setMuted(false)
    const onPause = () => setMuted(true)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  useImperativeHandle(ref, () => ({
    tryPlay() {
      const audio = audioRef.current
      if (!musicSrc) return
      if (!audio.src) audio.src = musicSrc
      audio.play().catch(() => {})
    },
  }))

  function toggle() {
    const audio = audioRef.current
    if (audio.paused) {
      if (musicSrc && !audio.src) audio.src = musicSrc
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <div className={`music-frame${show ? ' show' : ''}`}>
        <button
          className={`music-btn${muted ? ' muted' : ''}`}
          onClick={toggle}
          aria-label="Toggle background music"
        >
          <svg className="icon-play" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <svg className="icon-mute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </button>
      </div>
      <audio ref={audioRef} loop preload="none" />
    </>
  )
})

export default MusicToggle
