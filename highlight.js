/*!
  Highlight.js v11.3.1 (git: 2104d236a2)
  (c) 2006-2025 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function n(e){return e instanceof Map?e.clear=e.delete=e.set=()=>{throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{throw Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((t=>{var s=e[t];"object"!=typeof s||Object.isFrozen(s)||n(s)})),e}e.exports=n,e.exports.default=n;var t=e.exports;class s{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((e=>{for(const n in e)t[n]=e[n]})),t}const r=e=>!!e.kind;class o{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!r(e))return;let n=e.kind;n=e.sublanguage?"language-"+n:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){r(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new o(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}function g(e){return p("(?=",e,")")}function u(e){return p("(?:",e,")*")}function h(e){return p("(?:",e,")?")}function p(...e){return e.map((e=>d(e))).join("")}function b(...e){const n=(e=>{const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}})(e);return"("+(n.capture?"":"?:")+e.map((e=>d(e))).join("|")+")"}function m(e){return RegExp(e.toString()+"|").exec("").length-1}const f=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let s=d(e),a="";for(;s.length>0;){const e=f.exec(s);if(!e){a+=s;break}a+=s.substring(0,e.index),s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+(Number(e[1])+n):(a+=e[0],"("===e[0]&&t++)}return a})).map((e=>`(${e})`)).join(n)}const y="[a-zA-Z]\\w*",_="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",v="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",x="\\b(0b[01]+)",N={begin:"\\\\[\\s\\S]",relevance:0},S={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[N]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[N]},A=(e,n,t={})=>{const s=i({scope:"comment",begin:e,end:n,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const a=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:p(/[ ]+/,"(",a,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},R=A("//","$"),O=A("/\\*","\\*/"),M=A("#","$");var B=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:y,UNDERSCORE_IDENT_RE:_,NUMBER_RE:w,C_NUMBER_RE:v,BINARY_NUMBER_RE:x,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=p(n,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:N,APOS_STRING_MODE:S,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:A,C_LINE_COMMENT_MODE:R,C_BLOCK_COMMENT_MODE:O,HASH_COMMENT_MODE:M,NUMBER_MODE:{scope:"number",begin:w,relevance:0},C_NUMBER_MODE:{scope:"number",begin:v,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:x,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[N,{begin:/\[/,end:/\]/,relevance:0,contains:[N]}]}]},TITLE_MODE:{scope:"title",begin:y,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:_,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+_,relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})});function T(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function C(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function I(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function j(e,n){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function L(e,n){if(e.match){if(e.begin||e.end)throw Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function D(e,n){void 0===e.relevance&&(e.relevance=1)}const $=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=p(t.beforeMatch,g(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},P=["of","and","for","in","not","or","if","then","parent","list","value"];function z(e,n,t="keyword"){const s=Object.create(null);return"string"==typeof e?a(t,e.split(" ")):Array.isArray(e)?a(t,e):Object.keys(e).forEach((t=>{Object.assign(s,z(e[t],n,t))})),s;function a(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((n=>{const t=n.split("|");s[t[0]]=[e,U(t[0],t[1])]}))}}function U(e,n){return n?Number(n):(e=>P.includes(e.toLowerCase()))(e)?0:1}const H={},F=e=>{console.error(e)},K=(e,...n)=>{console.log("WARN: "+e,...n)},G=(e,n)=>{H[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),H[`${e}/${n}`]=!0)},Z=Error();function W(e,n,{key:t}){let s=0;const a=e[t],i={},r={};for(let e=1;e<=n.length;e++)r[e+s]=a[e],i[e+s]=!0,s+=m(n[e-1]);e[t]=r,e[t]._emit=i,e[t]._multi=!0}function q(e){(e=>{e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),(e=>{if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw F("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Z;if("object"!=typeof e.beginScope||null===e.beginScope)throw F("beginScope must be object"),Z;W(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw F("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Z;if("object"!=typeof e.endScope||null===e.endScope)throw F("endScope must be object"),Z;W(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function X(e){function n(n,t){return RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=m(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(E(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),s=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,s)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function t(a,r){const o=a;if(a.isCompiled)return o;[C,L,q,$].forEach((e=>e(a,r))),e.compilerExtensions.forEach((e=>e(a,r))),a.__beforeBegin=null,[I,j,D].forEach((e=>e(a,r))),a.isCompiled=!0;let c=null;return"object"==typeof a.keywords&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),c=a.keywords.$pattern,delete a.keywords.$pattern),c=c||/\w+/,a.keywords&&(a.keywords=z(a.keywords,e.case_insensitive)),o.keywordPatternRe=n(c,!0),r&&(a.begin||(a.begin=/\B|\b/),o.beginRe=n(o.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(o.endRe=n(o.end)),o.terminatorEnd=d(o.end)||"",a.endsWithParent&&r.terminatorEnd&&(o.terminatorEnd+=(a.end?"|":"")+r.terminatorEnd)),a.illegal&&(o.illegalRe=n(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((n=>i(e,{variants:null},n)))),e.cachedVariants?e.cachedVariants:J(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e))("self"===e?a:e)))),a.contains.forEach((e=>{t(e,o)})),a.starts&&t(a.starts,r),o.matcher=(e=>{const n=new s;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n})(o),o}(e)}function J(e){return!!e&&(e.endsWithParent||J(e.starts))}class Q extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const V=a,Y=i,ee=Symbol("nomatch");var ne=(e=>{const n=Object.create(null),a=Object.create(null),i=[];let r=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function m(e){return d.noHighlightRe.test(e)}function f(e,n,t){let s="",a="";"object"==typeof n?(s=e,t=n.ignoreIllegals,a=n.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,s=n),void 0===t&&(t=!0);const i={code:s,language:a};k("before:highlight",i);const r=i.result?i.result:E(i.language,i.code,t);return r.code=i.code,k("after:highlight",r),r}function E(e,t,a,i){const c=Object.create(null);function l(){if(!S.keywords)return void A.addText(R);let e=0;S.keywordPatternRe.lastIndex=0;let n=S.keywordPatternRe.exec(R),t="";for(;n;){t+=R.substring(e,n.index);const a=w.case_insensitive?n[0].toLowerCase():n[0],i=(s=a,S.keywords[s]);if(i){const[e,s]=i;if(A.addText(t),t="",c[a]=(c[a]||0)+1,c[a]<=7&&(O+=s),e.startsWith("_"))t+=n[0];else{const t=w.classNameAliases[e]||e;A.addKeyword(n[0],t)}}else t+=n[0];e=S.keywordPatternRe.lastIndex,n=S.keywordPatternRe.exec(R)}var s;t+=R.substr(e),A.addText(t)}function g(){null!=S.subLanguage?(()=>{if(""===R)return;let e=null;if("string"==typeof S.subLanguage){if(!n[S.subLanguage])return void A.addText(R);e=E(S.subLanguage,R,!0,k[S.subLanguage]),k[S.subLanguage]=e._top}else e=y(R,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(O+=e.relevance),A.addSublanguage(e._emitter,e.language)})():l(),R=""}function u(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const s=w.classNameAliases[e[t]]||e[t],a=n[t];s?A.addKeyword(a,s):(R=a,l(),R=""),t++}}function h(e,n){return e.scope&&"string"==typeof e.scope&&A.openNode(w.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(A.addKeyword(R,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(u(e.beginScope,n),R="")),S=Object.create(e,{parent:{value:S}}),S}function p(e,n,t){let a=((e,n)=>{const t=e&&e.exec(n);return t&&0===t.index})(e.endRe,t);if(a){if(e["on:end"]){const t=new s(e);e["on:end"](n,t),t.isMatchIgnored&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,n,t)}function b(e){return 0===S.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function m(e){const n=e[0],s=t.substr(e.index),a=p(S,e,s);if(!a)return ee;const i=S;S.endScope&&S.endScope._wrap?(g(),A.addKeyword(n,S.endScope._wrap)):S.endScope&&S.endScope._multi?(g(),u(S.endScope,e)):i.skip?R+=n:(i.returnEnd||i.excludeEnd||(R+=n),g(),i.excludeEnd&&(R=n));do{S.scope&&A.closeNode(),S.skip||S.subLanguage||(O+=S.relevance),S=S.parent}while(S!==a.parent);return a.starts&&h(a.starts,e),i.returnEnd?0:n.length}let f={};function _(n,i){const o=i&&i[0];if(R+=n,null==o)return g(),0;if("begin"===f.type&&"end"===i.type&&f.index===i.index&&""===o){if(R+=t.slice(i.index,i.index+1),!r){const n=Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=f.rule,n}return 1}if(f=i,"begin"===i.type)return(e=>{const n=e[0],t=e.rule,a=new s(t),i=[t.__beforeBegin,t["on:begin"]];for(const t of i)if(t&&(t(e,a),a.isMatchIgnored))return b(n);return t.skip?R+=n:(t.excludeBegin&&(R+=n),g(),t.returnBegin||t.excludeBegin||(R=n)),h(t,e),t.returnBegin?0:n.length})(i);if("illegal"===i.type&&!a){const e=Error('Illegal lexeme "'+o+'" for mode "'+(S.scope||"<unnamed>")+'"');throw e.mode=S,e}if("end"===i.type){const e=m(i);if(e!==ee)return e}if("illegal"===i.type&&""===o)return 1;if(B>1e5&&B>3*i.index)throw Error("potential infinite loop, way more iterations than matches");return R+=o,o.length}const w=x(e);if(!w)throw F(o.replace("{}",e)),Error('Unknown language: "'+e+'"');const v=X(w);let N="",S=i||v;const k={},A=new d.__emitter(d);(()=>{const e=[];for(let n=S;n!==w;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>A.openNode(e)))})();let R="",O=0,M=0,B=0,T=!1;try{for(S.matcher.considerAll();;){B++,T?T=!1:S.matcher.considerAll(),S.matcher.lastIndex=M;const e=S.matcher.exec(t);if(!e)break;const n=_(t.substring(M,e.index),e);M=e.index+n}return _(t.substr(M)),A.closeAllNodes(),A.finalize(),N=A.toHTML(),{language:e,value:N,relevance:O,illegal:!1,_emitter:A,_top:S}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:V(t),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:M,context:t.slice(M-100,M+100),mode:n.mode,resultSoFar:N},_emitter:A};if(r)return{language:e,value:V(t),illegal:!1,relevance:0,errorRaised:n,_emitter:A,_top:S};throw n}}function y(e,t){t=t||d.languages||Object.keys(n);const s=(e=>{const n={value:V(e),illegal:!1,relevance:0,_top:c,_emitter:new d.__emitter(d)};return n._emitter.addText(e),n})(e),a=t.filter(x).filter(S).map((n=>E(n,e,!1)));a.unshift(s);const i=a.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(x(e.language).supersetOf===n.language)return 1;if(x(n.language).supersetOf===e.language)return-1}return 0})),[r,o]=i,l=r;return l.secondBest=o,l}function _(e){let n=null;const t=(e=>{let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n);if(t){const n=x(t[1]);return n||(K(o.replace("{}",t[1])),K("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>m(e)||x(e)))})(e);if(m(t))return;if(k("before:highlightElement",{el:e,language:t}),e.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),d.throwUnescapedHTML))throw new Q("One of your code blocks includes unescaped HTML.",e.innerHTML);n=e;const s=n.textContent,i=t?f(s,{language:t,ignoreIllegals:!0}):y(s);e.innerHTML=i.value,((e,n,t)=>{const s=n&&a[n]||t;e.classList.add("hljs"),e.classList.add("language-"+s)})(e,t,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),k("after:highlightElement",{el:e,result:i,text:s})}let w=!1;function v(){"loading"!==document.readyState?document.querySelectorAll(d.cssSelector).forEach(_):w=!0}function x(e){return e=(e||"").toLowerCase(),n[e]||n[a[e]]}function N(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{a[e.toLowerCase()]=n}))}function S(e){const n=x(e);return n&&!n.disableAutodetect}function k(e,n){const t=e;i.forEach((e=>{e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{w&&v()}),!1),Object.assign(e,{highlight:f,highlightAuto:y,highlightAll:v,highlightElement:_,highlightBlock:e=>(G("10.7.0","highlightBlock will be removed entirely in v12.0"),G("10.7.0","Please use highlightElement now."),_(e)),configure:e=>{d=Y(d,e)},initHighlighting:()=>{v(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:()=>{v(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:(t,s)=>{let a=null;try{a=s(e)}catch(e){if(F("Language definition for '{}' could not be registered.".replace("{}",t)),!r)throw e;F(e),a=c}a.name||(a.name=t),n[t]=a,a.rawDefinition=s.bind(null,e),a.aliases&&N(a.aliases,{languageName:t})},unregisterLanguage:e=>{delete n[e];for(const n of Object.keys(a))a[n]===e&&delete a[n]},listLanguages:()=>Object.keys(n),getLanguage:x,registerAliases:N,autoDetection:S,inherit:Y,addPlugin:e=>{(e=>{e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),i.push(e)}}),e.debugMode=()=>{r=!1},e.safeMode=()=>{r=!0},e.versionString="11.3.1",e.regex={concat:p,lookahead:g,either:b,optional:h,anyNumberOfTimes:u};for(const e in B)"object"==typeof B[e]&&t(B[e]);return Object.assign(e,B),e})({});const te="[A-Za-z$_][0-9A-Za-z$_]*",se=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ae=["true","false","null","undefined","NaN","Infinity"],ie=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],re=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],oe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ce=["arguments","this","super","console","window","document","localStorage","module","global"],le=[].concat(oe,ie,re);function de(e){const n=e.regex,t=te,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,s=e.input[t];if("<"===s||","===s)return void n.ignoreMatch();let a;">"===s&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()),(a=e.input.substr(t).match(/^\s+extends\s+/))&&0===a.index&&n.ignoreMatch()}},a={$pattern:te,keyword:se,literal:ae,built_in:le,"variable.language":ce},i="[0-9](_?[0-9])*",r=`\\.(${i})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",c={className:"number",variants:[{begin:`(\\b(${o})((${r})|\\.)?|(${r}))[eE][+-]?(${i})\\b`},{begin:`\\b(${o})\\b((${r})\\b|\\.)?|(${r})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},l={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},d={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"xml"}},g={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"css"}},u={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,l]},h={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},p=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,d,g,u,c];l.contains=p.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(p)});const b=[].concat(h,l.contains),m=b.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(b)}]),f={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:m},E={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},y={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]+|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+/),className:"title.class",keywords:{_:[...ie,...re]}},_={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[f],illegal:/%/},w={match:n.concat(/\b/,(v=[...oe,"super"],n.concat("(?!",v.join("|"),")")),t,n.lookahead(/\(/)),className:"title.function",relevance:0};var v;const x={begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},N={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},f]},S="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",k={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,n.lookahead(S)],className:{1:"keyword",3:"title.function"},contains:[f]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:m,CLASS_REFERENCE:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,d,g,u,h,c,y,{className:"attr",begin:t+n.lookahead(":"),relevance:0},k,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[h,e.REGEXP_MODE,{className:"function",begin:S,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:m}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},_,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[f,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},x,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[f]},w,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},E,N,{match:/\$[(.]/}]}}var ge=Object.freeze({__proto__:null,grmr_json:e=>({name:"JSON",contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,{beginKeywords:"true false null"},e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}),grmr_typescript:e=>{const n=de(e),t=te,s=["any","void","number","boolean","string","object","never","enum"],a={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[n.exports.CLASS_REFERENCE]},r={$pattern:te,keyword:se.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:ae,built_in:le.concat(s),"variable.language":ce},o={className:"meta",begin:"@"+t},c=(e,n,t)=>{const s=e.contains.findIndex((e=>e.label===n));if(-1===s)throw Error("can not find mode to replace");e.contains.splice(s,1,t)};return Object.assign(n.keywords,r),n.exports.PARAMS_CONTAINS.push(o),n.contains=n.contains.concat([o,a,i]),c(n,"shebang",e.SHEBANG()),c(n,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),n.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n},grmr_bash:e=>{const n=e.regex,t={},s={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},s]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(r);const o={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},c=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],literal:["true","false"],built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]},contains:[c,e.SHEBANG(),l,o,e.HASH_COMMENT_MODE,i,{match:/(\/[a-z._-]+)+/},r,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}},grmr_powershell:e=>{const n={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},t={begin:"`[\\s\\S]",relevance:0},s={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},a={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[t,s,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},i={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},r=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),o={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},c={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[s]}]},l={begin:/using\s/,end:/$/,returnBegin:!0,contains:[a,i,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},d={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]},g=[d,r,t,e.NUMBER_MODE,a,i,{className:"built_in",variants:[{begin:"(Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where)+(-)[\\w\\d]+"}]},s,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/@\B/,relevance:0}],u={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{begin:"(string|char|byte|int|long|bool|decimal|single|double|DateTime|xml|array|hashtable|void)",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return d.contains.unshift(u),{name:"PowerShell",aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:n,contains:g.concat(o,c,l,{variants:[{className:"operator",begin:"(-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor)\\b"},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},u)}},grmr_dos:e=>{const n=e.COMMENT(/^\s*@?rem\b/,/$/,{relevance:10});return{name:"Batch file (DOS)",aliases:["bat","cmd"],case_insensitive:!0,illegal:/\/\*/,keywords:{keyword:["if","else","goto","for","in","do","call","exit","not","exist","errorlevel","defined","equ","neq","lss","leq","gtr","geq"],built_in:["prn","nul","lpt3","lpt2","lpt1","con","com4","com3","com2","com1","aux","shift","cd","dir","echo","setlocal","endlocal","set","pause","copy","append","assoc","at","attrib","break","cacls","cd","chcp","chdir","chkdsk","chkntfs","cls","cmd","color","comp","compact","convert","date","dir","diskcomp","diskcopy","doskey","erase","fs","find","findstr","format","ftype","graftabl","help","keyb","label","md","mkdir","mode","more","move","path","pause","print","popd","pushd","promt","rd","recover","rem","rename","replace","restore","rmdir","shift","sort","start","subst","time","title","tree","type","ver","verify","vol","ping","net","ipconfig","taskkill","xcopy","ren","del"]},contains:[{className:"variable",begin:/%%[^ ]|%[^ ]+?%|![^ ]+?!/},{className:"function",begin:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",end:"goto:eof",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),n]},{className:"number",begin:"\\b\\d+",relevance:0},n]}},grmr_python:e=>{const n=e.regex,t=/[\p{XID_Start}_]\p{XID_Continue}*/u,s={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},a={className:"meta",begin:/^(>>>|\.\.\.) /},i={className:"subst",begin:/\{/,end:/\}/,keywords:s,illegal:/#/},r={begin:/\{\{/,relevance:0},o={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a,r,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,r,i]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,r,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,i]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},c="[0-9](_?[0-9])*",l=`(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,d={className:"number",relevance:0,variants:[{begin:`(\\b(${c})|(${l}))[eE][+-]?(${c})[jJ]?\\b`},{begin:`(${l})[jJ]?`},{begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${c})[jJ]\\b`}]},g={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:s,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},u={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:["self",a,d,o,e.HASH_COMMENT_MODE]}]};return i.contains=[o,d,a],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,illegal:/(<\/|->|\?)|=>/,contains:[a,d,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},o,g,e.HASH_COMMENT_MODE,{match:[/def/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[u]},{variants:[{match:[/class/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/class/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[d,u,o]}]}}});const ue=ne;for(const e of Object.keys(ge)){const n=e.replace("grmr_","").replace("_","-");ue.registerLanguage(n,ge[e])}return ue}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);