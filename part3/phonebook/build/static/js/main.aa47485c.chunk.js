(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(17),u=t.n(a),s=(t(23),t(18)),o=t(8),i=t(3),l=(t(24),t(0)),m=function(e){var n=e.person,t=e.deletEntry;return Object(l.jsxs)("li",{children:[n.name," ",n.number," ",Object(l.jsx)("button",{onClick:function(){return t(n)},children:"Delete"})]})},d=function(e){var n=e.persons,t=e.deletEntry;return Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsx)(m,{person:e,deletEntry:t},e.id)}))})},f=function(e){var n=e.filter,t=e.filterHandler;return Object(l.jsxs)(l.Fragment,{children:[" filter shown with: ",Object(l.jsx)("input",{name:"filter",value:n,onChange:t})]})},j=function(e){var n=e.handleSubmit,t=e.handleInput,r=e.newName,c=e.newNumber;return Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{name:"name",value:r,onChange:t})]}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{name:"number",value:c,onChange:t})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},b=t(5),h=t.n(b),p="/api/persons",O=function(e){var n=e.message;switch(n.type){case null:return null;case"err":return Object(l.jsx)("div",{className:"notification error",children:n.message});default:return Object(l.jsx)("div",{className:"notification success",children:n.message})}},g=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),u=Object(i.a)(a,2),m=u[0],b=u[1],g=Object(r.useState)(""),v=Object(i.a)(g,2),x=v[0],y=v[1],w=Object(r.useState)(""),S=Object(i.a)(w,2),k=S[0],N=S[1],C=Object(r.useState)({message:null,type:null}),E=Object(i.a)(C,2),T=E[0],I=E[1];Object(r.useEffect)((function(){h.a.get(p).then((function(e){return e.data})).then((function(e){return c(e)}))}),[]);var D=""===k?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(O,{message:T}),Object(l.jsx)(f,{filter:k,filterHandler:function(e){N(e.target.value)}}),Object(l.jsx)("h3",{children:"Add a new"}),Object(l.jsx)(j,{handleSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===m}))){var n=t.find((function(e){return e.name===m})),r=Object(o.a)(Object(o.a)({},n),{},{number:x});window.confirm("".concat(m," is already added to phonebook,replace the old number with new one?"))&&function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))}(r.id,r).then((function(e){c(t.map((function(n){return n.id===e.id?e:n}))),I({message:" ".concat(e.name," was successfully updated"),type:"success"}),setTimeout((function(){return I({message:null,type:null})}),5e3)})).catch((function(e){I({message:"Information of ".concat(n.name," has already been removed from server"),type:"err"}),setTimeout((function(){return I({message:null,type:null})}),5e3),c(t.filter((function(e){return n.id!==e.id})))}))}else{(function(e){return h.a.post(p,e).then((function(e){return e.data}))})({name:m,number:x}).then((function(e){c([].concat(Object(s.a)(t),[e])),I({message:"Added ".concat(e.name),type:"success"}),setTimeout((function(){return I({message:null,type:null})}),5e3)})).catch((function(e){I({message:e.response.data.error,type:"err"}),setTimeout((function(){return I({message:null,type:null})}),5e3)}))}b(""),y("")},newName:m,newNumber:x,handleInput:function(e){"name"===e.target.name&&b(e.target.value),"number"===e.target.name&&y(e.target.value)}}),Object(l.jsx)("h3",{children:"Numbers"}),Object(l.jsx)(d,{persons:D,deletEntry:function(e){var n;window.confirm("Delete ".concat(e.name,"?"))&&((n=e.id,h.a.delete("".concat(p,"/").concat(n)).then((function(e){return e.data}))).then((function(n){I({message:" ".concat(e.name," was succeefuly  removed from server"),type:"success"}),setTimeout((function(){return I({message:null,type:null})}),5e3),console.log(n.data)})).catch((function(n){I({message:"Information of ".concat(e.name," has already been removed from server"),type:"err"}),setTimeout((function(){return I({message:null,type:null})}),5e3)})),c(t.filter((function(n){return n.id!==e.id}))))}})]})};u.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.aa47485c.chunk.js.map