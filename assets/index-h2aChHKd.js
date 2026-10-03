(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const ke=["red","yellow","green","blue"],nr={red:"ROJO",yellow:"AMARILLO",green:"VERDE",blue:"AZUL"},ra=["","⚀","⚁","⚂","⚃","⚄","⚅"],oa={0:0,1:1,2:3,3:6,4:10,5:15,6:21,7:28,8:36,9:45,10:55,11:66,12:78},z="lock",aa=5,sr=4,la=2,ca=5,se={red:["2","3","4","5","6","7","8","9","10","11","12"],yellow:["2","3","4","5","6","7","8","9","10","11","12"],green:["12","11","10","9","8","7","6","5","4","3","2"],blue:["12","11","10","9","8","7","6","5","4","3","2"]},ua={red:"r",yellow:"y",green:"g",blue:"b"};function da(){return{marks:{red:new Set,yellow:new Set,green:new Set,blue:new Set},penalties:0,closedRows:new Set}}function ir(){return{hasRolled:!1,marked:[],hasMarkedWhite:!1,hasMarkedColor:!1,hasValidated:!1,pendingClosedRows:new Set,myLockedClosures:new Set}}function ha(){return{userId:"",sessionId:"",isHost:!1,myPlayerId:"P1",myPlayerName:"",gameStarted:!1,gameOverTriggered:!1,reconnecting:!1,lobbyGames:[],sessionJoined:!1,presence:{},onlineUsers:[],playersList:[],activePlayerId:"P1",validatedPlayers:new Set,declaredClosures:new Set,turnCounter:0,dice:{w1:1,w2:1,r:1,y:1,g:1,b:1},board:da(),turn:ir(),scores:{}}}const l=ha();function ds(){l.turn=ir()}function fa(){l.sessionId="",l.isHost=!1,l.myPlayerId="P1",l.gameStarted=!1,l.gameOverTriggered=!1,l.sessionJoined=!1,l.reconnecting=!1,l.presence={},l.playersList=[],l.activePlayerId="P1",l.validatedPlayers.clear(),l.declaredClosures.clear(),l.turnCounter=0,l.scores={}}function pa(t){t&&(ke.forEach(e=>{l.board.marks[e]=new Set(t.marks?.[e]||[])}),l.board.penalties=t.penalties||0,l.board.closedRows=new Set(t.closedRows||[]))}function _a(t){t&&(l.turn={hasRolled:!!t.hasRolled,marked:t.marked||[],hasMarkedWhite:!!t.hasMarkedWhite,hasMarkedColor:!!t.hasMarkedColor,hasValidated:!!t.hasValidated,pendingClosedRows:new Set(t.pendingClosedRows||[]),myLockedClosures:new Set(t.myLockedClosures||[])})}function ma(t){t&&(l.playersList=t.playersList||[],l.activePlayerId=t.activePlayerId||"P1",l.gameStarted=!!t.gameStarted,l.dice=t.dice||l.dice,l.turnCounter=t.turnCounter||0,l.turn.hasRolled=!!t.hasRolledInTurn,l.validatedPlayers=new Set(t.validatedPlayers||[]),l.declaredClosures=new Set(t.declaredClosures||[]))}function ri(t,e){ke.includes(t)&&l.board.marks[t].add(e)}function Rn(t,e){ke.includes(t)&&l.board.marks[t].delete(e)}function ga(){l.board.penalties<sr&&(l.board.penalties+=1)}function ya(t=[]){t.forEach(e=>l.board.closedRows.add(e))}function va(){return"P"+(l.playersList.reduce((e,n)=>Math.max(e,parseInt(n.id.slice(1),10)||0),0)+1)}function Ea(){const t=l.playersList.find(e=>e.id===l.activePlayerId);return t?t.name:l.activePlayerId}const oi="qwixx_user_id",Ca=crypto.randomUUID();function me(){let t=localStorage.getItem(oi);return t||(t=crypto.randomUUID(),localStorage.setItem(oi,t)),t}function Bt(){return Ca}const Ia=()=>{};var ai={};/**
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
 */const rr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(t,e){if(!t)throw Qe(e)},Qe=function(t){return new Error("Firebase Database ("+rr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const or=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ba=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(f=64)),s.push(n[h],n[d],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(or(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ba(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new wa;const f=r<<2|a>>4;if(s.push(f),u!==64){const _=a<<4&240|u>>2;if(s.push(_),d!==64){const m=u<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ar=function(t){const e=or(t);return hs.encodeByteArray(e,!0)},Wt=function(t){return ar(t).replace(/\./g,"")},Wn=function(t){try{return hs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sa(t){return lr(void 0,t)}function lr(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ta(n)||(t[n]=lr(t[n],e[n]));return t}function Ta(t){return t!=="__proto__"}/**
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
 */function Ra(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Na=()=>Ra().__FIREBASE_DEFAULTS__,ka=()=>{if(typeof process>"u"||typeof ai>"u")return;const t=ai.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pa=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wn(t[1]);return e&&JSON.parse(e)},cr=()=>{try{return Ia()||Na()||ka()||Pa()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Aa=t=>cr()?.emulatorHosts?.[t],xa=t=>{const e=Aa(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ur=()=>cr()?.config;/**
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
 */function Da(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Wt(JSON.stringify(n)),Wt(JSON.stringify(o)),""].join(".")}/**
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
 */function Oa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oa())}function La(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ma(){return rr.NODE_ADMIN===!0}function Fa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ba(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Wa="FirebaseError";class Rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wa,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ha(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,s)}}function Ha(t,e){try{let n=0,s="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){s+=t.substring(n);break}const r=t.indexOf("}",i+2);if(r===-1){s+=t.substring(n);break}const o=t.substring(i+2,r),a=e[o];s+=t.substring(n,i)+(a!=null?String(a):`<${o}?>`),n=r+1}return s}catch{return t}}/**
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
 */function pt(t){return JSON.parse(t)}function O(t){return JSON.stringify(t)}/**
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
 */const fr=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=pt(Wn(r[0])||""),n=pt(Wn(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ua=function(t){const e=fr(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Va=function(t){const e=fr(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ve(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ht(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ut(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(li(r)&&li(o)){if(!Ut(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function li(t){return t!==null&&typeof t=="object"}/**
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
 */function $a(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Ga{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):d<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const f=(i<<5|i>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $e(t,e){return`${t} failed: ${e} argument `}/**
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
 */const qa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},on=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}/**
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
 */function pr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function za(t){return(await fetch(t,{credentials:"include"})).ok}class _t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ge="[DEFAULT]";/**
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
 */class ja{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new J;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ka(e))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ge){return this.instances.has(e)}getOptions(e=ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ya(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ge){return this.component?this.component.multipleInstances?e:ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ya(t){return t===ge?void 0:t}function Ka(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ja(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Ja={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Xa=R.INFO,Za={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},el=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Za[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _r{constructor(e){this.name=e,this._logLevel=Xa,this._logHandler=el,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ja[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const tl=(t,e)=>e.some(n=>t instanceof n);let ci,ui;function nl(){return ci||(ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sl(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mr=new WeakMap,Un=new WeakMap,gr=new WeakMap,Nn=new WeakMap,fs=new WeakMap;function il(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(de(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mr.set(n,t)}).catch(()=>{}),fs.set(e,t),e}function rl(t){if(Un.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Un.set(t,e)}let Vn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Un.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return de(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ol(t){Vn=t(Vn)}function al(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(kn(this),e,...n);return gr.set(s,e.sort?e.sort():[e]),de(s)}:sl().includes(t)?function(...e){return t.apply(kn(this),e),de(mr.get(this))}:function(...e){return de(t.apply(kn(this),e))}}function ll(t){return typeof t=="function"?al(t):(t instanceof IDBTransaction&&rl(t),tl(t,nl())?new Proxy(t,Vn):t)}function de(t){if(t instanceof IDBRequest)return il(t);if(Nn.has(t))return Nn.get(t);const e=ll(t);return e!==t&&(Nn.set(t,e),fs.set(e,t)),e}const kn=t=>fs.get(t);function cl(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=de(o);return s&&o.addEventListener("upgradeneeded",c=>{s(de(o.result),c.oldVersion,c.newVersion,de(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ul=["get","getKey","getAll","getAllKeys","count"],dl=["put","add","delete","clear"],Pn=new Map;function di(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pn.get(e))return Pn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=dl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ul.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Pn.set(e,r),r}ol(t=>({...t,get:(e,n,s)=>di(e,n)||t.get(e,n,s),has:(e,n)=>!!di(e,n)||t.has(e,n)}));/**
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
 */class hl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fl(t){return t.getComponent()?.type==="VERSION"}const $n="@firebase/app",hi="0.16.2";/**
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
 */const oe=new _r("@firebase/app"),pl="@firebase/app-compat",_l="@firebase/analytics-compat",ml="@firebase/analytics",gl="@firebase/app-check-compat",yl="@firebase/app-check",vl="@firebase/auth",El="@firebase/auth-compat",Cl="@firebase/database",Il="@firebase/data-connect",bl="@firebase/database-compat",wl="@firebase/functions",Sl="@firebase/functions-compat",Tl="@firebase/installations",Rl="@firebase/installations-compat",Nl="@firebase/messaging",kl="@firebase/messaging-compat",Pl="@firebase/performance",Al="@firebase/performance-compat",xl="@firebase/remote-config",Dl="@firebase/remote-config-compat",Ol="@firebase/storage",Ll="@firebase/storage-compat",Ml="@firebase/firestore",Fl="@firebase/ai",Bl="@firebase/firestore-compat",Wl="firebase",Hl="12.19.0";/**
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
 */const Gn="[DEFAULT]",Ul={[$n]:"fire-core",[pl]:"fire-core-compat",[ml]:"fire-analytics",[_l]:"fire-analytics-compat",[yl]:"fire-app-check",[gl]:"fire-app-check-compat",[vl]:"fire-auth",[El]:"fire-auth-compat",[Cl]:"fire-rtdb",[Il]:"fire-data-connect",[bl]:"fire-rtdb-compat",[wl]:"fire-fn",[Sl]:"fire-fn-compat",[Tl]:"fire-iid",[Rl]:"fire-iid-compat",[Nl]:"fire-fcm",[kl]:"fire-fcm-compat",[Pl]:"fire-perf",[Al]:"fire-perf-compat",[xl]:"fire-rc",[Dl]:"fire-rc-compat",[Ol]:"fire-gcs",[Ll]:"fire-gcs-compat",[Ml]:"fire-fst",[Bl]:"fire-fst-compat",[Fl]:"fire-vertex","fire-js":"fire-js",[Wl]:"fire-js-all"};/**
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
 */const Vt=new Map,Vl=new Map,qn=new Map;function fi(t,e){try{t.container.addComponent(e)}catch(n){oe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $t(t){const e=t.name;if(qn.has(e))return oe.debug(`There were multiple attempts to register component ${e}.`),!1;qn.set(e,t);for(const n of Vt.values())fi(n,t);for(const n of Vl.values())fi(n,t);return!0}function $l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gl(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new hr("app","Firebase",ql);/**
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
 */class zl{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
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
 */const jl=Hl;function yr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Gn,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw te.create("bad-app-name",{appName:String(i)});if(n||(n=ur()),!n)throw te.create("no-options");const r=Vt.get(i);if(r)if(Ut(n,r.options)){if(Ut(s,r.config))return r;throw te.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw te.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(n)});const o=new Qa(i);for(const c of qn.values())o.addComponent(c);const a=new zl(n,s,o);return Vt.set(i,a),a}function Yl(t=Gn){const e=Vt.get(t);if(!e&&t===Gn&&ur())return yr();if(!e)throw te.create("no-app",{appName:t});return e}function Be(t,e,n){let s=Ul[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oe.warn(o.join(" "));return}$t(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Kl="firebase-heartbeat-database",Ql=1,mt="firebase-heartbeat-store";let An=null;function vr(){return An||(An=cl(Kl,Ql,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mt)}catch(n){console.warn(n)}}}}).catch(t=>{throw te.create("idb-open",{originalErrorMessage:t.message})})),An}async function Jl(t){try{const n=(await vr()).transaction(mt),s=await n.objectStore(mt).get(Er(t));return await n.done,s}catch(e){if(e instanceof Rt)oe.warn(e.message);else{const n=te.create("idb-get",{originalErrorMessage:e?.message});oe.warn(n.message)}}}async function pi(t,e){try{const s=(await vr()).transaction(mt,"readwrite");await s.objectStore(mt).put(e,Er(t)),await s.done}catch(n){if(n instanceof Rt)oe.warn(n.message);else{const s=te.create("idb-set",{originalErrorMessage:n?.message});oe.warn(s.message)}}}function Er(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xl=1024,Zl=30;class ec{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_i();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Zl){const i=sc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){oe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_i(),{heartbeatsToSend:n,unsentEntries:s}=tc(this._heartbeatsCache.heartbeats),i=Wt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return oe.warn(e),""}}}function _i(){return new Date().toISOString().substring(0,10)}function tc(t,e=Xl){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mi(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mi(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fa()?Ba().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jl(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mi(t){return Wt(JSON.stringify({version:2,heartbeats:t})).length}function sc(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function ic(t){$t(new _t("platform-logger",e=>new hl(e),"PRIVATE")),$t(new _t("heartbeat",e=>new ec(e),"PRIVATE")),Be($n,hi,t),Be($n,hi,"esm2020"),Be("fire-js","")}/**
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
 */ic("");var rc="firebase",oc="12.19.0";/**
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
 */Be(rc,oc,"app");var gi={};const yi="@firebase/database",vi="1.1.5";/**
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
 */let Cr="";function ac(t){Cr=t}/**
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
 */class lc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),O(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class cc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Z(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ir=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lc(e)}}catch{}return new cc},ve=Ir("localStorage"),uc=Ir("sessionStorage");/**
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
 */const We=new _r("@firebase/database"),dc=function(){let t=1;return function(){return t++}}(),br=function(t){const e=qa(t),n=new Ga;n.update(e);const s=n.digest();return hs.encodeByteArray(s)},Nt=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Nt.apply(null,s):typeof s=="object"?e+=O(s):e+=s,e+=" "}return e};let rt=null,Ei=!0;const hc=function(t,e){p(!0,"Can't turn on custom loggers persistently."),We.logLevel=R.VERBOSE,rt=We.log.bind(We)},D=function(...t){if(Ei===!0&&(Ei=!1,rt===null&&uc.get("logging_enabled")===!0&&hc()),rt){const e=Nt.apply(null,t);rt(e)}},kt=function(t){return function(...e){D(t,...e)}},zn=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nt(...t);We.error(e)},ae=function(...t){const e=`FIREBASE FATAL ERROR: ${Nt(...t)}`;throw We.error(e),new Error(e)},W=function(...t){const e="FIREBASE WARNING: "+Nt(...t);We.warn(e)},fc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&W("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},an=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pc=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ge="[MIN_NAME]",be="[MAX_NAME]",Ae=function(t,e){if(t===e)return 0;if(t===Ge||e===be)return-1;if(e===Ge||t===be)return 1;{const n=Ci(t),s=Ci(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},_c=function(t,e){return t===e?0:t<e?-1:1},tt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+O(e))},ps=function(t){if(typeof t!="object"||t===null)return O(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=O(e[s]),n+=":",n+=ps(t[e[s]]);return n+="}",n},wr=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function L(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sr=function(t){p(!an(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let f=parseInt(h.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},mc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yc(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const vc=new RegExp("^-?(0*)\\d{1,10}$"),Ec=-2147483648,Cc=2147483647,Ci=function(t){if(vc.test(t)){const e=Number(t);if(e>=Ec&&e<=Cc)return e}return null},Je=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw W("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ic=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ot=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bc{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Gl(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){W(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wc{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',W(e)}}class Ft{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ft.OWNER="owner";/**
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
 */const _s="5",Tr="v",Rr="s",Nr="r",kr="f",Pr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ar="ls",xr="p",jn="ac",Dr="websocket",Or="long_polling";/**
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
 */class Lr{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ve.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ve.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sc(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mr(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");let s;if(e===Dr)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Or)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sc(t)&&(n.ns=t.namespace);const i=[];return L(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Tc{constructor(){this.counters_={}}incrementCounter(e,n=1){Z(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sa(this.counters_)}}/**
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
 */const xn={},Dn={};function ms(t){const e=t.toString();return xn[e]||(xn[e]=new Tc),xn[e]}function Rc(t,e){const n=t.toString();return Dn[n]||(Dn[n]=e()),Dn[n]}/**
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
 */class Nc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Je(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ii="start",kc="close",Pc="pLPCommand",Ac="pRTLPCB",Fr="id",Br="pw",Wr="ser",xc="cb",Dc="seg",Oc="ts",Lc="d",Mc="dframe",Hr=1870,Ur=30,Fc=Hr-Ur,Bc=25e3,Wc=3e4;class Me{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kt(e),this.stats_=ms(n),this.urlFn=c=>(this.appCheckToken&&(c[jn]=this.appCheckToken),Mr(n,Or,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Nc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wc)),pc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gs((...r)=>{const[o,a,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ii)this.id=a,this.password=c;else if(o===kc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ii]="t",s[Wr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[xc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tr]=_s,this.transportSessionId&&(s[Rr]=this.transportSessionId),this.lastSessionId&&(s[Ar]=this.lastSessionId),this.applicationId&&(s[xr]=this.applicationId),this.appCheckToken&&(s[jn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Pr.test(location.hostname)&&(s[Nr]=kr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return Me.forceAllow_?!0:!Me.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mc()&&!gc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ar(n),i=wr(s,Fc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Mc]="t",s[Fr]=e,s[Br]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=O(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gs{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dc(),window[Pc+this.uniqueCallbackIdentifier]=e,window[Ac+this.uniqueCallbackIdentifier]=n,this.myIFrame=gs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){D("frame writing exception"),a.stack&&D(a.stack),D(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||D("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fr]=this.myID,e[Br]=this.myPW,e[Wr]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ur+s.length<=Hr;){const o=this.pendingSegs.shift();s=s+"&"+Dc+i+"="+o.seg+"&"+Oc+i+"="+o.ts+"&"+Lc+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Bc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Hc=16384,Uc=45e3;let Gt=null;typeof MozWebSocket<"u"?Gt=MozWebSocket:typeof WebSocket<"u"&&(Gt=WebSocket);class G{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kt(this.connId),this.stats_=ms(n),this.connURL=G.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Tr]=_s,typeof location<"u"&&location.hostname&&Pr.test(location.hostname)&&(o[Nr]=kr),n&&(o[Rr]=n),s&&(o[Ar]=s),i&&(o[jn]=i),r&&(o[xr]=r),Mr(e,Dr,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ve.set("previous_websocket_failure",!0);try{let s;Ma(),this.mySock=new Gt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){G.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gt!==null&&!G.forceDisallow_}static previouslyFailed(){return ve.isInMemoryStorage||ve.get("previous_websocket_failure")===!0}markConnectionHealthy(){ve.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=pt(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=O(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wr(n,Hc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Uc))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}G.responsesRequiredToBeHealthy=2;G.healthyTimeout=3e4;/**
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
 */class gt{static get ALL_TRANSPORTS(){return[Me,G]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=G&&G.isAvailable();let s=n&&!G.previouslyFailed();if(e.webSocketOnly&&(n||W("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[G];else{const i=this.transports_=[];for(const r of gt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gt.globalTransportInitialized_=!1;/**
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
 */const Vc=6e4,$c=5e3,Gc=10*1024,qc=100*1024,On="t",bi="d",zc="s",wi="r",jc="e",Si="o",Ti="a",Ri="n",Ni="p",Yc="h";class Kc{constructor(e,n,s,i,r,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kt("c:"+this.id+":"),this.transportManager_=new gt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ot(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(On in e){const n=e[On];n===Ti?this.upgradeIfSecondaryHealthy_():n===wi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Si&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=tt("t",e),s=tt("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ni,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ti,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ri,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=tt("t",e),s=tt("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=tt(On,e);if(bi in e){const s=e[bi];if(n===Yc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ri){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zc?this.onConnectionShutdown_(s):n===wi?this.onReset_(s):n===jc?zn("Server Error: "+s):n===Si?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_s!==s&&W("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ot(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ot(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($c))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ni,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ve.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vr{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $r{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qt extends $r{static getInstance(){return new qt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ki=32,Pi=768;class I{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function C(){return new I("")}function y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fe(t){return t.pieces_.length-t.pieceNum_}function w(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new I(t.pieces_,e)}function ys(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Qc(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gr(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new I(e,0)}function N(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof I)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new I(n,0)}function v(t){return t.pieceNum_>=t.pieces_.length}function H(t,e){const n=y(t),s=y(e);if(n===null)return e;if(n===s)return H(w(t),w(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Jc(t,e){const n=yt(t,0),s=yt(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Ae(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function vs(t,e){if(fe(t)!==fe(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function $(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fe(t)>fe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Xc{constructor(e,n){this.errorPrefix_=n,this.parts_=yt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=on(this.parts_[s]);qr(this)}}function Zc(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=on(e),qr(t)}function eu(t){const e=t.parts_.pop();t.byteLength_-=on(e),t.parts_.length>0&&(t.byteLength_-=1)}function qr(t){if(t.byteLength_>Pi)throw new Error(t.errorPrefix_+"has a key path longer than "+Pi+" bytes ("+t.byteLength_+").");if(t.parts_.length>ki)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ki+") or object contains a cycle "+ye(t))}function ye(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Es extends $r{static getInstance(){return new Es}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const nt=1e3,tu=60*5*1e3,Ai=30*1e3,nu=1.3,su=3e4,iu="server_kill",xi=3;class ie extends Vr{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ie.nextPersistentConnectionId_++,this.log_=kt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=nt,this.maxReconnectDelay_=tu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Es.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(O(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new J,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;ie.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Z(e,"w")){const s=Ve(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();W(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Va(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ai)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ua(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+O(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zn("Unrecognized action received from server: "+O(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>su&&(this.reconnectDelay_=nt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Kc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{W(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(iu)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&W(d),c())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hn(this.interruptReasons_)&&(this.reconnectDelay_=nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ps(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new I(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){D("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xi&&(this.reconnectDelay_=Ai,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){D("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cr.replace(/\./g,"-")]=1,dr()?e["framework.cordova"]=1:La()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qt.getInstance().currentlyOnline();return Hn(this.interruptReasons_)&&e}}ie.nextPersistentConnectionId_=0;ie.nextConnectionId_=0;/**
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
 */class ln{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new E(Ge,e),i=new E(Ge,n);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
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
 */let Lt;class zr extends ln{static get __EMPTY_NODE(){return Lt}static set __EMPTY_NODE(e){Lt=e}compare(e,n){return Ae(e.name,n.name)}isDefinedOn(e){throw Qe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return E.MIN}maxPost(){return new E(be,Lt)}makePost(e,n){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,Lt)}toString(){return".key"}}const He=new zr;/**
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
 */class Mt{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class x{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??x.RED,this.left=i??U.EMPTY_NODE,this.right=r??U.EMPTY_NODE}copy(e,n,s,i,r){return new x(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return U.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return U.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}x.RED=!0;x.BLACK=!1;class ru{copy(e,n,s,i,r){return this}insert(e,n,s){return new x(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class U{constructor(e,n=U.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new U(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,x.BLACK,null,null))}remove(e){return new U(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,x.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mt(this.root_,null,this.comparator_,!0,e)}}U.EMPTY_NODE=new ru;/**
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
 */function ou(t,e){return Ae(t.name,e.name)}function Cs(t,e){return Ae(t,e)}/**
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
 */let Yn;function au(t){Yn=t}const jr=function(t){return typeof t=="number"?"number:"+Sr(t):"string:"+t},Yr=function(t){if(t.isLeafNode()){const e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Z(e,".sv"),"Priority must be a string or number.")}else p(t===Yn||t.isEmpty(),"priority of unexpected type.");p(t===Yn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Di;class A{static set __childrenNodeConstructor(e){Di=e}static get __childrenNodeConstructor(){return Di}constructor(e,n=A.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new A(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:y(e)===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:A.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||fe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,A.__childrenNodeConstructor.EMPTY_NODE.updateChild(w(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jr(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sr(this.value_):e+=this.value_,this.lazyHash_=br(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===A.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof A.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=A.VALUE_TYPE_ORDER.indexOf(n),r=A.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+n),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}A.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Kr,Qr;function lu(t){Kr=t}function cu(t){Qr=t}class uu extends ln{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ae(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return E.MIN}maxPost(){return new E(be,new A("[PRIORITY-POST]",Qr))}makePost(e,n){const s=Kr(e);return new E(n,new A("[PRIORITY-POST]",s))}toString(){return".priority"}}const k=new uu;/**
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
 */const du=Math.log(2);class hu{constructor(e){const n=r=>parseInt(Math.log(r)/du,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zt=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let d,f;if(h===0)return null;if(h===1)return d=t[c],f=n?n(d):d,new x(f,d.node,x.BLACK,null,null);{const _=parseInt(h/2,10)+c,m=i(c,_),b=i(_+1,u);return d=t[_],f=n?n(d):d,new x(f,d.node,x.BLACK,m,b)}},r=function(c){let u=null,h=null,d=t.length;const f=function(m,b){const B=d-m,Oe=d;d-=m;const Ot=i(B+1,Oe),Tn=t[B],ia=n?n(Tn):Tn;_(new x(ia,Tn.node,b,null,Ot))},_=function(m){u?(u.left=m,u=m):(h=m,u=m)};for(let m=0;m<c.count;++m){const b=c.nextBitIsOne(),B=Math.pow(2,c.count-(m+1));b?f(B,x.BLACK):(f(B,x.BLACK),f(B,x.RED))}return h},o=new hu(t.length),a=r(o);return new U(s||e,a)};/**
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
 */let Ln;const Le={};class ne{static get Default(){return p(Le&&k,"ChildrenNode.ts has not been loaded"),Ln=Ln||new ne({".priority":Le},{".priority":k}),Ln}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ve(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof U?n:null}hasIndex(e){return Z(this.indexSet_,e.toString())}addIndex(e,n){p(e!==He,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zt(s,e.getCompare()):a=Le;const c=e.toString(),u={...this.indexSet_};u[c]=e;const h={...this.indexes_};return h[c]=a,new ne(h,u)}addToIndexes(e,n){const s=Ht(this.indexes_,(i,r)=>{const o=Ve(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===Le)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(E.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),zt(a,o.getCompare())}else return Le;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new E(e.name,a))),c.insert(e,e.node)}});return new ne(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ht(this.indexes_,i=>{if(i===Le)return i;{const r=n.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new ne(s,this.indexSet_)}}/**
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
 */let st;class g{static get EMPTY_NODE(){return st||(st=new g(new U(Cs),null,ne.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Yr(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?st:n}}getChild(e){const n=y(e);return n===null?this:this.getImmediateChild(n).getChild(w(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new E(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?st:this.priorityNode_;return new g(i,o,r)}}updateChild(e,n){const s=y(e);if(s===null)return n;{p(y(e)!==".priority"||fe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(w(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(k,(o,a)=>{n[o]=a.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jr(this.getPriority().val())+":"),this.forEachChild(k,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":br(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new E(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new E(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pt?-1:0}withIndex(e){if(e===He||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===He||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(k),i=n.getIterator(k);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===He?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fu extends g{constructor(){super(new U(Cs),g.EMPTY_NODE,ne.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const Pt=new fu;Object.defineProperties(E,{MIN:{value:new E(Ge,g.EMPTY_NODE)},MAX:{value:new E(be,Pt)}});zr.__EMPTY_NODE=g.EMPTY_NODE;A.__childrenNodeConstructor=g;au(Pt);cu(Pt);/**
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
 */const pu=!0;function P(t,e=null){if(t===null)return g.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new A(n,P(e))}if(!(t instanceof Array)&&pu){const n=[];let s=!1;if(L(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=P(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new E(o,c)))}}),n.length===0)return g.EMPTY_NODE;const r=zt(n,ou,o=>o.name,Cs);if(s){const o=zt(n,k.getCompare());return new g(r,P(e),new ne({".priority":o},{".priority":k}))}else return new g(r,P(e),ne.Default)}else{let n=g.EMPTY_NODE;return L(t,(s,i)=>{if(Z(t,s)&&s.substring(0,1)!=="."){const r=P(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(P(e))}}lu(P);/**
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
 */class _u extends ln{constructor(e){super(),this.indexPath_=e,p(!v(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ae(e.name,n.name):r}makePost(e,n){const s=P(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(n,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,Pt);return new E(be,e)}toString(){return yt(this.indexPath_,0).join("/")}}/**
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
 */class mu extends ln{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ae(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,n){const s=P(e);return new E(n,s)}toString(){return".value"}}const gu=new mu;/**
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
 */function Jr(t){return{type:"value",snapshotNode:t}}function qe(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Et(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yu(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Is{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(vt(n,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qe(n,s)):o.trackChildChange(Et(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(k,(i,r)=>{n.hasChild(i)||s.trackChildChange(vt(i,r))}),n.isLeafNode()||n.forEachChild(k,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Et(i,r,o))}else s.trackChildChange(qe(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ct{constructor(e){this.indexedFilter_=new Is(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ct.getStartPost_(e),this.endPost_=Ct.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new E(n,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=g.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return n.forEachChild(k,(o,a)=>{r.matches(new E(o,a))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vu{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ct(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new E(n,s))||(s=g.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const c=new E(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(h&&!s.isEmpty()&&_>=0)return r?.trackChildChange(Et(n,s,d)),a.updateImmediateChild(n,s);{r?.trackChildChange(vt(n,d));const b=a.updateImmediateChild(n,g.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r?.trackChildChange(qe(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:h&&o(u,c)>=0?(r!=null&&(r.trackChildChange(vt(u.name,u.node)),r.trackChildChange(qe(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,g.EMPTY_NODE)):e}}/**
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
 */class bs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=k}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ge}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===k}copy(){const e=new bs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Eu(t){return t.loadsAllData()?new Is(t.getIndex()):t.hasLimit()?new vu(t):new Ct(t)}function Oi(t){const e={};if(t.isDefault())return e;let n;if(t.index_===k?n="$priority":t.index_===gu?n="$value":t.index_===He?n="$key":(p(t.index_ instanceof _u,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=O(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=O(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+O(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=O(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+O(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Li(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==k&&(e.i=t.index_.toString()),e}/**
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
 */class jt extends Vr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=kt("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jt.getListenId_(e,s),a={};this.listens_[o]=a;const c=Oi(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),Ve(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const s=jt.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Oi(e._queryParams),s=e._path.toString(),i=new J;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$a(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=pt(a.responseText)}catch{W("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&W("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Cu{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Yt(){return{value:null,children:new Map}}function Xe(t,e,n){if(v(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=y(e);t.children.has(s)||t.children.set(s,Yt());const i=t.children.get(s);e=w(e),Xe(i,e,n)}}function Kn(t,e){if(v(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(k,(s,i)=>{Xe(t,new I(s),i)}),Kn(t,e)}}else if(t.children.size>0){const n=y(e);return e=w(e),t.children.has(n)&&Kn(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Qn(t,e,n){t.value!==null?n(e,t.value):Iu(t,(s,i)=>{const r=new I(e.toString()+"/"+s);Qn(i,r,n)})}function Iu(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class bu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&L(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Mi=10*1e3,wu=30*1e3,Su=5*60*1e3;class Tu{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bu(e);const s=Mi+(wu-Mi)*Math.random();ot(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;L(e,(i,r)=>{r>0&&Z(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ot(this.reportStats_.bind(this),Math.floor(Math.random()*2*Su))}}/**
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
 */var q;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(q||(q={}));function ws(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ss(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ts(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Kt{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=q.ACK_USER_WRITE,this.source=ws()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new I(e));return new Kt(C(),n,this.revert)}}else return p(y(this.path)===e,"operationForChild called for unrelated child."),new Kt(w(this.path),this.affectedTree,this.revert)}}/**
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
 */class It{constructor(e,n){this.source=e,this.path=n,this.type=q.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new It(this.source,C()):new It(this.source,w(this.path))}}/**
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
 */class we{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=q.OVERWRITE}operationForChild(e){return v(this.path)?new we(this.source,C(),this.snap.getImmediateChild(e)):new we(this.source,w(this.path),this.snap)}}/**
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
 */class ze{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=q.MERGE}operationForChild(e){if(v(this.path)){const n=this.children.subtree(new I(e));return n.isEmpty()?null:n.value?new we(this.source,C(),n.value):new ze(this.source,C(),n)}else return p(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ze(this.source,w(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Se{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const n=y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ru{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nu(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(yu(o.childName,o.snapshotNode))}),it(t,i,"child_removed",e,s,n),it(t,i,"child_added",e,s,n),it(t,i,"child_moved",r,s,n),it(t,i,"child_changed",e,s,n),it(t,i,"value",e,s,n),i}function it(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>Pu(t,a,c)),o.forEach(a=>{const c=ku(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function ku(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Pu(t,e,n){if(e.childName==null||n.childName==null)throw Qe("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function cn(t,e){return{eventCache:t,serverCache:e}}function at(t,e,n,s){return cn(new Se(e,n,s),t.serverCache)}function Xr(t,e,n,s){return cn(t.eventCache,new Se(e,n,s))}function Jn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Te(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mn;const Au=()=>(Mn||(Mn=new U(_c)),Mn);class T{static fromObject(e){let n=new T(null);return L(e,(s,i)=>{n=n.set(new I(s),i)}),n}constructor(e,n=Au()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:C(),value:this.value};if(v(e))return null;{const s=y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(w(e),n);return r!=null?{path:N(new I(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const n=y(e),s=this.children.get(n);return s!==null?s.subtree(w(e)):new T(null)}}set(e,n){if(v(e))return new T(n,this.children);{const s=y(e),r=(this.children.get(s)||new T(null)).set(w(e),n),o=this.children.insert(s,r);return new T(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new T(null):new T(null,this.children);{const n=y(e),s=this.children.get(n);if(s){const i=s.remove(w(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new T(null):new T(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const n=y(e),s=this.children.get(n);return s?s.get(w(e)):null}}setTree(e,n){if(v(e))return n;{const s=y(e),r=(this.children.get(s)||new T(null)).setTree(w(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new T(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(N(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,C(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(v(e))return null;{const r=y(e),o=this.children.get(r);return o?o.findOnPath_(w(e),N(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,C(),n)}foreachOnPath_(e,n,s){if(v(e))return this;{this.value&&s(n,this.value);const i=y(e),r=this.children.get(i);return r?r.foreachOnPath_(w(e),N(n,i),s):new T(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(N(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class j{constructor(e){this.writeTree_=e}static empty(){return new j(new T(null))}}function lt(t,e,n){if(v(e))return new j(new T(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=H(i,e);return r=r.updateChild(o,n),new j(t.writeTree_.set(i,r))}else{const i=new T(n),r=t.writeTree_.setTree(e,i);return new j(r)}}}function Xn(t,e,n){let s=t;return L(n,(i,r)=>{s=lt(s,N(e,i),r)}),s}function Fi(t,e){if(v(e))return j.empty();{const n=t.writeTree_.setTree(e,new T(null));return new j(n)}}function Zn(t,e){return xe(t,e)!=null}function xe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(H(n.path,e)):null}function Bi(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(k,(s,i)=>{e.push(new E(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function he(t,e){if(v(e))return t;{const n=xe(t,e);return n!=null?new j(new T(n)):new j(t.writeTree_.subtree(e))}}function es(t){return t.writeTree_.isEmpty()}function je(t,e){return Zr(C(),t.writeTree_,e)}function Zr(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Zr(N(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(N(t,".priority"),s)),n}}/**
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
 */function Rs(t,e){return so(e,t)}function xu(t,e,n,s,i){p(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=lt(t.visibleWrites,e,n)),t.lastWriteId=s}function Du(t,e,n,s){p(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Xn(t.visibleWrites,e,n),t.lastWriteId=s}function Ou(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Lu(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);p(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Mu(a,s.path)?i=!1:$(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Fu(t),!0;if(s.snap)t.visibleWrites=Fi(t.visibleWrites,s.path);else{const a=s.children;L(a,c=>{t.visibleWrites=Fi(t.visibleWrites,N(s.path,c))})}return!0}else return!1}function Mu(t,e){if(t.snap)return $(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$(N(t.path,n),e))return!0;return!1}function Fu(t){t.visibleWrites=eo(t.allWrites,Bu,C()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bu(t){return t.visible}function eo(t,e,n){let s=j.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)$(n,o)?(a=H(n,o),s=lt(s,a,r.snap)):$(o,n)&&(a=H(o,n),s=lt(s,C(),r.snap.getChild(a)));else if(r.children){if($(n,o))a=H(n,o),s=Xn(s,a,r.children);else if($(o,n))if(a=H(o,n),v(a))s=Xn(s,C(),r.children);else{const c=Ve(r.children,y(a));if(c){const u=c.getChild(w(a));s=lt(s,C(),u)}}}else throw Qe("WriteRecord should have .snap or .children")}}return s}function to(t,e,n,s,i){if(!s&&!i){const r=xe(t.visibleWrites,e);if(r!=null)return r;{const o=he(t.visibleWrites,e);if(es(o))return n;if(n==null&&!Zn(o,C()))return null;{const a=n||g.EMPTY_NODE;return je(o,a)}}}else{const r=he(t.visibleWrites,e);if(!i&&es(r))return n;if(!i&&n==null&&!Zn(r,C()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&($(u.path,e)||$(e,u.path))},a=eo(t.allWrites,o,e),c=n||g.EMPTY_NODE;return je(a,c)}}}function Wu(t,e,n){let s=g.EMPTY_NODE;const i=xe(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(k,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=he(t.visibleWrites,e);return n.forEachChild(k,(o,a)=>{const c=je(he(r,new I(o)),a);s=s.updateImmediateChild(o,c)}),Bi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=he(t.visibleWrites,e);return Bi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Hu(t,e,n,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=N(e,n);if(Zn(t.visibleWrites,r))return null;{const o=he(t.visibleWrites,r);return es(o)?i.getChild(n):je(o,i.getChild(n))}}function Uu(t,e,n,s){const i=N(e,n),r=xe(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=he(t.visibleWrites,i);return je(o,s.getNode().getImmediateChild(n))}else return null}function Vu(t,e){return xe(t.visibleWrites,e)}function $u(t,e,n,s,i,r,o){let a;const c=he(t.visibleWrites,e),u=xe(c,C());if(u!=null)a=u;else if(n!=null)a=je(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&h.length<i;)d(_,s)!==0&&h.push(_),_=f.getNext();return h}else return[]}function Gu(){return{visibleWrites:j.empty(),allWrites:[],lastWriteId:-1}}function Qt(t,e,n,s){return to(t.writeTree,t.treePath,e,n,s)}function Ns(t,e){return Wu(t.writeTree,t.treePath,e)}function Wi(t,e,n,s){return Hu(t.writeTree,t.treePath,e,n,s)}function Jt(t,e){return Vu(t.writeTree,N(t.treePath,e))}function qu(t,e,n,s,i,r){return $u(t.writeTree,t.treePath,e,n,s,i,r)}function ks(t,e,n){return Uu(t.writeTree,t.treePath,e,n)}function no(t,e){return so(N(t.treePath,e),t.writeTree)}function so(t,e){return{treePath:t,writeTree:e}}/**
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
 */class zu{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Et(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vt(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,qe(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Et(s,e.snapshotNode,i.oldSnap));else throw Qe("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ju{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const io=new ju;class Ps{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ks(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Te(this.viewCache_),r=qu(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Yu(t){return{filter:t}}function Ku(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qu(t,e,n,s,i){const r=new zu;let o,a;if(n.type===q.OVERWRITE){const u=n;u.source.fromUser?o=ts(t,e,u.path,u.snap,s,i,r):(p(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!v(u.path),o=Xt(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===q.MERGE){const u=n;u.source.fromUser?o=Xu(t,e,u.path,u.children,s,i,r):(p(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ns(t,e,u.path,u.children,s,i,a,r))}else if(n.type===q.ACK_USER_WRITE){const u=n;u.revert?o=td(t,e,u.path,s,i,r):o=Zu(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===q.LISTEN_COMPLETE)o=ed(t,e,n.path,s,r);else throw Qe("Unknown operation type: "+n.type);const c=r.getChanges();return Ju(e,o,c),{viewCache:o,changes:c}}function Ju(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Jn(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Jr(Jn(e)))}}function ro(t,e,n,s,i,r){const o=e.eventCache;if(Jt(s,n)!=null)return e;{let a,c;if(v(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Te(e),h=u instanceof g?u:g.EMPTY_NODE,d=Ns(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=Qt(s,Te(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=y(n);if(u===".priority"){p(fe(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=Wi(s,n,h,c);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=w(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const f=Wi(s,n,o.getNode(),c);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=ks(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,i,r):a=o.getNode()}}return at(e,a,o.isFullyInitialized()||v(n),t.filter.filtersNodes())}}function Xt(t,e,n,s,i,r,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(v(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),_,null)}else{const _=y(n);if(!c.isCompleteForPath(n)&&fe(n)>1)return e;const m=w(n),B=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?u=h.updatePriority(c.getNode(),B):u=h.updateChild(c.getNode(),_,B,m,io,null)}const d=Xr(e,u,c.isFullyInitialized()||v(n),h.filtersNodes()),f=new Ps(i,d,r);return ro(t,d,n,i,f,a)}function ts(t,e,n,s,i,r,o){const a=e.eventCache;let c,u;const h=new Ps(i,e,r);if(v(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=at(e,u,!0,t.filter.filtersNodes());else{const d=y(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=at(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=w(n),_=a.getNode().getImmediateChild(d);let m;if(v(f))m=s;else{const b=h.getCompleteChild(d);b!=null?ys(f)===".priority"&&b.getChild(Gr(f)).isEmpty()?m=b:m=b.updateChild(f,s):m=g.EMPTY_NODE}if(_.equals(m))c=e;else{const b=t.filter.updateChild(a.getNode(),d,m,f,h,o);c=at(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Hi(t,e){return t.eventCache.isCompleteForChild(e)}function Xu(t,e,n,s,i,r,o){let a=e;return s.foreach((c,u)=>{const h=N(n,c);Hi(e,y(h))&&(a=ts(t,a,h,u,i,r,o))}),s.foreach((c,u)=>{const h=N(n,c);Hi(e,y(h))||(a=ts(t,a,h,u,i,r,o))}),a}function Ui(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ns(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;v(n)?u=s:u=new T(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),m=Ui(t,_,f);c=Xt(t,c,new I(d),m,i,r,o,a)}}),u.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!_){const m=e.serverCache.getNode().getImmediateChild(d),b=Ui(t,m,f);c=Xt(t,c,new I(d),b,i,r,o,a)}}),c}function Zu(t,e,n,s,i,r,o){if(Jt(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(v(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Xt(t,e,n,c.getNode().getChild(n),i,r,a,o);if(v(n)){let u=new T(null);return c.getNode().forEachChild(He,(h,d)=>{u=u.set(new I(h),d)}),ns(t,e,n,u,i,r,a,o)}else return e}else{let u=new T(null);return s.foreach((h,d)=>{const f=N(n,h);c.isCompleteForPath(f)&&(u=u.set(h,c.getNode().getChild(f)))}),ns(t,e,n,u,i,r,a,o)}}function ed(t,e,n,s,i){const r=e.serverCache,o=Xr(e,r.getNode(),r.isFullyInitialized()||v(n),r.isFiltered());return ro(t,o,n,s,io,i)}function td(t,e,n,s,i,r){let o;if(Jt(s,n)!=null)return e;{const a=new Ps(s,e,i),c=e.eventCache.getNode();let u;if(v(n)||y(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Qt(s,Te(e));else{const d=e.serverCache.getNode();p(d instanceof g,"serverChildren would be complete if leaf node"),h=Ns(s,d)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=y(n);let d=ks(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,w(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,g.EMPTY_NODE,w(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qt(s,Te(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Jt(s,C())!=null,at(e,u,o,t.filter.filtersNodes())}}/**
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
 */class nd{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Is(s.getIndex()),r=Eu(s);this.processor_=Yu(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),h=new Se(c,o.isFullyInitialized(),i.filtersNodes()),d=new Se(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=cn(d,h),this.eventGenerator_=new Ru(this.query_)}get query(){return this.query_}}function sd(t){return t.viewCache_.serverCache.getNode()}function id(t,e){const n=Te(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!v(e)&&!n.getImmediateChild(y(e)).isEmpty())?n.getChild(e):null}function Vi(t){return t.eventRegistrations_.length===0}function rd(t,e){t.eventRegistrations_.push(e)}function $i(t,e,n){const s=[];if(n){p(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Gi(t,e,n,s){e.type===q.MERGE&&e.source.queryId!==null&&(p(Te(t.viewCache_),"We should always have a full cache before handling merges"),p(Jn(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Qu(t.processor_,i,e,n,s);return Ku(t.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,oo(t,r.changes,r.viewCache.eventCache.getNode(),null)}function od(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(k,(r,o)=>{s.push(qe(r,o))}),n.isFullyInitialized()&&s.push(Jr(n.getNode())),oo(t,s,n.getNode(),e)}function oo(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Nu(t.eventGenerator_,e,n,i)}/**
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
 */let Zt;class ad{constructor(){this.views=new Map}}function ld(t){p(!Zt,"__referenceConstructor has already been defined"),Zt=t}function cd(){return p(Zt,"Reference.ts has not been loaded"),Zt}function ud(t){return t.views.size===0}function As(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Gi(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Gi(o,e,n,s));return r}}function dd(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Qt(n,i?s:null),c=!1;a?c=!0:s instanceof g?(a=Ns(n,s),c=!1):(a=g.EMPTY_NODE,c=!1);const u=cn(new Se(a,c,!1),new Se(s,i,!1));return new nd(e,u)}return o}function hd(t,e,n,s,i,r){const o=dd(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rd(o,n),od(o,n)}function fd(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=pe(t);if(i==="default")for(const[c,u]of t.views.entries())o=o.concat($i(u,n,s)),Vi(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=t.views.get(i);c&&(o=o.concat($i(c,n,s)),Vi(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!pe(t)&&r.push(new(cd())(e._repo,e._path)),{removed:r,events:o}}function ao(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ue(t,e){let n=null;for(const s of t.views.values())n=n||id(s,e);return n}function lo(t,e){if(e._queryParams.loadsAllData())return un(t);{const s=e._queryIdentifier;return t.views.get(s)}}function co(t,e){return lo(t,e)!=null}function pe(t){return un(t)!=null}function un(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let en;function pd(t){p(!en,"__referenceConstructor has already been defined"),en=t}function _d(){return p(en,"Reference.ts has not been loaded"),en}let md=1;class qi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new T(null),this.pendingWriteTree_=Gu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uo(t,e,n,s,i){return xu(t.pendingWriteTree_,e,n,s,i),i?Ze(t,new we(ws(),e,n)):[]}function gd(t,e,n,s){Du(t.pendingWriteTree_,e,n,s);const i=T.fromObject(n);return Ze(t,new ze(ws(),e,i))}function ue(t,e,n=!1){const s=Ou(t.pendingWriteTree_,e);if(Lu(t.pendingWriteTree_,e)){let r=new T(null);return s.snap!=null?r=r.set(C(),!0):L(s.children,o=>{r=r.set(new I(o),!0)}),Ze(t,new Kt(s.path,r,n))}else return[]}function dn(t,e,n){return Ze(t,new we(Ss(),e,n))}function yd(t,e,n){const s=T.fromObject(n);return Ze(t,new ze(Ss(),e,s))}function vd(t,e){return Ze(t,new It(Ss(),e))}function Ed(t,e,n){const s=Ds(t,n);if(s){const i=Os(s),r=i.path,o=i.queryId,a=H(r,e),c=new It(Ts(o),a);return Ls(t,r,c)}else return[]}function ss(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||co(o,e))){const c=fd(o,e,n,s);ud(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=c.removed;if(a=c.events,!i){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,_)=>pe(_));if(h&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=bd(f);for(let m=0;m<_.length;++m){const b=_[m],B=b.query,Oe=po(t,b);t.listenProvider_.startListening(ct(B),tn(t,B),Oe.hashFn,Oe.onComplete)}}}!d&&u.length>0&&!s&&(h?t.listenProvider_.stopListening(ct(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(hn(f));t.listenProvider_.stopListening(ct(f),_)}))}wd(t,u)}return a}function Cd(t,e,n,s){const i=Ds(t,s);if(i!=null){const r=Os(i),o=r.path,a=r.queryId,c=H(o,e),u=new we(Ts(a),c,n);return Ls(t,o,u)}else return[]}function Id(t,e,n,s){const i=Ds(t,s);if(i){const r=Os(i),o=r.path,a=r.queryId,c=H(o,e),u=T.fromObject(n),h=new ze(Ts(a),c,u);return Ls(t,o,h)}else return[]}function zi(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=H(f,i);r=r||Ue(_,m),o=o||pe(_)});let a=t.syncPointTree_.get(i);a?(o=o||pe(a),r=r||Ue(a,C())):(a=new ad,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=g.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const b=Ue(m,C());b&&(r=r.updateImmediateChild(_,b))}));const u=co(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=hn(e);p(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Sd();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const h=Rs(t.pendingWriteTree_,i);let d=hd(a,e,n,h,r,c);if(!u&&!o&&!s){const f=lo(a,e);d=d.concat(Td(t,e,f))}return d}function xs(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=H(o,e),u=Ue(a,c);if(u)return u});return to(i,e,r,n,!0)}function Ze(t,e){return ho(e,t.syncPointTree_,null,Rs(t.pendingWriteTree_,C()))}function ho(t,e,n,s){if(v(t.path))return fo(t,e,n,s);{const i=e.get(C());n==null&&i!=null&&(n=Ue(i,C()));let r=[];const o=y(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=no(s,o);r=r.concat(ho(a,c,u,h))}return i&&(r=r.concat(As(i,t,s,n))),r}}function fo(t,e,n,s){const i=e.get(C());n==null&&i!=null&&(n=Ue(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=no(s,o),h=t.operationForChild(o);h&&(r=r.concat(fo(h,a,c,u)))}),i&&(r=r.concat(As(i,t,s,n))),r}function po(t,e){const n=e.query,s=tn(t,n);return{hashFn:()=>(sd(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ed(t,n._path,s):vd(t,n._path);{const r=yc(i,n);return ss(t,n,null,r)}}}}function tn(t,e){const n=hn(e);return t.queryToTagMap.get(n)}function hn(t){return t._path.toString()+"$"+t._queryIdentifier}function Ds(t,e){return t.tagToQueryMap.get(e)}function Os(t){const e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new I(t.substr(0,e))}}function Ls(t,e,n){const s=t.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=Rs(t.pendingWriteTree_,e);return As(s,n,i,null)}function bd(t){return t.fold((e,n,s)=>{if(n&&pe(n))return[un(n)];{let i=[];return n&&(i=ao(n)),L(s,(r,o)=>{i=i.concat(o)}),i}})}function ct(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_d())(t._repo,t._path):t}function wd(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=hn(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Sd(){return md++}function Td(t,e,n){const s=e._path,i=tn(t,e),r=po(t,n),o=t.listenProvider_.startListening(ct(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)p(!pe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,d)=>{if(!v(u)&&h&&pe(h))return[un(h).query];{let f=[];return h&&(f=f.concat(ao(h).map(_=>_.query))),L(d,(_,m)=>{f=f.concat(m)}),f}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(ct(h),tn(t,h))}}return o}/**
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
 */class Ms{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ms(n)}node(){return this.node_}}class Fs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=N(this.path_,e);return new Fs(this.syncTree_,n)}node(){return xs(this.syncTree_,this.path_)}}const Rd=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ji=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nd(t[".sv"],e,n);if(typeof t[".sv"]=="object")return kd(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nd=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},kd=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_o=function(t,e,n,s){return Bs(e,new Fs(n,t),s)},mo=function(t,e,n){return Bs(t,new Ms(e),n)};function Bs(t,e,n){const s=t.getPriority().val(),i=ji(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ji(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new A(a,P(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new A(i))),o.forEachChild(k,(a,c)=>{const u=Bs(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
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
 */class Ws{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Hs(t,e){let n=e instanceof I?e:new I(e),s=t,i=y(n);for(;i!==null;){const r=Ve(s.node.children,i)||{children:{},childCount:0};s=new Ws(i,s,r),n=w(n),i=y(n)}return s}function et(t){return t.node.value}function go(t,e){t.node.value=e,is(t)}function yo(t){return t.node.childCount>0}function Pd(t){return et(t)===void 0&&!yo(t)}function fn(t,e){L(t.node.children,(n,s)=>{e(new Ws(n,t,s))})}function vo(t,e,n,s){n&&e(t),fn(t,i=>{vo(i,e,!0)})}function Ad(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function At(t){return new I(t.parent===null?t.name:At(t.parent)+"/"+t.name)}function is(t){t.parent!==null&&xd(t.parent,t.name,t)}function xd(t,e,n){const s=Pd(n),i=Z(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,is(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,is(t))}/**
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
 */const Dd=/[\[\].#$\/\u0000-\u001F\u007F]/,Od=/[\[\].#$\u0000-\u001F\u007F]/,Fn=10*1024*1024,Us=function(t){return typeof t=="string"&&t.length!==0&&!Dd.test(t)},Eo=function(t){return typeof t=="string"&&t.length!==0&&!Od.test(t)},Ld=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Eo(t)},Co=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!an(t)||t&&typeof t=="object"&&Z(t,".sv")},nn=function(t,e,n,s){s&&e===void 0||pn($e(t,"value"),e,n)},pn=function(t,e,n){const s=n instanceof I?new Xc(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ye(s));if(typeof e=="function")throw new Error(t+"contains a function "+ye(s)+" with contents = "+e.toString());if(an(e))throw new Error(t+"contains "+e.toString()+" "+ye(s));if(typeof e=="string"&&e.length>Fn/3&&on(e)>Fn)throw new Error(t+"contains a string greater than "+Fn+" utf8 bytes "+ye(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(L(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Us(o)))throw new Error(t+" contains an invalid key ("+o+") "+ye(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zc(s,o),pn(t,a,s),eu(s)}),i&&r)throw new Error(t+' contains ".value" child '+ye(s)+" in addition to actual children.")}},Md=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=yt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Us(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Jc);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&$(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Io=function(t,e,n,s){const i=$e(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];L(e,(o,a)=>{const c=new I(o);if(pn(i,a,N(n,c)),ys(c)===".priority"&&!Co(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Md(i,r)},Fd=function(t,e,n){if(an(e))throw new Error($e(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Co(e))throw new Error($e(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},bo=function(t,e,n,s){if(!Eo(n))throw new Error($e(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bd=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bo(t,e,n)},Ee=function(t,e){if(y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Wd=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Us(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ld(n))throw new Error($e(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Hd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _n(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!vs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function wo(t,e,n){_n(t,n),So(t,s=>vs(s,e))}function Y(t,e,n){_n(t,n),So(t,s=>$(s,e)||$(e,s))}function So(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Ud(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ud(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rt&&D("event: "+n.toString()),Je(s)}}}/**
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
 */const Vd="repo_interrupt",$d=25;class Gd{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yt(),this.transactionQueueTree_=new Ws,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qd(t,e,n){if(t.stats_=ms(t.repoInfo_),t.forceRestClient_||Ic())t.server_=new jt(t.repoInfo_,(s,i,r,o)=>{Yi(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ki(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{O(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ie(t.repoInfo_,e,(s,i,r,o)=>{Yi(t,s,i,r,o)},s=>{Ki(t,s)},s=>{zd(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Rc(t.repoInfo_,()=>new Tu(t.stats_,t.server_)),t.infoData_=new Cu,t.infoSyncTree_=new qi({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=dn(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vs(t,"connected",!1),t.serverSyncTree_=new qi({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);Y(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function To(t){const n=t.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mn(t){return Rd({timestamp:To(t)})}function Yi(t,e,n,s,i){t.dataUpdateCount++;const r=new I(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ht(n,u=>P(u));o=Id(t.serverSyncTree_,r,c,i)}else{const c=P(n);o=Cd(t.serverSyncTree_,r,c,i)}else if(s){const c=Ht(n,u=>P(u));o=yd(t.serverSyncTree_,r,c)}else{const c=P(n);o=dn(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Ye(t,r)),Y(t.eventQueue_,a,o)}function Ki(t,e){Vs(t,"connected",e),e===!1&&Kd(t)}function zd(t,e){L(e,(n,s)=>{Vs(t,n,s)})}function Vs(t,e,n){const s=new I("/.info/"+e),i=P(n);t.infoData_.updateSnapshot(s,i);const r=dn(t.infoSyncTree_,s,i);Y(t.eventQueue_,s,r)}function $s(t){return t.nextWriteId_++}function jd(t,e,n,s,i){gn(t,"set",{path:e.toString(),value:n,priority:s});const r=mn(t),o=P(n,s),a=xs(t.serverSyncTree_,e),c=mo(o,a,r),u=$s(t),h=uo(t.serverSyncTree_,e,c,u,!0);_n(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||W("set at "+e+" failed: "+f);const b=ue(t.serverSyncTree_,u,!m);Y(t.eventQueue_,e,b),_e(t,i,f,_)});const d=qs(t,e);Ye(t,d),Y(t.eventQueue_,d,[])}function Yd(t,e,n,s){gn(t,"update",{path:e.toString(),value:n});let i=!0;const r=mn(t),o={};if(L(n,(a,c)=>{i=!1,o[a]=_o(N(e,a),P(c),t.serverSyncTree_,r)}),i)D("update() called with empty data.  Don't do anything."),_e(t,s,"ok",void 0);else{const a=$s(t),c=gd(t.serverSyncTree_,e,o,a);_n(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||W("update at "+e+" failed: "+u);const f=ue(t.serverSyncTree_,a,!d),_=f.length>0?Ye(t,e):e;Y(t.eventQueue_,_,f),_e(t,s,u,h)}),L(n,u=>{const h=qs(t,N(e,u));Ye(t,h)}),Y(t.eventQueue_,e,[])}}function Kd(t){gn(t,"onDisconnectEvents");const e=mn(t),n=Yt();Qn(t.onDisconnect_,C(),(i,r)=>{const o=_o(i,r,t.serverSyncTree_,e);Xe(n,i,o)});let s=[];Qn(n,C(),(i,r)=>{s=s.concat(dn(t.serverSyncTree_,i,r));const o=qs(t,i);Ye(t,o)}),t.onDisconnect_=Yt(),Y(t.eventQueue_,C(),s)}function Qd(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Kn(t.onDisconnect_,e),_e(t,n,s,i)})}function Qi(t,e,n,s){const i=P(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Xe(t.onDisconnect_,e,i),_e(t,s,r,o)})}function Jd(t,e,n,s,i){const r=P(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Xe(t.onDisconnect_,e,r),_e(t,i,o,a)})}function Xd(t,e,n,s){if(Hn(n)){D("onDisconnect().update() called with empty data.  Don't do anything."),_e(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&L(n,(o,a)=>{const c=P(a);Xe(t.onDisconnect_,N(e,o),c)}),_e(t,s,i,r)})}function Zd(t,e,n){let s;y(e._path)===".info"?s=zi(t.infoSyncTree_,e,n):s=zi(t.serverSyncTree_,e,n),wo(t.eventQueue_,e._path,s)}function Ji(t,e,n){let s;y(e._path)===".info"?s=ss(t.infoSyncTree_,e,n):s=ss(t.serverSyncTree_,e,n),wo(t.eventQueue_,e._path,s)}function eh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vd)}function gn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),D(n,...e)}function _e(t,e,n,s){e&&Je(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ro(t,e,n){return xs(t.serverSyncTree_,e,n)||g.EMPTY_NODE}function Gs(t,e=t.transactionQueueTree_){if(e||yn(t,e),et(e)){const n=ko(t,e);p(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&th(t,At(e),n)}else yo(e)&&fn(e,n=>{Gs(t,n)})}function th(t,e,n){const s=n.map(u=>u.currentWriteId),i=Ro(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=H(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{gn(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(ue(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();yn(t,Hs(t.transactionQueueTree_,e)),Gs(t,t.transactionQueueTree_),Y(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)Je(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{W("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ye(t,e)}},o)}function Ye(t,e){const n=No(t,e),s=At(n),i=ko(t,n);return nh(t,i,s),s}function nh(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=H(n,c.path);let h=!1,d;if(p(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(ue(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=$d)h=!0,d="maxretry",i=i.concat(ue(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Ro(t,c.path,o);c.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){pn("transaction failed: Data returned ",_,c.path);let m=P(_);typeof _=="object"&&_!=null&&Z(_,".priority")||(m=m.updatePriority(f.getPriority()));const B=c.currentWriteId,Oe=mn(t),Ot=mo(m,f,Oe);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=Ot,c.currentWriteId=$s(t),o.splice(o.indexOf(B),1),i=i.concat(uo(t.serverSyncTree_,c.path,Ot,c.currentWriteId,c.applyLocally)),i=i.concat(ue(t.serverSyncTree_,B,!0))}else h=!0,d="nodata",i=i.concat(ue(t.serverSyncTree_,c.currentWriteId,!0))}Y(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}yn(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Je(s[a]);Gs(t,t.transactionQueueTree_)}function No(t,e){let n,s=t.transactionQueueTree_;for(n=y(e);n!==null&&et(s)===void 0;)s=Hs(s,n),e=w(e),n=y(e);return s}function ko(t,e){const n=[];return Po(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Po(t,e,n){const s=et(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);fn(e,i=>{Po(t,i,n)})}function yn(t,e){const n=et(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,go(e,n.length>0?n:void 0)}fn(e,s=>{yn(t,s)})}function qs(t,e){const n=At(No(t,e)),s=Hs(t.transactionQueueTree_,e);return Ad(s,i=>{Bn(t,i)}),Bn(t,s),vo(s,i=>{Bn(t,i)}),n}function Bn(t,e){const n=et(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(p(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ue(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?go(e,void 0):n.length=r+1,Y(t.eventQueue_,At(e),i);for(let o=0;o<s.length;o++)Je(s[o])}}/**
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
 */function sh(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ih(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):W(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xi=function(t,e){const n=rh(t),s=n.namespace;n.domain==="firebase.com"&&ae(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ae("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fc();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Lr(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new I(n.pathString)}},rh=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=sh(t.substring(h,d)));const f=ih(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Zi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",oh=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Zi.charAt(n%64),n=Math.floor(n/64);p(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Zi.charAt(e[i]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Ao{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+O(this.snapshot.exportVal())}}class xo{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ah{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lh{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new J;return Qd(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ee("OnDisconnect.remove",this._path);const e=new J;return Qi(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ee("OnDisconnect.set",this._path),nn("OnDisconnect.set",e,this._path,!1);const n=new J;return Qi(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ee("OnDisconnect.setWithPriority",this._path),nn("OnDisconnect.setWithPriority",e,this._path,!1),Fd("OnDisconnect.setWithPriority",n);const s=new J;return Jd(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Ee("OnDisconnect.update",this._path),Io("OnDisconnect.update",e,this._path);const n=new J;return Xd(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class zs{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:ys(this._path)}get ref(){return new ce(this._repo,this._path)}get _queryIdentifier(){const e=Li(this._queryParams),n=ps(e);return n==="{}"?"default":n}get _queryObject(){return Li(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof zs))return!1;const n=this._repo===e._repo,s=vs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qc(this._path)}}class ce extends zs{constructor(e,n){super(e,n,new bs,!1)}get parent(){const e=Gr(this._path);return e===null?null:new ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bt{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new I(e),s=Ke(this.ref,e);return new bt(this._node.getChild(n),s,k)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bt(i,Ke(this.ref,s),k)))}hasChild(e){const n=new I(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function M(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Ke(t._root,e):t._root}function Ke(t,e){return t=Pe(t),y(t._path)===null?Bd("child","path",e):bo("child","path",e),new ce(t._repo,N(t._path,e))}function vn(t){return t=Pe(t),new lh(t._repo,t._path)}function Do(t,e){t=Pe(t),Ee("push",t._path),nn("push",e,t._path,!0);const n=To(t._repo),s=oh(n),i=Ke(t,s),r=Ke(t,s);let o;return e!=null?o=De(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ch(t){return Ee("remove",t._path),De(t,null)}function De(t,e){t=Pe(t),Ee("set",t._path),nn("set",e,t._path,!1);const n=new J;return jd(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function js(t,e){Io("update",e,t._path);const n=new J;return Yd(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ys{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ao("value",this,new bt(e.snapshotNode,new ce(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xo(this,e,n):null}matches(e){return e instanceof Ys?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ks{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xo(this,e,n):null}createEvent(e,n){p(e.childName!=null,"Child events should have a childName.");const s=Ke(new ce(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ao(e.type,this,new bt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ks?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Oo(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,u=(h,d)=>{Ji(t._repo,t,a),c(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new ah(n,r||void 0),a=e==="value"?new Ys(o):new Ks(e,o);return Zd(t._repo,t,a),()=>Ji(t._repo,t,a)}function Ce(t,e,n,s){return Oo(t,"value",e,n,s)}function uh(t,e,n,s){return Oo(t,"child_added",e,n,s)}ld(ce);pd(ce);/**
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
 */const dh="FIREBASE_DATABASE_EMULATOR_HOST",rs={};let hh=!1;function fh(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=pr(r);t.repoInfo_=new Lr(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function ph(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ae("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xi(r,i),a=o.repoInfo,c;typeof process<"u"&&gi&&(c=gi[dh]),c?(r=`http://${c}?ns=${a.namespace}`,o=Xi(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new wc(t.name,t.options,e);Wd("Invalid Firebase Database URL",o),v(o.path)||ae("Database URL must point to the root of a Firebase Database (not including a child path).");const h=mh(a,t,u,new bc(t,n));return new gh(h,t)}function _h(t,e){const n=rs[e];(!n||n[t.key]!==t)&&ae(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eh(t),delete n[t.key]}function mh(t,e,n,s){let i=rs[e.name];i||(i={},rs[e.name]=i);let r=i[t.toURLString()];return r&&ae("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gd(t,hh,n,s),i[t.toURLString()]=r,r}class gh{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ce(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_h(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ae("Cannot call "+e+" on a deleted database.")}}function yh(t=Yl(),e){const n=$l(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=xa("database");s&&vh(n,...s)}return n}function vh(t,e,n,s={}){t=Pe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Ut(s,r.repoInfo_.emulatorOptions))return;ae("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ae('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ft(Ft.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Da(s.mockUserToken,t.app.options.projectId);o=new Ft(a)}pr(e)&&za(e),fh(r,i,s,o)}/**
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
 */function Eh(t){ac(jl),$t(new _t("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ph(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Be(yi,vi,t),Be(yi,vi,"esm2020")}/**
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
 */const Ch={".sv":"timestamp"};function Ih(){return Ch}/**
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
 */ie.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ie.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Eh();const bh={apiKey:"AIzaSyAL7ksBJYIkp1-L6-Zfs0BbKes9w1sL08k",authDomain:"qwixx-c52fd.firebaseapp.com",databaseURL:"https://qwixx-c52fd-default-rtdb.europe-west1.firebasedatabase.app",projectId:"qwixx-c52fd",storageBucket:"qwixx-c52fd.firebasestorage.app",messagingSenderId:"1041757230305",appId:"1:1041757230305:web:c807bb8ae79081a13f93a0"},wh=new Set(["PLAYER_VALIDATED","DICE_ROLLED"]),Sh=2e3;let S=null,os=null,as=null,ls=null,wt=null,Fe=[],Qs=[],Re=null,ut=null,Ne=null,re=null,K=!0,dt=null;function Th(){const t=yr(bh);S=yh(t),Ce(M(S,".info/connected"),e=>{e.val()===!0&&(Qs.forEach(n=>n()),Re&&Re(),Ne&&Ne())})}function Rh(t){os=t}function Nh(t){as=t}function kh(t){ls=t}function Ph(t){wt=t}function Ah(){if(!S)return;const t=M(S,`tabs/${me()}`),e=()=>{dt=vn(t),dt.remove(),De(t,{tabId:Bt(),since:Date.now()})},n=()=>{document.hidden||e()};Ce(t,s=>{const i=s.val();i&&i.tabId&&i.tabId!==Bt()?xh():Dh()},s=>console.warn("Error escuchando el liderazgo de pestañas:",s.message)),document.addEventListener("visibilitychange",()=>{if(!document.hidden){if(!K){window.location.reload();return}e()}}),Qs.push(()=>{K&&e()}),n()}function xh(){K&&(K=!1,ut&&ut.cancel().catch(()=>{}),ut=null,re&&re.cancel().catch(()=>{}),re=null,dt&&dt.cancel().catch(()=>{}),dt=null,wt&&wt(!1))}function Dh(){const t=!K;K=!0,t&&wt&&wt(!0),Re&&Re(),Ne&&Ne()}function Oh(t){Ce(M(S,"lobby"),e=>{const n=[];e.forEach(s=>{n.push({id:s.key,...s.val()})}),t(n)},e=>console.warn("Error escuchando el lobby:",e.message))}function Lh(t){if(!S)return;const e=()=>{const n=M(S,`online/${me()}/${Bt()}`);vn(n).remove(),De(n,t())};Qs.push(e),e()}function Lo(t){S&&js(M(S,`online/${me()}/${Bt()}`),t)}function Mh(t){Ce(M(S,"online"),e=>{const n={};e.forEach(s=>{n[s.key]={},s.forEach(i=>{const r=i.val();r&&typeof r=="object"&&(n[s.key][i.key]=r)})}),t(n)},e=>console.warn("Error escuchando usuarios conectados:",e.message))}function Fh(t){const e=Do(M(S,"lobby")),n=e.key;return De(e,{hostName:t,hostUserId:me(),status:"lobby",hostOnline:!0,createdAt:Date.now(),playerCount:1}),Mo(n),Bo(n),n}function Mo(t){if(!S)return;const e=t||l.sessionId;e&&(Ne=()=>{if(!K)return;const n=M(S,`lobby/${e}/hostOnline`);re=vn(n),re.set(!1),De(n,!0)},Ne())}function cs(t){Bo(t)}function Js(){if(!S||!l.sessionId)return;const t=l.sessionId,e=me();Re=()=>{if(!l.sessionId||!K)return;const n=M(S,`presence/${t}/${e}`);ut=vn(n),ut.set(!1),De(n,!0)},Re()}function F(t){!S||!l.sessionId||!K||Do(M(S,`events/${l.sessionId}`),{sender:me(),createdAt:Ih(),payload:t})}function En(t){!S||!l.sessionId||!K||js(M(S,`lobby/${l.sessionId}`),t)}function Xs(){K&&Fo(l.sessionId)}function Fo(t){!S||!t||(re&&t===l.sessionId&&(re.cancel().catch(()=>{}),re=null),js(M(S),{[`lobby/${t}`]:null,[`events/${t}`]:null,[`presence/${t}`]:null}))}function Bh(t){!S||!t||ch(M(S,`lobby/${t}`))}function Bo(t){Wo();let e=null;const n=[],s=r=>{!r||!r.payload||r.sender===me()||!wh.has(r.payload.type)&&e!==null&&typeof r.createdAt=="number"&&r.createdAt<=e||os&&os(r.payload)};let i=null;i=Ce(M(S,".info/serverTimeOffset"),r=>{e=Date.now()+(r.val()||0)-Sh,i&&i(),n.splice(0).forEach(s)}),Fe.push(()=>{i&&i()}),Fe.push(uh(M(S,`events/${t}`),r=>{const o=r.val();e===null?n.push(o):s(o)},r=>console.warn("Error escuchando eventos:",r.message))),Fe.push(Ce(M(S,`lobby/${t}/status`),r=>{as&&as(r.val())},r=>console.warn("Error escuchando el estado de la partida:",r.message))),Fe.push(Ce(M(S,`presence/${t}`),r=>{ls&&ls(r.val()||{})},r=>console.warn("Error escuchando la presencia:",r.message)))}function Wo(){Fe.forEach(t=>t()),Fe=[],Re=null,Ne=null,re=null}function Ie(){Wo()}const Wh=["qwixx_session_id","qwixx_is_host","qwixx_my_id","qwixx_game_started","qwixx_board","qwixx_host_state"];function Q(){l.sessionId&&(localStorage.setItem("qwixx_session_id",l.sessionId),localStorage.setItem("qwixx_is_host",l.isHost),localStorage.setItem("qwixx_my_id",l.myPlayerId),localStorage.setItem("qwixx_game_started",l.gameStarted),localStorage.setItem("qwixx_board",JSON.stringify({board:{marks:{red:[...l.board.marks.red],yellow:[...l.board.marks.yellow],green:[...l.board.marks.green],blue:[...l.board.marks.blue]},penalties:l.board.penalties,closedRows:[...l.board.closedRows]},turn:{...l.turn,pendingClosedRows:[...l.turn.pendingClosedRows],myLockedClosures:[...l.turn.myLockedClosures]},turnCounter:l.turnCounter})),l.isHost&&localStorage.setItem("qwixx_host_state",JSON.stringify({playersList:l.playersList,activePlayerId:l.activePlayerId,gameStarted:l.gameStarted,dice:l.dice,hasRolledInTurn:l.turn.hasRolled,turnCounter:l.turnCounter,validatedPlayers:[...l.validatedPlayers],declaredClosures:[...l.declaredClosures]})))}function Hh(){try{const t=localStorage.getItem("qwixx_session_id");if(!t)return null;const e=JSON.parse(localStorage.getItem("qwixx_board")||"null");return{sessionId:t,isHost:localStorage.getItem("qwixx_is_host")==="true",myPlayerId:localStorage.getItem("qwixx_my_id")||"P1",name:localStorage.getItem("qwixx_player_name")||"",gameStarted:localStorage.getItem("qwixx_game_started")==="true",board:e?.board||null,turn:e?.turn||null,turnCounter:e?.turnCounter||0,hostState:JSON.parse(localStorage.getItem("qwixx_host_state")||"null")}}catch{return null}}function xt(){Wh.forEach(t=>localStorage.removeItem(t))}function Ho(t){const e={};let n=0;ke.forEach(i=>{const r=oa[t.marks[i].size]??0;e[i]=r,n+=r});const s=t.penalties*ca;return{perColor:e,penalty:s,total:n-s}}function Uh(t,e){return t.closedRows.size>=la?"¡Se han cerrado 2 filas en el juego!":t.penalties>=sr?`¡${e} ha acumulado 4 faltas!`:null}const sn=(t,e)=>`${t}:${e}`;function Uo(t,e){return t.closedRows.has(e)}function rn(t,e){const n=se[t];return n[n.length-1]===e}function Vh(t,e,{includeLock:n=!0}={}){let s=0;return se[e].forEach(i=>{t.marks[e].has(i)&&(s+=1)}),n&&t.marks[e].has(z)&&(s+=1),s}function $h(t,e){let n=-1;return se[e].forEach((s,i)=>{t.marks[e].has(s)&&(n=i)}),n}function er(t,e,n){if(n===z||Uo(t,e)||t.marks[e].has(n))return!1;const s=se[e],i=s.indexOf(n);return!(i===-1||i<=$h(t,e)||i===s.length-1&&Vh(t,e,{includeLock:!1})<aa)}function Dt(t){return t.myPlayerId===t.activePlayerId}function Cn(t){const e=new Set,n=new Set;if(!t.gameStarted||!t.turn.hasRolled||t.turn.hasValidated||t.gameOverTriggered)return{white:e,color:n};const s=Dt(t),i=String(t.dice.w1+t.dice.w2);return ke.forEach(r=>{if(Uo(t.board,r))return;const o=t.turn.marked.some(a=>a.actionType==="color"&&a.color===r);if(!t.turn.hasMarkedWhite&&!o&&er(t.board,r,i)&&e.add(sn(r,i)),s&&!t.turn.hasMarkedColor){const a=t.dice[ua[r]];[t.dice.w1+a,t.dice.w2+a].forEach(c=>{const u=String(c);er(t.board,r,u)&&n.add(sn(r,u))})}}),{white:e,color:n}}function Vo(t){if(!Dt(t)||!t.turn.hasRolled||t.turn.marked.length>0||t.turn.hasValidated)return!1;const e=Cn(t);return e.white.size===0&&e.color.size===0}function Gh(t){return Dt(t)||!t.turn.hasRolled||t.turn.marked.length>0||t.turn.hasValidated?!1:Cn(t).white.size===0}function qh(t,e,n){return t.turn.marked.some(s=>s.color===e&&s.val===n)}function zh(t,e,n){return t.turn.myLockedClosures.has(e)&&(n===z||rn(e,n))}function jh(t,e){return e==null?!0:!(e<t.turnCounter||e===t.turnCounter&&t.turn.hasRolled)}function Yh(t,e){return e==null?!0:e>t.turnCounter}function Kh(){const t=Cn(l);ke.forEach(e=>{const n=document.getElementById(`row-${e}`);if(!n)return;const s=l.board.closedRows.has(e);n.classList.toggle("fully-closed",s),n.classList.remove("closed-by-me","closed-by-other"),s&&n.classList.add(l.board.marks[e].has(z)?"closed-by-me":"closed-by-other");let i=-1;se[e].forEach((r,o)=>{l.board.marks[e].has(r)&&(i=o)}),n.querySelectorAll(".cell").forEach(r=>{const o=r.dataset.val,a=o===z?se[e].length:se[e].indexOf(o),c=l.board.marks[e].has(o),u=c&&l.turn.marked.some(_=>_.color===e&&_.val===o),h=sn(e,o),d=t.white.has(h)||t.color.has(h);r.classList.toggle("marked",c),r.classList.toggle("turn-marked",u),r.classList.toggle("selectable",d),r.classList.toggle("selectable-white",t.white.has(h)),r.classList.toggle("selectable-color",t.color.has(h)),r.classList.toggle("dimmed",!c&&!d);const f=!c&&o!==z&&(s||a<i);r.classList.toggle("disabled",!c&&(s||a<i)),r.classList.toggle("passed",f)})}),document.querySelectorAll(".penalty-box").forEach((e,n)=>{e.classList.toggle("marked",n<l.board.penalties)})}function Qh(){const{perColor:t,penalty:e,total:n}=Ho(l.board);ke.forEach(r=>{const o=document.getElementById(`total-${r}`);o&&(o.innerText=t[r])});const s=document.getElementById("total-penalty"),i=document.getElementById("total-final");s&&(s.innerText=e),i&&(i.innerText=n)}function Jh(){Object.entries({w1:null,w2:null,r:"red",y:"yellow",g:"green",b:"blue"}).forEach(([e,n])=>{const s=document.getElementById(`die-${e}`);if(s){if(n&&l.board.closedRows.has(n)){s.style.display="none";return}s.style.display="flex",s.style.visibility=l.turn.hasRolled?"visible":"hidden",l.turn.hasRolled&&(s.innerText=ra[l.dice[e]]||"⚀")}})}function $o(){const t=Ea(),e=Dt(l),n=l.playersList.find(a=>a.id===l.activePlayerId),s=!!n&&l.presence[n.userId]===!1,i=document.getElementById("dice-status-msg");i&&(l.turn.hasRolled?(i.style.display="none",i.innerText=""):(i.style.display="block",e?i.innerText="¡Tu turno! Lanza 🎲":s?i.innerText=`Esperando por ${t} (sin conexión)... 📴`:i.innerText=`Esperando a ${t}... ⏳`));const r=document.getElementById("btn-roll-dice"),o=document.getElementById("btn-validate-turn");l.turn.hasRolled?(r&&(r.style.display="none"),o&&(o.innerText="Validar",o.style.display="block",o.disabled=l.turn.hasValidated)):e?(r&&(r.innerText="Lanzar",r.style.display="block",r.disabled=!1),o&&(o.style.display="none")):(r&&(r.style.display="none"),o&&(o.innerText="Validar",o.style.display="block",o.disabled=!0)),o&&(o.classList.remove("forced-penalty-red","forced-penalty-blue"),l.turn.hasRolled&&l.turn.marked.length===0&&(Vo(l)?o.classList.add("forced-penalty-red"):Gh(l)&&o.classList.add("forced-penalty-blue"))),l.turn.hasValidated?Go():ei()}function le(){const t=document.getElementById("player-list"),e=document.getElementById("turn-wait-list");t&&(t.innerHTML="",e&&(e.innerHTML=""),l.playersList.forEach(n=>{const s=l.validatedPlayers.has(n.id),i=n.id===l.activePlayerId,r=l.presence[n.userId]===!1,o=l.isHost&&r&&n.id!==l.myPlayerId,a=document.createElement("li");a.innerHTML=`
      <span class="${r?"player-offline":""}">${i?"🎲 ":""}${Zs(n.name)} ${n.id==="P1"?"👑":""}${r?" 📴":""}</span>
      <span>${s?"✔️":"⏳"}${o?` <button class="player-kick" data-player-id="${n.id}" title="Expulsar (desconectado)">✖</button>`:""}</span>`,t.appendChild(a),e&&e.appendChild(a.cloneNode(!0))}))}function Xh(){const t=document.getElementById("games-list"),e=document.getElementById("no-games-placeholder");if(!t)return;const n=l.lobbyGames.filter(s=>s.status==="lobby"&&!s.game).sort((s,i)=>(i.createdAt||0)-(s.createdAt||0));t.innerHTML="",e&&(e.style.display=n.length===0?"block":"none"),n.forEach(s=>{const i=s.playerCount||1,r=s.hostOnline===!1,o=s.hostUserId===l.userId,a=document.createElement("li");a.className=`game-item${r?" grayed":""}`,a.innerHTML=`
      <span class="game-info"><b>Partida de ${Zs(s.hostName)}</b>
        <span class="game-meta">${r?"⏳ Esperando al anfitrión":`${i} jugador${i===1?"":"es"}`}</span>
      </span>
      ${o?`<button class="game-delete" data-delete-id="${s.id}" title="Eliminar mi partida">🗑</button>`:r?"":`<button class="net-btn join" data-session-id="${s.id}">Unirse</button>`}`,t.appendChild(a)})}function Zs(t){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Go(){const t=document.getElementById("wait-panel");t&&(t.style.display="flex")}function ei(){const t=document.getElementById("wait-panel");t&&(t.style.display="none")}function Zh(){const t=document.getElementById("wait-panel");t&&t.style.display==="flex"?ei():Go()}function ef(){document.body.classList.add("in-game");const t=document.querySelector(".network-bar"),e=document.getElementById("game-area");t&&(t.style.display="none"),e&&(e.style.display="block")}function tf(){const t=document.getElementById("tab-overlay");t&&(t.style.display="flex")}function nf(){const t=document.getElementById("tab-overlay");t&&(t.style.display="none")}function sf(){document.getElementById("net-setup").style.display="flex",document.getElementById("lobby-list-section").style.display="block",document.getElementById("lobby-section").style.display="none"}function qo(t){document.getElementById("net-setup").style.display="none",document.getElementById("lobby-list-section").style.display="none",document.getElementById("lobby-section").style.display="block",document.getElementById("display-host-name").innerText=t,document.getElementById("host-controls").style.display="block",document.getElementById("client-waiting").style.display="none"}function ti(t){document.getElementById("net-setup").style.display="none",document.getElementById("lobby-list-section").style.display="none",document.getElementById("lobby-section").style.display="block",document.getElementById("display-host-name").innerText=t,document.getElementById("host-controls").style.display="none",document.getElementById("client-waiting").style.display="block"}function V(t,e="Atención"){return new Promise(n=>{const s=document.getElementById("custom-alert-modal"),i=document.getElementById("alert-title"),r=document.getElementById("alert-message"),o=document.getElementById("btn-close-alert");if(!s)return n();i.innerText=e,r.innerText=t,s.style.display="flex";const a=()=>{s.style.display="none",o.removeEventListener("click",a),n()};o.addEventListener("click",a)})}function In(t,e="Confirmación"){return new Promise(n=>{const s=document.getElementById("custom-confirm-modal"),i=document.getElementById("confirm-title"),r=document.getElementById("confirm-message"),o=document.getElementById("btn-confirm-ok"),a=document.getElementById("btn-confirm-cancel");if(!s)return n(!1);i.innerText=e,r.innerText=t,s.style.display="flex";const c=d=>{s.style.display="none",o.removeEventListener("click",u),a.removeEventListener("click",h),n(d)},u=()=>c(!0),h=()=>c(!1);o.addEventListener("click",u),a.addEventListener("click",h)})}function zo(t){const e=document.getElementById("game-over-reason"),n=document.getElementById("game-over-modal");e&&(e.innerText=t),jo(),n&&(n.style.display="flex")}function jo(){const t=document.getElementById("leaderboard-body");if(!t)return;t.innerHTML="",Object.values(l.scores).sort((n,s)=>s.score-n.score).forEach((n,s)=>{const i=document.createElement("tr");i.innerHTML=`<td>#${s+1}</td><td>${n.name}</td><td><b>${n.score} pts</b></td>`,t.appendChild(i)})}function X(){Kh(),Qh(),Jh(),$o(),le()}function St(){l.gameStarted=!0,ef(),X()}function Yo(t,e){jh(l,e)&&(ds(),l.turn.hasRolled=!0,l.dice=t,X())}function Ko(t,e=[],n){Yh(l,n)&&(l.activePlayerId=t,ya(e),ds(),l.validatedPlayers.clear(),l.declaredClosures.clear(),n!=null&&(l.turnCounter=n),Q(),X())}function Qo(t){l.playersList.some(e=>e.id===t.playerId)&&(l.playersList=l.playersList.filter(e=>e.id!==t.playerId),l.activePlayerId=l.activePlayerId===t.playerId?(l.playersList[0]||{}).id:l.activePlayerId,l.isHost&&En({playerCount:l.playersList.length}),l.gameStarted?X():le(),Q())}function Jo(t){(t.declaredClosures||[]).forEach(e=>{l.declaredClosures.add(e),l.turn.pendingClosedRows.has(e)&&l.turn.myLockedClosures.add(e)}),l.validatedPlayers.clear(),l.validatedPlayers.add(t.closingPlayerId),t.closingPlayerId!==l.myPlayerId&&(l.turn.hasValidated=!1,V(`¡Atención! ${t.closingPlayerName} va a cerrar el color ${nr[t.color]||t.color}.

Se han cancelado las validaciones del turno para que podáis reevaluar vuestra jugada.`,"🔒 Fila Cerrada")),X()}function Xo(){if(l.gameOverTriggered)return!0;const t=Uh(l.board,l.myPlayerName);return t?(l.gameOverTriggered=!0,Zo(),F({type:"GAME_OVER",reason:t,playerId:l.myPlayerId,playerName:l.myPlayerName,score:l.scores[l.myPlayerId].score}),l.isHost&&En({status:"finished"}),zo(t),!0):!1}function Zo(){const t=Ho(l.board).total;l.scores[l.myPlayerId]={id:l.myPlayerId,name:l.myPlayerName,score:t},F({type:"SUBMIT_SCORE",playerId:l.myPlayerId,playerName:l.myPlayerName,score:t})}function ea(t,e){return{type:"WELCOME",targetUserId:t,playerId:e,players:l.playersList,activePlayerId:l.activePlayerId,gameStarted:l.gameStarted,dice:l.dice,hasRolled:l.turn.hasRolled,validatedList:Array.from(l.validatedPlayers),turn:l.turnCounter}}function ht(t,e){F({type:"REJECTED",targetUserId:t,reason:e})}function rf(t){if(l.gameStarted)return ht(t.userId,"La partida ya ha comenzado.");const e=t.name.trim();if(l.playersList.some(s=>s.name.toLowerCase()===e.toLowerCase()))return ht(t.userId,"Nombre en uso en esta sala.");if(l.playersList.some(s=>s.userId===t.userId))return ht(t.userId,"Ya estás en esta partida en otra pestaña de este navegador. Vuelve a esa pestaña o ciérrala.");const n=va();l.playersList.push({id:n,userId:t.userId,name:e}),F(ea(t.userId,n)),F({type:"PLAYER_JOINED",players:l.playersList}),En({playerCount:l.playersList.length}),le(),Q()}function of(t){const e=l.playersList.find(n=>n.userId===t.userId);if(l.gameOverTriggered)return ht(t.userId,"La partida ya ha terminado.");if(!e)return ht(t.userId,"Ya no estás en esta partida.");F(ea(t.userId,e.id))}function ta(t,e,n=[],s){if(s!==void 0&&s!==l.turnCounter)return;const i=n.find(r=>!l.declaredClosures.has(r));if(i){l.declaredClosures.add(i);const r={type:"ROW_CLOSURE_ALERT",closingPlayerId:t,closingPlayerName:e,color:i,declaredClosures:Array.from(l.declaredClosures)};Jo(r),F(r);return}if(l.validatedPlayers.add(t),F({type:"VALIDATION_UPDATE",validatedList:Array.from(l.validatedPlayers)}),le(),l.validatedPlayers.size>=l.playersList.length){const r=Array.from(l.declaredClosures),o=l.playersList.map(u=>u.id),a=o[(o.indexOf(l.activePlayerId)+1)%o.length],c=l.turnCounter+1;F({type:"TURN_CHANGED",nextPlayer:a,closedRows:r,turn:c}),Ko(a,r,c),Xo()}}function af(t){if(!l.isHost)return;const e=l.playersList.find(n=>n.id===t);!e||l.presence[e.userId]!==!1||(F({type:"PLAYER_LEFT",playerId:t,playerName:e.name}),Qo({playerId:t,playerName:e.name}))}const lf=9e4;let ee=null;function cf(){kh(uf)}function uf(t){l.presence=t||{},(l.sessionJoined||l.reconnecting)&&(le(),$o()),df()}function df(){const t=l.playersList[0];if(!(!!t&&l.presence[t.userId]===!1&&!l.isHost&&l.sessionId)){ee&&(clearTimeout(ee),ee=null);return}ee||(ee=setTimeout(hf,lf))}async function hf(){ee=null;const t=l.playersList[0];if(l.sessionId&&t&&l.presence[t.userId]===!1){if(l.gameStarted){Xs();return}await V("El anfitrión no ha vuelto. La partida queda a la espera en el listado.","Anfitrión sin conexión"),Ie(),xt(),window.location.reload()}}function bn(){ee&&(clearTimeout(ee),ee=null)}function ff(t){const e=[];return Object.entries(t||{}).forEach(([n,s])=>{let i=null,r="lobby",o=null;Object.values(s||{}).forEach(a=>{a&&(a.name&&(i=a.name),a.status==="playing"&&(r="playing"),typeof a.since=="number"&&(o===null||a.since<o)&&(o=a.since))}),e.push({userId:n,name:i,status:r,since:o})}),e.sort((n,s)=>(n.since??1/0)-(s.since??1/0)),e}function pf(){const t=document.getElementById("online-count");t&&(t.innerText=l.onlineUsers.length),_f()}function _f(){const t=document.getElementById("online-list");if(!t)return;t.innerHTML="",[...l.onlineUsers].sort((n,s)=>n.userId===l.userId?-1:s.userId===l.userId?1:(n.name||"zzz").localeCompare(s.name||"zzz")).forEach(n=>{const s=n.userId===l.userId,i=n.name||"Decidiendo nombre...",r=n.status==="playing"?"🎲 En partida":"👀 Disponible",o=document.createElement("li");o.innerHTML=`<span class="${n.name?"":"unnamed"}">${Zs(i)}${s?" (tú)":""}</span><span class="online-status">${r}</span>`,t.appendChild(o)})}function mf(){const t=document.getElementById("online-popover");t&&(t.style.display=t.style.display==="flex"?"none":"flex")}function gf(){const t=document.getElementById("online-popover");t&&(t.style.display="none")}let Tt={name:null,status:"lobby",since:Date.now()};function yf(){Tt.name=localStorage.getItem("qwixx_player_name")||null,Lh(()=>({...Tt})),Mh(t=>{l.onlineUsers=ff(t),pf()})}function na(t){Tt.name=t||null,Lo({name:Tt.name})}function wn(t){Tt.status=t,Lo({status:t})}function ni(){return!!document.documentElement.requestFullscreen}function vf(){return window.matchMedia("(pointer: coarse)").matches}function Sn(){return document.fullscreenElement!=null}function Ef(){if(Sn()){document.exitFullscreen().catch(()=>{});return}ni()&&document.documentElement.requestFullscreen().catch(()=>{})}function si(){!vf()||Sn()||ni()&&document.documentElement.requestFullscreen().catch(()=>{})}function Cf(){Sn()&&document.exitFullscreen().catch(()=>{})}function If(){const t=document.getElementById("btn-fullscreen");if(t){if(!ni()){t.style.display="none";return}t.addEventListener("click",Ef),document.addEventListener("fullscreenchange",()=>{t.classList.toggle("active",Sn())})}}const bf=1e5;let us=!1,ft=[];function wf(){Oh(t=>{if(l.lobbyGames=t,Tf(t),Xh(),!us){us=!0;const e=ft;ft=[],e.forEach(n=>n())}}),Nh(t=>{t===null&&l.sessionId&&Lf()})}function Sf(t){if(us)return t();ft.push(t),setTimeout(()=>{const e=ft.indexOf(t);e!==-1&&(ft.splice(e,1),t())},2500)}function Tf(t){t.forEach(e=>{e.status||Bh(e.id)})}function sa(){const t=document.getElementById("player-name-input"),e=t.value.trim();return e?(localStorage.setItem("qwixx_player_name",e),na(e),e):(V("Introduce tu nombre antes de empezar."),t.focus(),null)}function Rf(){return l.lobbyGames.some(t=>!t.game&&t.hostUserId===l.userId&&(t.status==="lobby"||t.status==="started"))}function Nf(){const t=sa();if(t){if(Rf())return V("Ya tienes una partida creada con este usuario. Elimínala desde el listado (🗑) para crear otra.","Partida duplicada");l.myPlayerName=t,l.isHost=!0,l.myPlayerId="P1",l.playersList=[{id:"P1",userId:l.userId,name:t}],l.sessionJoined=!0,l.sessionId=Fh(t),Js(),wn("playing"),si(),qo(t),le(),Q()}}function kf(t){const e=sa();if(!e||l.sessionJoined||l.reconnecting)return;const n=l.lobbyGames.find(s=>s.id===t);if(!n||n.status!=="lobby")return V("Esa partida ya no está disponible.");if(n.game)return V("Esa partida pertenece a la nueva versión (/test).");if(n.hostOnline===!1)return V("El anfitrión no está conectado. Podrás unirte cuando vuelva.");l.myPlayerName=e,l.sessionId=t,l.isHost=!1,cs(t),ti(n.hostName),F({type:"HANDSHAKE",userId:l.userId,name:e}),wn("playing"),si()}async function Pf(){l.isHost&&(l.playersList.length<2&&!await In("¿Quieres iniciar una partida en solitario?","Partida Individual")||(l.activePlayerId=l.playersList[0].id,l.gameStarted=!0,l.turnCounter=1,Q(),si(),En({status:"started"}),F({type:"GAME_STARTED",players:l.playersList,activePlayerId:l.activePlayerId,turn:l.turnCounter}),St()))}function Af(){const t=Hh();return!t||!l.userId?!1:(Sf(()=>{const e=l.lobbyGames.find(s=>s.id===t.sessionId);if(!(!!e&&!e.game&&(e.status==="lobby"||e.status==="started"))){xt();return}l.sessionId=t.sessionId,l.isHost=t.isHost,l.myPlayerId=t.myPlayerId,l.myPlayerName=t.name||l.myPlayerName,l.turnCounter=t.turnCounter||0,wn("playing"),pa(t.board),_a(t.turn),t.isHost?(ma(t.hostState),l.sessionJoined=!0,cs(t.sessionId),Js(),Mo(t.sessionId),l.gameStarted?St():qo(l.myPlayerName),X(),Q()):(l.reconnecting=!0,cs(t.sessionId),t.gameStarted?St():ti(xf(t.sessionId)),X(),F({type:"REJOIN",userId:l.userId,name:l.myPlayerName}),setTimeout(()=>{l.reconnecting&&(l.reconnecting=!1,ii("No se pudo recuperar la partida."))},bf))}),!0)}function xf(t){const e=l.lobbyGames.find(n=>n.id===t);return e?e.hostName:"..."}async function Df(t){const e=l.lobbyGames.find(s=>s.id===t);!e||e.hostUserId!==l.userId||!await In(`¿Eliminar tu partida "${e.hostName}"? No se podrá recuperar.`,"Eliminar partida")||Fo(t)}function Of(){l.sessionId&&(l.isHost?(Xs(),Ie()):(l.playersList.some(t=>t.id===l.myPlayerId)&&F({type:"PLAYER_LEFT",playerId:l.myPlayerId,playerName:l.myPlayerName}),Ie()),bn(),xt(),fa(),wn("lobby"),Cf(),sf())}async function tr(t=!1){!t&&!l.gameOverTriggered&&!await In("¿Seguro que quieres abandonar la partida?","Salir del Juego")||(l.isHost?(Xs(),Ie()):(l.sessionJoined&&!l.gameOverTriggered&&F({type:"PLAYER_LEFT",playerId:l.myPlayerId,playerName:l.myPlayerName}),Ie()),bn(),document.body.classList.remove("in-game"),xt(),window.location.reload())}function Lf(){l.gameOverTriggered||(bn(),ii("El anfitrión ha cerrado la partida o perdió la conexión.","Partida Cerrada"))}async function ii(t,e="Atención"){t&&await V(t,e),bn(),Ie(),xt(),window.location.reload()}const Mf=new Set(["REJECTED","WELCOME","PLAYER_JOINED","PLAYER_LEFT"]);function Ff(){Rh(Bf)}function Bf(t){if(!(!l.sessionJoined&&!l.reconnecting&&!Mf.has(t.type))){if(l.isHost){if(t.type==="HANDSHAKE")return rf(t);if(t.type==="REJOIN")return of(t);if(t.type==="PLAYER_VALIDATED")return ta(t.playerId,t.playerName,t.pendingClosedRows,t.turn)}Wf(t)}}function Wf(t){switch(t.type){case"REJECTED":t.targetUserId===l.userId&&(l.reconnecting=!1,ii(t.reason,"Conexión rechazada"));break;case"WELCOME":t.targetUserId===l.userId&&Hf(t);break;case"PLAYER_JOINED":l.playersList=t.players,le(),Q();break;case"PLAYER_LEFT":V(`⚠️ ${t.playerName} ha abandonado la partida.`,"Jugador Desconectado"),Qo(t);break;case"GAME_STARTED":l.playersList=t.players,l.activePlayerId=t.activePlayerId,t.turn&&(l.turnCounter=t.turn),St();break;case"DICE_ROLLED":Yo(t.dice,t.turn);break;case"ROW_CLOSURE_ALERT":Jo(t);break;case"VALIDATION_UPDATE":l.validatedPlayers=new Set(t.validatedList),le();break;case"TURN_CHANGED":Ko(t.nextPlayer,t.closedRows,t.turn),Xo();break;case"GAME_OVER":l.scores[t.playerId]={id:t.playerId,name:t.playerName,score:t.score},l.gameOverTriggered||(l.gameOverTriggered=!0,Zo()),zo(t.reason);break;case"SUBMIT_SCORE":l.scores[t.playerId]={id:t.playerId,name:t.playerName,score:t.score},jo();break}}function Hf(t){const e=l.turnCounter;if(l.myPlayerId=t.playerId,l.playersList=t.players,l.activePlayerId=t.activePlayerId,l.turnCounter=t.turn??e,l.dice=t.dice||l.dice,l.validatedPlayers=new Set(t.validatedList||[]),e<l.turnCounter&&ds(),l.turn.hasRolled=!!t.hasRolled,l.turn.hasValidated=l.validatedPlayers.has(l.myPlayerId),l.sessionJoined=!0,l.reconnecting=!1,Js(),t.gameStarted)St();else{const n=l.lobbyGames.find(s=>s.id===l.sessionId);ti(n?n.hostName:"..."),le()}Q()}function Uf(){if(!l.gameStarted||l.myPlayerId!==l.activePlayerId||l.turn.hasRolled)return;const t={w1:Math.floor(Math.random()*6)+1,w2:Math.floor(Math.random()*6)+1,r:Math.floor(Math.random()*6)+1,y:Math.floor(Math.random()*6)+1,g:Math.floor(Math.random()*6)+1,b:Math.floor(Math.random()*6)+1};Yo(t,l.turnCounter),Q(),F({type:"DICE_ROLLED",dice:t,turn:l.turnCounter})}function Vf(t){if(!l.gameStarted||!l.turn.hasRolled||l.turn.hasValidated||l.gameOverTriggered)return;const e=t.parentElement;if(!e||!e.id.startsWith("row-"))return;const n=e.id.replace("row-",""),s=t.dataset.val;if(l.board.marks[n].has(s)){$f(n,s);return}const i=Cn(l),r=sn(n,s);let o=null;i.white.has(r)&&!l.turn.hasMarkedWhite?(o="white",l.turn.hasMarkedWhite=!0):i.color.has(r)&&!l.turn.hasMarkedColor&&(o="color",l.turn.hasMarkedColor=!0),o&&(ri(n,s),l.turn.marked.push({color:n,val:s,actionType:o}),rn(n,s)&&(ri(n,z),l.turn.marked.push({color:n,val:z,actionType:"lock"}),l.turn.pendingClosedRows.add(n)),X(),Q())}function $f(t,e){if(zh(l,t,e)){V(`No puedes deshacer el cierre de ${nr[t]}.`);return}if(qh(l,t,e)){if((e===z||rn(t,e))&&l.turn.pendingClosedRows.has(t)){const n=rn(t,e)?e:se[t][se[t].length-1];Rn(t,n),Rn(t,z),l.turn.marked=l.turn.marked.filter(s=>!(s.color===t&&(s.val===n||s.val===z))),l.turn.pendingClosedRows.delete(t)}else Rn(t,e),l.turn.marked=l.turn.marked.filter(n=>!(n.color===t&&n.val===e));l.turn.hasMarkedWhite=l.turn.marked.some(n=>n.actionType==="white"),l.turn.hasMarkedColor=l.turn.marked.some(n=>n.actionType==="color"),X(),Q()}}async function Gf(){if(!l.gameStarted||l.gameOverTriggered||l.turn.hasValidated)return;const t=Dt(l);if(!l.turn.hasRolled)return V(t?"Debes lanzar los dados antes de validar tu turno.":"Debes esperar a que el jugador activo lance los dados.");if(t&&l.turn.marked.length===0){if(Vo(l))await V("Como no tienes combinaciones posibles con la tirada actual, cometes una falta obligatoria (-5 pts).","Sin Combinaciones Válidas");else if(!await In("No has marcado ninguna casilla en tu turno. ¿Deseas pasar y anotarte una falta (-5 pts)?","Anotar Falta"))return;ga()}l.turn.hasValidated=!0,X();const e=Array.from(l.turn.pendingClosedRows);l.isHost?ta(l.myPlayerId,l.myPlayerName,e,l.turnCounter):F({type:"PLAYER_VALIDATED",playerId:l.myPlayerId,playerName:l.myPlayerName,pendingClosedRows:e,turn:l.turnCounter})}window.addEventListener("DOMContentLoaded",()=>{l.userId=me();const t=localStorage.getItem("qwixx_player_name");t&&(document.getElementById("player-name-input").value=t),Th(),Ff(),cf(),wf(),yf(),Ah(),Ph(s=>s?nf():tf()),document.getElementById("btn-tab-resume").addEventListener("click",()=>window.location.reload()),document.getElementById("online-badge").addEventListener("click",s=>{s.stopPropagation(),mf()}),document.addEventListener("click",s=>{const i=document.getElementById("online-popover");i&&i.style.display==="flex"&&!i.contains(s.target)&&gf()});const e=document.getElementById("player-name-input");e.addEventListener("change",()=>na(e.value.trim()||null)),If(),document.getElementById("btn-create-room").addEventListener("click",Nf),document.getElementById("btn-start-game").addEventListener("click",Pf),document.getElementById("btn-leave-lobby").addEventListener("click",Of),document.getElementById("btn-roll-dice").addEventListener("click",Uf),document.getElementById("btn-validate-turn").addEventListener("click",Gf),document.getElementById("btn-exit-game").addEventListener("click",()=>tr(!1)),document.getElementById("btn-modal-exit").addEventListener("click",()=>tr(!0)),document.getElementById("btn-show-players").addEventListener("click",Zh),document.getElementById("btn-return-actions").addEventListener("click",ei),document.getElementById("games-list").addEventListener("click",s=>{const i=s.target.closest("button[data-delete-id]");if(i)return Df(i.dataset.deleteId);const r=s.target.closest("button[data-session-id]");r&&kf(r.dataset.sessionId)});const n=s=>{const i=s.target.closest(".player-kick");i&&af(i.dataset.playerId)};document.getElementById("player-list").addEventListener("click",n),document.getElementById("turn-wait-list").addEventListener("click",n),document.getElementById("game-area").addEventListener("click",s=>{const i=s.target.closest(".cell");i&&Vf(i)}),Af()});
