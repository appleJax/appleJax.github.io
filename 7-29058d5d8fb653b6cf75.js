(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(t,e,o){var r=o(26).f,i=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in i||o(18)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(t){return""}}})},303:function(t,e,o){var r=o(4);r(r.P,"Function",{bind:o(304)})},304:function(t,e,o){"use strict";var r=o(14),i=o(9),l=o(89),n=[].slice,s={};t.exports=Function.bind||function(t){var e=r(this),o=n.call(arguments,1),a=function(){var r=o.concat(n.call(arguments));return this instanceof a?function(t,e,o){if(!(e in s)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";s[e]=Function("F,a","return new F("+r.join(",")+")")}return s[e](t,o)}(e,r.length,r):l(e,r,t)};return i(e.prototype)&&(a.prototype=e.prototype),a}},305:function(t,e,o){var r;r=function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=(r=o(1))&&r.__esModule?r:{default:r};e.default=i.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),n=o(2),s=(r=n)&&r.__esModule?r:{default:r},a=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.Component),l(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1);window.scroll({top:document.getElementById(r).offsetTop-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}(t,["offset"]));return s.default.createElement("a",i({},e,{onClick:this.smoothScroll}))}}]),e}();e.default=a},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";var e=window,o=document;t.exports={polyfill:function(){if(!("scrollBehavior"in o.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var t,r=e.HTMLElement||e.Element,i=468,l=(t=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0),n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||a,scrollIntoView:r.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now;e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(e,o.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,o.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var t=function(t){var e;do{e=(t=t.parentNode)===o.body}while(!1===e&&!1===d(t));return e=null,t}(this),r=t.getBoundingClientRect(),i=this.getBoundingClientRect();t!==o.body?(h.call(this,t,t.scrollLeft+i.left-r.left,t.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(t).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function u(t,o){var r=e.getComputedStyle(t,null)["overflow"+o];return"auto"===r||"scroll"===r}function d(t){var e=f(t,"Y")&&u(t,"Y"),o=f(t,"X")&&u(t,"X");return e||o}function p(t){var o,r,l,n,a=(s()-t.startTime)/i;n=a=a>1?1:a,o=.5*(1-Math.cos(Math.PI*n)),r=t.startX+(t.x-t.startX)*o,l=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,r,l),r===t.x&&l===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(t,r,i){var l,c,f,u,d=s();t===o.body?(l=e,c=e.scrollX||e.pageXOffset,f=e.scrollY||e.pageYOffset,u=n.scroll):(l=t,c=t.scrollLeft,f=t.scrollTop,u=a),p({scrollable:l,method:u,startTime:d,startX:c,startY:f,x:r,y:i})}}}}()}])},t.exports=r(o(0))},306:function(t,e,o){"use strict";var r=o(34);e.__esModule=!0,e.default=void 0;var i,l=r(o(13)),n=r(o(55)),s=r(o(184)),a=r(o(154)),c=r(o(0)),f=r(o(8)),u=function(t){var e=(0,a.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},d={},p=function(t){var e=u(t),o=e.fluid?e.fluid.src:e.fixed.src;return!!d[o]||(d[o]=!0,!1)},h=[],y=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',o=t.sizes?'sizes="'+t.sizes+'" ':"",r=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+o+"/>":"",i=t.srcSet?'<source srcSet="'+t.srcSet+'" '+o+"/>":"",l=t.title?'title="'+t.title+'" ':"",n=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",a=t.height?'height="'+t.height+'" ':"",c=t.opacity?t.opacity:"1";return"<picture>"+r+i+"<img "+s+a+e+n+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(t,e){var o=t.style,r=t.onLoad,i=t.onError,l=(0,s.default)(t,["style","onLoad","onError"]);return c.default.createElement("img",(0,a.default)({},l,{onLoad:r,onError:i,ref:e,style:(0,a.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});b.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var v=function(t){function e(e){var o;o=t.call(this,e)||this;var r=!0,i=!0,l=!1,s=e.fadeIn,a=p(e);!a&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,l=!0),"undefined"==typeof window&&(r=!1,i=!1),e.critical&&(r=!0,i=!1,l=!1);var f=!(o.props.critical&&!o.props.fadeIn);return o.state={isVisible:r,imgLoaded:i,IOSupported:l,fadeIn:s,hasNoScript:f,seenBefore:a},o.imageRef=c.default.createRef(),o.handleImageLoaded=o.handleImageLoaded.bind((0,n.default)((0,n.default)(o))),o.handleRef=o.handleRef.bind((0,n.default)((0,n.default)(o))),o}(0,l.default)(e,t);var o=e.prototype;return o.componentDidMount=function(){if(this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},o.handleRef=function(t){var e=this;this.state.IOSupported&&t&&function(t,e){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),i).observe(t),h.push([t,e])}(t,function(){e.setState({isVisible:!0})})},o.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},o.render=function(){var t=u(this.props),e=t.title,o=t.alt,r=t.className,i=t.style,l=void 0===i?{}:i,n=t.imgStyle,s=void 0===n?{}:n,f=t.placeholderStyle,d=void 0===f?{}:f,p=t.fluid,h=t.fixed,v=t.backgroundColor,g=t.Tag,m="boolean"==typeof v?"lightgray":v,w=(0,a.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),S=(0,a.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s);if(p){var E=p;return c.default.createElement(g,{className:(r||"")+" gatsby-image-wrapper",style:(0,a.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},c.default.createElement(g,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&c.default.createElement(b,{alt:this.state.isVisible?"":o,title:e,src:E.base64,style:w}),E.tracedSVG&&c.default.createElement(b,{alt:this.state.isVisible?"":o,title:e,src:E.tracedSVG,style:w}),m&&c.default.createElement(g,{title:e,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,E.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),c.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),c.default.createElement(b,{alt:o,title:e,src:E.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,a.default)({alt:o,title:e},E))}}))}if(h){var O=h,L=(0,a.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},l);return"inherit"===l.display&&delete L.display,c.default.createElement(g,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},O.base64&&c.default.createElement(b,{alt:this.state.isVisible?"":o,title:e,src:O.base64,style:w}),O.tracedSVG&&c.default.createElement(b,{alt:this.state.isVisible?"":o,title:e,src:O.tracedSVG,style:w}),m&&c.default.createElement(g,{title:e,style:{backgroundColor:m,width:O.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:O.height}}),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement("source",{srcSet:O.srcSet,sizes:O.sizes}),c.default.createElement(b,{alt:o,title:e,width:O.width,height:O.height,src:O.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,a.default)({alt:o,title:e,width:O.width,height:O.height},O))}}))}return null},e}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var g=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string}),m=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string});v.propTypes={resolutions:g,sizes:m,fixed:g,fluid:m,fadeIn:f.default.bool,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,Tag:f.default.string};var w=v;e.default=w}}]);
//# sourceMappingURL=7-29058d5d8fb653b6cf75.js.map