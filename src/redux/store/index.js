import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
    reducer: mainReducer, // qui ci va il reducer
  })
  
export default store