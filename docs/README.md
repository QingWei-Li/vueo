# Vueo

> 🍟 Easy to get value from vue instance via object paths.

## Installation
```shell
npm i vueo -S
```

## Import

```javascript
import Vue from 'vue'
import Vueo from 'vueo'

Vue.use(Vueo)
```

Or import via script tag

```html
<script src="path/to/vue/dist/vue.js"></script>
<script src="path/to/vueo/dist/vueo.js"></script>
```

## Usage

[Live demo](https://jsfiddle.net/cinwell_li/20v7ehtg/)

```javascript
new Vue({
  data () {
    return {
      a: [ { key: 'value' } ],
      b: { c: 1 }
    }
  },

  created() {
    this.$at('a.0.key') // 'value'
    this.$at('a.1.key') // undefined

    this.$has('b') // true
    this.$has('a.1') // false
  }
})
```

## Read more
- https://github.com/jonschlinkert/get-value
- https://github.com/jonschlinkert/has-value

## License
MIT
