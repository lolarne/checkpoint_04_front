import Navbar from './../navbar/Navbar.jsx';
import Footer from './../footer/Footer.jsx';
import { useEffect } from 'react';
import './pages.css';
import Presentation from '../presentation/Presentation.jsx';
import CarouselHome from '../presentation/Carousel.jsx';

function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <Navbar />
            <CarouselHome />
            <Presentation />
            <Footer />
        </div>
    );
}

export default Home;