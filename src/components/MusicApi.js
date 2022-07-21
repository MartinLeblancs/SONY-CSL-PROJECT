import { musicUpdated } from "./MusicList";
import { ValueStart, ValueEnd } from "./ButtonsTimer";
import * as mm from "@magenta/music/es6";

// TODO remove this local player, use the global midi-player/visualizer
const player = new mm.Player();

// parse notes as returned by the PIA API to NoteSequence format
function convertPiaNotesToNoteSequenceNotes(pia_notes) {
    return pia_notes.map(noteObject => {
        return {
            pitch: noteObject.midi ?? noteObject.pitch,
            // `NoteSequence`s use integer [0-127] velocity range
            velocity: noteObject.velocity,
            startTime: noteObject.time,
            endTime: noteObject.time + noteObject.duration
        }
    })
}

// parse note in NoteSequence format to the format returned by the PIA API
function _convertNoteSequenceNoteToPiaNoteObject(noteSequence_note) {
    return {
        pitch: noteSequence_note.pitch ?? noteSequence_note.midi,
        // PIA uses float [0-1] velocity range
        velocity: noteSequence_note.velocity,
        time: noteSequence_note.startTime,
        duration: noteSequence_note.endTime - noteSequence_note.startTime,
        muted: 0
    }
}

// flatten a single PIA note for the PIA input note format
function _piaNoteObjectToFlattenedPiaNote(piaNoteObject) {
    return [
        "note",
        piaNoteObject.pitch,
        piaNoteObject.time,
        piaNoteObject.duration,
        piaNoteObject.velocity,
        piaNoteObject.muted
    ]
}

// flatten a sequence of PIA notes to the PIA input format
function _convertPiaNoteObjectsToPiaInput(piaNoteObjects) {
    const piaNotes = piaNoteObjects.map(_piaNoteObjectToFlattenedPiaNote)
    return ["notes", piaNotes.length, ...piaNotes.flat()]
}

// convert notes in NoteSequence format to the PIA input format
function convertNoteSequenceNotesToPiaInputNotes(noteSequence_notes) {
    const piaNoteObjects = noteSequence_notes.map(
        (noteSequence_note =>
            _convertNoteSequenceNoteToPiaNoteObject(noteSequence_note)))
    return _convertPiaNoteObjectsToPiaInput(piaNoteObjects)
}

export async function MusicApi(props) {
    // load MIDI file
    // TODO retrieve instead the current noteSequence from the global midi-player
    const initialNoteSequence = await mm.urlToNoteSequence(musicUpdated);
    const regionStart = ValueStart;
    const regionEnd = ValueEnd;

    const initialNotesBeforeRegion = initialNoteSequence.notes.filter(
        (noteObject) => noteObject.startTime < regionStart);
    const initialNotesAfterRegion = initialNoteSequence.notes.filter(
        (noteObject) => noteObject.endTime > regionEnd);

    // format loaded noteSequence to PIA input format
    const initialNotes_piaInput = convertNoteSequenceNotesToPiaInputNotes(
        initialNoteSequence.notes);

    // retrieve sample PIA data file for constant hyperparameters
    const piaInputData = await fetch("piaTestData.json");
    const piaInputData_json = await piaInputData.json();

    // setup PIA API request data
    piaInputData_json.case = "start"
    piaInputData_json.clip_start = 0;
    piaInputData_json.clip_end = initialNoteSequence.totalTime;
    piaInputData_json.selected_region.start = regionStart;
    piaInputData_json.selected_region.end = regionEnd;
    piaInputData_json.notes = initialNotes_piaInput;

    // setting the infos we gonna send to the API
    let requestOptions = {
        crossDomain: true,
        method: "POST",
        body: JSON.stringify(piaInputData_json),
    };

    console.log("Waiting....");
    let responseJSON = false;
    const notesResult = []
    while (!responseJSON || !responseJSON.done) {
        const response = await fetch(
            "https://pia.api.cslmusic.team/",
            requestOptions
        );
        responseJSON = await response.json();
        // save generated region
        // TODO dynamically update the global midi-player/visualizer with this new chunk
        //  instead of performing a delayed update with all chunks
        notesResult.push(...responseJSON.notes_region);

        // update the request for the next chunk
        responseJSON.case = "continue";
        requestOptions.body = JSON.stringify(responseJSON);
    }

    const noteSequence = new mm.NoteSequence({
        notes: [
            ...initialNotesBeforeRegion,
            ...convertPiaNotesToNoteSequenceNotes(notesResult),
            ...initialNotesAfterRegion
        ],
        totalTime: responseJSON.clip_end})

    console.log("Final note sequence: ", noteSequence)

    // Playing the note sequence
    if (player.isPlaying()) {
        player.stop();
    };
    await player.start(noteSequence);
}
