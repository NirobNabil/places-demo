(this.webpackJsonpplaces_demo=this.webpackJsonpplaces_demo||[]).push([[0],{175:function(e,t,a){e.exports=a(385)},180:function(e,t,a){},181:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=(a(180),a(181),a(52)),c=a(53),s=a(55),d=a(54),u=a(56),m=a(68),p=a(387),h=a(388),f=a(43),g=m.a.Option;var v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=(t.getFieldDecorator,t.getFieldsError),n=t.getFieldError,r=t.isFieldTouched,i=r("username")&&n("username"),l=r("password")&&n("password");return o.a.createElement(p.a,{layout:"inline",onSubmit:this.handleSubmit},o.a.createElement(p.a.Item,{validateStatus:i?"error":"",help:i||""},o.a.createElement(h.a,{placeholder:"Lattitude"}),","),o.a.createElement(p.a.Item,{validateStatus:l?"error":"",help:l||""},o.a.createElement(h.a,{placeholder:"Longitude"}),","),o.a.createElement(p.a.Item,{validateStatus:l?"error":"",help:l||""},o.a.createElement(h.a,{placeholder:"Range"}),","),o.a.createElement(p.a.Item,{validateStatus:l?"error":"",help:l||""},o.a.createElement(m.a,{mode:"multiple",style:{width:"40em",flexGrow:"1"},placeholder:"Please select",defaultValue:["restaurant"]},["restaurants","coffee shop","park","theatre","shopping mall"].map((function(e){return o.a.createElement(g,{key:e}," ",e," ")})))),o.a.createElement(p.a.Item,null,o.a.createElement(f.a,{type:"primary",htmlType:"submit",disabled:(e=a(),Object.keys(e).some((function(t){return e[t]})))},"Submit")))}}]),t}(o.a.Component),k=p.a.create({name:"horizontal_login"})(v),w=a(389),E=a(386),b=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return o.a.createElement("a",null,e)}},{title:"Address",dataIndex:"address",key:"address"},{title:"Lat/Lon",dataIndex:"coordinate"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return o.a.createElement("span",null,e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),o.a.createElement(w.a,{color:t,key:e},e.toUpperCase())})))}}],y=[{key:"1",name:"IZAKAYA",coordinate:"32 / 31.23",address:"New York No. 1 Lake Park",tags:["nice","child friendly"]},{key:"2",name:"Dacca",coordinate:"42.23 / 54",address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Dacca",coordinate:"42.23 / 54",address:"London No. 1 Lake Park",tags:["NICE"]}],C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,{columns:b,dataSource:y})}}]),t}(o.a.Component),j=a(57),O={margin:"3em"},I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).map={},a.state={showingInfoWindow:!1,activeMarkers:{},selectedPlaces:{},selectedPlace:{},manual:!1,currentLocation:{},loaded:!1},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.componentDidMount=function(){navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;a.setState({currentLocation:{lat:t.latitude,lng:t.longitude},loaded:!0})}))},a.panMapTo=function(){},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.loaded?o.a.createElement(j.Map,{google:this.props.google,zoom:14,style:O,initialCenter:{lat:this.state.currentLocation.lat,lng:this.state.currentLocation.lng}},o.a.createElement(j.Marker,{onClick:this.onMarkerClick,name:"current location",position:{lat:this.state.currentLocation.lat,lng:this.state.currentLocation.lng}}),this.props.places.map((function(t){return o.a.createElement(j.Marker,{onClick:e.onMarkerClick,name:t.name,position:{lat:t.coordinate.latitude,lng:t.coordinate.longitude}})})),o.a.createElement(j.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},o.a.createElement("div",null,o.a.createElement("h4",null,this.state.selectedPlace.name)))):o.a.createElement("div",null,' "loading" ')}}]),t}(o.a.Component),S=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyC4q0S0GbA-cxRC_4ZVcd6AOeW3Yjt10tE"})(I);var L=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"motherContainer"},o.a.createElement("div",{className:"search"},o.a.createElement(k,null)),o.a.createElement("div",{className:"result"},o.a.createElement("div",{className:"map"},o.a.createElement(S,{places:[{name:"Gg",coordinate:{latitude:-1.2884,longitude:36.8233}}]})),o.a.createElement("div",{className:"table"},o.a.createElement(C,null)))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/places-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/places-demo","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[175,1,2]]]);
//# sourceMappingURL=main.fa21b0a6.chunk.js.map