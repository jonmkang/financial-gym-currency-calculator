(this["webpackJsonpfinancial-gym"]=this["webpackJsonpfinancial-gym"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},143:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(0),r=n.n(a),l=n(47),i=n.n(l),o=(n(136),n.p,n(137),n(138),n(45)),u=n(162);n(139);function s(){var e=Object(a.useState)("calculator"),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{color:"teal",inverted:!0,className:"nav-bar",children:[Object(c.jsx)(u.a.Item,{name:"home",active:"home"===n,onClick:function(){return r("home")},children:"The Financial Gym"}),Object(c.jsx)(u.a.Item,{name:"calculator",active:"calculator"===n,onClick:function(){return r("calculator")},children:"Calculator"})]})})}var j=n(164),b=n(165),h=n(161),d=n(95),O=n(160);n(143);function x(){var e=Object(a.useState)(1),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(0),i=Object(o.a)(l,2),u=i[0],s=i[1],x=Object(a.useState)(0),f=Object(o.a)(x,2),g=f[0],m=f[1],p=Object(a.useState)(0),v=Object(o.a)(p,2),C=v[0],y=v[1],F=Object(a.useState)(null),S=Object(o.a)(F,2),k=S[0],I=S[1];Object(a.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){return y(e.rates)}))}),[]);var w=[];for(var E in C)w.push({key:E,value:C[E],text:E});return w.sort((function(e,t){return e.text<t.text?-1:e.text>t.text?1:0})),Object(c.jsx)(j.a,{placeholder:!0,color:"teal",className:"calculator-segment",children:Object(c.jsx)(b.a,{columns:3,stackable:!0,textAlign:"center",children:Object(c.jsxs)(b.a.Row,{verticalAlign:"middle",children:[Object(c.jsx)(b.a.Column,{children:Object(c.jsx)(h.a,{children:Object(c.jsxs)(h.a.Field,{children:[Object(c.jsx)(h.a.Input,{size:"huge",label:"Enter Currency Amount",defaultValue:1,onChange:function(e){return r(parseInt(e.target.value))},onBlur:function(e){return function(e){var t=parseFloat(e);"number"===typeof t&&/^[0-9]*(\.[0-9]{0,2})?$/.test(t)&&t>0||""===e?I(null):I("Please enter a valid number to 2 decimal places")}(e.target.value)}}),k]})})}),Object(c.jsxs)(b.a.Column,{children:[Object(c.jsxs)(j.a,{children:[Object(c.jsx)(d.a,{color:"teal",pointing:"below",attached:"top",children:"Current Currency"}),Object(c.jsx)(O.a,{defaultValue:1,onChange:function(e,t){var n=t.value;return s(n)},placeholder:"Select Country",selection:!0,search:!0,options:w})]}),Object(c.jsxs)(j.a,{children:[Object(c.jsx)(d.a,{color:"teal",pointing:"below",attached:"top",children:"Exchange To"}),Object(c.jsx)(O.a,{defaultValue:1,onChange:function(e,t){var n=t.value;return m(n)},placeholder:"Select Country",selection:!0,search:!0,options:w})]})]}),Object(c.jsxs)(b.a.Column,{children:[Object(c.jsxs)(d.a,{color:"teal",size:"big",children:["Your amount in ",function(e,t){if(e)return Object.keys(e).find((function(n){return e[n]===t}))}(C,g)]}),Object(c.jsx)(d.a,{size:"big",children:n/u*g>0?parseFloat(n/u*g).toFixed(2):0})]})]})})})}var f=n(166),g=n(159);var m=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s,{}),Object(c.jsx)(f.a,{textAlign:"center",children:"Currency Exchange Calculator"}),Object(c.jsx)(g.a,{children:Object(c.jsx)(x,{})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),p()}},[[147,1,2]]]);
//# sourceMappingURL=main.cae0e90e.chunk.js.map