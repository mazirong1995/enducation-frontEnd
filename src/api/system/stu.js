import request from '@/utils/request'

// 查询学生选课列表
export function listStu(query) {
  return request({
    url: '/system/stu/list',
    method: 'get',
    params: query
  })
}

// 查询学生选课详细
export function getStu(id) {
  return request({
    url: '/system/stu/' + id,
    method: 'get'
  })
}

// 新增学生选课
export function addStu(data) {
  return request({
    url: '/system/stu',
    method: 'post',
    data: data
  })
}

// 修改学生选课
export function updateStu(data) {
  return request({
    url: '/system/stu',
    method: 'put',
    data: data
  })
}

// 删除学生选课
export function delStu(id) {
  return request({
    url: '/system/stu/' + id,
    method: 'delete'
  })
}
