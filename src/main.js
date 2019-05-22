import Vue from 'vue'

import Vue2Filters from 'vue2-filters'
import '@/API/Client/Filters'

import '@/API/Client/Directives'

import './App/Plugins/vuetify'

import App from './App'
import router from './App/Routes'
import store from './App/Store'

import { dev } from './API/Client'

Vue.use(Vue2Filters)

import axios from 'axios'
if (dev()) axios.defaults.baseURL = `http://localhost:${(process.env.VUE_APP_API_PORT)}`

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
