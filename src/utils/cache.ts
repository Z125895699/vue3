class LocalCache {
  setCache(key: string, value: any) {
    // JSON.stringify把js值转换为JSON字符串存进去
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    //js对象->json字符串->js对象
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
