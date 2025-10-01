<template>
  <div style="text-align: center; margin-top: 24px;">
    <van-circle
      v-model:current-rate="getRate"
      :stroke-width="90"
      :size="120"
      layer-color="#E0E0E0"
      :color="simpleGradientObject"
    >

      <div class="graph-text">
        <span style="text-align: center; font-weight: 600; font-size: 20px;"> {{ remainingDays }}</span>
        <span style="text-align: center;  font-size: 14px;">Days left</span>
      </div>
    </van-circle> 
  </div>
</template>

<script lang="ts">
import { get } from 'vant/lib/utils';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      totalTenor: 120,
      remainingDays: 60,
      simpleGradientObject: {
        '0%': '#FF8800',
        '100%': '#7C1F1F'
      }
    };
  },
  computed: {
     getRate() {
      const test  = ((this.totalTenor - this.remainingDays) / this.totalTenor) * 100;

      return test
     },
     getCurrentRate() {
      return this.totalTenor - this.remainingDays;
     }
  }
})
</script>

<style scoped>
.graph-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

</style>
