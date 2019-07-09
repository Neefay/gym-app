import Vue from "vue";
import Vuetify from "vuetify";
import VuetifyToast from 'vuetify-toast-snackbar'

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'

import theme from "./../Styles/Variables/vuetify_themes"

Vue.use(Vuetify, {
	theme,
	options: { customProperties: true },
	iconfont: 'mdi',
})

Vue.use(VuetifyToast, {
	x: 'right',
	y: 'bottom',
	color: 'info',
	icon: 'mdi-information',
	classes: ['custom-snackbar', 'body-2'],
	timeout: 6000,
	dismissable: true,
	autoHeight: false,
	multiLine: false,
	vertical: false,
	queueable: false,
	shorts: {
		success: { icon: "mdi-check-bold", color: "success" },
		error: { icon: "mdi-alert-decagram", color: "error" }
	},
	property: '$alert'
})