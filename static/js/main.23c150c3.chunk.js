(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(7),a=c(4),d=c(5),l=c(9),i=c(8),r=c(1),u=c.n(r),h=(c(14),c(6)),j=c.n(h),b=c(0),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),d=0;d<s;d++)n[d]=arguments[d];return(e=t.call.apply(t,[this].concat(n))).state={goods:[].concat(m),selectedGoods:[]},e.handleClick=function(t){e.setState((function(e){var c={};return e.selectedGoods.includes(t)?(e.selectedGoods.splice(e.selectedGoods.indexOf(t),1),c={selectedGoods:e.selectedGoods}):c={selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])},c}))},e.clearList=function(){e.setState({selectedGoods:[]})},e.setTitle=function(e){switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e," is selected");default:var t=e.map((function(t,c){return c<e.length-2?"".concat(t,","):c===e.length-2?"".concat(t):"and ".concat(t," are selected")}));return"".concat(t.join(" "))}},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.goods,s=t.selectedGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"title",children:this.setTitle(s)}),Object(b.jsxs)("div",{className:"ui middle aligned divided list card",children:[c.map((function(t){return Object(b.jsxs)("div",{className:j()("item",{selected:s.includes(t)}),children:[Object(b.jsx)("div",{className:"right floated content",children:Object(b.jsx)("button",{className:"ui button",type:"button",onClick:function(){e.handleClick(t)},children:s.includes(t)?"Remove":"Add"})}),Object(b.jsx)("div",{className:"content",children:t})]},t)})),0!==s.length&&Object(b.jsx)("button",{className:"ui button",type:"button",onClick:this.clearList,children:"X"})]})]})}}]),c}(u.a.Component),f=p;n.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.23c150c3.chunk.js.map