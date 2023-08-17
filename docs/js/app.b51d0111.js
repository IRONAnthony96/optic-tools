(function(){"use strict";var t={1861:function(t,a,e){var r=e(6369),o=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("BeamView")],1)},l=[],s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 grid-cols-1"},[a("beam-calculator"),a("other-beam-calculator"),a("another-beam-calculator"),a("single-lens"),a("light-group")],1)},m=[],n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"},[a("h1",{staticClass:"text-2xl"},[t._v("高斯光束计算器（2）")]),a("div",{staticClass:"flex w-full"},[a("div",{staticClass:"w-1/2 flex flex-col items-center space-y-3"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherFormData.lambda,expression:"otherFormData.lambda"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.otherFormData.lambda},on:{input:function(a){a.target.composing||t.$set(t.otherFormData,"lambda",a.target.value)}}}),a("div",[t._v("透镜焦距值, f（mm）:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherFormData.f,expression:"otherFormData.f"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.otherFormData.f},on:{input:function(a){a.target.composing||t.$set(t.otherFormData,"f",a.target.value)}}}),a("div",[a("vue-mathjax",{attrs:{formula:"$M^2$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherFormData.mSquare,expression:"otherFormData.mSquare"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.otherFormData.mSquare},on:{input:function(a){a.target.composing||t.$set(t.otherFormData,"mSquare",a.target.value)}}}),a("div",[t._v("入射光斑直径，D（mm）:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherFormData.d,expression:"otherFormData.d"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.otherFormData.d},on:{input:function(a){a.target.composing||t.$set(t.otherFormData,"d",a.target.value)}}}),a("button",{staticClass:"bg-yellow-600 text-black text-md rounded w-20",on:{click:t.handleOtherCalculate}},[t._v(" 计算 ")]),a("div",{staticClass:"flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"},[a("div",[t._v(" 束腰半径"),a("vue-mathjax",{attrs:{formula:"$w'_0 $"}}),t._v("（mm）: "+t._s(t.otherCalculated.w)+" ")],1)])]),a("div",{staticClass:"w-1/2 flex flex-col space-y-2"},[a("vue-mathjax",{attrs:{formula:"$$2w'_0 = \\frac{4 \\lambda M^2 f}{\\pi D}$$"}})],1)])])},u=[function(){var t=this,a=t._self._c;return a("div",[t._v("波长, "),a("i",[t._v("λ")]),t._v("（nm）:")])}];function i(t,a){return t*a}function d(t,a,e){return t*a*a/e}var c={name:"BeamCalculator",data(){return{otherFormData:{lambda:632.8,mSquare:1.05,d:1,f:8},otherCalculated:{w:0}}},methods:{handleOtherCalculate(){const t=Math.PI;let a=i(this.otherFormData.d,.001),e=i(this.otherFormData.f,.001),r=i(this.otherFormData.lambda,1e-9),o=this.otherFormData.mSquare;this.otherCalculated.w=i(2*r*o*e/(t*a),1e3).toFixed(6)}}},f=c,v=e(1001),h=(0,v.Z)(f,n,u,!1,null,null,null),p=h.exports,_=function(){var t=this,a=t._self._c;return a("div",{staticClass:"beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"},[a("h1",{staticClass:"text-2xl"},[t._v("高斯光束计算器（1）")]),a("div",{staticClass:"flex w-full"},[a("div",{staticClass:"w-1/2 flex flex-col items-center space-y-3"},[a("div",[t._v("物距, s（m）:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.s,expression:"formData.s"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.s},on:{input:function(a){a.target.composing||t.$set(t.formData,"s",a.target.value)}}}),a("div",[t._v("束腰半径, "),a("vue-mathjax",{attrs:{formula:"$w_0$"}}),t._v("（mm）:")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.w,expression:"formData.w"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.w},on:{input:function(a){a.target.composing||t.$set(t.formData,"w",a.target.value)}}}),t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.lambda,expression:"formData.lambda"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.lambda},on:{input:function(a){a.target.composing||t.$set(t.formData,"lambda",a.target.value)}}}),a("div",[t._v("透镜焦距值, f（mm）:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.f,expression:"formData.f"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.f},on:{input:function(a){a.target.composing||t.$set(t.formData,"f",a.target.value)}}}),a("button",{staticClass:"bg-yellow-600 text-black text-md rounded w-20",on:{click:t.handleCalculate}},[t._v(" 计算 ")]),a("div",{staticClass:"flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"},[a("div",[t._v(" 束腰半径"),a("vue-mathjax",{attrs:{formula:"$w'_0 $"}}),t._v("（mm）: "+t._s(t.calculated.w)+" ")],1),a("div",[t._v(" 束腰直径"),a("vue-mathjax",{attrs:{formula:"$w'_0 $"}}),t._v("（mm）: "+t._s(t.calculated.timesW)+" ")],1),a("div",[t._v(" 像距"),a("vue-mathjax",{attrs:{formula:"$s'$"}}),t._v(" （m）: "+t._s(t.calculated.s)+" ")],1),a("div",[t._v(" 瑞利范围 "),a("vue-mathjax",{attrs:{formula:"$Z_r$"}}),t._v(" （m）: "+t._s(t.calculated.zr)+" ")],1),a("div",[t._v(" 发散半角"),a("vue-mathjax",{attrs:{formula:"$\\theta'_0$"}}),t._v(" （弧度）: "+t._s(t.calculated.theta)+" ")],1),a("div",[t._v(" 发散半角"),a("vue-mathjax",{attrs:{formula:"$\\theta'_0$"}}),t._v(" （度）: "+t._s(t.calculated.thetaInDegree)+" ")],1)])]),a("div",{staticClass:"w-1/2 flex flex-col space-y-2"},[a("vue-mathjax",{attrs:{formula:"$$Z_r = \\frac{\\pi w_0^2}{\\lambda}$$"}}),a("vue-mathjax",{attrs:{formula:"$$\\frac{s'}{f} = 1 + \\frac{\\frac{s}{f} - 1}{(1 - \\frac{s}{f})^2 + (\\frac{Z_r}{f})^2}$$"}}),a("vue-mathjax",{attrs:{formula:"$$\\frac{w'_0}{w_0} = \\frac{1}{((1 - \\frac{s}{f})^2 + (\\frac{Z_r}{f})^2)^\\frac{1}{2}}$$"}}),a("vue-mathjax",{attrs:{formula:"$$\\theta'_0 =  \\frac{\\lambda }{\\pi w'_0}$$"}})],1)])])},x=[function(){var t=this,a=t._self._c;return a("div",[t._v("波长, "),a("i",[t._v("λ")]),t._v("（nm）:")])}],$={name:"BeamCalculator",data(){return{formData:{z:0,w:.27,lambda:632.8,mSquare:1.05,d:1,f:8,s:.565},calculated:{zr:0,s:0,w:0,theta:0,timesW:0,thetaInDegree:0}}},methods:{handleCalculate(){let t=i(this.formData.w,.001),a=i(this.formData.lambda,1e-9);const e=Math.PI;let r=this.formData.s,o=i(this.formData.f,.001),l=d(e,t,a),s=(r/o-1)*(r/o-1)+l/o*(l/o);this.calculated.zr=l.toFixed(6),this.calculated.w=i(t/Math.sqrt(s),1e3).toFixed(6),this.calculated.s=((1+(r/o-1)/s)*o).toFixed(6),this.calculated.timesW=(2*this.calculated.w).toFixed(6),this.calculated.theta=(a/(e*i(this.calculated.w,.001))).toFixed(6),this.calculated.thetaInDegree=(this.calculated.theta/Math.PI*180).toFixed(6)}}},D=$,g=(0,v.Z)(D,_,x,!1,null,null,null),w=g.exports,b=function(){var t=this,a=t._self._c;return a("div",{staticClass:"beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"},[a("h1",{staticClass:"text-2xl"},[t._v("高斯光束计算器 （3）")]),a("div",{staticClass:"flex w-full"},[a("div",{staticClass:"w-1/2 flex flex-col items-center space-y-3"},[a("div",[t._v("轴向距离, z（m）:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.anotherFormData.z,expression:"anotherFormData.z"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.anotherFormData.z},on:{input:function(a){a.target.composing||t.$set(t.anotherFormData,"z",a.target.value)}}}),a("div",[t._v("束腰半径, "),a("vue-mathjax",{attrs:{formula:"$w_0$"}}),t._v("（mm）:")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.anotherFormData.w,expression:"anotherFormData.w"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.anotherFormData.w},on:{input:function(a){a.target.composing||t.$set(t.anotherFormData,"w",a.target.value)}}}),t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.anotherFormData.lambda,expression:"anotherFormData.lambda"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.anotherFormData.lambda},on:{input:function(a){a.target.composing||t.$set(t.anotherFormData,"lambda",a.target.value)}}}),a("div",[a("vue-mathjax",{attrs:{formula:"$M^2$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.anotherFormData.mSquare,expression:"anotherFormData.mSquare"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.anotherFormData.mSquare},on:{input:function(a){a.target.composing||t.$set(t.anotherFormData,"mSquare",a.target.value)}}}),a("button",{staticClass:"bg-yellow-600 text-black text-md rounded w-20",on:{click:t.handleAnotherCalculate}},[t._v(" 计算 ")]),a("div",{staticClass:"flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"},[a("div",[t._v(" 光束半径"),a("vue-mathjax",{attrs:{formula:"$w(z) $"}}),t._v("（mm）: "+t._s(t.anotherCaculated.wz)+" ")],1),a("div",[t._v(" 曲率半径"),a("vue-mathjax",{attrs:{formula:"$R(z) $"}}),t._v("（mm）: "+t._s(t.anotherCaculated.rz)+" ")],1),a("div",[t._v(" 瑞利范围 "),a("vue-mathjax",{attrs:{formula:"$Z_r$"}}),t._v(" （m）: "+t._s(t.anotherCaculated.zr)+" ")],1),a("div",[t._v(" 瑞利半径 "),a("vue-mathjax",{attrs:{formula:"$w_r(Z_r)$"}}),t._v(" （mm）: "+t._s(t.anotherCaculated.wr)+" ")],1),a("div",[t._v(" 发散半角"),a("vue-mathjax",{attrs:{formula:"$\\theta_0$"}}),t._v(" （毫弧度）: "+t._s(t.anotherCaculated.theta)+" ")],1),a("div",[t._v(" 发散半角"),a("vue-mathjax",{attrs:{formula:"$\\theta_0$"}}),t._v(" （度）: "+t._s(t.anotherCaculated.thetaInDegree)+" ")],1),a("div",[t._v("BPP （mm * mrad）: "+t._s(t.anotherCaculated.bpp))])])]),a("div",{staticClass:"w-1/2 flex flex-col space-y-2"},[a("vue-mathjax",{attrs:{formula:"$$Z_r = \\frac{\\pi w_0^2}{\\lambda}$$"}}),a("vue-mathjax",{attrs:{formula:"$$w(z) = w_0 \\sqrt{1+(\\frac{z}{Z_r})^2}$$"}}),a("vue-mathjax",{attrs:{formula:"$$R(z) =z(1 + (\\frac{Z_r}{z})^2)$$"}}),a("vue-mathjax",{attrs:{formula:"$$\\theta_0 =  \\frac{\\lambda }{\\pi w_0}$$"}}),a("vue-mathjax",{attrs:{formula:"$$BPP = M^2 \\frac{\\lambda}{\\pi}$$"}})],1)])])},C=[function(){var t=this,a=t._self._c;return a("div",[t._v("波长, "),a("i",[t._v("λ")]),t._v("（nm）:")])}],F={name:"BeamCalculator",data(){return{anotherFormData:{w:.27,lambda:632.8,mSquare:1,z:1.3},anotherCaculated:{zr:0,wz:0,theta:0,wr:0,rz:0,bpp:0,thetaInDegree:0}}},methods:{handleAnotherCalculate(){const t=Math.PI;let a=i(this.anotherFormData.lambda,1e-9),e=i(this.anotherFormData.w,.001),r=this.anotherFormData.z,o=d(t,e,a),l=e*Math.sqrt(1+Math.pow(r/o,2)),s=r*(1+Math.pow(o/r,2)),m=this.anotherFormData.mSquare*i(a,1e3)/t*1e3,n=a/(t*e),u=Math.sqrt(2)*e;this.anotherCaculated.zr=o.toFixed(6),this.anotherCaculated.wz=i(l,1e3).toFixed(6),this.anotherCaculated.rz=i(s,1e3).toFixed(6),this.anotherCaculated.wr=i(u,1e3).toFixed(6),this.anotherCaculated.bpp=m.toFixed(6),this.anotherCaculated.theta=i(n,1e3).toFixed(6),this.anotherCaculated.thetaInDegree=(n/t*180).toFixed(6)}}},y=F,j=(0,v.Z)(y,b,C,!1,null,null,null),P=j.exports,z=function(){var t=this,a=t._self._c;return a("div",{staticClass:"beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"},[a("h1",{staticClass:"text-2xl"},[t._v("单透镜")]),a("div",{staticClass:"flex w-full flex-1"},[a("div",{staticClass:"w-1/2 flex flex-col items-center space-y-3"},[a("div",{staticClass:"flex-1 flex flex-col items-center space-y-3"},[a("div",[t._v("折射率, n:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.n,expression:"formData.n"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.n},on:{input:function(a){a.target.composing||t.$set(t.formData,"n",a.target.value)}}}),a("div",[t._v("透镜光学高度,d")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.d,expression:"formData.d"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.d},on:{input:function(a){a.target.composing||t.$set(t.formData,"d",a.target.value)}}}),a("div",[t._v(" 球面曲率半径, "),a("vue-mathjax",{attrs:{formula:"$r_1$"}}),t._v(": ")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.r1,expression:"formData.r1"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.r1},on:{input:function(a){a.target.composing||t.$set(t.formData,"r1",a.target.value)}}}),a("div",[t._v(" 球面曲率半径, "),a("vue-mathjax",{attrs:{formula:"$r_2$"}}),t._v(": ")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.r2,expression:"formData.r2"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.r2},on:{input:function(a){a.target.composing||t.$set(t.formData,"r2",a.target.value)}}}),a("div",{staticClass:"flex flex-col flex-1 justify-end"},[a("button",{staticClass:"bg-yellow-600 text-black text-md rounded w-20",on:{click:t.handleCalculate}},[t._v(" 计算 ")])])]),a("div",{staticClass:"flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"},[a("div",[t._v(" 像方主面位置"),a("vue-mathjax",{attrs:{formula:"$l'_H $"}}),t._v(": "+t._s(t.calculated.lh_hat)+" ")],1),a("div",[t._v(" 物方主面位置"),a("vue-mathjax",{attrs:{formula:"$l_H $"}}),t._v(": "+t._s(t.calculated.lh)+" ")],1)])]),a("div",{staticClass:"w-1/2 flex flex-col space-y-2"},[a("vue-mathjax",{attrs:{formula:"$$l'_h = \\frac{-dr_2}{n * (r_2 - r_1) + (n - 1) * d}$$"}}),a("vue-mathjax",{attrs:{formula:"$$l'_h = \\frac{-dr_1}{n * (r_2 - r_1) + (n - 1) * d}$$"}})],1)])])},N=[],Z={name:"BeamCalculator",data(){return{formData:{n:0,d:0,r1:0,r2:0},calculated:{lh_hat:0,lh:0}}},methods:{handleCalculate(){let t=this.formData.d,a=this.formData.n,e=this.formData.r1,r=this.formData.r2,o=a*(r-e)+(a-1)*t,l=-t*r/o,s=-t*e/o;this.calculated.lh_hat=l.toFixed(6),this.calculated.lh=s.toFixed(6)}}},q=Z,k=(0,v.Z)(q,z,N,!1,null,null,null),M=k.exports,O=function(){var t=this,a=t._self._c;return a("div",{staticClass:"beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"},[a("h1",{staticClass:"text-2xl"},[t._v("两个光组组合")]),a("div",{staticClass:"flex w-full"},[a("div",{staticClass:"w-1/2 flex flex-col items-center space-y-3"},[a("div",[a("vue-mathjax",{attrs:{formula:"$f'_1$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.f1_hat,expression:"formData.f1_hat"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.f1_hat},on:{input:function(a){a.target.composing||t.$set(t.formData,"f1_hat",a.target.value)}}}),a("div",[a("vue-mathjax",{attrs:{formula:"$f'_2$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.f2_hat,expression:"formData.f2_hat"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.f2_hat},on:{input:function(a){a.target.composing||t.$set(t.formData,"f2_hat",a.target.value)}}}),a("div",[a("vue-mathjax",{attrs:{formula:"$L$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.l,expression:"formData.l"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.l},on:{input:function(a){a.target.composing||t.$set(t.formData,"l",a.target.value)}}}),a("div",[a("vue-mathjax",{attrs:{formula:"$l'_{H_1}$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.lh1,expression:"formData.lh1"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.lh1},on:{input:function(a){a.target.composing||t.$set(t.formData,"lh1",a.target.value)}}}),a("div",[a("vue-mathjax",{attrs:{formula:"$l_{H_2}$"}}),t._v(":")],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.lh2,expression:"formData.lh2"}],staticClass:"border-1 rounded",attrs:{type:"text"},domProps:{value:t.formData.lh2},on:{input:function(a){a.target.composing||t.$set(t.formData,"lh2",a.target.value)}}}),a("button",{staticClass:"bg-yellow-600 text-black text-md rounded w-20",on:{click:t.handleCalculate}},[t._v(" 计算 ")]),a("div",{staticClass:"flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"},[a("div",[a("vue-mathjax",{attrs:{formula:"$d$"}}),t._v(": "+t._s(t.calculated.d)+" ")],1),a("div",[a("vue-mathjax",{attrs:{formula:"$\\Delta$"}}),t._v(": "+t._s(t.calculated.delta)+" ")],1),a("div",[a("vue-mathjax",{attrs:{formula:"$f'$"}}),t._v(": "+t._s(t.calculated.f_hat)+" ")],1),a("div",[a("vue-mathjax",{attrs:{formula:"$l'_H$"}}),t._v(": "+t._s(t.calculated.lh_hat)+" ")],1),a("div",[a("vue-mathjax",{attrs:{formula:"$l_H$"}}),t._v(": "+t._s(t.calculated.lh)+" ")],1)])]),a("div",{staticClass:"w-1/2 flex flex-col space-y-2"},[a("vue-mathjax",{attrs:{formula:"$$f' = - \\frac{f'_1 * f'_2}{\\Delta}$$"}}),a("vue-mathjax",{attrs:{formula:"$$\\Delta = d - f'_1 * f_2$$"}}),a("vue-mathjax",{attrs:{formula:"$$d = L - l'_{H_1} + l_{H_2}$$"}}),a("vue-mathjax",{attrs:{formula:"$$l'_H = -f' * \\frac{d}{f'_1}$$"}}),a("vue-mathjax",{attrs:{formula:"$$l_H = -f' * \\frac{d}{f_2}$$"}})],1)])])},S=[],B={name:"BeamCalculator",data(){return{formData:{f1_hat:0,f2_hat:0,l:0,lh1:0,lh2:0},calculated:{d:0,delta:0,f_hat:0,lh_hat:0,lh:0}}},methods:{handleCalculate(){let t=this.formData.f1_hat,a=this.formData.f2_hat,e=this.formData.l,r=this.formData.lh1,o=this.formData.lh2,l=-a,s=e-r+o,m=s-t+l,n=-t*a/m,u=-n*s/t,i=-n*s.f2;this.calculated.d=s.toFixed(6),this.calculated.delta=m.toFixed(6),this.calculated.f_hat=n.toFixed(6),this.calculated.lh_hat=u.toFixed(6),this.calculated.lh=i.toFixed(6)}}},H=B,I=(0,v.Z)(H,O,S,!1,null,null,null),A=I.exports,L={components:{BeamCalculator:w,AnotherBeamCalculator:P,OtherBeamCalculator:p,SingleLens:M,LightGroup:A},name:"BeamView",methods:{}},T=L,V=(0,v.Z)(T,s,m,!1,null,null,null),W=V.exports,R={name:"App",components:{BeamView:W}},E=R,G=(0,v.Z)(E,o,l,!1,null,null,null),J=G.exports,K=e(2034),Q=e.n(K);r.ZP.config.productionTip=!1,r.ZP.use(Q()),new r.ZP({render:t=>t(J)}).$mount("#app")}},a={};function e(r){var o=a[r];if(void 0!==o)return o.exports;var l=a[r]={exports:{}};return t[r].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(a,r,o,l){if(!r){var s=1/0;for(i=0;i<t.length;i++){r=t[i][0],o=t[i][1],l=t[i][2];for(var m=!0,n=0;n<r.length;n++)(!1&l||s>=l)&&Object.keys(e.O).every((function(t){return e.O[t](r[n])}))?r.splice(n--,1):(m=!1,l<s&&(s=l));if(m){t.splice(i--,1);var u=o();void 0!==u&&(a=u)}}return a}l=l||0;for(var i=t.length;i>0&&t[i-1][2]>l;i--)t[i]=t[i-1];t[i]=[r,o,l]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,r){var o,l,s=r[0],m=r[1],n=r[2],u=0;if(s.some((function(a){return 0!==t[a]}))){for(o in m)e.o(m,o)&&(e.m[o]=m[o]);if(n)var i=n(e)}for(a&&a(r);u<s.length;u++)l=s[u],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(i)},r=self["webpackChunkoptic_tools"]=self["webpackChunkoptic_tools"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1861)}));r=e.O(r)})();
//# sourceMappingURL=app.b51d0111.js.map