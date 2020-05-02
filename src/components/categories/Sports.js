import React from 'react';

const Sports = props => {

    return (
        <div className="row">
            <div className="sports">
                <div className="cat-icon">{props.icon} </div>
                <h5 className="cat-title">{props.title}</h5>
            </div>
        </div>
    )
}
export default Sports