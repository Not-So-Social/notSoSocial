(this["webpackJsonpnot-so-social"]=this["webpackJsonpnot-so-social"]||[]).push([[0],{46:function(e,t,a){e.exports=a(77)},51:function(e,t,a){},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),i=a.n(l),o=(a(51),a(2)),c=a(3),s=a(5),m=a(4),u=a(6),h=(a(52),a(11)),d=a(14),v=a(45),p=a(13),f=a.n(p),y=a(10),E=a.n(y),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={tvShow:[],imageUrl:"",network:"",time:"",summary:"",image:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()({url:"https://api.tvmaze.com/shows/".concat(this.props.match.params.id),method:"GET",async:!0,crossDomain:!0,dataType:"json"}).then((function(t){e.setState({tvShow:t.data,imageUrl:t.data.image.original,network:t.data.network.name,time:t.data.schedule.time,summary:t.data.summary,genre:t.data.genres.join(", "),imdb:"https://www.imdb.com/title/".concat(t.data.externals.imdb)}),e.setState({image:e.state.imageUrl.replace(/^http:\/\//i,"https://")})})).catch((function(){E.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"tvShowInfo"},r.a.createElement("div",{className:"tvShowPhoto"},r.a.createElement("img",{src:this.state.image,alt:this.state.tvShow.name})),r.a.createElement("div",{className:"tvShowDescription"},r.a.createElement("h2",null,this.state.tvShow.name),r.a.createElement("p",null,"Genres: ",this.state.genre),r.a.createElement("p",null,"Network Name: ",this.state.network),r.a.createElement("p",null,"Time: ",this.state.time),r.a.createElement("p",null,function(e){var t=Object(v.a)(e),a=[],n="",r=!1;return t.forEach((function(e){"<"===e&&(r=!0),r||a.push(e),">"===e&&(r=!1)})),a.forEach((function(e){n+=e})),n}(this.state.summary)),r.a.createElement("a",{href:this.state.imdb},"Go to Imdb"),r.a.createElement("h3",null,r.a.createElement(h.b,{to:"/"}," Return to main page "))))}}]),t}(n.Component);function w(e){return r.a.createElement("div",{className:"dropdownGenre"},r.a.createElement("label",{className:"visuallyHidden",htmlFor:"genres"},"please select a genre to get results for that genre"),r.a.createElement("select",{name:"genres",id:"genres",onChange:e.filteredShow},r.a.createElement("option",{value:"Action"},"Action"),r.a.createElement("option",{value:"Adventure"},"Adventure"),r.a.createElement("option",{value:"Anime"},"Anime"),r.a.createElement("option",{value:"Comedy"},"Comedy"),r.a.createElement("option",{value:"Crime"},"Crime"),r.a.createElement("option",{value:"Drama"},"Drama"),r.a.createElement("option",{value:"Family"},"Family"),r.a.createElement("option",{value:"Mystery"},"Mystery"),r.a.createElement("option",{value:"Romance"},"Romance"),r.a.createElement("option",{value:"Science-Fiction"},"Science-Fiction"),r.a.createElement("option",{value:"Thriller"},"Thriller")))}function S(e){return r.a.createElement("div",{className:"dropdownDays"},r.a.createElement("label",{className:"visuallyHidden",htmlFor:"days"},"please select a day to get results for that day"),r.a.createElement("select",{name:"days",id:"days",onChange:e.getDay},r.a.createElement("option",{value:"Monday"},"Monday"),r.a.createElement("option",{value:"Tuesday"},"Tuesday"),r.a.createElement("option",{value:"Wednesday"},"Wednesday"),r.a.createElement("option",{value:"Thursday"},"Thursday"),r.a.createElement("option",{value:"Friday"},"Friday"),r.a.createElement("option",{value:"Saturday"},"Saturday"),r.a.createElement("option",{value:"Sunday"},"Sunday")))}var b=a(42),k=a(22),C=a.n(k);C.a.initializeApp({apiKey:"AIzaSyCTUgM1Yl7wn2oCzdAP4YA3bNpP2r53oqE",authDomain:"notsosocial-aecab.firebaseapp.com",databaseURL:"https://notsosocial-aecab.firebaseio.com",projectId:"notsosocial-aecab",storageBucket:"notsosocial-aecab.appspot.com",messagingSenderId:"973516437107",appId:"1:973516437107:web:1524f659823adb27795c06"});var O=C.a,j=(a(38),O.database()),T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleOnSubmit=function(t){if(t.preventDefault(),-1===Object.values(e.state).indexOf("")){var a=e.state,n=a.eventName,r=a.partySize,l=a.type;j.ref("events").push({eventName:n,partySize:r,type:l}),E.a.fire("Good Job !","Your event has been created!","success"),e.setState({eventName:"",partySize:"",type:""})}else E.a.fire("Oops...","Please fill all inputs!","error")},e.handelOnChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.state={eventName:"",partySize:"",type:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"wrapper createNewEvent"},r.a.createElement("h2",null,"Didn't find an event? Create a new event here!"),r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("label",{htmlFor:"eventName"},"Please enter event name."),r.a.createElement("input",{type:"text",onChange:this.handelOnChange,id:"eventName",name:"eventName",placeholder:"Event name",value:this.state.eventName}),r.a.createElement("label",{htmlFor:"partySize"},"Please enter party size."),r.a.createElement("input",{type:"number",min:"1",onChange:this.handelOnChange,id:"partySize",name:"partySize",placeholder:"Party size",value:this.state.partySize}),r.a.createElement("label",{htmlFor:"type"},"Please enter type of event"),r.a.createElement("input",{type:"text",onChange:this.handelOnChange,id:"type",name:"type",placeholder:"Type of event",value:this.state.type}),r.a.createElement("label",{className:"visuallyHidden",htmlFor:"submit"},"Submit your new event here."),r.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Submit"})))}}]),t}(n.Component),N=a(17),D=a.n(N),A=a(43),x=O.database().ref("events"),F=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).renderEvents=function(){return e.state.allEventsArray.map((function(t,a){var n={background:"url(".concat(t.socialEventImage,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};return r.a.createElement("li",{className:"singleEvent",key:a},r.a.createElement("button",{style:n,onClick:function(){return a=t,void e.props.retrieveEventClicked(a);var a}},r.a.createElement("div",{className:"innerContainerText"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"type: ",t.type),r.a.createElement("p",null,"party size: ",t.partySize))))}))},e.state={allEventsArray:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.on("value",function(){var t=Object(A.a)(D.a.mark((function t(a){var n,r,l;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.val(),r=[],t.t0=D.a.keys(n);case 3:if((t.t1=t.t0()).done){t.next=9;break}if(l=t.t1.value,!n.hasOwnProperty(l)){t.next=7;break}return t.delegateYield(D.a.mark((function e(){var t,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n[l],a={name:t.eventName,type:t.type,partySize:t.partySize},e.next=4,f()({url:"https://api.giphy.com/v1/gifs/search?",method:"GET",dataType:"json",params:{api_key:"jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",q:a.name}}).then((function(e){var t=e.data.data,n=Math.floor(Math.random()*Math.floor(t.length-1));"undefined"!==typeof t[n]&&(a.socialEventImage=t[n].images.original.url)}));case 4:r.push(a);case 5:case"end":return e.stop()}}),e)}))(),"t2",7);case 7:t.next=3;break;case 9:e.setState({allEventsArray:r});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){return r.a.createElement("section",{className:"renderListOfEvents"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",{className:"listOfEvents"},this.state.allEventsArray&&this.renderEvents())))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={socialEventImage:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.eventClicked.name;f()({url:"https://api.giphy.com/v1/gifs/search?",method:"GET",dataType:"json",params:{api_key:"jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",q:t}}).then((function(t){var a=t.data.data,n=Math.floor(Math.random()*Math.floor(a.length-1));e.setState({socialEventImage:a[n].images.original.url}),window.scrollTo({top:e.displayResultRef.offsetTop,left:0,behavior:"smooth"})})).catch((function(){E.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.eventClicked!==this.props.eventClicked){var a=this.props.eventClicked.name;f()({url:"https://api.giphy.com/v1/gifs/search?",method:"GET",dataType:"json",params:{api_key:"jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",q:a}}).then((function(e){var a=e.data.data;t.setState({socialEventImage:a[Math.floor(Math.random()*Math.floor(a.length-1))].images.original.url})})).catch((function(e){console.error(e),E.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}}},{key:"render",value:function(){var e=this,t=this.props.eventClicked,a=t.name,n=t.type,l=t.partySize,i=this.props.tvShowClicked,o=i.title,c=i.image,s=i.id;return this.props.tvShowClicked.image=this.props.tvShowClicked.image.replace(/^http:\/\//i,"https://"),r.a.createElement("section",{className:"DisplayResultDashboard",ref:function(t){return e.displayResultRef=t}},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Display Results:"),r.a.createElement("div",{className:"halfDivider"},r.a.createElement("div",{className:"eventResult"},r.a.createElement("h2",null,"Social Event details"),r.a.createElement("img",{src:this.state.socialEventImage,alt:"random gif that plays on page load representing the event"}),r.a.createElement("p",null,"Name: ",a),r.a.createElement("p",null,"Type: ",n),r.a.createElement("p",null,"Party Size: ",l)),r.a.createElement("div",{className:"tvShowResults"},r.a.createElement("h2",null,"What you are doing instead"),r.a.createElement("h2",null,o),r.a.createElement("div",{className:"tvShowResultsImageContainer"},r.a.createElement("img",{src:c,alt:a})),r.a.createElement(h.b,{to:"/tv/".concat(s)},"Click here for more info")))))}}]),t}(n.Component),R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleOnClick=function(){var t=e.props.filteredTvShows.length-1,a=Math.floor(Math.random()*Math.floor(t));e.setState({randomTvShow:e.props.filteredTvShows[a]})},e.renderRandomTvShow=function(t){var a={title:t.name,id:t.id,image:t.image.original};a.image=a.image.replace(/^http:\/\//i,"https://");var n=a.title,l=a.id,i=a.image;return r.a.createElement("div",{className:"randomShow",key:l},r.a.createElement("button",{onClick:function(){return e.props.retrieveTvShowClicked(a)}},r.a.createElement("h2",null,n),r.a.createElement("img",{src:i,alt:n}),r.a.createElement(h.b,{to:"/tv/".concat(l)},"Click here for more info")))},e.state={randomTvShow:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"randomContainer"},r.a.createElement("button",{className:"randomButton",onClick:this.handleOnClick},"Get Random Tv Show"),this.state.randomTvShow&&this.renderRandomTvShow(this.state.randomTvShow))}}]),t}(n.Component);function I(e){return r.a.createElement("details",null,r.a.createElement("summary",null,"Click for more details on how to use this website!"),r.a.createElement("p",null,"Dinner dates, bachelor parties, prom nights, and game nights. These social events are fantastic, but think about the mess, expensive outings, and rowdy crowd. Hard pass. Why not fill the time with some great TV shows during these social events in the comfort of your own home with or without a crowd."),r.a.createElement("ol",null,r.a.createElement("li",null,"1. Select the day of the social event."),r.a.createElement("li",null,"2. Select the type of social event."),r.a.createElement("li",null,"3. View the TV show options available for that day and select one (you can filter by genre as well)."),r.a.createElement("li",null,"4. Enjoy your not so social, but memorable experience!")))}var z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).retrieveEventClicked=function(t){e.setState({eventClicked:t}),window.scrollTo({top:e.scrollRef.offsetTop,left:0,behavior:"smooth"})},e.retrieveTvShowClicked=function(t){e.setState({tvShowClicked:t})},e.getShows=function(t,a){var n=[];for(var r in t){t[r].schedule.days.includes(a)&&(t[r].network||(t[r].network=t[r].webChannel),n.push(t[r]))}e.setState({showsFilteredByDay:n,showsArray:!0,genreArray:!1})},e.getDay=function(t){t.preventDefault();var a=t.target.value;e.setState({selectedDay:a}),e.getShows(e.state.apiData,a)},e.filteredShow=function(t){var a=[],n=t.target.value;e.state.showsFilteredByDay.map((function(e){return e.genres.forEach((function(t){t===n&&a.push(e)}))})),a[0]||E.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"}),e.setState({showsFilteredByGenre:a,showsArray:!1,genreArray:!0})},e.renderAllFilteredTvShows=function(t){if(t[0])return t.map((function(t){var a={title:t.name,id:t.id,image:t.image.original,imdb:"https://www.imdb.com/title/".concat(t.externals.imdb),genres:t.genres.join(" "),summaryHtml:t.summary,network:t.network.name,time:t.schedule.time};a.image=a.image.replace(/^http:\/\//i,"https://");var n=a.title,l=a.id,i=a.image;return r.a.createElement("li",{className:"tvShowListItem",key:l},r.a.createElement("button",{onClick:function(){return e.retrieveTvShowClicked(a)}},r.a.createElement("h2",null,n),r.a.createElement("img",{src:i,alt:n}),r.a.createElement(h.b,{to:"/tv/".concat(l)},"Click here for more info")))}))},e.state={apiData:[],showsFilteredByDay:[],showsFilteredByGenre:[],selectedDay:"Monday",selectedGenre:"Action",showsArray:!1,genreArray:!1,eventClicked:null,tvShowClicked:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()({url:"https://api.tvmaze.com/shows",method:"GET",async:!0,crossDomain:!0,dataType:"json"}).then((function(t){e.setState({apiData:t.data})})).then((function(){return e.getShows(e.state.apiData,e.state.selectedDay)})).catch((function(){E.a.fire({title:"Error!",text:"Something went wrong!",icon:"error",confirmButtonText:"Cool"})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("section",{className:"selectSection"},r.a.createElement(S,{getDay:this.getDay}),r.a.createElement(F,{retrieveEventClicked:this.retrieveEventClicked,ref:function(t){return e.scrollRef=t}}),r.a.createElement(T,null),r.a.createElement(w,{filteredShow:this.filteredShow,ref:function(t){return e.SelectGenreRef=t}}),this.state.showsArray&&r.a.createElement("div",{className:"tvShowWrapper displaySection",ref:function(t){return e.scrollRef=t}},r.a.createElement("div",{className:"displayInner"},r.a.createElement("ul",{className:"displayAllFilteredTvShows"},this.renderAllFilteredTvShows(this.state.showsFilteredByDay)))),this.state.genreArray&&r.a.createElement("div",{className:"tvShowWrapper displaySection"},r.a.createElement("div",{className:"displayInner"},r.a.createElement("ul",{className:"displayAllFilteredTvShows"},this.renderAllFilteredTvShows(this.state.showsFilteredByGenre)))),this.state.genreArray&&r.a.createElement(R,{retrieveTvShowClicked:this.retrieveTvShowClicked,filteredTvShows:this.state.showsFilteredByGenre})),this.state.eventClicked&&this.state.tvShowClicked&&r.a.createElement(B,{eventClicked:this.state.eventClicked,tvShowClicked:this.state.tvShowClicked}))}}]),t}(n.Component);function M(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"glow"}," Not So Social "))}var G=a(44),P=a.n(G);function W(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Created by: ",r.a.createElement("a",{href:"https://github.com/Not-So-Social/notSoSocial"}," Hira Ahsan, Lewis Brignell, Nick Wang, Tiffany Wong ")," "),r.a.createElement(P.a,null))}var U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("a",{href:"#maincontent",className:"skip-link"},"Skip to main content."),r.a.createElement(M,null),r.a.createElement("main",{id:"maincontent"},r.a.createElement(z,{retrieveTvShowClicked:this.retrieveTvShowClicked})),r.a.createElement(W,null))}}]),t}(n.Component),q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={eventClicked:null,tvShowClicked:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/notSoSocial"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:U}),r.a.createElement(d.a,{path:"/tv/:id",component:g})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.abdd618e.chunk.js.map