import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '132123', name: 'Sun', age: 32},
      {id: '2434sdf', name: 'Leia', age: 19},
      {id: 'sfdsf5667', name: 'Jack', age: 26}
    ],
    otherState: 'some value',
    showPersons: false
  };
  
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
      //style[':hover'] = {
      //  backgroundColor: 'salmon',
      //  color: 'black'
      //}
    }
    
    const assignedClasses = [];

    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
      //<StyleRoot>
        <div className={classes.App}>
          <h1>Hi! This is Filmo Fumanto</h1>
          <p className={assignedClasses.join(' ')}>Movies, movies everywhere...</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      //</StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello'));
  }
}

export default App;
