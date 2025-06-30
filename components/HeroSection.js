export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Discover Your Next Home</h1>
        <p style={styles.subheading}>ACASA — Where modern living meets timeless design</p>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '80vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    position: 'relative',
  },
  overlay: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '30px',
    borderRadius: '12px',
  },
  heading: {
    fontSize: '48px',
    margin: 0,
    fontWeight: 700,
  },
  subheading: {
    fontSize: '20px',
    marginTop: '12px',
  },
};
