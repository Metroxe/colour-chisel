(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],[,,,,,,,function(t,e,n){"use strict";e.__esModule=!0;var o=function(t){this.tokenizer=t};e.default=o},,,function(t,e,n){"use strict";var o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,r++)o[r]=a[i];return o},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(37)),i=n(51),s=n(23),u=r(n(52)),l=r(n(53)),c=r(n(25)),p=function(){function t(e){switch(this.discriminator="isColourChisel",i.determineInput(e)){case i.InputType.RGB:this.path=[s.rgbStringToHSL(e)];break;case i.InputType.HSL:this.path=[e];break;case i.InputType.HEX:this.path=[u.default(e)];break;case i.InputType.COLOUR_CHISEL:this.path=e.hsl();break;case i.InputType.CODE:this.path=t.compile(e)[0].hsl();break;case i.InputType.ARRAY:this.path=e.map((function(e){var n=i.determineInput(e);if([i.InputType.ARRAY,i.InputType.CODE].includes(n))throw new Error("Incompatible input in array: "+e);return new t(e).hsl()[0]}));break;default:throw new Error("Invalid input of: "+e)}}return t.prototype.addToPath=function(e){var n=new t(e);return new t(o(this.hsl(),n.hsl()))},t.prototype.analogous=function(t){return void 0===t&&(t=45),this.rotate(t)},t.prototype.compliment=function(){return this.rotate(180)},t.prototype.hex=function(){return this.path.map(c.default)},t.prototype.rgb=function(){return this.path.map(l.default)},t.prototype.hsl=function(){return this.path.map((function(t){return o(t)}))},t.prototype.rotate=function(e){return new t(this.hsl().map((function(t){return[t[0]+e,t[1],t[2]]})))},t.prototype.scale=function(e){return new t(this.hsl().map((function(t){return[t[0],t[1]*e,t[2]]})))},t.prototype.clone=function(){return new t(this.hsl())},t.compile=a.default,t}();e.default=p},,,,,,,,function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(21)),s=r(n(44)),u=r(n(22)),l=r(n(45)),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.manipulations=[],e}return o(e,t),e.prototype.parse=function(){var t=this.tokenizer.getNext();this.starter="("===t?new i.default(this.tokenizer):"["===t?new u.default(this.tokenizer):new s.default(this.tokenizer),this.starter.parse();for(var e=this.tokenizer.getNext();">"===e;){this.tokenizer.pop();var n=new l.default(this.tokenizer);n.parse(),this.manipulations.push(n),e=this.tokenizer.getNext()}},e.prototype.typeCheck=function(){this.starter.typeCheck(),this.manipulations.forEach((function(t){return t.typeCheck()}))},e.prototype.evaluate=function(){var t=this.starter.evaluate();return this.manipulations.forEach((function(e){e.setParam(t),t=e.evaluate()})),t},e}(a.default);e.default=c},,,function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(41)),s=r(n(42)),u=r(n(43)),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("(");var t,e=this.tokenizer.getNext();(t="rgb"===e?new s.default(this.tokenizer):"#"===e?new u.default(this.tokenizer):new i.default(this.tokenizer)).parse(),this.child=t,this.tokenizer.checkNextAndPop(")")},e.prototype.typeCheck=function(){this.child.typeCheck()},e.prototype.evaluate=function(){return this.child.evaluate()},e}(a.default);e.default=l},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(18)),s=r(n(10)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.expressions=[],e}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("[");for(var t=!0,e=this.tokenizer.getNext();","===e||!0===t;){var n=new i.default(this.tokenizer);n.parse(),this.expressions.push(n),e=this.tokenizer.getNextAndPop(),t=!1}if("]"!==e)throw new Error("Invalid closing of path.")},e.prototype.typeCheck=function(){this.expressions.forEach((function(t){return t.typeCheck()}))},e.prototype.evaluate=function(){return new s.default(this.expressions.map((function(t){return t.evaluate()})))},e}(a.default);e.default=u},function(t,e,n){"use strict";function o(t){var e=t[0],n=t[1],o=t[2];e/=255,n/=255,o/=255;var r,a,i=Math.max(e,n,o),s=Math.min(e,n,o),u=(i+s)/2;if(i==s)r=a=0;else{var l=i-s;switch(a=u>.5?l/(2-i-s):l/(i+s),i){case e:r=(n-o)/l+(n<o?6:0);break;case n:r=(o-e)/l+2;break;case o:r=(e-n)/l+4}r/=6}return[r,a,u]}e.__esModule=!0,e.rgbStringToHSL=function(t){var e=t.indexOf(",")>-1?",":" ",n=t.substr(4).split(")")[0].split(e),r=[void 0,void 0,void 0];for(var a in n){var i=n[a];r[a]=Math.round(parseInt(i))}return o(r)},e.default=o},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},function(t,e,n){"use strict";function o(t){var e=Math.round(255*t).toString(16);return 1===e.length?"0"+e:e}function r(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}e.__esModule=!0,e.default=function(t){var e,n,a,i=t[0],s=t[1],u=t[2],l=i/360;if(0===s)e=n=a=u;else{var c=u<.5?u*(1+s):u+s-u*s,p=2*u-c;e=r(p,c,l+1/3),n=r(p,c,l),a=r(p,c,l-1/3)}return"#"+o(e)+o(n)+o(a)}},,,,function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(10));e.default=r.default},,,function(t,e,n){t.exports=n(64)},,,,,function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(38)),a=o(n(40));e.default=function(t){var e=new r.default(t),n=new a.default(e);return n.parse(),n.typeCheck(),n.evaluate()}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(39)),a=function(){function t(t){this.index=-1,this.symbolTable={},this.code=t,this.tokenize()}return t.prototype.tokenize=function(){var e=this.code;for(e=(e=(e=e.replace(new RegExp("\n","g"),t.sep)).replace(new RegExp(" ","g"),t.sep)).replace(new RegExp("\t","g"),t.sep),r.default.forEach((function(n){var o=n[0],r=n[1];e=e.replace(o,t.sep+r+t.sep)}));e.includes(t.doubleSep);)e=e.replace(new RegExp(t.doubleSep,"g"),t.sep);this.tokens=e.split(t.sep),this.tokens=this.tokens.filter((function(t){return t.length>0}))},t.prototype.pop=function(){this.index++},t.prototype.getNext=function(){if(!(this.index+1>this.tokens.length-1))return this.tokens[this.index+1]},t.prototype.checkNext=function(t){if(t!==this.getNext())throw new Error("'"+this.getNext()+"' is not a valid token for this expression. Should be '"+t+"'.")},t.prototype.getNextAndPop=function(){var t=this.getNext();return this.pop(),t},t.prototype.checkNextAndPop=function(t){this.checkNext(t),this.pop()},t.prototype.declareToSymbolTable=function(t){this.symbolTable[t]=null},t.prototype.defineInSymbolTable=function(t,e){this.existsInSymbolTable(t),this.symbolTable[t]=e},t.prototype.existsInSymbolTable=function(t){if(void 0===this.symbolTable[t])throw new Error("'"+t+"' does not exist in symbolTable.")},t.prototype.getFromSymbolTable=function(t){return this.existsInSymbolTable(t),this.symbolTable[t]},t.prototype.remainingTokens=function(){return this.tokens.length-1-this.index},t.sep="_",t.doubleSep=t.sep+t.sep,t}();e.default=a},function(t,e,n){"use strict";e.__esModule=!0;var o=[[new RegExp("rgb","g"),"rgb"],[new RegExp("translate","g"),"translate"],[new RegExp("scale","g"),"scale"],[new RegExp("rotate","g"),"rotate"],[new RegExp("analogous","g"),"analogous"],[new RegExp("compliment","g"),"compliment"],[new RegExp("export","g"),"export"],[new RegExp("=","g"),"="],[new RegExp(",","g"),","],[new RegExp("\\)","g"),")"],[new RegExp("\\(","g"),"("],[new RegExp("#","g"),"#"],[new RegExp("\\[","g"),"["],[new RegExp("]","g"),"]"],[new RegExp(";","g"),";"],[new RegExp(">","g"),">"]];e.default=o},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(18)),s=r(n(50)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.children=[],e}return o(e,t),e.prototype.parse=function(){for(;this.tokenizer.remainingTokens()>0;){var t=this.tokenizer.getNext(),e=!1,n=void 0;"export"===t&&(e=!0,this.tokenizer.pop(),t=this.tokenizer.getNext()),(n="var"===t?new s.default(this.tokenizer):new i.default(this.tokenizer)).parse(),this.children.push([n,e]),this.tokenizer.checkNextAndPop(";")}},e.prototype.typeCheck=function(){this.children.forEach((function(t){return t[0].typeCheck()}))},e.prototype.evaluate=function(){var t=[];return this.children.forEach((function(e){var n=e[0],o=e[1],r=n.evaluate();o&&t.push(r)})),t},e}(a.default);e.default=u},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(10)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("hsl"),this.tokenizer.checkNextAndPop("("),this.h=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.s=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.l=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(")")},e.prototype.typeCheck=function(){var t=this;[this.h,this.s,this.l].forEach((function(e){if(isNaN(e))throw new Error("'hsl("+t.h+","+t.s+","+t.l+")' is not a valid HSL.")}))},e.prototype.evaluate=function(){return new i.default([parseFloat(this.h),parseFloat(this.s),parseFloat(this.l)])},e}(a.default);e.default=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(10)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("rgb"),this.tokenizer.checkNextAndPop("("),this.r=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.g=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(","),this.b=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop(")")},e.prototype.typeCheck=function(){var t=this;[this.r,this.g,this.b].forEach((function(e){if(!isNaN(e)&&-1!==e.toString().indexOf("."))throw new Error("'rgb("+t.r+","+t.g+","+t.b+")' is not a valid RGB.")}))},e.prototype.evaluate=function(){return new i.default("rgb("+this.r+","+this.g+","+this.b+")")},e}(a.default);e.default=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(10)),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("#"),this.hex=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){e.hexRegExp.test("#"+this.hex)},e.prototype.evaluate=function(){return new i.default("#"+this.hex)},e.hexRegExp=RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"),e}(a.default);e.default=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.name=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){this.tokenizer.existsInSymbolTable(this.name)},e.prototype.evaluate=function(){return this.tokenizer.getFromSymbolTable(this.name).clone()},e}(r(n(7)).default);e.default=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(46)),s=r(n(47)),u=r(n(48)),l=r(n(49)),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){var t=this.tokenizer.getNext();if("analogous"===t?this.child=new i.default(this.tokenizer):"compliment"===t?this.child=new s.default(this.tokenizer):"rotate"===t?this.child=new u.default(this.tokenizer):"scale"===t&&(this.child=new l.default(this.tokenizer)),!this.child)throw new Error(t+" is an invalid manipulation command");this.child.parse()},e.prototype.typeCheck=function(){this.child.typeCheck()},e.prototype.evaluate=function(){return this.child.setParam(this.param),this.child.evaluate()},e.prototype.setParam=function(t){this.param=t},e}(a.default);e.default=c},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("analogous"),this.range=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){if(isNaN(this.range))throw new Error("range is not a valid number")},e.prototype.evaluate=function(){var t=parseFloat(this.range);return this.param.analogous(t)},e.prototype.setParam=function(t){this.param=t},e}(r(n(7)).default);e.default=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("compliment")},e.prototype.typeCheck=function(){},e.prototype.evaluate=function(){return this.param.compliment()},e.prototype.setParam=function(t){this.param=t},e}(r(n(7)).default);e.default=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("rotate"),this.range=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){if(isNaN(this.range))throw new Error("range is not a valid number")},e.prototype.evaluate=function(){var t=parseFloat(this.range);return this.param.rotate(t)},e.prototype.setParam=function(t){this.param=t},e}(r(n(7)).default);e.default=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("scale"),this.range=this.tokenizer.getNextAndPop()},e.prototype.typeCheck=function(){if(isNaN(this.range))throw new Error("range is not a valid number")},e.prototype.evaluate=function(){var t=parseFloat(this.range);return this.param.scale(t)},e.prototype.setParam=function(t){this.param=t},e}(r(n(7)).default);e.default=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var a=r(n(7)),i=r(n(21)),s=r(n(22)),u=r(n(18)),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.parse=function(){this.tokenizer.checkNextAndPop("var"),this.name=this.tokenizer.getNextAndPop(),this.tokenizer.checkNextAndPop("=");var t=this.tokenizer.getNext();this.starter="("===t?new i.default(this.tokenizer):"["===t?new s.default(this.tokenizer):new u.default(this.tokenizer),this.starter.parse()},e.prototype.typeCheck=function(){this.tokenizer.declareToSymbolTable(this.name)},e.prototype.evaluate=function(){var t=this.starter.evaluate();return this.tokenizer.defineInSymbolTable(this.name,t),t},e}(a.default);e.default=l},function(t,e,n){"use strict";var o;e.__esModule=!0,function(t){t[t.INCOMPATIBLE=0]="INCOMPATIBLE",t[t.RGB=1]="RGB",t[t.HSL=2]="HSL",t[t.HEX=3]="HEX",t[t.COLOUR_CHISEL=4]="COLOUR_CHISEL",t[t.CODE=5]="CODE",t[t.ARRAY=6]="ARRAY"}(o||(o={})),e.InputType=o;var r=RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"),a=/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;e.determineInput=function(t){return void 0===t||null===t?o.INCOMPATIBLE:"string"===typeof t&&r.test(t)?o.HEX:"string"===typeof t&&a.test(t)?o.RGB:Array.isArray(t)&&3===t.length?o.HSL:"isColourChisel"===t.discriminator?o.COLOUR_CHISEL:Array.isArray(t)?o.ARRAY:"string"===typeof t?o.CODE:o.INCOMPATIBLE}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(23)),a=o(n(24));e.default=function(t){return r.default(a.default(t))}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0;var r=o(n(25)),a=o(n(24));e.default=function(t){return a.default(r.default(t))}},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(12),i=n.n(a),s=n(6),u=n(75),l=n(76),c=n(77),p=n(78),h=n(79),f=n(80),d=n(65),m=n(66),y=n(67),g=n(68),_=n(69),v=n(70),b=n(81),k=n(11),w=n.n(k),x=n(29),E=n.n(x);var O=function(t){var e=t.inputs,n=(t.style,Object(o.useState)(Math.random())),a=Object(s.a)(n,2),i=(a[0],a[1],Object(o.createRef)()),u=r.a.useRef();function l(){var t,n=i.current,o=null;function r(e){var r=Object(s.a)(e,3),a=r[0],i=r[1],u=r[2],l=a*Math.PI/180,c=n.offsetWidth/2,p=i*c,h=p*Math.cos(l)+c,f=-p*Math.sin(l)+c;o.strokeStyle="rgb(255, 255, 255)",o.fillStyle="rgba(0, 0, 0, 0.5)",o.lineWidth="3",o.beginPath(),o.arc(h-3,f+3,6,0,2*Math.PI,!0),o.closePath(),o.fill(),o.stroke(),t&&(o.beginPath(),o.moveTo(h-3,f+3),o.lineTo(t[0]-3,t[1]+3),o.fillStyle="rgba(0, 0, 0, 0.5)",o.strokeStyle="rgba(0, 0, 0, 0.5)",o.stroke()),o.fillText([a,i,u].toString(),h,f-12),t=[h,f]}if(n){var a=n.offsetWidth;if(n.height=a,n.width=a,o=n.getContext("2d")){var u=n.width/2,l=2*Math.PI/360,c=1/u;o.clearRect(0,0,n.width,n.height);for(var p=u,h=u,f=0;f<360;f+=c){var d=f*l,m=u*Math.cos(d),y=u*Math.sin(d);o.strokeStyle="hsl("+f+", 100%, 50%)",o.beginPath(),o.moveTo(u,u),o.lineTo(p+m,h+y),o.stroke()}var g=o.createRadialGradient(p,h,0,p,p,u);g.addColorStop(0,"white"),g.addColorStop(1,"rgba(255, 255, 255, 0)"),o.fillStyle=g,o.beginPath(),o.arc(p,h,u,0,2*Math.PI,!0),o.closePath(),o.fill(),e.forEach((function(e){t=void 0,e.forEach(r)}))}}}return Object(o.useEffect)((function(){return u.current=requestAnimationFrame(l),function(){return cancelAnimationFrame(u.current)}}),[JSON.stringify(e)]),i.current||setTimeout((function(){l()}),1e3),r.a.createElement("canvas",{ref:i,style:{height:300,width:300}})},C=function(t){var e=t.title,n=t.description,a=t.defaultCode,i=t.child,u=t.onChangeMarkdown,l=Object(o.useState)(""),c=Object(s.a)(l,2),p=c[0],h=c[1],f=Object(o.useState)([]),k=Object(s.a)(f,2),x=k[0],C=k[1],P=Object(o.useState)(),j=Object(s.a)(P,2),A=j[0],N=j[1];function M(t){h(t);try{var e=E.a.compile(t);N(void 0),C(e.map((function(t){return t.hsl()})))}catch(n){N(n.message),C([])}}return Object(o.useEffect)((function(){a&&M(a)}),[a]),Object(o.useEffect)((function(){var t="";e&&(t+="### ".concat(e,"\n")),n&&(t+="".concat(n,"\n")),t+="```\n"+(p||"not attempted.")+"\n```\n",A&&(t+="**"+A+"**\n"),u&&u(t)}),[p,A,e,n]),r.a.createElement(d.a,{className:"my-3"},e&&r.a.createElement(m.a,null,e),r.a.createElement(y.a,null,n&&r.a.createElement(g.a,null,n),i&&i,r.a.createElement(_.a,null,r.a.createElement(v.a,{className:"my-3 d-flex justify-content-center",md:6,sm:12},r.a.createElement(O,{inputs:x})),r.a.createElement(v.a,{className:"my-3",md:6,sm:12},r.a.createElement(d.a,null,r.a.createElement(w.a,{value:p,onValueChange:M,highlight:function(t){return t},padding:10,style:{fontFamily:"monospace",fontSize:12}}))),A&&r.a.createElement(v.a,{className:"my-3",md:12},r.a.createElement(b.a,{color:"danger"},A)))))},P={title:"Sandbox",description:"Feel free to experiment with the language in the editor."},j={title:"Defining Constants",description:"In Colour Chisel there always needs to be a starting point. You cannot perform an operation or make a path without first giving a colour. In Colour Chisel there are three types of constants: RGB, HSL and Hex. These can be passed into 'expressions' to create points on the colour wheel. In Colour Chisel, you will not see an output unless you specify you want to export.",defaultCode:"export (rgb(100, 50, 50));\nexport (hsl(50, 0.5, 0.5));\nexport (#FFFFFF);"},A={title:"Variables",description:"Variables can also be used to save any expression, constant or path. variables make it easier to use longer manipulations, or make a longer path more readable. Variables can also be exported.",defaultCode:"var A = (rgb(100, 50, 50));\nexport A;"},N={title:"Paths",description:"Paths are how shapes are formed and are a major building block of defining a colour scheme, paths can be used in any expression as with constants and variables. Paths can also be exported.",defaultCode:"export [\n\t(hsl(60, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(120, 0.5, 0.5)),\n\t(hsl(300, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5)),\n\t(hsl(240, 0.5, 0.5))\n];"},M={title:"Rotation & Analogous",description:"Manipulations can be used to transform any point or path into another positions or shape, without losing the relation between the path. The most basic type of manipulation is a rotation, or simply finding the analogous colours to a point/path. You can specify a rotation command or an analogous command to perform an operation with a passed in range.",defaultCode:"var sPath = [\n\t(hsl(60, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(120, 0.5, 0.5)),\n\t(hsl(300, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5)),\n\t(hsl(240, 0.5, 0.5))\n];\nexport sPath > rotate 45;\nexport sPath > analogous -45;"},z={title:"Compliment",description:"A compliment is flipping the side of the colour wheel that you are on, this tends to create very favourable colours that look well and contrast with each other.",defaultCode:"export var primary = (hsl(50, 0.5, 0.5));\nexport primary > compliment;"},S={title:"Scale",description:"Scale allows adjusting the saturation of a colour. This is equivalent to moving inward and outward from the center of the colour wheel.",defaultCode:"var diamond = [\n\t(hsl(0, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(180, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5))\n];\nexport diamond;\nexport diamond > scale 0.5;\nexport diamond > scale 1.5;"},I={title:"Chaining",description:"Multiple manipulations can be chained in a single command.",defaultCode:"var sPath = [\n\t(hsl(60, 0.5, 0.5)),\n\t(hsl(90, 0.5, 0.5)),\n\t(hsl(120, 0.5, 0.5)),\n\t(hsl(300, 0.5, 0.5)),\n\t(hsl(270, 0.5, 0.5)),\n\t(hsl(240, 0.5, 0.5))\n];\nexport sPath > rotate 45 > compliment > scale 1.5 > analogous -45;"},T={title:"Inline Recursion",description:"At any point where a variable, constant or path can be inputed you can also create an expression and recurse down a series of commands.",defaultCode:"var a = (hsl(60, 0.5, 0.5));\nexport [a > compliment, a];"},R=function(){return r.a.createElement(d.a,null,r.a.createElement(y.a,null,r.a.createElement("img",{className:"w-25",src:"/colour-chisel/colour_chisel_logo.png",alt:"colour chisel logo"}),r.a.createElement(g.a,null,"Colour Chisel is a language and javascript library for creating shapes and performing geometrical operations on a colour wheel. The library can be compiled from the domain specific language or used as a recursive programmatic javascript language. To install the library simply run..."),r.a.createElement(d.a,null,r.a.createElement(w.a,{value:"npm install --save colour-chisel",onValueChange:function(t){},highlight:function(t){return t},padding:10,style:{fontFamily:"monospace",fontSize:12}})),r.a.createElement(g.a,null,"To Compile the domain specific language, then simply run..."),r.a.createElement(d.a,null,r.a.createElement(w.a,{value:"ColourChisel.compile(/*code*/)",onValueChange:function(t){},highlight:function(t){return t},padding:10,style:{fontFamily:"monospace",fontSize:12}}))))},D=n(71),F=n(72),L=n(73),H=n(74),U={title:"Exporting the different constants.",description:"Please input and export a blue hex (#0000FF), a red hsl value (hsl(0,0.5,0.5)) and a green rgb (rgb(0,255,0))."},B={title:"Finding compliments",description:"Export your favourite colour and its compliment."},G={title:"Making a path",description:"Make a path consisting of your favourite colour and its compliment."},W={title:"Find the analogous a path",description:"Create a path and find an analogous path that is 45 degrees over. Export both paths."},Y={title:"Scale a path",description:"Create a path and make 2 versions of the path. One version of the path should be larger (closer to edge of the colour wheel), and the other should be smaller (closer to the middle of the path). Export all the paths."},V={title:"Combine 2 paths",description:"Create 2 paths, with no overlapping values. Combine these 2 paths and export the new path."},X={title:"Make the 'S'",description:"Using only a single hex, rgb or hsl value, use transformations to make the S shape (An example of the S shape is on the 'Paths' example on the other page, this used 6 inputs, try and do it with 1 input)."},J={title:"Draw a picture",description:"Can you draw a picture on the colour wheel? Let me see your creativity. This one is for fun."},$=n(31),q=n.n($),K=function(){var t=Object(o.useState)(),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(o.useState)(),u=Object(s.a)(i,2),l=u[0],c=u[1],p=Object(o.useState)(),h=Object(s.a)(p,2),f=h[0],_=h[1],v=Object(o.useState)(),b=Object(s.a)(v,2),k=b[0],w=b[1],x=Object(o.useState)(),E=Object(s.a)(x,2),O=E[0],P=E[1],j=Object(o.useState)(),A=Object(s.a)(j,2),N=A[0],M=A[1],z=Object(o.useState)(),S=Object(s.a)(z,2),I=S[0],T=S[1],R=Object(o.useState)(),$=Object(s.a)(R,2),K=$[0],Q=$[1],Z=Object(o.useState)(),tt=Object(s.a)(Z,2),et=tt[0],nt=tt[1],ot=Object(o.useState)(),rt=Object(s.a)(ot,2),at=rt[0],it=rt[1],st=Object(o.useState)(),ut=Object(s.a)(st,2),lt=ut[0],ct=ut[1],pt=Object(o.useState)(),ht=Object(s.a)(pt,2),ft=ht[0],dt=ht[1],mt=Object(o.useState)(),yt=Object(s.a)(mt,2),gt=yt[0],_t=yt[1],vt=Object(o.useState)(),bt=Object(s.a)(vt,2),kt=bt[0],wt=bt[1],xt=Object(o.useState)(),Et=Object(s.a)(xt,2),Ot=Et[0],Ct=Et[1];function Pt(t){return function(e){t(e.target.value)}}function jt(){q()(function(){var t="# Colour Chisel User Test\n";return t+="## User Information\n",n&&(t+="**Name:** "+n+"\n"),l&&(t+="**Programming Experience:** "+l+"\n"),f&&(t+="**UI/UX Experience:** "+f+"\n"),k&&(t+="**Languages Known:** "+k+"\n"),N&&(t+="**Is the language useful?:** "+N+"\n"),I&&(t+="**what further functionality would you like to see?:** "+I+"\n"),O&&(t+="**Feedback:** "+O+"\n"),t+="## Tests\n",K&&(t+=K+"\n"),et&&(t+=et+"\n"),at&&(t+=at+"\n"),lt&&(t+=lt+"\n"),ft&&(t+=ft+"\n"),gt&&(t+=gt+"\n"),kt&&(t+=kt+"\n"),Ot&&(t+=Ot+"\n"),t}(),"colour_chisel_user_test.md")}return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"my-3"},r.a.createElement(m.a,null,"User Test Instructions"),r.a.createElement(y.a,null,r.a.createElement(g.a,null,"The following is a user test to get an understanding on Colour-Chisel and make improvements for its next iterations. It would appreciated if you take the following test. It will take around 15 minutes to complete. There will be questions and results, the result can then be posted as an issue on ",r.a.createElement("a",{href:"https://github.com/Metroxe/colour-chisel/issues/new"},"Github")," or anonymously to me at ",r.a.createElement("a",{href:"mailto:chrispow96@gmail.com"}," chrispow96@gmail.com"),". To save your results for submission, simply press on the button below to export into markdown, this file can be copy and pasted into a Github issue or emailed to me directly. All information here is optional. You are allowed to refer to the examples or any other sources on the internet."),r.a.createElement(D.a,{color:"primary",onClick:jt},"Compile Results"))),r.a.createElement(d.a,{className:"my-3"},r.a.createElement(m.a,null,"User Information"),r.a.createElement(y.a,null,r.a.createElement(g.a,null,"The following are a handful or preliminary questions, in order to get a better idea of who you are and your experience. All of these are optional, feel free to leave blank if you'd like."),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"name"},"What is your name?"),r.a.createElement(H.a,{type:"text",name:"name",id:"name",placeholder:"e.g. Christopher Powroznik",value:n,onChange:Pt(a)})),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"programming"},"How long have you been programming?"),r.a.createElement(H.a,{type:"text",name:"programming",id:"programming",placeholder:"e.g. 10 years",value:l,onChange:Pt(c)})),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"uiux"},"Do you have any experience with UI/UX design?"),r.a.createElement(H.a,{type:"textarea",name:"uiux",id:"uiux",placeholder:"e.g. Yes, I have developed several apps and made their designs.",value:f,onChange:Pt(_)})),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"languages"},"What programming languages are you comfortable using?"),r.a.createElement(H.a,{type:"text",name:"languages",id:"languages",placeholder:"e.g. Javascript, Java, C, Python",value:k,onChange:Pt(w)})))),r.a.createElement(C,Object.assign({},U,{onChangeMarkdown:Q})),r.a.createElement(C,Object.assign({},B,{onChangeMarkdown:nt})),r.a.createElement(C,Object.assign({},G,{onChangeMarkdown:it})),r.a.createElement(C,Object.assign({},W,{onChangeMarkdown:ct})),r.a.createElement(C,Object.assign({},Y,{onChangeMarkdown:dt})),r.a.createElement(C,Object.assign({},V,{onChangeMarkdown:_t})),r.a.createElement(C,Object.assign({},X,{onChangeMarkdown:wt})),r.a.createElement(C,Object.assign({},J,{onChangeMarkdown:Ct})),r.a.createElement(d.a,{className:"my-3"},r.a.createElement(m.a,null,"Final Remarks"),r.a.createElement(y.a,null,r.a.createElement(g.a,null),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"useful"},"Do you find this language useful or not useful? Why?"),r.a.createElement(H.a,{type:"textarea",name:"useful",id:"useful",placeholder:"e.g. No, I think its overly complicated to define my colour scheme in a domain specific language and then integrate into my work flow.",value:N,onChange:Pt(M)})),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"functionality"},"What further functionality would you like to see?"),r.a.createElement(H.a,{type:"textarea",name:"functionality",id:"functionality",placeholder:"e.g. I would like the ability to have transformations along luminance, not just saturation and hue.",value:I,onChange:Pt(T)})),r.a.createElement(F.a,null,r.a.createElement(L.a,{for:"feedback"},"Do you have any additional feedback?"),r.a.createElement(H.a,{type:"textarea",name:"feedback",id:"feedback",placeholder:"e.g. I think the importing of constants is overly-complicated, why do I need to wrap it in so many brackets, what is this lisp? Also please use 'color' not 'colour', I'm not Canadian.",value:O,onChange:Pt(P)})),r.a.createElement(D.a,{color:"primary",onClick:jt},"Compile Results"))))},Q=function(){var t=Object(o.useState)(0),e=Object(s.a)(t,2),n=e[0],a=e[1];function i(t){return function(){n!==t&&a(t)}}return r.a.createElement(u.a,{className:"py-5"},r.a.createElement(R,null),r.a.createElement(l.a,{tabs:!0,className:"mt-3"},r.a.createElement(c.a,null,r.a.createElement(p.a,{className:0===n?"active":"",onClick:i(0),style:{cursor:"pointer"}},"Examples")),r.a.createElement(c.a,null,r.a.createElement(p.a,{className:1===n?"active":"",onClick:i(1),style:{cursor:"pointer"}},"User Test"))),r.a.createElement(h.a,{activeTab:n},r.a.createElement(f.a,{tabId:0},r.a.createElement(C,j),r.a.createElement(C,A),r.a.createElement(C,N),r.a.createElement(C,M),r.a.createElement(C,z),r.a.createElement(C,S),r.a.createElement(C,I),r.a.createElement(C,T),r.a.createElement(C,P)),r.a.createElement(f.a,{tabId:1},r.a.createElement(K,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(63);i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[32,1,2]]]);
//# sourceMappingURL=main.7aa9ee7c.chunk.js.map