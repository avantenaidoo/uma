export default function Services() {
  return (
    <section
      id="services-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'rgba(0, 26, 51, 0.7)'
      }}
    >
      <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Our Services</h2>
      <p style={{ fontSize: '1.4rem', maxWidth: '800px', lineHeight: 1.8 }}>
        UMA offers a comprehensive range of underwater services including:
        <br /><br />
        - Advanced deep-sea exploration and mapping
        - Marine ecosystem assessment and monitoring
        - Sustainable resource extraction consulting
        - Underwater infrastructure inspection and maintenance
        - Conservation project management and implementation
        - VR/AR educational experiences for schools and research
        <br /><br />
        Speak "home" to return to the main page or "exit" to leave VR.
      </p>
    </section>
  )
}