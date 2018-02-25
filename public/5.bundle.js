webpackJsonp([5],{147:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=t(0),d=o(u),c=t(29),f=o(c),p=t(9),h=t(322),g=o(h),m=t(323),v=o(m),w=t(324),y=o(w),b=t(15);t(325);var E=function(e){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={show:"signup",username:"",password:"",retypePassword:"",email:"",showError:!1,errorMessage:"",loading:!1},t}return s(n,e),l(n,[{key:"scrollTop",value:function(){setTimeout(function(){return f.default.scroller.scrollTo("landing-svg",{duration:0,delay:0,smooth:!1})},0)}},{key:"scrollAfterSearch",value:function(e){setTimeout(function(){return f.default.scroller.scrollTo(e,{duration:1e3,delay:70,smooth:!0})},100)}},{key:"handleRadio",value:function(e){this.setState({show:e.target.value,username:"",password:"",retypePassword:"",email:""})}},{key:"handleInput",value:function(e,n){this.setState(r({},n,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),"signup"==this.state.show?this.signup():this.login()}},{key:"login",value:function(){var e=this,n=this.state,t=n.email,o=n.password;if(!o)return void this.handleError("Please enter your credentials");fetch("/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t,password:o})}).then(function(e){return e.json()}).then(function(n){return e.handleLogin(n)}).catch(function(n){return e.handleLogin(n)})}},{key:"signup",value:function(){var e=this,n=this.state,t=n.password,o=n.retypePassword,r=n.email,i=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r?t!==o?void this.handleError("Passwords not the same"):t.length<5?void this.handleError("Password must be at least 5 characters"):i.test(r)?void fetch("/api/v1/signup",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:r})}).then(function(e){return e.json()}).then(function(n){return e.handleSignup(n)}).catch(function(n){return e.handleSignup(n)}):void this.handleError("Must be a valid email address"):void this.handleError("Complete the form please")}},{key:"handleSignup",value:function(e){return"Success"==e.message?(this.props.handleLogin(e.user),this.scrollTop(),this.scrollAfterSearch("profile-container"),void this.props.history.replace("/profile")):"Username Taken"==e.message?void this.handleError("User or email already taken"):"Something went wrong"==e.message?void this.handleError("Something went wrong on our end"):void this.handleError("Unknown error, sorry for the inconvience")}},{key:"handleLogin",value:function(e){return"Success"==e.message?(this.props.handleLogin(e.user),this.scrollTop(),this.scrollAfterSearch("profile-container"),void this.props.history.replace("/profile")):"User not found"==e.message?void this.handleError("User not found"):"Bad Password"==e.message?void this.handleError("Incorrect Password"):"Something went wrong"==e.message?void this.handleError("Something went wrong on our end"):void this.handleError("Unknown error, sorry for the inconvience")}},{key:"handleError",value:function(e){var n=this;this.setState({showError:!0,errorMessage:e}),setTimeout(function(){n.setState({showError:!1})},3e3)}},{key:"showSignup",value:function(){return d.default.createElement(g.default,{password:this.state.password,retypePassword:this.state.retypePassword,email:this.state.email,handleInput:this.handleInput.bind(this)})}},{key:"showLogin",value:function(){return d.default.createElement(v.default,{email:this.state.email,password:this.state.password,handleInput:this.handleInput.bind(this)})}},{key:"render",value:function(){var e=this;return d.default.createElement("section",{id:"login-signup-container"},d.default.createElement("form",null,d.default.createElement(y.default,{handleRadio:this.handleRadio.bind(this),show:this.state.show}),"signup"===this.state.show?this.showSignup():this.showLogin(),d.default.createElement("button",{onClick:function(n){e.handleSubmit(n)}},"Submit"),this.state.showError?d.default.createElement("div",{id:"error-message-login"},this.state.errorMessage):null))}}]),n}(u.Component),x=function(e){return{handleLogin:function(n){e((0,b.updateUser)(n))}}};n.default=(0,p.connect)(null,x)(E)},322:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){var n=e.password,t=e.retypePassword,o=e.email,i=e.handleInput;return r.default.createElement("div",{className:"signup-container"},r.default.createElement("input",{onChange:function(e){i(e,"email")},type:"input",value:o,placeholder:"email"}),r.default.createElement("input",{type:"password",onChange:function(e){i(e,"password")},value:n,placeholder:"password"}),r.default.createElement("input",{type:"password",onChange:function(e){i(e,"retypePassword")},value:t,placeholder:"retype-password"}),r.default.createElement("a",{href:"/signup/linkedin"},"Signup With LinkedIn"))};n.default=i},323:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){var n=e.email,t=e.password,o=e.handleInput;return r.default.createElement("div",{className:"login-container"},r.default.createElement("input",{onChange:function(e){o(e,"email")},type:"input",value:n,placeholder:"Email"}),r.default.createElement("input",{onChange:function(e){o(e,"password")},type:"password",value:t,placeholder:"Password"}),r.default.createElement("a",{href:"/login/linkedin"},"Login With LinkedIn"))};n.default=i},324:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){var n=e.show,t=e.handleRadio;return r.default.createElement("div",{className:"radio-buttons-container"},r.default.createElement("input",{type:"radio",id:"signup",name:"sign-login",checked:"signup"===n,value:"signup",onChange:function(e){t(e)}}),r.default.createElement("label",{htmlFor:"signup"},"SIGN UP"),r.default.createElement("input",{type:"radio",id:"login",name:"sign-login",checked:"login"===n,value:"login",onChange:function(e){t(e)}}),r.default.createElement("label",{htmlFor:"login"},"LOGIN"))};n.default=i},325:function(e,n,t){var o=t(326);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(8)(o,r);o.locals&&(e.exports=o.locals)},326:function(e,n,t){n=e.exports=t(7)(!1),n.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fredoka+One|Nunito|Comfortaa|Maven+Pro);",""]),n.push([e.i,'* {\n  box-sizing: border-box; }\n\n#login-signup-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 70vh;\n  max-width: 300px;\n  margin: 50px auto;\n  padding-top: 35px;\n  width: 90%; }\n  #login-signup-container form {\n    margin: 0px auto; }\n  #login-signup-container label {\n    font-family: "Comfortaa", serif;\n    margin-bottom: 25px;\n    display: inline-block; }\n  #login-signup-container input[type=\'radio\'] {\n    margin-left: 15px; }\n  #login-signup-container button {\n    border: 2px solid #33f5e7;\n    color: #33f5e7;\n    font-size: 1em;\n    font-family: "Comfortaa", serif;\n    padding: 14px;\n    outline: none;\n    transition: all 0.8s;\n    width: 100%; }\n    #login-signup-container button:hover, #login-signup-container button:focus {\n      background: #33f5e7;\n      color: #fff; }\n    #login-signup-container button:active {\n      background: red;\n      color: #fff; }\n\n.signup-container,\n.login-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-width: 200px;\n  width: 100%; }\n  .signup-container input,\n  .login-container input {\n    border: 2px solid #33f5e7;\n    font-family: "Comfortaa", serif;\n    font-size: 1em;\n    height: 48px;\n    margin-bottom: 9px;\n    padding-left: 10px;\n    outline: none;\n    transition: all 0.8s; }\n    .signup-container input:focus,\n    .login-container input:focus {\n      border: 2px solid #4286f4;\n      color: #4286f4; }\n\n#error-message-login {\n  background: red;\n  font-family: "Comfortaa", serif;\n  max-width: 200px;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 20px;\n  margin-top: 15px; }\n',""])}});