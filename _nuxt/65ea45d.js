(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{437:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7f54217a",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(437)},446:function(t,e,n){var o=n(21)(!1);o.push([t.i,".done{text-decoration:line-through}",""]),t.exports=o},455:function(t,e,n){"use strict";n.r(e);var o={computed:{todos:function(){return this.$store.state.users.voted},msgLogs:function(){return this.$store.state.users.messageLogs}},methods:{proc:function(){this.$store.dispatch("users/getVotedList",{username:"pol"})}}},r=(n(445),n(88)),c=n(128),l=n.n(c),d=n(264),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{on:{click:t.proc}},[t._v("\r\n    CLICK ME\r\n  ")]),t._v(" "),n("div",[t._v("\r\n    "+t._s(t.todos)+"\r\n  ")]),t._v(" "),n("div",[t._v("\r\n    "+t._s(t.msgLogs)+"\r\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a})}}]);