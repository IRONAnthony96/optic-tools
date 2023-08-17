<template>
  <div
    class="beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"
  >
    <h1 class="text-2xl">高斯光束计算器（1）</h1>
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col items-center space-y-3">
        <div>物距, s（m）:</div>
        <input class="border-1 rounded" type="text" v-model="formData.s" />
        <div>束腰半径, <vue-mathjax formula="$w_0$"></vue-mathjax>（mm）:</div>
        <input class="border-1 rounded" type="text" v-model="formData.w" />
        <div>波长, <i>λ</i>（nm）:</div>
        <input class="border-1 rounded" type="text" v-model="formData.lambda" />
        <div>透镜焦距值, f（mm）:</div>
        <input class="border-1 rounded" type="text" v-model="formData.f" />
        <button
          @click="handleCalculate"
          class="bg-yellow-600 text-black text-md rounded w-20"
        >
          计算
        </button>
        <div
          class="flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"
        >
          <div>
            束腰半径<vue-mathjax formula="$w'_0 $"></vue-mathjax>（mm）:
            {{ calculated.w }}
          </div>
          <div>
            束腰直径<vue-mathjax formula="$w'_0 $"></vue-mathjax>（mm）:
            {{ calculated.timesW }}
          </div>
          <div>
            像距<vue-mathjax formula="$s'$"></vue-mathjax> （m）:
            {{ calculated.s }}
          </div>
          <div>
            瑞利范围 <vue-mathjax formula="$Z_r$"></vue-mathjax> （m）:
            {{ calculated.zr }}
          </div>
          <div>
            发散半角<vue-mathjax formula="$\theta'_0$"></vue-mathjax>
            （弧度）:
            {{ calculated.theta }}
          </div>
          <div>
            发散半角<vue-mathjax formula="$\theta'_0$"></vue-mathjax> （度）:
            {{ calculated.thetaInDegree }}
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col space-y-2">
        <vue-mathjax
          formula="$$Z_r = \frac{\pi w_0^2}{\lambda}$$"
        ></vue-mathjax>
        <vue-mathjax
          formula="$$\frac{s'}{f} = 1 + \frac{\frac{s}{f} - 1}{(1 - \frac{s}{f})^2 + (\frac{Z_r}{f})^2}$$"
        ></vue-mathjax>
        <vue-mathjax
          formula="$$\frac{w'_0}{w_0} = \frac{1}{((1 - \frac{s}{f})^2 + (\frac{Z_r}{f})^2)^\frac{1}{2}}$$"
        ></vue-mathjax>
        <vue-mathjax
          formula="$$\theta'_0 =  \frac{\lambda }{\pi w'_0}$$"
        ></vue-mathjax>
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
      formData: {
        z: 0,
        w: 0.27,
        lambda: 632.8,
        mSquare: 1.05,
        d: 1,
        f: 8,
        s: 0.565,
      },
      calculated: {
        zr: 0,
        s: 0,
        w: 0,
        theta: 0,
        timesW: 0,
        thetaInDegree: 0,
      },
    };
  },

  methods: {
    handleCalculate() {
      let w0 = convert(this.formData.w, 1.0e-3);
      let lambda = convert(this.formData.lambda, 1.0e-9);
      const PI = Math.PI;
      let s = this.formData.s;
      let f = convert(this.formData.f, 1.0e-3);

      let zr = calculateZr(PI, w0, lambda);
      let factor = (s / f - 1) * (s / f - 1) + (zr / f) * (zr / f);
      this.calculated.zr = zr.toFixed(6);
      this.calculated.w = convert(w0 / Math.sqrt(factor), 1e3).toFixed(6);
      this.calculated.s = ((1 + (s / f - 1) / factor) * f).toFixed(6);
      this.calculated.timesW = (this.calculated.w * 2).toFixed(6);

      this.calculated.theta = (
        lambda /
        (PI * convert(this.calculated.w, 1e-3))
      ).toFixed(6);

      this.calculated.thetaInDegree = (
        (this.calculated.theta / Math.PI) *
        180
      ).toFixed(6);
    },
  },
};
</script>
