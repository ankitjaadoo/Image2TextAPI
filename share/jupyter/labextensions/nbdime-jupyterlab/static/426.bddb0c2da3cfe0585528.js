(self.webpackChunknbdime_jupyterlab=self.webpackChunknbdime_jupyterlab||[]).push([[426],{7048:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.URLExt=void 0;const o=r(1023),i=n(r(4846));!function(e){function t(e){if("undefined"!=typeof document&&document){const t=document.createElement("a");return t.href=e,t}return(0,i.default)(e)}function r(...e){let t=(0,i.default)(e[0],{});const r=""===t.protocol&&t.slashes;r&&(t=(0,i.default)(e[0],"https:"+e[0]));const n=`${r?"":t.protocol}${t.slashes?"//":""}${t.auth}${t.auth?"@":""}${t.host}`,s=o.posix.join(`${n&&"/"!==t.pathname[0]?"/":""}${t.pathname}`,...e.slice(1));return`${n}${"."===s?"":s}`}e.parse=t,e.getHostName=function(e){return(0,i.default)(e).hostname},e.normalize=function(e){return e&&t(e).toString()},e.join=r,e.encodeParts=function(e){return r(...e.split("/").map(encodeURIComponent))},e.objectToQueryString=function(e){const t=Object.keys(e).filter((e=>e.length>0));return t.length?"?"+t.map((t=>{const r=encodeURIComponent(String(e[t]));return t+(r?"="+r:"")})).join("&"):""},e.queryStringToObject=function(e){return e.replace(/^\?/,"").split("&").reduce(((e,t)=>{const[r,n]=t.split("=");return r.length>0&&(e[r]=decodeURIComponent(n||"")),e}),{})},e.isLocal=function(e){const{protocol:r}=t(e);return(!r||0!==e.toLowerCase().indexOf(r))&&0!==e.indexOf("/")}}(t.URLExt||(t.URLExt={}))},2117:(e,t,r)=>{"use strict";var n="undefined"!=typeof JSON?JSON:r(8207),o=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},i=Object.keys||function(e){var t=Object.prototype.hasOwnProperty||function(){return!0},r=[];for(var n in e)t.call(e,n)&&r.push(n);return r};e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var r=t.space||"";"number"==typeof r&&(r=Array(r+1).join(" "));var s,a="boolean"==typeof t.cycles&&t.cycles,c=t.replacer||function(e,t){return t},u=t.cmp&&(s=t.cmp,function(e){return function(t,r){var n={key:t,value:e[t]},o={key:r,value:e[r]};return s(n,o)}}),l=[];return function e(t,s,f,h){var p=r?"\n"+new Array(h+1).join(r):"",d=r?": ":":";if(f&&f.toJSON&&"function"==typeof f.toJSON&&(f=f.toJSON()),void 0!==(f=c.call(t,s,f))){if("object"!=typeof f||null===f)return n.stringify(f);if(o(f)){for(var g=[],m=0;m<f.length;m++){var y=e(f,m,f[m],h+1)||n.stringify(null);g.push(p+r+y)}return"["+g.join(",")+p+"]"}if(-1!==l.indexOf(f)){if(a)return n.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}l.push(f);var v=i(f).sort(u&&u(f));for(g=[],m=0;m<v.length;m++){var b=e(f,s=v[m],f[s],h+1);if(b){var w=n.stringify(s)+d+b;g.push(p+r+w)}}return l.splice(l.indexOf(f),1),"{"+g.join(",")+p+"}"}}({"":e},"",e,0)}},8207:(e,t,r)=>{"use strict";t.parse=r(2890),t.stringify=r(9373)},2890:e=>{"use strict";var t,r,n,o={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"};function i(e){throw{name:"SyntaxError",message:e,at:t,text:n}}function s(e){return e&&e!==r&&i("Expected '"+e+"' instead of '"+r+"'"),r=n.charAt(t),t+=1,r}function a(){var e,t="";for("-"===r&&(t="-",s("-"));r>="0"&&r<="9";)t+=r,s();if("."===r)for(t+=".";s()&&r>="0"&&r<="9";)t+=r;if("e"===r||"E"===r)for(t+=r,s(),"-"!==r&&"+"!==r||(t+=r,s());r>="0"&&r<="9";)t+=r,s();return e=Number(t),isFinite(e)||i("Bad number"),e}function c(){var e,t,n,a="";if('"'===r)for(;s();){if('"'===r)return s(),a;if("\\"===r)if(s(),"u"===r){for(n=0,t=0;t<4&&(e=parseInt(s(),16),isFinite(e));t+=1)n=16*n+e;a+=String.fromCharCode(n)}else{if("string"!=typeof o[r])break;a+=o[r]}else a+=r}i("Bad string")}function u(){for(;r&&r<=" ";)s()}function l(){switch(u(),r){case"{":return function(){var e,t={};if("{"===r){if(s("{"),u(),"}"===r)return s("}"),t;for(;r;){if(e=c(),u(),s(":"),Object.prototype.hasOwnProperty.call(t,e)&&i('Duplicate key "'+e+'"'),t[e]=l(),u(),"}"===r)return s("}"),t;s(","),u()}}i("Bad object")}();case"[":return function(){var e=[];if("["===r){if(s("["),u(),"]"===r)return s("]"),e;for(;r;){if(e.push(l()),u(),"]"===r)return s("]"),e;s(","),u()}}i("Bad array")}();case'"':return c();case"-":return a();default:return r>="0"&&r<="9"?a():function(){switch(r){case"t":return s("t"),s("r"),s("u"),s("e"),!0;case"f":return s("f"),s("a"),s("l"),s("s"),s("e"),!1;case"n":return s("n"),s("u"),s("l"),s("l"),null;default:i("Unexpected '"+r+"'")}}()}}e.exports=function(e,o){var s;return n=e,t=0,r=" ",s=l(),u(),r&&i("Syntax error"),"function"==typeof o?function e(t,r){var n,i,s=t[r];if(s&&"object"==typeof s)for(n in l)Object.prototype.hasOwnProperty.call(s,n)&&(void 0===(i=e(s,n))?delete s[n]:s[n]=i);return o.call(t,r,s)}({"":s},""):s}},9373:e=>{"use strict";var t,r,n,o=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function s(e){return o.lastIndex=0,o.test(e)?'"'+e.replace(o,(function(e){var t=i[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function a(e,o){var i,c,u,l,f,h=t,p=o[e];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(e)),"function"==typeof n&&(p=n.call(o,e,p)),typeof p){case"string":return s(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(t+=r,f=[],"[object Array]"===Object.prototype.toString.apply(p)){for(l=p.length,i=0;i<l;i+=1)f[i]=a(i,p)||"null";return u=0===f.length?"[]":t?"[\n"+t+f.join(",\n"+t)+"\n"+h+"]":"["+f.join(",")+"]",t=h,u}if(n&&"object"==typeof n)for(l=n.length,i=0;i<l;i+=1)"string"==typeof(c=n[i])&&(u=a(c,p))&&f.push(s(c)+(t?": ":":")+u);else for(c in p)Object.prototype.hasOwnProperty.call(p,c)&&(u=a(c,p))&&f.push(s(c)+(t?": ":":")+u);return u=0===f.length?"{}":t?"{\n"+t+f.join(",\n"+t)+"\n"+h+"}":"{"+f.join(",")+"}",t=h,u}}e.exports=function(e,o,i){var s;if(t="",r="","number"==typeof i)for(s=0;s<i;s+=1)r+=" ";else"string"==typeof i&&(r=i);if(n=o,o&&"function"!=typeof o&&("object"!=typeof o||"number"!=typeof o.length))throw new Error("JSON.stringify");return a("",{"":e})}},1023:(e,t,r)=>{"use strict";var n=r(4406);function o(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var r,n="",o=0,i=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(i===a-1||1===s);else if(i!==a-1&&2===s){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",o=0):o=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),i=a,s=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=a,s=0;continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),o=a-i-1;i=a,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var s={resolve:function(){for(var e,t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=n.cwd()),a=e),o(a),0!==a.length&&(t=a+"/"+t,r=47===a.charCodeAt(0))}return t=i(t,!r),r?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return".";var t=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];o(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":s.normalize(e)},relative:function(e,t){if(o(e),o(t),e===t)return"";if((e=s.resolve(e))===(t=s.resolve(t)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var n=e.length,i=n-r,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var c=t.length-a,u=i<c?i:c,l=-1,f=0;f<=u;++f){if(f===u){if(c>u){if(47===t.charCodeAt(a+f))return t.slice(a+f+1);if(0===f)return t.slice(a+f)}else i>u&&(47===e.charCodeAt(r+f)?l=f:0===f&&(l=0));break}var h=e.charCodeAt(r+f);if(h!==t.charCodeAt(a+f))break;47===h&&(l=f)}var p="";for(f=r+l+1;f<=n;++f)f!==n&&47!==e.charCodeAt(f)||(0===p.length?p+="..":p+="/..");return p.length>0?p+t.slice(a+l):(a+=l,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!i){n=s;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');o(e);var r,n=0,i=-1,s=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,c=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!s){n=r+1;break}}else-1===c&&(s=!1,c=r+1),a>=0&&(u===t.charCodeAt(a)?-1==--a&&(i=r):(a=-1,i=c))}return n===i?i=c:-1===i&&(i=e.length),e.slice(n,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){n=r+1;break}}else-1===i&&(s=!1,i=r+1);return-1===i?"":e.slice(n,i)},extname:function(e){o(e);for(var t=-1,r=0,n=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===n&&(i=!1,n=a+1),46===c?-1===t?t=a:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){r=a+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+"/"+n:n}(0,e)},parse:function(e){o(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var r,n=e.charCodeAt(0),i=47===n;i?(t.root="/",r=1):r=0;for(var s=-1,a=0,c=-1,u=!0,l=e.length-1,f=0;l>=r;--l)if(47!==(n=e.charCodeAt(l)))-1===c&&(u=!1,c=l+1),46===n?-1===s?s=l:1!==f&&(f=1):-1!==s&&(f=-1);else if(!u){a=l+1;break}return-1===s||-1===c||0===f||1===f&&s===c-1&&s===a+1?-1!==c&&(t.base=t.name=0===a&&i?e.slice(1,c):e.slice(a,c)):(0===a&&i?(t.name=e.slice(1,s),t.base=e.slice(1,c)):(t.name=e.slice(a,s),t.base=e.slice(a,c)),t.ext=e.slice(s,c)),a>0?t.dir=e.slice(0,a-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,e.exports=s},4406:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,c=[],u=!1,l=-1;function f(){u&&a&&(u=!1,a.length?c=a.concat(c):l=-1,c.length&&h())}function h(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},7375:(e,t)=>{"use strict";var r=Object.prototype.hasOwnProperty;function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){t=t||"";var n,i,s=[];for(i in"string"!=typeof t&&(t="?"),e)if(r.call(e,i)){if((n=e[i])||null!=n&&!isNaN(n)||(n=""),i=o(i),n=o(n),null===i||null===n)continue;s.push(i+"="+n)}return s.length?t+s.join("&"):""},t.parse=function(e){for(var t,r=/([^=?#&]+)=?([^&]*)/g,o={};t=r.exec(e);){var i=n(t[1]),s=n(t[2]);null===i||null===s||i in o||(o[i]=s)}return o}},7245:e=>{"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},4846:(e,t,r)=>{"use strict";var n=r(7245),o=r(7375),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,s=/[\n\r\t]/g,a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,c=/:\d+$/,u=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,l=/^[a-zA-Z]:/;function f(e){return(e||"").toString().replace(i,"")}var h=[["#","hash"],["?","query"],function(e,t){return g(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function d(e){var t,n=("undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{}).location||{},o={},i=typeof(e=e||n);if("blob:"===e.protocol)o=new y(unescape(e.pathname),{});else if("string"===i)for(t in o=new y(e,{}),p)delete o[t];else if("object"===i){for(t in e)t in p||(o[t]=e[t]);void 0===o.slashes&&(o.slashes=a.test(e.href))}return o}function g(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function m(e,t){e=(e=f(e)).replace(s,""),t=t||{};var r,n=u.exec(e),o=n[1]?n[1].toLowerCase():"",i=!!n[2],a=!!n[3],c=0;return i?a?(r=n[2]+n[3]+n[4],c=n[2].length+n[3].length):(r=n[2]+n[4],c=n[2].length):a?(r=n[3]+n[4],c=n[3].length):r=n[4],"file:"===o?c>=2&&(r=r.slice(2)):g(o)?r=n[4]:o?i&&(r=r.slice(2)):c>=2&&g(t.protocol)&&(r=n[4]),{protocol:o,slashes:i||g(o),slashesCount:c,rest:r}}function y(e,t,r){if(e=(e=f(e)).replace(s,""),!(this instanceof y))return new y(e,t,r);var i,a,c,u,p,v,b=h.slice(),w=typeof t,C=this,x=0;for("object"!==w&&"string"!==w&&(r=t,t=null),r&&"function"!=typeof r&&(r=o.parse),i=!(a=m(e||"",t=d(t))).protocol&&!a.slashes,C.slashes=a.slashes||i&&t.slashes,C.protocol=a.protocol||t.protocol||"",e=a.rest,("file:"===a.protocol&&(2!==a.slashesCount||l.test(e))||!a.slashes&&(a.protocol||a.slashesCount<2||!g(C.protocol)))&&(b[3]=[/(.*)/,"pathname"]);x<b.length;x++)"function"!=typeof(u=b[x])?(c=u[0],v=u[1],c!=c?C[v]=e:"string"==typeof c?~(p="@"===c?e.lastIndexOf(c):e.indexOf(c))&&("number"==typeof u[2]?(C[v]=e.slice(0,p),e=e.slice(p+u[2])):(C[v]=e.slice(p),e=e.slice(0,p))):(p=c.exec(e))&&(C[v]=p[1],e=e.slice(0,p.index)),C[v]=C[v]||i&&u[3]&&t[v]||"",u[4]&&(C[v]=C[v].toLowerCase())):e=u(e,C);r&&(C.query=r(C.query)),i&&t.slashes&&"/"!==C.pathname.charAt(0)&&(""!==C.pathname||""!==t.pathname)&&(C.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,s=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),s++):s&&(0===n&&(i=!0),r.splice(n,1),s--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(C.pathname,t.pathname)),"/"!==C.pathname.charAt(0)&&g(C.protocol)&&(C.pathname="/"+C.pathname),n(C.port,C.protocol)||(C.host=C.hostname,C.port=""),C.username=C.password="",C.auth&&(~(p=C.auth.indexOf(":"))?(C.username=C.auth.slice(0,p),C.username=encodeURIComponent(decodeURIComponent(C.username)),C.password=C.auth.slice(p+1),C.password=encodeURIComponent(decodeURIComponent(C.password))):C.username=encodeURIComponent(decodeURIComponent(C.auth)),C.auth=C.password?C.username+":"+C.password:C.username),C.origin="file:"!==C.protocol&&g(C.protocol)&&C.host?C.protocol+"//"+C.host:"null",C.href=C.toString()}y.prototype={set:function(e,t,r){var i=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||o.parse)(t)),i[e]=t;break;case"port":i[e]=t,n(t,i.protocol)?t&&(i.host=i.hostname+":"+t):(i.host=i.hostname,i[e]="");break;case"hostname":i[e]=t,i.port&&(t+=":"+i.port),i.host=t;break;case"host":i[e]=t,c.test(t)?(t=t.split(":"),i.port=t.pop(),i.hostname=t.join(":")):(i.hostname=t,i.port="");break;case"protocol":i.protocol=t.toLowerCase(),i.slashes=!r;break;case"pathname":case"hash":if(t){var s="pathname"===e?"/":"#";i[e]=t.charAt(0)!==s?s+t:t}else i[e]=t;break;case"username":case"password":i[e]=encodeURIComponent(t);break;case"auth":var a=t.indexOf(":");~a?(i.username=t.slice(0,a),i.username=encodeURIComponent(decodeURIComponent(i.username)),i.password=t.slice(a+1),i.password=encodeURIComponent(decodeURIComponent(i.password))):i.username=encodeURIComponent(decodeURIComponent(t))}for(var u=0;u<h.length;u++){var l=h[u];l[4]&&(i[l[1]]=i[l[1]].toLowerCase())}return i.auth=i.password?i.username+":"+i.password:i.username,i.origin="file:"!==i.protocol&&g(i.protocol)&&i.host?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(e){e&&"function"==typeof e||(e=o.stringify);var t,r=this,n=r.host,i=r.protocol;i&&":"!==i.charAt(i.length-1)&&(i+=":");var s=i+(r.protocol&&r.slashes||g(r.protocol)?"//":"");return r.username?(s+=r.username,r.password&&(s+=":"+r.password),s+="@"):r.password?(s+=":"+r.password,s+="@"):"file:"!==r.protocol&&g(r.protocol)&&!n&&"/"!==r.pathname&&(s+="@"),(":"===n[n.length-1]||c.test(r.hostname)&&!r.port)&&(n+=":"),s+=n+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(s+=r.hash),s}},y.extractProtocol=m,y.location=d,y.trimLeft=f,y.qs=o,e.exports=y}}]);
