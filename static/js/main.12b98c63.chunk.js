(this["webpackJsonptips-calculator"]=this["webpackJsonptips-calculator"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var a=s(1),l=s.n(a),c=s(4),i=s.n(c),n=s(2),r=(s(9),s.p+"static/media/logo.3cc0528b.svg"),j=s.p+"static/media/icon-dollar.9f9be353.svg",p=s.p+"static/media/icon-person.65bfd204.svg",o=s(0),b=function(e){var t=e.styleName,s=e.value,a=e.onClick;return Object(o.jsx)("button",{className:t,onClick:a,children:s})},d=function(e){var t=e.billValue,s=e.peopleQty,a=e.setTip,l=e.inputChange,c=e.peopleQtyChange,i=e.customTipsChange;return Object(o.jsxs)("div",{className:"input",children:[Object(o.jsxs)("div",{className:"bill-container",children:[Object(o.jsx)("div",{className:"label-wrapper",children:Object(o.jsx)("label",{htmlFor:"inp-bill",children:"Bill"})}),Object(o.jsxs)("div",{className:"inp-wrapper",children:[Object(o.jsx)("input",{type:"text",className:"inp-text",name:"inp-bill",id:"inp-bill",placeholder:"0.0",value:t,onChange:l}),Object(o.jsx)("img",{src:j,alt:"dollar icon"})]})]}),Object(o.jsxs)("div",{className:"tips-container",children:[Object(o.jsx)("div",{className:"label-wrapper",children:Object(o.jsx)("label",{htmlFor:"inp-tips",children:"Select Tip %"})}),Object(o.jsxs)("div",{className:"button-wraper",onClick:function(e){document.querySelectorAll(".btn").forEach((function(e){return e.classList.remove("btn-active")})),"btn"===e.target.className&&(console.log("btn works"),a(parseFloat(e.target.innerHTML)/100),e.target.className="btn btn-active")},children:[Object(o.jsx)(b,{styleName:"btn",value:"5%"}),Object(o.jsx)(b,{styleName:"btn",value:"10%"}),Object(o.jsx)(b,{styleName:"btn",value:"15%"}),Object(o.jsx)(b,{styleName:"btn",value:"25%"}),Object(o.jsx)(b,{styleName:"btn",value:"50%"}),Object(o.jsx)("input",{type:"text",className:"inp-text",name:"inp-tip",id:"inp-tip",placeholder:"Custom",onChange:i})]})]}),Object(o.jsxs)("div",{className:"people-container",children:[Object(o.jsxs)("div",{className:"label-wrapper",children:[Object(o.jsx)("label",{htmlFor:"inp-people",children:"Number of People"}),s<=0&&Object(o.jsx)("div",{className:"error-msg",children:"Can`t be zero"})]}),Object(o.jsxs)("div",{className:"inp-wrapper",children:[Object(o.jsx)("input",{type:"number",className:"inp-text",name:"inp-people",id:"inp-people",value:+s,onChange:c,placeholder:"0.0"}),Object(o.jsx)("img",{src:p,alt:"person icon"})]})]})]})},u=function(e){var t=e.totalValue,s=e.tipsValue,a=e.resetHandler,l=e.peopleQty;return Object(o.jsxs)("div",{className:"output",children:[Object(o.jsxs)("div",{className:"lines-wrapper",children:[Object(o.jsxs)("div",{className:"line-output",children:[Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)("div",{className:"title",children:"Tip Amount "}),Object(o.jsx)("div",{className:"desc",children:"/ person"})]}),Object(o.jsxs)("div",{className:"value",children:["$ ",l&&s]})]}),Object(o.jsxs)("div",{className:"line-output",children:[Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)("div",{className:"title",children:"Total "}),Object(o.jsx)("div",{className:"desc",children:"/ person"})]}),Object(o.jsxs)("div",{className:"value",children:["$ ",l&&t]})]})]}),Object(o.jsx)(b,{styleName:"btn-reset",value:"Reset",onClick:a})]})};var m=function(){var e=Object(a.useState)(0),t=Object(n.a)(e,2),s=t[0],l=t[1],c=Object(a.useState)(""),i=Object(n.a)(c,2),j=i[0],p=i[1],b=Object(a.useState)(0),m=Object(n.a)(b,2),O=m[0],v=m[1],x=Object(a.useState)(""),h=Object(n.a)(x,2),N=h[0],g=h[1],y=Object(a.useState)(0),f=Object(n.a)(y,2),C=f[0],w=f[1],F=Object(a.useState)(null),S=Object(n.a)(F,2),T=(S[0],S[1]);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:r,alt:"logo"})}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)(d,{billValue:s,peopleQty:N,setTip:w,inputChange:function(e){l(parseFloat(e.target.value))},peopleQtyChange:function(e){g(parseFloat(e.target.value));var t=(C*s/N).toFixed(2),a=((s+ +t)/N).toFixed(2);p(a),v(t)},customTipsChange:function(e){""!==e.target.value&&w(parseFloat(e.target.value)/100)}}),Object(o.jsx)(u,{totalValue:j,tipsValue:O,peopleQty:N,resetHandler:function(){l(""),p(""),v(""),g(0),T(null)}})]})]})};i.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.12b98c63.chunk.js.map