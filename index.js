import get from 'get-value'
import has from 'has-value'

export default function install (Vue) {
  Vue.at = get
  Vue.has = has
  Vue.prototype.$at = function (...args) {
    return args.length === 1
      ? get(this._self, args[0])
      : get.apply(this, args)
  }
  Vue.prototype.$has = function (...args) {
    return args.length === 1
      ? has(this._self, args[0])
      : has.apply(this, args)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
