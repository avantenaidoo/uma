export default function About() {
  return (
    <section
      id="about-section"
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
      <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>About UMA</h2>
      <p style={{ fontSize: '1.4rem', maxWidth: '800px', lineHeight: 1.8 }}>
        The Underwater Marine Agency (UMA) is dedicated to the preservation, research, and sustainable exploration of our world's oceans. Founded in 2025, we combine cutting-edge technology, scientific expertise, and community engagement to protect marine ecosystems for future generations.
        <br /><br />
        Our mission includes deep-sea mapping, marine biodiversity studies, conservation initiatives, and public education programs. Through innovative VR experiences and voice-enabled tools, we bring the wonders of the underwater world to everyone.
      </p>
    </section>
  )
}