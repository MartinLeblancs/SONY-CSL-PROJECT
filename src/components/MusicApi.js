import { Midi } from '@tonejs/midi'
import { musicUpdated } from './MusicList'
import { ValueStart, ValueEnd } from './ButtonsTimer'
import {sequenceProtoToMidi} from "@magenta/music";
import * as mm from "@magenta/music";

export async function MusicApi(props)
{
    const midi = await Midi.fromUrl(musicUpdated);
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
    data.selected_region.start = ValueStart;
    data.selected_region.end = ValueEnd;
    data.notes = midiFileInJson.tracks;
    console.log(data);
    // setting the infos we gonna send to the API
    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        body: JSON.stringify(data)
    };
    console.log("Waiting....");
    let responseJSON = "false";
    while (responseJSON.done !== true) {
        const response2 = await fetch('https://pia.api.cslmusic.team/', requestOptions);
        responseJSON = await response2.json();
    }
    console.log(responseJSON);

    // let fs = require('fs');
    // fs.writeFile("thing.json", responseJSON);

    // use the return of the API to set a new midi file
}