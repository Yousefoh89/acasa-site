import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>ACASA</div>
      <ul style={styles.navLinks}>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
  },
};
