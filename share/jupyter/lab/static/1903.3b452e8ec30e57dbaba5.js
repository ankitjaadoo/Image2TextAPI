"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[1903],{91903:(e,t,n)=>{n.r(t);n.d(t,{ecl:()=>k});function r(e){var t={},n=e.split(" ");for(var r=0;r<n.length;++r)t[n[r]]=true;return t}function a(e,t){if(!t.startOfLine)return false;e.skipToEnd();return"meta"}var i=r("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode");var o=r("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait");var l=r("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath");var s=r("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode");var u=r("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when");var c=r("catch class do else finally for if switch try while");var p=r("true false null");var f={"#":a};var d=/[+\-*&%=<>!?|\/]/;var m;function h(e,t){var n=e.next();if(f[n]){var r=f[n](e,t);if(r!==false)return r}if(n=='"'||n=="'"){t.tokenize=y(n);return t.tokenize(e,t)}if(/[\[\]{}\(\),;\:\.]/.test(n)){m=n;return null}if(/\d/.test(n)){e.eatWhile(/[\w\.]/);return"number"}if(n=="/"){if(e.eat("*")){t.tokenize=v;return v(e,t)}if(e.eat("/")){e.skipToEnd();return"comment"}}if(d.test(n)){e.eatWhile(d);return"operator"}e.eatWhile(/[\w\$_]/);var a=e.current().toLowerCase();if(i.propertyIsEnumerable(a)){if(c.propertyIsEnumerable(a))m="newstatement";return"keyword"}else if(o.propertyIsEnumerable(a)){if(c.propertyIsEnumerable(a))m="newstatement";return"variable"}else if(l.propertyIsEnumerable(a)){if(c.propertyIsEnumerable(a))m="newstatement";return"modifier"}else if(s.propertyIsEnumerable(a)){if(c.propertyIsEnumerable(a))m="newstatement";return"type"}else if(u.propertyIsEnumerable(a)){if(c.propertyIsEnumerable(a))m="newstatement";return"builtin"}else{var h=a.length-1;while(h>=0&&(!isNaN(a[h])||a[h]=="_"))--h;if(h>0){var b=a.substr(0,h+1);if(s.propertyIsEnumerable(b)){if(c.propertyIsEnumerable(b))m="newstatement";return"type"}}}if(p.propertyIsEnumerable(a))return"atom";return null}function y(e){return function(t,n){var r=false,a,i=false;while((a=t.next())!=null){if(a==e&&!r){i=true;break}r=!r&&a=="\\"}if(i||!r)n.tokenize=h;return"string"}}function v(e,t){var n=false,r;while(r=e.next()){if(r=="/"&&n){t.tokenize=h;break}n=r=="*"}return"comment"}function b(e,t,n,r,a){this.indented=e;this.column=t;this.type=n;this.align=r;this.prev=a}function g(e,t,n){return e.context=new b(e.indented,t,n,null,e.context)}function w(e){var t=e.context.type;if(t==")"||t=="]"||t=="}")e.indented=e.context.indented;return e.context=e.context.prev}const k={name:"ecl",startState:function(e){return{tokenize:null,context:new b(-e,0,"top",false),indented:0,startOfLine:true}},token:function(e,t){var n=t.context;if(e.sol()){if(n.align==null)n.align=false;t.indented=e.indentation();t.startOfLine=true}if(e.eatSpace())return null;m=null;var r=(t.tokenize||h)(e,t);if(r=="comment"||r=="meta")return r;if(n.align==null)n.align=true;if((m==";"||m==":")&&n.type=="statement")w(t);else if(m=="{")g(t,e.column(),"}");else if(m=="[")g(t,e.column(),"]");else if(m=="(")g(t,e.column(),")");else if(m=="}"){while(n.type=="statement")n=w(t);if(n.type=="}")n=w(t);while(n.type=="statement")n=w(t)}else if(m==n.type)w(t);else if(n.type=="}"||n.type=="top"||n.type=="statement"&&m=="newstatement")g(t,e.column(),"statement");t.startOfLine=false;return r},indent:function(e,t,n){if(e.tokenize!=h&&e.tokenize!=null)return 0;var r=e.context,a=t&&t.charAt(0);if(r.type=="statement"&&a=="}")r=r.prev;var i=a==r.type;if(r.type=="statement")return r.indented+(a=="{"?0:n.unit);else if(r.align)return r.column+(i?0:1);else return r.indented+(i?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/}}}}]);
