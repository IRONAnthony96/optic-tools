<template>
  <div
    class="beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"
  >
    <h1 class="text-2xl">高斯光束计算器（2）</h1>
    <div class="flex w-full">
      <div class="w-1/2 flex flex-col items-center space-y-3">
        <div>波长, <i>λ</i>（nm）:</div>
        <input
          class="border-1 rounded"
          type="text"
          v-model="otherFormData.lambda"
        />
        <div>透镜焦距值, f（mm）:</div>
        <input class="border-1 rounded" type="text" v-model="otherFormData.f" />
        <div><vue-mathjax formula="$M^2$"></vue-mathjax>:</div>
        <input
          class="border-1 rounded"
          type="text"
          v-model="otherFormData.mSquare"
        />
        <div>入射光斑直径，D（mm）:</div>
        <input class="border-1 rounded" type="text" v-model="otherFormData.d" />
        <button
          @click="handleOtherCalculate"
          class="bg-yellow-600 text-black text-md rounded w-20"
        >
          计算
        </button>
        <div
          class="flex flex-col bg-green-600 w-full items-center space-y-2 mt-4 rounded py-2 h-56"
        >
          <div>
            束腰半径<vue-mathjax formula="$w'_0 $"></vue-mathjax>（mm）:
            {{ otherCalculated.w }}
          </div>
        </div>
      </div>
      <div class="w-1/2 flex flex-col space-y-2">
        <vue-mathjax
          formula="$$2w'_0 = \frac{4 \lambda M^2 f}{\pi D}$$"
        ></vue-mathjax>
      </div>
    </div>
  </div>
</template>

<script>
import { convert } from "@/util";

export default {
  name: "BeamCalculator",

  data() {
    return {
      otherFormData: {
        lambda: 632.8,
        mSquare: 1.05,
        d: 1,
        f: 8,
      },

      otherCalculated: {
        w: 0,
      },
    };
  },

  methods: {
    handleOtherCalculate() {
      const PI = Math.PI;
      let d = convert(this.otherFormData.d, 1e-3);
      let f = convert(this.otherFormData.f, 1.0e-3);
      let lambda = convert(this.otherFormData.lambda, 1.0e-9);
      let mSquare = this.otherFormData.mSquare;
      this.otherCalculated.w = convert(
        (2 * lambda * mSquare * f) / (PI * d),
        1e3
      ).toFixed(6);
    },
  },
};
</script>
