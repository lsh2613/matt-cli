import { configureStore } from '@reduxjs/toolkit'

import { composeWithDevTools } from 'redux-devtools-extension'
import searchKeyReducer from './reducers/search'
import userReducer from './reducers/user'

export default configureStore({
  reducer: {
    search: searchKeyReducer,
    user: userReducer,
  },
})
