
import Vue from 'vue'

Vue.directive("filterInput", {
    bind: function(e, b, v) {
        v.componentInstance.$on("input", () => {
            const [ prop, filters ] = b.value
            let pVal = v.context[prop]
            for (let i = 0; i < filters.length; i++) { pVal = v.context.$options.filters[filters[i]](pVal) }
            v.context[prop] = pVal
        })
    }
})