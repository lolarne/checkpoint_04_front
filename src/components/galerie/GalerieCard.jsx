import './galerieCard.css';
import React from 'react';

const GalerieCard = (props) => {

    const {picture} = props;

    return (
        <div className="Galery">
            <div className="galeryCard">
                <div className="card">
                    <div className="picture"><img src={picture.img} /></div>
                    <div className="description">
                        <h2>{picture.name}</h2>
                        <p>Catégorie : {picture.category}</p>
                        <p>Matériel : {picture.material}</p>
                        <p>Date de création : {picture.date_creation}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GalerieCard;