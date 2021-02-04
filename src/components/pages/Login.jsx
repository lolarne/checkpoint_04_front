import { useEffect } from 'react';
import './pages.css';
import AdminNav from '../AdminNav/AdminNav.jsx';

function Login(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <AdminNav />
            <h1 className="titleLogin">Section Administrateur</h1>
        </div>
    );
}

export default Login;