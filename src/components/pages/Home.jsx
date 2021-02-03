import Navbar from './../navbar/Navbar.jsx';
import { useEffect } from 'react';
import './pages.css';

function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <Navbar />
        </div>
    );
}

export default Home;