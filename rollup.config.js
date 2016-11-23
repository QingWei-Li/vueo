import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'index.js',
  dest: 'dist/vueo.js',
  format: 'umd',
  moduleName: 'Vueo',
  plugins: [buble(), nodeResolve(), commonjs()]
}
