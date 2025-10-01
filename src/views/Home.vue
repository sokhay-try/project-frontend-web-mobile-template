<template>
  <van-cell-group :title="$t('home.settings')" :border="false" :inset="true">
    <van-cell center :title="$t('home.darkMode')">
      <template #right-icon>
        <van-switch
          v-model="checked"
          size="20px"
          aria-label="on/off Dark Mode"
        />
      </template>
    </van-cell>

    <van-cell
      is-link
      :title="$t('home.language')"
      :value="language"
      @click="showLanguagePicker = true"
    />
  </van-cell-group>

  <van-cell-group :title="$t('home.examples')" :border="false" :inset="true">
    <template v-for="item in menuItems" :key="item.route">
      <van-cell :title="item.title" :to="item.route" is-link />
    </template>
  </van-cell-group>

  <van-popup v-model:show="showLanguagePicker" position="bottom">
    <van-picker
      v-model="languageValues"
      :columns="languageColumns"
      @confirm="onLanguageConfirm"
      @cancel="showLanguagePicker = false"
    />
  </van-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isDark, toggleDark } from '@/composables/dark'
import { languageColumns, locale } from '@/utils/i18n'
import type { PickerColumn } from 'vant'

export default defineComponent({
  data() {
    return {
      showLanguagePicker: false,
      languageValues: [locale.value] as string[],
      locale,
      languageColumns,
    }
  },
  methods: {
    onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
      if (event.selectedOptions.length > 0) {
        if(event.selectedOptions[0]){
          this.locale = event.selectedOptions[0].value as string
          this.showLanguagePicker = false
        }
      }
    },
  },
  computed: {
    checked: {
      get(): boolean {
        return isDark.value
      },
      set() {
        toggleDark()
      },
    },
    menuItems() {
      return ([
        { title: this.$t('navbar.Mock'), route: 'mock' },
        { title: this.$t('navbar.Charts'), route: 'charts' },
        { title: this.$t('navbar.UnoCSS'), route: 'unocss' },
        { title: this.$t('navbar.Counter'), route: 'counter' },
        { title: this.$t('navbar.KeepAlive'), route: 'keepalive' },
        { title: this.$t('navbar.ScrollCache'), route: 'scroll-cache' },
        { title: this.$t('navbar.404'), route: 'unknown' },
      ])
    },
    language(): any {
      const found = this.languageColumns.find(
        (l: any) => l.value === this.locale
      )
      return found ? found.text : ''
    },
  },
})
</script>
