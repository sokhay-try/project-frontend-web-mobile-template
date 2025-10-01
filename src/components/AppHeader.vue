<template>
  <VanNavBar
    :class="{ 'custom-navbar': true, 'is-transparent': !showLeftArrow ? true : false }"
    :fixed="true"
    :left-arrow="showLeftArrow"
    placeholder
    clickable
    @click-left="onBack"
  >
    <template #title>
      {{ title }}
    </template>
    <template #right>
      <!-- Language switcher -->
      <div class="lang-switcher">
        <div class="flag-container">
          <van-image
            round
            width="20px"
            height="20px"
            :src="currentFlag"
            @click="showLanguagePicker = true"
          />
        </div>
        <div class="divider"></div>
        <van-icon name="close" color="#323233" size="16" @click="onClose" />
      </div>
    </template>
  </VanNavBar>
  <van-popup
    v-model:show="showLanguagePicker"
    position="bottom"
    round
    :style="{ padding: '10% 0' }"
  >
    <!-- <div class="popup-header">Change Language</div> -->
    <div class="popup-header">
      <AppText :type="APP_TEXT_TYPES.header">Change Language</AppText>
    </div>
    <div
      class="lang-options cursor-pointer"
      v-for="lang in languageColumns" :key="lang.value"
      @click="selectLang(lang)"
    >
      <div class="lang-img">
        <van-image
          round
          width="44px"
          height="44px"
          :src="getFlagPath(lang.value)"
        />
      </div>
      <div class="switcher-text">
        <AppText :type="APP_TEXT_TYPES.semiHeaderRegular">{{ lang.text }}</AppText>
        <van-icon v-if="locale === lang.value" name="success" color="#07c160" />
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { rootRouteList } from '@/config/routes'
import { languageColumns, locale, supportedLocales } from '@/utils/i18n';
import { APP_TEXT_TYPES } from './AppText.vue';

export default defineComponent({
  name: 'AppHeader',
  data() {
    return {
      APP_TEXT_TYPES,
      rootRouteList,
      locale,
      showLanguagePicker: false,
      languageValues: [locale.value] as string[],
      languageColumns,
      supportedLocales,
    }
  },
  methods: {
    onBack(): void {
      if (window.history.state.back) {
        history.back()
      } else {
        this.$router.replace('/')
      }
    },
    toggleLang() {
      this.locale = this.locale === supportedLocales.en ? supportedLocales.kh : supportedLocales.en
    },
    onClose() {
      console.log('Close clicked!')
    },
    selectLang(lang: any) {
      this.locale = lang.value as string
      this.showLanguagePicker = false
    },
    getFlagPath(langCode: any): string {
      switch (langCode) {
        case supportedLocales.en:
          return '/images/en-flag.png'
        case supportedLocales.kh:
          return '/images/kh-flag.png'
        default:
          return '/images/en-flag.png'
      }
    },
  },
  computed: {
    title(): string {
      console.log('Current Route Name:', this.$route.name)
      if (this.$route.name) {
        const title = this.$route?.meta.title || ''
        return this.$t(title as string)
      }
      return (this as any).$t('navbar.Undefined')
    },
    showLeftArrow(): boolean {
      if (
        this.$route.name &&
        this.rootRouteList.includes(this.$route.name as string)
      ) {
        return false
      }
      return true
    },
    currentFlag(): string {
      return this.getFlagPath(this.locale)
    },
  },
})
</script>
<style lang="scss" scoped>
.is-transparent :deep(.van-nav-bar__title) {
  margin-left: 0;
  padding: 0 var(--van-padding-md);
}
.is-transparent :deep(.van-nav-bar) {
  background-color: transparent;
}
.is-transparent :deep(.van-hairline--bottom) {
  --van-border-width: 0px;
}
.lang-switcher {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 999px;
  padding: 6px 10px;
  cursor: pointer;
}
.flag-container {
  border: 1.8px solid var(--van-border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
}
.divider {
  width: 1px;
  height: 16px;
  background: #e0e0e0;
  margin: 0 8px;
}
.popup-header {
  text-align: center;
  padding-bottom: var(--van-padding-xl);
  font-size: var(--van-font-size-lg);
}
.lang-options {
  display: flex;
  align-items: center;
  gap: var(--van-padding-sm);
  padding: var(--van-padding-md);
}
.switcher-text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--van-border-color);
  padding-top: var(--van-padding-md);
  padding-bottom: var(--van-padding-md);
}
</style>
