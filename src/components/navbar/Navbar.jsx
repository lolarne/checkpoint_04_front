import './Navbar.css';
import Logo from '../../assets/logo_noir.png';
import Burger from './Burger.jsx';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <section>
            <div className="navbar">
                <Link to="/"><img src={Logo} id="logo" alt="logo de l'association" /></Link>
                <Burger />
            </div>
        </section>
    )
};

export default Navbar;