
const navigationBarButtons = [
    { route: { name: "app.public.homepage" }, text: "Quotes", icon: "message" },
    { route: { name: "app.public.about" }, text: "About", icon: "comment-question" }
]

import ButtonsList from "@/App/Components/ButtonList.vue"

export default {
    data: () => ({
        navigationBarButtons
    }),

    computed: {
    },

    mounted() {
    },

    methods: {
    },

    components: {
        ButtonsList
    }
}