(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),i=(a(40),a(7)),o=a(2),s=a(3),u=a(5),m=a(4),p=a(6),d=a(1),h=a.n(d),g=a(14),E=(a(58),a(13)),f=(a(59),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat("/api","/trips"),{theTitle:a.state.newTitle,theDescription:a.state.newDescription},{withCredentials:!0}).then(function(){a.props.getData(),a.setState({newTitle:"",newDescription:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.state={newTitle:"",newDescription:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"add-trip"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Where are you going?:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newTitle",value:this.state.newTitle,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Add a brief Description:"),l.a.createElement("br",null),l.a.createElement("textarea",{name:"newDescription",value:this.state.newDescription,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.title,n=a.state.description;e.preventDefault(),h.a.post("".concat("/api","/trips/update/").concat(a.props.theTrip._id),{theTitle:t,theDescription:n}).then(function(){a.props.getAllTheTripsInAppJS(),a.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.state={title:a.props.theTrip.title,description:a.props.theTrip.description},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:"22.5px"}},l.a.createElement("form",{onSubmit:this.handleFormSubmit,style:{margin:"5px",padding:"5px"}},l.a.createElement("div",null,l.a.createElement("input",{style:{fontSize:"20px"},type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).changeEditing=function(e){a.setState({editing:e})},a.resetEdit=function(){a.setState({editing:!1})},a.deleteTrip=function(e){h.a.delete("".concat("/api","/trips/").concat(e)).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.showTrips=function(){if(a.props.theUser)return a.props.allTheTrips.filter(function(e){return e.owner===a.props.theUser._id}).map(function(e,t){return a.state.editing!==t?l.a.createElement("div",{key:e._id,className:"trip-box1"},l.a.createElement(E.b,{to:"/trips/".concat(e._id)},l.a.createElement("h3",null,e.title)),l.a.createElement("p",{style:{maxWidth:"400px"}}," ",e.description," "),l.a.createElement("button",{onClick:function(){a.changeEditing(t)}}," Edit "),l.a.createElement("button",{onClick:function(){a.deleteTrip(e._id)}}," Delete ")):l.a.createElement(b,{resetEditingSituation:a.resetEdit,theTrip:e,getAllTheTripsInAppJS:a.props.getData})});a.props.history.push("/")},a.state={editing:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.ready?l.a.createElement("div",{className:"trip-main"},l.a.createElement("div",{className:"trip-column"},l.a.createElement("div",{className:"trip-column"},this.showTrips()),l.a.createElement("div",{className:"trip-box2"},l.a.createElement("h4",null,l.a.createElement("i",null,"Let's begin by creating a Trip")),l.a.createElement(f,{getData:this.props.getData})))):l.a.createElement("h3",null,"loading...")}}]),t}(n.Component),y=(a(64),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat("/api","/clothing"),{theName:a.state.newName,theTrip:a.props.theTripToAddClothingTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Clothing Name: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){var t=a.state.name;e.preventDefault(),h.a.post("".concat("/api","/clothing/update/").concat(a.props.theClothing._id),{theName:t}).then(function(){a.props.getAllTheTripsInAppJS(),a.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.state={name:a.props.theClothing.name},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("input",{name:"name",value:this.state.name,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat("/api","/toiletries"),{theName:a.state.newName,theTrip:a.props.theTripToAddToiletriesTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Add Toiletries : "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat("/api","/electronics"),{theName:a.state.newName,theTrip:a.props.theTripToAddElectronicsTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Add Electronics : "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat("/api","/household"),{theName:a.state.newName,theTrip:a.props.theTripToAddHouseholdTo}).then(function(){a.props.getData(),a.setState({newName:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.state={newName:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null," Add Home Prep Task : "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"newName",value:this.state.newName,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add to List"})))}}]),t}(n.Component),k=a(17),S=["https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/en4und9tljzg9awepkui.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/kc3zjmfy68rgac0ws6yu.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/p0hxuhjxkyjso7kb8ney.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/jaomz7ltstk6pppzgykq.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/ivof0trwjdwummlchbgc.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/i5hvkd7bng5prmwzdn5c.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/nc766ondnswb06dspdkx.jpg","https://res.cloudinary.com/nimbuscloud/image/upload/v1571361070/trip-packing%20hacks/zqcquyje78kvkwx8uvwa.jpg"],O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={currentImageIndex:0},a.nextSlide=a.nextSlide.bind(Object(k.a)(a)),a.previousSlide=a.previousSlide.bind(Object(k.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"previousSlide",value:function(){var e=S.length-1,t=this.state.currentImageIndex,a=0===t?e:t-1;this.setState({currentImageIndex:a})}},{key:"nextSlide",value:function(){var e=S.length-1,t=this.state.currentImageIndex,a=t===e?0:t+1;this.setState({currentImageIndex:a})}},{key:"render",value:function(){var e=function(e){var t=e.direction,a=e.clickFunction,n=e.glyph;return l.a.createElement("div",{className:"slide-arrow ".concat(t),onClick:a},n)};return l.a.createElement("div",{className:"carousel"},l.a.createElement(e,{direction:"left",clickFunction:this.previousSlide,glyph:"\u25c0"}),l.a.createElement(function(e){var t=e.url,a={backgroundImage:"url(".concat(t,")"),backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"black"};return l.a.createElement("div",{className:"image-slide",style:a})},{url:S[this.state.currentImageIndex]}),l.a.createElement(e,{direction:"right",clickFunction:this.nextSlide,glyph:"\u25b6"}))}}]),t}(l.a.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChangeCity=function(e){e.preventDefault(),a.setState({searchCity:e.target.value},function(){console.log(a.state.searchCity),a.getLatLong(),a.getForecast()})},a.handleChangeCountry=function(e){e.preventDefault(),a.setState({searchCountry:e.target.value},function(){console.log(a.state.searchCountry),a.getLatLong(),a.getForecast()})},a.getLatLong=function(){h.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(a.state.searchCity,",+").concat(a.state.searchCountry,"&key=AIzaSyDkgfr2SrXtnYOzlJ2srEoDGcGe13A5zfs")).then(function(e){console.log("All the data",e),a.setState({latitude:e.data.results[0].geometry.location.lat}),a.setState({longitude:e.data.results[0].geometry.location.lng})}).catch(function(e){console.log(e)})},a.getForecast=function(){h.a.get("https://cors-anywhere.herokuapp.com/https://darksky.net/widget/default/".concat(a.state.latitude,",").concat(a.state.longitude,"/us12/en.js")).then(function(e){a.setState({forecast:"https://darksky.net/widget/default/".concat(a.state.latitude,",").concat(a.state.longitude,"/us12/en.js")}),console.log(a.state.forecast)}).catch(function(e){console.log(e)})},a.resetEdit=function(){a.setState({editing:!1})},a.edit=function(e){a.setState({editing:e})},a.deleteClothing=function(e){h.a.delete("".concat("/api","/clothing/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.deleteToiletries=function(e){h.a.delete("".concat("/api","/toiletries/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.deleteElectronics=function(e){h.a.delete("".concat("/api","/electronics/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.deleteHousehold=function(e){h.a.delete("".concat("/api","/household/")+e).then(function(){a.props.getData()}).catch(function(e){console.log(e)})},a.state={editing:!1,searchCity:"",searchCountry:"",latitude:"",longitude:"",forecast:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLatLong(),this.getForecast();var e=document.createElement("script");e.src="https://darksky.net/widget/default/".concat(this.state.latitude,",").concat(this.state.longitude,"/us12/en.js"),e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){var e=this,t=this.props.allTheTrips,a=this.props.match.params.theID,n=t.find(function(e){return e._id===a});return this.props.ready?l.a.createElement("div",{style:{paddingTop:"20px"}},l.a.createElement("div",{className:"details-text"},l.a.createElement("h2",null," ",n.title," ")),l.a.createElement("div",{className:"top-window"},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"forecast-box"},l.a.createElement("div",{className:"morph-bar"},l.a.createElement("i",null," To get the Weather Forecast for your destination : ")),l.a.createElement("div",{className:"details-text"},l.a.createElement("div",{className:"lat-lng-search"},l.a.createElement("form",{id:"location-form"},l.a.createElement("input",{type:"text",id:"location-input",className:"form-control form-control-lg",onChange:this.handleChangeCity,value:this.state.searchCity,placeholder:"Enter the City"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"location-input",className:"form-control form-control-lg",onChange:this.handleChangeCountry,value:this.state.searchCountry,placeholder:"Enter the Country"}))),l.a.createElement("div",{className:"coordinates"},l.a.createElement("p",null," Latitude  ",e.state.latitude),l.a.createElement("p",null," Longitude ",e.state.longitude)))),l.a.createElement("div",{className:"forecast-bar"},l.a.createElement("div",{className:"weather-bar"},l.a.createElement("iframe",{style:{overflow:"hidden"},scrolling:"no",height:"420px",width:"400px",src:e.state.forecast})))),l.a.createElement("div",{id:"container",className:"right-side"},l.a.createElement(O,null))),l.a.createElement("div",{className:"item-columns"},l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,l.a.createElement("u",null,"Clothing")),l.a.createElement("div",null,l.a.createElement("hr",null),n.clothing.length>0&&l.a.createElement("ul",{className:"list-format"},n.clothing.map(function(t,a){return e.state.editing!==a?l.a.createElement("li",null,l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){e.edit(a)}},"Edit"),l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteClothing(t._id)}},"Delete")))):l.a.createElement(N,{theClothing:t,getAllTheTripsInAppJS:e.props.getData,resetEditingSituation:e.resetEdit})})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(y,{theTripToAddClothingTo:n._id,getData:this.props.getData}))),l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,l.a.createElement("u",null,"Electronics")),l.a.createElement("div",null,l.a.createElement("hr",null),n.electronics.length>0&&l.a.createElement("ul",null,n.electronics.map(function(t){return l.a.createElement("li",{key:t._id},l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("p",null,l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteElectronics(t._id)}},"Delete"))))})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(C,{theTripToAddElectronicsTo:n._id,getData:this.props.getData}))),l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,l.a.createElement("u",null,"Hygiene")),l.a.createElement("div",null,l.a.createElement("hr",null),n.toiletries.length>0&&l.a.createElement("ul",null,n.toiletries.map(function(t){return l.a.createElement("li",{key:t._id},l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("div",null,l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteToiletries(t._id)}},"Delete"))))})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(w,{theTripToAddToiletriesTo:n._id,getData:this.props.getData}))),l.a.createElement("div",{className:"home-prep item-columns"},l.a.createElement("div",{className:"item-column"},l.a.createElement("h3",null,l.a.createElement("u",null,"Home-Prep Tasks")),l.a.createElement("div",null,l.a.createElement("hr",null),n.household.length>0&&l.a.createElement("ul",{className:"list-format"},n.household.map(function(t){return l.a.createElement("li",{key:t._id},l.a.createElement("div",{className:"list-and-btn"},l.a.createElement("div",null,l.a.createElement("p",null,t.name)),l.a.createElement("p",null,l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteHousehold(t._id)}},"Delete"))))})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-item"},l.a.createElement(j,{theTripToAddHouseholdTo:n._id,getData:this.props.getData})))))):l.a.createElement("h3",null,"Loading...")}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.tryToSignUp=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;h.a.post("".concat("/api","/auth/signup"),{username:t,password:n},{withCredentials:!0}).then(function(){a.props.getUser(),a.props.toggleForm("signup")})},a.hidePassword=function(){var e=document.getElementById("thePassword");"password"===e.type?e.type="text":e.type="password"},a.showSignup=function(){return l.a.createElement("form",{className:"login-signup",onSubmit:a.tryToSignUp},l.a.createElement("h2",null,"Sign Up"),l.a.createElement("p",{className:"hint-text"},"Sign up with your social media account"),l.a.createElement("div",{className:"social-btns text-center"},l.a.createElement("a",{href:"#",className:"btn google"},l.a.createElement("i",{className:"fa fa-google"})),l.a.createElement("a",{href:"#",className:"btn facebook "},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"#",className:"btn twitter"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("p",{className:"hint-text"}," Social login coming soon! "),l.a.createElement("div",{className:"or-seperator"},l.a.createElement("b",null,"or")),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Username"),l.a.createElement("input",{value:a.state.usernameInput,name:"usernameInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Password"),l.a.createElement("input",{type:"password",value:a.state.passwordInput,id:"thePassword",name:"passwordInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group center-it"},l.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg btn-block signup-btn"}," Submit ")))},a.state={usernameInput:"",passwordInput:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-page"},this.showSignup())}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.tryToLogin=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;h.a.post("".concat("/api","/auth/login"),{username:t,password:n},{withCredentials:!0}).then(function(){a.props.getUser(),a.props.toggleForm("login")})},a.hidePassword=function(){var e=document.getElementById("thePassword");"password"===e.type?e.type="text":e.type="password"},a.showLogin=function(){return l.a.createElement("form",{className:"login-signup",onSubmit:a.tryToLogin},l.a.createElement("h2",null,"Log in"),l.a.createElement("p",{className:"hint-text"},"Log in with your social media account"),l.a.createElement("div",{className:"social-btns text-center"},l.a.createElement("a",{href:"#",className:"btn google"},l.a.createElement("i",{className:"fa fa-google"})),l.a.createElement("a",{href:"#",className:"btn facebook "},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"#",className:"btn twitter"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("p",{className:"hint-text"}," Social login coming soon! "),l.a.createElement("div",{className:"or-seperator"},l.a.createElement("b",null,"or")),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Username"),l.a.createElement("input",{value:a.state.usernameInput,name:"usernameInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("legend",null,"Password"),l.a.createElement("input",{type:"password",value:a.state.passwordInput,id:"thePassword",name:"passwordInput",className:"form-control input-lg",onChange:a.handleChange})),l.a.createElement("hr",null),l.a.createElement("div",{className:"form-group center-it"},l.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg btn-block signup-btn"}," Submit ")))},a.state={usernameInput:"",passwordInput:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-page"},this.showLogin())}}]),t}(n.Component);var I=function(e){return l.a.createElement("nav",null,!e.theUser&&l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.toggleForm("login")}}," Login "),l.a.createElement("i",null," \xa0\xa0 or \xa0\xa0 "),l.a.createElement("button",{onClick:function(){return e.toggleForm("signup")}}," Sign Up ")),e.theUser&&l.a.createElement("span",{className:"centralMSG"},"Click on ",l.a.createElement(E.b,{to:"/trips",style:{textDecoration:"none",color:"#00B7FF",margin:"10px"}}," My Trips ")," to get started"),e.theUser&&l.a.createElement("span",{className:"logout-btn"},l.a.createElement("button",{onClick:function(){e.pleaseLogOut()}}," Log Out ")))};var L=function(e){return l.a.createElement("body",null,!e.theUser&&l.a.createElement("div",{className:"landing-page"},l.a.createElement("div",{className:"landing-text"},l.a.createElement("h1",null," Trip-Packer "),l.a.createElement("h3",null," ","Customizable Lists for Packing your Bags & Prepping your Home"," "))),!e.theUser&&l.a.createElement("div",{className:"image-row landing-wrap"},l.a.createElement("div",{className:"circle-divs"},l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"ergo-circle",src:"images/plane-trip.jpeg",alt:"plane"}),">"),l.a.createElement("p",null," Create a Trip ")),l.a.createElement("div",{className:"circle-divs"},l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"ergo-circle",src:"images/check-weather-1.jpg",alt:"weather"}),">"),l.a.createElement("p",null," Check the Weather ")),l.a.createElement("div",{className:"circle-divs"},l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"ergo-circle",src:"images/pack-bags1.jpg",alt:"pack-bags"}),">"),l.a.createElement("p",null," Pack Your Bags ")),l.a.createElement("div",{className:"circle-divs"},l.a.createElement("div",{className:"image-cropper"},l.a.createElement("img",{className:"ergo-circle",src:"images/Preparing-Your-Home-for-Your-Trip.jpg",alt:"home-check"}),">"),l.a.createElement("p",null," Prep your Home "))))},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getAllTrips=function(){h.a.get("".concat("/api","/trips"),{withCredentials:!0}).then(function(e){a.setState({listOfTrips:e.data,ready:!0})})},a.getCurrentlyLoggedInUser=function(){h.a.get("".concat("/api","/auth/getcurrentuser"),{withCredentials:!0}).then(function(e){var t=e.data;return a.setState({currentlyLoggedIn:t}),t}).catch(function(){a.setState({currentlyLoggedIn:null})})},a.toggleForm=function(e){var t;t="signup"===e?"signupShowing":"loginShowing",a.setState(Object(i.a)({},t,!a.state[t]))},a.logout=function(){h.a.post("".concat("/api","/auth/logout"),{},{withCredentials:!0}).then(function(e){console.log(e),a.getCurrentlyLoggedInUser()}).catch(function(e){console.log(e)})},a.state={listOfTrips:[],currentlyLoggedIn:null,ready:!1,signupShowing:!1,loginShowing:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllTrips(),this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return console.log("=-=-=-=-=-=-=-",this.state),l.a.createElement("div",null,l.a.createElement(I,{theUser:this.state.currentlyLoggedIn,pleaseLogOut:this.logout,toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),this.state.loginShowing&&l.a.createElement(x,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),this.state.signupShowing&&l.a.createElement(D,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),l.a.createElement(g.a,{exact:!0,path:"/",render:function(){return l.a.createElement(L,null)}}),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/trips",render:function(t){return l.a.createElement(v,Object.assign({},t,{allTheTrips:e.state.listOfTrips,getData:e.getAllTrips,ready:e.state.ready,theUser:e.state.currentlyLoggedIn}))}}),l.a.createElement(g.a,{exact:!0,path:"/trips/:theID",render:function(t){return l.a.createElement(T,Object.assign({},t,{allTheTrips:e.state.listOfTrips,ready:e.state.ready,getData:e.getAllTrips,theUser:e.state.currentlyLoggedIn}))}})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(E.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.273524ee.chunk.js.map