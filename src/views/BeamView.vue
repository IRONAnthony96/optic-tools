<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 grid-cols-1">
    <beam-calculator />
    <other-beam-calculator />
    <another-beam-calculator />
    <single-lens />
    <light-group />
  </div>
</template>

<script>
import OtherBeamCalculator from "@/components/OtherBeamCalculator.vue";
import BeamCalculator from "@/components/BeamCalculator.vue";
import AnotherBeamCalculator from "@/components/AnotherBeamCalculator.vue";
import SingleLens from "@/components/SingleLens.vue";
import LightGroup from "@/components/LightGroup.vue";
export default {
  components: {
    BeamCalculator,
    AnotherBeamCalculator,
    OtherBeamCalculator,
    SingleLens,
    LightGroup,
  },
  name: "BeamView",

  methods: {},
};
</script>
