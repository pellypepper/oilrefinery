// MyCard.js
import React from 'react';
import './card.css';

const MyCard = ({ img, name, content }) => {
    return (
        <div className="card " id='card-box'>
            <img
                src={img}
                className="card-img-top rounded-0 card-image"
                alt={name}
            />
            <div className="card-body mt-2 " id='card-body'>
                <h3 className="card-title text-title">{name}</h3>
                <p className="card-text text-card">{content}</p>
               
            </div>
            <button className='mb-2 mt-2 rounded'>View Services</button>
           
        </div>
    );
};

export default MyCard;
