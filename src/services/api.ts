interface apiType {
  [prop: string]: string
}

const api: apiType = {
  querySchedule: '/schedule/:serverId',
  queryTrade: '/trade/:serverId',

  // queryUserInfo: '/user',
  // logoutUser: '/user/logout',
  // loginUser: 'POST /user/login',

  // queryUser: '/user/:id',
  // queryUserList: '/users',
  // updateUser: 'Patch /user/:id',
  // createUser: 'POST /user',
  // removeUser: 'DELETE /user/:id',
  // removeUserList: 'POST /users/delete',

  // queryPostList: '/posts',

  // queryDashboard: '/dashboard',
}

export default api
