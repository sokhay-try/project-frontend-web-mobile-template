import { Composer } from 'vue-i18n'

// This Augments the Vue component instance ($t)
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /**
     * The vue-i18n composer instance, which includes the $t method.
     */
    $i18n: Composer
    
    /**
     * The translation function provided by vue-i18n.
     */
    $t: typeof import('vue-i18n')['useI18n']['prototype']['t']
  }
}