import './galerieList.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch.js';
import GalerieCard from './GalerieCard.jsx';

const GalerieList = () => {
    const [pictures, setPicture] = useState([]);

    useEffect(() => {
        axios.get(`${FETCH}/galerie`).then((res) => setPicture(res.data));
    }, []);
    console.log(pictures);
    return (
        <div className="galeryList">
            {pictures.map((picture) => (
                <GalerieCard picture={picture} />
            ))}
        </div>

    )
}

export default GalerieList;