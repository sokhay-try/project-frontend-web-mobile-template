<template>
  <div :class="type">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Define text types for consistent styling across the app.
 * when adding a new type, ensure to add corresponding styles in the <style> section.
 */
export const APP_TEXT_TYPES = {
  header: 'app_text_header',
  semiHeader: 'app_text_semi_header',
  semiHeaderRegular: 'app_text_semi_header app_text_font_weight_400',
  semiHeaderWhite: 'app_text_semi_header app_text_white',
  label: 'app_text_label',
  labelSoftBlack: 'app_text_label app_text_soft_black',
  semiLabel: 'app_text_semi_label',
  semiLabelGray: 'app_text_semi_label app_text_gray',
  labelMedium: 'app_text_label app_text_label_medium',
  labelMediumSoftBlack: 'app_text_label app_text_label_medium app_text_soft_black',
  semiLabelMedium: 'app_text_semi_label app_text_semi_label_medium',
  semiLabelMediumGray: 'app_text_semi_label app_text_semi_label_medium app_text_gray',
  semiLabelLightGray: 'app_text_semi_label app_text_light_gray',
  semiLabelSlateGray: 'app_text_semi_label app_text_slate_gray',

}
export default defineComponent({
  name: 'AppText',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
/** start: Header */
.app_text_header, .app_text_semi_header {
  font-weight: 700;
}
.app_text_header {
  font-size: var(--van-font-size-lg);
  color: var(--van-black);
}
.app_text_semi_header {
  font-size: var(--van-font-size-md);
  color: var(--van-dark-gray);
}

/** start: Label */
.app_text_label {
  font-size: var(--van-font-size-sm);
  color: var(--van-dark-gray);
}
.app_text_semi_label {
  font-size: var(--van-font-size-xs);
}
.app_text_label_medium {
  font-weight: 700;
}
.app_text_semi_label_medium {
  font-weight: 500;
}

/** start: Color */
.app_text_dark_gray {
  color: var(--van-dark-gray);
}
.app_text_soft_black {
  color: var(--van-soft-black);
}
.app_text_white {
  color: var(--van-white);
}
.app_text_gray {
  color: var(--van-gray);
}
.app_text_light_gray {
  color: var(--van-light-gray);
}
.app_text_slate_gray {
  color: var(--van-slate-gray);
}

// Font Weight
.app_text_font_weight_400 {
  font-weight: 400;
}
</style>
