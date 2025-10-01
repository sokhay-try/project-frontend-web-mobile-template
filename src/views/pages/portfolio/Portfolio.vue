<template>
  <div class="page-container" style="background-color: #F3F3F3;">
    <AppText :type="APP_TEXT_TYPES.header">Text Header Portfolio</AppText>
    <AppText :type="APP_TEXT_TYPES.semiHeader">Text Semi Header ៛ 1,000,000</AppText>
    <AppText :type="APP_TEXT_TYPES.semiHeaderWhite">Text Semi Header White Fixed Deposit Accounts </AppText>
    <AppText :type="APP_TEXT_TYPES.label">Text Label Riel Amount</AppText>
    <AppText :type="APP_TEXT_TYPES.labelMediumSoftBlack">Text Label Medium Soft Black ABA Bank</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelGray">Text Semi Label Gray abaA3m00000001</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelMediumGray">Text Semi Label Medium Gray 03 Months</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelLightGray">01-Aug-2025 - 01-Nov-2025</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelSlateGray">KHR</AppText>
  </div>
</template>

<script lang="ts">
import { APP_TEXT_TYPES } from '@/components/AppText.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Portfolio',
  data() {
    return {
      APP_TEXT_TYPES
    }
  }
})
</script>
