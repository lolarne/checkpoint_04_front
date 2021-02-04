import { useEffect } from 'react';
import './pages.css';
import PostForm from '../galerie/PostForm.jsx';
import AdminNav from '../AdminNav/AdminNav.jsx';

function AddIll(){
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <div className="page">
            <AdminNav />
            <PostForm />
        </div>
    );
}

export default AddIll;