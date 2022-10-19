import React from 'react';
import './CardPequeno.css';


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
                <h4>E-mail: {props.email}</h4>
                <p>Endereço: {props.endereco}</p>
            </div>
        </div>

    );
}

export default CardPequeno;
