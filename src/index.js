import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MusicList from "./components/MusicList";
import { ButtonsTimer } from "./components/ButtonsTimer"
import { MusicApi } from "./components/MusicApi"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MusicList />
        <ButtonsTimer />
        <button className="button" role="button" onClick={MusicApi}><span className="text">Soumettre</span></button>
    </React.StrictMode>
);
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
