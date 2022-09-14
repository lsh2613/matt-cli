import { INIT_SEARCH_KEY } from '../state'
import { SEARCH } from '../actions/actions'
import { combineReducers } from 'redux'

const initialState = {
  searchKey: '',
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, searchKey: action.payload }

    default:
      return state
  }
}

export default rootReducer
