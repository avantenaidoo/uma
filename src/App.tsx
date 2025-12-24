import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'

// Import your Explore pages
import ExploreMenu from './ExplorePages/ExploreMenu'
import MeetTheTeam from './ExplorePages/MeetTheTeam'
import ResearchExploration from './ExplorePages/ResearchExploration'
import CaseStudies from './ExplorePages/CaseStudies'
import Sites from './ExplorePages/Sites'
import UserStories from './ExplorePages/UserStories'

const store = createXRStore()

function EmptyScene() {
  return (
    <XR store={store}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
    </XR>
  )
}

function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const videos = useMemo(
    () => ['/umavideo1.mp4', '/umavideo2.mp4', '/umavideo3.mp4', '/umavideo5.mp4', '/umavideo6.mp4'],
    []
  )

  const [currentVideo, setCurrentVideo] = useState(() => Math.floor(Math.random() * videos.length))
  const [fade, setFade] = useState(false)

  const getRandomVideoIndex = useCallback(
    (exclude: number) => {
      let index
      do {
        index = Math.floor(Math.random() * videos.length)
      } while (index === exclude)
      return index
    },
    [videos]
  )

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const handleEnded = () => {
      setFade(true)
      setTimeout(() => {
        const nextVideo = getRandomVideoIndex(currentVideo)
        setCurrentVideo(nextVideo)
        setFade(false)
      }, 1000)
    }

    videoEl.addEventListener('ended', handleEnded)
    return () => videoEl.removeEventListener('ended', handleEnded)
  }, [currentVideo, getRandomVideoIndex])

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return
    videoEl.src = videos[currentVideo]
    videoEl.play()
  }, [currentVideo, videos])

  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        pointerEvents: 'all',
        padding: '0 2rem',
        position: 'relative'
      }}
    >
      <h2 style={{ fontSize: '3.5rem', margin: '0 0 1rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)', zIndex: 2 }}>
        Exploring the Depths of Our Oceans
      </h2>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: fade ? 0 : 0.4,
          transition: 'opacity 1s ease',
          zIndex: 1
        }}
      />

      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '2rem', zIndex: 2 }}>
        Underwater Marine Agency (UMA) – Pioneering underwater research, conservation, and exploration since 2025.
        <br />
        Speak commands like "home", "about", "services", "explore now", or "exit".
      </p>

      <button
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.3rem',
          background: '#0077be',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,119,190,0.4)',
          zIndex: 2
        }}
        onClick={() => window.location.href = '/explore'}
      >
        Explore Now
      </button>
    </main>
  )
}

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Speech recognition not supported. Use Chrome or Edge.')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = false

    recognition.onresult = (event) => {
      const last = event.results.length - 1
      const command = event.results[last][0].transcript.toLowerCase().trim()
      console.log('Heard:', command)

      // Background color commands
      if (command.includes('blue') || command.includes('ocean')) document.body.style.background = '#0077be'
      if (command.includes('cyan') || command.includes('teal')) document.body.style.background = '#00b7eb'
      if (command.includes('navy') || command.includes('dark')) document.body.style.background = '#004080'

      // Main navigation
      if (command.includes('home') || command.includes('exit')) navigate('/')
      if (command.includes('about')) navigate('/about')
      if (command.includes('services')) navigate('/services')

      // Explore pages
      if (command.includes('explore now') || command.includes('explore menu')) navigate('/explore')
      if (command.includes('meet the team')) navigate('/explore/meet-the-team')
      if (command.includes('research') || command.includes('exploration')) navigate('/explore/research')
      if (command.includes('case studies')) navigate('/explore/case-studies')
      if (command.includes('sites')) navigate('/explore/sites')
      if (command.includes('user stories')) navigate('/explore/user-stories')
    }

    recognition.onerror = (event) => console.error('Speech error:', event.error)
    recognition.start()
    return () => recognition.stop()
  }, [navigate])

  return (
    <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflowY: 'auto', fontFamily: 'system-ui, sans-serif' }}>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#001a33'
        }}
        gl={{ antialias: true }}
      >
        <EmptyScene />
      </Canvas>

      <div style={{ position: 'relative', pointerEvents: 'none', zIndex: 10 }}>
        <Navbar store={store} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Explore pages */}
          <Route path="/explore" element={<ExploreMenu />} />
          <Route path="/explore/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/explore/research" element={<ResearchExploration />} />
          <Route path="/explore/case-studies" element={<CaseStudies />} />
          <Route path="/explore/sites" element={<Sites />} />
          <Route path="/explore/user-stories" element={<UserStories />} />
        </Routes>

        <footer
          style={{
            position: 'relative',
            width: '100%',
            padding: '1.5rem',
            background: 'rgba(0, 26, 51, 0.85)',
            color: '#a0d8ef',
            textAlign: 'center',
            pointerEvents: 'all',
            fontSize: '0.9rem'
          }}
        >
          © 2025 Underwater Marine Agency | Preserving Our Oceans | Contact: info@uma-agency.com
        </footer>
      </div>

      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '1rem 3rem',
          fontSize: '1.5rem',
          background: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
          display: 'none'
        }}
        id="exit-vr-btn"
      >
        EXIT VR
      </button>
    </div>
  )
}
