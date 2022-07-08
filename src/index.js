import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MusicList from "./components/MusicList";
import { ButtonsTimer } from "./components/ButtonsTimer"
import { MusicApi } from "./components/MusicApi"
import { Provider } from 'react-redux'
import store from './store'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
      <MusicList />
      <ButtonsTimer />
      <button className="button" role="button" onClick={MusicApi}><span className="text">Soumettre</span></button>
    <App />
  </Provider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <MusicList />
//     </React.StrictMode>
// );
//import { StrictMode } from "react";
//import ReactDOM from "react-dom";
//
//import App from "./App";
//
//const rootElement = document.getElementById("root");
//ReactDOM.render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//  rootElement
//);
