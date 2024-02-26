import request from '@/utils/request'

// 查询课程考试题库列表
export function listExamination(query) {
  return request({
    url: '/system/examination/list',
    method: 'get',
    params: query
  })
}

// 查询课程考试题库详细
export function getExamination(id) {
  return request({
    url: '/system/examination/' + id,
    method: 'get'
  })
}

// 新增课程考试题库
export function addExamination(data) {
  return request({
    url: '/system/examination',
    method: 'post',
    data: data
  })
}

// 修改课程考试题库
export function updateExamination(data) {
  return request({
    url: '/system/examination',
    method: 'put',
    data: data
  })
}

// 删除课程考试题库
export function delExamination(id) {
  return request({
    url: '/system/examination/' + id,
    method: 'delete'
  })
}
