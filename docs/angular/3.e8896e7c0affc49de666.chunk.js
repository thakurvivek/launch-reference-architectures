webpackJsonp([3],{spIJ:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=r("TToO"),l=r("Xjw4"),t=r("7DMc"),a=r("WT6e"),c=r("bfOx");console.log("`Barrel` component loaded asynchronously");var i=function(){function e(){}return e.prototype.ngOnInit=function(){console.log("hello `Barrel` component")},o.b([Object(a.n)({selector:"barrel",template:'\n    <div class="container">\n      <h1>Hello from Barrel</h1>\n      <span>\n        <a [routerLink]=" [\'./child-barrel\'] ">\n          Child Barrel\n        </a>\n      </span>\n      <router-outlet></router-outlet>\n    </div>\n  '})],e)}(),u=[{path:"",children:[{path:"",component:i},{path:"child-barrel",loadChildren:"./+child-barrel#ChildBarrelModule"}]}];r.d(n,"BarrelModule",function(){return d}),console.log("`Barrel` bundle loaded asynchronously");var d=function(){function e(){}return e.routes=u,o.b([Object(a.I)({declarations:[i],imports:[l.b,t.a,c.e.forChild(u)]})],e)}()}});
//# sourceMappingURL=3.e8896e7c0affc49de666.chunk.js.map