import React from "react";
import './App.css';
import {Message} from "./components/FormFunc/Message";
// {Component} we don't need, because it's just a function


export const App = () => {
  return <>
    <div className='form'>div test</div>
    <Message />
  </>
}

// export class App extends Component {
//   render() {
//     return <>
//       <Message />
//     </>
//   }
// }
