var RevealWebComponents=function(e,t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`),a="$lit$";class l{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],o=document.createTreeWalker(t.content,133,null,!1);let l=0,d=-1,u=0;const{strings:m,values:{length:v}}=e;for(;u<v;){const e=o.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)h(t[e].name,a)&&s++;for(;s-- >0;){const t=m[u],i=p.exec(t)[2],s=i.toLowerCase()+a,n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(r);this.parts.push({type:"attribute",index:d,name:i,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const s=e.parentNode,n=t.split(r),o=n.length-1;for(let t=0;t<o;t++){let i,o=n[t];if(""===o)i=c();else{const e=p.exec(o);null!==e&&h(e[2],a)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),i=document.createTextNode(o)}s.insertBefore(i,e),this.parts.push({type:"node",index:++d})}""===n[o]?(s.insertBefore(c(),e),i.push(e)):e.data=n[o],u+=o}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&d!==l||(d++,t.insertBefore(c(),e)),l=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(i.push(e),d--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const h=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,c=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,u=133;function m(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,u,null,!1);let o=_(s),r=s[o],a=-1,l=0;const h=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(h.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,r=s[o=_(s,o)]}h.forEach(e=>e.parentNode.removeChild(e))}const v=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,u,null,!1);for(;i.nextNode();)t++;return t},_=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1};const g=new WeakMap,f=e=>"function"==typeof e&&g.has(e),y={},w={};class S{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<s.length;)if(o=s[r],d(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}const b=` ${n} `;class V{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const l=p.exec(e);t+=null===l?e+(i?b:o):e.substr(0,l.index)+l[1]+l[2]+a+l[3]+n}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const C=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(C(e)||!x(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||C(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof V?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof S&&this.value.template===t)this.value.update(e.values);else{const i=new S(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)void 0===(i=t[s])&&(i=new N(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class R extends P{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends E{}let z=!1;(()=>{try{const e={get capture(){return z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class k{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function O(e){let t=U.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},U.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(n);return void 0===(i=t.keyString.get(s))&&(i=new l(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const U=new Map,D=new WeakMap;const F=new class{handleAttributeExpressions(e,t,i,s){const n=t[0];return"."===n?new R(e,t.slice(1),i).parts:"@"===n?[new k(e,t.slice(1),s.eventContext)]:"?"===n?[new A(e,t.slice(1),i)]:new P(e,t,i).parts}handleTextExpression(e){return new N(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const B=(e,t)=>`${e}--${t}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const j=e=>t=>{const i=B(t.type,e);let s=U.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},U.set(i,s));let o=s.stringsArray.get(t.strings);if(void 0!==o)return o;const r=t.strings.join(n);if(void 0===(o=s.keyString.get(r))){const i=t.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,e),o=new l(t,i),s.keyString.set(r,o)}return s.stringsArray.set(t.strings,o),o},q=["html","svg"],L=new Set,H=(e,t,i)=>{L.add(e);const s=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,e);const r=document.createElement("style");for(let e=0;e<o;e++){const t=n[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{q.forEach(t=>{const i=U.get(B(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),m(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null==i)return void s.appendChild(t);const o=document.createTreeWalker(s,u,null,!1);let r=_(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=v(t),i.parentNode.insertBefore(t,i));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=_(n,r);return}r=_(n,r)}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),m(i,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:$},Q=1,G=4,K=8,X=16,Y="finalized";class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this._requestUpdate(e,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Y)||e.finalize(),this[Y]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=$){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||W,n="function"==typeof s?s:s.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||W.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const s=this.constructor,n=s._attributeNameForProperty(e,i);if(void 0!==n){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=this._updateState|K,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~K}}_attributeToProperty(e,t){if(this._updateState&K)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=this._updateState|X,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,n=s.getPropertyOptions(e);s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|G;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Z[Y]=!0;const ee=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}),te=(e,t,i)=>{t.constructor.createProperty(i,e)};function ie(e){return(t,i)=>void 0!==i?te(e,t,i):ee(e,t)}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const ne={};class oe extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ne}}oe.finalized=!0,oe.render=((e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=D.has(t),r=I&&11===t.nodeType&&!!t.host,a=r&&!L.has(n),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let n=D.get(t);void 0===n&&(s(t,t.firstChild),D.set(t,n=new N(Object.assign({templateFactory:O},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:j(n)},i)),a){const e=D.get(l);D.delete(l);const i=e.value instanceof S?e.value.template:void 0;H(n,l,i),s(t,t.firstChild),t.appendChild(l),D.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)});var re=function(e,t,i,s){var n,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};e.RevealViewComponent=class extends oe{constructor(){super(...arguments),this.dashboardName="",this.canEdit=!1,this.canSaveAs=!1,this.startInEditMode=!1,this.showChangeVisualization=!1,this.showExportImage=!1,this.showFilters=!1,this.showMenu=!1,this.showRefresh=!1,this.showChangeDataSource=!1,this.showChangeTheme=!1,this.canAddVisualization=!1,this.advancedSettings="",this.serverSideSave=!1,this.singleVisualizationMode=!1,this.dashboard=null}setFilterSelectedValues(e,t){this._revealView&&this._revealView.setFilterSelectedValues(e,t)}refreshDashboardData(){this._revealView&&this._revealView.refreshDashboardData()}setDateFilter(e){this._revealView&&this._revealView.setDateFilter(e)}maximizeVisualization(e){return!!this._revealView&&this._revealView.maximizeVisualization(e)}minimizeVisualization(){return!!this._revealView&&this._revealView.minimizeVisualization()}static updateRevealTheme(e){t.ig.RevealView.updateRevealTheme(e)}updateSize(){null!=this._revealView&&this._revealView.updateSize()}prepareView(){var e=this;return new Promise(i=>{var s=this.dashboardName,n=null!=e.advancedSettings?window[e.advancedSettings]:null,o=null!=n?n.customDashboardBlobLoader:null;(null!=o?function(i,s){o(e,function(e){t.ig.RevealUtility.loadDashboardFromContainer(e,i,s)},s)}:function(e,i){t.ig.RevealUtility.loadDashboard(s.length>0?s:null,e,i)})(function(o){e.dashboard=o;var r=new t.ig.RevealSettings(s.length>0?e.dashboardName:null);if(r.dashboard=o,r.startInEditMode=e.startInEditMode,r.canEdit=e.canEdit,r.canSaveAs=e.canSaveAs,r.showChangeVisualization=e.showChangeVisualization,r.showExportImage=e.showExportImage,r.showFilters=e.showFilters,r.showMenu=e.showMenu,r.showRefresh=e.showRefresh,r.showChangeDataSource=e.showChangeDataSource,r.showChangeTheme=e.showChangeTheme,r.canAddVisualization=e.canAddVisualization,r.serverSideSave=e.serverSideSave,r.singleVisualizationMode=e.singleVisualizationMode,null!=n){var a=n.allFiltersSelectedValues;if(null!=a){var l=a.call(n,o);r.setAllFiltersSelectedValues(l)}var h=n.dateFilter;if(null!=h){var d=h.call(n,o);r.dateFilter=d}var c=n.maximizedVisualization;if(null!=c){var p=c.call(n,o);r.maximizedVisualization=p}}i(new ae(r,null))},function(e){i(new ae(null,e))})})}async createView(){this.prepareView().then(e=>{null==e.errorMsg&&(this._revealView=new t.ig.RevealView(this,e.settings),this.hookUpRevealEventHandlers(this._revealView))})}createRenderRoot(){return this}render(){return this.createView(),((e,...t)=>new V(e,t,"html",F))``}hookUpRevealEventHandlers(e){e.onDataSourcesRequested=(e=>{let t=new CustomEvent("onDataSourcesRequested",{detail:{callback:e},bubbles:!0,cancelable:!1});this.dispatchEvent(t)}),e.onVisualizationDataPointClicked=((e,t,i)=>{let s=new CustomEvent("onVisualizationDataPointClicked",{detail:{widget:e,cell:t,row:i},bubbles:!0,cancelable:!1});this.dispatchEvent(s)}),e.onImageExported=(e=>{let t=new CustomEvent("onImageExported",{detail:{img:e},bubbles:!0,cancelable:!1});this.dispatchEvent(t)}),e.onMaximizedVisualizationChanged=(()=>{let e=new CustomEvent("onMaximizedVisualizationChanged",{bubbles:!0,cancelable:!1});this.dispatchEvent(e)}),e.onSave=((e,t)=>{let i=new CustomEvent("onSave",{detail:{revealView:e,saveEventArgs:t},bubbles:!0,cancelable:!1});this.dispatchEvent(i)}),e.onVisualizationLinkingDashboard=((e,t,i)=>{let s=new CustomEvent("onVisualizationLinkingDashboard",{detail:{title:e,url:t,callback:i},bubbles:!0,cancelable:!1});this.dispatchEvent(s)}),e.onTooltipShowing=(e=>{let t=new CustomEvent("onTooltipShowing",{detail:{visualization:e.visualization,cell:e.cell,row:e.row},bubbles:!0,cancelable:!0});e.Cancel=!this.dispatchEvent(t)})}toImage(e){null!=this._revealView?this._revealView.toImage(e):e(null)}},re([ie({type:String,reflect:!0,attribute:"dashboard-name"})],e.RevealViewComponent.prototype,"dashboardName",void 0),re([ie({type:Boolean,reflect:!0,attribute:"can-edit"})],e.RevealViewComponent.prototype,"canEdit",void 0),re([ie({type:Boolean,reflect:!0,attribute:"can-save-as"})],e.RevealViewComponent.prototype,"canSaveAs",void 0),re([ie({type:Boolean,reflect:!0,attribute:"start-in-edit-mode"})],e.RevealViewComponent.prototype,"startInEditMode",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-change-visualization"})],e.RevealViewComponent.prototype,"showChangeVisualization",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-export-image"})],e.RevealViewComponent.prototype,"showExportImage",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-filters"})],e.RevealViewComponent.prototype,"showFilters",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-menu"})],e.RevealViewComponent.prototype,"showMenu",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-refresh"})],e.RevealViewComponent.prototype,"showRefresh",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-change-data-source"})],e.RevealViewComponent.prototype,"showChangeDataSource",void 0),re([ie({type:Boolean,reflect:!0,attribute:"show-change-theme"})],e.RevealViewComponent.prototype,"showChangeTheme",void 0),re([ie({type:Boolean,reflect:!0,attribute:"can-add-visualization"})],e.RevealViewComponent.prototype,"canAddVisualization",void 0),re([ie({type:String,reflect:!0,attribute:"advanced-settings"})],e.RevealViewComponent.prototype,"advancedSettings",void 0),re([ie({type:Boolean,reflect:!0,attribute:"server-side-save"})],e.RevealViewComponent.prototype,"serverSideSave",void 0),re([ie({type:Boolean,reflect:!0,attribute:"single-visualization-mode"})],e.RevealViewComponent.prototype,"singleVisualizationMode",void 0),re([ie({reflect:!1,noAccessor:!0})],e.RevealViewComponent.prototype,"dashboard",void 0),e.RevealViewComponent=re([(e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t))("reveal-view")],e.RevealViewComponent);class ae{constructor(e,t){this.settings=e,this.errorMsg=t}}return e}({},jQuery);
//# sourceMappingURL=reveal-webComponent.js.map