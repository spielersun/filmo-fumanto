import React from 'react';
import classes from './Person.css';

const person = (props) => {
    //const rnd = Math.random()
    //if (rnd > 0.7){
    //    throw new Error('Too high!');
    //}

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;