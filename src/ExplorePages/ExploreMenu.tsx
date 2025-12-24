import { useNavigate } from 'react-router-dom'

export default function ExploreMenu() {
  const navigate = useNavigate()

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    margin: '0.8rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: '#0077be',
    color: 'white',
    transition: 'all 0.3s'
  }

  return (
    <main style={{ minHeight: '100vh', background: '#001a33', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Explore Menu</h1>

      <button style={buttonStyle} onClick={() => navigate('/explore/meet-the-team')}>
        Meet the Team
      </button>

      <button style={buttonStyle} onClick={() => navigate('/explore/research')}>
        Exploration / Research
      </button>

      <button style={buttonStyle} onClick={() => navigate('/explore/case-studies')}>
        Case Studies
      </button>

      <button style={buttonStyle} onClick={() => navigate('/explore/sites')}>
        Sites
      </button>

      <button style={buttonStyle} onClick={() => navigate('/explore/user-stories')}>
        User Stories
      </button>
    </main>
  )
}
