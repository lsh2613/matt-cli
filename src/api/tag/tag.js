import { tag } from '../index'

function fetchTag() {
  return tag.get('/')
}

function createTag(form) {
  return tag.post('/', form)
}

function fetchTagById(id) {
  return tag.get(`/${id}`)
}

export { fetchTag, createTag, fetchTagById }
