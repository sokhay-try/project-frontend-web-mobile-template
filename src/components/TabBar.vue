<template>
  <van-tabbar v-if="show" v-model="active" route placeholder>
    <van-tabbar-item replace :to="{ name: RouteName.PORTFOLIO }">
      {{ $t('tabbar.portfolio') }}
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace :to="{ name: RouteName.ABOUT }">
      {{ $t('tabbar.about') }}
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { rootRouteList } from '@/config/routes';
import { RouteName } from '@/constants';

export default defineComponent({
  // 1. Setup Hook: Used to access the Composition API's useRoute()
  setup() {
    const route = useRoute();

    // Expose the route instance to 'this' for use in computed properties
    return {
      route,
      rootRouteList
    };
  },

  // 2. Data Option: Used for reactive state (replaces ref)
  data() {
    return {
      // Replaces const active = ref(0)
      active: 0,
      RouteName
    };
  },

  // 3. Computed Option: Used for derived reactive values (replaces computed)
  computed: {
    show(): boolean {
      // Access route and rootRouteList from 'this'
      const routeName = this.route.name;

      if (routeName && this.rootRouteList.includes(routeName as string)) {
        return true;
      }
      return false;
    },
  },
});
</script>
