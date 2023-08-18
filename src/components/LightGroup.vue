<template>
  <div
    class="beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"
  >
    <h1 class="text-2xl">两个光组组合</h1>
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col items-center space-y-3">
        <div><vue-mathjax formula="$f'_1$"></vue-mathjax>:</div>
        <input class="border-1 rounded" type="text" v-model="formData.f1_hat" />
        <div><vue-mathjax formula="$f'_2$"></vue-mathjax>:</div>
        <input class="border-1 rounded" type="text" v-model="formData.f2_hat" />
        <div><vue-mathjax formula="$L_{H'_1H_2}$"></vue-mathjax>:</div>
        <input class="border-1 rounded" type="text" v-model="formData.l" />
        <div><vue-mathjax formula="$l'_{H_1}$"></vue-mathjax>:</div>
        <input class="border-1 rounded" type="text" v-model="formData.lh1" />
        <div><vue-mathjax formula="$l_{H_2}$"></vue-mathjax>:</div>
        <input class="border-1 rounded" type="text" v-model="formData.lh2" />
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
            <vue-mathjax formula="$d$"></vue-mathjax>:
            {{ calculated.d }}
          </div>
          <div>
            <vue-mathjax formula="$\Delta$"></vue-mathjax>:
            {{ calculated.delta }}
          </div>
          <div>
            <vue-mathjax formula="$f'$"></vue-mathjax>:
            {{ calculated.f_hat }}
          </div>
          <div>
            <vue-mathjax formula="$l'_H$"></vue-mathjax>:
            {{ calculated.lh_hat }}
          </div>
          <div>
            <vue-mathjax formula="$l_H$"></vue-mathjax>:
            {{ calculated.lh }}
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col space-y-2">
        <vue-mathjax
          formula="$$f' = - \frac{f'_1 * f'_2}{\Delta}$$"
        ></vue-mathjax>
        <vue-mathjax formula="$$\Delta = d - f'_1 * f_2$$"></vue-mathjax>
        <vue-mathjax
          formula="$$d = L_{H'_1H_2} - l'_{H_1} + l_{H_2}$$"
        ></vue-mathjax>

        <vue-mathjax formula="$$l'_H = -f' * \frac{d}{f'_1}$$"></vue-mathjax>

        <vue-mathjax formula="$$l_H = -f' * \frac{d}{f_2}$$"></vue-mathjax>
      </div>
    </div>
  </div>
</template>

<script>
// import { convert, calculateZr } from "@/util";
export default {
  name: "BeamCalculator",

  data() {
    return {
      formData: {
        f1_hat: 0,
        f2_hat: 0,
        l: 0,
        lh1: 0,
        lh2: 0,
      },
      calculated: {
        d: 0,
        delta: 0,
        f_hat: 0,
        lh_hat: 0,
        lh: 0,
      },
    };
  },

  methods: {
    handleCalculate() {
      let f1_hat = this.formData.f1_hat;
      let f2_hat = this.formData.f2_hat;
      let l = this.formData.l;
      let lh1 = this.formData.lh1;
      let lh2 = this.formData.lh2;
      let f2 = -f2_hat;

      let d = l - lh1 + lh2;
      let delta = d - f1_hat + f2;
      let f_hat = -(f1_hat * f2_hat) / delta;
      let lh_hat = (-f_hat * d) / f1_hat;
      let lh = -f_hat * d.f2;

      this.calculated.d = d.toFixed(6);
      this.calculated.delta = delta.toFixed(6);
      this.calculated.f_hat = f_hat.toFixed(6);
      this.calculated.lh_hat = lh_hat.toFixed(6);
      this.calculated.lh = lh.toFixed(6);
    },
  },
};
</script>
