import { useNavigate } from 'react-router-dom'

export default function ResearchExploration() {
  const navigate = useNavigate()

  return (
    <main style={{ padding: '2rem', color: '#ffffff', minHeight: '100vh' }}>
      <h2>Research Exploration</h2>
      <p>We will be updating these accordingly</p>

      {/* Return to Explore Menu */}
      <button
        onClick={() => navigate('/explore')}
        aria-label="Return to Explore Menu"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          background: 'rgba(0, 26, 51, 0.9)',
          border: '1px solid #a0d8ef',
          color: '#ffffff',
          padding: '0.8rem 1.4rem',
          borderRadius: '999px',
          cursor: 'pointer',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          boxShadow: '0 6px 20px rgba(0,0,0,0.45)',
          transition: 'transform 0.25s ease, background 0.25s ease'
        }}
        onMouseEnter={e =>
          (e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)')
        }
        onMouseLeave={e =>
          (e.currentTarget.style.transform = 'translateX(-50%) scale(1)')
        }
      >
        <span style={{ fontSize: '1.3rem' }}>⚓</span>
        <span>Return to Explore Menu</span>
      </button>
    </main>
  )
}
