import React from 'react';

async function MusicApi()
{
    // modify the file we gonna pass to the api
    const response = await fetch('piaTestData.json')
    const data = await response.json();
    data.clip_end = 0;
    data.selected_region.start = 0;
    data.selected_region.end = 0;
    data.notes = 0;
    console.log(data);

    const requestOptions = {
        crossDomain: true,
        method: 'POST',
        body: JSON.stringify({"id":0,"clip_id":0,"detail_clip_id":0,"note_density":0.1,"tempo":120,"case":"start","top_p":0.949999988079071,"superconditioning":1,"clip_start":0.0,"clip_end":5,"selected_region":{"start":1,"end":2},"notes":["notes",1,"note",76,0.0,0.0,120,0]})
    };
    console.log("waiting...");
    const response2 = await fetch('https://pia.api.cslmusic.team/', requestOptions);
    const responseJSON = await response2.json();
    console.log(responseJSON);
    // use the return of the API to set a new midi file
}

function mapStateToProps(state) {
    return {
        start = state.start,
        end = state.end
    }
}

export default connect(mapStateToProps)(MusicApi)