function J(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function K(e,n){return(!n||e!=="hidden")&&e!=="visible"&&e!=="clip"}function B(e,n){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var o=getComputedStyle(e,null);return K(o.overflowY,n)||K(o.overflowX,n)||function(h){var r=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(c){return null}}(h);return!!r&&(r.clientHeight<h.scrollHeight||r.clientWidth<h.scrollWidth)}(e)}return!1}function U(e,n,o,h,r,t,c,s){return t<e&&c>n||t>e&&c<n?0:t<=e&&s<=o||c>=n&&s>=o?t-e-h:c>n&&s<o||t<e&&s>o?c-n+r:0}function F(e,n){var o=window,h=n.scrollMode,r=n.block,t=n.inline,c=n.boundary,s=n.skipOverflowHiddenElements,x=typeof c=="function"?c:function(I){return I!==c};if(!J(e))throw new TypeError("Invalid target");for(var q=document.scrollingElement||document.documentElement,H=[],l=e;J(l)&&x(l);){if((l=l.parentElement)===q){H.push(l);break}l!=null&&l===document.body&&B(l)&&!B(document.documentElement)||l!=null&&B(l,s)&&H.push(l)}for(var p=o.visualViewport?o.visualViewport.width:innerWidth,w=o.visualViewport?o.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),W=m.height,y=m.width,E=m.top,Z=m.right,_=m.bottom,M=m.left,u=r==="start"||r==="nearest"?E:r==="end"?_:E+W/2,d=t==="center"?M+y/2:t==="end"?Z:M,$=[],L=0;L<H.length;L++){var i=H[L],g=i.getBoundingClientRect(),N=g.height,P=g.width,V=g.top,S=g.right,j=g.bottom,C=g.left;if(h==="if-needed"&&E>=0&&M>=0&&_<=w&&Z<=p&&E>=V&&_<=j&&M>=C&&Z<=S)return $;var T=getComputedStyle(i),D=parseInt(T.borderLeftWidth,10),O=parseInt(T.borderTopWidth,10),X=parseInt(T.borderRightWidth,10),Y=parseInt(T.borderBottomWidth,10),a=0,f=0,Q="offsetWidth"in i?i.offsetWidth-i.clientWidth-D-X:0,R="offsetHeight"in i?i.offsetHeight-i.clientHeight-O-Y:0;if(q===i)a=r==="start"?u:r==="end"?u-w:r==="nearest"?U(b,b+w,w,O,Y,b+u,b+u+W,W):u-w/2,f=t==="start"?d:t==="center"?d-p/2:t==="end"?d-p:U(v,v+p,p,D,X,v+d,v+d+y,y),a=Math.max(0,a+b),f=Math.max(0,f+v);else{a=r==="start"?u-V-O:r==="end"?u-j+Y+R:r==="nearest"?U(V,j,N,O,Y+R,u,u+W,W):u-(V+N/2)+R/2,f=t==="start"?d-C-D:t==="center"?d-(C+P/2)+Q/2:t==="end"?d-S+X+Q:U(C,S,P,D,X+Q,d,d+y,y);var z=i.scrollLeft,A=i.scrollTop;u+=A-(a=Math.max(0,Math.min(A+a,i.scrollHeight-N+R))),d+=z-(f=Math.max(0,Math.min(z+f,i.scrollWidth-P+Q)))}$.push({el:i,top:a,left:f})}return $}export{F as c};