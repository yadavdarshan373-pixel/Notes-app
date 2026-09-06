import './header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="brand-wrap">
        <div className="brand-mark">N</div>
        <div className="brand-text">
          <span className="brand-kicker">Workspace</span>
          <h1 className="header-title">Notes App</h1>
        </div>
      </div>

      <nav className="header-nav" aria-label="Main navigation">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">Recent</a>
        <a href="#" className="nav-link">Favorites</a>
      </nav>

      <span className="header-badge">12 notes</span>
    </header>
  );
}

export default Header;

