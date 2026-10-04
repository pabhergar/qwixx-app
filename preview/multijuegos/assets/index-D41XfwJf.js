(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const ir=[{id:"w1",className:"white1"},{id:"w2",className:"white2"},{id:"r",className:"red"},{id:"y",className:"yellow"},{id:"g",className:"green"},{id:"b",className:"blue"}],da={red:"r",yellow:"y",green:"g",blue:"b"},ua={r:"red",y:"yellow",g:"green",b:"blue"},ge=["red","yellow","green","blue"],rr={red:"ROJO",yellow:"AMARILLO",green:"VERDE",blue:"AZUL"},ha={0:0,1:1,2:3,3:6,4:10,5:15,6:21,7:28,8:36,9:45,10:55,11:66,12:78},q="lock",fa=5,or=4,pa=2,ma=5,X={red:["2","3","4","5","6","7","8","9","10","11","12"],yellow:["2","3","4","5","6","7","8","9","10","11","12"],green:["12","11","10","9","8","7","6","5","4","3","2"],blue:["12","11","10","9","8","7","6","5","4","3","2"]};function _a(){return{marks:{red:new Set,yellow:new Set,green:new Set,blue:new Set},penalties:0,closedRows:new Set}}function ar(){return{hasRolled:!1,marked:[],hasMarkedWhite:!1,hasMarkedColor:!1,hasValidated:!1,pendingClosedRows:new Set,myLockedClosures:new Set}}function ga(){return{userId:"",sessionId:"",game:"qwixx",isHost:!1,myPlayerId:"P1",myPlayerName:"",gameStarted:!1,gameOverTriggered:!1,reconnecting:!1,lobbyGames:[],sessionJoined:!1,presence:{},onlineUsers:[],playersList:[],activePlayerId:"P1",validatedPlayers:new Set,declaredClosures:new Set,turnCounter:0,dice:{w1:1,w2:1,r:1,y:1,g:1,b:1},board:_a(),turn:ar(),scores:{}}}const l=ga();function hs(){l.turn=ar()}function ya(){l.sessionId="",l.game="qwixx",l.isHost=!1,l.myPlayerId="P1",l.gameStarted=!1,l.gameOverTriggered=!1,l.sessionJoined=!1,l.reconnecting=!1,l.presence={},l.playersList=[],l.activePlayerId="P1",l.validatedPlayers.clear(),l.declaredClosures.clear(),l.turnCounter=0,l.scores={}}function va(t){t&&(ge.forEach(e=>{l.board.marks[e]=new Set(t.marks?.[e]||[])}),l.board.penalties=t.penalties||0,l.board.closedRows=new Set(t.closedRows||[]))}function Ea(t){t&&(l.turn={hasRolled:!!t.hasRolled,marked:t.marked||[],hasMarkedWhite:!!t.hasMarkedWhite,hasMarkedColor:!!t.hasMarkedColor,hasValidated:!!t.hasValidated,pendingClosedRows:new Set(t.pendingClosedRows||[]),myLockedClosures:new Set(t.myLockedClosures||[])})}function Ca(t){t&&(t.game&&(l.game=t.game),l.playersList=t.playersList||[],l.activePlayerId=t.activePlayerId||"P1",l.gameStarted=!!t.gameStarted,l.dice=t.dice||l.dice,l.turnCounter=t.turnCounter||0,l.turn.hasRolled=!!t.hasRolledInTurn,l.validatedPlayers=new Set(t.validatedPlayers||[]),l.declaredClosures=new Set(t.declaredClosures||[]))}function oi(t,e){ge.includes(t)&&l.board.marks[t].add(e)}function Rn(t,e){ge.includes(t)&&l.board.marks[t].delete(e)}function Ia(){l.board.penalties<or&&(l.board.penalties+=1)}function ba(t=[]){t.forEach(e=>l.board.closedRows.add(e))}function wa(){return"P"+(l.playersList.reduce((e,n)=>Math.max(e,parseInt(n.id.slice(1),10)||0),0)+1)}function Sa(){const t=l.playersList.find(e=>e.id===l.activePlayerId);return t?t.name:l.activePlayerId}const ai="qwixx_user_id",Ta=crypto.randomUUID();function ye(){let t=localStorage.getItem(ai);return t||(t=crypto.randomUUID(),localStorage.setItem(ai,t)),t}function Wt(){return Ta}const Na=()=>{};var li={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(t,e){if(!t)throw Je(e)},Je=function(t){return new Error("Firebase Database ("+lr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ra=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},fs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|d>>6,m=d&63;c||(m=64,o||(f=64)),s.push(n[h],n[u],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ra(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||d==null||u==null)throw new ka;const f=r<<2|a>>4;if(s.push(f),d!==64){const m=a<<4&240|d>>2;if(s.push(m),u!==64){const _=d<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ka extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dr=function(t){const e=cr(t);return fs.encodeByteArray(e,!0)},Ht=function(t){return dr(t).replace(/\./g,"")},Hn=function(t){try{return fs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return ur(void 0,t)}function ur(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xa(n)||(t[n]=ur(t[n],e[n]));return t}function xa(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=()=>Aa().__FIREBASE_DEFAULTS__,Oa=()=>{if(typeof process>"u"||typeof li>"u")return;const t=li.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},La=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hn(t[1]);return e&&JSON.parse(e)},hr=()=>{try{return Na()||Da()||Oa()||La()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ma=t=>hr()?.emulatorHosts?.[t],Fa=t=>{const e=Ma(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fr=()=>hr()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ht(JSON.stringify(n)),Ht(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wa())}function Ha(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ua(){return lr.NODE_ADMIN===!0}function Va(){try{return typeof indexedDB=="object"}catch{return!1}}function $a(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="FirebaseError";class Rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qa,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ga(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,s)}}function Ga(t,e){try{let n=0,s="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){s+=t.substring(n);break}const r=t.indexOf("}",i+2);if(r===-1){s+=t.substring(n);break}const o=t.substring(i+2,r),a=e[o];s+=t.substring(n,i)+(a!=null?String(a):`<${o}?>`),n=r+1}return s}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return JSON.parse(t)}function O(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=mt(Hn(r[0])||""),n=mt(Hn(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},za=function(t){const e=_r(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ja=function(t){const e=_r(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $e(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Un(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ut(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ci(r)&&ci(o)){if(!Vt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ci(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],d,h;for(let u=0;u<80;u++){u<40?u<20?(d=a^r&(o^a),h=1518500249):(d=r^o^a,h=1859775393):u<60?(d=r&o|a&(r|o),h=2400959708):(d=r^o^a,h=3395469782);const f=(i<<5|i>>>27)+d+c+h+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qe(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},an=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ja(t){return(await fetch(t,{credentials:"include"})).ok}class _t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new J;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(el(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ve){return this.instances.has(e)}getOptions(e=ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Za(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ve){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Za(t){return t===ve?void 0:t}function el(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const nl={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},sl=N.INFO,il={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},rl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=il[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yr{constructor(e){this.name=e,this._logLevel=sl,this._logHandler=rl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const ol=(t,e)=>e.some(n=>t instanceof n);let di,ui;function al(){return di||(di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ll(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vr=new WeakMap,Vn=new WeakMap,Er=new WeakMap,kn=new WeakMap,ps=new WeakMap;function cl(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(he(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vr.set(n,t)}).catch(()=>{}),ps.set(e,t),e}function dl(t){if(Vn.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vn.set(t,e)}let $n={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Er.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return he(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ul(t){$n=t($n)}function hl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Pn(this),e,...n);return Er.set(s,e.sort?e.sort():[e]),he(s)}:ll().includes(t)?function(...e){return t.apply(Pn(this),e),he(vr.get(this))}:function(...e){return he(t.apply(Pn(this),e))}}function fl(t){return typeof t=="function"?hl(t):(t instanceof IDBTransaction&&dl(t),ol(t,al())?new Proxy(t,$n):t)}function he(t){if(t instanceof IDBRequest)return cl(t);if(kn.has(t))return kn.get(t);const e=fl(t);return e!==t&&(kn.set(t,e),ps.set(e,t)),e}const Pn=t=>ps.get(t);function pl(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=he(o);return s&&o.addEventListener("upgradeneeded",c=>{s(he(o.result),c.oldVersion,c.newVersion,he(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const ml=["get","getKey","getAll","getAllKeys","count"],_l=["put","add","delete","clear"],xn=new Map;function hi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xn.get(e))return xn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_l.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ml.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&c.done]))[0]};return xn.set(e,r),r}ul(t=>({...t,get:(e,n,s)=>hi(e,n)||t.get(e,n,s),has:(e,n)=>!!hi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yl(t){return t.getComponent()?.type==="VERSION"}const qn="@firebase/app",fi="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new yr("@firebase/app"),vl="@firebase/app-compat",El="@firebase/analytics-compat",Cl="@firebase/analytics",Il="@firebase/app-check-compat",bl="@firebase/app-check",wl="@firebase/auth",Sl="@firebase/auth-compat",Tl="@firebase/database",Nl="@firebase/data-connect",Rl="@firebase/database-compat",kl="@firebase/functions",Pl="@firebase/functions-compat",xl="@firebase/installations",Al="@firebase/installations-compat",Dl="@firebase/messaging",Ol="@firebase/messaging-compat",Ll="@firebase/performance",Ml="@firebase/performance-compat",Fl="@firebase/remote-config",Bl="@firebase/remote-config-compat",Wl="@firebase/storage",Hl="@firebase/storage-compat",Ul="@firebase/firestore",Vl="@firebase/ai",$l="@firebase/firestore-compat",ql="firebase",Gl="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]",zl={[qn]:"fire-core",[vl]:"fire-core-compat",[Cl]:"fire-analytics",[El]:"fire-analytics-compat",[bl]:"fire-app-check",[Il]:"fire-app-check-compat",[wl]:"fire-auth",[Sl]:"fire-auth-compat",[Tl]:"fire-rtdb",[Nl]:"fire-data-connect",[Rl]:"fire-rtdb-compat",[kl]:"fire-fn",[Pl]:"fire-fn-compat",[xl]:"fire-iid",[Al]:"fire-iid-compat",[Dl]:"fire-fcm",[Ol]:"fire-fcm-compat",[Ll]:"fire-perf",[Ml]:"fire-perf-compat",[Fl]:"fire-rc",[Bl]:"fire-rc-compat",[Wl]:"fire-gcs",[Hl]:"fire-gcs-compat",[Ul]:"fire-fst",[$l]:"fire-fst-compat",[Vl]:"fire-vertex","fire-js":"fire-js",[ql]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Map,jl=new Map,zn=new Map;function pi(t,e){try{t.container.addComponent(e)}catch(n){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qt(t){const e=t.name;if(zn.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;zn.set(e,t);for(const n of $t.values())pi(n,t);for(const n of jl.values())pi(n,t);return!0}function Yl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kl(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},se=new mr("app","Firebase",Ql);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=Gl;function Cr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Gn,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw se.create("bad-app-name",{appName:String(i)});if(n||(n=fr()),!n)throw se.create("no-options");const r=$t.get(i);if(r)if(Vt(n,r.options)){if(Vt(s,r.config))return r;throw se.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw se.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(n)});const o=new tl(i);for(const c of zn.values())o.addComponent(c);const a=new Jl(n,s,o);return $t.set(i,a),a}function Zl(t=Gn){const e=$t.get(t);if(!e&&t===Gn&&fr())return Cr();if(!e)throw se.create("no-app",{appName:t});return e}function We(t,e,n){let s=zl[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}qt(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="firebase-heartbeat-database",tc=1,gt="firebase-heartbeat-store";let An=null;function Ir(){return An||(An=pl(ec,tc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gt)}catch(n){console.warn(n)}}}}).catch(t=>{throw se.create("idb-open",{originalErrorMessage:t.message})})),An}async function nc(t){try{const n=(await Ir()).transaction(gt),s=await n.objectStore(gt).get(br(t));return await n.done,s}catch(e){if(e instanceof Rt)ae.warn(e.message);else{const n=se.create("idb-get",{originalErrorMessage:e?.message});ae.warn(n.message)}}}async function mi(t,e){try{const s=(await Ir()).transaction(gt,"readwrite");await s.objectStore(gt).put(e,br(t)),await s.done}catch(n){if(n instanceof Rt)ae.warn(n.message);else{const s=se.create("idb-set",{originalErrorMessage:n?.message});ae.warn(s.message)}}}function br(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=1024,ic=30;class rc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ac(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_i();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>ic){const i=lc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ae.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_i(),{heartbeatsToSend:n,unsentEntries:s}=oc(this._heartbeatsCache.heartbeats),i=Ht(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ae.warn(e),""}}}function _i(){return new Date().toISOString().substring(0,10)}function oc(t,e=sc){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),gi(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gi(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ac{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Va()?$a().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nc(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return mi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return mi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gi(t){return Ht(JSON.stringify({version:2,heartbeats:t})).length}function lc(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){qt(new _t("platform-logger",e=>new gl(e),"PRIVATE")),qt(new _t("heartbeat",e=>new rc(e),"PRIVATE")),We(qn,fi,t),We(qn,fi,"esm2020"),We("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cc("");var dc="firebase",uc="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(dc,uc,"app");var yi={};const vi="@firebase/database",Ei="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr="";function hc(t){wr=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),O(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return te(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fc(e)}}catch{}return new pc},Ce=Sr("localStorage"),mc=Sr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new yr("@firebase/database"),_c=function(){let t=1;return function(){return t++}}(),Tr=function(t){const e=Qa(t),n=new Ka;n.update(e);const s=n.digest();return fs.encodeByteArray(s)},kt=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=kt.apply(null,s):typeof s=="object"?e+=O(s):e+=s,e+=" "}return e};let ot=null,Ci=!0;const gc=function(t,e){p(!0,"Can't turn on custom loggers persistently."),He.logLevel=N.VERBOSE,ot=He.log.bind(He)},D=function(...t){if(Ci===!0&&(Ci=!1,ot===null&&mc.get("logging_enabled")===!0&&gc()),ot){const e=kt.apply(null,t);ot(e)}},Pt=function(t){return function(...e){D(t,...e)}},jn=function(...t){const e="FIREBASE INTERNAL ERROR: "+kt(...t);He.error(e)},le=function(...t){const e=`FIREBASE FATAL ERROR: ${kt(...t)}`;throw He.error(e),new Error(e)},W=function(...t){const e="FIREBASE WARNING: "+kt(...t);He.warn(e)},yc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&W("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ln=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vc=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ge="[MIN_NAME]",Se="[MAX_NAME]",Ae=function(t,e){if(t===e)return 0;if(t===Ge||e===Se)return-1;if(e===Ge||t===Se)return 1;{const n=Ii(t),s=Ii(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ec=function(t,e){return t===e?0:t<e?-1:1},nt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+O(e))},ms=function(t){if(typeof t!="object"||t===null)return O(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=O(e[s]),n+=":",n+=ms(t[e[s]]);return n+="}",n},Nr=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function L(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rr=function(t){p(!ln(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const d=[];for(c=n;c;c-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)d.push(r%2?1:0),r=Math.floor(r/2);d.push(i?1:0),d.reverse();const h=d.join("");let u="";for(c=0;c<64;c+=8){let f=parseInt(h.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},Cc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ic=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bc(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const wc=new RegExp("^-?(0*)\\d{1,10}$"),Sc=-2147483648,Tc=2147483647,Ii=function(t){if(wc.test(t)){const e=Number(t);if(e>=Sc&&e<=Tc)return e}return null},Xe=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw W("Exception was thrown by user callback.",n),e},Math.floor(0))}},Nc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},at=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Kl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){W(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',W(e)}}class Bt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="5",kr="v",Pr="s",xr="r",Ar="f",Dr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Or="ls",Lr="p",Yn="ac",Mr="websocket",Fr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1,d=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ce.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ce.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Pc(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wr(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let s;if(e===Mr)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fr)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pc(t)&&(n.ns=t.namespace);const i=[];return L(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.counters_={}}incrementCounter(e,n=1){te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pa(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={},On={};function gs(t){const e=t.toString();return Dn[e]||(Dn[e]=new xc),Dn[e]}function Ac(t,e){const n=t.toString();return On[n]||(On[n]=e()),On[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Xe(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="start",Oc="close",Lc="pLPCommand",Mc="pRTLPCB",Hr="id",Ur="pw",Vr="ser",Fc="cb",Bc="seg",Wc="ts",Hc="d",Uc="dframe",$r=1870,qr=30,Vc=$r-qr,$c=25e3,qc=3e4;class Fe{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pt(e),this.stats_=gs(n),this.urlFn=c=>(this.appCheckToken&&(c[Yn]=this.appCheckToken),Wr(n,Fr,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Dc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qc)),vc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ys((...r)=>{const[o,a,c,d,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bi)this.id=a,this.password=c;else if(o===Oc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[bi]="t",s[Vr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Fc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[kr]=_s,this.transportSessionId&&(s[Pr]=this.transportSessionId),this.lastSessionId&&(s[Or]=this.lastSessionId),this.applicationId&&(s[Lr]=this.applicationId),this.appCheckToken&&(s[Yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dr.test(location.hostname)&&(s[xr]=Ar);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return Fe.forceAllow_?!0:!Fe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Cc()&&!Ic()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=dr(n),i=Nr(s,Vc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Uc]="t",s[Hr]=e,s[Ur]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=O(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ys{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_c(),window[Lc+this.uniqueCallbackIdentifier]=e,window[Mc+this.uniqueCallbackIdentifier]=n,this.myIFrame=ys.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){D("frame writing exception"),a.stack&&D(a.stack),D(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||D("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hr]=this.myID,e[Ur]=this.myPW,e[Vr]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qr+s.length<=$r;){const o=this.pendingSegs.shift();s=s+"&"+Bc+i+"="+o.seg+"&"+Wc+i+"="+o.ts+"&"+Hc+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor($c)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=16384,zc=45e3;let Gt=null;typeof MozWebSocket<"u"?Gt=MozWebSocket:typeof WebSocket<"u"&&(Gt=WebSocket);class G{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pt(this.connId),this.stats_=gs(n),this.connURL=G.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[kr]=_s,typeof location<"u"&&location.hostname&&Dr.test(location.hostname)&&(o[xr]=Ar),n&&(o[Pr]=n),s&&(o[Or]=s),i&&(o[Yn]=i),r&&(o[Lr]=r),Wr(e,Mr,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ce.set("previous_websocket_failure",!0);try{let s;Ua(),this.mySock=new Gt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){G.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gt!==null&&!G.forceDisallow_}static previouslyFailed(){return Ce.isInMemoryStorage||Ce.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ce.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=mt(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nr(n,Gc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zc))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}G.responsesRequiredToBeHealthy=2;G.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static get ALL_TRANSPORTS(){return[Fe,G]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=G&&G.isAvailable();let s=n&&!G.previouslyFailed();if(e.webSocketOnly&&(n||W("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[G];else{const i=this.transports_=[];for(const r of yt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=6e4,Yc=5e3,Kc=10*1024,Qc=100*1024,Ln="t",wi="d",Jc="s",Si="r",Xc="e",Ti="o",Ni="a",Ri="n",ki="p",Zc="h";class ed{constructor(e,n,s,i,r,o,a,c,d,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=d,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pt("c:"+this.id+":"),this.transportManager_=new yt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=at(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Kc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ln in e){const n=e[Ln];n===Ni?this.upgradeIfSecondaryHealthy_():n===Si?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ti&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=nt("t",e),s=nt("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ki,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ni,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ri,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=nt("t",e),s=nt("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=nt(Ln,e);if(wi in e){const s=e[wi];if(n===Zc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ri){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Jc?this.onConnectionShutdown_(s):n===Si?this.onReset_(s):n===Xc?jn("Server Error: "+s):n===Ti?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_s!==s&&W("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),at(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):at(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ki,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ce.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends zr{static getInstance(){return new zt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=32,xi=768;class I{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function C(){return new I("")}function y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pe(t){return t.pieces_.length-t.pieceNum_}function w(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new I(t.pieces_,e)}function vs(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function td(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jr(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new I(e,0)}function R(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof I)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new I(n,0)}function v(t){return t.pieceNum_>=t.pieces_.length}function H(t,e){const n=y(t),s=y(e);if(n===null)return e;if(n===s)return H(w(t),w(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nd(t,e){const n=vt(t,0),s=vt(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Ae(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Es(t,e){if(pe(t)!==pe(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(pe(t)>pe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sd{constructor(e,n){this.errorPrefix_=n,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=an(this.parts_[s]);Yr(this)}}function id(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=an(e),Yr(t)}function rd(t){const e=t.parts_.pop();t.byteLength_-=an(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yr(t){if(t.byteLength_>xi)throw new Error(t.errorPrefix_+"has a key path longer than "+xi+" bytes ("+t.byteLength_+").");if(t.parts_.length>Pi)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pi+") or object contains a cycle "+Ee(t))}function Ee(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends zr{static getInstance(){return new Cs}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=1e3,od=60*5*1e3,Ai=30*1e3,ad=1.3,ld=3e4,cd="server_kill",Di=3;class re extends Gr{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=re.nextPersistentConnectionId_++,this.log_=Pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=st,this.maxReconnectDelay_=od,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(O(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new J,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,d=a.s;re.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(d,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&te(e,"w")){const s=$e(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();W(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ja(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ai)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=za(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+O(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jn("Unrecognized action received from server: "+O(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=st,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=st,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ld&&(this.reconnectDelay_=st),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ad)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},d=function(u){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:d};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new ed(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{W(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(cd)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&W(u),c())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Un(this.interruptReasons_)&&(this.reconnectDelay_=st,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ms(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new I(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){D("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Di&&(this.reconnectDelay_=Ai,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){D("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Di&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wr.replace(/\./g,"-")]=1,pr()?e["framework.cordova"]=1:Ha()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zt.getInstance().currentlyOnline();return Un(this.interruptReasons_)&&e}}re.nextPersistentConnectionId_=0;re.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new E(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new E(Ge,e),i=new E(Ge,n);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt;class Kr extends cn{static get __EMPTY_NODE(){return Mt}static set __EMPTY_NODE(e){Mt=e}compare(e,n){return Ae(e.name,n.name)}isDefinedOn(e){throw Je("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return E.MIN}maxPost(){return new E(Se,Mt)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,Mt)}toString(){return".key"}}const Ue=new Kr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class A{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??A.RED,this.left=i??U.EMPTY_NODE,this.right=r??U.EMPTY_NODE}copy(e,n,s,i,r){return new A(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return U.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return U.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,A.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,A.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}A.RED=!0;A.BLACK=!1;class dd{copy(e,n,s,i,r){return this}insert(e,n,s){return new A(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class U{constructor(e,n=U.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new U(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,A.BLACK,null,null))}remove(e){return new U(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,A.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ft(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ft(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ft(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ft(this.root_,null,this.comparator_,!0,e)}}U.EMPTY_NODE=new dd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){return Ae(t.name,e.name)}function Is(t,e){return Ae(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;function hd(t){Kn=t}const Qr=function(t){return typeof t=="number"?"number:"+Rr(t):"string:"+t},Jr=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&te(e,".sv"),"Priority must be a string or number.")}else p(t===Kn||t.isEmpty(),"priority of unexpected type.");p(t===Kn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class x{static set __childrenNodeConstructor(e){Oi=e}static get __childrenNodeConstructor(){return Oi}constructor(e,n=x.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new x(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:y(e)===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:x.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||pe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,x.__childrenNodeConstructor.EMPTY_NODE.updateChild(w(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qr(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rr(this.value_):e+=this.value_,this.lazyHash_=Tr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===x.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof x.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=x.VALUE_TYPE_ORDER.indexOf(n),r=x.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+n),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}x.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr,Zr;function fd(t){Xr=t}function pd(t){Zr=t}class md extends cn{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ae(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return E.MIN}maxPost(){return new E(Se,new x("[PRIORITY-POST]",Zr))}makePost(e,n){const s=Xr(e);return new E(n,new x("[PRIORITY-POST]",s))}toString(){return".priority"}}const k=new md;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=Math.log(2);class gd{constructor(e){const n=r=>parseInt(Math.log(r)/_d,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jt=function(t,e,n,s){t.sort(e);const i=function(c,d){const h=d-c;let u,f;if(h===0)return null;if(h===1)return u=t[c],f=n?n(u):u,new A(f,u.node,A.BLACK,null,null);{const m=parseInt(h/2,10)+c,_=i(c,m),b=i(m+1,d);return u=t[m],f=n?n(u):u,new A(f,u.node,A.BLACK,_,b)}},r=function(c){let d=null,h=null,u=t.length;const f=function(_,b){const B=u-_,Le=u;u-=_;const Lt=i(B+1,Le),Nn=t[B],ca=n?n(Nn):Nn;m(new A(ca,Nn.node,b,null,Lt))},m=function(_){d?(d.left=_,d=_):(h=_,d=_)};for(let _=0;_<c.count;++_){const b=c.nextBitIsOne(),B=Math.pow(2,c.count-(_+1));b?f(B,A.BLACK):(f(B,A.BLACK),f(B,A.RED))}return h},o=new gd(t.length),a=r(o);return new U(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn;const Me={};class ie{static get Default(){return p(Me&&k,"ChildrenNode.ts has not been loaded"),Mn=Mn||new ie({".priority":Me},{".priority":k}),Mn}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=$e(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof U?n:null}hasIndex(e){return te(this.indexSet_,e.toString())}addIndex(e,n){p(e!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=jt(s,e.getCompare()):a=Me;const c=e.toString(),d={...this.indexSet_};d[c]=e;const h={...this.indexes_};return h[c]=a,new ie(h,d)}addToIndexes(e,n){const s=Ut(this.indexes_,(i,r)=>{const o=$e(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===Me)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(E.Wrap);let d=c.getNext();for(;d;)d.name!==e.name&&a.push(d),d=c.getNext();return a.push(e),jt(a,o.getCompare())}else return Me;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new E(e.name,a))),c.insert(e,e.node)}});return new ie(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ut(this.indexes_,i=>{if(i===Me)return i;{const r=n.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new ie(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it;class g{static get EMPTY_NODE(){return it||(it=new g(new U(Is),null,ie.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Jr(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||it}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?it:n}}getChild(e){const n=y(e);return n===null?this:this.getImmediateChild(n).getChild(w(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new E(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?it:this.priorityNode_;return new g(i,o,r)}}updateChild(e,n){const s=y(e);if(s===null)return n;{p(y(e)!==".priority"||pe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(w(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(k,(o,a)=>{n[o]=a.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qr(this.getPriority().val())+":"),this.forEachChild(k,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Tr(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new E(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new E(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xt?-1:0}withIndex(e){if(e===Ue||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ue||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(k),i=n.getIterator(k);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ue?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yd extends g{constructor(){super(new U(Is),g.EMPTY_NODE,ie.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const xt=new yd;Object.defineProperties(E,{MIN:{value:new E(Ge,g.EMPTY_NODE)},MAX:{value:new E(Se,xt)}});Kr.__EMPTY_NODE=g.EMPTY_NODE;x.__childrenNodeConstructor=g;hd(xt);pd(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=!0;function P(t,e=null){if(t===null)return g.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new x(n,P(e))}if(!(t instanceof Array)&&vd){const n=[];let s=!1;if(L(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=P(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new E(o,c)))}}),n.length===0)return g.EMPTY_NODE;const r=jt(n,ud,o=>o.name,Is);if(s){const o=jt(n,k.getCompare());return new g(r,P(e),new ie({".priority":o},{".priority":k}))}else return new g(r,P(e),ie.Default)}else{let n=g.EMPTY_NODE;return L(t,(s,i)=>{if(te(t,s)&&s.substring(0,1)!=="."){const r=P(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(P(e))}}fd(P);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends cn{constructor(e){super(),this.indexPath_=e,p(!v(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ae(e.name,n.name):r}makePost(e,n){const s=P(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(n,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,xt);return new E(Se,e)}toString(){return vt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends cn{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ae(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,n){const s=P(e);return new E(n,s)}toString(){return".value"}}const Id=new Cd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){return{type:"value",snapshotNode:t}}function ze(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Et(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ct(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bd(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Et(n,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ze(n,s)):o.trackChildChange(Ct(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(k,(i,r)=>{n.hasChild(i)||s.trackChildChange(Et(i,r))}),n.isLeafNode()||n.forEachChild(k,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ct(i,r,o))}else s.trackChildChange(ze(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.indexedFilter_=new bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=It.getStartPost_(e),this.endPost_=It.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new E(n,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=g.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return n.forEachChild(k,(o,a)=>{r.matches(new E(o,a))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new It(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new E(n,s))||(s=g.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,m)=>u(m,f)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const c=new E(n,s),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,d,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,c);if(h&&!s.isEmpty()&&m>=0)return r?.trackChildChange(Ct(n,s,u)),a.updateImmediateChild(n,s);{r?.trackChildChange(Et(n,u));const b=a.updateImmediateChild(n,g.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r?.trackChildChange(ze(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:h&&o(d,c)>=0?(r!=null&&(r.trackChildChange(Et(d.name,d.node)),r.trackChildChange(ze(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(d.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=k}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ge}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Se}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===k}copy(){const e=new ws;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sd(t){return t.loadsAllData()?new bs(t.getIndex()):t.hasLimit()?new wd(t):new It(t)}function Li(t){const e={};if(t.isDefault())return e;let n;if(t.index_===k?n="$priority":t.index_===Id?n="$value":t.index_===Ue?n="$key":(p(t.index_ instanceof Ed,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=O(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=O(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+O(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=O(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+O(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mi(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==k&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Gr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Pt("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Yt.getListenId_(e,s),a={};this.listens_[o]=a;const c=Li(e._queryParams);this.restRequest_(r+".json",c,(d,h)=>{let u=h;if(d===404&&(u=null,d=null),d===null&&this.onDataUpdate_(r,u,!1,s),$e(this.listens_,o)===a){let f;d?d===401?f="permission_denied":f="rest_error:"+d:f="ok",i(f,null)}})}unlisten(e,n){const s=Yt.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Li(e._queryParams),s=e._path.toString(),i=new J;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ya(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=mt(a.responseText)}catch{W("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&W("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return{value:null,children:new Map}}function Ze(t,e,n){if(v(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=y(e);t.children.has(s)||t.children.set(s,Kt());const i=t.children.get(s);e=w(e),Ze(i,e,n)}}function Qn(t,e){if(v(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(k,(s,i)=>{Ze(t,new I(s),i)}),Qn(t,e)}}else if(t.children.size>0){const n=y(e);return e=w(e),t.children.has(n)&&Qn(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Jn(t,e,n){t.value!==null?n(e,t.value):Nd(t,(s,i)=>{const r=new I(e.toString()+"/"+s);Jn(i,r,n)})}function Nd(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&L(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=10*1e3,kd=30*1e3,Pd=5*60*1e3;class xd{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Rd(e);const s=Fi+(kd-Fi)*Math.random();at(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;L(e,(i,r)=>{r>0&&te(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),at(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pd))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(z||(z={}));function Ss(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ts(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ns(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=z.ACK_USER_WRITE,this.source=Ss()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new I(e));return new Qt(C(),n,this.revert)}}else return p(y(this.path)===e,"operationForChild called for unrelated child."),new Qt(w(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.source=e,this.path=n,this.type=z.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new bt(this.source,C()):new bt(this.source,w(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=z.OVERWRITE}operationForChild(e){return v(this.path)?new Te(this.source,C(),this.snap.getImmediateChild(e)):new Te(this.source,w(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=z.MERGE}operationForChild(e){if(v(this.path)){const n=this.children.subtree(new I(e));return n.isEmpty()?null:n.value?new Te(this.source,C(),n.value):new je(this.source,C(),n)}else return p(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new je(this.source,w(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const n=y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dd(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bd(o.childName,o.snapshotNode))}),rt(t,i,"child_removed",e,s,n),rt(t,i,"child_added",e,s,n),rt(t,i,"child_moved",r,s,n),rt(t,i,"child_changed",e,s,n),rt(t,i,"value",e,s,n),i}function rt(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>Ld(t,a,c)),o.forEach(a=>{const c=Od(t,a,r);i.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(c,t.query_))})})}function Od(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ld(t,e,n){if(e.childName==null||n.childName==null)throw Je("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){return{eventCache:t,serverCache:e}}function lt(t,e,n,s){return dn(new Ne(e,n,s),t.serverCache)}function to(t,e,n,s){return dn(t.eventCache,new Ne(e,n,s))}function Xn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Re(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;const Md=()=>(Fn||(Fn=new U(Ec)),Fn);class T{static fromObject(e){let n=new T(null);return L(e,(s,i)=>{n=n.set(new I(s),i)}),n}constructor(e,n=Md()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:C(),value:this.value};if(v(e))return null;{const s=y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(w(e),n);return r!=null?{path:R(new I(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const n=y(e),s=this.children.get(n);return s!==null?s.subtree(w(e)):new T(null)}}set(e,n){if(v(e))return new T(n,this.children);{const s=y(e),r=(this.children.get(s)||new T(null)).set(w(e),n),o=this.children.insert(s,r);return new T(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new T(null):new T(null,this.children);{const n=y(e),s=this.children.get(n);if(s){const i=s.remove(w(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new T(null):new T(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const n=y(e),s=this.children.get(n);return s?s.get(w(e)):null}}setTree(e,n){if(v(e))return n;{const s=y(e),r=(this.children.get(s)||new T(null)).setTree(w(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new T(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(R(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,C(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(v(e))return null;{const r=y(e),o=this.children.get(r);return o?o.findOnPath_(w(e),R(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,C(),n)}foreachOnPath_(e,n,s){if(v(e))return this;{this.value&&s(n,this.value);const i=y(e),r=this.children.get(i);return r?r.foreachOnPath_(w(e),R(n,i),s):new T(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(R(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.writeTree_=e}static empty(){return new j(new T(null))}}function ct(t,e,n){if(v(e))return new j(new T(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=H(i,e);return r=r.updateChild(o,n),new j(t.writeTree_.set(i,r))}else{const i=new T(n),r=t.writeTree_.setTree(e,i);return new j(r)}}}function Zn(t,e,n){let s=t;return L(n,(i,r)=>{s=ct(s,R(e,i),r)}),s}function Bi(t,e){if(v(e))return j.empty();{const n=t.writeTree_.setTree(e,new T(null));return new j(n)}}function es(t,e){return De(t,e)!=null}function De(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(H(n.path,e)):null}function Wi(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(k,(s,i)=>{e.push(new E(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function fe(t,e){if(v(e))return t;{const n=De(t,e);return n!=null?new j(new T(n)):new j(t.writeTree_.subtree(e))}}function ts(t){return t.writeTree_.isEmpty()}function Ye(t,e){return no(C(),t.writeTree_,e)}function no(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=no(R(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(R(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e){return oo(e,t)}function Fd(t,e,n,s,i){p(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ct(t.visibleWrites,e,n)),t.lastWriteId=s}function Bd(t,e,n,s){p(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Zn(t.visibleWrites,e,n),t.lastWriteId=s}function Wd(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Hd(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ud(a,s.path)?i=!1:$(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Vd(t),!0;if(s.snap)t.visibleWrites=Bi(t.visibleWrites,s.path);else{const a=s.children;L(a,c=>{t.visibleWrites=Bi(t.visibleWrites,R(s.path,c))})}return!0}else return!1}function Ud(t,e){if(t.snap)return $(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$(R(t.path,n),e))return!0;return!1}function Vd(t){t.visibleWrites=so(t.allWrites,$d,C()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $d(t){return t.visible}function so(t,e,n){let s=j.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)$(n,o)?(a=H(n,o),s=ct(s,a,r.snap)):$(o,n)&&(a=H(o,n),s=ct(s,C(),r.snap.getChild(a)));else if(r.children){if($(n,o))a=H(n,o),s=Zn(s,a,r.children);else if($(o,n))if(a=H(o,n),v(a))s=Zn(s,C(),r.children);else{const c=$e(r.children,y(a));if(c){const d=c.getChild(w(a));s=ct(s,C(),d)}}}else throw Je("WriteRecord should have .snap or .children")}}return s}function io(t,e,n,s,i){if(!s&&!i){const r=De(t.visibleWrites,e);if(r!=null)return r;{const o=fe(t.visibleWrites,e);if(ts(o))return n;if(n==null&&!es(o,C()))return null;{const a=n||g.EMPTY_NODE;return Ye(o,a)}}}else{const r=fe(t.visibleWrites,e);if(!i&&ts(r))return n;if(!i&&n==null&&!es(r,C()))return null;{const o=function(d){return(d.visible||i)&&(!s||!~s.indexOf(d.writeId))&&($(d.path,e)||$(e,d.path))},a=so(t.allWrites,o,e),c=n||g.EMPTY_NODE;return Ye(a,c)}}}function qd(t,e,n){let s=g.EMPTY_NODE;const i=De(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(k,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=fe(t.visibleWrites,e);return n.forEachChild(k,(o,a)=>{const c=Ye(fe(r,new I(o)),a);s=s.updateImmediateChild(o,c)}),Wi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fe(t.visibleWrites,e);return Wi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Gd(t,e,n,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=R(e,n);if(es(t.visibleWrites,r))return null;{const o=fe(t.visibleWrites,r);return ts(o)?i.getChild(n):Ye(o,i.getChild(n))}}function zd(t,e,n,s){const i=R(e,n),r=De(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=fe(t.visibleWrites,i);return Ye(o,s.getNode().getImmediateChild(n))}else return null}function jd(t,e){return De(t.visibleWrites,e)}function Yd(t,e,n,s,i,r,o){let a;const c=fe(t.visibleWrites,e),d=De(c,C());if(d!=null)a=d;else if(n!=null)a=Ye(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=f.getNext();for(;m&&h.length<i;)u(m,s)!==0&&h.push(m),m=f.getNext();return h}else return[]}function Kd(){return{visibleWrites:j.empty(),allWrites:[],lastWriteId:-1}}function Jt(t,e,n,s){return io(t.writeTree,t.treePath,e,n,s)}function ks(t,e){return qd(t.writeTree,t.treePath,e)}function Hi(t,e,n,s){return Gd(t.writeTree,t.treePath,e,n,s)}function Xt(t,e){return jd(t.writeTree,R(t.treePath,e))}function Qd(t,e,n,s,i,r){return Yd(t.writeTree,t.treePath,e,n,s,i,r)}function Ps(t,e,n){return zd(t.writeTree,t.treePath,e,n)}function ro(t,e){return oo(R(t.treePath,e),t.writeTree)}function oo(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ct(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Et(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ze(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ct(s,e.snapshotNode,i.oldSnap));else throw Je("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ao=new Xd;class xs{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ps(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Re(this.viewCache_),r=Qd(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){return{filter:t}}function eu(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tu(t,e,n,s,i){const r=new Jd;let o,a;if(n.type===z.OVERWRITE){const d=n;d.source.fromUser?o=ns(t,e,d.path,d.snap,s,i,r):(p(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!v(d.path),o=Zt(t,e,d.path,d.snap,s,i,a,r))}else if(n.type===z.MERGE){const d=n;d.source.fromUser?o=su(t,e,d.path,d.children,s,i,r):(p(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=ss(t,e,d.path,d.children,s,i,a,r))}else if(n.type===z.ACK_USER_WRITE){const d=n;d.revert?o=ou(t,e,d.path,s,i,r):o=iu(t,e,d.path,d.affectedTree,s,i,r)}else if(n.type===z.LISTEN_COMPLETE)o=ru(t,e,n.path,s,r);else throw Je("Unknown operation type: "+n.type);const c=r.getChanges();return nu(e,o,c),{viewCache:o,changes:c}}function nu(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xn(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(eo(Xn(e)))}}function lo(t,e,n,s,i,r){const o=e.eventCache;if(Xt(s,n)!=null)return e;{let a,c;if(v(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Re(e),h=d instanceof g?d:g.EMPTY_NODE,u=ks(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const d=Jt(s,Re(e));a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const d=y(n);if(d===".priority"){p(pe(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Hi(s,n,h,c);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=w(n);let u;if(o.isCompleteForChild(d)){c=e.serverCache.getNode();const f=Hi(s,n,o.getNode(),c);f!=null?u=o.getNode().getImmediateChild(d).updateChild(h,f):u=o.getNode().getImmediateChild(d)}else u=Ps(s,d,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),d,u,h,i,r):a=o.getNode()}}return lt(e,a,o.isFullyInitialized()||v(n),t.filter.filtersNodes())}}function Zt(t,e,n,s,i,r,o,a){const c=e.serverCache;let d;const h=o?t.filter:t.filter.getIndexedFilter();if(v(n))d=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,s);d=h.updateFullNode(c.getNode(),m,null)}else{const m=y(n);if(!c.isCompleteForPath(n)&&pe(n)>1)return e;const _=w(n),B=c.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?d=h.updatePriority(c.getNode(),B):d=h.updateChild(c.getNode(),m,B,_,ao,null)}const u=to(e,d,c.isFullyInitialized()||v(n),h.filtersNodes()),f=new xs(i,u,r);return lo(t,u,n,i,f,a)}function ns(t,e,n,s,i,r,o){const a=e.eventCache;let c,d;const h=new xs(i,e,r);if(v(n))d=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=lt(e,d,!0,t.filter.filtersNodes());else{const u=y(n);if(u===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),s),c=lt(e,d,a.isFullyInitialized(),a.isFiltered());else{const f=w(n),m=a.getNode().getImmediateChild(u);let _;if(v(f))_=s;else{const b=h.getCompleteChild(u);b!=null?vs(f)===".priority"&&b.getChild(jr(f)).isEmpty()?_=b:_=b.updateChild(f,s):_=g.EMPTY_NODE}if(m.equals(_))c=e;else{const b=t.filter.updateChild(a.getNode(),u,_,f,h,o);c=lt(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Ui(t,e){return t.eventCache.isCompleteForChild(e)}function su(t,e,n,s,i,r,o){let a=e;return s.foreach((c,d)=>{const h=R(n,c);Ui(e,y(h))&&(a=ns(t,a,h,d,i,r,o))}),s.foreach((c,d)=>{const h=R(n,c);Ui(e,y(h))||(a=ns(t,a,h,d,i,r,o))}),a}function Vi(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ss(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,d;v(n)?d=s:d=new T(null).setTree(n,s);const h=e.serverCache.getNode();return d.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),_=Vi(t,m,f);c=Zt(t,c,new I(u),_,i,r,o,a)}}),d.children.inorderTraversal((u,f)=>{const m=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!m){const _=e.serverCache.getNode().getImmediateChild(u),b=Vi(t,_,f);c=Zt(t,c,new I(u),b,i,r,o,a)}}),c}function iu(t,e,n,s,i,r,o){if(Xt(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(v(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Zt(t,e,n,c.getNode().getChild(n),i,r,a,o);if(v(n)){let d=new T(null);return c.getNode().forEachChild(Ue,(h,u)=>{d=d.set(new I(h),u)}),ss(t,e,n,d,i,r,a,o)}else return e}else{let d=new T(null);return s.foreach((h,u)=>{const f=R(n,h);c.isCompleteForPath(f)&&(d=d.set(h,c.getNode().getChild(f)))}),ss(t,e,n,d,i,r,a,o)}}function ru(t,e,n,s,i){const r=e.serverCache,o=to(e,r.getNode(),r.isFullyInitialized()||v(n),r.isFiltered());return lo(t,o,n,s,ao,i)}function ou(t,e,n,s,i,r){let o;if(Xt(s,n)!=null)return e;{const a=new xs(s,e,i),c=e.eventCache.getNode();let d;if(v(n)||y(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Jt(s,Re(e));else{const u=e.serverCache.getNode();p(u instanceof g,"serverChildren would be complete if leaf node"),h=ks(s,u)}h=h,d=t.filter.updateFullNode(c,h,r)}else{const h=y(n);let u=Ps(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?d=t.filter.updateChild(c,h,u,w(n),a,r):e.eventCache.getNode().hasChild(h)?d=t.filter.updateChild(c,h,g.EMPTY_NODE,w(n),a,r):d=c,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jt(s,Re(e)),o.isLeafNode()&&(d=t.filter.updateFullNode(d,o,r)))}return o=e.serverCache.isFullyInitialized()||Xt(s,C())!=null,lt(e,d,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bs(s.getIndex()),r=Sd(s);this.processor_=Zd(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),d=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),h=new Ne(c,o.isFullyInitialized(),i.filtersNodes()),u=new Ne(d,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=dn(u,h),this.eventGenerator_=new Ad(this.query_)}get query(){return this.query_}}function lu(t){return t.viewCache_.serverCache.getNode()}function cu(t,e){const n=Re(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!v(e)&&!n.getImmediateChild(y(e)).isEmpty())?n.getChild(e):null}function $i(t){return t.eventRegistrations_.length===0}function du(t,e){t.eventRegistrations_.push(e)}function qi(t,e,n){const s=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Gi(t,e,n,s){e.type===z.MERGE&&e.source.queryId!==null&&(p(Re(t.viewCache_),"We should always have a full cache before handling merges"),p(Xn(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=tu(t.processor_,i,e,n,s);return eu(t.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,co(t,r.changes,r.viewCache.eventCache.getNode(),null)}function uu(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(k,(r,o)=>{s.push(ze(r,o))}),n.isFullyInitialized()&&s.push(eo(n.getNode())),co(t,s,n.getNode(),e)}function co(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Dd(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en;class hu{constructor(){this.views=new Map}}function fu(t){p(!en,"__referenceConstructor has already been defined"),en=t}function pu(){return p(en,"Reference.ts has not been loaded"),en}function mu(t){return t.views.size===0}function As(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Gi(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Gi(o,e,n,s));return r}}function _u(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Jt(n,i?s:null),c=!1;a?c=!0:s instanceof g?(a=ks(n,s),c=!1):(a=g.EMPTY_NODE,c=!1);const d=dn(new Ne(a,c,!1),new Ne(s,i,!1));return new au(e,d)}return o}function gu(t,e,n,s,i,r){const o=_u(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),du(o,n),uu(o,n)}function yu(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=me(t);if(i==="default")for(const[c,d]of t.views.entries())o=o.concat(qi(d,n,s)),$i(d)&&(t.views.delete(c),d.query._queryParams.loadsAllData()||r.push(d.query));else{const c=t.views.get(i);c&&(o=o.concat(qi(c,n,s)),$i(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!me(t)&&r.push(new(pu())(e._repo,e._path)),{removed:r,events:o}}function uo(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ve(t,e){let n=null;for(const s of t.views.values())n=n||cu(s,e);return n}function ho(t,e){if(e._queryParams.loadsAllData())return un(t);{const s=e._queryIdentifier;return t.views.get(s)}}function fo(t,e){return ho(t,e)!=null}function me(t){return un(t)!=null}function un(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn;function vu(t){p(!tn,"__referenceConstructor has already been defined"),tn=t}function Eu(){return p(tn,"Reference.ts has not been loaded"),tn}let Cu=1;class zi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new T(null),this.pendingWriteTree_=Kd(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function po(t,e,n,s,i){return Fd(t.pendingWriteTree_,e,n,s,i),i?et(t,new Te(Ss(),e,n)):[]}function Iu(t,e,n,s){Bd(t.pendingWriteTree_,e,n,s);const i=T.fromObject(n);return et(t,new je(Ss(),e,i))}function ue(t,e,n=!1){const s=Wd(t.pendingWriteTree_,e);if(Hd(t.pendingWriteTree_,e)){let r=new T(null);return s.snap!=null?r=r.set(C(),!0):L(s.children,o=>{r=r.set(new I(o),!0)}),et(t,new Qt(s.path,r,n))}else return[]}function hn(t,e,n){return et(t,new Te(Ts(),e,n))}function bu(t,e,n){const s=T.fromObject(n);return et(t,new je(Ts(),e,s))}function wu(t,e){return et(t,new bt(Ts(),e))}function Su(t,e,n){const s=Os(t,n);if(s){const i=Ls(s),r=i.path,o=i.queryId,a=H(r,e),c=new bt(Ns(o),a);return Ms(t,r,c)}else return[]}function is(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||fo(o,e))){const c=yu(o,e,n,s);mu(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const d=c.removed;if(a=c.events,!i){const h=d.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(f,m)=>me(m));if(h&&!u){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const m=Ru(f);for(let _=0;_<m.length;++_){const b=m[_],B=b.query,Le=go(t,b);t.listenProvider_.startListening(dt(B),nn(t,B),Le.hashFn,Le.onComplete)}}}!u&&d.length>0&&!s&&(h?t.listenProvider_.stopListening(dt(e),null):d.forEach(f=>{const m=t.queryToTagMap.get(fn(f));t.listenProvider_.stopListening(dt(f),m)}))}ku(t,d)}return a}function Tu(t,e,n,s){const i=Os(t,s);if(i!=null){const r=Ls(i),o=r.path,a=r.queryId,c=H(o,e),d=new Te(Ns(a),c,n);return Ms(t,o,d)}else return[]}function Nu(t,e,n,s){const i=Os(t,s);if(i){const r=Ls(i),o=r.path,a=r.queryId,c=H(o,e),d=T.fromObject(n),h=new je(Ns(a),c,d);return Ms(t,o,h)}else return[]}function ji(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const _=H(f,i);r=r||Ve(m,_),o=o||me(m)});let a=t.syncPointTree_.get(i);a?(o=o||me(a),r=r||Ve(a,C())):(a=new hu,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=g.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const b=Ve(_,C());b&&(r=r.updateImmediateChild(m,b))}));const d=fo(a,e);if(!d&&!e._queryParams.loadsAllData()){const f=fn(e);p(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=Pu();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const h=Rs(t.pendingWriteTree_,i);let u=gu(a,e,n,h,r,c);if(!d&&!o&&!s){const f=ho(a,e);u=u.concat(xu(t,e,f))}return u}function Ds(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=H(o,e),d=Ve(a,c);if(d)return d});return io(i,e,r,n,!0)}function et(t,e){return mo(e,t.syncPointTree_,null,Rs(t.pendingWriteTree_,C()))}function mo(t,e,n,s){if(v(t.path))return _o(t,e,n,s);{const i=e.get(C());n==null&&i!=null&&(n=Ve(i,C()));let r=[];const o=y(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const d=n?n.getImmediateChild(o):null,h=ro(s,o);r=r.concat(mo(a,c,d,h))}return i&&(r=r.concat(As(i,t,s,n))),r}}function _o(t,e,n,s){const i=e.get(C());n==null&&i!=null&&(n=Ve(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,d=ro(s,o),h=t.operationForChild(o);h&&(r=r.concat(_o(h,a,c,d)))}),i&&(r=r.concat(As(i,t,s,n))),r}function go(t,e){const n=e.query,s=nn(t,n);return{hashFn:()=>(lu(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Su(t,n._path,s):wu(t,n._path);{const r=bc(i,n);return is(t,n,null,r)}}}}function nn(t,e){const n=fn(e);return t.queryToTagMap.get(n)}function fn(t){return t._path.toString()+"$"+t._queryIdentifier}function Os(t,e){return t.tagToQueryMap.get(e)}function Ls(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new I(t.substr(0,e))}}function Ms(t,e,n){const s=t.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=Rs(t.pendingWriteTree_,e);return As(s,n,i,null)}function Ru(t){return t.fold((e,n,s)=>{if(n&&me(n))return[un(n)];{let i=[];return n&&(i=uo(n)),L(s,(r,o)=>{i=i.concat(o)}),i}})}function dt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Eu())(t._repo,t._path):t}function ku(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=fn(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Pu(){return Cu++}function xu(t,e,n){const s=e._path,i=nn(t,e),r=go(t,n),o=t.listenProvider_.startListening(dt(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)p(!me(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((d,h,u)=>{if(!v(d)&&h&&me(h))return[un(h).query];{let f=[];return h&&(f=f.concat(uo(h).map(m=>m.query))),L(u,(m,_)=>{f=f.concat(_)}),f}});for(let d=0;d<c.length;++d){const h=c[d];t.listenProvider_.stopListening(dt(h),nn(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fs(n)}node(){return this.node_}}class Bs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=R(this.path_,e);return new Bs(this.syncTree_,n)}node(){return Ds(this.syncTree_,this.path_)}}const Au=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yi=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Du(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ou(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Du=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},Ou=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yo=function(t,e,n,s){return Ws(e,new Bs(n,t),s)},vo=function(t,e,n){return Ws(t,new Fs(e),n)};function Ws(t,e,n){const s=t.getPriority().val(),i=Yi(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Yi(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new x(a,P(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new x(i))),o.forEachChild(k,(a,c)=>{const d=Ws(c,e.getImmediateChild(a),n);d!==c&&(r=r.updateImmediateChild(a,d))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Us(t,e){let n=e instanceof I?e:new I(e),s=t,i=y(n);for(;i!==null;){const r=$e(s.node.children,i)||{children:{},childCount:0};s=new Hs(i,s,r),n=w(n),i=y(n)}return s}function tt(t){return t.node.value}function Eo(t,e){t.node.value=e,rs(t)}function Co(t){return t.node.childCount>0}function Lu(t){return tt(t)===void 0&&!Co(t)}function pn(t,e){L(t.node.children,(n,s)=>{e(new Hs(n,t,s))})}function Io(t,e,n,s){n&&e(t),pn(t,i=>{Io(i,e,!0)})}function Mu(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function At(t){return new I(t.parent===null?t.name:At(t.parent)+"/"+t.name)}function rs(t){t.parent!==null&&Fu(t.parent,t.name,t)}function Fu(t,e,n){const s=Lu(n),i=te(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,rs(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rs(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=/[\[\].#$\/\u0000-\u001F\u007F]/,Wu=/[\[\].#$\u0000-\u001F\u007F]/,Bn=10*1024*1024,Vs=function(t){return typeof t=="string"&&t.length!==0&&!Bu.test(t)},bo=function(t){return typeof t=="string"&&t.length!==0&&!Wu.test(t)},Hu=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bo(t)},wo=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ln(t)||t&&typeof t=="object"&&te(t,".sv")},sn=function(t,e,n,s){s&&e===void 0||mn(qe(t,"value"),e,n)},mn=function(t,e,n){const s=n instanceof I?new sd(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ee(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ee(s)+" with contents = "+e.toString());if(ln(e))throw new Error(t+"contains "+e.toString()+" "+Ee(s));if(typeof e=="string"&&e.length>Bn/3&&an(e)>Bn)throw new Error(t+"contains a string greater than "+Bn+" utf8 bytes "+Ee(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(L(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vs(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ee(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);id(s,o),mn(t,a,s),rd(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ee(s)+" in addition to actual children.")}},Uu=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=vt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vs(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nd);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&$(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},So=function(t,e,n,s){const i=qe(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];L(e,(o,a)=>{const c=new I(o);if(mn(i,a,R(n,c)),vs(c)===".priority"&&!wo(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Uu(i,r)},Vu=function(t,e,n){if(ln(e))throw new Error(qe(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!wo(e))throw new Error(qe(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},To=function(t,e,n,s){if(!bo(n))throw new Error(qe(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$u=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),To(t,e,n)},Ie=function(t,e){if(y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qu=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hu(n))throw new Error(qe(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _n(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Es(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function No(t,e,n){_n(t,n),Ro(t,s=>Es(s,e))}function Y(t,e,n){_n(t,n),Ro(t,s=>$(s,e)||$(e,s))}function Ro(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zu(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zu(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ot&&D("event: "+n.toString()),Xe(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="repo_interrupt",Yu=25;class Ku{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kt(),this.transactionQueueTree_=new Hs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qu(t,e,n){if(t.stats_=gs(t.repoInfo_),t.forceRestClient_||Nc())t.server_=new Yt(t.repoInfo_,(s,i,r,o)=>{Ki(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qi(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{O(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new re(t.repoInfo_,e,(s,i,r,o)=>{Ki(t,s,i,r,o)},s=>{Qi(t,s)},s=>{Ju(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ac(t.repoInfo_,()=>new xd(t.stats_,t.server_)),t.infoData_=new Td,t.infoSyncTree_=new zi({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=hn(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$s(t,"connected",!1),t.serverSyncTree_=new zi({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const d=o(a,c);Y(t.eventQueue_,s._path,d)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ko(t){const n=t.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gn(t){return Au({timestamp:ko(t)})}function Ki(t,e,n,s,i){t.dataUpdateCount++;const r=new I(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ut(n,d=>P(d));o=Nu(t.serverSyncTree_,r,c,i)}else{const c=P(n);o=Tu(t.serverSyncTree_,r,c,i)}else if(s){const c=Ut(n,d=>P(d));o=bu(t.serverSyncTree_,r,c)}else{const c=P(n);o=hn(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ke(t,r)),Y(t.eventQueue_,a,o)}function Qi(t,e){$s(t,"connected",e),e===!1&&eh(t)}function Ju(t,e){L(e,(n,s)=>{$s(t,n,s)})}function $s(t,e,n){const s=new I("/.info/"+e),i=P(n);t.infoData_.updateSnapshot(s,i);const r=hn(t.infoSyncTree_,s,i);Y(t.eventQueue_,s,r)}function qs(t){return t.nextWriteId_++}function Xu(t,e,n,s,i){yn(t,"set",{path:e.toString(),value:n,priority:s});const r=gn(t),o=P(n,s),a=Ds(t.serverSyncTree_,e),c=vo(o,a,r),d=qs(t),h=po(t.serverSyncTree_,e,c,d,!0);_n(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const _=f==="ok";_||W("set at "+e+" failed: "+f);const b=ue(t.serverSyncTree_,d,!_);Y(t.eventQueue_,e,b),_e(t,i,f,m)});const u=zs(t,e);Ke(t,u),Y(t.eventQueue_,u,[])}function Zu(t,e,n,s){yn(t,"update",{path:e.toString(),value:n});let i=!0;const r=gn(t),o={};if(L(n,(a,c)=>{i=!1,o[a]=yo(R(e,a),P(c),t.serverSyncTree_,r)}),i)D("update() called with empty data.  Don't do anything."),_e(t,s,"ok",void 0);else{const a=qs(t),c=Iu(t.serverSyncTree_,e,o,a);_n(t.eventQueue_,c),t.server_.merge(e.toString(),n,(d,h)=>{const u=d==="ok";u||W("update at "+e+" failed: "+d);const f=ue(t.serverSyncTree_,a,!u),m=f.length>0?Ke(t,e):e;Y(t.eventQueue_,m,f),_e(t,s,d,h)}),L(n,d=>{const h=zs(t,R(e,d));Ke(t,h)}),Y(t.eventQueue_,e,[])}}function eh(t){yn(t,"onDisconnectEvents");const e=gn(t),n=Kt();Jn(t.onDisconnect_,C(),(i,r)=>{const o=yo(i,r,t.serverSyncTree_,e);Ze(n,i,o)});let s=[];Jn(n,C(),(i,r)=>{s=s.concat(hn(t.serverSyncTree_,i,r));const o=zs(t,i);Ke(t,o)}),t.onDisconnect_=Kt(),Y(t.eventQueue_,C(),s)}function th(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Qn(t.onDisconnect_,e),_e(t,n,s,i)})}function Ji(t,e,n,s){const i=P(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Ze(t.onDisconnect_,e,i),_e(t,s,r,o)})}function nh(t,e,n,s,i){const r=P(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Ze(t.onDisconnect_,e,r),_e(t,i,o,a)})}function sh(t,e,n,s){if(Un(n)){D("onDisconnect().update() called with empty data.  Don't do anything."),_e(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&L(n,(o,a)=>{const c=P(a);Ze(t.onDisconnect_,R(e,o),c)}),_e(t,s,i,r)})}function ih(t,e,n){let s;y(e._path)===".info"?s=ji(t.infoSyncTree_,e,n):s=ji(t.serverSyncTree_,e,n),No(t.eventQueue_,e._path,s)}function Xi(t,e,n){let s;y(e._path)===".info"?s=is(t.infoSyncTree_,e,n):s=is(t.serverSyncTree_,e,n),No(t.eventQueue_,e._path,s)}function rh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ju)}function yn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),D(n,...e)}function _e(t,e,n,s){e&&Xe(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Po(t,e,n){return Ds(t.serverSyncTree_,e,n)||g.EMPTY_NODE}function Gs(t,e=t.transactionQueueTree_){if(e||vn(t,e),tt(e)){const n=Ao(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oh(t,At(e),n)}else Co(e)&&pn(e,n=>{Gs(t,n)})}function oh(t,e,n){const s=n.map(d=>d.currentWriteId),i=Po(t,e,s);let r=i;const o=i.hash();for(let d=0;d<n.length;d++){const h=n[d];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=H(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,d=>{yn(t,"transaction put response",{path:c.toString(),status:d});let h=[];if(d==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(ue(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();vn(t,Us(t.transactionQueueTree_,e)),Gs(t,t.transactionQueueTree_),Y(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)Xe(u[f])}else{if(d==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{W("transaction at "+c.toString()+" failed: "+d);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=d}Ke(t,e)}},o)}function Ke(t,e){const n=xo(t,e),s=At(n),i=Ao(t,n);return ah(t,i,s),s}function ah(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],d=H(n,c.path);let h=!1,u;if(p(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(ue(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Yu)h=!0,u="maxretry",i=i.concat(ue(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Po(t,c.path,o);c.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){mn("transaction failed: Data returned ",m,c.path);let _=P(m);typeof m=="object"&&m!=null&&te(m,".priority")||(_=_.updatePriority(f.getPriority()));const B=c.currentWriteId,Le=gn(t),Lt=vo(_,f,Le);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=Lt,c.currentWriteId=qs(t),o.splice(o.indexOf(B),1),i=i.concat(po(t.serverSyncTree_,c.path,Lt,c.currentWriteId,c.applyLocally)),i=i.concat(ue(t.serverSyncTree_,B,!0))}else h=!0,u="nodata",i=i.concat(ue(t.serverSyncTree_,c.currentWriteId,!0))}Y(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}vn(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Xe(s[a]);Gs(t,t.transactionQueueTree_)}function xo(t,e){let n,s=t.transactionQueueTree_;for(n=y(e);n!==null&&tt(s)===void 0;)s=Us(s,n),e=w(e),n=y(e);return s}function Ao(t,e){const n=[];return Do(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Do(t,e,n){const s=tt(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);pn(e,i=>{Do(t,i,n)})}function vn(t,e){const n=tt(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Eo(e,n.length>0?n:void 0)}pn(e,s=>{vn(t,s)})}function zs(t,e){const n=At(xo(t,e)),s=Us(t.transactionQueueTree_,e);return Mu(s,i=>{Wn(t,i)}),Wn(t,s),Io(s,i=>{Wn(t,i)}),n}function Wn(t,e){const n=tt(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ue(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Eo(e,void 0):n.length=r+1,Y(t.eventQueue_,At(e),i);for(let o=0;o<s.length;o++)Xe(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ch(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):W(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zi=function(t,e){const n=dh(t),s=n.namespace;n.domain==="firebase.com"&&le(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yc();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Br(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new I(n.pathString)}},dh=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(a=t.substring(0,d-1),t=t.substring(d+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=lh(t.substring(h,u)));const f=ch(t.substring(Math.min(t.length,u)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(d+1),10)):d=e.length;const m=e.slice(0,d);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uh=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=er.charAt(n%64),n=Math.floor(n/64);p(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=er.charAt(e[i]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+O(this.snapshot.exportVal())}}class Lo{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new J;return th(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ie("OnDisconnect.remove",this._path);const e=new J;return Ji(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ie("OnDisconnect.set",this._path),sn("OnDisconnect.set",e,this._path,!1);const n=new J;return Ji(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ie("OnDisconnect.setWithPriority",this._path),sn("OnDisconnect.setWithPriority",e,this._path,!1),Vu("OnDisconnect.setWithPriority",n);const s=new J;return nh(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Ie("OnDisconnect.update",this._path),So("OnDisconnect.update",e,this._path);const n=new J;return sh(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:vs(this._path)}get ref(){return new de(this._repo,this._path)}get _queryIdentifier(){const e=Mi(this._queryParams),n=ms(e);return n==="{}"?"default":n}get _queryObject(){return Mi(this._queryParams)}isEqual(e){if(e=xe(e),!(e instanceof js))return!1;const n=this._repo===e._repo,s=Es(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+td(this._path)}}class de extends js{constructor(e,n){super(e,n,new ws,!1)}get parent(){const e=jr(this._path);return e===null?null:new de(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wt{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new I(e),s=Qe(this.ref,e);return new wt(this._node.getChild(n),s,k)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new wt(i,Qe(this.ref,s),k)))}hasChild(e){const n=new I(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function M(t,e){return t=xe(t),t._checkNotDeleted("ref"),e!==void 0?Qe(t._root,e):t._root}function Qe(t,e){return t=xe(t),y(t._path)===null?$u("child","path",e):To("child","path",e),new de(t._repo,R(t._path,e))}function En(t){return t=xe(t),new fh(t._repo,t._path)}function Mo(t,e){t=xe(t),Ie("push",t._path),sn("push",e,t._path,!0);const n=ko(t._repo),s=uh(n),i=Qe(t,s),r=Qe(t,s);let o;return e!=null?o=Oe(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ph(t){return Ie("remove",t._path),Oe(t,null)}function Oe(t,e){t=xe(t),Ie("set",t._path),sn("set",e,t._path,!1);const n=new J;return Xu(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ys(t,e){So("update",e,t._path);const n=new J;return Zu(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ks{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Oo("value",this,new wt(e.snapshotNode,new de(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lo(this,e,n):null}matches(e){return e instanceof Ks?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Qs{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lo(this,e,n):null}createEvent(e,n){p(e.childName!=null,"Child events should have a childName.");const s=Qe(new de(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Oo(e.type,this,new wt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Fo(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,d=(h,u)=>{Xi(t._repo,t,a),c(h,u)};d.userCallback=n.userCallback,d.context=n.context,n=d}const o=new hh(n,r||void 0),a=e==="value"?new Ks(o):new Qs(e,o);return ih(t._repo,t,a),()=>Xi(t._repo,t,a)}function be(t,e,n,s){return Fo(t,"value",e,n,s)}function mh(t,e,n,s){return Fo(t,"child_added",e,n,s)}fu(de);vu(de);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="FIREBASE_DATABASE_EMULATOR_HOST",os={};let gh=!1;function yh(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=gr(r);t.repoInfo_=new Br(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function vh(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zi(r,i),a=o.repoInfo,c;typeof process<"u"&&yi&&(c=yi[_h]),c?(r=`http://${c}?ns=${a.namespace}`,o=Zi(r,i),a=o.repoInfo):o.repoInfo.secure;const d=new kc(t.name,t.options,e);qu("Invalid Firebase Database URL",o),v(o.path)||le("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ch(a,t,d,new Rc(t,n));return new Ih(h,t)}function Eh(t,e){const n=os[e];(!n||n[t.key]!==t)&&le(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rh(t),delete n[t.key]}function Ch(t,e,n,s){let i=os[e.name];i||(i={},os[e.name]=i);let r=i[t.toURLString()];return r&&le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ku(t,gh,n,s),i[t.toURLString()]=r,r}class Ih{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new de(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Eh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&le("Cannot call "+e+" on a deleted database.")}}function bh(t=Zl(),e){const n=Yl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Fa("database");s&&wh(n,...s)}return n}function wh(t,e,n,s={}){t=xe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Vt(s,r.repoInfo_.emulatorOptions))return;le("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Bt(Bt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Ba(s.mockUserToken,t.app.options.projectId);o=new Bt(a)}gr(e)&&Ja(e),yh(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t){hc(Xl),qt(new _t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vh(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),We(vi,Ei,t),We(vi,Ei,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th={".sv":"timestamp"};function Nh(){return Th}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};re.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Sh();const Rh={apiKey:"AIzaSyAL7ksBJYIkp1-L6-Zfs0BbKes9w1sL08k",authDomain:"qwixx-c52fd.firebaseapp.com",databaseURL:"https://qwixx-c52fd-default-rtdb.europe-west1.firebasedatabase.app",projectId:"qwixx-c52fd",storageBucket:"qwixx-c52fd.firebasestorage.app",messagingSenderId:"1041757230305",appId:"1:1041757230305:web:c807bb8ae79081a13f93a0"},kh=new Set(["PLAYER_VALIDATED","DICE_ROLLED"]),Ph=2e3;let S=null,as=null,ls=null,cs=null,St=null,Be=[],Js=[],ke=null,ut=null,Pe=null,oe=null,K=!0,ht=null;function xh(){const t=Cr(Rh);S=bh(t),be(M(S,".info/connected"),e=>{e.val()===!0&&(Js.forEach(n=>n()),ke&&ke(),Pe&&Pe())})}function Ah(t){as=t}function Dh(t){ls=t}function Oh(t){cs=t}function Lh(t){St=t}function Mh(){if(!S)return;const t=M(S,`tabs/v2/${ye()}`),e=()=>{ht=En(t),ht.remove(),Oe(t,{tabId:Wt(),since:Date.now()})},n=()=>{document.hidden||e()};be(t,s=>{const i=s.val();i&&i.tabId&&i.tabId!==Wt()?Fh():Bh()},s=>console.warn("Error escuchando el liderazgo de pestañas:",s.message)),document.addEventListener("visibilitychange",()=>{if(!document.hidden){if(!K){window.location.reload();return}e()}}),Js.push(()=>{K&&e()}),n()}function Fh(){K&&(K=!1,ut&&ut.cancel().catch(()=>{}),ut=null,oe&&oe.cancel().catch(()=>{}),oe=null,ht&&ht.cancel().catch(()=>{}),ht=null,St&&St(!1))}function Bh(){const t=!K;K=!0,t&&St&&St(!0),ke&&ke(),Pe&&Pe()}function Wh(t){be(M(S,"lobby"),e=>{const n=[];e.forEach(s=>{n.push({id:s.key,...s.val()})}),t(n)},e=>console.warn("Error escuchando el lobby:",e.message))}function Hh(t){if(!S)return;const e=()=>{const n=M(S,`online/${ye()}/${Wt()}`);En(n).remove(),Oe(n,t())};Js.push(e),e()}function Bo(t){S&&Ys(M(S,`online/${ye()}/${Wt()}`),t)}function Uh(t){be(M(S,"online"),e=>{const n={};e.forEach(s=>{n[s.key]={},s.forEach(i=>{const r=i.val();r&&typeof r=="object"&&(n[s.key][i.key]=r)})}),t(n)},e=>console.warn("Error escuchando usuarios conectados:",e.message))}function Vh(t,e){const n=Mo(M(S,"lobby")),s=n.key;return Oe(n,{hostName:t,hostUserId:ye(),game:e||"qwixx",status:"lobby",hostOnline:!0,createdAt:Date.now(),playerCount:1}),Wo(s),Uo(s),s}function Wo(t){if(!S)return;const e=t||l.sessionId;e&&(Pe=()=>{if(!K)return;const n=M(S,`lobby/${e}/hostOnline`);oe=En(n),oe.set(!1),Oe(n,!0)},Pe())}function ds(t){Uo(t)}function Xs(){if(!S||!l.sessionId)return;const t=l.sessionId,e=ye();ke=()=>{if(!l.sessionId||!K)return;const n=M(S,`presence/${t}/${e}`);ut=En(n),ut.set(!1),Oe(n,!0)},ke()}function F(t){!S||!l.sessionId||!K||Mo(M(S,`events/${l.sessionId}`),{sender:ye(),createdAt:Nh(),payload:t})}function Cn(t){!S||!l.sessionId||!K||Ys(M(S,`lobby/${l.sessionId}`),t)}function Zs(){K&&Ho(l.sessionId)}function Ho(t){!S||!t||(oe&&t===l.sessionId&&(oe.cancel().catch(()=>{}),oe=null),Ys(M(S),{[`lobby/${t}`]:null,[`events/${t}`]:null,[`presence/${t}`]:null}))}function $h(t){!S||!t||ph(M(S,`lobby/${t}`))}function Uo(t){Vo();let e=null;const n=[],s=r=>{!r||!r.payload||r.sender===ye()||!kh.has(r.payload.type)&&e!==null&&typeof r.createdAt=="number"&&r.createdAt<=e||as&&as(r.payload)};let i=null;i=be(M(S,".info/serverTimeOffset"),r=>{e=Date.now()+(r.val()||0)-Ph,i&&i(),n.splice(0).forEach(s)}),Be.push(()=>{i&&i()}),Be.push(mh(M(S,`events/${t}`),r=>{const o=r.val();e===null?n.push(o):s(o)},r=>console.warn("Error escuchando eventos:",r.message))),Be.push(be(M(S,`lobby/${t}/status`),r=>{ls&&ls(r.val())},r=>console.warn("Error escuchando el estado de la partida:",r.message))),Be.push(be(M(S,`presence/${t}`),r=>{cs&&cs(r.val()||{})},r=>console.warn("Error escuchando la presencia:",r.message)))}function Vo(){Be.forEach(t=>t()),Be=[],ke=null,Pe=null,oe=null}function we(){Vo()}const qh=["qwixx2_session_id","qwixx2_is_host","qwixx2_my_id","qwixx2_game","qwixx2_game_started","qwixx2_board","qwixx2_host_state"];function Q(){l.sessionId&&(localStorage.setItem("qwixx2_session_id",l.sessionId),localStorage.setItem("qwixx2_is_host",l.isHost),localStorage.setItem("qwixx2_my_id",l.myPlayerId),localStorage.setItem("qwixx2_game",l.game),localStorage.setItem("qwixx2_game_started",l.gameStarted),localStorage.setItem("qwixx2_board",JSON.stringify({board:{marks:{red:[...l.board.marks.red],yellow:[...l.board.marks.yellow],green:[...l.board.marks.green],blue:[...l.board.marks.blue]},penalties:l.board.penalties,closedRows:[...l.board.closedRows]},turn:{...l.turn,pendingClosedRows:[...l.turn.pendingClosedRows],myLockedClosures:[...l.turn.myLockedClosures]},turnCounter:l.turnCounter})),l.isHost&&localStorage.setItem("qwixx2_host_state",JSON.stringify({playersList:l.playersList,activePlayerId:l.activePlayerId,gameStarted:l.gameStarted,dice:l.dice,hasRolledInTurn:l.turn.hasRolled,turnCounter:l.turnCounter,validatedPlayers:[...l.validatedPlayers],declaredClosures:[...l.declaredClosures]})))}function Gh(){try{const t=localStorage.getItem("qwixx2_session_id");if(!t)return null;const e=JSON.parse(localStorage.getItem("qwixx2_board")||"null");return{sessionId:t,game:localStorage.getItem("qwixx2_game")||"qwixx",isHost:localStorage.getItem("qwixx2_is_host")==="true",myPlayerId:localStorage.getItem("qwixx2_my_id")||"P1",name:localStorage.getItem("qwixx_player_name")||"",gameStarted:localStorage.getItem("qwixx2_game_started")==="true",board:e?.board||null,turn:e?.turn||null,turnCounter:e?.turnCounter||0,hostState:JSON.parse(localStorage.getItem("qwixx2_host_state")||"null")}}catch{return null}}function Dt(){qh.forEach(t=>localStorage.removeItem(t))}function Ot(t){return t.myPlayerId===t.activePlayerId}function zh(t,e){return e==null?!0:!(e<t.turnCounter||e===t.turnCounter&&t.turn.hasRolled)}function jh(t,e){return e==null?!0:e>t.turnCounter}function Yh(t){const e=[...t];for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function Kh(t,e){const n=t.map(s=>s.id);return n[(n.indexOf(e)+1)%n.length]}const rn=(t,e)=>`${t}:${e}`;function $o(t,e){return t.closedRows.has(e)}function on(t,e){const n=X[t];return n[n.length-1]===e}function Qh(t,e,{includeLock:n=!0}={}){let s=0;return X[e].forEach(i=>{t.marks[e].has(i)&&(s+=1)}),n&&t.marks[e].has(q)&&(s+=1),s}function Jh(t,e){let n=-1;return X[e].forEach((s,i)=>{t.marks[e].has(s)&&(n=i)}),n}function tr(t,e,n){if(n===q||$o(t,e)||t.marks[e].has(n))return!1;const s=X[e],i=s.indexOf(n);return!(i===-1||i<=Jh(t,e)||i===s.length-1&&Qh(t,e,{includeLock:!1})<fa)}function In(t){const e=new Set,n=new Set;if(!t.gameStarted||!t.turn.hasRolled||t.turn.hasValidated||t.gameOverTriggered)return{white:e,color:n};const s=Ot(t),i=String(t.dice.w1+t.dice.w2);return ge.forEach(r=>{if($o(t.board,r))return;const o=t.turn.marked.some(a=>a.actionType==="color"&&a.color===r);if(!t.turn.hasMarkedWhite&&!o&&tr(t.board,r,i)&&e.add(rn(r,i)),s&&!t.turn.hasMarkedColor){const a=t.dice[da[r]];[t.dice.w1+a,t.dice.w2+a].forEach(c=>{const d=String(c);tr(t.board,r,d)&&n.add(rn(r,d))})}}),{white:e,color:n}}function qo(t){if(!Ot(t)||!t.turn.hasRolled||t.turn.marked.length>0||t.turn.hasValidated)return!1;const e=In(t);return e.white.size===0&&e.color.size===0}function Xh(t){return Ot(t)||!t.turn.hasRolled||t.turn.marked.length>0||t.turn.hasValidated?!1:In(t).white.size===0}function Zh(t,e,n){return t.turn.marked.some(s=>s.color===e&&s.val===n)}function ef(t,e,n){return t.turn.myLockedClosures.has(e)&&(n===q||on(e,n))}function Go(t){const e={};let n=0;ge.forEach(i=>{const r=ha[t.marks[i].size]??0;e[i]=r,n+=r});const s=t.penalties*ma;return{perColor:e,penalty:s,total:n-s}}function tf(t,e){return t.closedRows.size>=pa?"¡Se han cerrado 2 filas en el juego!":t.penalties>=or?`¡${e} ha acumulado 4 faltas!`:null}function nf(){const t=document.getElementById("game-mount");if(!t||t.childElementCount>0)return;const e=document.createElement("div");e.className="board-rows",ge.forEach(s=>{const i=document.createElement("div");i.className=`row ${s}`,i.id=`row-${s}`,X[s].forEach(o=>{const a=document.createElement("div");a.className="cell",a.dataset.val=o,a.innerText=o,i.appendChild(a)});const r=document.createElement("div");r.className="cell lock",r.dataset.val=q,r.innerText="🔒",i.appendChild(r),e.appendChild(i)}),t.appendChild(e);const n=document.createElement("div");n.className="bottom-section",n.innerHTML=`
    <div class="penalties-container">
      <span class="penalties-label">Faltas (-5):</span>
      <div class="penalty-box"></div><div class="penalty-box"></div><div class="penalty-box"></div><div class="penalty-box"></div>
    </div>
    <div class="score-calculator">
      <div class="score-box red-total" id="total-red">0</div><span>+</span>
      <div class="score-box yellow-total" id="total-yellow">0</div><span>+</span>
      <div class="score-box green-total" id="total-green">0</div><span>+</span>
      <div class="score-box blue-total" id="total-blue">0</div><span>-</span>
      <div class="score-box penalty-total" id="total-penalty">0</div><span>=</span>
      <div class="score-box final-total" id="total-final">0</div>
    </div>
    <button class="btn-exit" id="btn-exit-game">Salir</button>`,t.appendChild(n)}function sf(){nf();const t=In(l);ge.forEach(e=>{const n=document.getElementById(`row-${e}`);if(!n)return;const s=l.board.closedRows.has(e);n.classList.toggle("fully-closed",s),n.classList.remove("closed-by-me","closed-by-other"),s&&n.classList.add(l.board.marks[e].has(q)?"closed-by-me":"closed-by-other");let i=-1;X[e].forEach((r,o)=>{l.board.marks[e].has(r)&&(i=o)}),n.querySelectorAll(".cell").forEach(r=>{const o=r.dataset.val,a=o===q?X[e].length:X[e].indexOf(o),c=l.board.marks[e].has(o),d=c&&l.turn.marked.some(f=>f.color===e&&f.val===o),h=rn(e,o),u=t.white.has(h)||t.color.has(h);r.classList.toggle("marked",c),r.classList.toggle("turn-marked",d),r.classList.toggle("selectable",u),r.classList.toggle("selectable-white",t.white.has(h)),r.classList.toggle("selectable-color",t.color.has(h)),r.classList.toggle("dimmed",!c&&!u),r.classList.toggle("disabled",!c&&(s||a<i)),r.classList.toggle("passed",!c&&o!==q&&(s||a<i))})}),document.querySelectorAll(".penalty-box").forEach((e,n)=>{e.classList.toggle("marked",n<l.board.penalties)})}function rf(){const{perColor:t,penalty:e,total:n}=Go(l.board);ge.forEach(r=>{const o=document.getElementById(`total-${r}`);o&&(o.innerText=t[r])});const s=document.getElementById("total-penalty"),i=document.getElementById("total-final");s&&(s.innerText=e),i&&(i.innerText=n)}function V(t,e="Atención"){return new Promise(n=>{const s=document.getElementById("custom-alert-modal"),i=document.getElementById("alert-title"),r=document.getElementById("alert-message"),o=document.getElementById("btn-close-alert");if(!s)return n();i.innerText=e,r.innerText=t,s.style.display="flex";const a=()=>{s.style.display="none",o.removeEventListener("click",a),n()};o.addEventListener("click",a)})}function bn(t,e="Confirmación"){return new Promise(n=>{const s=document.getElementById("custom-confirm-modal"),i=document.getElementById("confirm-title"),r=document.getElementById("confirm-message"),o=document.getElementById("btn-confirm-ok"),a=document.getElementById("btn-confirm-cancel");if(!s)return n(!1);i.innerText=e,r.innerText=t,s.style.display="flex";const c=u=>{s.style.display="none",o.removeEventListener("click",d),a.removeEventListener("click",h),n(u)},d=()=>c(!0),h=()=>c(!1);o.addEventListener("click",d),a.addEventListener("click",h)})}function zo(t){const e=document.getElementById("game-over-reason"),n=document.getElementById("game-over-modal");e&&(e.innerText=t),jo(),n&&(n.style.display="flex")}function jo(){const t=document.getElementById("leaderboard-body");if(!t)return;t.innerHTML="",Object.values(l.scores).sort((n,s)=>s.score-n.score).forEach((n,s)=>{const i=document.createElement("tr");i.innerHTML=`<td>#${s+1}</td><td>${n.name}</td><td><b>${n.score} pts</b></td>`,t.appendChild(i)})}function of(){if(!l.gameStarted||l.myPlayerId!==l.activePlayerId||l.turn.hasRolled)return;const t=ff(ir);Zo(t,l.turnCounter),Q(),F({type:"DICE_ROLLED",dice:t,turn:l.turnCounter})}function af(t){if(!l.gameStarted||!l.turn.hasRolled||l.turn.hasValidated||l.gameOverTriggered)return;const e=t.parentElement;if(!e||!e.id.startsWith("row-"))return;const n=e.id.replace("row-",""),s=t.dataset.val;if(l.board.marks[n].has(s)){lf(n,s);return}const i=In(l),r=rn(n,s);let o=null;i.white.has(r)&&!l.turn.hasMarkedWhite?(o="white",l.turn.hasMarkedWhite=!0):i.color.has(r)&&!l.turn.hasMarkedColor&&(o="color",l.turn.hasMarkedColor=!0),o&&(oi(n,s),l.turn.marked.push({color:n,val:s,actionType:o}),on(n,s)&&(oi(n,q),l.turn.marked.push({color:n,val:q,actionType:"lock"}),l.turn.pendingClosedRows.add(n)),ee(),Q())}function lf(t,e){if(ef(l,t,e)){V(`No puedes deshacer el cierre de ${rr[t]}.`);return}if(Zh(l,t,e)){if((e===q||on(t,e))&&l.turn.pendingClosedRows.has(t)){const n=on(t,e)?e:X[t][X[t].length-1];Rn(t,n),Rn(t,q),l.turn.marked=l.turn.marked.filter(s=>!(s.color===t&&(s.val===n||s.val===q))),l.turn.pendingClosedRows.delete(t)}else Rn(t,e),l.turn.marked=l.turn.marked.filter(n=>!(n.color===t&&n.val===e));l.turn.hasMarkedWhite=l.turn.marked.some(n=>n.actionType==="white"),l.turn.hasMarkedColor=l.turn.marked.some(n=>n.actionType==="color"),ee(),Q()}}async function cf(){if(qo(l))await V("Como no tienes combinaciones posibles con la tirada actual, cometes una falta obligatoria (-5 pts).","Sin Combinaciones Válidas");else if(!await bn("No has marcado ninguna casilla en tu turno. ¿Deseas pasar y anotarte una falta (-5 pts)?","Anotar Falta"))return!1;return Ia(),!0}const df={id:"qwixx",dice:ir,diceHidden(t){const e=ua[t];return!!e&&l.board.closedRows.has(e)},ui:{renderBoard:sf,renderScores:rf},hints(t){return{forcedRed:qo(t),forcedBlue:Xh(t)}},onPass:cf,validationData(){return{pendingClosedRows:Array.from(l.turn.pendingClosedRows)}},onHostValidation(t,e,n){const i=(n.pendingClosedRows||[]).find(r=>!l.declaredClosures.has(r));return i?(l.declaredClosures.add(i),{type:"ROW_CLOSURE_ALERT",closingPlayerId:t,closingPlayerName:e,color:i,declaredClosures:Array.from(l.declaredClosures)}):null},onRoundDisruption(t){(t.declaredClosures||[]).forEach(e=>{l.declaredClosures.add(e),l.turn.pendingClosedRows.has(e)&&l.turn.myLockedClosures.add(e)}),l.validatedPlayers.clear(),l.validatedPlayers.add(t.closingPlayerId),t.closingPlayerId!==l.myPlayerId&&(l.turn.hasValidated=!1,V(`¡Atención! ${t.closingPlayerName} va a cerrar el color ${rr[t.color]||t.color}.

Se han cancelado las validaciones del turno para que podáis reevaluar vuestra jugada.`,"🔒 Fila Cerrada")),ee()},turnCompletionData(){return{closedRows:Array.from(l.declaredClosures)}},gameOverReason(){return tf(l.board,l.myPlayerName)},finalScore(){return Go(l.board).total},actions:{rollDice:of,handleCellClick:af}},uf={qwixx:df},Yo=[{id:"qwixx",name:"Qwixx",available:!0,description:"Dados y filas de color: tacha hacia la derecha y cierra filas."},{id:"plenus",name:"Plenus",available:!1,description:"Próximamente"}];function hf(t){return Yo.find(e=>e.id===t)}function Z(){return uf[l.game]||null}const nr=["","⚀","⚁","⚂","⚃","⚄","⚅"];function ff(t){const e={};return t.forEach(n=>{e[n.id]=1+Math.floor(Math.random()*(n.faces||6))}),e}function pf(){const t=Z(),e=document.getElementById("dice-container");if(!t||!e)return;const n=t.dice||[];n.forEach(s=>{const i=`die-${s.id}`;let r=document.getElementById(i);if(r||(r=document.createElement("div"),r.id=i,r.className=`die ${s.className||""}`,e.appendChild(r)),t.diceHidden&&t.diceHidden(s.id)){r.style.display="none";return}r.style.display="flex",r.style.visibility=l.turn.hasRolled?"visible":"hidden",l.turn.hasRolled&&(r.innerText=nr[l.dice[s.id]]||nr[1])}),[...e.children].forEach(s=>{n.some(i=>`die-${i.id}`===s.id)||s.remove()})}function Ko(){const t=Sa(),e=Ot(l),n=l.playersList.find(d=>d.id===l.activePlayerId),s=!!n&&l.presence[n.userId]===!1,i=document.getElementById("dice-status-msg");i&&(l.turn.hasRolled?(i.style.display="none",i.innerText=""):(i.style.display="block",e?i.innerText="¡Tu turno! Lanza 🎲":s?i.innerText=`Esperando por ${t} (sin conexión)... 📴`:i.innerText=`Esperando a ${t}... ⏳`));const r=document.getElementById("btn-roll-dice"),o=Z(),a=o&&o.hints?o.hints(l):{},c=document.getElementById("btn-validate-turn");l.turn.hasRolled?(r&&(r.style.display="none"),c&&(c.innerText="Validar",c.style.display="block",c.disabled=l.turn.hasValidated)):e?(r&&(r.innerText="Lanzar",r.style.display="block",r.disabled=!1),c&&(c.style.display="none")):(r&&(r.style.display="none"),c&&(c.innerText="Validar",c.style.display="block",c.disabled=!0)),c&&(c.classList.remove("forced-penalty-red","forced-penalty-blue"),l.turn.hasRolled&&l.turn.marked.length===0&&(a.forcedRed?c.classList.add("forced-penalty-red"):a.forcedBlue&&c.classList.add("forced-penalty-blue"))),l.turn.hasValidated?Qo():ti()}function ce(){const t=document.getElementById("player-list"),e=document.getElementById("turn-wait-list");t&&(t.innerHTML="",e&&(e.innerHTML=""),l.playersList.forEach(n=>{const s=l.validatedPlayers.has(n.id),i=n.id===l.activePlayerId,r=l.presence[n.userId]===!1,o=l.isHost&&r&&n.id!==l.myPlayerId,a=document.createElement("li");a.innerHTML=`
      <span class="${r?"player-offline":""}">${i?"🎲 ":""}${ei(n.name)} ${n.id==="P1"?"👑":""}${r?" 📴":""}</span>
      <span>${s?"✔️":"⏳"}${o?` <button class="player-kick" data-player-id="${n.id}" title="Expulsar (desconectado)">✖</button>`:""}</span>`,t.appendChild(a),e&&e.appendChild(a.cloneNode(!0))}))}function mf(){const t=document.getElementById("games-list"),e=document.getElementById("no-games-placeholder");if(!t)return;const n=l.lobbyGames.filter(s=>s.status==="lobby"&&!!s.game).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0));t.innerHTML="",e&&(e.style.display=n.length===0?"block":"none"),n.forEach(s=>{const i=s.playerCount||1,r=s.hostOnline===!1,o=s.hostUserId===l.userId,a=document.createElement("li");a.className=`game-item${r?" grayed":""}`,a.innerHTML=`
      <span class="game-info"><b>Partida de ${ei(s.hostName)}</b> <span class="game-chip">${hf(s.game)?.name||s.game}</span>
        <span class="game-meta">${r?"⏳ Esperando al anfitrión":`${i} jugador${i===1?"":"es"}`}</span>
      </span>
      ${o?`<button class="game-delete" data-delete-id="${s.id}" title="Eliminar mi partida">🗑</button>`:r?"":`<button class="net-btn join" data-session-id="${s.id}">Unirse</button>`}`,t.appendChild(a)})}function ei(t){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Qo(){const t=document.getElementById("wait-panel");t&&(t.style.display="flex")}function ti(){const t=document.getElementById("wait-panel");t&&(t.style.display="none")}function _f(){const t=document.getElementById("wait-panel");t&&t.style.display==="flex"?ti():Qo()}function gf(){document.body.classList.add("in-game");const t=document.querySelector(".network-bar"),e=document.getElementById("game-area");t&&(t.style.display="none"),e&&(e.style.display="block")}function yf(){const t=document.getElementById("tab-overlay");t&&(t.style.display="flex")}function vf(){const t=document.getElementById("tab-overlay");t&&(t.style.display="none")}function Ef(){document.getElementById("net-setup").style.display="flex",document.getElementById("lobby-list-section").style.display="block",document.getElementById("lobby-section").style.display="none"}function Jo(t){document.getElementById("net-setup").style.display="none",document.getElementById("lobby-list-section").style.display="none",document.getElementById("lobby-section").style.display="block",document.getElementById("display-host-name").innerText=t,document.getElementById("host-controls").style.display="block",document.getElementById("client-waiting").style.display="none"}function ni(t){document.getElementById("net-setup").style.display="none",document.getElementById("lobby-list-section").style.display="none",document.getElementById("lobby-section").style.display="block",document.getElementById("display-host-name").innerText=t,document.getElementById("host-controls").style.display="none",document.getElementById("client-waiting").style.display="block"}function Cf(t){const e=document.getElementById("game-picker");e&&(e.innerHTML="",Yo.forEach(n=>{const s=document.createElement("button");s.className="game-picker-btn"+(n.available?"":" disabled"),s.disabled=!n.available;const i=document.createElement("span");i.className="game-picker-name",i.innerText=n.name;const r=document.createElement("span");r.className="game-picker-desc",r.innerText=n.description,s.appendChild(i),s.appendChild(r),n.available&&s.addEventListener("click",()=>{Xo(),t(n.id)}),e.appendChild(s)}))}function If(){const t=document.getElementById("game-picker-modal");t&&(t.style.display="flex")}function Xo(){const t=document.getElementById("game-picker-modal");t&&(t.style.display="none")}function ee(){const t=Z();t&&t.ui&&(t.ui.renderBoard&&t.ui.renderBoard(),t.ui.renderScores&&t.ui.renderScores()),pf(),Ko(),ce()}function Tt(){l.gameStarted=!0,gf(),ee()}function Zo(t,e){zh(l,e)&&(hs(),l.turn.hasRolled=!0,l.dice=t,ee())}function ea(t,e=[],n){jh(l,n)&&(l.activePlayerId=t,ba(e),hs(),l.validatedPlayers.clear(),l.declaredClosures.clear(),n!=null&&(l.turnCounter=n),Q(),ee())}function ta(t){l.playersList.some(e=>e.id===t.playerId)&&(l.playersList=l.playersList.filter(e=>e.id!==t.playerId),l.activePlayerId=l.activePlayerId===t.playerId?(l.playersList[0]||{}).id:l.activePlayerId,l.isHost&&Cn({playerCount:l.playersList.length}),l.gameStarted?ee():ce(),Q())}function na(){if(l.gameOverTriggered)return!0;const t=Z(),e=t&&t.gameOverReason?t.gameOverReason():null;return e?(l.gameOverTriggered=!0,sa(),F({type:"GAME_OVER",reason:e,playerId:l.myPlayerId,playerName:l.myPlayerName,score:l.scores[l.myPlayerId].score}),l.isHost&&Cn({status:"finished"}),zo(e),!0):!1}function sa(){const t=Z(),e=t&&t.finalScore?t.finalScore():0;l.scores[l.myPlayerId]={id:l.myPlayerId,name:l.myPlayerName,score:e},F({type:"SUBMIT_SCORE",playerId:l.myPlayerId,playerName:l.myPlayerName,score:e})}function ia(t,e){return{type:"WELCOME",targetUserId:t,playerId:e,players:l.playersList,activePlayerId:l.activePlayerId,game:l.game,gameStarted:l.gameStarted,dice:l.dice,hasRolled:l.turn.hasRolled,validatedList:Array.from(l.validatedPlayers),turn:l.turnCounter}}function ft(t,e){F({type:"REJECTED",targetUserId:t,reason:e})}function bf(t){if(l.gameStarted)return ft(t.userId,"La partida ya ha comenzado.");const e=t.name.trim();if(l.playersList.some(s=>s.name.toLowerCase()===e.toLowerCase()))return ft(t.userId,"Nombre en uso en esta sala.");if(l.playersList.some(s=>s.userId===t.userId))return ft(t.userId,"Ya estás en esta partida en otra pestaña de este navegador. Vuelve a esa pestaña o ciérrala.");const n=wa();l.playersList.push({id:n,userId:t.userId,name:e}),F(ia(t.userId,n)),F({type:"PLAYER_JOINED",players:l.playersList}),Cn({playerCount:l.playersList.length}),ce(),Q()}function wf(t){const e=l.playersList.find(n=>n.userId===t.userId);if(l.gameOverTriggered)return ft(t.userId,"La partida ya ha terminado.");if(!e)return ft(t.userId,"Ya no estás en esta partida.");F(ia(t.userId,e.id))}function Sf(t){if(!l.isHost)return;const e=l.playersList.find(n=>n.id===t);!e||l.presence[e.userId]!==!1||(F({type:"PLAYER_LEFT",playerId:t,playerName:e.name}),ta({playerId:t,playerName:e.name}))}async function Tf(){if(!l.gameStarted||l.gameOverTriggered||l.turn.hasValidated)return;const t=Z(),e=Ot(l);if(!l.turn.hasRolled)return V(e?"Debes lanzar los dados antes de validar tu turno.":"Debes esperar a que el jugador activo lance los dados.");if(e&&l.turn.marked.length===0&&t&&t.onPass&&await t.onPass()===!1)return;l.turn.hasValidated=!0,ee();const n=t?t.validationData():{};l.isHost?ra(l.myPlayerId,l.myPlayerName,n,l.turnCounter):F({type:"PLAYER_VALIDATED",playerId:l.myPlayerId,playerName:l.myPlayerName,gameData:n,turn:l.turnCounter})}function ra(t,e,n={},s){if(s!==void 0&&s!==l.turnCounter)return;const i=Z(),r=i&&i.onHostValidation?i.onHostValidation(t,e,n):null;if(r){F(r),oa(r);return}if(l.validatedPlayers.add(t),F({type:"VALIDATION_UPDATE",validatedList:Array.from(l.validatedPlayers)}),ce(),l.validatedPlayers.size>=l.playersList.length){const a=(i&&i.turnCompletionData?i.turnCompletionData():{}).closedRows||[],c=Kh(l.playersList,l.activePlayerId),d=l.turnCounter+1;F({type:"TURN_CHANGED",nextPlayer:c,closedRows:a,turn:d}),ea(c,a,d),na()}}function oa(t){const e=Z();l.validatedPlayers.clear(),e&&e.onRoundDisruption&&e.onRoundDisruption(t)}const Nf=9e4;let ne=null;function Rf(){Oh(kf)}function kf(t){l.presence=t||{},(l.sessionJoined||l.reconnecting)&&(ce(),Ko()),Pf()}function Pf(){const t=l.playersList[0];if(!(!!t&&l.presence[t.userId]===!1&&!l.isHost&&l.sessionId)){ne&&(clearTimeout(ne),ne=null);return}ne||(ne=setTimeout(xf,Nf))}async function xf(){ne=null;const t=l.playersList[0];if(l.sessionId&&t&&l.presence[t.userId]===!1){if(l.gameStarted){Zs();return}await V("El anfitrión no ha vuelto. La partida queda a la espera en el listado.","Anfitrión sin conexión"),we(),Dt(),window.location.reload()}}function wn(){ne&&(clearTimeout(ne),ne=null)}function Af(t){const e=[];return Object.entries(t||{}).forEach(([n,s])=>{let i=null,r="lobby",o=null;Object.values(s||{}).forEach(a=>{a&&(a.name&&(i=a.name),a.status==="playing"&&(r="playing"),typeof a.since=="number"&&(o===null||a.since<o)&&(o=a.since))}),e.push({userId:n,name:i,status:r,since:o})}),e.sort((n,s)=>(n.since??1/0)-(s.since??1/0)),e}function Df(){const t=document.getElementById("online-count");t&&(t.innerText=l.onlineUsers.length),Of()}function Of(){const t=document.getElementById("online-list");if(!t)return;t.innerHTML="",[...l.onlineUsers].sort((n,s)=>n.userId===l.userId?-1:s.userId===l.userId?1:(n.name||"zzz").localeCompare(s.name||"zzz")).forEach(n=>{const s=n.userId===l.userId,i=n.name||"Decidiendo nombre...",r=n.status==="playing"?"🎲 En partida":"👀 Disponible",o=document.createElement("li");o.innerHTML=`<span class="${n.name?"":"unnamed"}">${ei(i)}${s?" (tú)":""}</span><span class="online-status">${r}</span>`,t.appendChild(o)})}function Lf(){const t=document.getElementById("online-popover");t&&(t.style.display=t.style.display==="flex"?"none":"flex")}function Mf(){const t=document.getElementById("online-popover");t&&(t.style.display="none")}let Nt={name:null,status:"lobby",since:Date.now()};function Ff(){Nt.name=localStorage.getItem("qwixx_player_name")||null,Hh(()=>({...Nt})),Uh(t=>{l.onlineUsers=Af(t),Df()})}function aa(t){Nt.name=t||null,Bo({name:Nt.name})}function Sn(t){Nt.status=t,Bo({status:t})}function si(){return!!document.documentElement.requestFullscreen}function Bf(){return window.matchMedia("(pointer: coarse)").matches}function Tn(){return document.fullscreenElement!=null}function Wf(){if(Tn()){document.exitFullscreen().catch(()=>{});return}si()&&document.documentElement.requestFullscreen().catch(()=>{})}function ii(){!Bf()||Tn()||si()&&document.documentElement.requestFullscreen().catch(()=>{})}function Hf(){Tn()&&document.exitFullscreen().catch(()=>{})}function Uf(){const t=document.getElementById("btn-fullscreen");if(t){if(!si()){t.style.display="none";return}t.addEventListener("click",Wf),document.addEventListener("fullscreenchange",()=>{t.classList.toggle("active",Tn())})}}const Vf=1e5;let us=!1,pt=[];function $f(){Wh(t=>{if(l.lobbyGames=t,Gf(t),mf(),!us){us=!0;const e=pt;pt=[],e.forEach(n=>n())}}),Dh(t=>{t===null&&l.sessionId&&ep()})}function qf(t){if(us)return t();pt.push(t),setTimeout(()=>{const e=pt.indexOf(t);e!==-1&&(pt.splice(e,1),t())},2500)}function Gf(t){t.forEach(e=>{e.status||$h(e.id)})}function la(){const t=document.getElementById("player-name-input"),e=t.value.trim();return e?(localStorage.setItem("qwixx_player_name",e),aa(e),e):(V("Introduce tu nombre antes de empezar."),t.focus(),null)}function zf(){return l.lobbyGames.some(t=>t.game&&t.hostUserId===l.userId&&(t.status==="lobby"||t.status==="started"))}function jf(t){const e=la();if(e){if(zf())return V("Ya tienes una partida creada con este usuario. Elimínala desde el listado (🗑) para crear otra.","Partida duplicada");l.myPlayerName=e,l.isHost=!0,l.myPlayerId="P1",l.playersList=[{id:"P1",userId:l.userId,name:e}],l.game=t,l.sessionJoined=!0,l.sessionId=Vh(e,t),Xs(),Sn("playing"),ii(),Jo(e),ce(),Q()}}function Yf(t){const e=la();if(!e||l.sessionJoined||l.reconnecting)return;const n=l.lobbyGames.find(s=>s.id===t);if(!n||n.status!=="lobby"||!n.game)return V("Esa partida ya no está disponible.");if(n.hostOnline===!1)return V("El anfitrión no está conectado. Podrás unirte cuando vuelva.");l.myPlayerName=e,l.sessionId=t,l.isHost=!1,ds(t),ni(n.hostName),F({type:"HANDSHAKE",userId:l.userId,name:e}),Sn("playing"),ii()}async function Kf(){l.isHost&&(l.playersList.length<2&&!await bn("¿Quieres iniciar una partida en solitario?","Partida Individual")||(l.playersList=Yh(l.playersList),l.activePlayerId=l.playersList[0].id,l.gameStarted=!0,l.turnCounter=1,Q(),ii(),Cn({status:"started"}),F({type:"GAME_STARTED",players:l.playersList,activePlayerId:l.activePlayerId,turn:l.turnCounter}),Tt()))}function Qf(){const t=Gh();return!t||!l.userId?!1:(qf(()=>{const e=l.lobbyGames.find(s=>s.id===t.sessionId);if(!(!!e&&!!e.game&&(e.status==="lobby"||e.status==="started"))){Dt();return}l.sessionId=t.sessionId,l.game=t.game||"qwixx",l.isHost=t.isHost,l.myPlayerId=t.myPlayerId,l.myPlayerName=t.name||l.myPlayerName,l.turnCounter=t.turnCounter||0,Sn("playing"),va(t.board),Ea(t.turn),t.isHost?(Ca(t.hostState),l.sessionJoined=!0,ds(t.sessionId),Xs(),Wo(t.sessionId),l.gameStarted?Tt():Jo(l.myPlayerName),ee(),Q()):(l.reconnecting=!0,ds(t.sessionId),t.gameStarted?Tt():ni(Jf(t.sessionId)),ee(),F({type:"REJOIN",userId:l.userId,name:l.myPlayerName}),setTimeout(()=>{l.reconnecting&&(l.reconnecting=!1,ri("No se pudo recuperar la partida."))},Vf))}),!0)}function Jf(t){const e=l.lobbyGames.find(n=>n.id===t);return e?e.hostName:"..."}async function Xf(t){const e=l.lobbyGames.find(s=>s.id===t);!e||e.hostUserId!==l.userId||!await bn(`¿Eliminar tu partida "${e.hostName}"? No se podrá recuperar.`,"Eliminar partida")||Ho(t)}function Zf(){l.sessionId&&(l.isHost?(Zs(),we()):(l.playersList.some(t=>t.id===l.myPlayerId)&&F({type:"PLAYER_LEFT",playerId:l.myPlayerId,playerName:l.myPlayerName}),we()),wn(),Dt(),ya(),Sn("lobby"),Hf(),Ef())}async function sr(t=!1){!t&&!l.gameOverTriggered&&!await bn("¿Seguro que quieres abandonar la partida?","Salir del Juego")||(l.isHost?(Zs(),we()):(l.sessionJoined&&!l.gameOverTriggered&&F({type:"PLAYER_LEFT",playerId:l.myPlayerId,playerName:l.myPlayerName}),we()),wn(),document.body.classList.remove("in-game"),Dt(),window.location.reload())}function ep(){l.gameOverTriggered||(wn(),ri("El anfitrión ha cerrado la partida o perdió la conexión.","Partida Cerrada"))}async function ri(t,e="Atención"){t&&await V(t,e),wn(),we(),Dt(),window.location.reload()}const tp=new Set(["REJECTED","WELCOME","PLAYER_JOINED","PLAYER_LEFT"]);function np(){Ah(sp)}function sp(t){if(!(!l.sessionJoined&&!l.reconnecting&&!tp.has(t.type))){if(l.isHost){if(t.type==="HANDSHAKE")return bf(t);if(t.type==="REJOIN")return wf(t);if(t.type==="PLAYER_VALIDATED")return ra(t.playerId,t.playerName,t.gameData,t.turn)}ip(t)}}function ip(t){switch(t.type){case"REJECTED":t.targetUserId===l.userId&&(l.reconnecting=!1,ri(t.reason,"Conexión rechazada"));break;case"WELCOME":t.targetUserId===l.userId&&rp(t);break;case"PLAYER_JOINED":l.playersList=t.players,ce(),Q();break;case"PLAYER_LEFT":V(`⚠️ ${t.playerName} ha abandonado la partida.`,"Jugador Desconectado"),ta(t);break;case"GAME_STARTED":l.playersList=t.players,l.activePlayerId=t.activePlayerId,t.turn&&(l.turnCounter=t.turn),Tt();break;case"DICE_ROLLED":Zo(t.dice,t.turn);break;case"ROW_CLOSURE_ALERT":oa(t);break;case"VALIDATION_UPDATE":l.validatedPlayers=new Set(t.validatedList),ce();break;case"TURN_CHANGED":ea(t.nextPlayer,t.closedRows,t.turn),na();break;case"GAME_OVER":l.scores[t.playerId]={id:t.playerId,name:t.playerName,score:t.score},l.gameOverTriggered||(l.gameOverTriggered=!0,sa()),zo(t.reason);break;case"SUBMIT_SCORE":l.scores[t.playerId]={id:t.playerId,name:t.playerName,score:t.score},jo();break}}function rp(t){const e=l.turnCounter;if(l.myPlayerId=t.playerId,t.game&&(l.game=t.game),l.playersList=t.players,l.activePlayerId=t.activePlayerId,l.turnCounter=t.turn??e,l.dice=t.dice||l.dice,l.validatedPlayers=new Set(t.validatedList||[]),e<l.turnCounter&&hs(),l.turn.hasRolled=!!t.hasRolled,l.turn.hasValidated=l.validatedPlayers.has(l.myPlayerId),l.sessionJoined=!0,l.reconnecting=!1,Xs(),t.gameStarted)Tt();else{const n=l.lobbyGames.find(s=>s.id===l.sessionId);ni(n?n.hostName:"..."),ce()}Q()}window.addEventListener("DOMContentLoaded",()=>{l.userId=ye();const t=localStorage.getItem("qwixx_player_name");t&&(document.getElementById("player-name-input").value=t),xh(),np(),Rf(),$f(),Ff(),Mh(),Lh(s=>s?vf():yf()),document.getElementById("online-badge").addEventListener("click",s=>{s.stopPropagation(),Lf()}),document.addEventListener("click",s=>{const i=document.getElementById("online-popover");i&&i.style.display==="flex"&&!i.contains(s.target)&&Mf()});const e=document.getElementById("player-name-input");e.addEventListener("change",()=>aa(e.value.trim()||null)),Uf(),document.getElementById("btn-create-room").addEventListener("click",()=>{if(!e.value.trim()){V("Introduce tu nombre antes de empezar."),e.focus();return}Cf(s=>jf(s)),If()}),document.getElementById("game-picker-modal").addEventListener("click",s=>{s.target.id==="game-picker-modal"&&Xo()}),document.getElementById("btn-start-game").addEventListener("click",Kf),document.getElementById("btn-leave-lobby").addEventListener("click",Zf),document.getElementById("btn-roll-dice").addEventListener("click",()=>{const s=Z();s&&s.actions&&s.actions.rollDice&&s.actions.rollDice()}),document.getElementById("btn-validate-turn").addEventListener("click",Tf),document.getElementById("btn-modal-exit").addEventListener("click",()=>sr(!0)),document.getElementById("btn-show-players").addEventListener("click",_f),document.getElementById("btn-return-actions").addEventListener("click",ti),document.addEventListener("click",s=>{s.target.closest("#btn-exit-game")&&sr(!1)}),document.getElementById("games-list").addEventListener("click",s=>{const i=s.target.closest("button[data-delete-id]");if(i)return Xf(i.dataset.deleteId);const r=s.target.closest("button[data-session-id]");r&&Yf(r.dataset.sessionId)});const n=s=>{const i=s.target.closest(".player-kick");i&&Sf(i.dataset.playerId)};document.getElementById("player-list").addEventListener("click",n),document.getElementById("turn-wait-list").addEventListener("click",n),document.getElementById("game-area").addEventListener("click",s=>{const i=s.target.closest(".cell");if(!i)return;const r=Z();r&&r.actions&&r.actions.handleCellClick&&r.actions.handleCellClick(i)}),Qf(),window.__multijuegosReady=!0});
