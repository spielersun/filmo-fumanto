import React,{Component} from 'react';
import classes from './Person.css';

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
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
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

export default Person;