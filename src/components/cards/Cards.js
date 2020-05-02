import React from 'react';

const Cards = props => {

    return (
        <div className="row">
            <div className="card-container">
                <img className="card-img" src={props.image} alt={props.title}/>
                <h4 className="card-title">{props.title}</h4>
                </div>
            </div>
        
    )
}
export default Cards