import React from "react";
import './App.css';
import {Form} from "./components/FormClass/Form";
// {Component} we don't need, because it's just a function


export const App = () => {
  return <>
    <div className='form'>div test</div>
    <Form />
  </>
}

// export class App extends Component {
//   render() {
//     return <>
//       <Form />
//     </>
//   }
// }
