(this["webpackJsonpnot-so-social"]=this["webpackJsonpnot-so-social"]||[]).push([[0],{44:function(e,t,a){e.exports=a(74)},49:function(e,t,a){},50:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(38),i=a.n(l),o=(a(49),a(2)),c=a(3),s=a(5),m=a(4),u=a(6),h=(a(50),a(12)),d=a(13),v=a(43),p=a(16),y=a.n(p),E=a(10),f=a.n(E),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={tvShow:[],image:"",network:"",time:"",summary:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y()({url:"http://api.tvmaze.com/shows/".concat(this.props.match.params.id),method:"GET",async:!0,crossDomain:!0,dataType:"json"}).then((function(t){console.log(t.data),e.setState({tvShow:t.data,image:t.data.image.original,network:t.data.network.name,time:t.data.schedule.time,summary:t.data.summary,genre:t.data.genres.join(", "),imdb:"https://www.imdb.com/title/".concat(t.data.externals.imdb)})})).catch((function(){f.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"tvShowInfo"},r.a.createElement("div",{className:"tvShowPhoto"},r.a.createElement("img",{src:this.state.image,alt:this.state.tvShow.name})),r.a.createElement("div",{className:"tvShowDescription"},r.a.createElement("h2",null,this.state.tvShow.name),r.a.createElement("a",{href:this.state.imdb},"Go to Imdb"),r.a.createElement("p",null,"Genres: ",this.state.genre),r.a.createElement("p",null,"Network Name: ",this.state.network),r.a.createElement("p",null,"Time: ",this.state.time),r.a.createElement("p",null,function(e){var t=Object(v.a)(e),a=[],n="",r=!1;return t.forEach((function(e){"<"===e&&(r=!0),r||a.push(e),">"===e&&(r=!1)})),a.forEach((function(e){n+=e})),n}(this.state.summary)),r.a.createElement("h3",null,r.a.createElement(h.b,{to:"/"}," Return to main page "))))}}]),t}(n.Component);function b(e){return r.a.createElement("div",{className:"dropdownGenre"},r.a.createElement("label",{className:"visuallyHidden",htmlFor:"genres"},"please select a genre to get results for that genre"),r.a.createElement("select",{name:"genres",id:"genres",onChange:e.filteredShow},r.a.createElement("option",{value:"Action"},"Action"),r.a.createElement("option",{value:"Adventure"},"Adventure"),r.a.createElement("option",{value:"Anime"},"Anime"),r.a.createElement("option",{value:"Comedy"},"Comedy"),r.a.createElement("option",{value:"Crime"},"Crime"),r.a.createElement("option",{value:"Drama"},"Drama"),r.a.createElement("option",{value:"Family"},"Family"),r.a.createElement("option",{value:"Mystery"},"Mystery"),r.a.createElement("option",{value:"Romance"},"Romance"),r.a.createElement("option",{value:"Science-Fiction"},"Science-Fiction"),r.a.createElement("option",{value:"Thriller"},"Thriller")))}function S(e){return r.a.createElement("div",{className:"dropdownDays"},r.a.createElement("label",{className:"visuallyHidden",htmlFor:"days"},"please select a day to get results for that day"),r.a.createElement("select",{name:"days",id:"days",onChange:e.getDay},r.a.createElement("option",{value:"Monday"},"Monday"),r.a.createElement("option",{value:"Tuesday"},"Tuesday"),r.a.createElement("option",{value:"Wednesday"},"Wednesday"),r.a.createElement("option",{value:"Thursday"},"Thursday"),r.a.createElement("option",{value:"Friday"},"Friday"),r.a.createElement("option",{value:"Saturday"},"Saturday"),r.a.createElement("option",{value:"Sunday"},"Sunday")))}var g=a(41),k=a(21),C=a.n(k);C.a.initializeApp({apiKey:"AIzaSyCTUgM1Yl7wn2oCzdAP4YA3bNpP2r53oqE",authDomain:"notsosocial-aecab.firebaseapp.com",databaseURL:"https://notsosocial-aecab.firebaseio.com",projectId:"notsosocial-aecab",storageBucket:"notsosocial-aecab.appspot.com",messagingSenderId:"973516437107",appId:"1:973516437107:web:1524f659823adb27795c06"});var O=C.a,j=(a(37),O.database()),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleOnSubmit=function(t){if(t.preventDefault(),-1===Object.values(e.state).indexOf("")){var a=e.state,n=a.eventName,r=a.partySize,l=a.type;j.ref("events").push({eventName:n,partySize:r,type:l}),f.a.fire("Good Job !","Your event has been created!","success"),e.setState({eventName:"",partySize:"",type:""})}else console.error("user inputs empty",e.state),f.a.fire("Oops...","Please fill all inputs!","error")},e.handelOnChange=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.state={eventName:"",partySize:"",type:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"wrapper createNewEvent"},r.a.createElement("h2",null,"Didn't find an event for you? Create a new event here!"),r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("label",{htmlFor:"eventName"},"please enter event name"),r.a.createElement("input",{type:"text",onChange:this.handelOnChange,id:"eventName",name:"eventName",placeholder:"event name",value:this.state.eventName}),r.a.createElement("label",{htmlFor:"partySize"},"please enter party size"),r.a.createElement("input",{type:"number",min:"1",onChange:this.handelOnChange,id:"partySize",name:"partySize",placeholder:"party size",value:this.state.partySize}),r.a.createElement("label",{htmlFor:"type"},"please enter type of event"),r.a.createElement("input",{type:"text",onChange:this.handelOnChange,id:"type",name:"type",placeholder:"type of event",value:this.state.type}),r.a.createElement("label",{className:"visuallyHidden",htmlFor:"submit"},"submit your new event here"),r.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Submit"})))}}]),t}(n.Component),T=O.database().ref("events"),D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).renderEvents=function(){return e.state.allEventsArray.map((function(t,a){return r.a.createElement("li",{className:"singleEvent",key:a},r.a.createElement("button",{onClick:function(){return e.props.retrieveEventClicked(t)}},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"type: ",t.type),r.a.createElement("p",null,"party size: ",t.partySize)))}))},e.state={allEventsArray:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.on("value",(function(t){var a=t.val(),n=[];for(var r in a)if(a.hasOwnProperty(r)){var l=a[r],i={name:l.eventName,type:l.type,partySize:l.partySize};n.push(i)}e.setState({allEventsArray:n})}))}},{key:"render",value:function(){return r.a.createElement("section",{className:"renderListOfEvents"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",{className:"listOfEvents"},this.state.allEventsArray&&this.renderEvents())))}}]),t}(n.Component),A=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={socialEventImage:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.eventClicked.name;y()({url:"https://api.giphy.com/v1/gifs/search?",method:"GET",dataType:"json",params:{api_key:"jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",q:t}}).then((function(t){e.setState({socialEventImage:t.data.data[0].images.original.url})})).catch((function(){f.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}},{key:"render",value:function(){var e=this.props.eventClicked,t=e.name,a=e.type,n=e.partySize,l=this.props.tvShowClicked,i=l.title,o=l.image,c=l.imdb,s=l.genres,m=l.network,u=l.time;return r.a.createElement("section",{className:"DisplayResultDashboard"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Display Results:"),r.a.createElement("div",{className:"halfDivider"},r.a.createElement("div",{className:"eventResult"},r.a.createElement("h2",null,"Social Event details"),r.a.createElement("img",{src:this.state.socialEventImage,alt:"gif"}),r.a.createElement("p",null,"Name: ",t),r.a.createElement("p",null,"Type: ",a),r.a.createElement("p",null,"Party Size: ",n)),r.a.createElement("div",{className:"tvShowResults"},r.a.createElement("h2",null,"What you are doing instead"),r.a.createElement("h2",null,i),r.a.createElement("div",{className:"tvShowResultsImageContainer"},r.a.createElement("img",{src:o,alt:t})),r.a.createElement("a",{href:c},"Go to Imdb"),r.a.createElement("p",null,"Genres: ",s),r.a.createElement("p",null,"Network Name: ",m),r.a.createElement("p",null,"Time: ",u)))))}}]),t}(n.Component),F=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).renderRandomTvShow=function(t){var a={title:t.name,id:t.id,image:t.image.original,imdb:"https://www.imdb.com/title/".concat(t.externals.imdb),genres:t.genres.join(" "),summaryHtml:t.summary,network:t.network.name,time:t.schedule.time},n=a.title,l=a.id,i=a.image,o=a.imdb,c=a.genres,s=a.network,m=a.time;return r.a.createElement("div",{className:"randomShow",key:l},r.a.createElement("button",{onClick:function(){return e.props.retrieveTvShowClicked(a)}},r.a.createElement("h2",null,n),r.a.createElement("img",{src:i,alt:n}),r.a.createElement("a",{href:o},"Go to Imdb"),r.a.createElement("p",null,"Genres: ",c),r.a.createElement("p",null,"Network Name: ",s),r.a.createElement("p",null,"Time: ",m),r.a.createElement(h.b,{to:"/tv/".concat(l)},"Link here")))},e.handleOnClick=function(){var t=e.props.filteredTvShows.length,a=Math.floor(Math.random()*Math.floor(t));e.setState({randomTvShow:e.props.filteredTvShows[a]})},e.state={randomTvShow:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"randomContainer"},r.a.createElement("button",{className:"randomButton",onClick:this.handleOnClick},"Get Random Tv Show"),r.a.createElement("div",null,this.state.randomTvShow&&this.renderRandomTvShow(this.state.randomTvShow)))}}]),t}(n.Component),z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).retrieveEventClicked=function(t){e.setState({eventClicked:t})},e.retrieveTvShowClicked=function(t){e.setState({tvShowClicked:t})},e.getShows=function(t,a){var n=[];for(var r in t){t[r].schedule.days.includes(a)&&(t[r].network||(t[r].network=t[r].webChannel),n.push(t[r]))}e.setState({showsFilteredByDay:n,showsArray:!0,genreArray:!1})},e.getDay=function(t){t.preventDefault();var a=t.target.value;e.setState({selectedDay:a}),e.getShows(e.state.apiData,a)},e.filteredShow=function(t){var a=[],n=t.target.value;e.state.showsFilteredByDay.map((function(e){return e.genres.forEach((function(t){t===n&&a.push(e)}))})),a[0]||(console.log(a,"try"),f.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})),e.setState({showsFilteredByGenre:a,showsArray:!1,genreArray:!0})},e.renderAllFilteredTvShows=function(t){if(t[0])return t.map((function(t){var a={title:t.name,id:t.id,image:t.image.original,imdb:"https://www.imdb.com/title/".concat(t.externals.imdb),genres:t.genres.join(" "),summaryHtml:t.summary,network:t.network.name,time:t.schedule.time},n=a.title,l=a.id,i=a.image;return r.a.createElement("li",{className:"tvShowListItem",key:l},r.a.createElement("button",{onClick:function(){return e.retrieveTvShowClicked(a)}},r.a.createElement("h2",null,n),r.a.createElement("img",{src:i,alt:n}),r.a.createElement(h.b,{to:"/tv/".concat(l)},"Click here for more info")))}))},e.removeTags=function(e){},e.state={apiData:[],showsFilteredByDay:[],showsFilteredByGenre:[],selectedDay:"Monday",selectedGenre:"Action",showsArray:!1,genreArray:!1,eventClicked:null,tvShowClicked:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y()({url:"http://api.tvmaze.com/shows",method:"GET",async:!0,crossDomain:!0,dataType:"json"}).then((function(t){e.setState({apiData:t.data})})).then((function(){return e.getShows(e.state.apiData,e.state.selectedDay)})).catch((function(){f.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"selectSection"},r.a.createElement(S,{getDay:this.getDay}),r.a.createElement(D,{retrieveEventClicked:this.retrieveEventClicked}),r.a.createElement(N,null),r.a.createElement(b,{filteredShow:this.filteredShow}),this.state.showsArray?r.a.createElement("div",{className:"tvShowWrapper displaySection"},r.a.createElement("div",{className:"displayInner"},r.a.createElement("ul",{className:"displayAllFilteredTvShows"},this.renderAllFilteredTvShows(this.state.showsFilteredByDay)))):null,this.state.genreArray?r.a.createElement("div",{className:"tvShowWrapper displaySection"},r.a.createElement("div",{className:"displayInner"},r.a.createElement("ul",{className:"displayAllFilteredTvShows"},this.renderAllFilteredTvShows(this.state.showsFilteredByGenre)))):null,this.state.genreArray?r.a.createElement(F,{retrieveTvShowClicked:this.retrieveTvShowClicked,filteredTvShows:this.state.showsFilteredByGenre}):null),this.state.eventClicked&&this.state.tvShowClicked&&r.a.createElement(A,{eventClicked:this.state.eventClicked,tvShowClicked:this.state.tvShowClicked}))}}]),t}(n.Component);function B(){return r.a.createElement("header",null,r.a.createElement("h1",null," Not So Social "))}var I=a(42),x=a.n(I);function G(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Created by: people"),r.a.createElement(x.a,null))}var M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("a",{href:"#maincontent",className:"skip-link"},"Skip to main content."),r.a.createElement(B,null),r.a.createElement("main",{id:"maincontent"},r.a.createElement(z,{retrieveTvShowClicked:this.retrieveTvShowClicked})),r.a.createElement(G,null))}}]),t}(n.Component),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={eventClicked:null,tvShowClicked:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/"},r.a.createElement(d.a,{exact:!0,path:"/",component:M}),r.a.createElement(d.a,{path:"/tv/:id",component:w}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.0eab6a4e.chunk.js.map