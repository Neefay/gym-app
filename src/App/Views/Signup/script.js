import SignupForm from "./Components/Form"
import { requestGET } from "@/API/Client/Methods/requests"

export default {
    route: {
        path: "/signup",
        name: "Signup"
    },
    components: { SignupForm },

    methods: {
        getSession() {
            requestGET('auth/session')
            .then(res => {
                console.log(res);
            })
        }
    }
}