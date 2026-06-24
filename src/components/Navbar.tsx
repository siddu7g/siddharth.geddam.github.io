import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/coast-autonomous', label: 'COAST' },
  { to: '/ml-projects', label: 'ML / AI' },
  { to: '/robotics', label: 'Robotics & UAV' },
];

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-text">SG</span>
        </NavLink>

        <div className="navbar-links">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
