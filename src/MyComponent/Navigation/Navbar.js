import './Navbar.css';
import NavLogo from './NavLogo';
import NavSearch from './NavSearch';
import Navigation from './Navigation';

const Navbar = () =>{
    return (
        <div className="navbar">
            <NavLogo />
            <NavSearch />
            <Navigation />
        </div>
    )
}

export default Navbar;