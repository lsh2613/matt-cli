import { SEARCH_KEY } from './reducers'

const initialState = ''

function searchKeyWord(previousState = initialState, action) {
  if (action.type === SEARCH_KEY) {
    return [...previousState, action.newKey]
  }
  return previousState
}

// export const SEARCH_KEY = 'SEARCH_KEY'

// export function searchByKeyword(newKey) {
//   return {
//     type: SEARCH_KEY,
//     newKey,
//   }
// }
