import { createSlice } from '@reduxjs/toolkit'

export const StoreSlice = createSlice({
  name: 'counter',
  initialState: {
    start: '0',
    end: '0',
  },
  reducers: {
    StoreStart: (state, start) => {
      state.start = start
    },
    StoreEnd: (state, end) => {
      state.end = end
    },
  },
})

export const { StoreStart, StoreEnd } = StoreSlice.actions

export default StoreSlice.reducer