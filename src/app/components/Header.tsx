import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <nav className="header">
            <NavLink
                to="/home"
                className="header__item"
                activeClassName="header__item--active"
            >
                HOME
            </NavLink>
            <NavLink
                to="/buggy-page"
                className="header__item"
                activeClassName="header__item--active"
            >
                BUGGY PAGE
            </NavLink>
        </nav>
    );
};

export default Header;
