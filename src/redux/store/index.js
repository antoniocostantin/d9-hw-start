import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import jobReducer from '../reducers/job'

const mainReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
})

const store = configureStore({
    reducer: mainReducer, // qui ci va il reducer
  })
  
export default store