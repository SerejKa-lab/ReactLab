(window["webpackJsonpmy-app-1"]=window["webpackJsonpmy-app-1"]||[]).push([[5],{291:function(e,a,t){"use strict";var s=t(0),n=t.n(s),r=t(30),i=t(18);a.a=function(e){return Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(a){return a.isAuth?n.a.createElement(e,a):n.a.createElement(r.a,{to:"/login"})}))}},294:function(e,a,t){e.exports={messages:"Messages_messages__iIGY7",talker:"Messages_talker__1MIyn",talkerFirst:"Messages_talkerFirst__1PmnF",talkerSecond:"Messages_talkerSecond__25-pf",addMessageForm:"Messages_addMessageForm__Z7JYy"}},295:function(e,a,t){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__2BsfM",dialogNames:"Dialogs_dialogNames__1bN4u",dialog:"Dialogs_dialog__2XvMI",active:"Dialogs_active__429e6",messages:"Dialogs_messages__2sRsc",message:"Dialogs_message__1Tw5j",greeting:"Dialogs_greeting__1Bbo4"}},296:function(e,a,t){e.exports={dialogNamesWrapper:"DialogName_dialogNamesWrapper___U0Ha",dialogNames:"DialogName_dialogNames__2qUDd",dialog:"DialogName_dialog__2Tzd4",active:"DialogName_active__Vvx_C"}},309:function(e,a,t){"use strict";t.r(a);var s=t(7),n=t(18),r=t(0),i=t.n(r),o=t(295),l=t.n(o),c=t(296),g=t.n(c),m=t(16),d=function(e){var a=e.nameData.map((function(e,a){var t="/dialogs/"+e.path;return i.a.createElement("div",{className:g.a.dialog,key:a},i.a.createElement(m.c,{to:t,activeClassName:g.a.active},i.a.createElement("img",{src:e.avatar,alt:"Avatar"}),e.name))}));return i.a.createElement("div",{className:g.a.dialogNamesWrapper},i.a.createElement("div",{className:g.a.dialogNames},a))},u=t(30),_=t(294),p=t.n(_),v=t(126),f=t(127),N=t(71),b=t(70),E=Object(b.a)(100),M=Object(f.a)({form:"newMessage"})((function(e){var a=e.handleSubmit,t=e.reset,s=e.addMessage,n=e.dialogId,r=e.messageId;return i.a.createElement("form",{onSubmit:a((function(e){s(n,r,e.newMessage),t()})),className:p.a.addMessageForm},i.a.createElement(v.a,{name:"newMessage",type:"text",component:N.b,validate:[b.b,E]}),i.a.createElement("button",{type:"submit"},"Send message"))})),k=function(e){var a=e.dialogId,t=e.messages,s=e.addMessage,n=t[0].id,r=function(e){var a=p.a.talker,t=p.a.talkerFirst,s=p.a.talkerSecond;return e===n?"".concat(a," ").concat(t):"".concat(a," ").concat(s)},o=t.map((function(e,a){return i.a.createElement("div",{className:r(e.id),key:e.id+a},e.text)}));return i.a.createElement("div",{className:p.a.messages},o,i.a.createElement(M,{addMessage:s,dialogId:a,messageId:n}))},D=function(e){var a=e.dialogsPage,t=e.addMessage,s=a.map((function(e,a){var s=e.id,n=e.messages,r="/dialogs/"+e.path;return i.a.createElement(u.b,{path:r,key:a,render:function(){return i.a.createElement(k,{dialogId:s,messages:n,addMessage:t})}})})),n=a.map((function(e){return{path:e.path,name:e.name,avatar:e.avatar}}));return i.a.createElement("div",{className:l.a.dialogsWrapper},i.a.createElement(d,{nameData:n}),s,i.a.createElement(u.b,{exact:!0,path:"/dialogs",render:function(){return i.a.createElement("span",{className:l.a.greeting},"Please, choose a dialog",i.a.createElement("br",null),"or create a new one.")}}))},h=t(291),w=t(125);a.default=Object(s.compose)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:w.a}),h.a)(D)}}]);
//# sourceMappingURL=5.e5310c97.chunk.js.map