"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[4878],{74878:(e,t,n)=>{n.r(t);n.d(t,{cypher:()=>f});var r=function(e){return new RegExp("^(?:"+e.join("|")+")$","i")};var a=function(e){o=null;var t=e.next();if(t==='"'){e.match(/^.*?"/);return"string"}if(t==="'"){e.match(/^.*?'/);return"string"}if(/[{}\(\),\.;\[\]]/.test(t)){o=t;return"punctuation"}else if(t==="/"&&e.eat("/")){e.skipToEnd();return"comment"}else if(d.test(t)){e.eatWhile(d);return null}else{e.eatWhile(/[_\w\d]/);if(e.eat(":")){e.eatWhile(/[\w\d_\-]/);return"atom"}var n=e.current();if(l.test(n))return"builtin";if(c.test(n))return"def";if(u.test(n)||p.test(n))return"keyword";return"variable"}};var i=function(e,t,n){return e.context={prev:e.context,indent:e.indent,col:n,type:t}};var s=function(e){e.indent=e.context.indent;return e.context=e.context.prev};var o;var l=r(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]);var c=r(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]);var u=r(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]);var p=r(["access","active","assign","all","alter","as","catalog","change","copy","create","constraint","constraints","current","database","databases","dbms","default","deny","drop","element","elements","exists","from","grant","graph","graphs","if","index","indexes","label","labels","management","match","name","names","new","node","nodes","not","of","on","or","password","populated","privileges","property","read","relationship","relationships","remove","replace","required","revoke","role","roles","set","show","start","status","stop","suspended","to","traverse","type","types","user","users","with","write"]);var d=/[*+\-<>=&|~%^]/;const f={name:"cypher",startState:function(){return{tokenize:a,context:null,indent:0,col:0}},token:function(e,t){if(e.sol()){if(t.context&&t.context.align==null){t.context.align=false}t.indent=e.indentation()}if(e.eatSpace()){return null}var n=t.tokenize(e,t);if(n!=="comment"&&t.context&&t.context.align==null&&t.context.type!=="pattern"){t.context.align=true}if(o==="("){i(t,")",e.column())}else if(o==="["){i(t,"]",e.column())}else if(o==="{"){i(t,"}",e.column())}else if(/[\]\}\)]/.test(o)){while(t.context&&t.context.type==="pattern"){s(t)}if(t.context&&o===t.context.type){s(t)}}else if(o==="."&&t.context&&t.context.type==="pattern"){s(t)}else if(/atom|string|variable/.test(n)&&t.context){if(/[\}\]]/.test(t.context.type)){i(t,"pattern",e.column())}else if(t.context.type==="pattern"&&!t.context.align){t.context.align=true;t.context.col=e.column()}}return n},indent:function(e,t,n){var r=t&&t.charAt(0);var a=e.context;if(/[\]\}]/.test(r)){while(a&&a.type==="pattern"){a=a.prev}}var i=a&&r===a.type;if(!a)return 0;if(a.type==="keywords")return null;if(a.align)return a.col+(i?0:1);return a.indent+(i?0:n.unit)}}}}]);
