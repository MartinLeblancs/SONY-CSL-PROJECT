// import React, {Component} from "react"
// import HeaderWeb from "./components/HeaderWeb"
// import LanguageButton from "./components/LanguageButton"
// import MusicList from "./components/MusicList"
// import MusicApi from "./components/MusicApi"
// import ShareButton from "./components/ShareButton"
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={{
//         backgroundImage: "url(/background.jpg)",
//         width: '100vw',
//         height: '100vh',
//         // margin: 0,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: 'cover'
//       }}>
//       <div style={{
//         flex: 1
//       }}>
//       </div>
//       <div style={{
//         flex: 2
//       }}>
//           <p>test</p>
//
//       </div>
//         {/* <header className="App-header">
//           <p>
//             Edit <code>src/App.js</code> and save to reload (test).
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//         {/* <body>
//         </body> */}
//       </div>
//     )
//   }
// }
//
// export default App;

import "./App.css";
import { useRef, useState } from "react";
import PianoRoll from "react-piano-roll";
import {MusicApi} from "./components/MusicApi";

export default function App() {
  const [state, setState] = useState(0);
  const playbackRef = useRef();
  window.addEventListener("keydown", ({ key }) => {
    if (playbackRef.current === undefined) {
      return;
    } else if (key === " ") {
      playbackRef.current.toggle();
    } else if (key === "Enter") {
      playbackRef.current.seek("0:0:0");
    }
  });
  return (
      <>
      <MusicApi></MusicApi>
        <div className="App">
      <PianoRoll
        width={810}
        height={400}
        zoom={6}
        // resolution={2}
        gridLineColor={0x333333}
        blackGridBgColor={0x1e1e1e}
        whiteGridBgColor={0x282828}
        noteData={[
          ["0:0:0", "C4", "2n"],
          ["0:0:0", "D4", "2n"],
          ["0:0:0", "E4", "2n"],
          ["0:2:0", "B4", "4n"],
          ["0:3:0", "A#4", "4n"]
        ]}
        ref={playbackRef}
      />
      <button onClick={() => setState(state + 1)}>set state</button>
    </div>
      </>

  )
}
