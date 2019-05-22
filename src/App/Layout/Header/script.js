
const navigationBarButtons = {
    left: [
        { route: { name: "app.public.about" }, text: "About", icon: "comment-question" }
    ],
    right: [
        { route: { name: "app.public.signup" }, text: "Sign up", icon: "account-plus" }
    ]
}

import ButtonsList from "@/App/Components/ButtonList.vue"

export default {
    data: () => ({
        showDrawer: false,
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