
import ButtonsList from "@/App/Components/ButtonList.vue"

const   headerMain = { title: "Aitakigu", icon: "mdi-karate", color: "primary" },

        navigationBarButtons = {
            about: [
                { route: { name: "app.public.about" }, text: "About", icon: "comment-question" }
            ],
            account: [
                { route: { name: "app.public.signup" }, text: "Sign up", icon: "account-plus" }
            ]
        }

export default {
    data: () => ({
        showDrawer: false,

        headerMain,
        navigationBarButtons
    }),

    components: {
        ButtonsList
    }
}