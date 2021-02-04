import './galerieCard.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch.js';

const GalerieCard = () => {
    const [illustration, setIllustration] = useState([]);

    useEffect(() => {
        axios.get(`${FETCH}/galerie`).then((res) => setIllustration(res.data));
    }, []);

    return (
        <div className="Galery">
            <div className="galeryCard">
                {illustration.map((picture) => (
                    <div className="card">
                        <div className="picture"><img src={picture.img} /></div>
                        <div className="description">
                            <h2>{picture.name}</h2>
                            <p>Catégorie : {picture.category}</p>
                            <p>Matériel : {picture.material}</p>
                            <p>Date de création : {picture.date_creation}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    )
}

export default GalerieCard;