"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9030],{9030:(e,t,O)=>{O.r(t);O.d(t,{completeFromSchema:()=>q,xml:()=>Z,xmlLanguage:()=>A});var n=O(11705);var r=O(6016);const a=1,l=2,s=3,o=4,i=5,y=35,c=36,p=37,$=11,u=13;function f(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function S(e){return e==9||e==10||e==13||e==32}let m=null,g=null,d=0;function P(e,t){let O=e.pos+t;if(g==e&&d==O)return m;while(S(e.peek(t)))t++;let n="";for(;;){let O=e.peek(t);if(!f(O))break;n+=String.fromCharCode(O);t++}g=e;d=O;return m=n||null}function _(e,t){this.name=e;this.parent=t;this.hash=t?t.hash:0;for(let O=0;O<e.length;O++)this.hash+=(this.hash<<4)+e.charCodeAt(O)+(e.charCodeAt(O)<<8)}const v=new n.IK({start:null,shift(e,t,O,n){return t==a?new _(P(n,1)||"",e):e},reduce(e,t){return t==$&&e?e.parent:e},reuse(e,t,O,n){let r=t.type.id;return r==a||r==u?new _(P(n,1)||"",e):e},hash(e){return e?e.hash:0},strict:false});const h=new n.Jq(((e,t)=>{if(e.next!=60)return;e.advance();if(e.next==47){e.advance();let O=P(e,0);if(!O)return e.acceptToken(i);if(t.context&&O==t.context.name)return e.acceptToken(l);for(let n=t.context;n;n=n.parent)if(n.name==O)return e.acceptToken(s,-2);e.acceptToken(o)}else if(e.next!=33&&e.next!=63){return e.acceptToken(a)}}),{contextual:true});function T(e,t){return new n.Jq((O=>{for(let n=0,r=0;;r++){if(O.next<0){if(r)O.acceptToken(e);break}if(O.next==t.charCodeAt(n)){n++;if(n==t.length){if(r>=t.length)O.acceptToken(e,1-t.length);break}}else{n=O.next==t.charCodeAt(0)?1:0}O.advance()}}))}const b=T(y,"--\x3e");const w=T(c,"?>");const C=T(p,"]]>");const W=(0,r.styleTags)({Text:r.tags.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":r.tags.angleBracket,TagName:r.tags.tagName,"MismatchedCloseTag/Tagname":[r.tags.tagName,r.tags.invalid],AttributeName:r.tags.attributeName,AttributeValue:r.tags.attributeValue,Is:r.tags.definitionOperator,"EntityReference CharacterReference":r.tags.character,Comment:r.tags.blockComment,ProcessingInst:r.tags.processingInstruction,DoctypeDecl:r.tags.documentMeta,Cdata:r.tags.special(r.tags.string)});const V=n.WQ.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:v,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[W],skippedNodes:[0],repeatNodeCount:8,tokenData:"IX~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O*l!O!P$n!P!Q,{!Q![$n![!].e!]!^$n!^!_1v!_!`Cz!`!aDm!a!bE`!b!c$n!c!}.e!}#P$n#P#QFx#Q#R$n#R#S.e#S#T$n#T#o.e#o%W$n%W%o.e%o%p$n%p&a.e&a&b$n&b1p.e1p4U$n4U4d.e4d4e$n4e$IS.e$IS$I`$n$I`$Ib.e$Ib$Kh$n$Kh%#t.e%#t&/x$n&/x&Et.e&Et&FV$n&FV;'S.e;'S;:j1p;:j;=`&e<%l?&r$n?&r?Ah.e?Ah?BY$n?BY?Mn.e?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^VOp(sqs(sst)ht!](s!^;'S(s;'S;=`)b<%lO(s~(vVOp(sqs(st!](s!]!^)]!^;'S(s;'S;=`)b<%lO(s~)bOW~~)eP;=`<%l(s~)kTOp)zq!])z!^;'S)z;'S;=`*f<%lO)z~)}UOp)zq!])z!]!^*a!^;'S)z;'S;=`*f<%lO)z~*fOX~~*iP;=`<%l)zZ*sYVP{WOr$nrs%_sv$nw}$n}!O+c!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ+jYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a,Y!a;'S$n;'S;=`&e<%lO$nZ,cW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n]-SYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-r!a;'S$n;'S;=`&e<%lO$n]-{WdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_.p!O`S^QVP{WOr$nrs%_sv$nw}$n}!O.e!O!P.e!P!Q$n!Q![.e![!].e!]!^$n!^!_%y!_!c$n!c!}.e!}#R$n#R#S.e#S#T$n#T#o.e#o$}$n$}%O.e%O%W$n%W%o.e%o%p$n%p&a.e&a&b$n&b1p.e1p4U.e4U4d.e4d4e$n4e$IS.e$IS$I`$n$I`$Ib.e$Ib$Je$n$Je$Jg.e$Jg$Kh$n$Kh%#t.e%#t&/x$n&/x&Et.e&Et&FV$n&FV;'S.e;'S;:j1p;:j;=`&e<%l?&r$n?&r?Ah.e?Ah?BY$n?BY?Mn.e?MnO$n_1sP;=`<%l.eX1{W{WOq%yqr2esv%yw!a%y!a!bCd!b;'S%y;'S;=`&_<%lO%yX2j]{WOr%ysv%yw}%y}!O3c!O!f%y!f!g4e!g!}%y!}#O9t#O#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX3hV{WOr%ysv%yw}%y}!O3}!O;'S%y;'S;=`&_<%lO%yX4UT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX4jV{WOr%ysv%yw!q%y!q!r5P!r;'S%y;'S;=`&_<%lO%yX5UV{WOr%ysv%yw!e%y!e!f5k!f;'S%y;'S;=`&_<%lO%yX5pV{WOr%ysv%yw!v%y!v!w6V!w;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!{%y!{!|6q!|;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!r%y!r!s7]!s;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!g%y!g!h7w!h;'S%y;'S;=`&_<%lO%yX7|X{WOr7wrs8isv7wvw8iw!`7w!`!a9W!a;'S7w;'S;=`9n<%lO7wP8lTO!`8i!`!a8{!a;'S8i;'S;=`9Q<%lO8iP9QOiPP9TP;=`<%l8iX9_TiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX9qP;=`<%l7wX9yX{WOr%ysv%yw!e%y!e!f:f!f#V%y#V#W=t#W;'S%y;'S;=`&_<%lO%yX:kV{WOr%ysv%yw!f%y!f!g;Q!g;'S%y;'S;=`&_<%lO%yX;VV{WOr%ysv%yw!c%y!c!d;l!d;'S%y;'S;=`&_<%lO%yX;qV{WOr%ysv%yw!v%y!v!w<W!w;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!c%y!c!d<r!d;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!}%y!}#O=^#O;'S%y;'S;=`&_<%lO%yX=eT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX=yV{WOr%ysv%yw#W%y#W#X>`#X;'S%y;'S;=`&_<%lO%yX>eV{WOr%ysv%yw#T%y#T#U>z#U;'S%y;'S;=`&_<%lO%yX?PV{WOr%ysv%yw#h%y#h#i?f#i;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#T%y#T#U<r#U;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#c%y#c#d@l#d;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#V%y#V#WAW#W;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#h%y#h#iAr#i;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#m%y#m#nB^#n;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#d%y#d#eBx#e;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#X%y#X#Y7w#Y;'S%y;'S;=`&_<%lO%yXCkT!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZDTWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_DvW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZEgYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aFV!a;'S$n;'S;=`&e<%lO$nZF`W!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGPYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QGo#Q;'S$n;'S;=`&e<%lO$nZGvYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aHf!a;'S$n;'S;=`&e<%lO$nZHoWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[h,b,w,C,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});var x=O(24104);function X(e,t){let O=t&&t.getChild("TagName");return O?e.sliceString(O.from,O.to):""}function Q(e,t){let O=t&&t.firstChild;return!O||O.name!="OpenTag"?"":X(e,O)}function k(e,t,O){let n=t&&t.getChildren("Attribute").find((e=>e.from<=O&&e.to>=O));let r=n&&n.getChild("AttributeName");return r?e.sliceString(r.from,r.to):""}function G(e){for(let t=e&&e.parent;t;t=t.parent)if(t.name=="Element")return t;return null}function E(e,t){var O;let n=(0,x.syntaxTree)(e).resolveInner(t,-1),r=null;for(let a=n;!r&&a.parent;a=a.parent)if(a.name=="OpenTag"||a.name=="CloseTag"||a.name=="SelfClosingTag"||a.name=="MismatchedCloseTag")r=a;if(r&&(r.to>t||r.lastChild.type.isError)){let e=r.parent;if(n.name=="TagName")return r.name=="CloseTag"||r.name=="MismatchedCloseTag"?{type:"closeTag",from:n.from,context:e}:{type:"openTag",from:n.from,context:G(e)};if(n.name=="AttributeName")return{type:"attrName",from:n.from,context:r};if(n.name=="AttributeValue")return{type:"attrValue",from:n.from,context:r};let O=n==r||n.name=="Attribute"?n.childBefore(t):n;if((O===null||O===void 0?void 0:O.name)=="StartTag")return{type:"openTag",from:t,context:G(e)};if((O===null||O===void 0?void 0:O.name)=="StartCloseTag"&&O.to<=t)return{type:"closeTag",from:t,context:e};if((O===null||O===void 0?void 0:O.name)=="Is")return{type:"attrValue",from:t,context:r};if(O)return{type:"attrName",from:t,context:r};return null}else if(n.name=="StartCloseTag"){return{type:"closeTag",from:t,context:n.parent}}while(n.parent&&n.to==t&&!((O=n.lastChild)===null||O===void 0?void 0:O.type.isError))n=n.parent;if(n.name=="Element"||n.name=="Text"||n.name=="Document")return{type:"tag",from:t,context:n.name=="Element"?n:G(n)};return null}class R{constructor(e,t,O){this.attrs=t;this.attrValues=O;this.children=[];this.name=e.name;this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name});this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name});this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2});this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"});this.text=e.textContent?e.textContent.map((e=>({label:e,type:"text"}))):[]}}const Y=/^[:\-\.\w\u00b7-\uffff]*$/;function z(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function j(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function q(e,t){let O=[],n=[];let r=Object.create(null);for(let o of t){let e=z(o);O.push(e);if(o.global)n.push(e);if(o.values)r[o.name]=o.values.map(j)}let a=[],l=[];let s=Object.create(null);for(let o of e){let e=n,t=r;if(o.attributes)e=e.concat(o.attributes.map((e=>{if(typeof e=="string")return O.find((t=>t.label==e))||{label:e,type:"property"};if(e.values){if(t==r)t=Object.create(t);t[e.name]=e.values.map(j)}return z(e)})));let i=new R(o,e,t);s[i.name]=i;a.push(i);if(o.top)l.push(i)}if(!l.length)l=a;for(let o=0;o<a.length;o++){let t=e[o],O=a[o];if(t.children){for(let e of t.children)if(s[e])O.children.push(s[e])}else{O.children=a}}return e=>{var t;let{doc:O}=e.state,o=E(e.state,e.pos);if(!o||o.type=="tag"&&!e.explicit)return null;let{type:i,from:y,context:c}=o;if(i=="openTag"){let e=l;let t=Q(O,c);if(t){let O=s[t];e=(O===null||O===void 0?void 0:O.children)||a}return{from:y,options:e.map((e=>e.completion)),validFor:Y}}else if(i=="closeTag"){let n=Q(O,c);return n?{from:y,to:e.pos+(O.sliceString(e.pos,e.pos+1)==">"?1:0),options:[((t=s[n])===null||t===void 0?void 0:t.closeNameCompletion)||{label:n+">",type:"type"}],validFor:Y}:null}else if(i=="attrName"){let e=s[X(O,c)];return{from:y,options:(e===null||e===void 0?void 0:e.attrs)||n,validFor:Y}}else if(i=="attrValue"){let t=k(O,c,y);if(!t)return null;let n=s[X(O,c)];let a=((n===null||n===void 0?void 0:n.attrValues)||r)[t];if(!a||!a.length)return null;return{from:y,to:e.pos+(O.sliceString(e.pos,e.pos+1)=='"'?1:0),options:a,validFor:/^"[^"]*"?$/}}else if(i=="tag"){let t=Q(O,c),n=s[t];let r=[],o=c&&c.lastChild;if(t&&(!o||o.name!="CloseTag"||X(O,o)!=t))r.push(n?n.closeCompletion:{label:"</"+t+">",type:"type",boost:2});let i=r.concat(((n===null||n===void 0?void 0:n.children)||(c?a:l)).map((e=>e.openCompletion)));if(c&&(n===null||n===void 0?void 0:n.text.length)){let t=c.firstChild;if(t.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(t.to,e.pos)))i=i.concat(n.text)}return{from:y,options:i,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else{return null}}}const A=x.LRLanguage.define({name:"xml",parser:V.configure({props:[x.indentNodeProp.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),x.foldNodeProp.add({Element(e){let t=e.firstChild,O=e.lastChild;if(!t||t.name!="OpenTag")return null;return{from:t.to,to:O.name=="CloseTag"?O.from:e.to}}}),x.bracketMatchingHandle.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function Z(e={}){return new x.LanguageSupport(A,A.data.of({autocomplete:q(e.elements||[],e.attributes||[])}))}}}]);
