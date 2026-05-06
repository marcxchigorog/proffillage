import { createApp } from 'vue'
import App from './App.vue'
import vueApexCharts from 'vue3-apexcharts'

const apex = vueApexCharts
// Import Vuetify
import style from '@/design/style'
import router from '@/router/index'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(style)
  .use(apex)
  .use(router)
  .mount('#app')