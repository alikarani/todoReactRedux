import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import './components/one/index.js'
import  Aak  from './components/one/index.js';
import Todo from './components/Todo/index'
var c = "end";
// var a="";
var d = {
  name: 'Ali',
  age: 25,
  semester: '3rd',
}

// function tryx() {
//   if (d.name === "Ali" || d.name === "ali") {
//     return <code>AAK</code>;
//   };
// }


// const JSX = "cncncn";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      }
  }
  render() {
    return (
      <div className="App">
      <Todo />
      </div>
    );
  }
}

// const Food = () => {
//   return <h1>ncncnc</h1>
// };
// export class Ali extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="mainDiv">
//       {this.props.nam? <p>{this.props.nam+" bhbhbh "}</p> :<h1>jnvjnvjn</h1>}
//       </div>
//     )
//   }
// }