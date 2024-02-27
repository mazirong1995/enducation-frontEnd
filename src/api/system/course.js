import request from '@/utils/request'

// 查询必修课程列表
export function listCourse(query) {
  return request({
    url: '/system/course/list',
    method: 'get',
    params: query
  })
}

// 查询选修课程列表
export function listCourse1(query) {
  return request({
    url: '/system/course/list1',
    method: 'get',
    params: query
  })
}

// 查询课程详细
export function getCourse(id) {
  return request({
    url: '/system/course/' + id,
    method: 'get'
  })
}

// 新增课程
export function addCourse(data) {
  return request({
    url: '/system/course',
    method: 'post',
    data: data
  })
}

// 新增课程
export function addCourse1(data) {
  return request({
    url: '/system/course/add1',
    method: 'post',
    data: data
  })
}

// 修改课程
export function updateCourse(data) {
  return request({
    url: '/system/course',
    method: 'put',
    data: data
  })
}

// 删除课程
export function delCourse(id) {
  return request({
    url: '/system/course/' + id,
    method: 'delete'
  })
}

//课程教师接口

export function pullDownTeacher() {
  return request({
    url: '/system/course/pullDown',
    method: 'get',
  })
}
