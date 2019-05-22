import Vue from 'vue'

Vue.filter('noSpace', (v) => v.replace(/ /g, '') )
