(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eaa7e79"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Cu})),n.d(e,"b",(function(){return Nc})),n.d(e,"c",(function(){return lc})),n.d(e,"d",(function(){return tc})),n.d(e,"e",(function(){return iu})),n.d(e,"f",(function(){return Sc})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return Ac})),n.d(e,"i",(function(){return ou})),n.d(e,"j",(function(){return au})),n.d(e,"k",(function(){return F})),n.d(e,"l",(function(){return Ru})),n.d(e,"m",(function(){return Ba})),n.d(e,"n",(function(){return st})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return Wa})),n.d(e,"q",(function(){return v})),n.d(e,"r",(function(){return $})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return za})),n.d(e,"u",(function(){return zu})),n.d(e,"v",(function(){return eh})),n.d(e,"w",(function(){return th})),n.d(e,"x",(function(){return wc})),n.d(e,"y",(function(){return rc})),n.d(e,"z",(function(){return sc})),n.d(e,"A",(function(){return Za})),n.d(e,"B",(function(){return Gu})),n.d(e,"C",(function(){return Xu})),n.d(e,"D",(function(){return Ic})),n.d(e,"E",(function(){return ic})),n.d(e,"F",(function(){return mc})),n.d(e,"G",(function(){return pc})),n.d(e,"H",(function(){return bc})),n.d(e,"I",(function(){return Su})),n.d(e,"J",(function(){return _u})),n.d(e,"K",(function(){return fc})),n.d(e,"L",(function(){return Qu})),n.d(e,"M",(function(){return Pu})),n.d(e,"N",(function(){return Mu})),n.d(e,"O",(function(){return Vu})),n.d(e,"P",(function(){return qu})),n.d(e,"Q",(function(){return Uu})),n.d(e,"R",(function(){return ju})),n.d(e,"S",(function(){return nh})),n.d(e,"T",(function(){return wu})),n.d(e,"U",(function(){return vu})),n.d(e,"V",(function(){return Tc})),n.d(e,"W",(function(){return Ec})),n.d(e,"X",(function(){return $u})),n.d(e,"Y",(function(){return Hu})),n.d(e,"Z",(function(){return pu})),n.d(e,"ab",(function(){return du})),n.d(e,"bb",(function(){return ac})),n.d(e,"cb",(function(){return oc})),n.d(e,"db",(function(){return Ju})),n.d(e,"eb",(function(){return Zu})),n.d(e,"fb",(function(){return Bu})),n.d(e,"gb",(function(){return d})),n.d(e,"hb",(function(){return uu})),n.d(e,"ib",(function(){return Tu})),n.d(e,"jb",(function(){return Iu})),n.d(e,"kb",(function(){return Ku})),n.d(e,"lb",(function(){return vc})),n.d(e,"mb",(function(){return gu}));var r=n("5606"),s=n("ffa6"),i=n("abfd"),o=n("a8e9"),a=n("c7b2");
/**
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
 */
class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
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
 */
let u="9.0.2";
/**
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
 */const h=new i["b"]("@firebase/firestore");function l(){return h.logLevel}function d(t){h.setLogLevel(t)}function f(t,...e){if(h.logLevel<=i["a"].DEBUG){const n=e.map(p);h.debug(`Firestore (${u}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=i["a"].ERROR){const n=e.map(p);h.error(`Firestore (${u}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=i["a"].WARN){const n=e.map(p);h.warn(`Firestore (${u}): ${t}`,...n)}}function p(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function y(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||y()}function v(t,e){t||y()}function b(t,e){return t}
/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
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
 */class _{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class N{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new E;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new E,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new E)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new _(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new c(t)}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class x{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class C{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
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
 */function k(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */C.T=-1;class O{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=k(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function P(t){return t+"\0"}
/**
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
 */class F{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new F(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new F(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function V(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function q(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class j{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends j{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends j{construct(t,e,n){return new G(t,e,n)}static isValidIdentifier(t){return K.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}
/**
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
 */class z{constructor(t){this.fields=t,t.sort(G.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
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
 */function $(){return"undefined"!=typeof atob}
/**
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
 */class H{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new H(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new H(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}H.EMPTY_BYTE_STRING=new H("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(t){if(w(!!t),"string"==typeof t){let e=0;const n=Q.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Y(t.seconds),nanos:Y(t.nanos)}}function Y(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function J(t){return"string"==typeof t?H.fromBase64String(t):H.fromUint8Array(t)}
/**
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
 */function X(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Z(t){const e=t.mapValue.fields.__previous_value__;return X(e)?Z(e):e}function tt(t){const e=W(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}
/**
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
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(B.fromString(t))}static fromName(t){return new st(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new B(t.slice()))}}
/**
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
 */function it(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:10:y()}function ot(t,e){const n=it(t);if(n!==it(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tt(t).isEqual(tt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=W(t.timestampValue),r=W(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return J(t.bytesValue).isEqual(J(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Y(t.geoPointValue.latitude)===Y(e.geoPointValue.latitude)&&Y(t.geoPointValue.longitude)===Y(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Y(t.integerValue)===Y(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Y(t.doubleValue),r=Y(e.doubleValue);return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(V(n)!==V(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!ot(n[s],r[s])))return!1;return!0}(t,e);default:return y()}}function at(t,e){return void 0!==(t.values||[]).find(t=>ot(t,e))}function ct(t,e){const n=it(t),r=it(e);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Y(t.integerValue||t.doubleValue),r=Y(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ut(t.timestampValue,e.timestampValue);case 4:return ut(tt(t),tt(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=J(t),r=J(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=R(n[s],r[s]);if(0!==t)return t}return R(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R(Y(t.latitude),Y(e.latitude));return 0!==n?n:R(Y(t.longitude),Y(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=ct(n[s],r[s]);if(t)return t}return R(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=R(r[o],i[o]);if(0!==t)return t;const e=ct(n[r[o]],s[i[o]]);if(0!==e)return e}return R(r.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function ut(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=W(t),r=W(e),s=R(n.seconds,r.seconds);return 0!==s?s:R(n.nanos,r.nanos)}function ht(t){return lt(t)}function lt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=W(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?J(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,st.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=lt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${lt(t.fields[s])}`;return n+"}"}(t.mapValue):y();var e,n}function dt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ft(t){return!!t&&"integerValue"in t}function gt(t){return!!t&&"arrayValue"in t}function mt(t){return!!t&&"nullValue"in t}function pt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yt(t){return!!t&&"mapValue"in t}function wt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return q(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=wt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wt(e)}setAll(t){let e=G.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=wt(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());yt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];yt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){q(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new vt(wt(this.value))}}function bt(t){const e=[];return q(t.fields,(t,n)=>{const r=new G([t]);if(yt(n)){const t=bt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new z(e)
/**
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
 */}class It{constructor(t,e,n,r,s){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=s}static newInvalidDocument(t){return new It(t,0,M.min(),vt.empty(),0)}static newFoundDocument(t,e,n){return new It(t,1,e,n,0)}static newNoDocument(t,e){return new It(t,2,e,vt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,vt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new It(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Tt{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.A=null}}function Et(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Tt(t,e,n,r,s,i,o)}function _t(t){const e=b(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>xt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=qt(e.startAt)),e.endAt&&(t+="|ub:",t+=qt(e.endAt)),e.A=t}return e.A}function St(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+qt(t.startAt)),t.endAt&&(e+=", endAt: "+qt(t.endAt)),`Target(${e})`}function Nt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!jt(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ot(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kt(t.startAt,e.startAt)&&Kt(t.endAt,e.endAt)}function Dt(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class At extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Ct(t,e,n):"array-contains"===e?new Lt(t,n):"in"===e?new Pt(t,n):"not-in"===e?new Ft(t,n):"array-contains-any"===e?new Mt(t,n):new At(t,e,n)}static R(t,e,n){return"in"===e?new kt(t,n):new Ot(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(ct(e,this.value)):null!==e&&it(this.value)===it(e)&&this.P(ct(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function xt(t){return t.field.canonicalString()+t.op.toString()+ht(t.value)}class Ct extends At{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.P(e)}}class kt extends At{constructor(t,e){super(t,"in",e),this.keys=Rt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ot extends At{constructor(t,e){super(t,"not-in",e),this.keys=Rt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Rt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>st.fromName(t.referenceValue))}class Lt extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gt(e)&&at(e.arrayValue,this.value)}}class Pt extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&at(this.value.arrayValue,e)}}class Ft extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(at(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!at(this.value.arrayValue,e)}}class Mt extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>at(this.value.arrayValue,t))}}class Vt{constructor(t,e){this.position=t,this.before=e}}function qt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ht(t)).join(",")}`}class Ut{constructor(t,e="asc"){this.field=t,this.dir=e}}function jt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bt(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):ct(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Kt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ot(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Gt{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function zt(t,e,n,r,s,i,o,a){return new Gt(t,e,n,r,s,i,o,a)}function $t(t){return new Gt(t)}function Ht(t){return!et(t.limit)&&"F"===t.limitType}function Qt(t){return!et(t.limit)&&"L"===t.limitType}function Wt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Jt(t){return null!==t.collectionGroup}function Xt(t){const e=b(t);if(null===e.V){e.V=[];const t=Yt(e),n=Wt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Ut(t)),e.V.push(new Ut(G.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Ut(G.keyField(),t))}}}return e.V}function Zt(t){const e=b(t);if(!e.S)if("F"===e.limitType)e.S=Et(e.path,e.collectionGroup,Xt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Xt(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Ut(s.field,e))}const n=e.endAt?new Vt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Vt(e.startAt.position,!e.startAt.before):null;e.S=Et(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function te(t,e,n){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ee(t,e){return Nt(Zt(t),Zt(e))&&t.limitType===e.limitType}function ne(t){return`${_t(Zt(t))}|lt:${t.limitType}`}function re(t){return`Query(target=${St(Zt(t))}; limitType=${t.limitType})`}function se(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Bt(t.startAt,Xt(t),e))&&(!t.endAt||!Bt(t.endAt,Xt(t),e))}(t,e)}function ie(t){return(e,n)=>{let r=!1;for(const s of Xt(t)){const t=oe(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function oe(t,e,n){const r=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?ct(r,s):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
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
 */function ae(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function ce(t){return{integerValue:""+t}}function ue(t,e){return rt(e)?ce(e):ae(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class he{constructor(){this._=void 0}}function le(t,e,n){return t instanceof ge?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof me?pe(t,e):t instanceof ye?we(t,e):function(t,e){const n=fe(t,e),r=be(n)+be(t.C);return ft(n)&&ft(t.C)?ce(r):ae(t.N,r)}(t,e)}function de(t,e,n){return t instanceof me?pe(t,e):t instanceof ye?we(t,e):n}function fe(t,e){return t instanceof ve?ft(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ge extends he{}class me extends he{constructor(t){super(),this.elements=t}}function pe(t,e){const n=Ie(e);for(const r of t.elements)n.some(t=>ot(t,r))||n.push(r);return{arrayValue:{values:n}}}class ye extends he{constructor(t){super(),this.elements=t}}function we(t,e){let n=Ie(e);for(const r of t.elements)n=n.filter(t=>!ot(t,r));return{arrayValue:{values:n}}}class ve extends he{constructor(t,e){super(),this.N=t,this.C=e}}function be(t){return Y(t.integerValue||t.doubleValue)}function Ie(t){return gt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class Te{constructor(t,e){this.field=t,this.transform=e}}function Ee(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof me&&e instanceof me||t instanceof ye&&e instanceof ye?L(t.elements,e.elements,ot):t instanceof ve&&e instanceof ve?ot(t.C,e.C):t instanceof ge&&e instanceof ge}(t.transform,e.transform)}class _e{constructor(t,e){this.version=t,this.transformResults=e}}class Se{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Se}static exists(t){return new Se(void 0,t)}static updateTime(t){return new Se(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ne(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class De{}function Ae(t,e,n){t instanceof Re?function(t,e,n){const r=t.value.clone(),s=Fe(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Ne(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Fe(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Pe(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function xe(t,e,n){t instanceof Re?function(t,e,n){if(!Ne(t.precondition,e))return;const r=t.value.clone(),s=Me(t.fieldTransforms,n,e);r.setAll(s),e.convertToFoundDocument(Oe(e),r).setHasLocalMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Ne(t.precondition,e))return;const r=Me(t.fieldTransforms,n,e),s=e.data;s.setAll(Pe(t)),s.setAll(r),e.convertToFoundDocument(Oe(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Ne(t.precondition,e)&&e.convertToNoDocument(M.min())}(t,e)}function Ce(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=fe(r.transform,t||null);null!=s&&(null==n&&(n=vt.empty()),n.set(r.field,s))}return n||null}function ke(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Ee(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Oe(t){return t.isFoundDocument()?t.version:M.min()}class Re extends De{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Le extends De{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Pe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fe(t,e,n){const r=new Map;w(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,de(o,a,n[s]))}return r}function Me(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,le(t,i,e))}return r}class Ve extends De{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class qe extends De{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class Ue{constructor(t){this.count=t}}
/**
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
 */var je,Be;function Ke(t){switch(t){case I.OK:return y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0;default:return y()}}function Ge(t){if(void 0===t)return g("GRPC error has no .code"),I.UNKNOWN;switch(t){case je.OK:return I.OK;case je.CANCELLED:return I.CANCELLED;case je.UNKNOWN:return I.UNKNOWN;case je.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case je.INTERNAL:return I.INTERNAL;case je.UNAVAILABLE:return I.UNAVAILABLE;case je.UNAUTHENTICATED:return I.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case je.NOT_FOUND:return I.NOT_FOUND;case je.ALREADY_EXISTS:return I.ALREADY_EXISTS;case je.PERMISSION_DENIED:return I.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case je.ABORTED:return I.ABORTED;case je.OUT_OF_RANGE:return I.OUT_OF_RANGE;case je.UNIMPLEMENTED:return I.UNIMPLEMENTED;case je.DATA_LOSS:return I.DATA_LOSS;default:return y()}}(Be=je||(je={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class ze{constructor(t,e){this.comparator=t,this.root=e||He.EMPTY}insert(t,e){return new ze(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new ze(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $e(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $e(this.root,t,this.comparator,!1)}getReverseIterator(){return new $e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $e(this.root,t,this.comparator,!0)}}class $e{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:He.RED,this.left=null!=r?r:He.EMPTY,this.right=null!=s?s:He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new He(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return He.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1,He.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Qe{constructor(t){this.comparator=t,this.data=new ze(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new We(this.data.getIterator())}getIteratorFrom(t){return new We(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Qe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Qe(this.comparator);return e.data=t,e}}class We{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */const Ye=new ze(st.comparator);function Je(){return Ye}const Xe=new ze(st.comparator);function Ze(){return Xe}const tn=new ze(st.comparator);function en(){return tn}const nn=new Qe(st.comparator);function rn(...t){let e=nn;for(const n of t)e=e.add(n);return e}const sn=new Qe(R);function on(){return sn}
/**
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
 */class an{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,cn.createSynthesizedTargetChangeForCurrentChange(t,e)),new an(M.min(),n,on(),Je(),rn())}}class cn{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new cn(H.EMPTY_BYTE_STRING,e,rn(),rn(),rn())}}
/**
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
 */class un{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class hn{constructor(t,e){this.targetId=t,this.O=e}}class ln{constructor(t,e,n=H.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class dn{constructor(){this.F=0,this.M=mn(),this.L=H.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=rn(),e=rn(),n=rn();return this.M.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new cn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=mn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class fn{constructor(t){this.tt=t,this.et=new Map,this.nt=Je(),this.st=gn(),this.it=new Qe(R)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Dt(t))if(0===n){const n=new st(t.path);this.at(e,n,It.newNoDocument(n,M.min()))}else w(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const s=this.dt(r);if(s){if(n.current&&Dt(s.target)){const e=new st(s.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,It.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=rn();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new an(t,e,this.it,this.nt,n);return this.nt=Je(),this.st=gn(),this.it=new Qe(R),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new dn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Qe(R),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new dn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function gn(){return new ze(st.comparator)}function mn(){return new ze(st.comparator)}
/**
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
 */const pn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),yn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class wn{constructor(t,e){this.databaseId=t,this.D=e}}function vn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bn(t,e){return t.D?e.toBase64():e.toUint8Array()}function In(t,e){return vn(t,e.toTimestamp())}function Tn(t){return w(!!t),M.fromTimestamp(function(t){const e=W(t);return new F(e.seconds,e.nanos)}(t))}function En(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function _n(t){const e=B.fromString(t);return w(Xn(e)),e}function Sn(t,e){return En(t.databaseId,e.path)}function Nn(t,e){const n=_n(e);if(n.get(1)!==t.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(Cn(n))}function Dn(t,e){return En(t.databaseId,e)}function An(t){const e=_n(t);return 4===e.length?B.emptyPath():Cn(e)}function xn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function kn(t,e,n){return{name:Sn(t,e),fields:n.value.mapValue.fields}}function On(t,e,n){const r=Nn(t,e.name),s=Tn(e.updateTime),i=new vt({mapValue:{fields:e.fields}}),o=It.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Rn(t,e){return"found"in e?function(t,e){w(!!e.found),e.found.name,e.found.updateTime;const n=Nn(t,e.found.name),r=Tn(e.found.updateTime),s=new vt({mapValue:{fields:e.found.fields}});return It.newFoundDocument(n,r,s)}(t,e):"missing"in e?function(t,e){w(!!e.missing),w(!!e.readTime);const n=Nn(t,e.missing),r=Tn(e.readTime);return It.newNoDocument(n,r)}(t,e):y()}function Ln(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.D?(w(void 0===e||"string"==typeof e),H.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),H.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?I.UNKNOWN:Ge(t.code);return new T(e,t.message||"")}(o);n=new ln(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nn(t,r.document.name),i=Tn(r.document.updateTime),o=new vt({mapValue:{fields:r.document.fields}}),a=It.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new un(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nn(t,r.document),i=r.readTime?Tn(r.readTime):M.min(),o=It.newNoDocument(s,i),a=r.removedTargetIds||[];n=new un([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nn(t,r.document),i=r.removedTargetIds||[];n=new un([],i,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Ue(r),i=t.targetId;n=new hn(i,s)}}return n}function Pn(t,e){let n;if(e instanceof Re)n={update:kn(t,e.key,e.value)};else if(e instanceof Ve)n={delete:Sn(t,e.key)};else if(e instanceof Le)n={update:kn(t,e.key,e.data),updateMask:Jn(e.fieldMask)};else{if(!(e instanceof qe))return y();n={verify:Sn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ge)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof me)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ye)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),increment:n.C};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:In(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Fn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Se.updateTime(Tn(t.updateTime)):void 0!==t.exists?Se.exists(t.exists):Se.none()}(e.currentDocument):Se.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)w("REQUEST_TIME"===e.setToServerValue),n=new ge;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new me(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new ye(t)}else"increment"in e?n=new ve(t,e.increment):y();const r=G.fromServerFormat(e.fieldPath);return new Te(r,n)}(t,e)):[];if(e.update){e.update.name;const s=Nn(t,e.update.name),i=new vt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new z(e.map(t=>G.fromServerFormat(t)))}(e.updateMask);return new Le(s,i,t,n,r)}return new Re(s,i,n,r)}if(e.delete){const r=Nn(t,e.delete);return new Ve(r,n)}if(e.verify){const r=Nn(t,e.verify);return new qe(r,n)}return y()}function Mn(t,e){return t&&t.length>0?(w(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Tn(t.updateTime):Tn(e);return n.isEqual(M.min())&&(n=Tn(e)),new _e(n,t.transformResults||[])}(t,e))):[]}function Vn(t,e){return{documents:[Dn(t,e.path)]}}function qn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Dn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(pt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NAN"}};if(mt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(pt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NAN"}};if(mt(t.value))return{unaryFilter:{field:Hn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hn(t.field),op:$n(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Hn(t.field),direction:zn(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.D||et(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Kn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Kn(e.endAt)),n}function Un(t){let e=An(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Bn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Ut(Qn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,et(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Gn(n.startAt));let u=null;return n.endAt&&(u=Gn(n.endAt)),zt(e,s,o,i,a,"F",c,u)}function jn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bn(t){return t?void 0!==t.unaryFilter?[Yn(t)]:void 0!==t.fieldFilter?[Wn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Bn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Kn(t){return{before:t.before,values:t.position}}function Gn(t){const e=!!t.before,n=t.values||[];return new Vt(n,e)}function zn(t){return pn[t]}function $n(t){return yn[t]}function Hn(t){return{fieldPath:t.canonicalString()}}function Qn(t){return G.fromServerFormat(t.fieldPath)}function Wn(t){return At.create(Qn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yn(t){switch(t.unaryFilter.op){case"IS_NAN":Qn(t.unaryFilter.field);return At.create(r["_removeServiceInstance"],"==",{doubleValue:NaN});case"IS_NULL":Qn(t.unaryFilter.field);return At.create(r["_registerComponent"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Qn(t.unaryFilter.field);return At.create(r["registerVersion"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Qn(t.unaryFilter.field);return At.create(r["SDK_VERSION"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return y()}}function Jn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */function Zn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=er(e)),e=tr(t.get(n),e);return er(e)}function tr(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function er(t){return t+""}function nr(t){const e=t.length;if(w(e>=2),2===e)return w(""===t.charAt(0)&&""===t.charAt(1)),B.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&y(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=t.substring(i,e),s+="\0";break;case"":s+=t.substring(i,e+1);break;default:y()}i=e+2}return new B(r)}
/**
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
 */class rr{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class sr{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}sr.store="owner",sr.key="owner";class ir{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}ir.store="mutationQueues",ir.keyPath="userId";class or{constructor(t,e,n,r,s){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=s}}or.store="mutations",or.keyPath="batchId",or.userMutationsIndex="userMutationsIndex",or.userMutationsKeyPath=["userId","batchId"];class ar{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Zn(e)]}static key(t,e,n){return[t,Zn(e),n]}}ar.store="documentMutations",ar.PLACEHOLDER=new ar;class cr{constructor(t,e){this.path=t,this.readTime=e}}class ur{constructor(t,e){this.path=t,this.version=e}}class hr{constructor(t,e,n,r,s,i){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=s,this.parentPath=i}}hr.store="remoteDocuments",hr.readTimeIndex="readTimeIndex",hr.readTimeIndexPath="readTime",hr.collectionReadTimeIndex="collectionReadTimeIndex",hr.collectionReadTimeIndexPath=["parentPath","readTime"];class lr{constructor(t){this.byteSize=t}}lr.store="remoteDocumentGlobal",lr.key="remoteDocumentGlobalKey";class dr{constructor(t,e,n,r,s,i,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=i,this.query=o}}dr.store="targets",dr.keyPath="targetId",dr.queryTargetsIndexName="queryTargetsIndex",dr.queryTargetsKeyPath=["canonicalId","targetId"];class fr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}fr.store="targetDocuments",fr.keyPath=["targetId","path"],fr.documentTargetsIndex="documentTargetsIndex",fr.documentTargetsKeyPath=["path","targetId"];class gr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}gr.key="targetGlobalKey",gr.store="targetGlobal";class mr{constructor(t,e){this.collectionId=t,this.parent=e}}mr.store="collectionParents",mr.keyPath=["collectionId","parent"];class pr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}pr.store="clientMetadata",pr.keyPath="clientId";class yr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}yr.store="bundles",yr.keyPath="bundleId";class wr{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}wr.store="namedQueries",wr.keyPath="name";const vr=[ir.store,or.store,ar.store,hr.store,dr.store,sr.store,gr.store,fr.store,pr.store,lr.store,mr.store,yr.store,wr.store],br="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ir{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
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
 */class Tr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Tr?e:Tr.resolve(e)}catch(t){return Tr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.reject(e)}static resolve(t){return new Tr((e,n)=>{e(t)})}static reject(t){return new Tr((e,n)=>{n(t)})}static waitFor(t){return new Tr((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=Tr.resolve(!1);for(const n of t)e=e.next(t=>t?Tr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
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
 */class Er{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.Tt=new E,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{e.error?this.Tt.reject(new Nr(t,e.error)):this.Tt.resolve()},this.transaction.onerror=e=>{const n=kr(e.target.error);this.Tt.reject(new Nr(t,n))}}static open(t,e,n,r){try{return new Er(e,t.transaction(r,n))}catch(t){throw new Nr(e,t)}}get It(){return this.Tt.promise}abort(t){t&&this.Tt.reject(t),this.aborted||(f("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Ar(e)}}class _r{constructor(t,e,n){this.name=t,this.version=e,this.At=n,12.2===_r.Rt(Object(o["j"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return f("SimpleDb","Removing database:",t),xr(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if("undefined"==typeof indexedDB)return!1;if(_r.Pt())return!0;const t=Object(o["j"])(),e=_r.Rt(t),n=0<e&&e<10,r=_r.vt(t),s=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static Pt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/pinguino/"}))||void 0===e?void 0:e.Vt)}static St(t,e){return t.store(e)}static Rt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(t){return this.db||(f("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Nr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Nr(t,r))},r.onupgradeneeded=t=>{f("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.At.Ct(e,r.transaction,t.oldVersion,this.version).next(()=>{f("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=t=>this.Nt(t)),this.db}xt(t){this.Nt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const s="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.Dt(t);const e=Er.open(this.db,t,s?"readonly":"readwrite",n),i=r(e).catch(t=>(e.abort(t),Tr.reject(t))).toPromise();return i.catch(()=>{}),await e.It,i}catch(t){const e="FirebaseError"!==t.name&&i<3;if(f("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sr{constructor(t){this.kt=t,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(t){this.kt=t}done(){this.$t=!0}Mt(t){this.Ot=t}delete(){return xr(this.kt.delete())}}class Nr extends T{constructor(t,e){super(I.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Dr(t){return"IndexedDbTransactionError"===t.name}class Ar{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(f("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(f("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),xr(n)}add(t){return f("SimpleDb","ADD",this.store.name,t,t),xr(this.store.add(t))}get(t){return xr(this.store.get(t)).next(e=>(void 0===e&&(e=null),f("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return f("SimpleDb","DELETE",this.store.name,t),xr(this.store.delete(t))}count(){return f("SimpleDb","COUNT",this.store.name),xr(this.store.count())}Lt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Bt(n,(t,e)=>{r.push(e)}).next(()=>r)}Ut(t,e){f("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.qt=!1;const r=this.cursor(n);return this.Bt(r,(t,e,n)=>n.delete())}Kt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Bt(r,e)}jt(t){const e=this.cursor({});return new Tr((n,r)=>{e.onerror=t=>{const e=kr(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}Bt(t,e){const n=[];return new Tr((r,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void r();const i=new Sr(s),o=e(s.primaryKey,s.value,i);if(o instanceof Tr){const t=o.catch(t=>(i.done(),Tr.reject(t)));n.push(t)}i.isDone?r():null===i.Ft?s.continue():s.continue(i.Ft)}}).next(()=>Tr.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.qt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function xr(t){return new Tr((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=kr(t.target.error);n(e)}})}let Cr=!1;function kr(t){const e=_r.Rt(Object(o["j"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cr||(Cr=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
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
 */class Or extends Ir{constructor(t,e){super(),this.Qt=t,this.currentSequenceNumber=e}}function Rr(t,e){const n=b(t);return _r.St(n.Qt,e)}
/**
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
 */class Lr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ae(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),rn())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>ke(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>ke(t,e))}}class Pr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){w(t.mutations.length===n.length);let r=en();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Pr(t,e,n,r)}}
/**
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
 */class Fr{constructor(t,e,n,r,s=M.min(),i=M.min(),o=H.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Fr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class Mr{constructor(t){this.Wt=t}}function Vr(t,e){if(e.document)return On(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=st.fromSegments(e.noDocument.path),n=Kr(e.noDocument.readTime),r=It.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=st.fromSegments(e.unknownDocument.path),n=Kr(e.unknownDocument.version);return It.newUnknownDocument(t,n)}return y()}function qr(t,e,n){const r=Ur(n),s=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:Sn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:vn(t,e.version.toTimestamp())}}(t.Wt,e),i=e.hasCommittedMutations;return new hr(null,null,n,i,r,s)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Br(e.version),i=e.hasCommittedMutations;return new hr(null,new cr(t,n),null,i,r,s)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Br(e.version);return new hr(new ur(t,n),null,null,!0,r,s)}return y()}function Ur(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function jr(t){const e=new F(t[0],t[1]);return M.fromTimestamp(e)}function Br(t){const e=t.toTimestamp();return new rr(e.seconds,e.nanoseconds)}function Kr(t){const e=new F(t.seconds,t.nanoseconds);return M.fromTimestamp(e)}function Gr(t,e){const n=(e.baseMutations||[]).map(e=>Fn(t.Wt,e));for(let i=0;i<e.mutations.length-1;++i){const t=e.mutations[i];if(i+1<e.mutations.length&&void 0!==e.mutations[i+1].transform){const n=e.mutations[i+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(e=>Fn(t.Wt,e)),s=F.fromMillis(e.localWriteTimeMs);return new Lr(e.batchId,s,n,r)}function zr(t){const e=Kr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Kr(t.lastLimboFreeSnapshotVersion):M.min();let r;var s;return void 0!==t.query.documents?(w(1===(s=t.query).documents.length),r=Zt($t(An(s.documents[0])))):r=function(t){return Zt(Un(t))}(t.query),new Fr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,H.fromBase64String(t.resumeToken))}function $r(t,e){const n=Br(e.snapshotVersion),r=Br(e.lastLimboFreeSnapshotVersion);let s;s=Dt(e.target)?Vn(t.Wt,e.target):qn(t.Wt,e.target);const i=e.resumeToken.toBase64();return new dr(e.targetId,_t(e.target),n,i,e.sequenceNumber,r,s)}function Hr(t){const e=Un({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?te(e,e.limit,"L"):e}
/**
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
 */class Qr{getBundleMetadata(t,e){return Wr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:Kr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Wr(t).put({bundleId:(n=e).id,createTime:Br(Tn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Yr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Hr(e.bundledQuery),readTime:Kr(e.readTime)};var e})}saveNamedQuery(t,e){return Yr(t).put(function(t){return{name:t.name,readTime:Br(Tn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Wr(t){return Rr(t,yr.store)}function Yr(t){return Rr(t,wr.store)}
/**
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
 */class Jr{constructor(){this.Gt=new Xr}addToCollectionParentIndex(t,e){return this.Gt.add(e),Tr.resolve()}getCollectionParents(t,e){return Tr.resolve(this.Gt.getEntries(e))}}class Xr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Qe(B.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Qe(B.comparator)).toArray()}}
/**
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
 */class Zr{constructor(){this.zt=new Xr}addToCollectionParentIndex(t,e){if(!this.zt.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.zt.add(e)});const s={collectionId:n,parent:Zn(r)};return ts(t).put(s)}return Tr.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[P(e),""],!1,!0);return ts(t).Lt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(nr(r.parent))}return n})}}function ts(t){return Rr(t,mr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const es={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ns{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ns(t,ns.DEFAULT_COLLECTION_PERCENTILE,ns.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function rs(t,e,n){const r=t.store(or.store),s=t.store(ar.store),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},(t,e,n)=>(a++,n.delete()));i.push(c.next(()=>{w(1===a)}));const u=[];for(const h of n.mutations){const t=ar.key(e,h.key.path,n.batchId);i.push(s.delete(t)),u.push(h.key)}return Tr.waitFor(i).next(()=>u)}function ss(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw y();e=t.noDocument}return JSON.stringify(e).length}
/**
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
 */ns.DEFAULT_COLLECTION_PERCENTILE=10,ns.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ns.DEFAULT=new ns(41943040,ns.DEFAULT_COLLECTION_PERCENTILE,ns.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ns.DISABLED=new ns(-1,0,0);class is{constructor(t,e,n,r){this.userId=t,this.N=e,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(t,e,n,r){w(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new is(s,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return as(t).Kt({index:or.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const s=cs(t),i=as(t);return i.add({}).next(o=>{w("number"==typeof o);const a=new Lr(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>Pn(t.Wt,e)),s=n.mutations.map(e=>Pn(t.Wt,e));return new or(e,n.batchId,n.localWriteTime.toMillis(),r,s)}(this.N,this.userId,a),u=[];let h=new Qe((t,e)=>R(t.canonicalString(),e.canonicalString()));for(const t of r){const e=ar.key(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(i.put(c)),u.push(s.put(e,ar.PLACEHOLDER))}return h.forEach(e=>{u.push(this.Ht.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),Tr.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return as(t).get(e).next(t=>t?(w(t.userId===this.userId),Gr(this.N,t)):null)}Xt(t,e){return this.Jt[e]?Tr.resolve(this.Jt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Jt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return as(t).Kt({index:or.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(w(e.batchId>=n),s=Gr(this.N,e)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return as(t).Kt({index:or.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return as(t).Lt(or.userMutationsIndex,e).next(t=>t.map(t=>Gr(this.N,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ar.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),s=[];return cs(t).Kt({range:r},(n,r,i)=>{const[o,a,c]=n,u=nr(a);if(o===this.userId&&e.path.isEqual(u))return as(t).get(c).next(t=>{if(!t)throw y();w(t.userId===this.userId),s.push(Gr(this.N,t))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(R);const r=[];return e.forEach(e=>{const s=ar.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(s),o=cs(t).Kt({range:i},(t,r,s)=>{const[i,o,a]=t,c=nr(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):s.done()});r.push(o)}),Tr.waitFor(r).next(()=>this.Zt(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,s=ar.prefixForPath(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Qe(R);return cs(t).Kt({range:i},(t,e,s)=>{const[i,a,c]=t,u=nr(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()}).next(()=>this.Zt(t,o))}Zt(t,e){const n=[],r=[];return e.forEach(e=>{r.push(as(t).get(e).next(t=>{if(null===t)throw y();w(t.userId===this.userId),n.push(Gr(this.N,t))}))}),Tr.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return rs(t.Qt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.te(e.batchId)}),Tr.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}te(t){delete this.Jt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Tr.resolve();const n=IDBKeyRange.lowerBound(ar.prefixForUser(this.userId)),r=[];return cs(t).Kt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=nr(t[1]);r.push(e)}else n.done()}).next(()=>{w(0===r.length)})})}containsKey(t,e){return os(t,this.userId,e)}ee(t){return us(t).get(this.userId).next(t=>t||new ir(this.userId,-1,""))}}function os(t,e,n){const r=ar.prefixForPath(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return cs(t).Kt({range:i,qt:!0},(t,n,r)=>{const[i,a,c]=t;i===e&&a===s&&(o=!0),r.done()}).next(()=>o)}function as(t){return Rr(t,or.store)}function cs(t){return Rr(t,ar.store)}function us(t){return Rr(t,ir.store)}
/**
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
 */class hs{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new hs(0)}static ie(){return new hs(-1)}}
/**
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
 */class ls{constructor(t,e){this.referenceDelegate=t,this.N=e}allocateTargetId(t){return this.re(t).next(e=>{const n=new hs(e.highestTargetId);return e.highestTargetId=n.next(),this.oe(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.re(t).next(t=>M.fromTimestamp(new F(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.re(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.re(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.oe(t,r)))}addTargetData(t,e){return this.ae(t,e).next(()=>this.re(t).next(n=>(n.targetCount+=1,this.ce(e,n),this.oe(t,n))))}updateTargetData(t,e){return this.ae(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>ds(t).delete(e.targetId)).next(()=>this.re(t)).next(e=>(w(e.targetCount>0),e.targetCount-=1,this.oe(t,e)))}removeTargets(t,e,n){let r=0;const s=[];return ds(t).Kt((i,o)=>{const a=zr(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(t,a)))}).next(()=>Tr.waitFor(s)).next(()=>r)}forEachTarget(t,e){return ds(t).Kt((t,n)=>{const r=zr(n);e(r)})}re(t){return fs(t).get(gr.key).next(t=>(w(null!==t),t))}oe(t,e){return fs(t).put(gr.key,e)}ae(t,e){return ds(t).put($r(this.N,e))}ce(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.re(t).next(t=>t.targetCount)}getTargetData(t,e){const n=_t(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return ds(t).Kt({range:r,index:dr.queryTargetsIndexName},(t,n,r)=>{const i=zr(n);Nt(e,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(t,e,n){const r=[],s=gs(t);return e.forEach(e=>{const i=Zn(e.path);r.push(s.put(new fr(n,i))),r.push(this.referenceDelegate.addReference(t,n,e))}),Tr.waitFor(r)}removeMatchingKeys(t,e,n){const r=gs(t);return Tr.forEach(e,e=>{const s=Zn(e.path);return Tr.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=gs(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=gs(t);let s=rn();return r.Kt({range:n,qt:!0},(t,e,n)=>{const r=nr(t[1]),i=new st(r);s=s.add(i)}).next(()=>s)}containsKey(t,e){const n=Zn(e.path),r=IDBKeyRange.bound([n],[P(n)],!1,!0);let s=0;return gs(t).Kt({index:fr.documentTargetsIndex,qt:!0,range:r},([t,e],n,r)=>{0!==t&&(s++,r.done())}).next(()=>s>0)}Et(t,e){return ds(t).get(e).next(t=>t?zr(t):null)}}function ds(t){return Rr(t,dr.store)}function fs(t){return Rr(t,gr.store)}function gs(t){return Rr(t,fr.store)}
/**
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
 */async function ms(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==br)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */function ps([t,e],[n,r]){const s=R(t,n);return 0===s?R(e,r):s}class ys{constructor(t){this.ue=t,this.buffer=new Qe(ps),this.he=0}le(){return++this.he}fe(t){const e=[t,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();ps(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ws{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.de=!1,this.we=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(t)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(t){const e=this.de?3e5:6e4;f("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.we=null,this.de=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Dr(t)?f("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ms(t)}await this._e(t)})}}class vs{constructor(t,e){this.me=t,this.params=e}calculateTargetCount(t,e){return this.me.ge(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Tr.resolve(C.T);const n=new ys(e);return this.me.forEachTarget(t,t=>n.fe(t.sequenceNumber)).next(()=>this.me.ye(t,t=>n.fe(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.me.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.me.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector","Garbage collection skipped; disabled"),Tr.resolve(es)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(f("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),es):this.pe(t,e))}getCacheSize(t){return this.me.getCacheSize(t)}pe(t,e){let n,r,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(f("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(s=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),l()<=i["a"].DEBUG&&f("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${s} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-h}ms`),Tr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t})))}}
/**
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
 */class bs{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new vs(t,e)}(this,e)}ge(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.ye(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}ye(t,e){return this.Te(t,(t,n)=>e(n))}addReference(t,e,n){return Is(t,n)}removeReference(t,e,n){return Is(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Is(t,e)}Ie(t,e){return function(t,e){let n=!1;return us(t).jt(r=>os(t,r,e).next(t=>(t&&(n=!0),Tr.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Te(t,(i,o)=>{if(o<=e){const e=this.Ie(t,i).next(e=>{if(!e)return s++,n.getEntry(t,i).next(()=>(n.removeEntry(i),gs(t).delete([0,Zn(i.path)])))});r.push(e)}}).next(()=>Tr.waitFor(r)).next(()=>n.apply(t)).next(()=>s)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Is(t,e)}Te(t,e){const n=gs(t);let r,s=C.T;return n.Kt({index:fr.documentTargetsIndex},([t,n],{path:i,sequenceNumber:o})=>{0===t?(s!==C.T&&e(new st(nr(r)),s),s=o,r=i):s=C.T}).next(()=>{s!==C.T&&e(new st(nr(r)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Is(t,e){return gs(t).put(function(t,e){return new fr(0,Zn(t.path),e)}(e,t.currentSequenceNumber))}
/**
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
 */class Ts{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){q(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return U(this.inner)}}
/**
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
 */class Es{constructor(){this.changes=new Ts(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:M.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:It.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Tr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */class _s{constructor(t,e){this.N=t,this.Ht=e}addEntry(t,e,n){return Ds(t).put(As(e),n)}removeEntry(t,e){const n=Ds(t),r=As(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Ae(t,n)))}getEntry(t,e){return Ds(t).get(As(e)).next(t=>this.Re(e,t))}be(t,e){return Ds(t).get(As(e)).next(t=>({document:this.Re(e,t),size:ss(t)}))}getEntries(t,e){let n=Je();return this.Pe(t,e,(t,e)=>{const r=this.Re(t,e);n=n.insert(t,r)}).next(()=>n)}ve(t,e){let n=Je(),r=new ze(st.comparator);return this.Pe(t,e,(t,e)=>{const s=this.Re(t,e);n=n.insert(t,s),r=r.insert(t,ss(e))}).next(()=>({documents:n,Ve:r}))}Pe(t,e,n){if(e.isEmpty())return Tr.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),s=e.getIterator();let i=s.getNext();return Ds(t).Kt({range:r},(t,e,r)=>{const o=st.fromSegments(t);for(;i&&st.comparator(i,o)<0;)n(i,null),i=s.getNext();i&&i.isEqual(o)&&(n(i,e),i=s.hasNext()?s.getNext():null),i?r.Mt(i.path.toArray()):r.done()}).next(()=>{for(;i;)n(i,null),i=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=Je();const s=e.path.length+1,i={};if(n.isEqual(M.min())){const t=e.path.toArray();i.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=Ur(n);i.range=IDBKeyRange.lowerBound([t,r],!0),i.index=hr.collectionReadTimeIndex}return Ds(t).Kt(i,(t,n,i)=>{if(t.length!==s)return;const o=Vr(this.N,n);e.path.isPrefixOf(o.key.path)?se(e,o)&&(r=r.insert(o.key,o)):i.done()}).next(()=>r)}newChangeBuffer(t){return new Ss(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Ns(t).get(lr.key).next(t=>(w(!!t),t))}Ae(t,e){return Ns(t).put(lr.key,e)}Re(t,e){if(e){const t=Vr(this.N,e);if(!t.isNoDocument()||!t.version.isEqual(M.min()))return t}return It.newInvalidDocument(t)}}class Ss extends Es{constructor(t,e){super(),this.Se=t,this.trackRemovals=e,this.De=new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Qe((t,e)=>R(t.canonicalString(),e.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.De.get(s);if(i.document.isValidDocument()){const a=qr(this.Se.N,i.document,this.getReadTime(s));r=r.add(s.path.popLast());const c=ss(a);n+=c-o,e.push(this.Se.addEntry(t,s,a))}else if(n-=o,this.trackRemovals){const n=qr(this.Se.N,It.newNoDocument(s,M.min()),this.getReadTime(s));e.push(this.Se.addEntry(t,s,n))}else e.push(this.Se.removeEntry(t,s))}),r.forEach(n=>{e.push(this.Se.Ht.addToCollectionParentIndex(t,n))}),e.push(this.Se.updateMetadata(t,n)),Tr.waitFor(e)}getFromCache(t,e){return this.Se.be(t,e).next(t=>(this.De.set(e,t.size),t.document))}getAllFromCache(t,e){return this.Se.ve(t,e).next(({documents:t,Ve:e})=>(e.forEach((t,e)=>{this.De.set(t,e)}),t))}}function Ns(t){return Rr(t,lr.store)}function Ds(t){return Rr(t,hr.store)}function As(t){return t.path.toArray()}
/**
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
 */class xs{constructor(t){this.N=t}Ct(t,e,n,r){w(n<r&&n>=0&&r<=11);const s=new Er("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(sr.store)}(t),function(t){t.createObjectStore(ir.store,{keyPath:ir.keyPath}),t.createObjectStore(or.store,{keyPath:or.keyPath,autoIncrement:!0}).createIndex(or.userMutationsIndex,or.userMutationsKeyPath,{unique:!0}),t.createObjectStore(ar.store)}(t),Cs(t),function(t){t.createObjectStore(hr.store)}(t));let i=Tr.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(fr.store),t.deleteObjectStore(dr.store),t.deleteObjectStore(gr.store)}(t),Cs(t)),i=i.next(()=>function(t){const e=t.store(gr.store),n=new gr(0,0,M.min().toTimestamp(),0);return e.put(gr.key,n)}(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>function(t,e){return e.store(or.store).Lt().next(n=>{t.deleteObjectStore(or.store),t.createObjectStore(or.store,{keyPath:or.keyPath,autoIncrement:!0}).createIndex(or.userMutationsIndex,or.userMutationsKeyPath,{unique:!0});const r=e.store(or.store),s=n.map(t=>r.put(t));return Tr.waitFor(s)})}(t,s))),i=i.next(()=>{!function(t){t.createObjectStore(pr.store,{keyPath:pr.keyPath})}(t)})),n<5&&r>=5&&(i=i.next(()=>this.Ce(s))),n<6&&r>=6&&(i=i.next(()=>(function(t){t.createObjectStore(lr.store)}(t),this.Ne(s)))),n<7&&r>=7&&(i=i.next(()=>this.xe(s))),n<8&&r>=8&&(i=i.next(()=>this.ke(t,s))),n<9&&r>=9&&(i=i.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(hr.store);e.createIndex(hr.readTimeIndex,hr.readTimeIndexPath,{unique:!1}),e.createIndex(hr.collectionReadTimeIndex,hr.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(i=i.next(()=>this.$e(s))),n<11&&r>=11&&(i=i.next(()=>{!function(t){t.createObjectStore(yr.store,{keyPath:yr.keyPath})}(t),function(t){t.createObjectStore(wr.store,{keyPath:wr.keyPath})}
/**
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
 */(t)})),i}Ne(t){let e=0;return t.store(hr.store).Kt((t,n)=>{e+=ss(n)}).next(()=>{const n=new lr(e);return t.store(lr.store).put(lr.key,n)})}Ce(t){const e=t.store(ir.store),n=t.store(or.store);return e.Lt().next(e=>Tr.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Lt(or.userMutationsIndex,r).next(n=>Tr.forEach(n,n=>{w(n.userId===e.userId);const r=Gr(this.N,n);return rs(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(fr.store),n=t.store(hr.store);return t.store(gr.store).get(gr.key).next(t=>{const r=[];return n.Kt((n,s)=>{const i=new B(n),o=function(t){return[0,Zn(t)]}(i);r.push(e.get(o).next(n=>n?Tr.resolve():(n=>e.put(new fr(0,Zn(n),t.highestListenSequenceNumber)))(i)))}).next(()=>Tr.waitFor(r))})}ke(t,e){t.createObjectStore(mr.store,{keyPath:mr.keyPath});const n=e.store(mr.store),r=new Xr,s=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:Zn(r)})}};return e.store(hr.store).Kt({qt:!0},(t,e)=>{const n=new B(t);return s(n.popLast())}).next(()=>e.store(ar.store).Kt({qt:!0},([t,e,n],r)=>{const i=nr(e);return s(i.popLast())}))}$e(t){const e=t.store(dr.store);return e.Kt((t,n)=>{const r=zr(n),s=$r(this.N,r);return e.put(s)})}}function Cs(t){t.createObjectStore(fr.store,{keyPath:fr.keyPath}).createIndex(fr.documentTargetsIndex,fr.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(dr.store,{keyPath:dr.keyPath}).createIndex(dr.queryTargetsIndexName,dr.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(gr.store)}const ks="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Os{constructor(t,e,n,r,s,i,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=s,this.window=i,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=t=>Promise.resolve(),!Os.bt())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new bs(this,r),this.We=e+"main",this.N=new Mr(a),this.Ge=new _r(this.We,11,new xs(this.N)),this.ze=new ls(this.referenceDelegate,this.N),this.Ht=new Zr,this.He=function(t,e){return new _s(t,e)}(this.N,this.Ht),this.Je=new Qr,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,ks);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.ze.getHighestSequenceNumber(t))}).then(t=>{this.Le=new C(t,this.Fe)}).then(()=>{this.Be=!0}).catch(t=>(this.Ge&&this.Ge.close(),Promise.reject(t)))}nn(t){return this.Qe=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ge.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Ls(t).put(new pr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(t)).next(e=>this.isPrimary&&!e?this.on(t).next(()=>!1):!!e&&this.an(t).next(()=>!0))).catch(t=>{if(Dr(t))return f("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return f("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.Qe(t)),this.isPrimary=t})}sn(t){return Rs(t).get(sr.key).next(t=>Tr.resolve(this.cn(t)))}un(t){return Ls(t).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Rr(t,pr.store);return e.Lt().next(t=>{const n=this.fn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Tr.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ye)for(const e of t)this.Ye.removeItem(this.dn(e.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(t){return!!t&&t.ownerId===this.clientId}rn(t){return this.Me?Tr.resolve(!0):Rs(t).get(sr.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)){if(this.cn(e)&&this.networkEnabled)return!0;if(!this.cn(e)){if(!e.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,ks);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ls(t).Lt().next(t=>void 0===this.fn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&f("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[sr.store,pr.store],t=>{const e=new Or(t,C.T);return this.on(e).next(()=>this.un(e))}),this.Ge.close(),this.yn()}fn(t,e){return t.filter(t=>this.ln(t.updateTimeMs,e)&&!this.wn(t.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",t=>Ls(t).Lt().next(t=>this.fn(t,18e5).map(t=>t.clientId)))}get started(){return this.Be}getMutationQueue(t){return is.Yt(t,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(t,e,n){f("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let s;return this.Ge.runTransaction(t,r,vr,r=>(s=new Or(r,this.Le?this.Le.next():C.T),"readwrite-primary"===e?this.sn(s).next(t=>!!t||this.rn(s)).next(e=>{if(!e)throw g(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new T(I.FAILED_PRECONDITION,br);return n(s)}).next(t=>this.an(s).next(()=>t)):this.En(s).next(()=>n(s)))).then(t=>(s.raiseOnCommittedEvent(),t))}En(t){return Rs(t).get(sr.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)&&!this.cn(t)&&!(this.Me||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,ks)})}an(t){const e=new sr(this.clientId,this.allowTabSynchronization,Date.now());return Rs(t).put(sr.key,e)}static bt(){return _r.bt()}on(t){const e=Rs(t);return e.get(sr.key).next(t=>this.cn(t)?(f("IndexedDbPersistence","Releasing primary lease."),e.delete(sr.key)):Tr.resolve())}ln(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(g(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["q"])()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(t){var e;try{const n=null!==(null===(e=this.Ye)||void 0===e?void 0:e.getItem(this.dn(t)));return f("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return g("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(t){g("Failed to set zombie client id.",t)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(t){}}dn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Rs(t){return Rr(t,sr.store)}function Ls(t){return Rr(t,pr.store)}function Ps(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
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
 */}class Fs{constructor(t,e){this.progress=t,this.Tn=e}}
/**
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
 */class Ms{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Jt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new st(e)).next(t=>{let e=Ze();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let s=Ze();return this.Ht.getCollectionParents(t,r).next(i=>Tr.forEach(i,i=>{const o=function(t,e){return new Gt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}Dn(t,e,n){let r,s;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(s=e,this.Cn(t,s,r).next(t=>{r=t;for(const e of s)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=It.newInvalidDocument(n),r=r.insert(n,s)),xe(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{se(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=rn();for(const i of e)for(const t of i.mutations)t instanceof Le&&null===n.get(t.key)&&(r=r.add(t.key));let s=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(s=s.insert(t,e))}),s))}}
/**
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
 */class Vs{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=rn(),r=rn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Vs(t,e.fromCache,n,r)}}
/**
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
 */class qs{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(M.min())?this.Fn(t,e):this.On.Pn(t,r).next(s=>{const o=this.Mn(e,s);return(Ht(e)||Qt(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(l()<=i["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),re(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Qe(ie(t));return e.forEach((e,r)=>{se(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(t,e){return l()<=i["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",re(e)),this.On.getDocumentsMatchingQuery(t,e,M.min())}}
/**
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
 */class Us{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new ze(R),this.qn=new Ts(t=>_t(t),Nt),this.Kn=M.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Ms(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function js(t,e,n,r){return new Us(t,e,n,r)}async function Bs(t,e){const n=b(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.In.getAllMutationBatches(t).next(o=>(i=o,r=n.persistence.getMutationQueue(e),s=new Ms(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=rn();for(const t of i){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return s.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Ks(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Tr.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);w(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Gs(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function zs(t,e){const n=b(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const o=[];e.targetChanges.forEach((e,i)=>{const a=s.get(i);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,i).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,i)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);s=s.insert(i,u),function(t,e,n){return w(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Je();if(e.documentUpdates.forEach((r,s)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push($s(t,i,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(M.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Tr.waitFor(o).next(()=>i.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=s,t))}function $s(t,e,n,r,s){let i=rn();return n.forEach(t=>i=i.add(t)),e.getEntries(t,i).next(t=>{let i=Je();return n.forEach((n,o)=>{const a=t.get(n),c=(null==s?void 0:s.get(n))||r;o.isNoDocument()&&o.version.isEqual(M.min())?(e.removeEntry(n,c),i=i.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),i=i.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),i})}function Hs(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Qs(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(s=>s?(r=s,Tr.resolve(r)):n.ze.allocateTargetId(t).next(s=>(r=new Fr(e,s,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Ws(t,e,n){const r=b(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!Dr(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function Ys(t,e,n){const r=b(t);let s=M.min(),i=rn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),s=r.qn.get(n);return void 0!==s?Tr.resolve(r.Un.get(s)):r.ze.getTargetData(e,n)}(r,t,Zt(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?s:M.min(),n?i:rn())).next(t=>({documents:t,Gn:i})))}function Js(t,e){const n=b(t),r=b(n.ze),s=n.Un.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Et(t,e).next(t=>t?t.target:null))}function Xs(t){const e=b(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const r=b(t);let s=Je(),i=Ur(n);const o=Ds(e),a=IDBKeyRange.lowerBound(i,!0);return o.Kt({index:hr.readTimeIndex,range:a},(t,e)=>{const n=Vr(r.N,e);s=s.insert(n.key,n),i=e.readTime}).next(()=>({Tn:s,readTime:jr(i)}))}(e.jn,t,e.Kn)).then(({Tn:t,readTime:n})=>(e.Kn=n,t))}async function Zs(t){const e=b(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Ds(t);let n=M.min();return e.Kt({index:hr.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=jr(e.readTime)),r.done()}).next(()=>n)}(t)).then(t=>{e.Kn=t})}async function ti(t,e,n,r){const s=b(t);let i=rn(),o=Je(),a=en();for(const h of n){const t=e.zn(h.metadata.name);h.document&&(i=i.add(t)),o=o.insert(t,e.Hn(h)),a=a.insert(t,e.Jn(h.metadata.readTime))}const c=s.jn.newChangeBuffer({trackRemovals:!0}),u=await Qs(s,function(t){return Zt($t(B.fromString("__bundle__/docs/"+t)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",t=>$s(t,c,o,M.min(),a).next(e=>(c.apply(t),e)).next(e=>s.ze.removeMatchingKeysForTargetId(t,u.targetId).next(()=>s.ze.addMatchingKeys(t,i,u.targetId)).next(()=>s.Qn.vn(t,e)).next(()=>e)))}async function ei(t,e,n=rn()){const r=await Qs(t,Zt(Hr(e.bundledQuery))),s=b(t);return s.persistence.runTransaction("Save named query","readwrite",t=>{const i=Tn(e.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Je.saveNamedQuery(t,e);const o=r.withResumeToken(H.EMPTY_BYTE_STRING,i);return s.Un=s.Un.insert(o.targetId,o),s.ze.updateTargetData(t,o).next(()=>s.ze.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>s.ze.addMatchingKeys(t,n,r.targetId)).next(()=>s.Je.saveNamedQuery(t,e))})}
/**
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
 */class ni{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Tr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Tn(n.createTime)}),Tr.resolve()}getNamedQuery(t,e){return Tr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Hr(t.bundledQuery),readTime:Tn(t.readTime)}}(e)),Tr.resolve()}}
/**
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
 */class ri{constructor(){this.Zn=new Qe(si.ts),this.es=new Qe(si.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new si(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new si(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new st(new B([])),n=new si(e,t),r=new si(e,t+1),s=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),s.push(t.key)}),s}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new st(new B([])),n=new si(e,t),r=new si(e,t+1);let s=rn();return this.es.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new si(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class si{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return st.comparator(t.key,e.key)||R(t.ls,e.ls)}static ns(t,e){return R(t.ls,e.ls)||st.comparator(t.key,e.key)}}
/**
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
 */class ii{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Qe(si.ts)}checkEmpty(t){return Tr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const i=new Lr(s,e,n,r);this.In.push(i);for(const o of r)this.ds=this.ds.add(new si(o.key,s)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return Tr.resolve(i)}lookupMutationBatch(t,e){return Tr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),s=r<0?0:r;return Tr.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return Tr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Tr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new si(e,0),r=new si(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);s.push(e)}),Tr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(R);return e.forEach(t=>{const e=new si(t,0),r=new si(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Tr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;st.isDocumentKey(s)||(s=s.child(""));const i=new si(new st(s),0);let o=new Qe(R);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},i),Tr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){w(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Tr.forEach(e.mutations,r=>{const s=new si(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new si(e,0),r=this.ds.firstAfterOrEqual(n);return Tr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Tr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
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
 */class oi{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new ze(st.comparator),this.size=0}addEntry(t,e,n){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-i,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Tr.resolve(n?n.document.clone():It.newInvalidDocument(e))}getEntries(t,e){let n=Je();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():It.newInvalidDocument(t))}),Tr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Je();const s=new st(e.path.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s,readTime:o}}=i.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||se(e,s)&&(r=r.insert(s.key,s.clone()))}return Tr.resolve(r)}Es(t,e){return Tr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ai(this)}getSize(t){return Tr.resolve(this.size)}}class ai extends Es{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Tr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
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
 */class ci{constructor(t){this.persistence=t,this.Ts=new Ts(t=>_t(t),Nt),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Is=0,this.As=new ri,this.targetCount=0,this.Rs=hs.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),Tr.resolve()}getLastRemoteSnapshotVersion(t){return Tr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Tr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Tr.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new hs(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Tr.resolve()}updateTargetData(t,e){return this.ae(e),Tr.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Tr.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Tr.waitFor(s).next(()=>r)}getTargetCount(t){return Tr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Tr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Tr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),Tr.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Tr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Tr.resolve(n)}containsKey(t,e){return Tr.resolve(this.As.containsKey(e))}}
/**
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
 */class ui{constructor(t,e){this.bs={},this.Le=new C(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new ci(this),this.Ht=new Jr,this.He=function(t,e){return new oi(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new Mr(e),this.Je=new ni(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new ii(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new hi(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return Tr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class hi extends Ir{constructor(t){super(),this.currentSequenceNumber=t}}class li{constructor(t){this.persistence=t,this.Ds=new ri,this.Cs=null}static Ns(t){return new li(t)}get xs(){if(this.Cs)return this.Cs;throw y()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Tr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Tr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Tr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tr.forEach(this.xs,n=>{const r=st.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return Tr.or([()=>Tr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
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
 */function di(t,e){return`firestore_clients_${t}_${e}`}function fi(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function gi(t,e){return`firestore_targets_${t}_${e}`}class mi{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static $s(t,e,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new T(r.error.code,r.error.message))),i?new mi(t,e,r.state,s):(g("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class pi{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new T(n.error.code,n.error.message))),s?new pi(t,n.state,r):(g("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class yi{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=on();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=rt(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new yi(t,s):(g("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class wi{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new wi(e.clientId,e.onlineState):(g("SharedClientState","Failed to parse online state: "+t),null)}}class vi{constructor(){this.activeTargetIds=on()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bi{constructor(t,e,n,r,s){this.window=t,this.Oe=e,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new ze(R),this.started=!1,this.Ks=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=di(this.persistenceKey,this.Ls),this.Qs=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new vi),this.Ws=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.Hs=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Js=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.pn();for(const n of t){if(n===this.Ls)continue;const t=this.getItem(di(this.persistenceKey,n));if(t){const e=yi.$s(n,t);e&&(this.qs=this.qs.insert(e.clientId,e))}}this.Ys();const e=this.storage.getItem(this.Hs);if(e){const t=this.Xs(e);t&&this.Zs(t)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Qs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(t){let e=!1;return this.qs.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ei(t,"pending")}updateMutationState(t,e,n){this.ei(t,e,n),this.ni(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(gi(this.persistenceKey,t));if(n){const r=pi.$s(t,n);r&&(e=r.state)}}return this.si.Fs(t),this.Ys(),e}removeLocalQueryTarget(t){this.si.Ms(t),this.Ys()}isLocalQueryTarget(t){return this.si.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(gi(this.persistenceKey,t))}updateQueryState(t,e,n){this.ii(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.ni(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.ri(t)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return f("SharedClientState","READ",t,e),e}setItem(t,e){f("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){f("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Us(t){const e=t;if(e.storageArea===this.storage){if(f("SharedClientState","EVENT",e.key,e.newValue),e.key===this.js)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Ws.test(e.key)){if(null==e.newValue){const t=this.ai(e.key);return this.ci(t,null)}{const t=this.ui(e.key,e.newValue);if(t)return this.ci(t.clientId,t)}}else if(this.Gs.test(e.key)){if(null!==e.newValue){const t=this.hi(e.key,e.newValue);if(t)return this.li(t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.fi(e.key,e.newValue);if(t)return this.di(t)}}else if(e.key===this.Hs){if(null!==e.newValue){const t=this.Xs(e.newValue);if(t)return this.Zs(t)}}else if(e.key===this.Qs){const t=function(t){let e=C.T;if(null!=t)try{const n=JSON.parse(t);w("number"==typeof n),e=n}catch(t){g("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==C.T&&this.sequenceNumberHandler(t)}else if(e.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(e)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(t,e,n){const r=new mi(this.currentUser,t,e,n),s=fi(this.persistenceKey,this.currentUser,t);this.setItem(s,r.Os())}ni(t){const e=fi(this.persistenceKey,this.currentUser,t);this.removeItem(e)}ri(t){const e={clientId:this.Ls,onlineState:t};this.storage.setItem(this.Hs,JSON.stringify(e))}ii(t,e,n){const r=gi(this.persistenceKey,t),s=new pi(t,e,n);this.setItem(r,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(t){const e=this.Ws.exec(t);return e?e[1]:null}ui(t,e){const n=this.ai(t);return yi.$s(n,e)}hi(t,e){const n=this.Gs.exec(t),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return mi.$s(new c(s),r,e)}fi(t,e){const n=this.zs.exec(t),r=Number(n[1]);return pi.$s(r,e)}Xs(t){return wi.$s(t)}async li(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine._i(t.batchId,t.state,t.error);f("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}di(t){return this.syncEngine.mi(t.targetId,t.state,t.error)}ci(t,e){const n=e?this.qs.insert(t,e):this.qs.remove(t),r=this.ti(this.qs),s=this.ti(n),i=[],o=[];return s.forEach(t=>{r.has(t)||i.push(t)}),r.forEach(t=>{s.has(t)||o.push(t)}),this.syncEngine.gi(i,o).then(()=>{this.qs=n})}Zs(t){this.qs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ti(t){let e=on();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Ii{constructor(){this.yi=new vi,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new vi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
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
 */class Ti{Ei(t){}shutdown(){}}
/**
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
 */class Ei{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const _i={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Si{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
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
 */class Ni extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const s=this.Bi(t,e);f("RestConnection","Sending: ",s,n);const i={};return this.Ui(i,r),this.qi(t,s,i,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw m("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=_i[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((s,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),i(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(e)>=0?e:I.UNKNOWN}(t.status);i(new T(e,t.message))}else i(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new T(I.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),s=Object(a["i"])(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new a["d"]({})),this.Ui(i.initMessageHeaders,e),Object(o["o"])()||Object(o["p"])()||Object(o["m"])()||Object(o["n"])()||Object(o["r"])()||Object(o["l"])()||(i.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,i);const u=r.createWebChannel(c,i);let h=!1,l=!1;const d=new Si({vi:t=>{l?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),u.open(),h=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{l||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{l||(l=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{l||(l=!0,m("Connection","WebChannel transport errored:",t),d.$i(new T(I.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!l){const n=t.data[0];w(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){f("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=je[t];if(void 0!==e)return Ge(e)}(t),n=s.message;void 0===e&&(e=I.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,d.$i(new T(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
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
 */
/**
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
 */function Di(){return"undefined"!=typeof window?window:null}function Ai(){return"undefined"!=typeof document?document:null}
/**
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
 */function xi(t){return new wn(t,!0)}class Ci{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
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
 */class ki{constructor(t,e,n,r,s,i){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=s,this.listener=i,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Ci(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===I.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===I.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new T(I.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oi extends ki{constructor(t,e,n,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,s),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=Ln(this.N,t),n=function(t){if(!("targetChange"in t))return M.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?M.min():e.readTime?Tn(e.readTime):M.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=xn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Dt(r)?{documents:Vn(t,r)}:{query:qn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=bn(t,e.resumeToken):e.snapshotVersion.compareTo(M.min())>0&&(n.readTime=vn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=jn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=xn(this.N),e.removeTarget=t,this.wr(e)}}class Ri extends ki{constructor(t,e,n,r,s){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,s),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=Mn(t.writeResults,t.commitTime),n=Tn(t.commitTime);return this.listener.vr(n,e)}return w(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=xn(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Pn(this.N,t))};this.wr(e)}}
/**
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
 */class Li extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(I.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(I.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class Pi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(g(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
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
 */class Fi{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{zi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Kr.add(4),await Vi(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Mi(e)}(this))})}),this.Wr=new Pi(n,r)}}async function Mi(t){if(zi(t))for(const e of t.jr)await e(!0)}async function Vi(t){for(const e of t.jr)await e(!1)}function qi(t,e){const n=b(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Gi(n)?Ki(n):co(n).cr()&&ji(n,e))}function Ui(t,e){const n=b(t),r=co(n);n.qr.delete(e),r.cr()&&Bi(n,e),0===n.qr.size&&(r.cr()?r.lr():zi(n)&&n.Wr.set("Unknown"))}function ji(t,e){t.Gr.Y(e.targetId),co(t).Ir(e)}function Bi(t,e){t.Gr.Y(e),co(t).Ar(e)}function Ki(t){t.Gr=new fn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),co(t).start(),t.Wr.Or()}function Gi(t){return zi(t)&&!co(t).ar()&&t.qr.size>0}function zi(t){return 0===b(t).Kr.size}function $i(t){t.Gr=void 0}async function Hi(t){t.qr.forEach((e,n)=>{ji(t,e)})}async function Qi(t,e){$i(t),Gi(t)?(t.Wr.Lr(e),Ki(t)):t.Wr.set("Unknown")}async function Wi(t,e,n){if(t.Wr.set("Online"),e instanceof ln&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Yi(t,n)}else if(e instanceof un?t.Gr.rt(e):e instanceof hn?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(M.min()))try{const e=await Gs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.qr.get(r);s&&t.qr.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(H.EMPTY_BYTE_STRING,n.snapshotVersion)),Bi(t,e);const r=new Fr(n.target,e,1,n.sequenceNumber);ji(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Yi(t,e)}}async function Yi(t,e,n){if(!Dr(e))throw e;t.Kr.add(1),await Vi(t),t.Wr.set("Offline"),n||(n=()=>Gs(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Mi(t)})}function Ji(t,e){return e().catch(n=>Yi(t,n,e))}async function Xi(t){const e=b(t),n=uo(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Zi(e);)try{const t=await Hs(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,to(e,t)}catch(t){await Yi(e,t)}eo(e)&&no(e)}function Zi(t){return zi(t)&&t.Ur.length<10}function to(t,e){t.Ur.push(e);const n=uo(t);n.cr()&&n.br&&n.Pr(e.mutations)}function eo(t){return zi(t)&&!uo(t).ar()&&t.Ur.length>0}function no(t){uo(t).start()}async function ro(t){uo(t).Sr()}async function so(t){const e=uo(t);for(const n of t.Ur)e.Pr(n.mutations)}async function io(t,e,n){const r=t.Ur.shift(),s=Pr.from(r,e,n);await Ji(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xi(t)}async function oo(t,e){e&&uo(t).br&&await async function(t,e){if(n=e.code,Ke(n)&&n!==I.ABORTED){const n=t.Ur.shift();uo(t).hr(),await Ji(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Xi(t)}var n}(t,e),eo(t)&&no(t)}async function ao(t,e){const n=b(t);e?(n.Kr.delete(2),await Mi(n)):e||(n.Kr.add(2),await Vi(n),n.Wr.set("Unknown"))}function co(t){return t.zr||(t.zr=function(t,e,n){const r=b(t);return r.Cr(),new Oi(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{Si:Hi.bind(null,t),Ci:Qi.bind(null,t),Tr:Wi.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Gi(t)?Ki(t):t.Wr.set("Unknown")):(await t.zr.stop(),$i(t))})),t.zr}function uo(t){return t.Hr||(t.Hr=function(t,e,n){const r=b(t);return r.Cr(),new Ri(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:ro.bind(null,t),Ci:oo.bind(null,t),Vr:so.bind(null,t),vr:io.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Xi(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
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
 */}class ho{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new ho(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lo(t,e){if(g("AsyncQueue",`${e}: ${t}`),Dr(t))return new T(I.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class fo{constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=Ze(),this.sortedSet=new ze(this.comparator)}static emptySet(t){return new fo(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new fo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class go{constructor(){this.Jr=new ze(st.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):y():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class mo{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new mo(t,e,fo.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ee(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class po{constructor(){this.Xr=void 0,this.listeners=[]}}class yo{constructor(){this.queries=new Ts(t=>ne(t),ee),this.onlineState="Unknown",this.Zr=new Set}}async function wo(t,e){const n=b(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new po),s)try{i.Xr=await n.onListen(r)}catch(t){const n=lo(t,`Initialization of query '${re(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.eo(n.onlineState),i.Xr&&e.no(i.Xr)&&To(n)}async function vo(t,e){const n=b(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function bo(t,e){const n=b(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(s)&&(r=!0);e.Xr=s}}r&&To(n)}function Io(t,e,n){const r=b(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function To(t){t.Zr.forEach(t=>{t.next()})}class Eo{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new mo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=mo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
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
 */class _o{constructor(t,e){this.payload=t,this.byteLength=e}ho(){return"metadata"in this.payload}}
/**
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
 */class So{constructor(t){this.N=t}zn(t){return Nn(this.N,t)}Hn(t){return t.metadata.exists?On(this.N,t.document,!1):It.newNoDocument(this.zn(t.metadata.name),this.Jn(t.metadata.readTime))}Jn(t){return Tn(t)}}class No{constructor(t,e,n){this.lo=t,this.localStore=e,this.N=n,this.queries=[],this.documents=[],this.progress=Do(t)}fo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}wo(t){const e=new Map,n=new So(this.N);for(const r of t)if(r.metadata.queries){const t=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||rn()).add(t);e.set(n,r)}}return e}async complete(){const t=await ti(this.localStore,new So(this.N),this.documents,this.lo.id),e=this.wo(this.documents);for(const n of this.queries)await ei(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Fs(Object.assign({},this.progress),t)}}function Do(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
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
 */class Ao{constructor(t){this.key=t}}class xo{constructor(t){this.key=t}}class Co{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=rn(),this.mutatedKeys=rn(),this.po=ie(t),this.Eo=new fo(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new go,r=e?e.Eo:this.Eo;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=Ht(this.query)&&r.size===this.query.limit?r.last():null,c=Qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=se(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Ro(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.po(h,a)>0||c&&this.po(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),Ht(this.query)||Qt(this.query))for(;i.size>this.query.limit;){const t=Ht(this.query)?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Eo:i,Ao:n,Ln:o,mutatedKeys:s}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const s=t.Ao.Yr();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const i=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==s.length||a?{snapshot:new mo(this.query,t.Eo,r,s,t.mutatedKeys,0===o,a,!1),vo:i}:{vo:i}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new go,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=rn(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new xo(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Ao(n))}),e}So(t){this._o=t.Gn,this.yo=rn();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return mo.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class ko{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Oo{constructor(t){this.key=t,this.Co=!1}}class Ro{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.No={},this.xo=new Ts(t=>ne(t),ee),this.ko=new Map,this.$o=new Set,this.Oo=new ze(st.comparator),this.Fo=new Map,this.Mo=new ri,this.Lo={},this.Bo=new Map,this.Uo=hs.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Lo(t,e){const n=ua(t);let r,s;const i=n.xo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Do();else{const t=await Qs(n.localStore,Zt(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await Po(n,e,r,"current"===i),n.isPrimaryClient&&qi(n.remoteStore,t)}return s}async function Po(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let s=e.view.Io(n);s.Ln&&(s=await Ys(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Qo(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const s=await Ys(t.localStore,e,!0),i=new Co(e,s.Gn),o=i.Io(s.documents),a=cn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Qo(t,n,c.vo);const u=new ko(e,n,i);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function Fo(t,e){const n=b(t),r=n.xo.get(e),s=n.ko.get(r.targetId);if(s.length>1)return n.ko.set(r.targetId,s.filter(t=>!ee(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ws(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ui(n.remoteStore,r.targetId),$o(n,r.targetId)}).catch(ms)):($o(n,r.targetId),await Ws(n.localStore,r.targetId,!0))}async function Mo(t,e,n){const r=ha(t);try{const t=await function(t,e){const n=b(t),r=F.now(),s=e.reduce((t,e)=>t.add(e.key),rn());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,s).next(s=>{i=s;const o=[];for(const t of e){const e=Ce(t,i.get(t.key));null!=e&&o.push(new Le(t.key,e,bt(e.value.mapValue),Se.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new ze(R)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Jo(r,t.changes),await Xi(r.remoteStore)}catch(t){const e=lo(t,"Failed to persist write");n.reject(e)}}async function Vo(t,e){const n=b(t);try{const t=await zs(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?w(r.Co):t.removedDocuments.size>0&&(w(r.Co),r.Co=!1))}),await Jo(n,t,e)}catch(t){await ms(t)}}function qo(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const s=r.view.eo(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.listeners)s.eo(e)&&(r=!0)}),r&&To(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Uo(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fo.get(e),i=s&&s.key;if(i){let t=new ze(st.comparator);t=t.insert(i,It.newNoDocument(i,M.min()));const n=rn().add(i),s=new an(M.min(),new Map,new Qe(R),t,n);await Vo(r,s),r.Oo=r.Oo.remove(i),r.Fo.delete(e),Yo(r)}else await Ws(r.localStore,e,!1).then(()=>$o(r,e,n)).catch(ms)}async function jo(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Ks(n.localStore,e);zo(n,r,null),Go(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jo(n,t)}catch(t){await ms(t)}}async function Bo(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(w(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);zo(r,e,n),Go(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jo(r,t)}catch(n){await ms(n)}}async function Ko(t,e){const n=b(t);zi(n.remoteStore)||f("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=b(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.In.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.Bo.get(t)||[];r.push(e),n.Bo.set(t,r)}catch(t){const n=lo(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Go(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function zo(t,e,n){const r=b(t);let s=r.Lo[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Lo[r.currentUser.toKey()]=s}}function $o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||Ho(t,e)})}function Ho(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(Ui(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Yo(t))}function Qo(t,e,n){for(const r of n)r instanceof Ao?(t.Mo.addReference(r.key,e),Wo(t,r)):r instanceof xo?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Ho(t,r.key)):y()}function Wo(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),Yo(t))}function Yo(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new st(B.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Oo(n)),t.Oo=t.Oo.insert(n,r),qi(t.remoteStore,new Fr(Zt($t(n.path)),r,2,C.T))}}async function Jo(t,e,n){const r=b(t),s=[],i=[],o=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{o.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Vs.kn(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.No.Tr(s),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Tr.forEach(e,e=>Tr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Tr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Dr(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,s)}}}(r.localStore,i))}async function Xo(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Bs(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new T(I.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Jo(n,t.Wn)}}function Zo(t,e){const n=b(t),r=n.Fo.get(e);if(r&&r.Co)return rn().add(r.key);{let t=rn();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}async function ta(t,e){const n=b(t),r=await Ys(n.localStore,e.query,!0),s=e.view.So(r);return n.isPrimaryClient&&Qo(n,e.targetId,s.vo),s}async function ea(t){const e=b(t);return Xs(e.localStore).then(t=>Jo(e,t))}async function na(t,e,n,r){const s=b(t),i=await function(t,e){const n=b(t),r=b(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Xt(t,e).next(e=>e?n.Qn.Pn(t,e):Tr.resolve(null)))}(s.localStore,e);null!==i?("pending"===n?await Xi(s.remoteStore):"acknowledged"===n||"rejected"===n?(zo(s,e,r||null),Go(s,e),function(t,e){b(b(t).In).te(e)}(s.localStore,e)):y(),await Jo(s,i)):f("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ra(t,e){const n=b(t);if(ua(n),ha(n),!0===e&&!0!==n.qo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await sa(n,t.toArray());n.qo=!0,await ao(n.remoteStore,!0);for(const r of e)qi(n.remoteStore,r)}else if(!1===e&&!1!==n.qo){const t=[];let e=Promise.resolve();n.ko.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?t.push(s):e=e.then(()=>($o(n,s),Ws(n.localStore,s,!0))),Ui(n.remoteStore,s)}),await e,await sa(n,t),function(t){const e=b(t);e.Fo.forEach((t,n)=>{Ui(e.remoteStore,n)}),e.Mo.us(),e.Fo=new Map,e.Oo=new ze(st.comparator)}(n),n.qo=!1,await ao(n.remoteStore,!1)}}async function sa(t,e,n){const r=b(t),s=[],i=[];for(const o of e){let t;const e=r.ko.get(o);if(e&&0!==e.length){t=await Qs(r.localStore,Zt(e[0]));for(const t of e){const e=r.xo.get(t),n=await ta(r,e);n.snapshot&&i.push(n.snapshot)}}else{const e=await Js(r.localStore,o);t=await Qs(r.localStore,e),await Po(r,ia(e),o,!1)}s.push(t)}return r.No.Tr(i),s}function ia(t){return zt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function oa(t){const e=b(t);return b(b(e.localStore).persistence).pn()}async function aa(t,e,n,r){const s=b(t);if(s.qo)f("SyncEngine","Ignoring unexpected query state notification.");else if(s.ko.has(e))switch(n){case"current":case"not-current":{const t=await Xs(s.localStore),r=an.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Jo(s,t,r);break}case"rejected":await Ws(s.localStore,e,!0),$o(s,e,r);break;default:y()}}async function ca(t,e,n){const r=ua(t);if(r.qo){for(const t of e){if(r.ko.has(t)){f("SyncEngine","Adding an already active target "+t);continue}const e=await Js(r.localStore,t),n=await Qs(r.localStore,e);await Po(r,ia(e),n.targetId,!1),qi(r.remoteStore,n)}for(const t of n)r.ko.has(t)&&await Ws(r.localStore,t,!1).then(()=>{Ui(r.remoteStore,t),$o(r,t)}).catch(ms)}}function ua(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uo.bind(null,e),e.No.Tr=bo.bind(null,e.eventManager),e.No.jo=Io.bind(null,e.eventManager),e}function ha(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bo.bind(null,e),e}function la(t,e,n){const r=b(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=b(t),r=Tn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Je.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(Do(r));const s=new No(r,t.localStore,e.N);let i=await e.Qo();for(;i;){const t=await s.fo(i);t&&n._updateProgress(t),i=await e.Qo()}const o=await s.complete();await Jo(t,o.Tn,void 0),await function(t,e){const n=b(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Je.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress)}catch(t){m("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
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
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class da{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=xi(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return js(this.persistence,new qs,t.initialUser,this.N)}Go(t){return new ui(li.Ns,this.N)}Wo(t){return new Ii}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fa extends da{constructor(t,e,n){super(),this.Jo=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await Zs(this.localStore),await this.Jo.initialize(this,t),await ha(this.Jo.syncEngine),await Xi(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(t){return js(this.persistence,new qs,t.initialUser,this.N)}zo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new ws(e,t.asyncQueue)}Go(t){const e=Ps(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ns.withCacheSize(this.cacheSizeBytes):ns.DEFAULT;return new Os(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Di(),Ai(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(t){return new Ii}}class ga extends fa{constructor(t,e){super(t,e,!1),this.Jo=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Jo.syncEngine;this.sharedClientState instanceof bi&&(this.sharedClientState.syncEngine={_i:na.bind(null,e),mi:aa.bind(null,e),gi:ca.bind(null,e),pn:oa.bind(null,e),wi:ea.bind(null,e)},await this.sharedClientState.start()),await this.persistence.nn(async t=>{await ra(this.Jo.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Wo(t){const e=Di();if(!bi.bt(e))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ps(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new bi(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ma{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xo.bind(null,this.syncEngine),await ao(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yo}createDatastore(t){const e=xi(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ni(r));var r;return function(t,e,n){return new Li(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>qo(this.syncEngine,t,0),i=Ei.bt()?new Ei:new Ti,new Fi(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Ro(t,e,n,r,s,i);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Vi(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
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
 */function pa(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
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
 */
/**
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
 */class ya{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
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
 */class wa{constructor(t,e){this.Zo=t,this.N=e,this.metadata=new E,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(t=>{t&&t.ho()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const t=await this.na();if(null===t)return null;const e=this.ta.decode(t),n=Number(e);isNaN(n)&&this.sa(`length string (${e}) is not valid number`);const r=await this.ia(n);return new _o(JSON.parse(r),t.length+n)}ra(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async na(){for(;this.ra()<0;)if(await this.oa())break;if(0===this.buffer.length)return null;const t=this.ra();t<0&&this.sa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ia(t){for(;this.buffer.length<t;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const e=this.ta.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}sa(t){throw this.Zo.cancel(),new Error("Invalid bundle format: "+t)}async oa(){const t=await this.Zo.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
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
 */class va{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=b(t),r=xn(n.N)+"/documents",s={documents:e.map(t=>Sn(n.N,t))},i=await n.Ki("BatchGetDocuments",r,s),o=new Map;i.forEach(t=>{const e=Rn(n.N,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());w(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ve(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=st.fromPath(e);this.mutations.push(new qe(n,this.precondition(n)))}),await async function(t,e){const n=b(t),r=xn(n.N)+"/documents",s={writes:e.map(t=>Pn(n.N,t))};await n.Li("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw y();e=M.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Se.updateTime(e):Se.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(M.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Se.updateTime(e)}return Se.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
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
 */class ba{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new Ci(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const t=new va(this.datastore),e=this.ua(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.ha(t)}))}).catch(t=>{this.ha(t)})})}ua(t){try{const e=this.updateFunction(t);return!et(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ha(t){this.aa>0&&this.la(t)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(t)}la(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Ke(e)}return!1}}
/**
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
 */class Ia{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=O.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=lo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ta(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Bs(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ea(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _a(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.Kr.add(3),await Vi(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Mi(n)}(e.remoteStore,t)),t.onlineComponents=e}async function _a(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ta(t,new da)),t.offlineComponents}async function Sa(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Ea(t,new ma)),t.onlineComponents}function Na(t){return _a(t).then(t=>t.persistence)}function Da(t){return _a(t).then(t=>t.localStore)}function Aa(t){return Sa(t).then(t=>t.remoteStore)}function xa(t){return Sa(t).then(t=>t.syncEngine)}async function Ca(t){const e=await Sa(t),n=e.eventManager;return n.onListen=Lo.bind(null,e.syncEngine),n.onUnlisten=Fo.bind(null,e.syncEngine),n}function ka(t){return t.asyncQueue.enqueue(async()=>{const e=await Na(t),n=await Aa(t);return e.setNetworkEnabled(!0),function(t){const e=b(t);return e.Kr.delete(0),Mi(e)}(n)})}function Oa(t){return t.asyncQueue.enqueue(async()=>{const e=await Na(t),n=await Aa(t);return e.setNetworkEnabled(!1),async function(t){const e=b(t);e.Kr.add(0),await Vi(e),e.Wr.set("Offline")}(n)})}function Ra(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=b(t);return n.persistence.runTransaction("read document","readonly",t=>n.Qn.An(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=lo(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Da(t),e,n)),n.promise}function La(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new ya({next:i=>{e.enqueueAndForget(()=>vo(t,o));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Eo($t(n.path),i,{includeMetadataChanges:!0,uo:!0});return wo(t,o)}(await Ca(t),t.asyncQueue,e,n,r)),r.promise}function Pa(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await Ys(t,e,!0),s=new Co(e,r.Gn),i=s.Io(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(t){const r=lo(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Da(t),e,n)),n.promise}function Fa(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new ya({next:n=>{e.enqueueAndForget(()=>vo(t,o)),n.fromCache&&"server"===r.source?s.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Eo(n,i,{includeMetadataChanges:!0,uo:!0});return wo(t,o)}(await Ca(t),t.asyncQueue,e,n,r)),r.promise}function Ma(t,e){const n=new ya(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){b(t).Zr.add(e),e.next()}(await Ca(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){b(t).Zr.delete(e)}(await Ca(t),n))}}function Va(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return Sa(t).then(t=>t.datastore)}(t);new ba(t.asyncQueue,r,e,n).run()}),n.promise}function qa(t,e,n,r){const s=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new wa(t,e)}(function(t,e){if(t instanceof Uint8Array)return pa(t,e);if(t instanceof ArrayBuffer)return pa(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
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
 */(n,xi(e));t.asyncQueue.enqueueAndForget(async()=>{la(await xa(t),s,r)})}function Ua(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=b(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Je.getNamedQuery(t,e))}(await Da(t),e))}class ja{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ba{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ba&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Ka=new Map;
/**
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
 */function Ga(t,e,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function za(t,e,n,r){if(!0===e&&!0===r)throw new T(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $a(t){if(!st.isDocumentKey(t))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(st.isDocumentKey(t))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Wa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new T(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ya(t,e){if(e<=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
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
 */class Ja{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,za("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Xa{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1,t instanceof Ba?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new S;switch(t.type){case"gapi":t.client;return w(!("object"!=typeof r["_removeServiceInstance"]||null===r["_removeServiceInstance"]||!r["_removeServiceInstance"].auth||!r["_removeServiceInstance"].auth.getAuthHeaderValueForFirstParty)),new x(r["_removeServiceInstance"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ka.get(t);e&&(f("ComponentProvider","Removing Datastore"),Ka.delete(t),e.terminate())}(this),Promise.resolve()}}function Za(t,e,n,r={}){var s;const i=(t=Wa(t,Xa))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=c.MOCK_USER;else{e=Object(o["e"])(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(i)}t._credentials=new N(new _(e,n))}}
/**
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
 */class tc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new tc(this.firestore,t,this._key)}}class ec{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ec(this.firestore,t,this._query)}}class nc extends ec{constructor(t,e,n){super(t,e,$t(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new tc(this.firestore,null,new st(t))}withConverter(t){return new nc(this.firestore,t,this._path)}}function rc(t,e,...n){if(t=Object(o["i"])(t),Ga("collection","path",e),t instanceof Xa){const r=B.fromString(e,...n);return Ha(r),new nc(t,null,r)}{if(!(t instanceof tc||t instanceof nc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Ha(r),new nc(t.firestore,null,r)}}function sc(t,e){if(t=Wa(t,Xa),Ga("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ec(t,null,function(t){return new Gt(B.emptyPath(),t)}(e))}function ic(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=O.I()),Ga("doc","path",e),t instanceof Xa){const r=B.fromString(e,...n);return $a(r),new tc(t,null,new st(r))}{if(!(t instanceof tc||t instanceof nc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return $a(r),new tc(t.firestore,t instanceof nc?t.converter:null,new st(r))}}function oc(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),(t instanceof tc||t instanceof nc)&&(e instanceof tc||e instanceof nc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ac(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),t instanceof ec&&e instanceof ec&&t.firestore===e.firestore&&ee(t._query,e._query)&&t.converter===e.converter
/**
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
 */}class cc{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Ci(this,"async_queue_retry"),this.Ea=()=>{const t=Ai();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Ai();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Ai();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new E;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Dr(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=ho.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&y()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function uc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(t,["next","error","complete"])}class hc{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
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
 */const lc=-1;class dc extends Xa{constructor(t,e){super(t,e),this.type="firestore",this._queue=new cc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gc(this),this._firestoreClient.terminate()}}function fc(t){return t._firestoreClient||gc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new ja(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ia(t._credentials,t._queue,r)}function mc(t,e){_c(t=Wa(t,dc));const n=fc(t),r=t._freezeSettings(),s=new ma;return yc(n,s,new fa(s,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function pc(t){_c(t=Wa(t,dc));const e=fc(t),n=t._freezeSettings(),r=new ma;return yc(e,r,new ga(r,n.cacheSizeBytes))}function yc(t,e,n){const r=new E;return t.asyncQueue.enqueue(async()=>{try{await Ta(t,n),await Ea(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function wc(t){if(t._initialized&&!t._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new E;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!_r.bt())return Promise.resolve();const e=t+"main";await _r.delete(e)}(Ps(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function vc(t){return function(t){const e=new E;return t.asyncQueue.enqueueAndForget(async()=>Ko(await xa(t),e)),e.promise}(fc(t=Wa(t,dc)))}function bc(t){return ka(fc(t=Wa(t,dc)))}function Ic(t){return Oa(fc(t=Wa(t,dc)))}function Tc(t,e){const n=fc(t=Wa(t,dc)),r=new hc;return qa(n,t._databaseId,e,r),r}function Ec(t,e){return Ua(fc(t=Wa(t,dc)),e).then(e=>e?new ec(t,null,e.query):null)}function _c(t){if(t._initialized||t._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */class Sc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Nc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nc(H.fromBase64String(t))}catch(t){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Nc(H.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class Dc{constructor(t){this._methodName=t}}
/**
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
 */class Ac{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}
/**
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
 */const xc=/^__.*__$/;class Cc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new Re(t,this.data,e,this.fieldTransforms)}}class kc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Oc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Rc{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Rc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Zc(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Oc(this.Da)&&xc.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||xi(t)}Ba(t,e,n,r=!1){return new Rc({Da:t,methodName:e,La:n,path:G.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Pc(t){const e=t._freezeSettings(),n=xi(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fc(t,e,n,r,s,i={}){const o=t.Ba(i.merge||i.mergeFields?2:0,e,n,s);Wc("Data must be an object, but it was:",o,r);const a=Hc(r,o);let c,u;if(i.merge)c=new z(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Yc(e,r,n);if(!o.contains(s))throw new T(I.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);tu(t,s)||t.push(s)}c=new z(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Cc(new vt(a),c,u)}class Mc extends Dc{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mc}}function Vc(t,e,n){return new Rc({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class qc extends Dc{_toFieldTransform(t){return new Te(t.path,new ge)}isEqual(t){return t instanceof qc}}class Uc extends Dc{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=Vc(this,t,!0),n=this.Ua.map(t=>$c(t,e)),r=new me(n);return new Te(t.path,r)}isEqual(t){return this===t}}class jc extends Dc{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=Vc(this,t,!0),n=this.Ua.map(t=>$c(t,e)),r=new ye(n);return new Te(t.path,r)}isEqual(t){return this===t}}class Bc extends Dc{constructor(t,e){super(t),this.qa=e}_toFieldTransform(t){const e=new ve(t.N,ue(t.N,this.qa));return new Te(t.path,e)}isEqual(t){return this===t}}function Kc(t,e,n,r){const s=t.Ba(1,e,n);Wc("Data must be an object, but it was:",s,r);const i=[],a=vt.empty();q(r,(t,r)=>{const c=Xc(e,t,n);r=Object(o["i"])(r);const u=s.$a(c);if(r instanceof Mc)i.push(c);else{const t=$c(r,u);null!=t&&(i.push(c),a.set(c,t))}});const c=new z(i);return new kc(a,c,s.fieldTransforms)}function Gc(t,e,n,r,s,i){const a=t.Ba(1,e,n),c=[Yc(e,r,n)],u=[s];if(i.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<i.length;o+=2)c.push(Yc(e,i[o])),u.push(i[o+1]);const h=[],l=vt.empty();for(let f=c.length-1;f>=0;--f)if(!tu(h,c[f])){const t=c[f];let e=u[f];e=Object(o["i"])(e);const n=a.$a(t);if(e instanceof Mc)h.push(t);else{const r=$c(e,n);null!=r&&(h.push(t),l.set(t,r))}}const d=new z(h);return new kc(l,d,a.fieldTransforms)}function zc(t,e,n,r=!1){return $c(n,t.Ba(r?4:3,e))}function $c(t,e){if(Qc(t=Object(o["i"])(t)))return Wc("Unsupported field value:",e,t),Hc(t,e);if(t instanceof Dc)return function(t,e){if(!Oc(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=$c(s,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ue(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=F.fromDate(t);return{timestampValue:vn(e.N,n)}}if(t instanceof F){const n=new F(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vn(e.N,n)}}if(t instanceof Ac)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nc)return{bytesValue:bn(e.N,t._byteString)};if(t instanceof tc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:En(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+Qa(t))}(t,e)}function Hc(t,e){const n={};return U(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):q(t,(t,r)=>{const s=$c(r,e.Na(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function Qc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Ac||t instanceof Nc||t instanceof tc||t instanceof Dc)}function Wc(t,e,n){if(!Qc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qa(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Yc(t,e,n){if((e=Object(o["i"])(e))instanceof Sc)return e._internalPath;if("string"==typeof e)return Xc(t,e);throw Zc("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Jc=new RegExp("[~\\*/\\[\\]]");function Xc(t,e,n){if(e.search(Jc)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sc(...e.split("."))._internalPath}catch(r){throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new T(I.INVALID_ARGUMENT,a+t+c)}function tu(t,e){return t.some(t=>t.isEqual(e))}
/**
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
 */class eu{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ru("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nu extends eu{data(){return super.data()}}function ru(t,e){return"string"==typeof e?Xc(t,e):e instanceof Sc?e._internalPath:e._delegate._internalPath}
/**
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
 */class su{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class iu extends eu{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ru("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ou extends iu{data(t={}){return super.data(t)}}class au{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new su(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ou(this._firestore,this._userDataWriter,n.key,n,new su(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new ou(t._firestore,t._userDataWriter,n.doc.key,n.doc,new su(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new ou(t._firestore,t._userDataWriter,e.doc.key,e.doc,new su(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:cu(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function cu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function uu(t,e){return t instanceof iu&&e instanceof iu?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof au&&e instanceof au&&t._firestore===e._firestore&&ac(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
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
 */function hu(t){if(Qt(t)&&0===t.explicitOrderBy.length)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lu{}function du(t,...e){for(const n of e)t=n._apply(t);return t}class fu extends lu{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=Pc(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);if("in"===i||"not-in"===i){Au(o,i);const e=[];for(const n of o)e.push(Du(r,t,n));a={arrayValue:{values:e}}}else a=Du(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Au(o,i),a=zc(n,e,o,"in"===i||"not-in"===i);const c=At.create(s,i,a);return function(t,e){if(e.v()){const n=Yt(t);if(null!==n&&!n.isEqual(e.field))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Wt(t);null!==r&&xu(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new ec(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function gu(t,e,n){const r=e,s=ru("where",t);return new fu(s,r,n)}class mu extends lu{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ut(e,n);return function(t,e){if(null===Wt(t)){const n=Yt(t);null!==n&&xu(t,n,e.field)}}(t,r),r}(t._query,this.Ka,this.Wa);return new ec(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Gt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function pu(t,e="asc"){const n=e,r=ru("orderBy",t);return new mu(r,n)}class yu extends lu{constructor(t,e,n){super(),this.type=t,this.Ga=e,this.za=n}_apply(t){return new ec(t.firestore,t.converter,te(t._query,this.Ga,this.za))}}function wu(t){return Ya("limit",t),new yu("limit",t,"F")}function vu(t){return Ya("limitToLast",t),new yu("limitToLast",t,"L")}class bu extends lu{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=Nu(t,this.type,this.Ha,this.Ja);return new ec(t.firestore,t.converter,function(t,e){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Iu(...t){return new bu("startAt",t,!0)}function Tu(...t){return new bu("startAfter",t,!1)}class Eu extends lu{constructor(t,e,n){super(),this.type=t,this.Ha=e,this.Ja=n}_apply(t){const e=Nu(t,this.type,this.Ha,this.Ja);return new ec(t.firestore,t.converter,function(t,e){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function _u(...t){return new Eu("endBefore",t,!0)}function Su(...t){return new Eu("endAt",t,!1)}function Nu(t,e,n,r){if(n[0]=Object(o["i"])(n[0]),n[0]instanceof eu)return function(t,e,n,r,s){if(!r)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Xt(t))if(o.field.isKeyField())i.push(dt(e,r.key));else{const t=r.data.field(o.field);if(X(t))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new Vt(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Pc(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Jt(t)&&-1!==i.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(B.fromString(i));if(!st.isDocumentKey(n))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new st(n);a.push(dt(e,s))}else{const t=zc(n,r,i);a.push(t)}}return new Vt(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Du(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jt(e)&&-1!==n.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(B.fromString(n));if(!st.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return dt(t,new st(r))}if(n instanceof tc)return dt(t,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Au(t,e){if(!Array.isArray(t)||0===t.length)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function xu(t,e,n){if(!n.isEqual(e))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */class Cu{convertValue(t,e="none"){switch(it(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(J(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return q(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Ac(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":Z(t);return null==r["_registerComponent"]?null:this.convertValue(r["_registerComponent"],e);case"estimate":return this.convertTimestamp(tt(t));default:return null}}convertTimestamp(t){const e=W(t);return new F(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);w(Xn(n));const r=new Ba(n.get(1),n.get(3)),s=new st(n.popFirst(5));return r.isEqual(e)||g(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
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
 */function ku(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ou extends Cu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tc(this.firestore,null,e)}}
/**
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
 */class Ru{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Pc(t)}set(t,e,n){this._verifyNotCommitted();const r=Lu(t,this._firestore),s=ku(r.converter,e,n),i=Fc(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Se.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const s=Lu(t,this._firestore);let i;return i="string"==typeof(e=Object(o["i"])(e))||e instanceof Sc?Gc(this._dataReader,"WriteBatch.update",s._key,e,n,r):Kc(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(i.toMutation(s._key,Se.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Lu(t,this._firestore);return this._mutations=this._mutations.concat(new Ve(e._key,Se.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lu(t,e){if((t=Object(o["i"])(t)).firestore!==e)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
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
 */
/**
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
 */function Pu(t){t=Wa(t,tc);const e=Wa(t.firestore,dc);return La(fc(e),t._key).then(n=>Wu(e,t,n))}class Fu extends Cu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new tc(this.firestore,null,e)}}function Mu(t){t=Wa(t,tc);const e=Wa(t.firestore,dc),n=fc(e),r=new Fu(e);return Ra(n,t._key).then(n=>new iu(e,r,t._key,n,new su(null!==n&&n.hasLocalMutations,!0),t.converter))}function Vu(t){t=Wa(t,tc);const e=Wa(t.firestore,dc);return La(fc(e),t._key,{source:"server"}).then(n=>Wu(e,t,n))}function qu(t){t=Wa(t,ec);const e=Wa(t.firestore,dc),n=fc(e),r=new Fu(e);return hu(t._query),Fa(n,t._query).then(n=>new au(e,r,t,n))}function Uu(t){t=Wa(t,ec);const e=Wa(t.firestore,dc),n=fc(e),r=new Fu(e);return Pa(n,t._query).then(n=>new au(e,r,t,n))}function ju(t){t=Wa(t,ec);const e=Wa(t.firestore,dc),n=fc(e),r=new Fu(e);return Fa(n,t._query,{source:"server"}).then(n=>new au(e,r,t,n))}function Bu(t,e,n){t=Wa(t,tc);const r=Wa(t.firestore,dc),s=ku(t.converter,e,n);return Qu(r,[Fc(Pc(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Se.none())])}function Ku(t,e,n,...r){t=Wa(t,tc);const s=Wa(t.firestore,dc),i=Pc(s);let a;return a="string"==typeof(e=Object(o["i"])(e))||e instanceof Sc?Gc(i,"updateDoc",t._key,e,n,r):Kc(i,"updateDoc",t._key,e),Qu(s,[a.toMutation(t._key,Se.exists(!0))])}function Gu(t){return Qu(Wa(t.firestore,dc),[new Ve(t._key,Se.none())])}function zu(t,e){const n=Wa(t.firestore,dc),r=ic(t),s=ku(t.converter,e);return Qu(n,[Fc(Pc(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Se.exists(!1))]).then(()=>r)}function $u(t,...e){var n,r,s;t=Object(o["i"])(t);let i={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||uc(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges};if(uc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,h,l;if(t instanceof tc)h=Wa(t.firestore,dc),l=$t(t._key.path),u={next:n=>{e[a]&&e[a](Wu(h,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Wa(t,ec);h=Wa(n.firestore,dc),l=n._query;const r=new Fu(h);u={next:t=>{e[a]&&e[a](new au(h,r,n,t))},error:e[a+1],complete:e[a+2]},hu(t._query)}return function(t,e,n,r){const s=new ya(r),i=new Eo(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>wo(await Ca(t),i)),()=>{s.Xo(),t.asyncQueue.enqueueAndForget(async()=>vo(await Ca(t),i))}}(fc(h),l,c,u)}function Hu(t,e){return Ma(fc(t=Wa(t,dc)),uc(e)?e:{next:e})}function Qu(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>Mo(await xa(t),e,n)),n.promise}(fc(t),e)}function Wu(t,e,n){const r=n.docs.get(e._key),s=new Fu(t);return new iu(t,s,e._key,r,new su(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */class Yu extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Pc(t)}get(t){const e=Lu(t,this._firestore),n=new Ou(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return y();const r=t[0];if(r.isFoundDocument())return new eu(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new eu(this._firestore,n,e._key,null,e.converter);throw y()})}set(t,e,n){const r=Lu(t,this._firestore),s=ku(r.converter,e,n),i=Fc(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const s=Lu(t,this._firestore);let i;return i="string"==typeof(e=Object(o["i"])(e))||e instanceof Sc?Gc(this._dataReader,"Transaction.update",s._key,e,n,r):Kc(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,i),this}delete(t){const e=Lu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Lu(t,this._firestore),n=new Fu(this._firestore);return super.get(t).then(t=>new iu(this._firestore,n,e._key,t._document,new su(!1,!1),e.converter))}}function Ju(t,e){return Va(fc(t),n=>e(new Yu(t,n)))}
/**
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
 */function Xu(){return new Mc("deleteField")}function Zu(){return new qc("serverTimestamp")}function th(...t){return new Uc("arrayUnion",t)}function eh(...t){return new jc("arrayRemove",t)}function nh(t){return new Bc("increment",t)}
/**
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
 */var rh;!function(t){u=t}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new s["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new dc(n,new D(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["registerVersion"])("@firebase/firestore","3.0.2",rh)}).call(this,n("4362"))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},c7b2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Cr})),n.d(e,"b",(function(){return Or})),n.d(e,"c",(function(){return kr})),n.d(e,"d",(function(){return Lr})),n.d(e,"e",(function(){return Rr})),n.d(e,"f",(function(){return Pr})),n.d(e,"g",(function(){return Fr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return xr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var o,a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},c=c||{},u=a||self;function h(){}function l(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function f(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:y,w.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function I(){this.s=this.s,this.o=this.o}var T=0,E={};I.prototype.s=!1,I.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var t=f(this);delete E[t]}},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var _=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},S=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,s="string"===typeof t?t.split(""):t,i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function N(t){t:{for(var e=Gn,n=t.length,r="string"===typeof t?t.split(""):t,s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function D(t){return Array.prototype.concat.apply([],arguments)}function A(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var C,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var L=u.navigator;if(L){var P=L.userAgent;if(P){C=P;break t}}C=""}function F(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function M(t){var e={};for(var n in t)e[n]=t[n];return e}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(t,e){for(var n,r,s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(var i=0;i<V.length;i++)n=V[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}function j(t){var e=tt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=h;var B,K=O(C,"Opera"),G=O(C,"Trident")||O(C,"MSIE"),z=O(C,"Edge"),$=z||G,H=O(C,"Gecko")&&!(O(C.toLowerCase(),"webkit")&&!O(C,"Edge"))&&!(O(C,"Trident")||O(C,"MSIE"))&&!O(C,"Edge"),Q=O(C.toLowerCase(),"webkit")&&!O(C,"Edge");function W(){var t=u.document;return t?t.documentMode:void 0}t:{var Y="",J=function(){var t=C;return H?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Q?/WebKit\/(\S+)/.exec(t):K?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(Y=J?J[1]:""),G){var X=W();if(null!=X&&X>parseFloat(Y)){B=String(X);break t}}B=Y}var Z,tt={};function et(){return j((function(){for(var t=0,e=k(String(B)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length),s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=R(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||R(0==i[2].length,0==o[2].length)||R(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(u.document&&G){var nt=W();Z=nt||(parseInt(B,10)||void 0)}else Z=void 0;var rt=Z,st=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",h,e),u.removeEventListener("test",h,e)}catch(n){}return t}();function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ot(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{U(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:at[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ot.Z.h.call(this)}}it.prototype.h=function(){this.defaultPrevented=!0},b(ot,it);var at={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),ut=0;function ht(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++ut,this.ca=this.fa=!1}function lt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dt(t){this.src=t,this.g={},this.h=0}function ft(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=_(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(lt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}dt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=gt(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ht(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var mt="closure_lm_"+(1e6*Math.random()|0),pt={};function yt(t,e,n,r,s){if(r&&r.once)return bt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)yt(t,e[i],n,r,s);return null}return n=Dt(n),t&&t[ct]?t.N(e,n,d(r)?!!r.capture:!!r,s):wt(t,e,n,!1,r,s)}function wt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=d(s)?!!s.capture:!!s,a=St(t);if(a||(t[mt]=a=new dt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)st||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=_t;return t}function bt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)bt(t,e[i],n,r,s);return null}return n=Dt(n),t&&t[ct]?t.O(e,n,d(r)?!!r.capture:!!r,s):wt(t,e,n,!0,r,s)}function It(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)It(t,e[i],n,r,s);else r=d(r)?!!r.capture:!!r,n=Dt(n),t&&t[ct]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=gt(i,n,r,s),-1<n&&(lt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=St(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,r,s)),(n=-1<t?e[t]:null)&&Tt(n))}function Tt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ct])ft(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=St(e))?(ft(n,t),0==n.h&&(n.src=null,e[mt]=null)):lt(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function _t(t,e){if(t.ca)t=!0;else{e=new ot(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Tt(t),t=n.call(r,e)}return t}function St(t){return t=t[mt],t instanceof dt?t:null}var Nt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dt(t){return"function"===typeof t?t:(t[Nt]||(t[Nt]=function(e){return t.handleEvent(e)}),t[Nt])}function At(){I.call(this),this.i=new dt(this),this.P=this,this.I=null}function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),q(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ct(o,r,!0,e)&&s}if(o=e.g=t,s=Ct(o,r,!0,e)&&s,s=Ct(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ct(o,r,!1,e)&&s}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ft(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}b(At,I),At.prototype[ct]=!0,At.prototype.removeEventListener=function(t,e,n,r){It(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)lt(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var kt=u.JSON.stringify;function Ot(){var t=jt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Rt,Lt=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Pt=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new Ft}),(function(t){return t.reset()})),Ft=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Mt(t){u.setTimeout((function(){throw t}),0)}function Vt(t,e){Rt||qt(),Ut||(Rt(),Ut=!0),jt.add(t,e)}function qt(){var t=u.Promise.resolve(void 0);Rt=function(){t.then(Bt)}}var Ut=!1,jt=new Lt;function Bt(){for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function Kt(t,e){At.call(this),this.h=t||1,this.g=e||u,this.j=w(this.kb,this),this.l=Date.now()}function Gt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function $t(t){t.g=zt((function(){t.g=null,t.i&&(t.i=!1,$t(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}b(Kt,At),o=Kt.prototype,o.da=!1,o.S=null,o.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Gt(this),this.start()))}},o.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){Kt.Z.M.call(this),Gt(this),delete this.g};var Ht=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return s(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:$t(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(I);function Qt(t){I.call(this),this.h=t,this.g={}}b(Qt,I);var Wt=[];function Yt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var s=0;s<n.length;s++){var i=yt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Tt(t)}),t),t.g={}}function Xt(){this.g=!0}function Zt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function te(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function ee(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+re(t,n)+(r?" "+r:"")}))}function ne(t,e){t.info((function(){return"TIMEOUT: "+e}))}function re(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return kt(n)}catch(a){return e}}Qt.prototype.M=function(){Qt.Z.M.call(this),Jt(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var se={},ie=null;function oe(){return ie=ie||new At}function ae(t){it.call(this,se.Ma,t)}function ce(t){var e=oe();xt(e,new ae(e,t))}function ue(t,e){it.call(this,se.STAT_EVENT,t),this.stat=e}function he(t){var e=oe();xt(e,new ue(e,t))}function le(t,e){it.call(this,se.Na,t),this.size=e}function de(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}se.Ma="serverreachability",b(ae,it),se.STAT_EVENT="statevent",b(ue,it),se.Na="timingevent",b(le,it);var fe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function me(){}function pe(t){return t.h||(t.h=t.i())}function ye(){}me.prototype.h=null;var we,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function be(){it.call(this,"d")}function Ie(){it.call(this,"c")}function Te(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Qt(this),this.P=Se,t=$?125:void 0,this.W=new Kt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}b(be,it),b(Ie,it),b(Te,me),Te.prototype.g=function(){return new XMLHttpRequest},Te.prototype.i=function(){return{}},we=new Te;var Se=45e3,Ne={},De={};function Ae(t,e,n){t.K=1,t.v=Ze(He(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),Re(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),mn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=Ir(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(w(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ce(1),Zt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){for(var r,s=!0;!t.I&&t.C<n.length;){if(r=Oe(t,n),r==De){4==e&&(t.o=4,he(14),s=!1),ee(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ne){t.o=4,he(15),ee(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}ee(t.j,t.m,r,null),Ve(t,r)}Ce(t)&&r!=De&&r!=Ne&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,he(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),fr(e),e.L=!0,he(11))):(ee(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Fe(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?De:(n=Number(e.substring(n,r)),isNaN(n)?Ne:(r+=1,r+n>e.length?De:(e=e.substr(r,n),t.C=r+n,e)))}function Re(t){t.Y=Date.now()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=de(w(t.eb,t),e)}function Pe(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||pr(t.l,t)}function Me(t){Pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Gt(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(i){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;mr(n),rr(n)}dr(n),he(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=de(w(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(i){}n.ka=void 0}}else wr(n,11)}else if((t.J||n.g==t)&&mr(n),!x(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){var i=s[e];if(n.U=i[0],i=i[1],2==n.G)if("c"==i[0]){n.J=i[1],n.la=i[2];var o=i[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=i[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=i[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var h=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(h){var l=r.i;!l.g&&(O(h,"spdy")||O(h,"quic")||O(h,"h2"))&&(l.j=l.l,l.g=new Set,l.h&&(_n(l,l.h),l.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,Xe(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var f=t;if(r.oa=br(r,r.H?r.la:null,r.W),f.J){Sn(r.i,f);var g=f,m=r.K;m&&g.setTimeout(m),g.B&&(Pe(g),Re(g)),r.g=f}else lr(r);0<n.l.length&&or(n)}else"stop"!=i[0]&&"close"!=i[0]||wr(n,7);else 3==n.G&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?wr(n,7):nr(n):"noop"!=i[0]&&n.j&&n.j.wa(i),n.A=0)}ce(4)}catch(i){}}function qe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"===typeof t)S(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=qe(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function je(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof je)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Be(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ke(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Ke(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}o=Ee.prototype,o.setTimeout=function(t){this.P=t},o.gb=function(t){t=t.target;var e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},o.Ia=function(t){try{if(t==this.g)t:{var e=Yn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||$||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=e||7==n||ce(8==n||0>=r?3:2),Pe(this);var s=this.g.ba();this.N=s;e:if(Ce(this)){var i=Jn(this.g);t="";var o=i.length,a=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Fe(this);var c="";break e}this.h.i=new u.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(i[n],{stream:a&&n==o-1});i.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==s,te(this.j,this.u,this.A,this.m,this.X,e,s),this.i){if(this.$&&!this.J){e:{if(this.g){var h,l=this.g;if((h=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(h)){var d=h;break e}}d=null}if(!(s=d)){this.i=!1,this.o=3,he(12),Me(this),Fe(this);break t}ee(this.j,this.m,s,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,s)}this.U?(ke(this,e,c),$&&this.i&&3==e&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(ee(this.j,this.m,c,null),Ve(this,c)),4==e&&Me(this),this.i&&!this.I&&(4==e?pr(this.l,this):(this.i=!1,Re(this)))}else 400==s&&0<c.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),Me(this),Fe(this)}}}catch(e){}},o.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Pe(this),ke(this,t,e),this.i&&4!=t&&Re(this))}},o.cancel=function(){this.I=!0,Me(this)},o.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(ne(this.j,this.A),2!=this.K&&(ce(3),he(17)),Me(this),this.o=2,Fe(this)):Le(this,this.Y-t)},o=je.prototype,o.R=function(){Be(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},o.T=function(){return Be(this),this.g.concat()},o.get=function(t,e){return Ke(this.h,t)?this.h[t]:e},o.set=function(t,e){Ke(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},o.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $e(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $e){this.g=void 0!==e?e:t.g,Qe(this,t.j),this.s=t.s,We(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new ln;n.i=e.i,e.g&&(n.g=new je(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match(Ge))?(this.g=!!e,Qe(this,n[1]||"",!0),this.s=nn(n[2]||""),We(this,n[3]||"",!0),Ye(this,n[4]),this.l=nn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=nn(n[7]||"")):(this.g=!!e,this.h=new ln(null,this.g))}function He(t){return new $e(t)}function Qe(t,e,n){t.j=n?nn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function We(t,e,n){t.i=n?nn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof ln?(t.h=e,yn(t.h,t.g)):(n||(e=rn(e,un)),t.h=new ln(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ze(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tn(t){return t instanceof $e?He(t):new $e(t,void 0)}function en(t,e,n,r){var s=new $e(null,void 0);return t&&Qe(s,t),e&&We(s,e),n&&Ye(s,n),r&&(s.l=r),s}function nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,sn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}$e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rn(e,on,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(rn(e,on,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(rn(n,"/"==n.charAt(0)?cn:an,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rn(n,hn)),t.join("")};var on=/[#\/\?@]/g,an=/[#\?:]/g,cn=/[#\?]/g,un=/[#\?@]/g,hn=/#/g;function ln(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dn(t){t.g||(t.g=new je,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function fn(t,e){dn(t),e=pn(t,e),Ke(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ke(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Be(t)))}function gn(t,e){return dn(t),e=pn(t,e),Ke(t.g.h,e)}function mn(t,e,n){fn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),A(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yn(t,e){e&&!t.j&&(dn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(fn(this,e),mn(this,n,t))}),t)),t.j=e}o=ln.prototype,o.add=function(t,e){dn(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},o.forEach=function(t,e){dn(this),this.g.forEach((function(n,r){S(n,(function(n){t.call(e,n,r,this)}),this)}),this)},o.T=function(){dn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},o.R=function(t){dn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=D(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=D(e,t[n])}return e},o.set=function(t,e){return dn(this),this.i=null,t=pn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},o.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var wn=function(){function t(t,e){this.h=t,this.g=e}return t}();function vn(t){this.l=t||bn,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bn=10;function In(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Tn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _n(t,e){t.g?t.g.add(e):t.h=e}function Sn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Nn(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var s=i(t.g.values()),o=s.next();!o.done;o=s.next()){var a=o.value;r=r.concat(a.D)}}catch(c){e={error:c}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return r}return A(t.i)}function Dn(){}function An(){this.g=new Dn}function xn(t,e,n){var r=n||"";try{Ue(t,(function(t,n){var s=t;d(t)&&(s=kt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Cn(t,e){var n=new Xt;if(u.Image){var r=new Image;r.onload=v(kn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(kn,n,r,"TestLoadImage: error",!1,e),r.onabort=v(kn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(kn,n,r,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function kn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function On(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){var t,e;if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=i(this.g.values()),r=n.next();!r.done;r=n.next()){var s=r.value;s.cancel()}}catch(o){t={error:o}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Dn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},Dn.prototype.parse=function(t){return u.JSON.parse(t,void 0)},b(On,me),On.prototype.g=function(){return new Rn(this.l,this.j)},On.prototype.i=function(t){return function(){return t}}({}),b(Rn,At);var Ln=0;function Pn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}o=Rn.prototype,o.open=function(t,e){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},o.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Ln},o.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},o.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Mn(this),3==this.readyState&&Pn(this)}},o.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},o.Ta=function(t){this.g&&(this.response=t,Fn(this))},o.ha=function(){this.g&&Fn(this)},o.setRequestHeader=function(t,e){this.v.append(t,e)},o.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Vn=u.JSON.parse;function qn(t){At.call(this),this.headers=new je,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}b(qn,At);var Un="",jn=/^https?$/i,Bn=["POST","PUT"];function Kn(t){return G&&et()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Gn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$n(t),Qn(t)}function $n(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof c&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))zt(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Yn(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var s;if(s=0===n){var i=String(t.H).match(Ge)[1]||null;if(!i&&u.self&&u.self.location){var o=u.self.location.protocol;i=o.substr(0,o.length-1)}s=!jn.test(i?i.toLowerCase():"")}e=s}if(e)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var a=2<Yn(t)?t.g.statusText:""}catch(h){a=""}t.j=a+" ["+t.ba()+"]",$n(t)}}finally{Qn(t)}}}function Qn(t,e){if(t.g){Wn(t);var n=t.g,r=t.C[0]?h:null;t.g=null,t.C=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch(s){}}}function Wn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){var e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function er(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=tr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=tr("baseRetryDelayMs",5e3,t),this.$a=tr("retryDelaySeedMs",1e4,t),this.Ya=tr("forwardChannelMaxRetries",2,t),this.ra=tr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function nr(t){if(sr(t),3==t.G){var e=t.V++,n=He(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ur(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ze(He(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ir(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}vr(t)}function rr(t){t.g&&(fr(t),t.g.cancel(),t.g=null)}function sr(t){rr(t),t.u&&(u.clearTimeout(t.u),t.u=null),mr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&u.clearTimeout(t.m),t.m=null)}function ir(t,e){t.l.push(new wn(t.Za++,e)),3==t.G&&or(t)}function or(t){In(t.i)||t.m||(t.m=!0,Vt(t.Ha,t),t.C=0)}function ar(t,e){return!(Tn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=de(w(t.Ha,t,e),yr(t,t.C)),t.C++,!0))}function cr(t,e){var n;n=e?e.m:t.V++;var r=He(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ur(t,r),t.o&&t.s&&Zn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=hr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),_n(t.i,n),Ae(n,r,e)}function ur(t,e){t.j&&Ue({},(function(t,n){Xe(e,n,t)}))}function hr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?w(t.j.Oa,t.j,t):null;t:for(var s=t.l,i=-1;;){var o=["count="+n];-1==i?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);for(var a=!0,c=0;c<n;c++){var u=s[c].h,h=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{xn(h,o,"req"+u+"_")}catch(l){r&&r(h)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function lr(t){t.g||t.u||(t.Y=1,Vt(t.Ga,t),t.A=0)}function dr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=de(w(t.Ga,t),yr(t,t.A)),t.A++,!0)}function fr(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ur(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Zn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ze(He(e)),n.s=null,n.U=!0,xe(n,t)}function mr(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){mr(t),fr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,Sn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=oe(),xt(r,new le(r,n,e,s)),or(t)}else lr(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&ar(t,e)||2==r&&dr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}function yr(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function wr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=w(t.jb,t);n||(n=new $e("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Qe(n,"https"),Ze(n)),Cn(n.toString(),r)}else he(2);t.G=0,t.j&&t.j.va(e),vr(t),sr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==Nn(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function br(t,e,n){var r=tn(n);if(""!=r.i)e&&We(r,e+"."+r.i),Ye(r,r.m);else{var s=u.location;r=en(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&F(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ur(t,r),r}function Ir(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qn(new On({ib:!0})):new qn(t.qa),e.L=t.H,e}function Tr(){}function Er(){if(G&&!(10<=Number(rt)))throw Error("Environmental error: no available transport.")}function _r(t,e){At.call(this),this.g=new er(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dr(this)}function Sr(t){be.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Nr(){Ie.call(this),this.status=1}function Dr(t){this.g=t}o=qn.prototype,o.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():we.g(),this.C=this.u?pe(this.u):pe(we),this.g.onreadystatechange=w(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void zn(this,i)}t=n||"";var s=new je(this.headers);r&&Ue(r,(function(t,e){s.set(e,t)})),r=N(s.T()),n=u.FormData&&t instanceof u.FormData,!(0<=_(Bn,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=Kn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zn(this,i)}},o.pa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},o.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Qn(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),qn.Z.M.call(this)},o.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},o.cb=function(){Hn(this)},o.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},o.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},o.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Vn(e)}},o.Da=function(){return this.m},o.La=function(){return"string"===typeof this.j?this.j:String(this.j)},o=er.prototype,o.ma=8,o.G=1,o.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},o.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ee(this,this.h,t,void 0),n=this.s;if(this.P&&(n?(n=M(n),q(n,this.P)):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,s=0;s<this.l.length;s++){var i=this.l[s];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(r+=i,4096<r){r=s;break t}if(4096===r||s===this.l.length-1){r=s+1;break t}}r=1e3}else r=1e3;r=hr(this,e,r),s=He(this.F),Xe(s,"RID",t),Xe(s,"CVER",22),this.D&&Xe(s,"X-HTTP-Session-Id",this.D),ur(this,s),this.o&&n&&Zn(s,this.o,n),_n(this.i,e),this.Ra&&Xe(s,"TYPE","init"),this.ja?(Xe(s,"$req",r),Xe(s,"SID","null"),e.$=!0,Ae(e,s,null)):Ae(e,s,r),this.G=2}}else 3==this.G&&(t?cr(this,t):0==this.l.length||In(this.i)||cr(this))},o.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=de(w(this.bb,this),t)}},o.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,he(10),rr(this),gr(this))},o.ab=function(){null!=this.v&&(this.v=null,rr(this),dr(this),he(19))},o.jb=function(t){t?(this.h.info("Successfully pinged google.com"),he(2)):(this.h.info("Failed to ping google.com"),he(1))},o=Tr.prototype,o.xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Oa=function(){},Er.prototype.g=function(t,e){return new _r(t,e)},b(_r,At),_r.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vt(w(t.hb,t,e))),he(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=br(t,null,t.W),or(t)},_r.prototype.close=function(){nr(this.g)},_r.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ir(this.g,e)}else this.v?(e={},e.__data__=kt(t),ir(this.g,e)):ir(this.g,t)},_r.prototype.M=function(){this.g.j=null,delete this.j,nr(this.g),delete this.g,_r.Z.M.call(this)},b(Sr,be),b(Nr,Ie),b(Dr,Tr),Dr.prototype.xa=function(){xt(this.g,"a")},Dr.prototype.wa=function(t){xt(this.g,new Sr(t))},Dr.prototype.va=function(t){xt(this.g,new Nr(t))},Dr.prototype.ua=function(){xt(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,_r.prototype.send=_r.prototype.u,_r.prototype.open=_r.prototype.m,_r.prototype.close=_r.prototype.close,fe.NO_ERROR=0,fe.TIMEOUT=8,fe.HTTP_ERROR=6,ge.COMPLETE="complete",ye.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",At.prototype.listen=At.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Ar=function(){return new Er},xr=function(){return oe()},Cr=fe,kr=ge,Or=se,Rr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Lr=On,Pr=ye,Fr=qn}).call(this,n("c8ba"))},dc59:function(t,e,n){"use strict";n.d(e,"b",(function(){return H})),n.d(e,"c",(function(){return Q})),n.d(e,"a",(function(){return W})),n.d(e,"f",(function(){return Y})),n.d(e,"g",(function(){return J})),n.d(e,"e",(function(){return X})),n.d(e,"i",(function(){return Z})),n.d(e,"h",(function(){return tt})),n.d(e,"d",(function(){return et})),n.d(e,"k",(function(){return nt})),n.d(e,"l",(function(){return rt})),n.d(e,"j",(function(){return st}));var r=n("4f60"),s=n("614a"),i=n("0829"),o=n("a8e9"),a=n("ffa6");const c="@firebase/firestore-compat",u="0.1.2";
/**
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
 */
function h(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
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
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function d(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class f{constructor(t){this._delegate=t}static fromBase64String(t){return d(),new f(i["b"].fromBase64String(t))}static fromUint8Array(t){return l(),new f(i["b"].fromUint8Array(t))}toBase64(){return d(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function g(t){return m(t,["next","error","complete"])}function m(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
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
 */class p{enableIndexedDbPersistence(t,e){return Object(i["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(i["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(i["x"])(t._delegate)}}class y{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof i["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(i["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(i["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new O(this,Object(i["y"])(this._delegate,t))}catch(e){throw _(e,"collection()","Firestore.collection()")}}doc(t){try{return new E(this,Object(i["E"])(this._delegate,t))}catch(e){throw _(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new x(this,Object(i["z"])(this._delegate,t))}catch(e){throw _(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(i["db"])(this._delegate,e=>t(new b(this,e)))}batch(){return Object(i["K"])(this._delegate),new I(new i["l"](this._delegate,t=>Object(i["L"])(this._delegate,t)))}loadBundle(t){return Object(i["V"])(this._delegate,t)}namedQuery(t){return Object(i["W"])(this._delegate,t).then(t=>t?new x(this,t):null)}}class w extends i["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new f(new i["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return E.forKey(e,this.firestore,null)}}function v(t){Object(i["gb"])(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new w(t)}get(t){const e=R(t);return this._delegate.get(e).then(t=>new D(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=R(t);return n?(h("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=R(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=R(t);return this._delegate.delete(e),this}}class I{constructor(t){this._delegate=t}set(t,e,n){const r=R(t);return n?(h("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=R(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=R(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class T{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new i["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new A(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=T.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let s=r.get(e);return s||(s=new T(t,new w(t),e),r.set(e,s)),s}}T.INSTANCES=new WeakMap;class E{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new w(t)}static forPath(t,e,n){if(t.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new E(e,new i["d"](e._delegate,n,new i["n"](t)))}static forKey(t,e,n){return new E(e,new i["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new O(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new O(this.firestore,Object(i["y"])(this._delegate,t))}catch(e){throw _(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(o["i"])(t),t instanceof i["d"]&&Object(i["cb"])(this._delegate,t)}set(t,e){e=h("DocumentReference.set",e);try{return e?Object(i["fb"])(this._delegate,t,e):Object(i["fb"])(this._delegate,t)}catch(n){throw _(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,t):Object(i["kb"])(this._delegate,t,e,...n)}catch(r){throw _(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...t){const e=S(t),n=N(t,t=>new D(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),e.then(t=>new D(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new E(this.firestore,t?this._delegate.withConverter(T.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function _(t,e,n){return t.message=t.message.replace(e,n),t}function S(t){for(const e of t)if("object"===typeof e&&!g(e))return e;return{}}function N(t,e){var n,r;let s;return s=g(t[0])?t[0]:g(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{s.next&&s.next(e(t))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class D{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new E(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class A extends D{data(t){const e=this._delegate.data(t);return Object(i["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class x{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new w(t)}where(t,e,n){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(t,e,n)))}catch(r){throw _(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(t,e)))}catch(n){throw _(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(t)))}catch(e){throw _(e,"limit()","Query.limit()")}}limitToLast(t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(t)))}catch(e){throw _(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...t)))}catch(e){throw _(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...t)))}catch(e){throw _(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...t)))}catch(e){throw _(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new x(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...t)))}catch(e){throw _(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(i["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),e.then(t=>new k(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=S(t),n=N(t,t=>new k(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(i["X"])(this._delegate,e,n)}withConverter(t){return new x(this.firestore,t?this._delegate.withConverter(T.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new A(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class k{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new x(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new A(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new A(this._firestore,n))})}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class O extends x{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new E(this.firestore,t):null}doc(t){try{return new E(this.firestore,void 0===t?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,t))}catch(e){throw _(e,"doc()","CollectionReference.doc()")}}add(t){return Object(i["u"])(this._delegate,t).then(t=>new E(this.firestore,t))}isEqual(t){return Object(i["cb"])(this._delegate,t._delegate)}withConverter(t){return new O(this.firestore,t?this._delegate.withConverter(T.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function R(t){return Object(i["p"])(t,i["d"])}
/**
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
 */class L{constructor(...t){this._delegate=new i["f"](...t)}static documentId(){return new L(i["o"].keyField().canonicalString())}isEqual(t){return t=Object(o["i"])(t),t instanceof i["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
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
 */class P{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(i["eb"])();return t._methodName="FieldValue.serverTimestamp",new P(t)}static delete(){const t=Object(i["C"])();return t._methodName="FieldValue.delete",new P(t)}static arrayUnion(...t){const e=Object(i["w"])(...t);return e._methodName="FieldValue.arrayUnion",new P(e)}static arrayRemove(...t){const e=Object(i["v"])(...t);return e._methodName="FieldValue.arrayRemove",new P(e)}static increment(t){const e=Object(i["S"])(t);return e._methodName="FieldValue.increment",new P(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
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
 */const F={Firestore:y,GeoPoint:i["h"],Timestamp:i["k"],Blob:f,Transaction:b,WriteBatch:I,DocumentReference:E,DocumentSnapshot:D,Query:x,QueryDocumentSnapshot:A,QuerySnapshot:k,CollectionReference:O,FieldPath:L,FieldValue:P,setLogLevel:v,CACHE_SIZE_UNLIMITED:i["c"]};function M(t,e){t.INTERNAL.registerComponent(new a["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)},"PUBLIC").setServiceProps(Object.assign({},F)))}
/**
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
 */function V(t){M(t,(t,e)=>new y(t,e,new p)),t.registerVersion(c,u)}V(s["a"]);var q=n("a1e9"),U=n("5c40");const j={apiKey:"AIzaSyC7lEUWH9z2H2QRezoQJvu2AZ5e5ev6WLM",authDomain:"julix-b1777.firebaseapp.com",projectId:"julix-b1777",storageBucket:"julix-b1777.appspot.com",messagingSenderId:"875585337078",appId:"1:875585337078:web:ef49a54cc9e99f3360ded7",measurementId:"G-1TRS9LPWKQ"},B=r["a"].initializeApp(j),K=B.firestore(),G=K.collection("items"),z=K.collection("pedidos"),$=K.collection("clientes");Object(i["F"])(K).catch(t=>{"failed-precondition"==t.code||t.code});r["a"].firestore.FieldValue.increment();const H=t=>G.add(t),Q=t=>z.add(t),W=t=>$.add(t),Y=async t=>{const e=await G.doc(t).get();return e.exists?e.data():null},J=async t=>{const e=await z.doc(t).get();return e.exists?e.data():null},X=async t=>{const e=await $.doc(t).get();return e.exists?e.data():null},Z=(t,e)=>G.doc(t).update(e),tt=(t,e)=>$.doc(t).update(e),et=t=>G.doc(t).delete(),nt=()=>{const t=Object(q["l"])([]),e=G.onSnapshot(e=>{t.value=e.docs.map(t=>({id:t.id,...t.data()}))});return Object(U["y"])(e),t},rt=()=>{const t=Object(q["l"])([]),e=z.onSnapshot(e=>{t.value=e.docs.map(t=>({id:t.id,...t.data()}))});return Object(U["y"])(e),t},st=()=>{const t=Object(q["l"])([]),e=$.onSnapshot(e=>{t.value=e.docs.map(t=>({id:t.id,...t.data()}))});return Object(U["y"])(e),t}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),i=r(n.split("/")),o=Math.min(s.length,i.length),a=o,c=0;c<o;c++)if(s[c]!==i[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!s){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))}}]);
//# sourceMappingURL=chunk-7eaa7e79.022c99f1.js.map