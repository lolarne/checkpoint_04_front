import axios from 'axios';
import { useState, useEffect } from 'react';
import { FETCH } from '../../Fetch.js';
import './newGalerie.css';

const NewGalerie = () => {
    const [illustration, setIllustration] = useState([]);

    useEffect(() => {
        axios.get(`${FETCH}/galerie/new`).then((res) => setIllustration(res.data));
    }, []);

    const handleAccept = (e, item) => {
        e.preventDefault();
        axios.put(`${FETCH}/galerie/${item}`)
    }

    const handleDelete = (e, item) => {
        e.preventDefault();
        axios.delete(`${FETCH}/galerie/delete/${item}`)
    }

    return (
        <div className="NewgaleryCard">
            {illustration.map((item) => (
                <div className="card">
                    <div>
                        <div className="img"><img src={item.img} /></div>
                        <p>Titre : {item.name}</p>
                        <p>Catégorie : {item.category}</p>
                        <p>Matériel : {item.material}</p>
                        <p>Couleur (1 = oui; 0 = Noir & Blanc) : {item.color}</p>
                        <p>Date : {item.date_creation}</p>
                        
                    </div>
                    <div className="btn">
                        <button type="button" onClick={(e) => handleAccept(e, item.id)}>Ajouter</button>
                        <button type="button" onClick={(e) => handleDelete(e, item.id)}>Supprimer</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewGalerie;