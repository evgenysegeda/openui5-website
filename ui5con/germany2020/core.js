!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1);const o=n(2),i=n(3),r=n(4);var a="https://openui5.org/ui5con/germany2020/?v3",s={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:a}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:a,mini:!0}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{url:a}},email:{shareUrl:"mailto:",params:{subject:"UI5con@SAP coming in June 2020",body:"Mark your calendars: UI5con@SAP 2020 is on June 19 in St. Leon-Rot, Germany — a daylong community event focused on UI5 development. https://openui5.org/ui5con/germany2020/"}}};window.openShare=function(e){var t=s[e];if(t){var n=t.params,o=Object.keys(n).map((function(e){return e+"="+encodeURIComponent(n[e])})),i=t.shareUrl+"?"+o.join("&")+"&v=2",r=window.innerWidth/2-300+window.screenX,a="scrollbars=no, width=600, height=480, top="+(window.innerHeight/2-240+window.screenY)+", left="+r,c=window.open(i,"",a);window.focus&&c.focus()}};var c=s.email,u=document.getElementById("emailShare"),l=c.params,d=Object.keys(l).map((function(e){return e+"="+encodeURIComponent(l[e])}));u.href=c.shareUrl+"?"+d.join("&");var m=document.getElementById("hero"),p=document.getElementById("heroBackground"),f=document.getElementById("bar");setTimeout((function(){m.classList.add("animate_step1")})),setTimeout((function(){p.classList.add("view_focus")}),700),setTimeout((function(){p.classList.add("view_focus")}),700),setTimeout((function(){m.classList.remove("animate_step1"),m.classList.add("animate_step2"),f.classList.add("view_visible"),setTimeout((function(){m.classList.remove("animate_step2"),m.classList.add("animate_step3")}),500)}),1400),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||function(){var e=document.createElement("video");e.muted=!0,e.loop=!0,e.playsinline=!0,e.preload=!0,e.setAttribute("class","hero_video");var t=document.createElement("source");t.setAttribute("src",i),t.setAttribute("type","video/webm"),e.appendChild(t),(t=document.createElement("source")).setAttribute("src",r),t.setAttribute("type","video/mp4"),e.appendChild(t);var n=document.getElementById("heroBackground");n.appendChild(e),setTimeout((function(){n.getElementsByClassName("hero_image")[0].style.zIndex=0,e.play()}),1e3)}(),o.initialiseDialog()},function(e,t,n){e.exports=n.p+"index.html"},function(e,t){var n,o,i,r=function(){document.body.style.overflow="hidden",n.style.display="block",setTimeout((function(){o.classList.add("view_animation")}),0)},a=function(){document.body.style.overflow="auto",n.style.display="none",i.classList.remove("state_iframe"),o.classList.remove("view_animation")};e.exports={initialiseDialog:function(){n=document.getElementById("paperToCallDialog"),o=document.querySelector(".sessions"),i=document.querySelector(".slider__container"),window.openDialog=r,window.closeDialog=a,document.getElementById("submit").addEventListener("click",(function(){i.classList.add("state_iframe"),i.scrollTo(0,0)}))}}},function(e,t,n){e.exports=n.p+"10afb43fbc2b812c63f071623599425a.webm"},function(e,t,n){e.exports=n.p+"9c01d24c860839ca3b993aafa76a3ee2.mp4"}]);
//# sourceMappingURL=core.js.map