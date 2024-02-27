import request from '@/utils/request'

// 查询课程详情列表
export function listDetail(query) {
  return request({
    url: '/system/detail/list',
    method: 'get',
    params: query
  })
}

// 查询课程详情列表
export function listDetail1(query) {
  return request({
    url: '/system/detail/list1',
    method: 'get',
    params: query
  })
}

// 查询课程详情列表
export function listDetail2(query) {
  return request({
    url: '/system/detail/list2',
    method: 'get',
    params: query
  })
}

// 查询课程详情详细
export function getDetail(id) {
  return request({
    url: '/system/detail/' + id,
    method: 'get'
  })
}

// 新增课程详情
export function addDetail(data) {
  return request({
    url: '/system/detail',
    method: 'post',
    data: data
  })
}

// 新增课程详情
export function addDetail1(data) {
  return request({
    url: '/system/detail/add1',
    method: 'post',
    data: data
  })
}

// 修改课程详情
export function updateDetail(data) {
  return request({
    url: '/system/detail',
    method: 'put',
    data: data
  })
}

// 删除课程详情
export function delDetail(id) {
  return request({
    url: '/system/detail/' + id,
    method: 'delete'
  })
}

//必修课程接口
export function pullDownCourse() {
  return request({
    url: '/system/detail/pullDownCourse',
    method: 'get',
  })
}

//选修课程接口
export function pullDownCourse1() {
  return request({
    url: '/system/detail/pullDownCourse1',
    method: 'get',
  })
}

//全部课程接口
export function pullDownCourse2() {
  return request({
    url: '/system/detail/pullDownCourse2',
    method: 'get',
  })
}
