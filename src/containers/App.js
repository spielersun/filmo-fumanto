import React, { PureComponent } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Contstructor()', props);

    this.state = {
      persons: [
        {id: '132123', name: 'Sun', age: 32},
        {id: '2434sdf', name: 'Leia', age: 19},
        {id: 'sfdsf5667', name: 'Jack', age: 26}
      ],
      otherState: 'some value',
      showPersons: false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState){
    // console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    // return nextState.persons !== this.state.persons ||
    //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  //state = {
  //  persons: [
  //    {id: '132123', name: 'Sun', age: 32},
  //    {id: '2434sdf', name: 'Leia', age: 19},
  //    {id: 'sfdsf5667', name: 'Jack', age: 26}
  //  ],
  //  otherState: 'some value',
  //  showPersons: false
  //};
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }  

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //const persons = this.state.person.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // bind is preferred
  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );

      //style[':hover'] = {
      //  backgroundColor: 'salmon',
      //  color: 'black'
      //}
    }
    
    return (
      //<StyleRoot>
        <div className={classes.App}>
          <button onClick={()=> {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
      //</StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello'));
  }
}

export default App;
