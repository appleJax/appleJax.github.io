(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{269:function(e,t,a){"use strict";t.a={primary:{night:"#002B00",dark:"#234D20",main:"#36802D",light:"#77AB59",highlight:"#C9DF8A",white:"#F0F7DA"},secondary:{night:"#0F080E",dark:"#201407",main:"#2E1915",light:"#4C2B21",highlight:"#7C5835",bright:"#D1B995",white:"#FEEAC7"},darkGrey:"#777",lightGrey:"#eee"}},270:function(e,t,a){"use strict";t.a={flexColumn:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},flexRow:{display:"flex",alignItems:"center",justifyContent:"space-between"}}},273:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return C});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(271),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(52);a.d(t,"waitForRouteChange",function(){return s.c});var m=a(275),u=a.n(m);a.d(t,"PageRenderer",function(){return u.a});var A=a(53);a.d(t,"parsePath",function(){return A.a});var p=r.a.createContext({}),C=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}C.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},275:function(e,t,a){var n;e.exports=(n=a(280))&&n.default||n},276:function(e,t,a){"use strict";a(131),a(274);var n=a(0),r=a.n(n),i=a(277),o=a.n(i),c=a(80),l=a(269);t.a=Object(c.withStyles)(function(e){return{link:{color:e.palette.primary.main,padding:"0 8px",textDecoration:"none","&:hover":{color:e.palette.primary.light,"& svg, g, path":{fill:e.palette.primary.light}}},grey:{color:l.a.darkGrey,"&:hover":{color:l.a.lightGrey}},title:{alignItems:"center",background:l.a.primary.night,borderRadius:"50%",boxShadow:"2px 2px 8px rgba(0, 0, 0, 0.5)",opacity:"0.9",display:"flex",height:"55px",justifyContent:"center",margin:"0 5px",width:"55px"}}})(function(e){var t,a=e.classes,n=e.title,i=e.footer,c=e.className,l=void 0===c?"":c,s=e.children,m=e.to;return r.a.createElement("a",{className:o.a.apply(void 0,[a.link].concat(l.split(" "),[(t={},t[a.grey]=i,t[a.title]=n,t)])),target:"_blank",rel:"noopener noreferrer",href:m},s)})},278:function(e,t,a){"use strict";var n=a(279),r=a(0),i=a.n(r),o=a(273),c=a(1),l=a.n(c),s=a(283),m=a.n(s),u=(a(81),a(128)),A=a.n(u),p=a(80),C=a(269),d=Object(p.createMuiTheme)({palette:{primary:{light:C.a.primary.light,main:C.a.primary.main,dark:C.a.primary.dark,contrastText:C.a.primary.white},secondary:{light:C.a.secondary.light,main:C.a.secondary.main,dark:C.a.secondary.dark,contrastText:C.a.secondary.white}},typography:{fontSize:18}}),h=a(129),g=a.n(h),f=a(270),w=function(){return i.a.createElement("div",{style:{flexGrow:100}})},y=a(276),b=Object(p.withStyles)(function(e){return{container:Object.assign({},f.a.flexRow,{justifyContent:"center",color:"#888",background:C.a.secondary.night,height:"60px",marginTop:"20px",width:"100vw"}),copyright:{color:C.a.darkGrey,fontFamily:"Roboto",fontSize:"0.8em"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.container},i.a.createElement("p",{className:t.copyright},"© 2018 - Kevin Brewer -"),i.a.createElement(y.a,{to:"https://github.com/appleJax",className:"fab fa-github",footer:!0}),i.a.createElement(y.a,{to:"https://www.linkedin.com/in/kevin-brewer-profile",className:"fab fa-linkedin",footer:!0}),i.a.createElement(y.a,{to:"mailto:kevnbrewer@gmail.com",className:"fas fa-envelope",footer:!0}))}),E=Object(p.withStyles)(function(){return{container:Object.assign({},f.a.flexColumn,{background:C.a.secondary.bright,minHeight:"100vh",maxWidth:"100vw",overflowX:"hidden"})}})(function(e){var t=e.children,a=e.classes,n=e.classPrefix,r=Object(p.createGenerateClassName)({productionPrefix:n});return i.a.createElement(A.a,{generateClassName:r},i.a.createElement(p.MuiThemeProvider,{theme:d},i.a.createElement(g.a,null),i.a.createElement("div",{className:a.container},t,i.a.createElement(w,null),i.a.createElement(b,null))))}),x=function(e){var t=e.children,a=e.classPrefix,r=function(e){var n=e.site;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:n.title,meta:[{property:"og:title",content:"Kevin Brewer - Software Engineer"},{property:"og:description",content:"Kevin Brewer's Online Portfolio"},{property:"og:url",content:"https://applejax.github.io"},{property:"og:image",content:"https://www.dropbox.com/s/tk5j042s6b9wqde/githubPages.png?dl=0"},{name:"description",content:n.description},{name:"keywords",content:n.keywords}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Carter+One&text=Hi,I'mKevn."},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css",integrity:"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",crossorigin:"anonymous"}]}),i.a.createElement(E,{classPrefix:a},t))};return i.a.createElement(o.StaticQuery,{query:"1596136498",render:function(e){return i.a.createElement(r,{site:e.site.siteMetadata})},data:n})};x.propTypes={children:l.a.array},t.a=x},279:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Brewer - Software Engineer",description:"Kevin Brewer's portfolio website",keywords:"javascript, programming, software, blog, open source"}}}}},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(76),l=a(4),s=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},285:function(e,t,a){"use strict";a(81);var n=a(0),r=a.n(n),i=a(80),o=a(270),c=a(276);t.a=Object(i.withStyles)(function(e){var t;return{container:Object.assign({},o.a.flexRow,(t={justifyContent:"center"},t[e.breakpoints.down("xs")]={margin:"5px 0 10px",width:"100%"},t))}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.container},r.a.createElement(c.a,{to:"https://github.com/appleJax",className:"fab fa-2x fa-github"}),r.a.createElement(c.a,{to:"https://www.linkedin.com/in/kevin-brewer-profile",className:"fab fa-2x fa-linkedin"}),r.a.createElement(c.a,{to:"mailto:kevnbrewer@gmail.com",className:"fas fa-2x fa-envelope"}))})},286:function(e,t,a){"use strict";a(81);var n=a(0),r=a.n(n),i=a(80),o=a(277),c=a.n(o),l=a(270),s=a(269),m=a(272),u=a.n(m),A=a(295),p=a.n(A),C=Object(i.withStyles)(function(e){var t;return{container:Object.assign({},l.a.flexRow,(t={justifyContent:"flex-start",width:"33%"},t[e.breakpoints.down("sm")]={width:"50%"},t[e.breakpoints.down("xs")]={width:"100%"},t)),photo:{borderRadius:"50%",boxShadow:"3px 3px 15px rgba(0, 0, 0, 0.6)",margin:"15px"},title:Object.assign({},l.a.flexColumn,{color:s.a.primary.night,textShadow:"1px 1px 1px rgba(255, 255, 255, 0.2)"}),titleLine:{textAlign:"center"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.container},r.a.createElement("img",{alt:"Me",className:t.photo,src:p.a}),r.a.createElement("div",{className:t.title},r.a.createElement(u.a,{className:t.titleLine,variant:"title"},"Kevin Brewer"),r.a.createElement(u.a,{className:t.titleLine,variant:"body1"},"Software Engineer")))}),d=a(276),h=Object(i.withStyles)(function(e){return{icon:{fill:e.palette.primary.main}}})(function(e){var t=e.classes;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 480",height:"32px"},r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{className:t.icon,id:"vendor-codewars",transform:"translate(-40.000000, -40.000000)"},r.a.createElement("path",{d:"M479.473333,40.32 L80.1133333,40.32 C58.1133333,40.32 40.1133333,58.32 40.1133333,80.32 L40.1133333,479.68 C40.1133333,501.68 58.1133333,519.68 80.1133333,519.68 L479.473333,519.68 C501.473333,519.68 519.473333,501.68 519.473333,479.68 L519.473333,80.32 C519.473333,58.32 501.473333,40.32 479.473333,40.32 Z M488.56,325.193333 C486.586667,327.136667 484.706667,329.176667 482.033333,331.946667 C485.883333,355.08 470.733333,368.803333 454.116667,381.633333 C436.81,394.996667 419.496667,408.356667 401.976667,421.44 C398.066667,424.36 393.29,426.116667 388.873333,428.426667 C377.96,458.563333 373.843333,462.266667 350.72,461.74 C345.186667,476.613333 334.2,482.536667 318.216667,478.336667 C317.156667,478.06 315.51,477.123333 315.156667,477.483333 C299.613333,493.47 281.776667,481.15 265.583333,480.096667 C253.616667,479.32 241.49,471.636667 230.706667,464.97 C221.596667,459.336667 215.15,448.98 202.2,451.976667 C201.706667,452.09 201,451.963333 200.593333,451.67 C188.11,442.633333 173.02,448.183333 160.356667,444.78 C143.93,440.37 129.326667,428.89 114.29,419.873333 C112.026667,418.516667 111.58,414.03 110.436667,410.94 C109.67,408.87 109.663333,405.22 108.45,404.806667 C92.03,399.203333 92.65,383.59 87.2166667,371.096667 C82.16,359.473333 78.65,349.083333 85.0566667,337.013333 C86.57,334.163333 86.5033333,329.39 85.22,326.316667 C76.9366667,306.526667 76.76,306.593333 78.7933333,286.913333 C61.8066667,272.436667 59.31,261.443333 73.1133333,244.003333 C67.58,231.48 64.7966667,218.823333 79.9033333,209.77 C81.0333333,209.093333 81.41,206.89 81.81,205.316667 C86.7366667,185.98 101.35,173.82 116.68,164.31 C130.736667,155.593333 147.85,153.413333 157.113333,135.826667 C160.576667,129.25 171.316667,125.4 173.476667,115.393333 C173.986667,113.03 176.613333,110.7 178.84,109.21 C189.91,101.8 202.84,97.99 212.956667,87.99 C217.206667,83.7933333 229.063333,87.2933333 240.316667,87.2933333 C255.266667,68.62 275.8,83.8 294.76,86.2233333 C303.73,87.3666667 311.75,95.3533333 320.403333,99.8466667 C324.206667,101.823333 328.45,103.106667 332.633333,104.14 C335.266667,104.79 338.513333,103.576667 340.876667,104.603333 C354.17,110.373333 367.413333,114.133333 381.886667,108.55 C383.87,107.786667 388.316667,109.293333 389.453333,111.106667 C398.753333,125.97 417.586667,121.17 428.973333,130.826667 C432.246667,133.603333 432.77,139.62 434.996667,145.266667 C445.88,148.823333 457.76,153.113333 454.886667,169.416667 C466.55,176.613333 458.916667,191.79 467.62,200.21 C458.433333,220.286667 479.85,237.02 473.833333,258.09 C476.683333,260.063333 480.983333,261.87 483.51,265.073333 C487.136667,269.676667 493.25,277.666667 491.726667,280.096667 C482.413333,294.983333 502.6,311.363333 488.56,325.193333 Z M275.113333,143.253333 C252.986667,151.446667 252.72,151.84 257.663333,171.68 C246.906667,176.463333 240.403333,184.253333 246.083333,197.32 C246.803333,198.98 246.373333,202.086667 245.213333,203.45 C240.123333,209.416667 241.093333,214.943333 243.723333,221.853333 C245.173333,225.663333 242.323333,231.11 241.423333,235.753333 C246.15,242.256667 251.273333,248.463333 255.313333,255.31 C256.83,257.876667 257.21,263.673333 255.656667,264.906667 C253.26,266.806667 248.15,267.433333 245.246667,266.17 C233.66,261.136667 221.49,256.51 211.473333,249.11 C203.636667,243.32 198.15,233.996667 192.57,225.613333 C188.496667,219.493333 185.966667,212.346667 181.243333,202.526667 C182.293333,200.44 185.04,195.28 187.5,189.986667 C189.233333,186.26 192.76,181.543333 191.693333,178.68 C188.553333,170.263333 194.563333,163.783333 194.696667,156.926667 C195.036667,139.17 214.66,135.573333 218.233333,120.996667 C237.216667,112.633333 254.77,98.87 277.73,105.68 C281.29,106.736667 285.183333,106.666667 288.436667,107.06 C292.57,115.43 288.12,120.056667 283.926667,125.56 C280.093333,130.593333 278.106667,137.036667 275.113333,143.253333 Z M412.606667,158.73 C420.993333,166.156667 427.45,171.876667 434.756667,178.346667 C436.543333,186.25 438.59,195.29 440.633333,204.326667 C439.506667,205.21 438.383333,206.09 437.256667,206.973333 C422.516667,197.363333 403.8,208.026667 389.546667,195.536667 C388.463333,194.586667 386.303333,194.293333 384.77,194.526667 C370.493333,196.703333 355.51,197.01 342.15,201.806667 C316.953333,210.846667 293.9,224.19 277.83,250.083333 C266.806667,238.4 266.923333,226.403333 269.443333,214.53 C271.876667,203.063333 275.956667,191.946667 279.603333,179.703333 C293.536667,179.86 292.916667,166.786667 296.72,159.056667 C327.72,147.143333 357.536667,134.15 392.61,146.503333 C395.93,154.21 402.366667,162.183333 412.606667,158.73 Z M278.506667,294.48 C290.876667,321.25 281.926667,344.726667 270.766667,366.846667 C265.996667,373.13 261.2,379.39 256.476667,385.706667 C255.16,387.466667 254.056667,390.996667 252.86,390.993333 C236.18,390.956667 226.22,407.546667 208.66,407.37 C194.576667,407.23 181.163333,409.9 166.75,404.993333 C149.896667,399.253333 136.44,390.533333 123.866667,378.113333 C113.583333,367.956667 110.88,358.043333 114.59,344.833333 L148.366667,344.833333 C156.453333,354.706667 167.906667,360.096667 182.69,351.296667 C185.123333,349.846667 189.003333,350.976667 192.173333,350.58 C198.583333,349.776667 205.05,349.126667 211.326667,347.696667 C217.53,346.286667 223.53,343.98 229.623333,342.086667 C231.72,341.436667 234.44,341.47 235.84,340.12 C244.676667,331.606667 253.376667,322.936667 261.81,314.023333 C267.11,308.416667 271.866667,302.296667 278.506667,294.48 Z M141.88,176.04 C140.306667,189.896667 142.016667,200.753333 155.04,207.496667 C149.926667,221.876667 148.963333,234.52 166.666667,239.653333 C167.65,239.936667 169.18,240.773333 169.236667,241.453333 C170.55,257.246667 184.396667,258.903333 194.523333,265.88 C210.72,277.043333 226.88,284.17 246.743333,281.81 C249.993333,281.423333 253.486667,283.063333 257.183333,283.83 C255.176667,299.766667 243.076667,307.253333 233.233333,310.766667 C214.56,317.43 195.596667,329.65 173.716667,318.976667 C169.53,316.936667 163.05,319.593333 159.363333,319.926667 C136.53,309.316667 125.56,287.333333 106.413333,273.193333 C107.326667,263.286667 114.683333,251.673333 102.13,244.986667 C105.213333,214.763333 116.033333,191.106667 141.88,176.04 Z M419.96,379.24 C417.823333,373.526667 414.48,369.156667 415.17,365.563333 C417.28,354.57 412.956667,347.293333 403.473333,341.27 C407.836667,327.85 403.24,318.01 391.223333,310.866667 C388.513333,309.256667 386.216667,305.036667 385.836667,301.773333 C384.75,292.476667 379.87,287.993333 370.92,286.876667 C368.266667,286.546667 364.6,286.1 363.313333,284.32 C350.4,266.473333 330.376667,266.793333 311.733333,263.553333 C307.24,262.773333 302.72,262.156667 297.75,261.396667 C299.123333,245.366667 311.993333,240.726667 320.363333,237.646667 C339.506667,230.603333 360.373333,221.003333 380.866667,229.736667 C397.186667,236.693333 417.263333,237.87 428.036667,256.156667 C431.343333,261.773333 438.963333,264.846667 444.586667,269.066667 C447.74,278.766667 451.046667,288.933333 454.863333,300.673333 L454.863333,333.523333 C446.103333,346.77 439.426667,365.106667 419.96,379.24 Z M230.09,435.27 C261.333333,435.69 264.673333,433.653333 271.693333,410.656667 C285.003333,406.226667 296.436667,399.283333 296.603333,382.24 C296.623333,380.16 299.833333,378.116667 301.563333,376.05 C303.66,373.543333 307.276667,371.22 307.606667,368.496667 C310.06,348.193333 314.44,327.77 307.326667,307.516667 C304.506667,299.486667 301.353333,291.573333 297.143333,280.396667 C305.323333,281.22 310.76,280.713333 315.386667,282.413333 C335.06,289.633333 350.813333,302.84 363.126667,319.196667 C368.92,326.893333 370.453333,337.793333 374.85,349.796667 C370.01,356.92 367.753333,367.243333 376.72,377.716667 C364.913333,387.283333 358.78,398.536667 360.683333,411.583333 C351.33,420.56 342.846667,428.706667 331.913333,439.203333 C325.82,441.916667 316.063333,446.256667 306.88,450.34 C298.966667,451.83 291.233333,453.996667 283.386667,454.556667 C275.833333,455.093333 266.676667,456.46 260.876667,453.006667 C251.243333,447.266667 235.78,451.596667 230.09,435.27 Z",id:"codewars"}))))}),g=Object(i.withStyles)(function(e){return{icon:{fill:e.palette.primary.main}}})(function(e){var t=e.classes;return r.a.createElement("svg",{className:t.icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414",height:"32px"},r.a.createElement("path",{d:"M8 0c.857 0 6.5 3.257 6.928 4 .43.743.43 7.257 0 8-.43.743-6.07 4-6.928 4-.858 0-6.5-3.257-6.93-4-.427-.743-.427-7.257 0-8C1.5 3.257 7.143 0 8 0zm1.53 4.532c-.094 0-.172.077-.172.172v2.583H6.642V4.605h.467c.094 0 .17-.077.17-.172 0-.062-.033-.117-.082-.147L6.148 3.28c-.032-.042-.094-.073-.15-.073-.056 0-.107.03-.138.072L4.74 4.286c-.048.03-.08.084-.08.146 0 .095.076.172.17.172h.47l.004 6.69c0 .096.075.172.17.172h.995c.094 0 .172-.077.172-.17v-2.67h2.716v2.768H8.89c-.094 0-.17.077-.17.172 0 .062.032.116.08.146l1.052 1.007c.03.04.094.073.15.073.056 0 .106-.03.138-.073l1.12-1.007c.048-.03.08-.084.08-.146 0-.095-.077-.172-.17-.172h-.47l-.004-6.69c0-.096-.076-.173-.17-.173H9.53z"}))}),f=Object(i.withStyles)(function(e){return{icon:{"& path":{fill:e.palette.primary.main}}}})(function(e){var t=e.classes;return r.a.createElement("svg",{className:t.icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 384",height:"32px"},r.a.createElement("g",{id:"logo-shape",fill:"none",fillRule:"evenodd"},r.a.createElement("circle",{id:"Oval",fill:"transparent",cx:"192",cy:"192",r:"192"}),r.a.createElement("path",{id:"shape",style:{transition:"all 200ms ease-in-out"},d:"M244.1 101.5s3.3 33.8-18.3 52.1c-8.7-5.5-19.6-8.6-32.5-8.6-11.9 0-23.6 3.4-33.7 9.7-23.1-18.1-19.6-53.2-19.6-53.2-25.6 49.9 1.3 69.4 1.9 69.9-7.1 10.2-11.5 23.1-11.5 38.2 0 40.5 29.7 64.4 66.7 64.4 18.9 0 35-6.3 47.8-14.3l-8.8-15.8c-11.1 6.5-22.4 10.6-35.7 10.6-24.7 0-42.8-14.3-44.3-38.5h92.6c.5-3 1.3-7.8 1.3-12.8 0-12.1-2.6-22.9-7.6-31.8 2.4-1.9 26.3-21.9 1.7-69.9zm-88.3 97.3c3.3-21.9 19.6-34.2 38-34.2 21.1 0 33 12.3 33 34.2h-71zM192 384C86.1 384 0 297.9 0 192S86.1 0 192 0s192 86.1 192 192-86.1 192-192 192zm0-359.1c-92.2 0-167.1 75-167.1 167.1 0 92.2 75 167.1 167.1 167.1 92.2 0 167.1-75 167.1-167.1 0-92.2-74.9-167.1-167.1-167.1z"})))}),w=Object(i.withStyles)(function(e){var t;return{description:{border:"2px solid rgba(0, 0, 0, 0.3)",borderLeft:"none",borderRight:"none",color:s.a.primary.night,fontSize:"14px",fontWeight:"bold",marginTop:"10px",padding:"5px",opacity:"0.8",textAlign:"center",textShadow:"1px 1px rgba(255, 255, 255, 0.1)"},innerContainer:Object.assign({},l.a.flexRow,{justifyContent:"center"}),outerContainer:Object.assign({},l.a.flexColumn,(t={alignItems:"center",width:"33%"},t[e.breakpoints.down("sm")]={width:"50%"},t[e.breakpoints.down("xs")]={width:"100%"},t))}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.outerContainer},r.a.createElement("div",{className:t.innerContainer},r.a.createElement(d.a,{to:"https://codepen.io/appleJax",title:!0},r.a.createElement("i",{className:"fab fa-2x fa-codepen"})),r.a.createElement(d.a,{to:"https://www.codewars.com/users/appleJax",title:!0},r.a.createElement(h,null)),r.a.createElement(d.a,{to:"https://www.hackerrank.com/kevinbrewer04",title:!0},r.a.createElement(g,null)),r.a.createElement(d.a,{to:"https://exercism.io/profiles/appleJax",title:!0},r.a.createElement(f,null))),r.a.createElement(u.a,{className:t.description,variant:"body1"},"CODE SAMPLES"))});t.a=Object(i.withStyles)(function(e){var t,a;return{container:Object.assign({},l.a.flexRow,(t={alignItems:"center",background:e.palette.primary.main,color:e.palette.primary.dark,display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"50px",paddingBottom:"12px",width:"100vw"},t[e.breakpoints.down("xs")]={marginTop:"95px"},t)),spacer:(a={width:"33%"},a[e.breakpoints.down("sm")]={width:"0"},a)}})(function(e){var t=e.classes,a=e.className;return r.a.createElement("div",{className:c()(a,t.container)},r.a.createElement(C,null),r.a.createElement(w,null),r.a.createElement("div",{className:t.spacer}))})},295:function(e,t){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=1-6b3ebb9c6ffe4d95ccac.js.map