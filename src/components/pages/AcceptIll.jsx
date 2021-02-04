import { useEffect } from 'react';
import './pages.css';
import NewGalerie from '../admin/NewGalerie.jsx';
import AdminNav from '../AdminNav/AdminNav.jsx';

function AcceptIll(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <AdminNav />
            <NewGalerie />
        </div>
    );
}

export default AcceptIll;