(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vueo = factory());
}(this, (function () { 'use strict';

/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var index = function(obj, prop, a, b, c) {
  if (!isObject$1(obj) || !prop) {
    return obj;
  }

  prop = toString(prop);

  // allowing for multiple properties to be passed as
  // a string or array, but much faster (3-4x) than doing
  // `[].slice.call(arguments)`
  if (a) { prop += '.' + toString(a); }
  if (b) { prop += '.' + toString(b); }
  if (c) { prop += '.' + toString(c); }

  if (prop in obj) {
    return obj[prop];
  }

  var segs = prop.split('.');
  var len = segs.length;
  var i = -1;

  while (obj && (++i < len)) {
    var key = segs[i];
    while (key[key.length - 1] === '\\') {
      key = key.slice(0, -1) + '.' + segs[++i];
    }
    obj = obj[key];
  }
  return obj;
};

function isObject$1(val) {
  return val !== null && (typeof val === 'object' || typeof val === 'function');
}

function toString(val) {
  if (!val) { return ''; }
  if (Array.isArray(val)) {
    return val.join('.');
  }
  return val;
}

var toString$1 = {}.toString;

var index$4 = Array.isArray || function (arr) {
  return toString$1.call(arr) == '[object Array]';
};

var isArray = index$4;

var index$2 = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};

/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var index$6 = function hasValue(o, noZero) {
  if (o === null || o === undefined) {
    return false;
  }

  if (typeof o === 'boolean') {
    return true;
  }

  if (typeof o === 'number') {
    if (o === 0 && noZero === true) {
      return false;
    }
    return true;
  }

  if (o.length !== undefined) {
    return o.length !== 0;
  }

  for (var key in o) {
    if (o.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
};

var isObject$2 = index$2;
var hasValues = index$6;
var get$1 = index;

var index$1 = function(obj, prop, noZero) {
  if (isObject$2(obj)) {
    return hasValues(get$1(obj, prop), noZero);
  }
  return hasValues(obj, prop);
};

function install (Vue) {
  Vue.at = index;
  Vue.has = index$1;
  Vue.prototype.$at = function (path) {
    return index(this._self, path)
  };
  Vue.prototype.$has = function (path) {
    return index$1(this._self, path)
  };
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(install);
}

return install;

})));
