import Navbar from './../navbar/Navbar.jsx';
import Footer from './../footer/Footer.jsx';
import { useEffect } from 'react';
import './pages.css';

function Galerie(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <Navbar />
            <Footer />
        </div>
    );
}

export default Galerie;