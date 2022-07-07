import { createSlice } from '@reduxjs/toolkit'

const initialState = 
{
    start: "0",
    end: "0"
}

function storeValuesStartEnd(state = initialState, new_start_, new_end) {
    state.start = new_start;
    state.end = new_end;
    return state;
}
  
export default storeValuesStartEnd