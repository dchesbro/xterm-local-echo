function t(){return t=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},t.apply(this,arguments)}function i({onlyFirst:t=!1}={}){const i=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(i,t?void 0:"g")}for(var r=function(){function t(t){this.index=0,this.sizeMax=void 0,this.items=[],this.sizeMax=t}var i=t.prototype;return i.getPrev=function(){return this.index=Math.max(0,this.index-1),this.items[this.index]},i.getNext=function(){return this.index=Math.min(this.items.length,this.index+1),this.items[this.index]},i.push=function(t){""!==t.trim()&&(t!==this.items[this.items.length-1]&&(this.items.push(t),this.items.length>this.sizeMax&&this.items.shift()),this.rewind())},i.rewind=function(){this.index=this.items.length},t}(),e="(?:"+["\\|\\|","\\&\\&",";;","\\|\\&","\\<\\(","\\<\\<\\<",">>",">\\&","<\\&","[&;()|<>]"].join("|")+")",n="|&;()<> \\t",s="(\\\\['\""+n+"]|[^\\s'\""+n+"])+",h="",o=0;o<4;o++)h+=(Math.pow(16,8)*Math.random()).toString(16);var a=function(t,i,r){var n=function(t,i,r){var n=new RegExp(["("+e+")","("+s+"|\"((\\\\\"|[^\"])*?)\"|'((\\\\'|[^'])*?)')*"].join("|"),"g"),o=t.match(n).filter(Boolean);if(!o)return[];i||(i={}),r||(r={});var a=!1;return o.map(function(t,n){if(!a){if(RegExp("^"+e+"$").test(t))return{op:t};var s,l=r.escape||"\\",u=!1,c=!1,p="",f=!1;for(s=0;s<t.length;s++){var m=t.charAt(s);if(f=f||!u&&("*"===m||"?"===m),c)p+=m,c=!1;else if(u)m===u?u=!1:p+="'"==u?m:m===l?'"'===(m=t.charAt(s+=1))||m===l||"$"===m?m:l+m:"$"===m?v():m;else if('"'===m||"'"===m)u=m;else{if(RegExp("^"+e+"$").test(m))return{op:t};if(/^#$/.test(m))return a=!0,p.length?[p,{comment:t.slice(s+1)+o.slice(n+1).join(" ")}]:[{comment:t.slice(s+1)+o.slice(n+1).join(" ")}];m===l?c=!0:p+="$"===m?v():m}}return f?{op:"glob",pattern:p}:p}function v(){var r,e,n,o;if("{"===t.charAt(s+=1)){if("}"===t.charAt(s+=1))throw new Error("Bad substitution: "+t.substr(s-2,3));if((r=t.indexOf("}",s))<0)throw new Error("Bad substitution: "+t.substr(s));e=t.substr(s,r-s),s=r}else/[*@#?$!_-]/.test(t.charAt(s))?(e=t.charAt(s),s+=1):(r=t.substr(s).match(/[^\w\d_]/))?(e=t.substr(s,r.index),s+=r.index-1):(e=t.substr(s),s=t.length);return n=e,void 0===(o="function"==typeof i?i(n):i[n])&&""!=n?o="":void 0===o&&(o="$"),"object"==typeof o?""+h+JSON.stringify(o)+h:""+o}}).reduce(function(t,i){return void 0===i?t:t.concat(i)},[])}(t,i,r);return"function"!=typeof i?n:n.reduce(function(t,i){if("object"==typeof i)return t.concat(i);var r=i.split(RegExp("("+h+".*?"+h+")","g"));return t.concat(1===r.length?r[0]:r.filter(Boolean).map(function(t){return RegExp("^"+h).test(t)?JSON.parse(t.split(h)[1]):t}))},[])};function l(t,i,r){for(var e=0,n=0,s=0;s<i;s++)("\n"===t.charAt(s)||++e===r)&&(e=0,n++);return{col:e,row:n}}function u(t){return""===t.trim()||m(t)?"":a(t).pop()||""}function c(t,r){return l(t,t.replace(i(),"").length,r).row+1}function p(t,i){if(t.length>=i[0].length)return t;var r=t;t+=i[0].slice(t.length,t.length+1);for(var e=0;e<i.length;e++){if(!i[e].startsWith(r))return null;if(!i[e].startsWith(t))return r}return p(t,i)}function f(t,i,r){for(var e,n=[],s=/\w+/g;e=s.exec(t);)n.push(e.index);return r?n.reverse().find(function(t){return t<i})||0:n.find(function(t){return t>i})||t.length}function m(t){return null!==t.match(/[^\\][ \t]$/m)}var v=function(){function e(t){var i,e,n;this.terminal=void 0,this.disposables=[],this.active=!1,this.activePrompt=null,this.activePromptChar=null,this.cursor=0,this.incompleteEnabled=void 0,this.input="",this.tabCompleteHandlers=[],this.tabCompleteSize=void 0,this.terminalSize={cols:0,rows:0},this.history=void 0,this.history=new r(null!=(i=null==t?void 0:t.historySize)?i:10),this.incompleteEnabled=null==(e=null==t?void 0:t.incompleteEnabled)||e,this.tabCompleteSize=null!=(n=null==t?void 0:t.tabCompleteSize)?n:10}var n=e.prototype;return n.attach=function(){var t=this;this.terminal&&(this.disposables.push(this.terminal.onData(function(i){return t.handleTermData(i)})),this.disposables.push(this.terminal.onResize(function(i){return t.handleTermResize(i)})),this.terminalSize={cols:this.terminal.cols,rows:this.terminal.rows})},n.detach=function(){this.disposables.forEach(function(t){return t.dispose()}),this.disposables=[]},n.activate=function(t){this.terminal=t,this.attach()},n.dispose=function(){this.detach()},n.read=function(t,i){void 0===t&&(t="$ "),void 0===i&&(i="> ");try{var r=this;return Promise.resolve(new Promise(function(e,n){r.terminal.write(t),r.active=!0,r.activePrompt={ps1:t,ps2:i,resolve:e,reject:n},r.cursor=0,r.input=""}))}catch(t){return Promise.reject(t)}},n.readChar=function(t){try{var i=this;return Promise.resolve(new Promise(function(r,e){i.terminal.write(t),i.activePromptChar={ps1:t,ps2:"",resolve:r,reject:e}}))}catch(t){return Promise.reject(t)}},n.readAbort=function(t){void 0===t&&(t="READINT"),null===this.activePrompt&&null===this.activePromptChar||this.terminal.write("\r\n"),null!==this.activePrompt&&(this.activePrompt.reject(t),this.activePrompt=null),null!==this.activePromptChar&&(this.activePromptChar.reject(t),this.activePromptChar=null),this.active=!1},n.print=function(t){var i=t.replace(/[\r\n]+/g,"\n");this.terminal.write(i.replace(/\n/g,"\r\n"))},n.println=function(t){this.print(t+"\n")},n.printlsInline=function(t,i){if(void 0===i&&(i=3),0!==t.length){for(var r=t.reduce(function(t,i){return Math.max(t,i.length)},0),e="",n=0;n<t.length;n++){var s=t[n].padEnd(r+i," ");e.length+s.length>this.terminalSize.cols&&(this.println(e),e=""),e+=s}this.println(e)}},n.printlsNumber=function(t,i){if(void 0===i&&(i=3),0!==t.length)for(var r=t.length.toString().length,e=0;e<t.length;e++)this.println((""+(e+1)).padEnd(i," ").padStart(r," ")+t[e])},n.addTabCompleteHandler=function(t){this.tabCompleteHandlers.push({callback:t,args:[].slice.call(arguments,1)})},n.removeTabCompleteHandler=function(t){var i=this.tabCompleteHandlers.findIndex(function(i){return i.callback===t});-1!==i&&this.tabCompleteHandlers.splice(i,1)},n.applyPrompt=function(i){var r=t({},{ps1:"",ps2:""},this.activePrompt);return r.ps1+i.replace(/\n/g,"\n"+r.ps2)},n.applyPromptComplete=function(t){var i=this,r=this.cursor;this.setCursor(this.input.length),this.terminal.write("\r\n");var e=function(){i.cursor=r,i.setInput(i.input)},n=t();null==n?e():n.then(e)},n.applyPromptOffset=function(t,r){return this.applyPrompt(t.substring(0,r)).replace(i(),"").length},n.clearInput=function(){for(var t=this.applyPrompt(this.input),i=l(t,this.applyPromptOffset(this.input,t.length),this.terminalSize.cols).row,r=c(t,this.terminalSize.cols),e=r-(i+1),n=0;n<e;n++)this.terminal.write("[E");this.terminal.write("\r[K");for(var s=1;s<r;s++)this.terminal.write("[F[K")},n.handleCursorInsert=function(t){this.cursor+=t.length,this.setInput(this.input.substring(0,this.cursor)+t+this.input.substring(this.cursor))},n.handleCursorMove=function(t){if(t>0){var i=Math.min(t,this.input.length-this.cursor);this.setCursor(this.cursor+i)}else if(t<0){var r=Math.max(t,-1*this.cursor);this.setCursor(this.cursor+r)}},n.handleCursorErase=function(t){t&&this.cursor>0&&(this.cursor-=1),this.setInput(this.input.substring(0,this.cursor)+this.input.substring(this.cursor+1))},n.handleData=function(i){var r=this;if(this.active){var e,n,s,h,o,l=i.charCodeAt(0);if(27==l)switch(i.substring(1)){case"[A":if(this.history){var c=this.history.getPrev();c&&(this.setInput(c),this.setCursor(c.length))}break;case"[B":if(this.history){var v=this.history.getNext()||"";this.setInput(v),this.setCursor(v.length)}break;case"[3~":this.handleCursorErase(!1);break;case"":var d=f(this.input,this.cursor,!0),g=f(this.input,d,!1);this.setInput(this.input.substring(0,d)+this.input.substring(g)),this.setCursor(d)}else if(l<32||127===l)switch(i){case"\r":this.incompleteEnabled?function(t){if(t.trim()){var i;if((t.match(/'/g)||[]).length%2!=0)return!0;if((t.match(/"/g)||[]).length%2!=0)return!0;if(""===(null==(i=t.split(/(\|\||\||&&)/g).pop())?void 0:i.trim()))return!0;if(t.endsWith("\\")&&!t.endsWith("\\\\"))return!0}return!1}(this.input)&&this.handleCursorInsert("\n"):this.handleReadComplete();break;case"":this.handleCursorErase(!0);break;case"\t":if(this.tabCompleteHandlers.length){var b=this.input.substring(0,this.cursor),C=(e=this.tabCompleteHandlers,s=a(n=b),o=s[h=s.length-1]||"",""===n.trim()?(h=0,o=""):m(n)&&(h+=1,o=""),e.reduce(function(t,i){var r=i.callback,e=i.args;try{return t.concat(r.apply(void 0,[h,s].concat(e)))}catch(i){return console.error("Tab complete error:",i),t}},[]).filter(function(t){return t.startsWith(o)}).sort()),w=m(b);if(C.sort(),0===C.length)w||this.handleCursorInsert(" ");else if(1===C.length){var y=u(b);this.handleCursorInsert(C[0].substring(y.length)+" ")}else if(C.length<=this.tabCompleteSize){var P=p(b,C);if(P){var x=u(b);this.handleCursorInsert(P.substring(x.length))}this.applyPromptComplete(function(){r.printlsInline(C)})}else this.applyPromptComplete(function(){return r.readChar("Do you wish to see all "+C.length+" possibilities? (y/n) ").then(function(t){"y"!==t&&"Y"!==t||r.printlsInline(C)})})}else this.handleCursorInsert("    ");break;case"":var z=t({},{ps1:"",ps2:""},this.activePrompt);this.setCursor(this.input.length),this.terminal.write("^C\r\n"+z.ps1),this.cursor=0,this.input="",this.history&&this.history.rewind()}else this.handleCursorInsert(i)}},n.handleReadComplete=function(){this.history&&this.history.push(this.input),this.activePrompt&&(this.activePrompt.resolve(this.input),this.activePrompt=null),this.terminal.write("\r\n"),this.active=!1},n.handleTermData=function(t){var i=this;if(this.active){if(null!==this.activePromptChar)return this.activePromptChar.resolve(t),this.activePromptChar=null,this.terminal.write("\r\n");if(t.length>3&&27!==t.charCodeAt(0)){var r=t.replace(/[\r\n]+/g,"\r");Array.from(r).forEach(function(t){return i.handleData(t)})}else this.handleData(t)}},n.handleTermResize=function(t){this.clearInput(),this.terminalSize=t,this.setInput(this.input,!1)},n.setCursor=function(t){t<0&&(t=0),t>this.input.length&&(t=this.input.length);var i=this.applyPrompt(this.input),r=l(i,this.applyPromptOffset(this.input,this.cursor),this.terminalSize.cols),e=r.col,n=r.row,s=l(i,this.applyPromptOffset(this.input,t),this.terminalSize.cols),h=s.col,o=s.row;if(o>n)for(var a=n;a<o;++a)this.terminal.write("[B");else for(var u=o;u<n;++u)this.terminal.write("[A");if(h>e)for(var c=e;c<h;++c)this.terminal.write("[C");else for(var p=h;p<e;++p)this.terminal.write("[D");this.cursor=t},n.setInput=function(t,i){void 0===i&&(i=!0);try{var r=this;i&&r.clearInput(),r.cursor>t.length&&(r.cursor=t.length);var e=r.applyPromptOffset(t,r.cursor),n=r.applyPrompt(t);r.print(n);var s=l(n,e,r.terminalSize.cols),h=s.col,o=s.row,a=n.substring(e).length;a?e%r.terminalSize.cols+a===r.terminalSize.cols&&r.terminal.write("[E"):0!==o&&0===h&&r.terminal.write("[E");var u=c(n,r.terminalSize.cols)-(o+1);r.terminal.write("\r");for(var p=0;p<u;p++)r.terminal.write("[F");for(var f=0;f<h;f++)r.terminal.write("[C");return r.input=t,Promise.resolve()}catch(t){return Promise.reject(t)}},e}();exports.LocalEchoAddon=v;
//# sourceMappingURL=xterm-addon-local-echo.cjs.map
