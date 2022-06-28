import React from 'react';

export class MusicApi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: []
        };
    }
    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"id":0,"clip_id":0,"detail_clip_id":0,"note_density":0.1,"tempo":120,"case":"start","top_p":0.949999988079071,"superconditioning":1,"clip_start":0.0,"clip_end":5,"selected_region":{"start":1,"end":2},"notes":["notes",1,"note",76,0.0,0.0,120,0]})
        };
        await fetch('https://pia.api.cslmusic.team/', requestOptions)
            .then((response) => {
                console.log(response);
            })
    }
    render() {
        return (<h1>FETCH TEST</h1>);
    }
}

