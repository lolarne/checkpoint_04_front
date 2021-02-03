import Navbar from './../navbar/Navbar.jsx';
import Footer from './../footer/Footer.jsx';
import { useEffect } from 'react';
import './pages.css';
import Cards from '../galerie/GalerieCard.jsx';
import PostForm from '../galerie/PostForm.jsx';

function Galerie(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <Navbar />
            <Cards />
            <PostForm />
            <Footer />
        </div>
    );
}

export default Galerie;