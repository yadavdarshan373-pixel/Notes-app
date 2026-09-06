function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="footer-brand">Notes App</p>
        <p className="footer-copy">Created by Darshan Yadav</p>
        <p className="footer-meta">Built with React & Django</p>
        <a
          href="https://github.com/yadavdarshan373-pixel"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          GitHub Profile
        </a>
      </div>
      <p className="footer-line">© 2026 Notes App | v1.0</p>
    </footer>
  );
}

export default Footer;