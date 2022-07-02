import * as React from 'react';
import TimeField from 'react-simple-timefield';
import './ButtonsTimer.css'
import {TextField} from "@mui/material";

class ButtonsTimer extends React.Component{
    constructor() {
        super();

        this.state = {
            time: '12:34',
            timeSeconds: '12:34:56',
            timeSecondsCustomColon: '12-34-56'
        };

        this.onTimeChange = this.onTimeChange.bind(this);
    }

    onTimeChange(event, value) {
        const newTime = value.replace(/-/g, ':');
        const time = newTime.substr(0, 5);
        const timeSeconds = newTime.padEnd(8, this.state.timeSeconds.substr(5, 3));
        const timeSecondsCustomColon = timeSeconds.replace(/:/g, '-');

        this.setState({time, timeSeconds, timeSecondsCustomColon});
    }
    render() {
        const {start, end} = this.state;
        return (
            <section className="container">
                <h2>START:</h2>
                <section>
                    <TimeField
                        showSeconds
                        value={start}
                        onChange={this.onTimeChange}
                        style={{
                            border: '2px solid #666',
                            fontSize: 42,
                            width: 180,
                            padding: '5px 8px',
                            color: '#333',
                            borderRadius: 3
                        }}
                    />
                </section>
                <h2>END:</h2>
                <section>
                    <TimeField
                        showSeconds
                        value={end}
                        onChange={this.onTimeChange}
                        style={{
                            border: '2px solid #666',
                            fontSize: 42,
                            width: 180,
                            padding: '5px 8px',
                            color: '#333',
                            borderRadius: 3
                        }}
                    />
                </section>
            </section>);

    }
}

export default ButtonsTimer;