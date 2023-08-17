<template>
  <div
    class="beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"
  >
    <h1 class="text-2xl">高斯光束计算器 （3）</h1>
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col items-center space-y-3">
        <div>轴向距离, z（m）:</div>
        <input
          class="border-1 rounded"
          type="text"
          v-model="anotherFormData.z"
        />
        <div>束腰半径, <vue-mathjax formula="$w_0$"></vue-mathjax>（mm）:</div>
        <input
          class="border-1 rounded"
          type="text"
          v-model="anotherFormData.w"
        />
        <div>波长, <i>λ</i>（nm）:</div>
        <input
          class="border-1 rounded"
          type="text"
          v-model="anotherFormData.lambda"
        />

        <div><vue-mathjax formula="$M^2$"></vue-mathjax>:</div>
        <input
          class="border-1 rounded"
          type="text"
          v-model="anotherFormData.mSquare"
        />

        <button
          @click="handleAnotherCalculate"
          class="bg-yellow-600 text-black text-md rounded w-20"
        >
          计算
        </button>
        <div
          class="flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"
        >
          <div>
            光束半径<vue-mathjax formula="$w(z) $"></vue-mathjax>（mm）:
            {{ anotherCaculated.wz }}
          </div>
          <div>
            曲率半径<vue-mathjax formula="$R(z) $"></vue-mathjax>（mm）:
            {{ anotherCaculated.rz }}
          </div>
          <div>
            瑞利范围 <vue-mathjax formula="$Z_r$"></vue-mathjax> （m）:
            {{ anotherCaculated.zr }}
          </div>
          <div>
            瑞利半径
            <vue-mathjax formula="$w_r(Z_r)$"></vue-mathjax> （mm）:
            {{ anotherCaculated.wr }}
          </div>
          <div>
            发散半角<vue-mathjax formula="$\theta_0$"></vue-mathjax>
            （毫弧度）:
            {{ anotherCaculated.theta }}
          </div>
          <div>
            发散半角<vue-mathjax formula="$\theta_0$"></vue-mathjax> （度）:
            {{ anotherCaculated.thetaInDegree }}
          </div>
          <div>BPP （mm * mrad）: {{ anotherCaculated.bpp }}</div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col space-y-2">
        <vue-mathjax
          formula="$$Z_r = \frac{\pi w_0^2}{\lambda}$$"
        ></vue-mathjax>
        <vue-mathjax
          formula="$$w(z) = w_0 \sqrt{1+(\frac{z}{Z_r})^2}$$"
        ></vue-mathjax>
        <vue-mathjax formula="$$R(z) =z(1 + (\frac{Z_r}{z})^2)$$"></vue-mathjax>
        <vue-mathjax
          formula="$$\theta_0 =  \frac{\lambda }{\pi w_0}$$"
        ></vue-mathjax>
        <vue-mathjax formula="$$BPP = M^2 \frac{\lambda}{\pi}$$"></vue-mathjax>
      </div>
    </div>
  </div>
</template>

<script>
import { convert, calculateZr } from "@/util";
export default {
  name: "BeamCalculator",

  data() {
    return {
      anotherFormData: {
        w: 0.27,
        lambda: 632.8,
        mSquare: 1,
        z: 1.3,
      },
      anotherCaculated: {
        zr: 0,
        wz: 0,
        theta: 0,
        wr: 0,
        rz: 0,
        bpp: 0,
        thetaInDegree: 0,
      },
    };
  },

  methods: {
    handleAnotherCalculate() {
      const PI = Math.PI;
      let lambda = convert(this.anotherFormData.lambda, 1.0e-9);
      let w0 = convert(this.anotherFormData.w, 1e-3);
      let z = this.anotherFormData.z;

      let zr = calculateZr(PI, w0, lambda);
      let wz = w0 * Math.sqrt(1 + Math.pow(z / zr, 2));
      let rz = z * (1 + Math.pow(zr / z, 2));
      let bpp =
        ((this.anotherFormData.mSquare * convert(lambda, 1e3)) / PI) * 1e3;
      let theta = lambda / (PI * w0);
      let wr = Math.sqrt(2) * w0;

      this.anotherCaculated.zr = zr.toFixed(6);
      this.anotherCaculated.wz = convert(wz, 1e3).toFixed(6);
      this.anotherCaculated.rz = convert(rz, 1e3).toFixed(6);
      this.anotherCaculated.wr = convert(wr, 1e3).toFixed(6);
      this.anotherCaculated.bpp = bpp.toFixed(6);
      this.anotherCaculated.theta = convert(theta, 1e3).toFixed(6);
      this.anotherCaculated.thetaInDegree = ((theta / PI) * 180).toFixed(6);
    },
  },
};
</script>
