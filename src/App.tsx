import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'

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
        setCurrentVideo(getRandomVideoIndex(currentVideo))
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
        padding: '0 2rem',
        position: 'relative'
      }}
    >
      <h2 style={{ fontSize: '3.5rem', zIndex: 2 }}>
        Exploring the Depths of Our Oceans
      </h2>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: fade ? 0 : 0.4,
          transition: 'opacity 1s ease',
          zIndex: 1
        }}
      />

      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '2rem', zIndex: 2 }}>
        Underwater Marine Agency (UMA) – Pioneering underwater research since 2025.
      </p>

      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '2rem', zIndex: 2 }}>
        Voice Recognition - Speak commands like "Explore", "About", "Services", "home" , and more to navigate!
      </p>

      <button
        onClick={() => window.location.href = '/explore'}
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.3rem',
          background: '#0077be',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          zIndex: 2
        }}
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
    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()
    recognition.continuous = true

    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase()

      if (command.includes('home') || command.includes('exit')) navigate('/')
      if (command.includes('about')) navigate('/about')
      if (command.includes('services')) navigate('/services')
      if (command.includes('explore') || command.includes('explore menu') || command.includes('return')) navigate('/explore')
      if (command.includes('meet the team')) navigate('/explore/meet-the-team')
      if (command.includes('research')) navigate('/explore/research')
      if (command.includes('case studies')) navigate('/explore/case-studies')
      if (command.includes('sites')) navigate('/explore/sites')
      if (command.includes('user stories')) navigate('/explore/user-stories')

      if (command.includes('donate')) {
        try {
           window.open('https://gogetfunding.com/uma-underwater-marine-agency/', '_blank')
        } catch {
          alert('Please allow pop-ups for this site to open Donate page automatically.')
        }
      }

    }

    recognition.start()
    return () => recognition.stop()
  }, [navigate])

  return (
    <div style={{ width: '100vw', minHeight: '100vh', fontFamily: 'system-ui' }}>
      {/* Background Canvas (no pointer events) */}
      <Canvas
        style={{
          position: 'fixed',
          inset: 0,
          background: '#001a33',
          pointerEvents: 'none'
        }}
      >
        <EmptyScene />
      </Canvas>

      {/* UI Layer (clickable) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar store={store} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/explore" element={<ExploreMenu />} />
          <Route path="/explore/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/explore/research" element={<ResearchExploration />} />
          <Route path="/explore/case-studies" element={<CaseStudies />} />
          <Route path="/explore/sites" element={<Sites />} />
          <Route path="/explore/user-stories" element={<UserStories />} />
        </Routes>
      </div>
    </div>
  )
}
