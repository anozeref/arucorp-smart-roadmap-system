import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Procurement Planner</h2>

        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/items">Items</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
