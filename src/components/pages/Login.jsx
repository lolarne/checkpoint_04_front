import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './pages.css';
import LoginForm from '../admin/LoginForm.jsx';
import PostForm from '../galerie/PostForm.jsx';
import NewGalerie from '../admin/NewGalerie.jsx';

function Login(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <button><Link to="/">Retour page d'Accueil</Link></button>
            <LoginForm />
            <NewGalerie />
            <PostForm />
        </div>
    );
}

export default Login;