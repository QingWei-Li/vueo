import get from 'get-value'
import has from 'has-value'

export default function install (Vue) {
  Vue.at = get
  Vue.has = has
  Vue.prototype.$at = function (path) {
    return get(this._self, path)
  }
  Vue.prototype.$has = function (path) {
    return has(this._self, path)
  }
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(install)
}
