"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6163],{46163:(e,n,t)=>{t.r(n);t.d(n,{sieve:()=>p});function r(e){var n={},t=e.split(" ");for(var r=0;r<t.length;++r)n[t[r]]=true;return n}var i=r("if elsif else stop require");var u=r("true false not");function a(e,n){var t=e.next();if(t=="/"&&e.eat("*")){n.tokenize=o;return o(e,n)}if(t==="#"){e.skipToEnd();return"comment"}if(t=='"'){n.tokenize=f(t);return n.tokenize(e,n)}if(t=="("){n._indent.push("(");n._indent.push("{");return null}if(t==="{"){n._indent.push("{");return null}if(t==")"){n._indent.pop();n._indent.pop()}if(t==="}"){n._indent.pop();return null}if(t==",")return null;if(t==";")return null;if(/[{}\(\),;]/.test(t))return null;if(/\d/.test(t)){e.eatWhile(/[\d]/);e.eat(/[KkMmGg]/);return"number"}if(t==":"){e.eatWhile(/[a-zA-Z_]/);e.eatWhile(/[a-zA-Z0-9_]/);return"operator"}e.eatWhile(/\w/);var r=e.current();if(r=="text"&&e.eat(":")){n.tokenize=l;return"string"}if(i.propertyIsEnumerable(r))return"keyword";if(u.propertyIsEnumerable(r))return"atom";return null}function l(e,n){n._multiLineString=true;if(!e.sol()){e.eatSpace();if(e.peek()=="#"){e.skipToEnd();return"comment"}e.skipToEnd();return"string"}if(e.next()=="."&&e.eol()){n._multiLineString=false;n.tokenize=a}return"string"}function o(e,n){var t=false,r;while((r=e.next())!=null){if(t&&r=="/"){n.tokenize=a;break}t=r=="*"}return"comment"}function f(e){return function(n,t){var r=false,i;while((i=n.next())!=null){if(i==e&&!r)break;r=!r&&i=="\\"}if(!r)t.tokenize=a;return"string"}}const p={name:"sieve",startState:function(e){return{tokenize:a,baseIndent:e||0,_indent:[]}},token:function(e,n){if(e.eatSpace())return null;return(n.tokenize||a)(e,n)},indent:function(e,n,t){var r=e._indent.length;if(n&&n[0]=="}")r--;if(r<0)r=0;return r*t.unit},languageData:{indentOnInput:/^\s*\}$/}}}}]);
