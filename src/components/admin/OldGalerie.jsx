import axios from 'axios';
import { useState, useEffect } from 'react';
import { FETCH } from '../../Fetch.js';

const OldGalerie = () => {
    const [illustration, setIllustration] = useState([]);

    useEffect(() => {
        axios.get(`${FETCH}/galerie`).then((res) => setIllustration(res.data));
    }, []);

    const handleDelete = (e, item) => {
        e.preventDefault();
        axios.delete(`${FETCH}/galerie/delete/${item}`)
    }

    return (
        <div className="galeryCard">
            {illustration.map((item) => (
                <div>
                    <p>{item.name}{item.category}</p>
                    <button type="button" onClick={(e) => handleDelete(e, item.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    )
}

export default OldGalerie;