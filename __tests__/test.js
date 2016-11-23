var Vue = require('vue')
var Vueo = require('../dist/vueo')

Vue.use(Vueo)
var vm = new Vue({
  data () {
    return { a: { b: { c: [{ d: 1, e: { f: 'g' }}] }}}
  }
})

test('installed', () => {
  expect(Vue.has).toBeDefined()
  expect(Vue.at).toBeDefined()
  expect(Vue.prototype.$at).toBeDefined()
  expect(Vue.prototype.$has).toBeDefined()
})

test('`at` is work', () => {
  expect(vm.$at('a.b.c.0.d')).toBe(1)
  expect(vm.$at('a.b.c.0.e.f')).toBe('g')
  expect(vm.$at('a.b.c.1')).toBe(undefined)

  expect(vm.$at(vm.a, 'b.c[0].d'), 1)
})

test('`has` is work', () => {
  expect(vm.$has('a.b.c.0.d')).toBe(true)
  expect(vm.$has('a.b.c.0.e.f')).toBe(true)
  expect(vm.$has('a.b.c.1')).toBe(false)

  expect(vm.$has(vm.a, 'b.c.0.e.f')).toBe(true)
})
