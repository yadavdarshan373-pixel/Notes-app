import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="app-sidebar" aria-label="Sidebar navigation">
      <h3 className="sidebar-title">Menu</h3>
      <ul>
        <li>Notes</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
}

export default Sidebar;