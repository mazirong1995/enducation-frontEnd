import request from '@/utils/request'

// 查询课程考试答案库列表
export function listAnswer(query) {
  return request({
    url: '/system/answer/list',
    method: 'get',
    params: query
  })
}

// 查询课程考试答案库详细
export function getAnswer(id) {
  return request({
    url: '/system/answer/' + id,
    method: 'get'
  })
}

// 新增课程考试答案库
export function addAnswer(data) {
  return request({
    url: '/system/answer',
    method: 'post',
    data: data
  })
}

// 新增课程考试答案库
export function addAnswer1(data) {
  return request({
    url: '/system/answer/stuAnswer',
    method: 'post',
    data: data
  })
}

// 修改课程考试答案库
export function updateAnswer(data) {
  return request({
    url: '/system/answer',
    method: 'put',
    data: data
  })
}

// 删除课程考试答案库
export function delAnswer(id) {
  return request({
    url: '/system/answer/' + id,
    method: 'delete'
  })
}
