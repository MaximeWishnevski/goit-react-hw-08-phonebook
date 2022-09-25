(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[566],{2359:function(n,e,t){"use strict";t.d(e,{_:function(){return s},z:function(){return c}});var r,a,i=t(168),o=t(8401),c=o.Z.button(r||(r=(0,i.Z)(["\n  width: auto;\n  height: auto;\n"]))),s=o.Z.label(a||(a=(0,i.Z)(["\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"])))},8566:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return q}});var r,a,i,o,c,s,u=t(5861),l=t(885),d=t(7757),m=t.n(d),p=t(2791),f=t(168),h=t(8401),x=h.Z.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 50px;\n  background-color: #eeeeee;\n"]))),b=h.Z.section(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  padding: 10px;\n  margin-right: auto;\n  background-color: #999999;\n  border-radius: 3%;\n"]))),y=h.Z.h1(i||(i=(0,f.Z)([""]))),g=h.Z.h2(o||(o=(0,f.Z)([""]))),v=t(2359),Z=t(5705),j=t(7103),_=t(3070),w=t(184),k=(0,h.Z)(Z.l0)(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=(0,h.Z)(Z.Bc)(s||(s=(0,f.Z)(["\n  color: red;\n"]))),T=/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,F=/[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)/,O=function(){var n=(0,_.gW)(),e=n.contacts,t=n.addNewContact,r=j.Ry().shape({name:j.Z_().required("Type name").matches(F,"Name may contain only letters, apostrophe, dash and spaces"),number:j.Z_().required("Type number").matches(T,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")});return(0,w.jsx)(Z.J9,{initialValues:{name:"",number:""},validationSchema:r,onSubmit:function(n,r){var a=r.resetForm;if(e.find((function(e){return e.name.toLowerCase().trim()===n.name.toLowerCase().trim()})))alert("".concat(n.name," is already in contacts"));else{var i={name:n.name,number:n.number};t(i),a()}},children:(0,w.jsxs)(k,{children:[(0,w.jsxs)(v._,{htmlFor:"name",children:["Name",(0,w.jsx)(C,{name:"name",component:"div"}),(0,w.jsx)(Z.gN,{type:"text",name:"name",id:"name"})]}),(0,w.jsxs)(v._,{htmlFor:"number",children:["Number",(0,w.jsx)(C,{name:"number",component:"div"}),(0,w.jsx)(Z.gN,{type:"tel",name:"number",id:"number"})]}),(0,w.jsx)(v.z,{type:"submit",children:"Add contact"})]})})},P=function(n){var e=n.changeFilter,t=(0,p.useState)(""),r=(0,l.Z)(t,2),a=r[0],i=r[1];return(0,p.useEffect)((function(){e(a)}),[e,a]),(0,w.jsx)("form",{children:(0,w.jsxs)("label",{children:["Find contacts by name",(0,w.jsx)("input",{type:"text",value:a,onChange:function(n){i(n.currentTarget.value)}})]})})},S=t(2007),E=t.n(S),N=function(n){var e=n.name,t=n.number;return(0,w.jsxs)(w.Fragment,{children:[e,": ",t]})};N.propTypes={name:E().string,number:E().string};var R,L=t(5580),z=h.Z.li(R||(R=(0,f.Z)(["\n  list-style: circle;\n  display: flex;\n  justify-content: space-between;\n"]))),A=(0,h.Z)(L.Z)({border:0,marginBottom:5,borderRadius:3,color:"white",height:28,padding:"0 20px"}),I=function(n){var e=n.filterValue,t=(0,_.gW)(),r=t.contacts,a=t.deleteContact,i=(0,p.useMemo)((function(){var n;return null!==(n=null===r||void 0===r?void 0:r.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase().trim())})))&&void 0!==n?n:[]}),[r,e]);return(0,w.jsx)("ul",{children:i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,w.jsxs)(z,{children:[(0,w.jsx)(N,{name:t,number:r}),(0,w.jsx)(A,{variant:"contained",type:"button",onClick:function(){return function(n){a(n)}(e)},children:"Delete"})]},e)}))})},W=t(9434),V=t(4318);function q(){var n=(0,p.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,W.I0)();return(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a((0,V.yF)());case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,w.jsx)(x,{children:(0,w.jsxs)(b,{children:[(0,w.jsx)(y,{children:"Phonebook"}),(0,w.jsx)(O,{}),(0,w.jsx)(g,{children:"Contacts"}),(0,w.jsx)(P,{changeFilter:r}),(0,w.jsx)(I,{filterValue:t})]})})}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=566.56ddad6a.chunk.js.map