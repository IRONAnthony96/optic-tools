<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 grid-cols-1">
    <div
      class="beam-calculator flex flex-col items-center mt-20 shadow-lg bg-slate-200 pt-10 pb-2 rounded space-y-6"
    >
      <h1 class="text-2xl">高斯光束计算器（1）</h1>
      <div class="flex w-full">
        <div class="w-1/2 flex flex-col items-center space-y-3">
          <div>物距, s（m）:</div>
          <input class="border-1 rounded" type="text" v-model="formData.s" />
          <div>
            束腰半径, <vue-mathjax formula="$w_0$"></vue-mathjax>（mm）:
          </div>
          <input class="border-1 rounded" type="text" v-model="formData.w" />
          <div>波长, <i>λ</i>（nm）:</div>
          <input
            class="border-1 rounded"
            type="text"
            v-model="formData.lambda"
          />
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
          <input
            class="border-1 rounded"
            type="text"
            v-model="otherFormData.f"
          />
          <div><vue-mathjax formula="$M^2$"></vue-mathjax>:</div>
          <input
            class="border-1 rounded"
            type="text"
            v-model="otherFormData.mSquare"
          />
          <div>入射光斑直径，D（mm）:</div>
          <input
            class="border-1 rounded"
            type="text"
            v-model="otherFormData.d"
          />
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
          <div>
            束腰半径, <vue-mathjax formula="$w_0$"></vue-mathjax>（mm）:
          </div>
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
          <vue-mathjax
            formula="$$R(z) =z(1 + (\frac{Z_r}{z})^2)$$"
          ></vue-mathjax>
          <vue-mathjax
            formula="$$\theta_0 =  \frac{\lambda }{\pi w_0}$$"
          ></vue-mathjax>
          <vue-mathjax
            formula="$$BPP = M^2 \frac{\lambda}{\pi}$$"
          ></vue-mathjax>
        </div>
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
      otherFormData: {
        lambda: 632.8,
        mSquare: 1.05,
        d: 1,
        f: 8,
      },
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
      otherCalculated: {
        w: 0,
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
