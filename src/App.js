// import React,{ Component} from 'react';
import './App.css';
import { render } from 'react-dom';
import React , { Component } from 'react';
import Person from './Person/Person';
import person from './Person/Person';
class App extends Component{
  state={
    persons:[
      {name:'Akshay',age: 28},
      {name:'rushali',age:29},
      {name:'Dhanush',age:22}
    ],
    otherState:'some other value',
    showPerson=== true
  }
  switchNameHandler=(event)=>{
    //document.write("index.js")
    this.setState({
      persons:[

      {name:'akshay',age: 2899},
      {name:event.target.value ,age:65},
      {name:'Dhanush',age:232}

      ]
    })
  }

  togglep=()=>{
    const show=this.state.showPerson;
    this.setState({showPerson:!show});
    
    
  }
  render(){
    const  style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

  
    return(
     <div className="App">
        <h1>its akshay</h1>
        <button 
        style={style}
        onClick={this.togglep}>Name Handling</button>
       { this.state.showPerson=== true?
       <div > 
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
               />
        <Person 
        name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         demo={this.switchNameHandler.bind(this,'dumakka')} 
         changes={this.switchNameHandler}
         />
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
        >hobbies: binging</Person>

      </div> : null
      }
      </div>

    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Akshayyyy'));
  }
}

export default App;
