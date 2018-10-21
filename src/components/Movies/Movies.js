import React, {Component} from 'react';
import classes from './Movies.css';

class Movies extends Component {
    componentWillMount(){
        console.log('[Movies.js] Inside componentWillMount()');
    }
    
    componentDidMount(){
        console.log('[Movies.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Movies.js] Inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE Movies.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Movies.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Movies.js] Inside componentDidUpdate()');
    }

    render(){
        return <div></div>;
    }
}

export default Movies;