import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/components/Menu.scss';

const Menu: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Home' },
    { path: '/events', name: 'Events' },
    { path: '/programme', name: 'Programme' },
    { path: '/school', name: 'The School' },
    { path: '/members', name: 'Members' },
    { path: '/library', name: 'Library' },
    { path: '/recordings', name: 'Recordings' },
  ];

  return (
    <header className="menu">
      <nav className="menu__nav">
        <ul className="menu__list">
          {menuItems.map((item) => (
            <li 
              key={item.path}
              className={`menu__item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <Link to={item.path} className="menu__link">{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;

