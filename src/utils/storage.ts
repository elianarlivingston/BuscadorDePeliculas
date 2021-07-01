export default {
  get(key: string) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
  },

  set(key: string, value: any) {
    const data = JSON.stringify(value)
    localStorage.setItem(key, data)
  },

  remove(key: string) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  },
}
