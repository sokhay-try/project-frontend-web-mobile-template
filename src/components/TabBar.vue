<template>
  <div class="custom-floating-nav-wrapper">
    <van-tabbar 
      v-if="show"
      :route="false" 
      :border="false"
      v-model="active"
      class="custom-nav-bar"
    >
      <van-tabbar-item name="portfolio" @click="active = 'portfolio'" :to="{ name: RouteName.PORTFOLIO }">
        <van-button block round class="nav-btn" :class="{'portfolio-active': active === 'portfolio'}">
          <template #icon>
            <van-icon name="bell" style="margin-right: 4px;" />
          </template>
          <p v-if="active === 'portfolio'">Portfolio</p>
        </van-button>
      </van-tabbar-item>

      <van-tabbar-item name="card" replace @click="active = 'card'"  :to="{ name: RouteName.ABOUT }">
        <van-button block round class="nav-btn" :class="{'card-active': active === 'card'}">
          <template #icon>
            <van-icon name="card" style="margin-right: 4px;" />
          </template>
          <p v-if="active === 'card'">About</p>
        </van-button>
      </van-tabbar-item>
    </van-tabbar>
  </div>
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
      active: 'portfolio',
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

<style scoped>
.custom-floating-nav-wrapper {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%; 
  max-width: 225px;
  z-index: 999;
}
.nav-btn {
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
}
.custom-nav-bar {
  background-color: #0D5F5A; 
  border-radius: 25px;
  max-width: 225px;
  --van-tabbar-height: 48px; 
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
}
.van-tabbar-item:first-child {
  font-size: 12px;
  height: 40px;
  background-color: transparent;
  margin-top: 2px;
  padding-left: 4px;
}
.van-tabbar-item:last-child {
  font-size: 12px;
  height: 42px;
  background-color: transparent;
  margin-top: 2px;
  margin-right: 0px;
}

.portfolio-active {
  background: #0A4C48;
  color: inherit;
  font-size: 14px;
  width: 115px;
  border-radius: 25px;
  height: 40px !important;
  border: none;
}
.card-active {
  background: #0A4C48;
  color: inherit;
  font-size: 14px;
  border-radius: 25px;
  width: 115px;
  height: 40px;
  border: none;
  margin-right: 4px !important;
}

.van-tabbar-item--active {
  color: white !important; 
  font-weight: bold;
}
</style>