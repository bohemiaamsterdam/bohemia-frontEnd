!function t(e,r,n){function s(a,o){if(!r[a]){if(!e[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){var r=e[a][1][t];return s(r?r:t)},c,c.exports,t,e,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)s(n[a]);return s}({1:[function(t,e,r){!function(r,n){"use strict";var s=r.document,i=t("./src/utils/get-by-class"),a=t("./src/utils/extend"),o=t("./src/utils/index-of"),l=t("./src/utils/events"),u=t("./src/utils/to-string"),c=t("./src/utils/natural-sort"),f=t("./src/utils/classes"),d=t("./src/utils/get-attribute"),h=t("./src/utils/to-array"),v=function(e,r,m){var g,p=this,y=t("./src/item")(p),C=t("./src/add-async")(p);g={start:function(){p.listClass="list",p.searchClass="search",p.sortClass="sort",p.page=1e4,p.i=1,p.items=[],p.visibleItems=[],p.matchingItems=[],p.searched=!1,p.filtered=!1,p.searchColumns=n,p.handlers={updated:[]},p.plugins={},p.valueNames=[],p.utils={getByClass:i,extend:a,indexOf:o,events:l,toString:u,naturalSort:c,classes:f,getAttribute:d,toArray:h},p.utils.extend(p,r),p.listContainer="string"==typeof e?s.getElementById(e):e,p.listContainer&&(p.list=i(p.listContainer,p.listClass,!0),p.parse=t("./src/parse")(p),p.templater=t("./src/templater")(p),p.search=t("./src/search")(p),p.filter=t("./src/filter")(p),p.sort=t("./src/sort")(p),this.handlers(),this.items(),p.update(),this.plugins())},handlers:function(){for(var t in p.handlers)p[t]&&p.on(t,p[t])},items:function(){p.parse(p.list),m!==n&&p.add(m)},plugins:function(){for(var t=0;t<p.plugins.length;t++){var e=p.plugins[t];p[e.name]=e,e.init(p,v)}}},this.reIndex=function(){p.items=[],p.visibleItems=[],p.matchingItems=[],p.searched=!1,p.filtered=!1,p.parse(p.list)},this.toJSON=function(){for(var t=[],e=0,r=p.items.length;e<r;e++)t.push(p.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(e)return void C(t,e);var r=[],s=!1;t[0]===n&&(t=[t]);for(var i=0,a=t.length;i<a;i++){var o=null;s=p.items.length>p.page,o=new y(t[i],n,s),p.items.push(o),r.push(o)}return p.update(),r}},this.show=function(t,e){return this.i=t,this.page=e,p.update(),p},this.remove=function(t,e,r){for(var n=0,s=0,i=p.items.length;s<i;s++)p.items[s].values()[t]==e&&(p.templater.remove(p.items[s],r),p.items.splice(s,1),i--,s--,n++);return p.update(),n},this.get=function(t,e){for(var r=[],n=0,s=p.items.length;n<s;n++){var i=p.items[n];i.values()[t]==e&&r.push(i)}return r},this.size=function(){return p.items.length},this.clear=function(){return p.templater.clear(),p.items=[],p},this.on=function(t,e){return p.handlers[t].push(e),p},this.off=function(t,e){var r=p.handlers[t],n=o(r,e);return n>-1&&r.splice(n,1),p},this.trigger=function(t){for(var e=p.handlers[t].length;e--;)p.handlers[t][e](p);return p},this.reset={filter:function(){for(var t=p.items,e=t.length;e--;)t[e].filtered=!1;return p},search:function(){for(var t=p.items,e=t.length;e--;)t[e].found=!1;return p}},this.update=function(){var t=p.items,e=t.length;p.visibleItems=[],p.matchingItems=[],p.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&p.matchingItems.length+1>=p.i&&p.visibleItems.length<p.page?(t[r].show(),p.visibleItems.push(t[r]),p.matchingItems.push(t[r])):t[r].matching()?(p.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return p.trigger("updated"),p},g.start()};"function"==typeof define&&define.amd&&define(function(){return v}),e.exports=v,r.List=v}(window)},{"./src/add-async":2,"./src/filter":3,"./src/item":4,"./src/parse":5,"./src/search":6,"./src/sort":7,"./src/templater":8,"./src/utils/classes":9,"./src/utils/events":10,"./src/utils/extend":11,"./src/utils/get-attribute":12,"./src/utils/get-by-class":13,"./src/utils/index-of":14,"./src/utils/natural-sort":15,"./src/utils/to-array":16,"./src/utils/to-string":17}],2:[function(t,e,r){e.exports=function(t){var e=function(r,n,s){var i=r.splice(0,50);s=s||[],s=s.concat(t.add(i)),r.length>0?setTimeout(function(){e(r,n,s)},1):(t.update(),n(s))};return e}},{}],3:[function(t,e,r){e.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,s=r.length;n<s;n++){var i=r[n];e(i)?i.filtered=!0:i.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},{}],4:[function(t,e,r){e.exports=function(t){return function(e,r,n){var s=this;this._values={},this.found=!1,this.filtered=!1;var i=function(e,r,n){if(void 0===r)n?s.values(e,n):s.values(e);else{s.elm=r;var i=t.templater.get(s,e);s.values(i)}};this.values=function(e,r){if(void 0===e)return s._values;for(var n in e)s._values[n]=e[n];r!==!0&&t.templater.set(s,s.values())},this.show=function(){t.templater.show(s)},this.hide=function(){t.templater.hide(s)},this.matching=function(){return t.filtered&&t.searched&&s.found&&s.filtered||t.filtered&&!t.searched&&s.filtered||!t.filtered&&t.searched&&s.found||!t.filtered&&!t.searched},this.visible=function(){return!(!s.elm||s.elm.parentNode!=t.list)},i(e,r,n)}}},{}],5:[function(t,e,r){e.exports=function(e){var r=t("./item")(e),n=function(t){for(var e=t.childNodes,r=[],n=0,s=e.length;n<s;n++)void 0===e[n].data&&r.push(e[n]);return r},s=function(t,n){for(var s=0,i=t.length;s<i;s++)e.items.push(new r(n,t[s]))},i=function(t,r){s(t.splice(0,50),r),t.length>0?setTimeout(function(){i(t,r)},1):(e.update(),e.trigger("parseComplete"))};return e.handlers.parseComplete=e.handlers.parseComplete||[],function(){var t=n(e.list),r=e.valueNames;e.indexAsync?i(t,r):s(t,r)}}},{"./item":4}],6:[function(t,e,r){e.exports=function(t){var e,r,n,s,i={resetList:function(){t.i=1,t.templater.clear(),s=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?r=t[1]:2==t.length&&"function"==typeof t[1]?(r=void 0,s=t[1]):3==t.length?(r=t[1],s=t[2]):r=void 0},setColumns:function(){0!==t.items.length&&void 0===r&&(r=void 0===t.searchColumns?i.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=t.utils.toString(e).toLowerCase(),e=e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},a={list:function(){for(var e=0,r=t.items.length;e<r;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,n=r.length;e<n;e++)if(a.values(t.values(),r[e]))return void(t.found=!0)},values:function(r,s){return!!(r.hasOwnProperty(s)&&(e=t.utils.toString(r[s]).toLowerCase(),""!==n&&e.search(n)>-1))},reset:function(){t.reset.search(),t.searched=!1}},o=function(e){return t.trigger("searchStart"),i.resetList(),i.setSearchString(e),i.setOptions(arguments),i.setColumns(),""===n?a.reset():(t.searched=!0,s?s(n,r):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",function(e){var r=e.target||e.srcElement;""===r.value&&!t.searched||o(r.value)}),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",function(t){""===(t.target||t.srcElement).value&&o("")}),o}},{}],7:[function(t,e,r){e.exports=function(t){t.sortFunction=t.sortFunction||function(e,r,n){return n.desc="desc"==n.order,t.utils.naturalSort(e.values()[n.valueName],r.values()[n.valueName],n)};var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");r.insensitive="false"!==n},setOrder:function(r){for(var n=0,s=e.els.length;n<s;n++){var i=e.els[n];if(t.utils.getAttribute(i,"data-sort")===r.valueName){var a=t.utils.getAttribute(i,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(i).add(r.order):t.utils.classes(i).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):(r=arguments[1]||r,r.valueName=arguments[0],r.order=r.order||"asc",r.insensitive=void 0===r.insensitive||r.insensitive),e.clear(),e.setOrder(r),r.sortFunction=r.sortFunction||t.sortFunction,t.items.sort(function(t,e){var n="desc"===r.order?-1:1;return r.sortFunction(t,e,r)*n}),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},{}],8:[function(t,e,r){var n=function(t){var e,r=this,n=function(){(e=r.getItemSource(t.item))&&(e=r.clearSourceItem(e,t.valueNames))};this.clearSourceItem=function(e,r){for(var n=0,s=r.length;n<s;n++){var i;if(r[n].data)for(var a=0,o=r[n].data.length;a<o;a++)e.setAttribute("data-"+r[n].data[a],"");else r[n].attr&&r[n].name?(i=t.utils.getByClass(e,r[n].name,!0))&&i.setAttribute(r[n].attr,""):(i=t.utils.getByClass(e,r[n],!0))&&(i.innerHTML="");i=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var r=t.list.childNodes,n=0,s=r.length;n<s;n++)if(void 0===r[n].data)return r[n].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var i=document.createElement("tbody");return i.innerHTML=e,i.firstChild}if(e.indexOf("<")!==-1){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var o=document.getElementById(t.item);if(o)return o}},this.get=function(e,n){r.create(e);for(var s={},i=0,a=n.length;i<a;i++){var o;if(n[i].data)for(var l=0,u=n[i].data.length;l<u;l++)s[n[i].data[l]]=t.utils.getAttribute(e.elm,"data-"+n[i].data[l]);else n[i].attr&&n[i].name?(o=t.utils.getByClass(e.elm,n[i].name,!0),s[n[i].name]=o?t.utils.getAttribute(o,n[i].attr):""):(o=t.utils.getByClass(e.elm,n[i],!0),s[n[i]]=o?o.innerHTML:"");o=void 0}return s},this.set=function(e,n){var s=function(e){for(var r=0,n=t.valueNames.length;r<n;r++)if(t.valueNames[r].data){for(var s=t.valueNames[r].data,i=0,a=s.length;i<a;i++)if(s[i]===e)return{data:e}}else{if(t.valueNames[r].attr&&t.valueNames[r].name&&t.valueNames[r].name==e)return t.valueNames[r];if(t.valueNames[r]===e)return e}},i=function(r,n){var i,a=s(r);a&&(a.data?e.elm.setAttribute("data-"+a.data,n):a.attr&&a.name?(i=t.utils.getByClass(e.elm,a.name,!0))&&i.setAttribute(a.attr,n):(i=t.utils.getByClass(e.elm,a,!0))&&(i.innerHTML=n),i=void 0)};if(!r.create(e))for(var a in n)n.hasOwnProperty(a)&&i(a,n[a])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n=e.cloneNode(!0);return n.removeAttribute("id"),t.elm=n,r.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},n()};e.exports=function(t){return new n(t)}},{}],9:[function(t,e,r){function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var s=t("./index-of"),i=/\s+/,a=Object.prototype.toString;e.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~s(e,t)||e.push(t),this.el.className=e.join(" "),this},n.prototype.remove=function(t){if("[object RegExp]"==a.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),r=s(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},n.prototype.removeMatching=function(t){for(var e=this.array(),r=0;r<e.length;r++)t.test(e[r])&&this.remove(e[r]);return this},n.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),r=e.split(/\s+/);return""===r[0]&&r.shift(),r},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~s(this.array(),t)}},{"./index-of":14}],10:[function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",s=window.removeEventListener?"removeEventListener":"detachEvent",i="addEventListener"!==n?"on":"",a=t("./to-array");r.bind=function(t,e,r,s){t=a(t);for(var o=0;o<t.length;o++)t[o][n](i+e,r,s||!1)},r.unbind=function(t,e,r,n){t=a(t);for(var o=0;o<t.length;o++)t[o][s](i+e,r,n||!1)}},{"./to-array":16}],11:[function(t,e,r){e.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var s in e)t[s]=e[s];return t}},{}],12:[function(t,e,r){e.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,s=n.length,i=0;i<s;i++)void 0!==e[i]&&e[i].nodeName===e&&(r=e[i].nodeValue);return r}},{}],13:[function(t,e,r){e.exports=function(){return document.getElementsByClassName?function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)}:document.querySelector?function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)}:function(t,e,r){var n=[],s="*";null===t&&(t=document);for(var i=t.getElementsByTagName("*"),a=i.length,o=new RegExp("(^|\\s)"+e+"(\\s|$)"),l=0,u=0;l<a;l++)if(o.test(i[l].className)){if(r)return i[l];n[u]=i[l],u++}return n}}()},{}],14:[function(t,e,r){var n=[].indexOf;e.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},{}],15:[function(t,e,r){e.exports=function(t,e,r){var n,s,i=/(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g,a=/^\s+|\s+$/g,o=/\s+/g,l=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,u=/^0x[0-9a-f]+$/i,c=/^0/,f=r||{},d=function(t){return(f.insensitive&&(""+t).toLowerCase()||""+t).replace(a,"")},h=d(t),v=d(e),m=h.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),g=v.replace(i,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),p=parseInt(h.match(u),16)||1!==m.length&&Date.parse(h),y=parseInt(v.match(u),16)||p&&v.match(/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/)&&Date.parse(v)||null,C=function(t,e){return(!t.match(/^0/)||1==e)&&parseFloat(t)||t.replace(/\s+/g," ").replace(a,"")||0};if(y){if(p<y)return-1;if(p>y)return 1}for(var w=0,b=m.length,x=g.length,N=Math.max(b,x);w<N;w++){if(n=C(m[w]||"",b),s=C(g[w]||"",x),isNaN(n)!==isNaN(s))return isNaN(n)?1:-1;if(/[^\x00-\x80]/.test(n+s)&&n.localeCompare){var S=n.localeCompare(s);return S/Math.abs(S)}if(n<s)return-1;if(n>s)return 1}return 0}},{}],16:[function(t,e,r){function n(t){return"[object Array]"===Object.prototype.toString.call(t)}e.exports=function(t){if(void 0===t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(n(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],r=0;r<t.length;r++)(Object.prototype.hasOwnProperty.call(t,r)||r in t)&&e.push(t[r]);return e.length?e:[]}},{}],17:[function(t,e,r){e.exports=function(t){return t=void 0===t?"":t,t=null===t?"":t,t=t.toString()}},{}]},{},[1]);