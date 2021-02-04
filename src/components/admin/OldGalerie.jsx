import axios from 'axios';
import { useState, useEffect } from 'react';
import { FETCH } from '../../Fetch.js';
import './oldGalerie.css';

const OldGalerie = () => {
    const [illustration, setIllustration] = useState([]);

    useEffect(() => {
        axios.get(`${FETCH}/galerie`).then((res) => setIllustration(res.data));
    }, [illustration]);

    const handleDelete = (e, item) => {
        e.preventDefault();
        axios.delete(`${FETCH}/galerie/delete/${item}`)
    }

    return (
        <div className="OldgaleryCard">
            {illustration.map((item) => (
                <div className="card">
                    <div className="img"><img src={item.img} /></div>
                    <div className="text">
                        <p>Titre : {item.name}</p>
                        <p>Catégorie : {item.category}</p>
                        <p>Matériel : {item.material}</p>
                        <p>Couleur (1 = oui; 0 = Noir & Blanc) : {item.color}</p>
                        <p>Date : {item.date_creation}</p>
                    </div>

                    <button type="button" onClick={(e) => handleDelete(e, item.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    )
}

export default OldGalerie;