import { class_ } from '../index'
//전체 클래스 조회
function fetchAllClasses() {
  return class_.get('')
}

//id 를 이용한 클래스 조회
function fetchClass(id) {
  return class_.get(`/${id}`)
}

function deleteClass(id) {
  return class_.delete(`/?classId=${id}`)
}

function postClass(form) {
  return class_.post(`/`, form)
}

function updateClass(form) {
  return class_.patch(`/${form.getClassId}`, form)
}

function fetchBeforClass() {
  return class_.get('/before')
}

function fetchDoingClass() {
  return class_.get('/doing')
}

function fetchFinishedClass() {
  return class_.get('/finished')
}

//강사 id로 클래스 조회
function fetchClassByInsId(id) {
  return class_.get(`/instructor/${id}`)
}

//검색어로 클래스 조회
function fetchClassByKeyword(keyword) {
  return class_.get(`/keyword/${keyword}/classesView`)
}

export {
  fetchAllClasses,
  fetchClass,
  deleteClass,
  postClass,
  updateClass,
  fetchBeforClass,
  fetchDoingClass,
  fetchFinishedClass,
  fetchClassByInsId,
  fetchClassByKeyword,
}
