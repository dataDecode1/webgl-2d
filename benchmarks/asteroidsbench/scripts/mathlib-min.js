/* Copyright (c) 2011  All Rights Reserved - Kevin Roast http://www.kevs3d.co.uk/ */
var RAD=Math.PI/180;var TWOPI=Math.PI*2;function randomInt(a,b){return Math.floor(Math.random()*(b-a+1)+a)}function calcNormalVector(b,d,f,a,c,e){return new Vector3D((d*e)-(f*c),-((e*b)-(a*f)),(b*c)-(d*a)).norm()}function extend(d,e,c){var b=function(){},a;b.prototype=e.prototype;d.prototype=new b();d.prototype.constructor=d;d.superclass=e.prototype;if(e.prototype.constructor==Object.prototype.constructor){e.prototype.constructor=e}if(c){for(a in c){if(c.hasOwnProperty(a)){d.prototype[a]=c[a]}}}}function isArray(a){return(a.constructor.toString().indexOf("Array")!==-1)}(function(){Vector=function(x,y){this.x=x;this.y=y;return this};Vector.prototype={x:0,y:0,clone:function(){return new Vector(this.x,this.y)},set:function(v){this.x=v.x;this.y=v.y;return this},add:function(v){this.x+=v.x;this.y+=v.y;return this},sub:function(v){this.x-=v.x;this.y-=v.y;return this},dot:function(v){return this.x*v.x+this.y*v.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},distance:function(v){var xx=this.x-v.x;var yy=this.y-v.y;return Math.sqrt(xx*xx+yy*yy)},theta:function(){return Math.atan2(this.y,this.x)},thetaTo:function(vec){var v=this.clone().norm();var w=vec.clone().norm();return Math.acos(v.dot(w))},thetaTo2:function(vec){return Math.atan2(vec.y,vec.x)-Math.atan2(this.y,this.x)},norm:function(){var len=this.length();this.x/=len;this.y/=len;return this},rotate:function(a){var ca=Math.cos(a);var sa=Math.sin(a);with(this){var rx=x*ca-y*sa;var ry=x*sa+y*ca;x=rx;y=ry}return this},invert:function(){this.x=-this.x;this.y=-this.y;return this},scale:function(s){this.x*=s;this.y*=s;return this}}})();(function(){Vector3D=function(a,c,b){this.x=a;this.y=c;this.z=b;return this};Vector3D.prototype={x:0,y:0,z:0,clone:function(){return new Vector3D(this.x,this.y,this.z)},set:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},sub:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},cross:function(a){return new Vector3D(this.y*a.z-this.z*a.y,this.z*a.x-this.x*a.z,this.x*a.y-this.y*a.x)},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},distance:function(b){var c=this.x-b.x;var d=this.y-b.y;var a=this.z-b.z;return Math.sqrt(c*c+d*d+a*a)},thetaTo:function(b){var a=this.y*b.z-this.z*b.y,d=this.z*b.x-this.x*b.z,c=this.x*b.y-this.y*b.x;return Math.atan2(Math.sqrt(a*a+d*d+c*c),this.dot(b))},norm:function(){var a=this.length();this.x/=a;this.y/=a;this.z/=a;return this},scale:function(a){this.x*=a;this.y*=a;this.z*=a;return this}}})();
