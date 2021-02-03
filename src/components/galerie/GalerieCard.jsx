import './galerieCard.css';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {FETCH} from '../../Fetch.js';

const GalerieCard = () =>{
    const [illustration, setIllustration] = useState([]);

    useEffect(()=>{
        axios.get(`${FETCH}/galerie`).then((res)=> setIllustration(res.data));
    }, []);

    return(
        <div className="galeryCard">
            {illustration.map((picture)=>(
                <p>{picture.name}{picture.category}</p>
            ))}
        </div>
    )
}

export default GalerieCard;