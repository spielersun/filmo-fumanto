import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
//import WithClass from '../../../hoc/WithClass';
import Auxiliary from '../hoc/Auxiliary';
import withClassAlter from '../hoc/withClassAlter';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Contstructor()', props);
    }
    
    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }
    
    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
    }

    componentWillUnmount() {
        console.log('I\'m about to be removed!');
    }

    render (){
        console.log('[Person.js] Inside render()');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxiliary>
        )
    }
}

//const person = (props) => {
//    return (
//        <div className={classes.Person}>
//            <p onClick={props.click}>I'm a {props.name} and {props.age} years old!</p>
//            <p>{props.children}</p>
//            <input type="text" onChange={props.changed} value={props.name}/>
//        </div>
//    )
//};

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClassAlter(Person, classes.Person);