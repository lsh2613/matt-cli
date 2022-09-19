import { cs } from '../index'

function fetchStudentClass(form) {
  return cs.get(`/${form.status}/${form.userId}`)
}
