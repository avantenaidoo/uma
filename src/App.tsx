import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
  const navigate = useNavigate()
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

    let playPromise: Promise<void> | undefined
    try {
      playPromise = videoEl.play()
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err instanceof Error && err.name === 'AbortError') {
            return
          }
          console.error('Unexpected video play error:', err)
        })
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        return
      }
      console.error('Sync play error:', err)
    }

    return () => {
      if (videoEl.src === videos[currentVideo]) {
        videoEl.pause()
      }
      videoEl.src = ''
    }
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
        padding: 0,
        margin: 0,
        position: 'relative',
      }}
    >
      <h2 style={{ fontSize: '3.5rem', zIndex: 2, position: 'relative' }}>
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
          zIndex: 1,
        }}
      />

      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '2rem', zIndex: 2, position: 'relative' }}>
        Underwater Marine Agency (UMA) – Pioneering underwater research since 2025.
      </p>

      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '2rem', zIndex: 2, position: 'relative' }}>
        Voice Recognition - Speak commands like "Explore", "About", "Services", "home", and more to navigate!
      </p>

      <button
        onClick={() => navigate('/explore')}
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.3rem',
          background: '#0077be',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          zIndex: 20,
          position: 'relative',
        }}
      >
        Explore Now
      </button>
    </main>
  )
}

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showFooter, setShowFooter] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      setShowFooter(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setShowFooter(false), 0)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div style={{ width: '100%', minHeight: '100vh', fontFamily: 'system-ui', overflowY: 'auto', margin: 0, padding: 0 }}>
      <Canvas
        style={{
          position: 'fixed',
          inset: 0,
          background: '#001a33',
          pointerEvents: 'none',
        }}
      >
        <EmptyScene />
      </Canvas>

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', paddingBottom: '100px' }}>
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

        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            boxSizing: 'border-box',
            padding: '1.5rem',
            background: 'rgba(0, 26, 51, 0.85)',
            color: '#a0d8ef',
            fontSize: '0.9rem',
            display: showFooter ? 'block' : 'none',
            textAlign: 'center',
            pointerEvents: 'all',
            zIndex: 50,
            margin: 0,
          }}
        >
          © 2025 Underwater Marine Agency | Preserving Our Oceans | Contact: umainternational@icloud.com
          <br />
          <a
            href="https://github.com/avantenaidoo/uma.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a0d8ef', marginTop: '0.5rem', display: 'inline-block' }}
            aria-label="GitHub"
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: 'middle' }}
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </footer>
      </div>
    </div>
  )
}