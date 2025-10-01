<template>
  <van-config-provider :theme="mode">
    <AppHeader />
    <router-view v-slot="{ Component }">
      <section class="app-wrapper">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </section>
    </router-view>
    <TabBar />
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@unhead/vue'
import { isDark, preferredDark } from './composables/dark'
import TabBar from '@/components/TabBar.vue'
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    TabBar,
  },
  mounted() {
    useHead({
      title: () => this.$t('app.name'),
      meta: [
        {
          name: 'description',
          content: () => this.$t('app.description'),
        },
        {
          name: 'theme-color',
          content: () => (isDark ? '#0B0A0A' : '#ffffff'),
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: () =>
            preferredDark ? '/favicon-dark.svg' : '/favicon.svg',
        },
      ],
    })
  },
  computed: {
    mode(): any {
      return isDark.value ? 'dark' : 'light'
    },
  },
})
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  position: relative;
  padding: var(--van-padding-md);
}
</style>
