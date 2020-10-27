import React from 'react';
import './Person.css';
const person=(props)=>{
return (
    <div className="Person">
        <p onClick={props.demo}>  its {props.name} and my age is {props.age} </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changes} value={props.name}/>
      
        </div>
    )
};
export default person;