<template>
  <div
    class="beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"
  >
    <h1 class="text-2xl">单透镜</h1>
    <div class="flex w-full flex-1">
      <div class="w-1/2 flex flex-col items-center space-y-3">
        <div class="flex-1 flex flex-col items-center space-y-3">
          <div>折射率, n:</div>
          <input class="border-1 rounded" type="text" v-model="formData.n" />
          <div>透镜光学高度,d</div>
          <input class="border-1 rounded" type="text" v-model="formData.d" />
          <div>
            球面曲率半径,
            <vue-mathjax formula="$r_1$"></vue-mathjax>:
          </div>
          <input class="border-1 rounded" type="text" v-model="formData.r1" />
          <div>
            球面曲率半径,
            <vue-mathjax formula="$r_2$"></vue-mathjax>:
          </div>
          <input class="border-1 rounded" type="text" v-model="formData.r2" />
          <div class="flex flex-col flex-1 justify-end">
            <button
              @click="handleCalculate"
              class="bg-yellow-600 text-black text-md rounded w-20"
            >
              计算
            </button>
          </div>
        </div>
        <div
          class="flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"
        >
          <div>
            像方主面位置<vue-mathjax formula="$l'_H $"></vue-mathjax>:
            {{ calculated.lh_hat }}
          </div>
          <div>
            物方主面位置<vue-mathjax formula="$l_H $"></vue-mathjax>:
            {{ calculated.lh }}
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col space-y-2">
        <vue-mathjax
          formula="$$l'_h = \frac{-dr_2}{n * (r_2 - r_1) + (n - 1) * d}$$"
        ></vue-mathjax>
        <vue-mathjax
          formula="$$l'_h = \frac{-dr_1}{n * (r_2 - r_1) + (n - 1) * d}$$"
        ></vue-mathjax>
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
        n: 0,
        d: 0,
        r1: 0,
        r2: 0,
      },
      calculated: {
        lh_hat: 0,
        lh: 0,
      },
    };
  },

  methods: {
    handleCalculate() {
      let d = this.formData.d;
      let n = this.formData.n;
      let r1 = this.formData.r1;
      let r2 = this.formData.r2;

      let factor = n * (r2 - r1) + (n - 1) * d;
      let lh_hat = (-d * r2) / factor;
      let lh = (-d * r1) / factor;

      this.calculated.lh_hat = lh_hat.toFixed(6);
      this.calculated.lh = lh.toFixed(6);
    },
  },
};
</script>
