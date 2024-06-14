
// 用户信息数据缓存
const INFO_KEY = 'userInfo_key'

// 历史搜索数据缓存
const HISTORYLIST_KEY = 'historylist_key'

// 获取用户信息
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
// 设置用户信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 清除用户信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
// 获取历史搜索记录
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORYLIST_KEY)
  return result ? JSON.parse(result) : []
}
// 保存历史搜索记录
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORYLIST_KEY, JSON.stringify(arr))
}
