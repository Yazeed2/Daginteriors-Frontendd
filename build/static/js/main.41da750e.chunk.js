(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,a){e.exports=a(89)},61:function(e,t,a){},82:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),i=(a(61),a(5)),s=a(6),o=a(8),m=a(7),u=a(9),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"ContactU")}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"AboutUs")}}]),t}(n.Component),h=a(93),g=a(94),b=a(91),E=a(100),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("here"),l.a.createElement(b.a,{sm:6,style:{padding:"5px"}},l.a.createElement(E.a,{className:"bg-dark text-white",onClick:function(){return e.props.clicked(e.props.data)}},l.a.createElement(E.a.Img,{src:this.props.data.images[0],alt:"Card image"}),l.a.createElement(E.a.ImgOverlay,{className:"details"},l.a.createElement(E.a.Title,{className:"text-center"},this.props.data.title),l.a.createElement(E.a.Text,{className:"text-center"},this.props.data.description))))}}]),t}(n.Component),f=a(98),j=(n.Component,a(14)),C=a(92),O=a(99),k=a(21),y=a.n(k),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={delete:!1,imagesUrl:[],images:[],numChildren:1,load:!0},a.submit=function(){y.a.put("http://localhost:5000/add/projects/"+a.props.data._id,{title:a.state.title,images:a.state.images,description:a.state.description}).then((function(e){alert("created a new project"),window.location.reload()})).catch((function(e){return console.log(e)}))},a.delete=function(){y.a.delete("http://localhost:5000/add/project/"+a.props.data._id).then((function(e){alert("this project is deleted"),window.location.reload()})).catch((function(e){return console.log(e)}))},a.addImageUrl=function(e){var t=e.target.name;a.setState(Object(j.a)({},t,e.target.value)),a.state.images[t]=e.target.value,console.log(a.state)},a.addImage=function(){a.state.images.push(1),console.log(a.state)},a.onRemoveChild=function(){a.setState(Object(j.a)({imagesUrl:a.state.images.pop(),numChildren:a.state.numChildren-1},a.state.numChildren-1,"")),console.log(a.state)},a.onChange=function(e){var t,n;e.target.value.length>0?a.setState((t={},Object(j.a)(t,e.target.name,e.target.value),Object(j.a)(t,e.target.name+"lable",!1),t)):a.setState((n={},Object(j.a)(n,e.target.name,e.target.value),Object(j.a)(n,e.target.name+"lable",!0),n));console.log(a.state)},a.onAddChild=function(){a.setState({numChildren:a.state.numChildren+1}),console.log(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({title:this.props.data.title,description:this.props.data.description,imagesUrl:this.props.data.images,numChildren:this.props.data.images.length}),this.props.data.images.map((function(t,a){e.setState(Object(j.a)({},a,t))})),console.log(this.props)}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.numChildren;a+=1)t.push(l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"projectImages",src:this.state[a]}),l.a.createElement(C.a,{size:"sm",className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"inputGroup-sizing-sm"},"Image")),l.a.createElement(O.a,{value:this.state[a],onChange:this.addImageUrl,name:a,"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"}))));return l.a.createElement("div",null,l.a.createElement(h.a,{onClick:function(){return e.props.clicked(null)},variant:"danger"},"Cancel X"),l.a.createElement("br",null),l.a.createElement("div",{className:"forms"},l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"inputGroup-sizing-default"},"Title")),l.a.createElement(O.a,{value:this.state.title,onChange:this.onChange,name:"title","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})),t,l.a.createElement(h.a,{className:"addbtn",onClick:this.onAddChild,variant:"primary"},"+"),l.a.createElement(h.a,{className:"addbtn",onClick:this.onRemoveChild,variant:"primary"},"-"),l.a.createElement(h.a,{className:"addbtn",onClick:function(){return e.setState({load:!e.state.load})},variant:"outline-primary"}," \u21bb"),l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,null,"Description")),l.a.createElement(O.a,{value:this.state.description,onChange:this.onChange,name:"description",as:"textarea","aria-label":"With textarea"})),l.a.createElement(h.a,{className:"btn",onClick:this.submit,variant:"success",size:"lg",block:!0},"Submit")),l.a.createElement("div",{className:"forms"},l.a.createElement(h.a,{variant:"primary",size:"lg",block:!0},"Edit "),l.a.createElement(h.a,{onClick:function(){return e.setState({delete:!e.state.delete})},variant:"danger",size:"lg",block:!0},"Delete X"),this.state.delete?l.a.createElement("div",{className:"deleting"},l.a.createElement("h4",null,"Are you sure?"),l.a.createElement("div",null,l.a.createElement(h.a,{className:"btn",variant:"danger",onClick:this.delete},"Yes"),l.a.createElement(h.a,{className:"btn",variant:"primary",onClick:function(){return e.setState({delete:!1})}},"No"))):""))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={images:[1],imagesUrl:[],map:[],numChildren:1,load:!0},a.submit=function(){y.a.post("http://localhost:5000/add/projects",{title:a.state.title,images:a.state.imagesUrl,description:a.state.description}).then((function(e){alert("created a new project"),window.location.reload()})).catch((function(e){return console.log(e)}))},a.onAddChild=function(){a.setState({numChildren:a.state.numChildren+1})},a.onChange=function(e){var t,n;e.target.value.length>0?a.setState((t={},Object(j.a)(t,e.target.name,e.target.value),Object(j.a)(t,e.target.name+"lable",!1),t)):a.setState((n={},Object(j.a)(n,e.target.name,e.target.value),Object(j.a)(n,e.target.name+"lable",!0),n));console.log(a.state)},a.addImageUrl=function(e){var t=e.target.name;a.state.imagesUrl[t]=e.target.value,a.state.images[t]=e.target.value,console.log(a.state)},a.addImage=function(){a.state.images.push(1),console.log(a.state)},a.onRemoveChild=function(){a.setState({imagesUrl:a.state.imagesUrl.pop(),numChildren:a.state.numChildren-1}),console.log(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.numChildren;a+=1)t.push(l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"projectImages",src:this.state.images[a]}),l.a.createElement(C.a,{size:"sm",className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"inputGroup-sizing-sm"},"Image")),l.a.createElement(O.a,{onChange:this.addImageUrl,name:a,"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"}))));return l.a.createElement("div",null,l.a.createElement(h.a,{onClick:function(){return e.props.addProject(!1)},variant:"danger"},"Cancel X"),l.a.createElement("br",null),l.a.createElement("div",{className:"forms"},l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,{id:"inputGroup-sizing-default"},"Title")),l.a.createElement(O.a,{onChange:this.onChange,name:"title","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})),t,l.a.createElement(h.a,{className:"addbtn",onClick:this.onAddChild,variant:"primary"},"+"),l.a.createElement(h.a,{className:"addbtn",onClick:this.onRemoveChild,variant:"primary"},"-"),l.a.createElement(h.a,{className:"addbtn",onClick:function(){return e.setState({load:!e.state.load})},variant:"outline-primary"}," \u21bb"),l.a.createElement(C.a,null,l.a.createElement(C.a.Prepend,null,l.a.createElement(C.a.Text,null,"Description")),l.a.createElement(O.a,{onChange:this.onChange,name:"description",as:"textarea","aria-label":"With textarea"})),l.a.createElement(h.a,{className:"btn",onClick:this.submit,variant:"success",size:"lg",block:!0},"Submit")))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={images:null,add:!1},a.clicked=function(e){a.setState({images:e})},a.addProject=function(e){a.setState({add:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"body1"},this.state.images?l.a.createElement(N,{clicked:this.clicked,data:this.state.images}):l.a.createElement(l.a.Fragment,null,this.state.add?l.a.createElement(w,{addProject:this.addProject}):l.a.createElement(l.a.Fragment,null," ",l.a.createElement(h.a,{onClick:function(){return e.addProject(!0)},variant:"primary",size:"lg",block:!0},"Add a new Project+"),l.a.createElement(g.a,{style:{padding:"0 10px"}},this.props.projects.map((function(t){return l.a.createElement(v,{data:t,clicked:e.clicked})}))))))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{sm:3},l.a.createElement(E.a,{style:{width:"18em",margin:"0 auto"}},l.a.createElement(E.a.Img,{src:"https://marble-bajco.com/wp-content/uploads/2018/01/%D8%B1%D8%AE%D8%A7%D9%85-%D9%83%D8%A7%D9%84%D8%A7%D9%83%D9%88%D8%AA%D8%A7-%D8%A8%D9%88%D8%B1%D8%BA%D9%8A%D9%86%D9%8A-1.jpg"}),l.a.createElement(E.a.Body,null,l.a.createElement(E.a.Title,null,l.a.createElement("h2",null,this.props.title)),l.a.createElement(E.a.Text,null,"   ",this.props.description," "))))}}]),t}(n.Component),S=a(95),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log("----marbles-----"),console.log(this.props.marbles);var e=this.props.marbles.map((function(e){return l.a.createElement(A,{title:e.title,description:e.description,img:e.img})}));return l.a.createElement("div",{className:"body1"},l.a.createElement(S.a,null,l.a.createElement(g.a,null,e)))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://placehold.it/1280x700",alt:"First slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://placehold.it/1280x700",alt:"Third slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://placehold.it/1280x700",alt:"Third slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))))}}]),t}(n.Component),I=(a(82),a(83),a(17)),P=a(22),T=a(96),z=a(97),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={marble:[],img:[],projects:[]},a.clicked=function(){console.log("e")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:5000/add/rocks",{}).then((function(t){console.log(t),e.setState({marble:t.data})})).catch((function(e){return console.log(e)})),y.a.get("http://localhost:5000/add/projects",{}).then((function(t){console.log(t),e.setState({projects:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(I.a,null,l.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",id:"nav",variant:"dark"},l.a.createElement(T.a.Brand,{href:"#home"},"DGH"),l.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(z.a,{className:"mr-auto"},l.a.createElement(I.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(I.b,{className:"nav-link",to:"/AboutUs"},"About Us"),l.a.createElement(I.b,{className:"nav-link",to:"/ContactUs"},"Contact Us")),l.a.createElement(z.a,null,l.a.createElement(I.b,{className:"nav-link ",to:"/Marbles"},"Marbles"),l.a.createElement(I.b,{className:"nav-link",to:"/Projects"},"Projects")))),l.a.createElement(P.c,null,l.a.createElement(P.a,{path:"/AboutUs",render:function(){return l.a.createElement(p,null)}}),l.a.createElement(P.a,{path:"/ContactUs",render:function(){return l.a.createElement(d,null)}}),l.a.createElement(P.a,{path:"/Projects",render:function(){return l.a.createElement(D,{projects:e.state.projects})}}),l.a.createElement(P.a,{path:"/Marbles",render:function(){return l.a.createElement(x,{marbles:e.state.marble})}}),l.a.createElement(P.a,{path:"/",render:function(){return l.a.createElement(U,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.41da750e.chunk.js.map