import './AdminNav.css';
import Logo from '../../assets/logo_noir.png';
import AdminBurger from './AdminBurger.jsx';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <section>
            <div className="Anavbar">
                <Link to="/"><img src={Logo} id="logo" alt="logo de l'association" /></Link>
                <AdminBurger />
            </div>
        </section>
    )
};

export default Navbar;