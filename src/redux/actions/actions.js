export const SEARCH = 'SEARCH'

export const search = (searchKey) => ({
  type: SEARCH,
  payload: searchKey,
})
