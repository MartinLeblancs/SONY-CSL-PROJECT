import * as React from "react";
import TimeField from "react-simple-timefield";
import "./ButtonsTimer.css";

function getSecondsFromHHMMSS(value) {
    const [str1, str2, str3] = value.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);
    const val3 = Number(str3);

    if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
        // seconds
        return val1;
    }

    if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
        // minutes * 60 + seconds
        return val1 * 60 + val2;
    }

    if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
        // hours * 60 * 60 + minutes * 60 + seconds
        return val1 * 60 * 60 + val2 * 60 + val3;
    }

    return 0;
};

const initialRegionStart_HHMMSS = "00:00:03";
const initialRegionEnd_HHMMSS = "00:00:05";
export let ValueStart = getSecondsFromHHMMSS(initialRegionStart_HHMMSS);
export let ValueEnd = getSecondsFromHHMMSS(initialRegionEnd_HHMMSS);

export class ButtonsTimer extends React.Component {
    constructor() {
        super();

        this.onTimeChange1 = this.onTimeChange1.bind(this);
        this.onTimeChange2 = this.onTimeChange2.bind(this);
    }

    getSecondsFromHHMMSS = getSecondsFromHHMMSS.bind(this);

    // For ValueStart
    onTimeChange1(event, value) {
        const newTime1 = value.replace(/-/g, ":");
        const newValueStart = newTime1.padEnd(
            8,
            ValueStart.toString().substring(5, 3)
        );
        ValueStart = this.getSecondsFromHHMMSS(newValueStart);
    }
    // For ValueEnd
    onTimeChange2(event, value) {
        const newTime2 = value.replace(/-/g, ":");
        const newValueEnd = newTime2.padEnd(
            8,
            ValueEnd.toString().substring(5, 3)
        );
        ValueEnd = this.getSecondsFromHHMMSS(newValueEnd);
    }
    render() {
        return (
            <section
                className="container"
                style={{ position: "relative", height: 200 }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 95,
                        top: 80,
                    }}
                >
                    <h3>Début</h3>
                </div>
                <section>
                    <TimeField
                        showSeconds
                        value={initialRegionStart_HHMMSS}
                        onChange={this.onTimeChange1}
                        style={{
                            border: "2px solid #666",
                            fontSize: 42,
                            width: 180,
                            padding: "5px 8px",
                            color: "#333",
                            borderRadius: 3,
                            position: "absolute",
                            left: 50,
                            top: 120,
                        }}
                    />
                </section>
                <div style={{ position: "absolute", right: 120, top: 80 }}>
                    <h3>Fin</h3>
                </div>
                <section>
                    <TimeField
                        showSeconds
                        value={initialRegionEnd_HHMMSS}
                        onChange={this.onTimeChange2}
                        style={{
                            border: "2px solid #666",
                            fontSize: 42,
                            width: 180,
                            padding: "5px 8px",
                            color: "#333",
                            borderRadius: 3,
                            position: "absolute",
                            right: 50,
                            top: 120,
                        }}
                    />
                </section>
            </section>
        );
    }
}
