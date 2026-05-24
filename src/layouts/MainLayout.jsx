import { Outlet, NavLink } from "react-router-dom";
import { Box, Home, Package, MapPin, Settings, Info } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <Box size={20} />
          </div>

          <div className="sidebar-brand-text">
            <p>ARUCORP</p>
            <span>Sistem Roadmap Pintar</span>
          </div>
        </div>

        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <Home size={18} />
            </span>
            Beranda
          </NavLink>
          <NavLink to="/items" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <Package size={18} />
            </span>
            Daftar Item
          </NavLink>
          <NavLink to="/roadmap" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <MapPin size={18} />
            </span>
            Roadmap
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <Settings size={18} />
            </span>
            Pengaturan
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">
              <Info size={18} />
            </span>
            Tentang
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
