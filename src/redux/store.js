import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import searchKeyReducer from './reducers/search'

export default configureStore({
  reducer: {
    search: searchKeyReducer,
  },
})
