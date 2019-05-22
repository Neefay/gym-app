import Vue from "vue";
import Vuetify from "vuetify";

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'

import theme from "./../Styles/Variables/vuetify_themes"

Vue.use(Vuetify, {
	theme,
	options: { customProperties: true },
	iconfont: 'mdi',
})