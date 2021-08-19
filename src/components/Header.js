import '../Style/Header.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  const createLinks = () => links.map((link) => (
    <li key={link.id}>
      <NavLink
        to={link.path}
        activeClassName="active-link"
        exact
      >
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <header>
      <h1> Math Magicians </h1>
      <nav>
        <ul>
          {createLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
