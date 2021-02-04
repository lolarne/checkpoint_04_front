import './galerieList.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch.js';
import Cards from './GalerieCard.jsx';

const GalerieList = () => {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios.get(`${FETCH}/galerie`).then((res) => setPicture(res.data));
    }, []);

    return (
        <div className="Galery">
            <div className="galeryCard">
                {picture.map((picture) => (
                    <Cards picture={picture}/>
                ))}
            </div>
        </div>

    )
}

export default GalerieList;