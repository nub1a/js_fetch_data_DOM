parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api",t=document.createElement("ul");function e(){return fetch("".concat(n,"/phones.json"))}function r(){return new Promise(function(n,t){e().then(function(n){return n.json()}).then(function(t){return n(t)}),setTimeout(function(){return t(new Error("error: No answer from server."))},5e3)})}function o(n){n.forEach(function(n){var e=document.createElement("li");e.textContent=n.name,t.append(e)})}function c(t){var e=t.map(function(t){return fetch("".concat(n,"/phones/").concat(t,".json"))});return Promise.all(e)}document.body.append(t),r().then(o).then(function(n){return n.map(function(n){return n.id})}).then(c).catch(function(n){throw new Error(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3c3324d2.js.map