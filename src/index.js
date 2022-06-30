import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MusicList from "./components/MusicList";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MusicList />
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
