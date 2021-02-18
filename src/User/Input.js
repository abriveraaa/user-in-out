import React, { Component } from 'react';
import './User.css';

class Input extends Component {
    render() {
        return(
                <div className="card__element">
                    <p className="card__element--label">Username</p>
                    <input 
                        className="card__element--input"
                        type="text"
                        onChange={this.props.changed}>
                    </input>
                </div>
        );
    }
}

export default Input;