!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("input"),d=document.createElement("button"),l=document.createElement("i"),r=document.createElement("button");let u=screen.width;window.addEventListener("resize",()=>{u=screen.width});const m={currentPage:"",pages:""};function h(e){""===m.currentPage&&(m.currentPage=1),m.pages=e;const t=document.createElement("button");t.className="pageButton",t.classList.add("hidden"),document.getElementsByClassName("pageButton").length<4&&t.classList.remove("hidden"),i.appendChild(t),t.id=`pageButton${e}`;const n=document.getElementsByClassName("active");0===n.length&&(document.getElementById("pageButton1").classList.add("active"),document.getElementById("pageButton1").innerHTML="1"),document.getElementById(`pageButton${e}`).addEventListener("click",t=>{m.currentPage=e;for(let e=0;e<n.length;e++)n[e].classList.remove("active");if(document.getElementById(`pageButton${e}`).classList.add("active"),t.target.classList.contains("active")){for(let e=0;e<i.childNodes.length;e++)i.childNodes[e].innerHTML="";t.target.innerHTML=e}if(m.pages-m.currentPage==1&&document.getElementById("next").click(),m.currentPage>3){const t=document.getElementsByClassName("pageButton");for(let e=0;e<t.length;e++)t[e].classList.add("hidden");document.getElementById(`pageButton${e-1}`).classList.remove("hidden"),document.getElementById(`pageButton${e}`).classList.remove("hidden"),document.getElementById(`pageButton${e+1}`).classList.remove("hidden"),document.getElementById(`pageButton${e+2}`).classList.remove("hidden")}else if(m.currentPage<5){const e=document.getElementsByClassName("pageButton");for(let t=0;t<e.length;t++)e[t].classList.add("hidden");document.getElementById("pageButton1").classList.remove("hidden"),document.getElementById("pageButton2").classList.remove("hidden"),document.getElementById("pageButton3").classList.remove("hidden"),document.getElementById("pageButton4").classList.remove("hidden")}u>800?o.scrollTo({left:`${1048*(e-1)}`,behavior:"smooth"}):u<500?o.scrollTo({left:`${262*(e-1)}`,behavior:"smooth"}):o.scrollTo({left:`${524*(e-1)}`,behavior:"smooth"})})}function p(e,t){const n=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),i=document.createElement("a"),c=document.createElement("span"),d=document.createElement("span"),l=document.createElement("i"),r=document.createElement("i"),u=document.createElement("span"),m=document.createElement("span"),h=document.createElement("i"),p=document.createElement("span");n.className="block",s.className="topPart",a.className="bottomPart",p.className="description",l.className="fas fa-at",r.className="far fa-calendar-alt",d.className="channel",u.className="createDate",s.style.backgroundImage=`url(${e.snippet.thumbnails.medium.url})`,i.className="link",c.className="title",c.innerHTML+=e.snippet.title,i.href=`https://www.youtube.com/watch?v=${e.id.videoId}`,i.innerHTML="Watch on youtube",i.target="_blank",o.appendChild(n),n.appendChild(s),n.appendChild(a),s.appendChild(c),c.appendChild(i),a.appendChild(d),d.appendChild(l),d.innerHTML+=e.snippet.channelTitle,a.appendChild(u),u.appendChild(r),u.innerHTML+=e.snippet.publishedAt.split("T")[0],m.className="watchedCount",h.className="fas fa-eye",a.appendChild(m),m.appendChild(h),m.id=`data${t}`,a.appendChild(p),e.snippet.description?p.innerHTML+=e.snippet.description:p.innerHTML+="No description yet...",i.addEventListener("touchend",()=>{window.open(i.href,"_blank")})}function g(e,t){document.getElementById(`data${t}`).innerHTML+=e}class v{constructor(){this.baselink="https://www.googleapis.com/youtube/v3/",this.settings="AIzaSyBhgMW0S1a7AdMt0Vq2BUjzSiJR0uZn7cA",this.maxRezult=15,this.count=0,this.sate=[],this.nextPage="",this.len=""}makeUrl(e){const t={...{type:"video",part:"snippet",maxResults:this.maxRezult,pageToken:this.nextPage}};let n=`${this.baselink}search?key=${this.settings}&`;for(const e in t)n+=`${e}=${t[e]}&`;return(n+=`q={${e}}`).slice(0,-1)}makeUrlCount(e){const t={...e};let n=`${this.baselink}videos?key=${this.settings}&part=statistics&id=`;for(const e in t)n+=`${t[e]},`;return this.url=n,n.slice(0,-1)}getResp(e){fetch(this.makeUrl(e)).then(e=>e.json()).then(e=>this.func(e)).catch(e=>console.error(e))}getRespCount(e,t){fetch(this.makeUrlCount(e)).then(e=>e.json()).then(e=>t(e)).catch(e=>console.error(e))}func(e){this.nextPage=e.nextPageToken,this.sate.push(e.items),this.len=e.items.length;const t=[],n=[];this.countPages(this.len,t);for(let e=0;e<t.length;e++)h(t[e]);for(let t=0;t<e.items.length;t++){const s=e.items[t],a=s.id.videoId;document.getElementById("itemsSection").childNodes.length>=15?p(s,`${e.items.indexOf(s)+this.sate.length}`):p(s,e.items.indexOf(s)),n.push(a)}this.getRespCount(n,e=>{for(let t=0;t<e.items.length;t++)document.getElementById("itemsSection").childNodes.length>15?g(e.items[t].statistics.viewCount,`${t+this.sate.length}`):g(e.items[t].statistics.viewCount,t)})}countPages(e,t){let n=e;if(u>800){if(n>4)for(this.count++,t.push(this.count);n>4;)n-=4,this.count++,t.push(this.count)}else if(u<500){if(n>1)for(this.count++,t.push(this.count);n>1;)n-=1,this.count++,t.push(this.count)}else for(this.count++,t.push(this.count);n>2;)n-=2,this.count++,t.push(this.count)}}window.state={searchTags:""},document.addEventListener("DOMContentLoaded",function(){s.className="container",s.id="container",a.className="search",c.className="input-area",c.placeholder="Type anything here...",c.value="",l.className="fas fa-search",d.className="search-button",d.id="searchButton",d.type="button",o.className="itemsSection",i.className="buttonSection",o.id="itemsSection",r.id="next",r.style.display="none",document.body.appendChild(s),s.appendChild(a),s.appendChild(o),s.appendChild(i),a.appendChild(c),a.insertBefore(d,c),d.appendChild(l),a.appendChild(r),document.body.addEventListener("click",e=>{e.target.classList.contains("input-area")&&a.classList.add("active-search-box"),e.target.classList.contains("input-area")||a.classList.remove("active-search-box")})}),c.addEventListener("keydown",e=>{13===e.keyCode&&document.querySelector("button").click()}),d.addEventListener("click",()=>{let e=new v;window.state.searchTags=c.value,o.childNodes.length>0&&i.childNodes.length>0&&(function(){for(m.currentPage="",m.pages="";i.lastChild;)i.removeChild(i.lastChild)}(),function(){for(;o.lastChild;)o.removeChild(o.lastChild)}()),""!==c.value&&e.getResp(window.state.searchTags),c.value="",document.getElementById("next").addEventListener("click",()=>{e.getResp(window.state.searchTags)}),function(){const e=o;let t,n,s;function a(o){s=o.pageX;const i=n-s;return i>20&&i<400&&(document.getElementById(`pageButton${+t+1}`).click(),e.removeEventListener("mousemove",a)),i<-20&&i>-400&&(document.getElementById(`pageButton${+t-1}`).click(),e.removeEventListener("mousemove",a)),!1}e.addEventListener("mousedown",function(s){t=document.getElementsByClassName("active")[0].innerHTML,n=s.pageX,e.addEventListener("mousemove",a)}),window.addEventListener("mouseup",()=>{e.removeEventListener("mousemove",a)})}(),function(){const e=o;let t,n,s;function a(o){s=o.changedTouches[`${o.changedTouches.length-1}`].pageX;const i=n-s;i>20&&i<400&&(document.getElementById(`pageButton${+t+1}`).click(),e.removeEventListener("touchmove",a)),i<-20&&i>-400&&(document.getElementById(`pageButton${+t-1}`).click(),e.removeEventListener("touchmove",a))}e.addEventListener("touchstart",function(s){s.preventDefault(),t=document.getElementsByClassName("active")[0].innerHTML,n=s.changedTouches[0].pageX,e.addEventListener("touchmove",a,{passive:!1})},{passive:!1}),e.addEventListener("touchend",()=>{e.removeEventListener("touchmove",a)})}()})}]);