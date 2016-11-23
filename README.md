# Vueo
[![Build Status](https://travis-ci.org/QingWei-Li/vueo.svg?branch=master)](https://travis-ci.org/QingWei-Li/vueo)
[![npm](https://img.shields.io/npm/v/vueo.svg)](https://www.npmjs.com/package/vueo)

> 🍟 Easy to get value from vue instance via object paths.

## Documentation
https://qingwei-li.github.io/vueo

## Installation
```shell
npm i vueo -S
```

## Usage
```javascript
import Vue from 'vue'
import Vueo from 'vueo'

Vue.use(Vueo)

new Vue({
  data () {
    return { a: { b: [ {c: 1} ] } }
  },

  created () {
    this.$has('a.b.0') // true
    this.$has('a.b.1') // false
    this.$at('a.b.0.c') // 1
    this.$at('a.b.1.c') // undefined
  }
})
```

## Read more
- https://github.com/jonschlinkert/get-value
- https://github.com/jonschlinkert/has-value

## License
MIT
