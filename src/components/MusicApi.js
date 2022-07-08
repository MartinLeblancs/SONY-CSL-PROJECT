import React from 'react';
import * as Tone from "tone"
import { Midi } from '@tonejs/midi'

export async function MusicApi()
{
    const midi = await Midi.fromUrl("Mario Bros. - Super Mario Bros. Theme.mid");
    const midiFileInJson = midi.toJSON();
    let timeMidi = 0;

    // getting the time of the last note (so the duration of the midi file)
    for (let j = 0; midiFileInJson.tracks[j]; j++) {
        for (let i = 0; midiFileInJson.tracks[j].notes[i]; i++)  {
            if (midiFileInJson.tracks[j].notes[i].time > timeMidi)
                timeMidi = midiFileInJson.tracks[j].notes[i].time;
        }
    }
    // modify the file we gonna pass to the api
    const response = await fetch('piaTestData.json')
    const data = await response.json();
    data.clip_end = timeMidi;
    data.selected_region.start = 0;
    data.selected_region.end = 5;
    data.notes = midiFileInJson.tracks;
    console.log(data);

    // setting the infos we gonna send to the API
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        body: JSON.stringify(data)
    };
    console.log("waiting...");
    const response2 = await fetch('https://pia.api.cslmusic.team/', requestOptions);
    const responseJSON = await response2.json();
    console.log(responseJSON);
    // use the return of the API to set a new midi file
}

function mapStateToProps(state) {
    return {
        start: state.start,
        end: state.end
    }
}

// export default connect(mapStateToProps)(MusicApi)