module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){e.exports=function(e,t){var r=Object.assign({redirect:"https://l.morioh.com/b0a3f595aa?r=",regex:{link:/((http|https):\/\/(?!([^\/]+\.)?morioh.com)[\w\.\/\-=?#]+)/i,html:/(<a.*href=)[\"']((http(s)?):\/\/(?!([^\/]+\.)?morioh.com)[\w\.\/\-=?#]+)[\"']/gm}}||t);e.core.ruler.after("inline","redirect",(function(e){e.tokens.forEach((function(e){"html_block"===e.type?e.content=e.content.replace(r.regex.html,(function(e,t,n){return t+'"'+r.redirect+encodeURI(n)+'" rel="nofollow" target="_blank"'})):"inline"===e.type&&e.children&&e.children.forEach((function(e){var t=e.type;if("link_open"===t){var n=e.attrGet("href");r.regex.link.test(n)&&(e.attrSet("href",r.redirect+encodeURI(n)),e.attrSet("rel","nofollow"),e.attrSet("target","_blank"))}else"text"!==t&&"html_inline"!==t||(e.content=e.content.replace(r.regex.html,(function(e,t,n){return t+'"'+r.redirect+encodeURI(n)+'" rel="nofollow" target="_blank"'})))}))}))}))}}]);