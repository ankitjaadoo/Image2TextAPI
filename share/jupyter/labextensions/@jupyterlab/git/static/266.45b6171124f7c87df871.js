"use strict";(self.webpackChunk_jupyterlab_git=self.webpackChunk_jupyterlab_git||[]).push([[266],{9266:(t,s,i)=>{i.r(s),i.d(s,{LinkedList:()=>e});class e{constructor(){this._first=null,this._last=null,this._size=0}get isEmpty(){return 0===this._size}get size(){return this._size}get length(){return this._size}get first(){return this._first?this._first.value:void 0}get last(){return this._last?this._last.value:void 0}get firstNode(){return this._first}get lastNode(){return this._last}*[Symbol.iterator](){let t=this._first;for(;t;)yield t.value,t=t.next}*retro(){let t=this._last;for(;t;)yield t.value,t=t.prev}*nodes(){let t=this._first;for(;t;)yield t,t=t.next}*retroNodes(){let t=this._last;for(;t;)yield t,t=t.prev}assign(t){this.clear();for(const s of t)this.addLast(s)}push(t){this.addLast(t)}pop(){return this.removeLast()}shift(t){this.addFirst(t)}unshift(){return this.removeFirst()}addFirst(t){let s=new r.LinkedListNode(this,t);return this._first?(s.next=this._first,this._first.prev=s,this._first=s):(this._first=s,this._last=s),this._size++,s}addLast(t){let s=new r.LinkedListNode(this,t);return this._last?(s.prev=this._last,this._last.next=s,this._last=s):(this._first=s,this._last=s),this._size++,s}insertBefore(t,s){if(!s||s===this._first)return this.addFirst(t);if(!(s instanceof r.LinkedListNode)||s.list!==this)throw new Error("Reference node is not owned by the list.");let i=new r.LinkedListNode(this,t),e=s,l=e.prev;return i.next=e,i.prev=l,e.prev=i,l.next=i,this._size++,i}insertAfter(t,s){if(!s||s===this._last)return this.addLast(t);if(!(s instanceof r.LinkedListNode)||s.list!==this)throw new Error("Reference node is not owned by the list.");let i=new r.LinkedListNode(this,t),e=s,l=e.next;return i.next=l,i.prev=e,e.next=i,l.prev=i,this._size++,i}removeFirst(){let t=this._first;if(t)return t===this._last?(this._first=null,this._last=null):(this._first=t.next,this._first.prev=null),t.list=null,t.next=null,t.prev=null,this._size--,t.value}removeLast(){let t=this._last;if(t)return t===this._first?(this._first=null,this._last=null):(this._last=t.prev,this._last.next=null),t.list=null,t.next=null,t.prev=null,this._size--,t.value}removeNode(t){if(!(t instanceof r.LinkedListNode)||t.list!==this)throw new Error("Node is not owned by the list.");let s=t;s===this._first&&s===this._last?(this._first=null,this._last=null):s===this._first?(this._first=s.next,this._first.prev=null):s===this._last?(this._last=s.prev,this._last.next=null):(s.next.prev=s.prev,s.prev.next=s.next),s.list=null,s.next=null,s.prev=null,this._size--}clear(){let t=this._first;for(;t;){let s=t.next;t.list=null,t.prev=null,t.next=null,t=s}this._first=null,this._last=null,this._size=0}}var r;!function(t){t.from=function(s){let i=new t;return i.assign(s),i}}(e||(e={})),function(t){t.LinkedListNode=class{constructor(t,s){this.list=null,this.next=null,this.prev=null,this.list=t,this.value=s}}}(r||(r={}))}}]);
