import React from 'react';
import './userOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hi! {props.userName} how re u?</p>
            <p>Hexagon is one, one is an Octagon</p>
        </div>
    );
};

export default userOutput;