import * as React from 'react';
import TimeField from 'react-simple-timefield';
import './ButtonsTimer.css'
import {TextField} from "@mui/material";

class ButtonsTimer extends React.Component{
    constructor() {
        super();

        this.state = {
            ValueStart: '00:00:00',
            ValueEnd: '00:00:00',
        };

        this.onTimeChange1 = this.onTimeChange1.bind(this);
        this.onTimeChange2 = this.onTimeChange2.bind(this);
    }

    onTimeChange1(event, value) {
        const newTime1 = value.replace(/-/g, ':');
        const ValueStart = newTime1.padEnd(8, this.state.ValueStart.substr(5, 3));

        this.setState({ValueStart});
    }
    onTimeChange2(event, value) {
        const newTime2 = value.replace(/-/g, ':');
        const ValueEnd = newTime2.padEnd(8, this.state.ValueEnd.substr(5, 3));

        this.setState({ValueEnd});
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
                            left: 1000,
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
                            left: 50,
                            top: 120
                        }}
                    />
                </section>
            </section>);

    }
}

function mapStateToProps(state) {
    const { start } = state
    return { todoList: todos.allIds }
}

export default connect(mapStateToProps)(ButtonsTimer)