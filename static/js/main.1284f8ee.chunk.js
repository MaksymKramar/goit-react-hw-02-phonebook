(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),i=n(9),o=n.n(i),s=(n(19),n(12)),l=n(4),d=n(5),u=n(7),b=n(6),h=n(10),j=n(2),m=n(3),p=m.a.button(a||(a=Object(j.a)(["\n  width: 150px;\n  height: 20px;\n  cursor: pointer;\n  background-color: green;\n  border-radius: 50px;\n"]))),O=n(0);var f,x,g,v,C,y,k,w,I=function(e){var t=e.type,n=e.text,a=e.onClick;return Object(O.jsx)(p,{type:t,onClick:a,children:n})},S=n(26),A=m.a.form(f||(f=Object(j.a)(["\ndisplay: inline-flex;\nflex-direction: column;\nalign-items: center;\n"]))),z=m.a.input(x||(x=Object(j.a)(["\nborder-style: dashed;\nborder-color: aqua;\noutline-color: tomato;\nmargin-bottom: 15px;\n"]))),F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=Object(S.a)(),e.numInputId=Object(S.a)(),e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;console.log(a,r),e.setState(Object(h.a)({},a,r))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(A,{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:this.nameInputId,children:Object(O.jsx)(z,{id:this.nameInputId,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})}),Object(O.jsx)("label",{htmlFor:this.numInputId,children:Object(O.jsx)(z,{id:this.numInputId,placeholder:"Tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})}),Object(O.jsx)(I,{text:"Add contact",type:"submit"})]})}}]),n}(r.Component),D=m.a.div(g||(g=Object(j.a)(["\nborder-style: dotted;\n    display: inline-block;\n    padding-left: 15px;\n    padding-right: 30px;\n"]))),L=m.a.ul(v||(v=Object(j.a)(["\ndisplay: inline-block;\nlist-style-type: decimal;\nfont-size: x-large;\n"]))),N=m.a.li(C||(C=Object(j.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 15px;\n"]))),q=m.a.p(y||(y=Object(j.a)(["\nfont-size: x-large;\nmargin-right: 20px;\n"]))),J=m.a.span(k||(k=Object(j.a)(["\nfont-weight: bold;\nfont-family: sans-serif;\n"]))),T=m.a.button(w||(w=Object(j.a)(["\nbackground-color: red;\nborder-radius: 45%;\nwidth: 60px;\nheight: 30px;\n\ncursor: pointer;\n"])));var Z,B,E=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(O.jsx)(D,{children:Object(O.jsx)(L,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(O.jsxs)(N,{children:[Object(O.jsxs)(q,{children:[Object(O.jsx)(J,{children:a}),": ",r]}),Object(O.jsx)(T,{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})})},M=m.a.div(Z||(Z=Object(j.a)(["\nmargin-bottom: 15px;\n"]))),V=m.a.p(B||(B=Object(j.a)(["\nmargin-top: 0px;\nmargin-bottom: 0px;\n"])));var H=function(e){var t=e.value,n=e.onChange;return Object(O.jsxs)(M,{children:[Object(O.jsx)(V,{children:"Find contacts by name"}),Object(O.jsx)("input",{placeholder:"Search",type:"text",value:t,onChange:n})]})};var K=function(e){var t=e.title,n=e.children;return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:t}),n]})},P=(n(24),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.checkName=function(e,t){return t.find((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())}))},e.addContact=function(t){var n=e.state.contacts,a={id:Object(S.a)(),name:t.name,number:t.number};e.checkName(a,n)?alert("".concat(a.name," is already in your list")):e.setState((function(e){var t=e.contacts;return{contacts:[a].concat(Object(s.a)(t))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts;console.log(a);var r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(O.jsxs)("div",{className:"mainContainer",children:[Object(O.jsx)(K,{title:"Phonebook",children:Object(O.jsx)(F,{onSubmit:this.addContact})}),Object(O.jsxs)(K,{title:"Contacts",children:[Object(O.jsx)(H,{value:e,onChange:this.changeFilter}),Object(O.jsx)(E,{contacts:t,onDeleteContact:this.deleteContact})]})]})}}]),n}(r.Component));o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1284f8ee.chunk.js.map