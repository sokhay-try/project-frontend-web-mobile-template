import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from '@/utils/i18n'
import Vant from 'vant';
import { createHead } from '@unhead/vue/client'
import { Icon } from 'vant';

// Import global styles
import 'vant/lib/index.css';
import '@/styles/app.scss'
import '@/styles/var.scss'

// register globally components
import AppText from '@/components/AppText.vue'

const app = createApp(App);
const head = createHead()

app.component('AppText', AppText)
app.use(head)
app.use(Icon);
app.use(Vant);
app.use(i18n);
app.use(router);
app.mount('#app');
