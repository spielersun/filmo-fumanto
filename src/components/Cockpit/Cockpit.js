import React from 'react';
import classes from './cockpit.css';
import Auxiliary from '../hoc/Auxiliary';

const cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = classes.Button;

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <Auxiliary>
            <h1>Hi! This is Filmo Fumanto - {props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Movies, movies everywhere...</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </Auxiliary>
    );
}

export default cockpit;