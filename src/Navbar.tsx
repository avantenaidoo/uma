import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navButtonStyle = {
  background: 'transparent',
  border: '1px solid #a0d8ef',
  color: '#ffffff',
  padding: '0.6rem 1.2rem',
  marginLeft: '1rem',
  cursor: 'pointer',
  borderRadius: '6px',
  transition: 'all 0.3s'
}

type Store = {
  enterVR: () => void
}

interface NavbarProps {
  store: Store
}

export default function Navbar({ store }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <header
      style={{
        background: 'rgba(0, 26, 51, 0.85)',
        backdropFilter: 'blur(12px)',
        padding: '1rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffffff',
        pointerEvents: 'all',
        position: 'sticky',
        top: 0,
        zIndex: 20,
        flexWrap: 'wrap'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <img
          src="/umalogo3.jpeg"
          alt="Underwater Marine Agency Logo"
          style={{ height: '60px', marginRight: '1rem' }}
        />
        <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 600 }}>
          Underwater Marine Agency
        </h1>
      </div>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'nav-open' : ''}>
        <button style={navButtonStyle} onClick={() => goTo('/')}>
          Home
        </button>

        <button style={navButtonStyle} onClick={() => goTo('/about')}>
          About
        </button>

        <button style={navButtonStyle} onClick={() => goTo('/services')}>
          Services
        </button>

        {/* Explore — SAME STYLE AS OTHERS */}
        <button style={navButtonStyle} onClick={() => goTo('/explore')}>
          Explore
        </button>

        <button
          style={{ ...navButtonStyle, background: '#00b7eb', border: 'none' }}
          onClick={() => store.enterVR()}
        >
          Enter VR
        </button>

        <button
          style={{ ...navButtonStyle, background: '#005f8f', border: 'none' }}
          onClick={() => goTo('/')}
        >
          Voice Recognition
        </button>

        <button
          style={{ ...navButtonStyle, background: '#ff9900', border: 'none' }}
          onClick={() =>
            window.open(
              'https://gogetfunding.com/uma-underwater-marine-agency/',
              '_blank'
            )
          }
        >
          Donate
        </button>
      </nav>

      <style>{`
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
            order: 2;
          }

          nav {
            flex-direction: column;
            width: 100%;
            display: none;
            margin-top: 1rem;
            order: 3;
          }

          nav.nav-open {
            display: flex;
          }

          nav button {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </header>
  )
}
