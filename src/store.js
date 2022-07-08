import { configureStore } from '@reduxjs/toolkit'
import storeValuesStartEnd from "./reducer/ButtonTimerReducer"

export default configureStore({
  reducer: {
    values: storeValuesStartEnd,
  },
})