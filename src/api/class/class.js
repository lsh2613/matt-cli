import { class_ } from '../index'

function fetchClasses() {
  return class_.get('');
}

function fetchClass(id) {
  return class_.get(`/${id}`);
}

function deleteClass(id) {
  return class_.delete(`/delete?classId=${id}`)
}
//function updateClass()
export { fetchClasses, fetchClass, deleteClass }