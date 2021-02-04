import { useEffect } from 'react';
import './pages.css';
import AdminNav from '../AdminNav/AdminNav.jsx';
import OldGalerie from '../admin/OldGalerie.jsx';

function ManageIll(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <AdminNav />
            <OldGalerie />
        </div>
    );
}

export default ManageIll;