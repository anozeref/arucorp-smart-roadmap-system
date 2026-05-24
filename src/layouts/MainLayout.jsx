import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <i className="fab fa-amazon"></i>
          </div>

          <div className="sidebar-brand-text">
            <p>ARUCORP</p>
            <span>Smart Roadmap System</span>
          </div>
        </div>

        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <i className="fab fa-creative-commons"></i>
            </span>
            Dashboard
          </NavLink>
          <NavLink to="/items" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <i className="fab fa-dropbox"></i>
            </span>
            Items
          </NavLink>
          <NavLink to="/roadmap" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <i className="fab fa-creative-commons-by"></i>
            </span>
            Roadmap
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <i className="fab fa-opencart"></i>
            </span>
            Settings
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
