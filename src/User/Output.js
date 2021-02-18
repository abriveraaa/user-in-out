import React from 'react';
import './User.css';

const Output = (props) => {
    return(
        <div className="card__element">
            <p className="card__element--label">Text</p>
            <textarea className="card__element--text" value={ props.paragraph } readOnly></textarea>
        </div>
    );
}

export default Output;