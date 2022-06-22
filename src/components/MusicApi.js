import ReactDOM from 'react-dom';
import React from 'react';
import PianoRoll from 'react-piano-roll'

const e = React.createElement;

class MusicApi extends React.Component {
    async componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                "id": 0,
                "clip_id": 0,
                "detail_clip_id": 0,
                "note_density": 0.1,
                "tempo": 120,
                "case": "start",
                "top_p": 0.949999988079071,
                "superconditioning": 1,
                "clip_start": 0.0,
                "clip_end": 5,
                "selected_region": {
                "start": 1,
                    "end": 2
            },
            "notes": [
                "notes",
                1,
                "note",
                76,
                0.0,
                0.0,
                120,
                0
            ]
        }
        )
        };
        fetch('https://pia.api.cslmusic.team/', requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                data.render()
                // Work with JSON data here
                console.log(data)
            })
            .catch((err) => {

                console.log('An error has occured with fetch\n' + err)
            })
    }

    render() {
        return (
            <PianoRoll
              width={1200}
              height={660}
              zoom={6}
              resolution={2}
              gridLineColor={0x333333}
              blackGridBgColor={0x1e1e1e}
              whiteGridBgColor={0x282828}
              noteData={[
                ["0:0:0", "F5", ""],
                ["0:0:0", "C4", "2n"],
                ["0:0:0", "D4", "2n"],
                ["0:0:0", "E4", "2n"],
                ["0:2:0", "B4", "4n"],
                ["0:3:0", "A#4", "4n"],
                ["0:0:0", "F2", ""],
              ]}
            />
        )
    }
}

const domContainer = document.querySelector('#MusicApi');
ReactDOM.render(e(MusicApi), domContainer);