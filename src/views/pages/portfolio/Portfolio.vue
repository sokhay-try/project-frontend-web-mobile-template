<template>
  <!-- <div class="page-container" style="background-color: #F3F3F3;">
    <AppText :type="APP_TEXT_TYPES.header">Text Header Portfolio</AppText>
    <AppText :type="APP_TEXT_TYPES.semiHeader">Text Semi Header ៛ 1,000,000</AppText>
    <AppText :type="APP_TEXT_TYPES.semiHeaderWhite">Text Semi Header White Fixed Deposit Accounts </AppText>
    <AppText :type="APP_TEXT_TYPES.label">Text Label Riel Amount</AppText>
    <AppText :type="APP_TEXT_TYPES.labelMediumSoftBlack">Text Label Medium Soft Black ABA Bank</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelGray">Text Semi Label Gray abaA3m00000001</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelMediumGray">Text Semi Label Medium Gray 03 Months</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelLightGray">01-Aug-2025 - 01-Nov-2025</AppText>
    <AppText :type="APP_TEXT_TYPES.semiLabelSlateGray">KHR</AppText>
  </div> -->

  <van-row :gutter="20" justify="center">
    <van-col class="account-card-container common-card" :span="24">
      <AppText :type="APP_TEXT_TYPES.semiHeaderWhite" class="account-card-title">Fixed Deposit Accounts 5</AppText>
      <van-col class="common-card account-card" :span="24">
        <van-row style="padding: 16px;">
          <van-col :span="12">
            <AppText :type="APP_TEXT_TYPES.labelMediumSoftBlack">Riel Amount</AppText>
          </van-col>
          <van-col :span="12" style="text-align: right;">
            <AppText :type="APP_TEXT_TYPES.labelMediumSoftBlack">Usd Amount</AppText>
          </van-col>
        </van-row>
        
        <van-row style="padding: 16px; padding-top: 0px !important;">
          <van-col :span="12">
            <AppText :type="APP_TEXT_TYPES.semiHeader">៛ 1,000,000</AppText>
          </van-col>
          <van-col :span="12" style="text-align: right;">
            <AppText :type="APP_TEXT_TYPES.semiHeader">៛ 250 000.00</AppText>
          </van-col>
          <van-col :span="24" style="text-align: right;">
            <div class="balance-bar-container">
              <div 
                class="balance-segment riel-segment" 
                :style="{ width: rielPercentage }"
              ></div>
              
              <div 
                class="balance-segment usd-segment" 
                :style="{ width: usdPercentage }"
              ></div>
            </div>
          </van-col>
        </van-row>
        
      </van-col>
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { APP_TEXT_TYPES } from '@/components/AppText.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Portfolio',
  data() {
    return {
      APP_TEXT_TYPES,
      rielPercentage: '65%',
      usdPercentage: '35%',
      
    }
  }
})
</script>

<style scoped>
.common-card {
  border-radius: 16px;
}
.account-card-container {
  background-color: #0D5F5A;
  min-height: 126px;
}
.account-card {
  background-color: #ffffff;
  margin: 6px;
  border-radius: 12px;
}
.account-card-title {
  padding: 8px 16px;
}
.balance-bar-container {
  display: flex;
  height: 12px; 
  border-radius: 6px; 
  overflow: hidden; 
  margin: 10px 0;
}

.balance-segment {
  height: 100%;
  transition: width 0.5s ease; 
}

.riel-segment {
  background-color: #A90000; 
  border-radius: 6px;
}

.usd-segment {
  background-color: #FF8800; 
  border-radius: 6px; 
}
</style>