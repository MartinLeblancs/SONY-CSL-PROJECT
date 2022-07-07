import * as React from 'react';
import TimeField from 'react-simple-timefield';
import './ButtonsTimer.css'

class ButtonsTimer extends React.Component{
    constructor() {
        super();

        this.state = {
            ValueStart: '0',
            ValueEnd: '0',
        };

        this.onTimeChange1 = this.onTimeChange1.bind(this);
        this.onTimeChange2 = this.onTimeChange2.bind(this);
    }

    getSecondsFromHHMMSS = (value) => {
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
    }
    // For ValueStart
    onTimeChange1(event, value) {
        const newTime1 = value.replace(/-/g, ':');
        const ValueStart = newTime1.padEnd(8, this.state.ValueStart.substr(5, 3));
        const result1 = this.getSecondsFromHHMMSS(ValueStart);
        this.setState({result1});
    }
    // For ValueEnd
    onTimeChange2(event, value) {
        const newTime2 = value.replace(/-/g, ':');
        const ValueEnd = newTime2.padEnd(8, this.state.ValueEnd.substr(5, 3));
        const result2 = this.getSecondsFromHHMMSS(ValueEnd);
        this.setState({result2});
    }
    render() {
        const {ValueStart, ValueEnd} = this.state;
        return (
            <section className="container">
                <div style={{position: "absolute", left: 100, top: 80}}>
                    <h3>Start:</h3>
                </div>
                <section>
                    <TimeField
                        showSeconds
                        value={ValueStart}
                        onChange={this.onTimeChange1}
                        style={{
                            border: '2px solid #666',
                            fontSize: 42,
                            width: 180,
                            padding: '5px 8px',
                            color: '#333',
                            borderRadius: 3,
                            position: "absolute",
                            left: 50,
                            top: 120
                        }}
                    />
                </section>
                <div style={{position: "absolute", left: 1050, top: 80}}>
                    <h3>END:</h3>
                </div>
                <section>
                    <TimeField
                        showSeconds
                        value={ValueEnd}
                        onChange={this.onTimeChange2}
                        style={{
                            border: '2px solid #666',
                            fontSize: 42,
                            width: 180,
                            padding: '5px 8px',
                            color: '#333',
                            borderRadius: 3,
                            position: "absolute",
                            left: 1000,
                            top: 120

                        }}
                    />
                </section>
            </section>);

    }
}

export default ButtonsTimer;