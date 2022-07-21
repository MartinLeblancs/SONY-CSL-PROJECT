import "./App.css";
import { useRef } from "react";

export default function App() {
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
            {/*  <div className="App">*/}
            {/*    <PianoRoll*/}
            {/*      width={1000}*/}
            {/*      height={600}*/}
            {/*      zoom={5}*/}
            {/*      bpm={120}*/}
            {/*      resolution={2}*/}
            {/*      gridLineColor={0x333333}*/}
            {/*      blackGridBgColor={0x1e1e1e}*/}
            {/*      whiteGridBgColor={0x282828}*/}
            {/*      noteFormat={"String"}*/}
            {/*      noteData={[*/}
            {/*        ["0:0:0", "B1", ""],*/}
            {/*        ["0:2:0", "F5", ""],*/}
            {/*        ["0:0:0", "D4", "2n"],*/}
            {/*        ["0:0:0", "E4", "2n"],*/}
            {/*        ["0:2:0", "B4", "4n"],*/}
            {/*        ["0:3:0", "A#4", "4n"],*/}
            {/*        ["0:2:0", "B4", "4n"]*/}
            {/*      ]}*/}
            {/*      ref={playbackRef}*/}
            {/*    />*/}
            {/*    /!* <button onClick={() => setState(state + 1)}>set state</button> *!/*/}
            {/*  </div>*/}
        </>
    )
}