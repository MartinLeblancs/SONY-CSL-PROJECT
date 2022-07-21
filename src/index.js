import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MusicList from "./components/MusicList";
import { ButtonsTimer } from "./components/ButtonsTimer";
import { MusicApi } from "./components/MusicApi";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MusicList />
        <ButtonsTimer />
        <button className="button" onClick={MusicApi} style={{ top: 0, margin: "auto" }}>
            {" "}
            <span className="text">Soumettre</span>
        </button>
    </React.StrictMode>
);
