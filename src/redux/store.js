import { configureStore } from '@reduxjs/toolkit'

import { composeWithDevTools } from 'redux-devtools-extension'
import searchKeyReducer from './reducers/search'
import userReducer from './reducers/user'
import mypageReducer from './reducers/mypage'
import communityReducer from './reducers/community'

export default configureStore({
  reducer: {
    search: searchKeyReducer,
    user: userReducer,
    mypage: mypageReducer,
    community: communityReducer,
  },
})
