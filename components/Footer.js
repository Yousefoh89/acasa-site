export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 ACASA Real Estate. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    padding: '24px',
    textAlign: 'center',
  },
  text: {
    color: '#f2f2f2',
    fontSize: '14px',
  },
};
