import { useNavigate } from 'react-router-dom'

export default function MeetTheTeam() {
  const navigate = useNavigate()

  return (
    <main
      style={{
        padding: '2rem 1rem',
        color: '#ffffff',
        minHeight: '100vh',
        paddingBottom: '140px', // space for fixed button
      }}
    >
      <h1
        style={{
          fontSize: '2.6rem',
          textAlign: 'center',
          margin: '0 0 2.5rem',
          color: '#a0d8ef',
          textShadow: '0 0 12px rgba(160, 216, 239, 0.3)',
        }}
      >
        Meet the Explorers
      </h1>

      {/* Horizontal row of slim cards - no backgrounds */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          scrollBehavior: 'smooth',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="hide-scrollbar"
      >
        {/* Founder & Chief Oceanographer */}
        <div
          style={{
            flex: '0 0 320px',
            borderRadius: '14px',
            padding: '1.4rem',
            border: '1px solid rgba(160, 216, 239, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
          }}
        >
          <h3
            style={{
              fontSize: '1.4rem',
              margin: '0 0 0.6rem',
              color: '#a0d8ef',
            }}
          >
            Founder & Chief Oceanographer
          </h3>
          <p
            style={{
              fontStyle: 'italic',
              color: '#88c0d0',
              fontSize: '0.95rem',
              margin: '0 0 0.8rem',
            }}
          >
            The visionary who dared to look deeper.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Has spent over 15 years mapping uncharted abyssal plains and discovering new species.
            <br /><br />
            Mantra: <em>"The ocean isn't hiding secrets — it's waiting for us to ask the right questions."</em>
            <br /><br />
            Inspires the next generation to protect our blue planet.
          </p>
        </div>

        {/* Expedition Leader & Dive Master */}
        <div
          style={{
            flex: '0 0 320px',
            borderRadius: '14px',
            padding: '1.4rem',
            border: '1px solid rgba(160, 216, 239, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
          }}
        >
          <h3
            style={{
              fontSize: '1.4rem',
              margin: '0 0 0.6rem',
              color: '#a0d8ef',
            }}
          >
            Expedition Leader & Dive Master
          </h3>
          <p
            style={{
              fontStyle: 'italic',
              color: '#88c0d0',
              fontSize: '0.95rem',
              margin: '0 0 0.8rem',
            }}
          >
            The steady hand behind every descent.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Thousands of hours underwater, turning chaos into routine.
            <br /><br />
            Ensures safe returns with groundbreaking data.
            <br /><br />
            Quote: <em>"We don't conquer the deep; we earn its trust, one careful step at a time."</em>
          </p>
        </div>

        {/* Marine Biologist & Biodiversity Lead */}
        <div
          style={{
            flex: '0 0 320px',
            borderRadius: '14px',
            padding: '1.4rem',
            border: '1px solid rgba(160, 216, 239, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
          }}
        >
          <h3
            style={{
              fontSize: '1.4rem',
              margin: '0 0 0.6rem',
              color: '#a0d8ef',
            }}
          >
            Marine Biologist & Biodiversity Lead
          </h3>
          <p
            style={{
              fontStyle: 'italic',
              color: '#88c0d0',
              fontSize: '0.95rem',
              margin: '0 0 0.8rem',
            }}
          >
            The living encyclopedia of the abyss.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Passion for bioluminescence and extremophiles led to new species discoveries.
            <br /><br />
            Sketches glowing jellyfish at 3 a.m. — inspiration never sleeps.
          </p>
        </div>

        {/* Data Scientist & AI Navigation Specialist */}
        <div
          style={{
            flex: '0 0 320px',
            borderRadius: '14px',
            padding: '1.4rem',
            border: '1px solid rgba(160, 216, 239, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
          }}
        >
          <h3
            style={{
              fontSize: '1.4rem',
              margin: '0 0 0.6rem',
              color: '#a0d8ef',
            }}
          >
            Data Scientist & AI Navigation Specialist
          </h3>
          <p
            style={{
              fontStyle: 'italic',
              color: '#88c0d0',
              fontSize: '0.95rem',
              margin: '0 0 0.8rem',
            }}
          >
            The wizard who turns data into stories.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Built voice-recognition navigation for the team and subs.
            <br /><br />
            Goal: Make ocean mysteries accessible to everyone.
          </p>
        </div>

        {/* Photographer & Visual Storyteller */}
        <div
          style={{
            flex: '0 0 320px',
            borderRadius: '14px',
            padding: '1.4rem',
            border: '1px solid rgba(160, 216, 239, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
          }}
        >
          <h3
            style={{
              fontSize: '1.4rem',
              margin: '0 0 0.6rem',
              color: '#a0d8ef',
            }}
          >
            Photographer & Visual Storyteller
          </h3>
          <p
            style={{
              fontStyle: 'italic',
              color: '#88c0d0',
              fontSize: '0.95rem',
              margin: '0 0 0.8rem',
            }}
          >
            The artist capturing the deep's impossible beauty.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Images of midnight zones and vents featured worldwide.
            <br /><br />
            Pro tip: Never challenge to an underwater silence contest.
          </p>
        </div>
      </div>

      {/* Hide scrollbar for Webkit browsers */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        style={{
          textAlign: 'center',
          margin: '3rem 0 5rem',
          fontSize: '1.5rem',
          fontStyle: 'italic',
          color: '#a0d8ef',
        }}
      >
        Team Motto<br />
        <strong style={{ fontSize: '1.7rem', display: 'block', marginTop: '0.6rem' }}>
          "Descend to discover. Rise to protect."
        </strong>
      </div>

      {/* Return to Explore Menu - untouched */}
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
        onMouseEnter={e => (e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'translateX(-50%) scale(1)')}
      >
        <span style={{ fontSize: '1.3rem' }}>⚓</span>
        <span>Return to Explore Menu</span>
      </button>
    </main>
  )
}