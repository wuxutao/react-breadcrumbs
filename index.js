"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_reactRouter=require("react-router"),Breadcrumbs=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.displayName="Breadcrumbs",e}return _inherits(t,e),_createClass(t,[{key:"_getDisplayName",value:function(e){var t=null;return t=e.indexRoute?e.indexRoute.displayName||null:e.displayName||null,!t&&e.name&&(t=e.name),!t&&this.props.displayMissing&&(t=this.props.displayMissingText),t}},{key:"_resolveRouteName",value:function(e){var t=this._getDisplayName(e);return!t&&e.breadcrumbName&&(t=e.breadcrumbName),!t&&e.name&&(t=e.name),t}},{key:"_processRoute",value:function(e,t,r,a,s){var p=this;if(!e.path&&this.props.hideNoPath)return null;var n="",o="",u="",i=this._resolveRouteName(e);if(i&&"excludes"in this.props&&this.props.excludes.some(function(e){return e===i}))return null;var l=a;l&&(l=e.childRoutes?!0:!1,l=t!==r+1),n=t!==r+1?this.props.separator:"",e.hasOwnProperty("breadcrumblink")&&(l=e.breadcrumblink),this.props.params&&(o=Object.keys(this.props.params).map(function(e){return u=e,p.props.params[e]}));var c=e.path.split("/")[e.path.split("/").length-1],h=void 0;if(e.path.split("/").map(function(t){if(":"==t.substring(0,1)&&p.props.params){h=Object.keys(p.props.params).map(function(e){return p.props.params[e]});var r=e.path.split("/").map(function(e){return":"==e.substring(0,1)?h.shift():e});e.path=r.reduce(function(e,t){return e+"/"+t}),":"==c.substring(0,1)&&(i=r.reduce(function(e,t){return t}))}}),i){if(l)var f=s?_react2["default"].createElement(_reactRouter.Link,{to:e.path,params:e.params},i):i;else f=i;return s?_react2["default"].createElement(this.props.itemElement,{key:100*Math.random()},f,n):f}return null}},{key:"_buildRoutes",value:function(e,t){var r=this,a=[],s=e[1]&&e[1].hasOwnProperty("path"),p="/",n=[];return e.forEach(function(e,t){var a=JSON.parse(JSON.stringify(e));"props"in a&&"path"in a.props&&(a.path=a.props.path,a.children=a.props.children,a.name=a.props.name),a.path&&("/"===a.path.charAt(0)?p=a.path:("/"!==p.charAt(p.length-1)&&(p+="/"),p+=a.path)),t>0&&a.path&&"/"!==a.path.charAt(0)&&(a.path=p);var s=r._resolveRouteName(a);"excludes"in r.props&&r.props.excludes.some(function(e){return e===s})||n.push(a)}),e=n,e.map(function(n,o){if(!n)return null;"props"in n&&"path"in n.props&&(n.path=n.props.path,n.children=n.props.children,n.name=n.props.name),n.path&&("/"===n.path.charAt(0)?p=n.path:("/"!==p.charAt(p.length-1)&&(p+="/"),p+=n.path)),o>0&&n.path&&"/"!==n.path.charAt(0)&&(n.path=p);var u=r._processRoute(n,e.length,a.length,s,t);u&&a.push(u)}),"setDocumentTitle"in this.props&&this.props.setDocumentTitle&&(document.title=a[a.length-1].props.children[0]),t?_react2["default"].createElement(this.props.wrapperElement,{className:this.props.customClass},a):a}},{key:"render",value:function(){var e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];return this._buildRoutes(this.props.routes,e)}}]),t}(_react2["default"].Component);Breadcrumbs.propTypes={separator:_react2["default"].PropTypes.string,displayMissing:_react2["default"].PropTypes.bool,displayMissingText:_react2["default"].PropTypes.string,displayName:_react2["default"].PropTypes.string,breadcrumbName:_react2["default"].PropTypes.string,wrapperElement:_react2["default"].PropTypes.string,itemElement:_react2["default"].PropTypes.string,customClass:_react2["default"].PropTypes.string,excludes:_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string),hideNoPath:_react2["default"].PropTypes.bool,routes:_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object).isRequired,setDocumentTitle:_react2["default"].PropTypes.bool},Breadcrumbs.defaultProps={separator:" > ",displayMissing:!0,displayMissingText:"Missing Name from Route",wrapperElement:"div",itemElement:"span",customClass:"breadcrumbs",excludes:[""],hideNoPath:!0,setDocumentTitle:!1},Breadcrumbs.contextTypes={routes:_react2["default"].PropTypes.array,params:_react2["default"].PropTypes.array},exports["default"]=Breadcrumbs;
//# sourceMappingURL=dist/react-breadcrumbs.min.js.map