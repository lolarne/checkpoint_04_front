import './galerieCard.css';
import React from 'react';

const GalerieCard = (props) => {

    const { picture } = props;

    const date = picture.date_creation.substring(0, 10);

    return (
        <div className="galeryCard">
            <div>
                <div><img src={picture.img} /></div>
                <div>
                    <h2>{picture.name}</h2>
                    <p>Catégorie : {picture.category}</p>
                    <p>Matériel : {picture.material}</p>
                    <p>Date de création : {date}</p>
                </div>
            </div>
        </div>

    )
}

export default GalerieCard;