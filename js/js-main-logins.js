/*Generated on:Mon Aug 23 2021 10:01:28 GMT-0400 (EDT)*/var navHeight=$(".nav-wrap").height();function initMatchHeight(){$(".match-height").matchHeight({byRow:!0})}function isMobile(){return $(window).width()<768}function isTablet(){return $(window).width()>767&&$(window).width()<992}function isDesktop(){return $(window).width()>991}function isADPcom(){return $('body[data-sitename="website"]').length>0}function isNAuser(){return"NA"===dataLayer[0].continent}function isUSuser(){return"US"===dataLayer[0].country}function isADPca(){return $('body[data-sitename="canada"]').length>0}function isADPcaEN(){return $('body.en[data-sitename="canada"]').length>0}function isADPcaFR(){return $('body.fr-CA[data-sitename="canada"]').length>0}function isADPuk(){return $('body[data-sitename="uk"]').length>0}function isADPIA(){return $('body[data-sitename="insurance"]').length>0}function isHomePage(){return!!$("meta[name=sc_page_type]").attr("content","home").length}function isBuyerSection(){return!!$(".global-nav .main-links li.drop a.level-1.plus.js-section-buyer.on").length}function isResourceSection(){return!!$(".global-nav .main-links li.drop a.level-1.plus.js-section-resource.on").length}function cardClickable(){$(".resource-listing, .js-card-clickable").on("click",".card:not(.card-links)",(function(){if($(this).find("a").attr("href").length&&!$(this).find("a").hasClass("litymodal")){if("_blank"===$(this).find("a").attr("target")||$(this).find("a").hasClass("card-external")){var t=$(this).find("a").attr("href");return window.open(t,"_blank"),!1}return window.location=$(this).find("a").attr("href"),!1}}))}function truncateAbstract(){$("div.card:not(.rh2) .card-body .title").each((function(){var t=$(this).height(),e=3;e=t>80?1:t>55&&t<81?2:3,$(this).next(".abstract, .abstract p").ellipsis({lines:e,ellipClass:"ellip",responsive:!0})})),$("div.card.rh2.card-event .card-body .title").each((function(){var t=$(this).height(),e=5;e=t>158?1:t>131&&t<159?2:t>104&&t<132?3:t>78&&t<105?4:5,$(this).next(".abstract, .abstract p").ellipsis({lines:e,ellipClass:"ellip",responsive:!0})}))}function reloaddate(){$("div.card .date").each((function(){let t=this.innerText;t?Date.parse(t)?this.innerText=new Date(this.innerText).toLocaleTimeString([],{month:"short",day:"numeric",hour:"numeric"}).replace("PM","p.m.").replace("AM","a.m.").replace(" ",4===new Date(this.innerText).getMonth()?" ":". "):(t=t.replace(" GMT","").replace(" ","T"),Date.parse(t)&&(this.innerText=new Date(t).toLocaleTimeString([],{month:"short",day:"numeric",hour:"numeric"}).replace("PM","p.m.").replace("AM","a.m.").replace(" ",4===new Date(t).getMonth()?" ":". "))):(t=this.innerHTML.trim(),t=t.replace(" GMT","").replace(" ","T"),Date.parse(t)&&(this.innerText=new Date(t).toLocaleTimeString([],{month:"short",day:"numeric",hour:"numeric"}).replace("PM","p.m.").replace("AM","a.m.").replace(" ",4===new Date(t).getMonth()?" ":". ")))}))}String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var o=e[r];if(t.call(i,o,r,e))return r;r++}return-1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var o=e[r];if(t.call(i,o,r,e))return o;r++}},configurable:!0,writable:!0}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element===t}))){if(!t||1!==t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!==t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(window,"resize",this._checkForIntersections,!0),r(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(window,"resize",this._checkForIntersections,!0),o(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(i){var r=i.element,o=s(r),a=this._rootContainsTarget(r),c=i.entry,h=t&&a&&this._computeTargetAndRootIntersection(r,e),l=i.entry=new n({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:o,rootBounds:e,intersectionRect:h});c?t&&a?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!==window.getComputedStyle(e).display){for(var i,r,o,a,h,l,d,u,f=s(e),p=c(e),g=!1;!g;){var v=null,b=1===p.nodeType?window.getComputedStyle(p):{};if("none"===b.display)return;if(p===this.root||p===t?(g=!0,v=n):p!==t.body&&p!==t.documentElement&&"visible"!==b.overflow&&(v=s(p)),v&&(i=v,r=f,o=void 0,a=void 0,h=void 0,l=void 0,d=void 0,u=void 0,o=Math.max(i.top,r.top),a=Math.min(i.bottom,r.bottom),h=Math.max(i.left,r.left),l=Math.min(i.right,r.right),u=a-o,!(f=(d=l-h)>=0&&u>=0&&{top:o,bottom:a,left:h,right:l,width:d,height:u})))break;p=c(p)}return f}},i.prototype._getRootRect=function(){var e;if(this.root)e=s(this.root);else{var n=t.documentElement,i=t.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"===e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},i.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o===n||o===i||o<n!=o<i)return!0}},i.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},i.prototype._rootContainsTarget=function(e){return a(this.root||t,e)},i.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},i.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!==t&&e.splice(t,1)},window.IntersectionObserver=i,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var n,i,r,o=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(o.root&&1!==o.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),i=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),i))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function r(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n===t)return!0;n=c(n)}return!1}function c(t){var e=t.parentNode;return e&&11===e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(),$((function(){$(".js-accordion").accordion()})),$((function(){$("a.btn:not(.no-arrow):not(.btn-red):not(.btn-anchor):not(.btn-xs)").wrapInner("<span></span>")})),$("body").addClass("user-logins-2016"),$(".w-2 section > ul").on("click",(function(t){$(t.target).is("li, a, p")||($(this).toggleClass("active"),function(t,e){var n=0;e.each((function(){var e=$(this).find("h4").outerWidth(!0);$(this).find("a.login").each((function(){n+=$(this).outerWidth(!0)})),n+e+90+t>588&&$(this).addClass("two-lines"),n=0,e=0}))}(45,$(".active > li")))})),$(".w-2, .all-users").on("mouseenter","a.support",(function(){var t,e,n=$(this).position();$(this).parent().hasClass("two-lines")?(t=n.left-60,e=n.top+5):(t=n.left-50,e=n.top+55),$(".hover-support-container").css({left:t,top:e})})),$(".w-2, .all-users").on("mouseleave",".support",(function(){$(".filter").hide().show(0)})),$("#role-select li").on("click",(function(t){var e=$(this),n=$("#action-select"),i=$("ul",n);$("legend",e.closest("fieldset")).text(e.text()).data("id",e.data("id")).data("button-title",e.data("button-title")),$("legend",n).text("Select").removeData("id"),i.empty(),$.each(filterActions,(function(t,n){n.roleId&&n.roleId===e.data("id")&&i.append('<li data-id="'+n.id+'">'+n.label+"</li>")}))})),$("#action-select").on("click","li",(function(t){var e=$(this);$("legend",e.closest("fieldset")).text(e.text()).data("id",e.data("id"))})),$((function(){initMatchHeight()})),$((function(){(isADPcom()||isADPca())&&$("div.resource-listing .card").each((function(){$(this).hasClass("rh2")||($(this).addClass("rh2 patch"),$(this).find(".card-body").prepend($(this).find(".card-type")),$(this).find("div.card-footer").length||$(this).find(".link-arrow").wrap('<div class="card-footer"><div class="card-cta"></div></div>'))})),$(".content-listing .img-align .card img.card-img").wrap('<div class="img-main"></div>'),$(".three-column.index-block .img-align img.img-main").parent("a").wrap('<div class="img-main"></div>'),$("div#c-si-resources").on("newResultsDisplayed",(function(){truncateAbstract(),reloaddate()})),truncateAbstract(),reloaddate(),cardClickable()})),$(window).resize((function(){truncateAbstract()})),$((function(){var t=$("div.js-tab-accordian");if(t.length>0){function e(t,e){t.closest(".r-tabs-nav").find(">.r-tabs-tab > .r-tabs-anchor").each((function(e,n){var i=$(this),r=$(i.attr("href"));i.attr("href")==t.attr("href")?(i.parent().attr("aria-expanded","true").addClass("r-tabs-state-active"),r.addClass("r-tabs-state-active").removeClass("r-tabs-state-default").css("display","block"),r.find(">.slick-slider").each((function(){var t=$(this),e=t.slick("slickCurrentSlide");t.slideCount>1&&t.slick("slickGoTo",0==e?1:0,!0),t.slick("slickGoTo",e,!0)})),r.find(".card-body > .abstract, .card-body > .title + p").ellipsis({lines:3,ellipClass:"ellip",responsive:!0})):(i.parent().attr("aria-expanded","false").removeClass("r-tabs-state-active"),r.removeClass("r-tabs-state-active").addClass("r-tabs-state-default").css("display","none"))}));var n=$(window).width()<768;t.closest(".js-tab-accordian").find(">.r-tabs-accordion-title").each((function(){var e=$(this);e.find(".r-tabs-anchor").attr("href")==t.attr("href")?(e.addClass("r-tabs-state-active"),n?e.attr("aria-expanded","true"):e.attr("aria-expanded","false")):(e.removeClass("r-tabs-state-active"),n&&e.attr("aria-expanded","false"))}))}function n(){var n=window.location.hash,i=$(window).width()<768;n&&""!=n||(i?t.find(">ul .r-tabs-anchor").eq(0).trigger("click"):n=t.find(">ul .r-tabs-anchor").eq(0).attr("href")),n&&""!=n&&e(t.find('>ul .r-tabs-anchor[href="'+n+'"]'))}t.on("tabs-load",(function(t){$(t.target).addClass("tab-loaded"),n()})),t.responsiveTabs({collapsible:"accordion",startCollapsed:"accordion",scrollToAccordion:!1,scrollToAccordionOnLoad:!1,scrollToAccordionOffset:200,setHash:!0,click:function(n){e(t.find('> ul .r-tabs-anchor[href="'+$(n.target).find(".r-tabs-anchor").attr("href")+'"]'),!0)}}),$(window).on("resize",(function(t){n()})),$(window).on("hashchange",(function(t){t.preventDefault(),t.stopPropagation(),n()}))}}));