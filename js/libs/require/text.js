/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

define(["module"],function(e){var n,r,t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],i=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,o=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,a="undefined"!=typeof location&&location.href,s=a&&location.protocol&&location.protocol.replace(/\:/,""),u=a&&location.hostname,c=a&&(location.port||void 0),f=[],d=e.config&&e.config()||{};return n={version:"2.0.3",strip:function(e){if(e){e=e.replace(i,"");var n=e.match(o);n&&(e=n[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,n,r;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(n=0;3>n;n+=1){r=t[n];try{e=new ActiveXObject(r)}catch(i){}if(e){t=[r];break}}return e},parseName:function(e){var n=!1,r=e.indexOf("."),t=e.substring(0,r),i=e.substring(r+1,e.length);return r=i.indexOf("!"),-1!==r&&(n=i.substring(r+1,i.length),n="strip"===n,i=i.substring(0,r)),{moduleName:t,ext:i,strip:n}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,r,t,i){var o,a,s,u=n.xdRegExp.exec(e);return u?(o=u[2],a=u[3],a=a.split(":"),s=a[1],a=a[0],!(o&&o!==r||a&&a.toLowerCase()!==t.toLowerCase()||(s||a)&&s!==i)):!0},finishLoad:function(e,r,t,i){t=r?n.strip(t):t,d.isBuild&&(f[e]=t),i(t)},load:function(e,r,t,i){if(i.isBuild&&!i.inlineText)return void t();d.isBuild=i.isBuild;var o=n.parseName(e),f=o.moduleName+"."+o.ext,l=r.toUrl(f),p=d.useXhr||n.useXhr;!a||p(l,s,u,c)?n.get(l,function(r){n.finishLoad(e,o.strip,r,t)},function(e){t.error&&t.error(e)}):r([f],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,t)})},write:function(e,r,t){if(f.hasOwnProperty(r)){var i=n.jsEscape(f[r]);t.asModule(e+"!"+r,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,r,t,i,o){var a=n.parseName(r),s=a.moduleName+"."+a.ext,u=t.toUrl(a.moduleName+"."+a.ext)+".js";n.load(s,t,function(){var r=function(e){return i(u,e)};r.asModule=function(e,n){return i.asModule(e,u,n)},n.write(e,s,r,o)},o)}},"node"===d.env||!d.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(r=require.nodeRequire("fs"),n.get=function(e,n){var t=r.readFileSync(e,"utf8");0===t.indexOf("")&&(t=t.substring(1)),n(t)}):"xhr"===d.env||!d.env&&n.createXhr()?n.get=function(e,r,t){var i=n.createXhr();i.open("GET",e,!0),d.onXhr&&d.onXhr(i,e),i.onreadystatechange=function(){var n,o;4===i.readyState&&(n=i.status,n>399&&600>n?(o=new Error(e+" HTTP status: "+n),o.xhr=i,t(o)):r(i.responseText))},i.send(null)}:("rhino"===d.env||!d.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,n){var r,t,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),u="";try{for(r=new java.lang.StringBuffer,t=s.readLine(),t&&t.length()&&65279===t.charAt(0)&&(t=t.substring(1)),r.append(t);null!==(t=s.readLine());)r.append(a),r.append(t);u=String(r.toString())}finally{s.close()}n(u)}),n});