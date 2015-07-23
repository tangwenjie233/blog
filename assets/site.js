function require(e){var t=require.modules[e];if(!t)throw new Error('failed to require "'+e+'"');if(!("exports"in t)&&typeof t.definition==="function"){t.client=t.component=true;t.definition.call(this,t.exports={},t);delete t.definition}return t.exports}require.loader="component";require.helper={};require.helper.semVerSort=function(e,t){var r=e.version.split(".");var n=t.version.split(".");for(var o=0;o<r.length;++o){var i=parseInt(r[o],10);var a=parseInt(n[o],10);if(i===a){var u=r[o].substr((""+i).length);var c=n[o].substr((""+a).length);if(u===""&&c!=="")return 1;if(u!==""&&c==="")return-1;if(u!==""&&c!=="")return u>c?1:-1;continue}else if(i>a){return 1}else{return-1}}return 0};require.latest=function(e,t){function r(e){throw new Error('failed to find latest module of "'+e+'"')}var n=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var o=/(.*)~(.*)/;if(!o.test(e))r(e);var i=Object.keys(require.modules);var a=[];var u=[];for(var c=0;c<i.length;c++){var l=i[c];if(new RegExp(e+"@").test(l)){var s=l.substr(e.length+1);var f=n.exec(l);if(f!=null){a.push({version:s,name:l})}else{u.push({version:s,name:l})}}}if(a.concat(u).length===0){r(e)}if(a.length>0){var d=a.sort(require.helper.semVerSort).pop().name;if(t===true){return d}return require(d)}var d=u.sort(function(e,t){return e.name>t.name})[0].name;if(t===true){return d}return require(d)};require.modules={};require.register=function(e,t){require.modules[e]={definition:t}};require.define=function(e,t){require.modules[e]={exports:t}};require.register("component~query@0.0.3",function(e,t){function r(e,t){return t.querySelector(e)}e=t.exports=function(e,t){t=t||document;return r(e,t)};e.all=function(e,t){t=t||document;return t.querySelectorAll(e)};e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");r=t.one;e.all=t.all;return e}});require.register("yuehu~google-analytics@master",function(e,t){var r=require("component~query@0.0.3");var n=r('meta[name="google-analytics"]');var o;if(n){o=n.getAttribute("content")}(function(e,t,r,n,i,a,u){e["GoogleAnalyticsObject"]=i;e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)};e[i].l=new Date;a=t.createElement(r);u=t.getElementsByTagName(r)[0];a.async=1;a.src=n;if(o){u.parentNode.insertBefore(a,u)}})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create",o);t.exports=ga});require.register("lepture~social@0.1.0",function(e,t){var r={twitter:"https://twitter.com/intent/tweet?text={text}&url={url}",facebook:"http://www.facebook.com/sharer.php?t={text}&u={url}",weibo:"http://service.weibo.com/share/share.php?title={text}&url={url}"};var n=8003029170;function o(e,t){t=t||{};if(e.getAttribute("data-widget-rendered"))return;e.setAttribute("data-widget-rendered","true");var o=t.prefix||e.getAttribute("data-prefix")||"icon-";var s=t.text||e.getAttribute("data-text");var f=t.url||e.getAttribute("data-url")||location.href;var d=t.image||e.getAttribute("data-image");var p=t.count||e.getAttribute("data-count");n=t.weiboKey||e.getAttribute("data-weibo-key")||n;var v={twitter:t.twitter||e.getAttribute("data-twitter"),facebook:t.facebook||e.getAttribute("data-facebook"),weibo:t.weibo||e.getAttribute("data-weibo")};var m={twitter:c,facebook:u,weibo:l};function h(t){if(!v[t])return;var n=document.createElement("div");n.className="social-button-item social-button-"+t;var u=document.createElement("a");u.className="social-button-icon social-button-icon-"+t+" "+o+t;u.setAttribute("aria-label","Share to "+t);u.setAttribute("title","Share to "+t);u.target="_blank";var c=r[t];var l=s;if(t==="twitter"){c+="&via="+encodeURIComponent(v[t])}else{l=s+" via @"+v[t]}c=c.replace("{text}",encodeURIComponent(l));c=c.replace("{url}",encodeURIComponent(f));if(t==="weibo"&&d){c+="&pic="+encodeURIComponent(d)}u.href=c;u.onclick=function(e){e.preventDefault&&e.preventDefault();window.open(c,"_blank","width=615,height=505")};n.appendChild(u);var h=m[t];if(h&&p){var g=document.createElement("span");n.appendChild(g);g.className="hide";var b=e.getAttribute("data-sameas");b=b?b.split(/\s+/):[];b.push(f);try{a(b,h,function(e){g.innerHTML=i(e);g.className="social-button-count";setTimeout(function(){g.style.marginLeft="-"+Math.floor(g.clientWidth/2)+"px"},300)})}catch(w){n.removeChild(g)}}e.appendChild(n);return n}h("twitter");h("facebook");h("weibo")}t.exports=o;function i(e){var t=e/1e6;if(t>1){return Math.round(t*100)/100+"M"}t=e/1e3;if(t>1){return Math.round(t*100)/100+"K"}return e}function a(e,t,r){var n=e.length;var o=0;var i=0;var a=[];while(i<n&&o<n){t(e[i],function(e){o+=1;a.push(e);if(o===n){var t=0;for(var i=0;i<a.length;i++){t+=a[i]}r(t)}});i+=1}}function u(e,t){var r="https://graph.facebook.com/fql?q=";var n="SELECT share_count FROM link_stat WHERE url = '"+e+"'";d(r+encodeURIComponent(n),function(e){t(e.data[0]["share_count"])})}function c(e,t){var r="https://cdn.api.twitter.com/1/urls/count.json?url=";if(location.protocol==="http:"){r="http://urls.api.twitter.com/1/urls/count.json?url="}d(r+encodeURIComponent(e),function(e){t(e.count)})}function l(e,t){var r="https://api.weibo.com/2/short_url/shorten.json?source=";r+=encodeURIComponent(n)+"&url_long=";r+=encodeURIComponent(e);d(r,function(e){var o=e.data.urls[0].url_short;r="https://api.weibo.com/2/short_url/share/counts.json?source=";r+=encodeURIComponent(n)+"&url_short=";r+=encodeURIComponent(o);d(r,function(e){t(parseInt(e.data.urls[0].share_counts,10))})})}var s={};var f=0;function d(e,t){if(s[e]){return t(s[e])}var r="_social_"+f;var n;if(~e.indexOf("?")){n=e+"&"}else{n=e+"?"}var o=document.createElement("script");o.src=n+"callback="+r;o.async=true;o.defer=true;window[r]=function(r){s[e]=r;t(r)};o.onload=function(){delete window[r]};document.body.appendChild(o);f+=1}});require.register("lepture",function(e,t){require("yuehu~google-analytics@master");var r=require("component~query@0.0.3");var n=r(".social-button");if(n){require("lepture~social@0.1.0")(n)}var o=r.all(".entry-content img");if(o.length){for(var i=0;i<o.length;i++){var a=o[i].getAttribute("data-src");if(a)o[i].src=a}}});require("lepture");