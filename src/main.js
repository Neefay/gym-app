import Vue from 'vue'

import '@/API/Client/Filters'
import '@/API/Client/Directives'

import './App/Plugins/vuetify'

import App from './App'

import router from './App/Routes'
import store from './App/Store'

Vue.config.productionTip = false

export const app = new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
