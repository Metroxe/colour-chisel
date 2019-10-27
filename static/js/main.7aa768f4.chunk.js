(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,,,function(t,e,n){"use strict";e.__esModule=!0;var o=function(t){this.tokenizer=t};e.default=o},,function(t,e,n){"use strict";var o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,r++)o[r]=i[a];return o},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(33)),a=n(47),s=n(17),u=r(n(48)),c=r(n(49)),l=r(n(19)),p=function(){function t(e){switch(this.discriminator="isColourChisel",a.determineInput(e)){case a.InputType.RGB:this.path=[s.rgbStringToHSL(e)];break;case a.InputType.HSL:this.path=[e];break;case a.InputType.HEX:this.path=[u.default(e)];break;case a.InputType.COLOUR_CHISEL:this.path=e.hsl();break;case a.InputType.CODE:this.path=t.compile(e)[0].hsl();break;case a.InputType.ARRAY:this.path=e.map((function(e){var n=a.determineInput(e);if([a.InputType.ARRAY,a.InputType.CODE].includes(n))throw new Error("Incompatible input in array: "+e);return new t(e).hsl()[0]}));break;default:throw new Error("Invalid input of: "+e)}}return t.prototype.addToPath=function(e){var n=new t(e);return new t(o(this.hsl(),n.hsl()))},t.prototype.analogous=function(t){return void 0===t&&(t=45),this.rotate(t)},t.prototype.compliment=function(){return this.rotate(180)},t.prototype.hex=function(){return this.path.map(l.default)},t.prototype.rgb=function(){return this.path.map(c.default)},t.prototype.hsl=function(){return this.path.map((function(t){return o(t)}))},t.prototype.rotate=function(e){return new t(this.hsl().map((function(t){return[t[0]+e,t[1],t[2]]})))},t.prototype.scale=function(e){return new t(this.hsl().map((function(t){return[t[0],t[1]*e,t[2]]})))},t.prototype.clone=function(){return new t(this.hsl())},t.compile=i.default,t}();e.default=p},,,,function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(15)),s=r(n(40)),u=r(n(16)),c=r(n(41)),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.manipulations=[],e}return o(e,t),e.prototype.parse=function(){var t=this.tokenizer.getNext();this.starter="("===t?new a.default(this.tokenizer):"["===t?new u.default(this.tokenizer):new s.default(this.tokenizer),this.starter.parse();for(var e=this.tokenizer.getNext();">"===e;){this.tokenizer.pop();var n=new c.default(this.tokenizer);n.parse(),this.manipulations.push(n),e=this.tokenizer.getNext()}},e.prototype.typeCheck=function(){this.starter.typeCheck(),this.manipulations.forEach((function(t){return t.typeCheck()}))},e.prototype.evaluate=function(){var t=this.starter.evaluate();return this.manipulations.forEach((function(e){e.setParam(t),t=e.evaluate()})),t},e}(i.default);e.default=l},,,function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(37)),s=r(n(38)),u=r(n(39)),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("(");var t,e=this.tokenizer.getNext();(t="rgb"===e?new s.default(this.tokenizer):"#"===e?new u.default(this.tokenizer):new a.default(this.tokenizer)).parse(),this.child=t,this.tokenizer.checkNextAndPop(")")},e.prototype.typeCheck=function(){this.child.typeCheck()},e.prototype.evaluate=function(){return this.child.evaluate()},e}(i.default);e.default=c},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(12)),s=r(n(8)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.expressions=[],e}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("[");for(var t=!0,e=this.tokenizer.getNext();","===e||!0===t;){var n=new a.default(this.tokenizer);n.parse(),this.expressions.push(n),e=this.tokenizer.getNextAndPop(),t=!1}if("]"!==e)throw new Error("Invalid closing of path.")},e.prototype.typeCheck=function(){this.expressions.forEach((function(t){return t.typeCheck()}))},e.prototype.evaluate=function(){return new s.default(this.expressions.map((function(t){return t.evaluate()})))},e}(i.default);e.default=u},function(t,e,n){"use strict";function o(t){var e=t[0],n=t[1],o=t[2];e/=255,n/=255,o/=255;var r,i,a=Math.max(e,n,o),s=Math.min(e,n,o),u=(a+s)/2;if(a==s)r=i=0;else{var c=a-s;switch(i=u>.5?c/(2-a-s):c/(a+s),a){case e:r=(n-o)/c+(n<o?6:0);break;case n:r=(o-e)/c+2;break;case o:r=(e-n)/c+4}r/=6}return[r,i,u]}e.__esModule=!0,e.rgbStringToHSL=function(t){var e=t.indexOf(",")>-1?",":" ",n=t.substr(4).split(")")[0].split(e),r=[void 0,void 0,void 0];for(var i in n){var a=n[i];r[i]=Math.round(parseInt(a))}return o(r)},e.default=o},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},function(t,e,n){"use strict";function o(t){var e=Math.round(255*t).toString(16);return 1===e.length?"0"+e:e}function r(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}e.__esModule=!0,e.default=function(t){var e,n,i,a=t[0],s=t[1],u=t[2],c=a/360;if(0===s)e=n=i=u;else{var l=u<.5?u*(1+s):u+s-u*s,p=2*u-l;e=r(p,l,c+1/3),n=r(p,l,c),i=r(p,l,c-1/3)}return"#"+o(e)+o(n)+o(i)}},,,,,function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(8));e.default=r.default},,,,function(t,e,n){t.exports=n(60)},,,,,function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(34)),i=o(n(36));e.default=function(t){var e=new r.default(t),n=new i.default(e);return n.parse(),n.typeCheck(),n.evaluate()}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(35)),i=function(){function t(t){this.index=-1,this.symbolTable={},this.code=t,this.tokenize()}return t.prototype.tokenize=function(){var e=this.code;for(e=(e=(e=e.replace(new RegExp("\n","g"),t.sep)).replace(new RegExp(" ","g"),t.sep)).replace(new RegExp("\t","g"),t.sep),r.default.forEach((function(n){var o=n[0],r=n[1];e=e.replace(o,t.sep+r+t.sep)}));e.includes(t.doubleSep);)e=e.replace(new RegExp(t.doubleSep,"g"),t.sep);this.tokens=e.split(t.sep),this.tokens=this.tokens.filter((function(t){return t.length>0}))},t.prototype.pop=function(){this.index++},t.prototype.getNext=function(){if(!(this.index+1>this.tokens.length-1))return this.tokens[this.index+1]},t.prototype.checkNext=function(t){if(t!==this.getNext())throw new Error("'"+this.getNext()+"' is not a valid token for this expression. Should be '"+t+"'.")},t.prototype.getNextAndPop=function(){var t=this.getNext();return this.pop(),t},t.prototype.checkNextAndPop=function(t){this.checkNext(t),this.pop()},t.prototype.declareToSymbolTable=function(t){this.symbolTable[t]=null},t.prototype.defineInSymbolTable=function(t,e){this.existsInSymbolTable(t),this.symbolTable[t]=e},t.prototype.existsInSymbolTable=function(t){if(void 0===this.symbolTable[t])throw new Error("'"+t+"' does not exist in symbolTable.")},t.prototype.getFromSymbolTable=function(t){return this.existsInSymbolTable(t),this.symbolTable[t]},t.prototype.remainingTokens=function(){return this.tokens.length-1-this.index},t.sep="_",t.doubleSep=t.sep+t.sep,t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var o=[[new RegExp("rgb","g"),"rgb"],[new RegExp("translate","g"),"translate"],[new RegExp("scale","g"),"scale"],[new RegExp("rotate","g"),"rotate"],[new RegExp("analogous","g"),"analogous"],[new RegExp("compliment","g"),"compliment"],[new RegExp("export","g"),"export"],[new RegExp("=","g"),"="],[new RegExp(",","g"),","],[new RegExp("\\)","g"),")"],[new RegExp("\\(","g"),"("],[new RegExp("#","g"),"#"],[new RegExp("\\[","g"),"["],[new RegExp("]","g"),"]"],[new RegExp(";","g"),";"],[new RegExp(">","g"),">"]];e.default=o},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(12)),s=r(n(46)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.children=[],e}return o(e,t),e.prototype.parse=function(){for(;this.tokenizer.remainingTokens()>0;){var t=this.tokenizer.getNext(),e=!1,n=void 0;"export"===t&&(e=!0,this.tokenizer.pop(),t=this.tokenizer.getNext()),(n="var"===t?new s.default(this.tokenizer):new a.default(this.tokenizer)).parse(),this.children.push([n,e]),this.tokenizer.checkNextAndPop(";")}},e.prototype.typeCheck=function(){this.children.forEach((function(t){return t[0].typeCheck()}))},e.prototype.evaluate=function(){var t=[];return this.children.forEach((function(e){var n=e[0],o=e[1],r=n.evaluate();o&&t.push(r)})),t},e}(i.default);e.default=u},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(8)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("hsl"),this.tokenizer.checkNextAndPop("("),this.h=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.s=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.l=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(")")},e.prototype.typeCheck=function(){var t=this;[this.h,this.s,this.l].forEach((function(e){if(isNaN(e))throw new Error("'hsl("+t.h+","+t.s+","+t.l+")' is not a valid HSL.")}))},e.prototype.evaluate=function(){return new a.default([parseFloat(this.h),parseFloat(this.s),parseFloat(this.l)])},e}(i.default);e.default=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(8)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("rgb"),this.tokenizer.checkNextAndPop("("),this.r=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.g=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.b=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(")")},e.prototype.typeCheck=function(){var t=this;[this.r,this.g,this.b].forEach((function(e){if(!isNaN(e)&&-1!==e.toString().indexOf("."))throw new Error("'rgb("+t.r+","+t.g+","+t.b+")' is not a valid RGB.")}))},e.prototype.evaluate=function(){return new a.default("rgb("+this.r+","+this.g+","+this.b+")")},e}(i.default);e.default=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(8)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("#"),this.hex=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){e.hexRegExp.test("#"+this.hex)},e.prototype.evaluate=function(){return new a.default("#"+this.hex)},e.hexRegExp=RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"),e}(i.default);e.default=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.name=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){this.tokenizer.existsInSymbolTable(this.name)},e.prototype.evaluate=function(){return this.tokenizer.getFromSymbolTable(this.name).clone()},e}(r(n(6)).default);e.default=i},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(42)),s=r(n(43)),u=r(n(44)),c=r(n(45)),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){var t=this.tokenizer.getNext();if("analogous"===t?this.child=new a.default(this.tokenizer):"compliment"===t?this.child=new s.default(this.tokenizer):"rotate"===t?this.child=new u.default(this.tokenizer):"scale"===t&&(this.child=new c.default(this.tokenizer)),!this.child)throw new Error(t+" is an invalid manipulation command");this.child.parse()},e.prototype.typeCheck=function(){this.child.typeCheck()},e.prototype.evaluate=function(){return this.child.setParam(this.param),this.child.evaluate()},e.prototype.setParam=function(t){this.param=t},e}(i.default);e.default=l},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("analogous"),this.range=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){if(isNaN(this.range))throw new Error("range is not a valid number")},e.prototype.evaluate=function(){var t=parseFloat(this.range);return this.param.analogous(t)},e.prototype.setParam=function(t){this.param=t},e}(r(n(6)).default);e.default=i},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("compliment")},e.prototype.typeCheck=function(){},e.prototype.evaluate=function(){return this.param.compliment()},e.prototype.setParam=function(t){this.param=t},e}(r(n(6)).default);e.default=i},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("rotate"),this.range=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){if(isNaN(this.range))throw new Error("range is not a valid number")},e.prototype.evaluate=function(){var t=parseFloat(this.range);return this.param.rotate(t)},e.prototype.setParam=function(t){this.param=t},e}(r(n(6)).default);e.default=i},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("scale"),this.range=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){if(isNaN(this.range))throw new Error("range is not a valid number")},e.prototype.evaluate=function(){var t=parseFloat(this.range);return this.param.scale(t)},e.prototype.setParam=function(t){this.param=t},e}(r(n(6)).default);e.default=i},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var i=r(n(6)),a=r(n(15)),s=r(n(16)),u=r(n(12)),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("var"),this.name=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop("=");var t=this.tokenizer.getNext();this.starter="("===t?new a.default(this.tokenizer):"["===t?new s.default(this.tokenizer):new u.default(this.tokenizer),this.starter.parse()},e.prototype.typeCheck=function(){this.tokenizer.declareToSymbolTable(this.name)},e.prototype.evaluate=function(){var t=this.starter.evaluate();return this.tokenizer.defineInSymbolTable(this.name,t),t},e}(i.default);e.default=c},function(t,e,n){"use strict";var o;e.__esModule=!0,function(t){t[t.INCOMPATIBLE=0]="INCOMPATIBLE",t[t.RGB=1]="RGB",t[t.HSL=2]="HSL",t[t.HEX=3]="HEX",t[t.COLOUR_CHISEL=4]="COLOUR_CHISEL",t[t.CODE=5]="CODE",t[t.ARRAY=6]="ARRAY"}(o||(o={})),e.InputType=o;var r=RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"),i=/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;e.determineInput=function(t){return void 0===t||null===t?o.INCOMPATIBLE:"string"===typeof t&&r.test(t)?o.HEX:"string"===typeof t&&i.test(t)?o.RGB:Array.isArray(t)&&3===t.length?o.HSL:"isColourChisel"===t.discriminator?o.COLOUR_CHISEL:Array.isArray(t)?o.ARRAY:"string"===typeof t?o.CODE:o.INCOMPATIBLE}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(17)),i=o(n(18));e.default=function(t){return r.default(i.default(t))}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(19)),i=o(n(18));e.default=function(t){return i.default(r.default(t))}},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(10),a=n.n(i),s=n(67),u=n(65),c=n(66),l=n(61),p=n(63),h=n(64),f=n(7),d=n(62),_=n(68),y=n(9),m=n.n(y),g=n(24),v=n.n(g);var k=r.a.memo((function(t){var e=t.inputs,n=(t.style,Object(o.createRef)());return Object(o.useEffect)((function(){var t,o=n.current,r=null;function i(e){var n=Object(f.a)(e,3),i=n[0],a=n[1],s=n[2],u=i*Math.PI/180,c=o.offsetWidth/2,l=a*c,p=l*Math.cos(u)+c,h=-l*Math.sin(u)+c;r.strokeStyle="rgb(255, 255, 255)",r.fillStyle="rgba(0, 0, 0, 0.5)",r.lineWidth="3",r.beginPath(),r.arc(p-3,h+3,6,0,2*Math.PI,!0),r.closePath(),r.fill(),r.stroke(),t&&(r.beginPath(),r.moveTo(p-3,h+3),r.lineTo(t[0]-3,t[1]+3),r.fillStyle="rgba(0, 0, 0, 0.5)",r.strokeStyle="rgba(0, 0, 0, 0.5)",r.stroke()),r.fillText([i,a,s].toString(),p,h-12),t=[p,h]}if(o){var a=o.offsetWidth;if(o.height=a,o.width=a,r=o.getContext("2d")){var s=o.width/2,u=2*Math.PI/360,c=1/s;r.clearRect(0,0,o.width,o.height);for(var l=s,p=s,h=0;h<360;h+=c){var d=h*u,_=s*Math.cos(d),y=s*Math.sin(d);r.strokeStyle="hsl("+h+", 100%, 50%)",r.beginPath(),r.moveTo(s,s),r.lineTo(l+_,p+y),r.stroke()}var m=r.createRadialGradient(l,p,0,l,l,s);m.addColorStop(0,"white"),m.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=m,r.beginPath(),r.arc(l,p,s,0,2*Math.PI,!0),r.closePath(),r.fill(),e.forEach((function(e){t=void 0,e.forEach(i)}))}}})),r.a.createElement("canvas",{ref:n,style:{height:300,width:300}})}),(function(t,e){return JSON.stringify(t)===JSON.stringify(e)})),x=function(t){var e=t.title,n=t.description,i=t.defaultCode,a=t.child,s=Object(o.useState)(""),y=Object(f.a)(s,2),g=y[0],x=y[1],b=Object(o.useState)([]),w=Object(f.a)(b,2),E=w[0],P=w[1],O=Object(o.useState)(),A=Object(f.a)(O,2),N=A[0],z=A[1];function C(t){x(t);try{var e=v.a.compile(t);z(void 0),P(e.map((function(t){return t.hsl()}))),console.log(E)}catch(n){z(n.message),P([])}}return Object(o.useEffect)((function(){i&&C(i)}),[i]),r.a.createElement(l.a,{className:"my-3"},e&&r.a.createElement(d.a,null,r.a.createElement("h3",{className:"h5"},e)),r.a.createElement(p.a,null,n&&r.a.createElement(h.a,null,n),a&&a,r.a.createElement(u.a,null,r.a.createElement(c.a,{className:"my-3 d-flex justify-content-center",md:6,sm:12},r.a.createElement(k,{inputs:E})),r.a.createElement(c.a,{className:"my-3",md:6,sm:12},r.a.createElement(l.a,null,r.a.createElement(m.a,{value:g,onValueChange:C,highlight:function(t){return t},padding:10,style:{fontFamily:"monospace",fontSize:12}}))),N&&r.a.createElement(c.a,{className:"my-3",md:12},r.a.createElement(_.a,{color:"danger"},N)))))},b={title:"Sandbox",description:"Feel free to experiment with the language in the editor."},w={title:"Defining Constants",description:"In Colour Chisel there always needs to be a starting point. You cannot perform an operation or make a path without first giving a colour. In Colour Chisel there are three types of constants: RGB, HSL and Hex. These can be passed into 'expressions' to create points on the colour wheel. In Colour Chisel, you will not see an output unless you specify you want to export.",defaultCode:"export (rgb(100, 50, 50));\nexport (hsl(50, 0.5, 0.5));\nexport (#FFFFFF);"},E={title:"Variables",description:"Variables can also be used to save any expression, constant or path. variables make it easier to use longer manipulations, or make a longer path more readable. Variables can also be exported.",defaultCode:"var A = (rgb(100, 50, 50));\nexport A;"},P={title:"Paths",description:"Paths are how shapes are formed and are a major building block of defining a colour scheme, paths can be used in any expression as with constants and variables. Paths can also be exported.",defaultCode:"export [\n\t(hsl(60, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(120, 0.5, 0.5)),\n\t(hsl(300, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5)),\n\t(hsl(240, 0.5, 0.5))\n];"},O={title:"Rotation & Analogous",description:"Manipulations can be used to transform any point or path into another positions or shape, without losing the relation between the path. The most basic type of manipulation is a rotation, or simply finding the analogous colours to a point/path. You can specify a rotation command or an analogous command to perform an operation with a passed in range.",defaultCode:"var sPath = [\n\t(hsl(60, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(120, 0.5, 0.5)),\n\t(hsl(300, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5)),\n\t(hsl(240, 0.5, 0.5))\n];\nexport sPath > rotate 45;\nexport sPath > analogous -45;"},A={title:"Compliment",description:"A compliment is flipping the side of the colour wheel that you are on, this tends to create very favourable colours that look well and contrast with each other.",defaultCode:"export var primary = (hsl(50, 0.5, 0.5));\nexport primary > compliment;"},N={title:"Scale",description:"Scale allows adjusting the saturation of a colour. This is equivalent to moving inward and outward from the center of the colour wheel.",defaultCode:"var diamond = [\n\t(hsl(0, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(180, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5))\n];\nexport diamond;\nexport diamond > scale 0.5;\nexport diamond > scale 1.5;"},z={title:"Chaining",description:"Multiple manipulations can be chained in a single command.",defaultCode:"var sPath = [\n\t(hsl(60, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(120, 0.5, 0.5)),\n\t(hsl(300, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5)),\n\t(hsl(240, 0.5, 0.5))\n];\nexport sPath > rotate 45 > compliment > scale 1.5 > analogous -45;"},C={title:"Inline Recursion",description:"At any point where a variable, constant or path can be inputed you can also create an expression and recurse down a series of commands.",defaultCode:"var a = (hsl(60, 0.5, 0.5));\nexport [a > compliment, a];"},M=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(c.a,{md:12,className:"my-3"},r.a.createElement(l.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{className:"w-25",src:"/colour_chisel_logo.png",alt:"colour chisel logo"}),r.a.createElement(h.a,null,"Colour Chisel is a language and javascript library for creating shapes and performing geometrical operations on a colour wheel. The library can be compiled from the domain specific language or used as a recursive programmatic javascript language. To install the library simply run..."),r.a.createElement(l.a,null,r.a.createElement(m.a,{value:"npm install --save colour-chisel",onValueChange:function(t){},highlight:function(t){return t},padding:10,style:{fontFamily:"monospace",fontSize:12}})),r.a.createElement(h.a,null,"To Compile the domain specific language, then simply run..."),r.a.createElement(l.a,null,r.a.createElement(m.a,{value:"ColourChisel.compile(/*code*/)",onValueChange:function(t){},highlight:function(t){return t},padding:10,style:{fontFamily:"monospace",fontSize:12}})))))),r.a.createElement(x,w),r.a.createElement(x,E),r.a.createElement(x,P),r.a.createElement(x,O),r.a.createElement(x,A),r.a.createElement(x,N),r.a.createElement(x,z),r.a.createElement(x,C),r.a.createElement(x,b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(59);a.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.7aa768f4.chunk.js.map