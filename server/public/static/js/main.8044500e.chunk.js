(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),i=a.n(r),c=(a(39),a(7)),o=a(2),s=a(3),u=a(5),m=a(4),p=a(6),h=a(1),g=a.n(h),d=a(14),E=(a(57),a(11)),f=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),g.a.post("".concat("/api","/trips"),{theTitle:a.state.newTitle,theDescription:a.state.newDescription},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({newTitle:"",newDescription:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(c.a)({},n,l))},a.state={newTitle:"",newDescription:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"add-trip"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Where are you going?:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newTitle",value:this.state.newTitle,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Add a brief Description:"),l.a.createElement("br",null),l.a.createElement("textarea",{name:"newDescription",value:this.state.newDescription,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.title,n=a.state.description;e.preventDefault(),g.a.post("".concat("/api","/trips/update/").concat(a.props.theTrip._id),{theTitle:t,theDescription:n}).then(function(){a.props.getAllTheTripsInAppJS(),a.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.state={title:a.props.theTrip.title,description:a.props.theTrip.description},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"22.5px"}},l.a.createElement("form",{onSubmit:this.handleFormSubmit,style:{margin:"5px",padding:"5px"}},l.a.createElement("div",null,l.a.createElement("input",{style:{fontSize:"20px"},type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).changeEditing=function(e){a.setState({editing:e})},a.resetEdit=function(){a.setState({editing:!1})},a.deleteTrip=function(e){g.a.delete("".concat("/api","/trips/").concat(e)).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.showTrips=function(){if(a.props.theUser)return a.props.allTheTrips.filter(function(e){return e.owner===a.props.theUser._id}).map(function(e,t){return a.state.editing!==t?l.a.createElement("div",{key:e._id,className:"trip-box1"},l.a.createElement(E.b,{to:"/trips/".concat(e._id)},l.a.createElement("h3",null,e.title)),l.a.createElement("p",{style:{maxWidth:"400px"}}," ",e.description," "),l.a.createElement("button",{onClick:function(){a.changeEditing(t)}}," Edit "),l.a.createElement("button",{onClick:function(){a.deleteTrip(e._id)}}," Delete ")):l.a.createElement(b,{resetEditingSituation:a.resetEdit,theTrip:e,getAllTheTripsInAppJS:a.props.getData})});a.props.history.push("/")},a.state={editing:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.ready?l.a.createElement("div",{className:"trip-main"},l.a.createElement("div",null,l.a.createElement("div",{className:"trip-column"},this.showTrips(),l.a.createElement("div",{className:"trip-box2"},l.a.createElement("h4",null,l.a.createElement("i",null,"Let's start by creating a Trip")),l.a.createElement(f,{getData:this.props.getData}))))):l.a.createElement("h3",null,"loading...")}}]),t}(n.Component),y=(a(63),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),g.a.post("".concat("/api","/clothing"),{theName:a.state.newName,theTrip:a.props.theTripToAddClothingTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(c.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Clothing Name: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.name;e.preventDefault(),g.a.post("".concat("/api","/clothing/update/").concat(a.props.theClothing._id),{theName:t}).then(function(){a.props.getAllTheTripsInAppJS(),a.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.state={name:a.props.theClothing.name},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("input",{name:"name",value:this.state.name,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),g.a.post("".concat("/api","/toiletries"),{theName:a.state.newName,theTrip:a.props.theTripToAddToiletriesTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(c.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Add Toiletries : "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),g.a.post("".concat("/api","/electronics"),{theName:a.state.newName,theTrip:a.props.theTripToAddElectronicsTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(c.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Add Electronics : "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChangeCity=function(e){e.preventDefault(),a.setState({searchCity:e.target.value},function(){console.log(a.state.searchCity),a.getLatLong(),a.getForecast()})},a.handleChangeCountry=function(e){e.preventDefault(),a.setState({searchCountry:e.target.value},function(){console.log(a.state.searchCountry),a.getLatLong(),a.getForecast()})},a.getLatLong=function(){g.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(a.state.searchCity,",+").concat(a.state.searchCountry,"&key=AIzaSyDkgfr2SrXtnYOzlJ2srEoDGcGe13A5zfs")).then(function(e){console.log("All the data",e),a.setState({latitude:e.data.results[0].geometry.location.lat}),a.setState({longitude:e.data.results[0].geometry.location.lng})}).catch(function(e){console.log(e)})},a.getForecast=function(){g.a.get("https://cors-anywhere.herokuapp.com/https://darksky.net/widget/default/".concat(a.state.latitude,",").concat(a.state.longitude,"/us12/en.js")).then(function(e){a.setState({forecast:"https://darksky.net/widget/default/".concat(a.state.latitude,",").concat(a.state.longitude,"/us12/en.js")}),console.log(a.state.forecast)}).catch(function(e){console.log(e)})},a.resetEdit=function(){a.setState({editing:!1})},a.edit=function(e){a.setState({editing:e})},a.deleteClothing=function(e){g.a.delete("".concat("/api","/clothing/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.deleteToiletries=function(e){g.a.delete("".concat("/api","/toiletries/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.deleteElectronics=function(e){g.a.delete("".concat("/api","/electronics/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.state={editing:!1,searchCity:"",searchCountry:"",latitude:"",longitude:"",forecast:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLatLong(),this.getForecast();var e=document.createElement("script");e.src="https://darksky.net/widget/default/".concat(this.state.latitude,",").concat(this.state.longitude,"/us12/en.js"),e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){var e=this,t=this.props.allTheTrips,a=this.props.match.params.theID,n=t.find(function(e){return e._id===a});return this.props.ready?l.a.createElement("div",{className:"morph-bar",style:{paddingTop:"20px"}},l.a.createElement("div",{className:"details-text"},l.a.createElement("div",{className:"trip-details"},l.a.createElement("span",null,l.a.createElement("h2",null," ",n.title," ")))),l.a.createElement("div",{className:"top-window"},l.a.createElement("div",{className:"leftside"},l.a.createElement("div",{class:"forecast-box"},l.a.createElement("div",{class:"morph-bar"},l.a.createElement("i",null," To get the Weather Forecast for your destination, ")),l.a.createElement("div",{className:"details-text"},l.a.createElement("div",{className:"lat-lng-search"},l.a.createElement("form",{id:"location-form"},l.a.createElement("input",{type:"text",id:"location-input",className:"form-control form-control-lg",onChange:this.handleChangeCity,value:this.state.searchCity,placeholder:"Enter the City"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"location-input",className:"form-control form-control-lg",onChange:this.handleChangeCountry,value:this.state.searchCountry,placeholder:"Enter the Country"}))),l.a.createElement("div",{className:"coordinates"},l.a.createElement("p",null,"Latitude  : ",e.state.latitude),l.a.createElement("p",null,"Longitude : ",e.state.longitude)))),l.a.createElement("div",null)),l.a.createElement("div",{className:"rightside"},l.a.createElement("div",{className:"forecast-bar"},l.a.createElement("div",{className:"weather-bar"},l.a.createElement("iframe",{style:{overflow:"hidden"},height:"420px",width:"400px",src:e.state.forecast}))))),l.a.createElement("div",{className:"bottom-window"},l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,"Clothing"),l.a.createElement("div",null,l.a.createElement("hr",null),n.clothing.length>0&&l.a.createElement("ul",{className:"list-format"},n.clothing.map(function(t,a){return e.state.editing!==a?l.a.createElement("li",null,l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){e.edit(a)}},"Edit"),l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteClothing(t._id)}},"Delete")))):l.a.createElement(C,{theClothing:t,getAllTheTripsInAppJS:e.props.getData,resetEditingSituation:e.resetEdit})})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(y,{theTripToAddClothingTo:n._id,getData:this.props.getData}))),l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,"Toiletries"),l.a.createElement("div",null,l.a.createElement("hr",null),n.toiletries.length>0&&l.a.createElement("ul",null,n.toiletries.map(function(t){return l.a.createElement("li",{key:t._id},l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("div",null,l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteToiletries(t._id)}},"Delete"))))})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(w,{theTripToAddToiletriesTo:n._id,getData:this.props.getData}))),l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,"Electronics"),l.a.createElement("div",null,l.a.createElement("hr",null),n.electronics.length>0&&l.a.createElement("ul",null,n.electronics.map(function(t){return l.a.createElement("li",{key:t._id},l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("p",null,l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteElectronics(t._id)}},"Delete"))))})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(N,{theTripToAddElectronicsTo:n._id,getData:this.props.getData}))))):l.a.createElement("h3",null,"Loading...")}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.tryToSignUp=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;g.a.post("".concat("/api","/auth/signup"),{username:t,password:n},{withCredentials:!0}).then(function(){a.props.getUser(),a.props.toggleForm("signup")})},a.hidePassword=function(){var e=document.getElementById("thePassword");"password"===e.type?e.type="text":e.type="password"},a.showSignup=function(){return l.a.createElement("form",{className:"login-signup",onSubmit:a.tryToLogin},l.a.createElement("h2",null,"Sign Up"),l.a.createElement("p",{className:"hint-text"},"Sign up with your social media account"),l.a.createElement("div",{className:"social-btns text-center"},l.a.createElement("a",{href:"#",className:"btn google"},l.a.createElement("i",{className:"fa fa-google"})),l.a.createElement("a",{href:"#",className:"btn facebook "},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"#",className:"btn twitter"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("p",{className:"hint-text"}," Social login coming soon! "),l.a.createElement("div",{className:"or-seperator"},l.a.createElement("b",null,"or")),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Username"),l.a.createElement("input",{value:a.state.usernameInput,name:"usernameInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Password"),l.a.createElement("input",{type:"password",value:a.state.passwordInput,id:"thePassword",name:"passwordInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group center-it"},l.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg btn-block signup-btn"}," Submit ")))},a.state={usernameInput:"",passwordInput:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-page"},this.showSignup())}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.tryToLogin=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;g.a.post("".concat("/api","/auth/login"),{username:t,password:n},{withCredentials:!0}).then(function(){a.props.getUser(),a.props.toggleForm("login")})},a.hidePassword=function(){var e=document.getElementById("thePassword");"password"===e.type?e.type="text":e.type="password"},a.showLogin=function(){return l.a.createElement("form",{className:"login-signup",onSubmit:a.tryToLogin},l.a.createElement("h2",null,"Log in"),l.a.createElement("p",{className:"hint-text"},"Log in with your social media account"),l.a.createElement("div",{className:"social-btns text-center"},l.a.createElement("a",{href:"#",className:"btn google"},l.a.createElement("i",{className:"fa fa-google"})),l.a.createElement("a",{href:"#",className:"btn facebook "},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"#",className:"btn twitter"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("p",{className:"hint-text"}," Social login coming soon! "),l.a.createElement("div",{className:"or-seperator"},l.a.createElement("b",null,"or")),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Username"),l.a.createElement("input",{value:a.state.usernameInput,name:"usernameInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Password"),l.a.createElement("input",{type:"password",value:a.state.passwordInput,id:"thePassword",name:"passwordInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group center-it"},l.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg btn-block signup-btn"}," Submit ")))},a.state={usernameInput:"",passwordInput:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-page"},this.showLogin())}}]),t}(n.Component);var O=function(e){return l.a.createElement("nav",null,!e.theUser&&l.a.createElement("span",null,l.a.createElement("button",{onClick:function(){return e.toggleForm("login")}}," Login "),l.a.createElement("button",{onClick:function(){return e.toggleForm("signup")}}," Sign Up ")),e.theUser&&l.a.createElement("span",{className:"centralMSG"},"Click on ",l.a.createElement(E.b,{to:"/trips",style:{textDecoration:"none",color:"#00B7FF",margin:"10px"}}," My Trips ")," to get started"),e.theUser&&l.a.createElement("span",null,l.a.createElement("button",{onClick:function(){e.pleaseLogOut()}}," Log Out ")))};var k=function(e){return l.a.createElement("body",null,!e.theUser&&l.a.createElement("div",null,l.a.createElement("div",{className:"landing-page"},l.a.createElement("div",{className:"landing-text"},l.a.createElement("h1",null," Trip-Packer "),l.a.createElement("h5",null," Customizable Lists for Packing your Bags & Prepping your Home ")),l.a.createElement("div",null)),l.a.createElement("div",{className:"img-stripe"},l.a.createElement("img",{src:"/images/laotzu-1000-miles.jpg"}),l.a.createElement("img",{src:"/images/backgrounds/maldives.jpeg"}),l.a.createElement("img",{src:"/images/backgrounds/kyoto-yakasa-pagoda.jpg"}),l.a.createElement("img",{src:"/images/backgrounds/Torii-Gate1.jpg"}),l.a.createElement("img",{src:"/images/backgrounds/Fushimi Inari1.jpg"}),l.a.createElement("img",{src:"/images/backgrounds/broken-bay.jpg"}))),e.theUser&&l.a.createElement("span",null,l.a.createElement(E.b,{to:"/trips",style:{textDecoration:"none",color:"#00B7FF",margin:"10px"}}," To begin, visit the My Trips page ")))},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getAllTrips=function(){g.a.get("".concat("/api","/trips"),{withCredentials:!0}).then(function(e){a.setState({listOfTrips:e.data,ready:!0})})},a.getCurrentlyLoggedInUser=function(){g.a.get("".concat("/api","/auth/getcurrentuser"),{withCredentials:!0}).then(function(e){var t=e.data;return a.setState({currentlyLoggedIn:t}),t}).catch(function(){a.setState({currentlyLoggedIn:null})})},a.toggleForm=function(e){var t;t="signup"===e?"signupShowing":"loginShowing",a.setState(Object(c.a)({},t,!a.state[t]))},a.logout=function(){g.a.post("".concat("/api","/auth/logout"),{},{withCredentials:!0}).then(function(e){console.log(e),a.getCurrentlyLoggedInUser()}).catch(function(e){console.log(e)})},a.state={listOfTrips:[],currentlyLoggedIn:null,ready:!1,signupShowing:!1,loginShowing:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllTrips(),this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return console.log("=-=-=-=-=-=-=-",this.state),l.a.createElement("div",null,l.a.createElement(O,{theUser:this.state.currentlyLoggedIn,pleaseLogOut:this.logout,toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),this.state.signupShowing&&l.a.createElement(j,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),this.state.loginShowing&&l.a.createElement(S,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),l.a.createElement(d.a,{exact:!0,path:"/",render:function(){return l.a.createElement(k,null)}}),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/trips",render:function(t){return l.a.createElement(v,Object.assign({},t,{allTheTrips:e.state.listOfTrips,getData:e.getAllTrips,ready:e.state.ready,theUser:e.state.currentlyLoggedIn}))}}),l.a.createElement(d.a,{exact:!0,path:"/trips/:theID",render:function(t){return l.a.createElement(T,Object.assign({},t,{allTheTrips:e.state.listOfTrips,ready:e.state.ready,getData:e.getAllTrips,theUser:e.state.currentlyLoggedIn}))}})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(E.a,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.8044500e.chunk.js.map