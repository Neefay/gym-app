import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

Vue.filter('noSpace', (v) => v.replace(/ /g, '') )

Vue.use(Vue2Filters)