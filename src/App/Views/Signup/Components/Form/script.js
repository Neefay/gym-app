
import axios from 'axios'

import { validationMixin } from 'vuelidate'
import { BasicFormMixin } from '@/API/Client/Mixins'

import { setFormData } from "@/API/Lib/validation"
import { UserForm } from '@/Server/Modules/User/model'

const formData = setFormData(UserForm);

export default {
    mixins: [validationMixin, BasicFormMixin],

    data: () => ({
        username: "",
        password: "",
        showPass: false,
        name: "",
        email: "",

        snackbarDisplay: false,
        snackbarText: "",
        snackbarColor: "primary",

        formData
    }),

    methods: {
        submitEventEnd (cb) { this.addNewUser(() => cb()) },

        addNewUser(cb) {
            const   { username, password, name, email } = this,
                    data = { username, password, name, email }

            axios.post('api/user/post', data).then(r => {
                if (r.status === 200) {
                    this.snackbarText = r.data
                    this.snackbarColor = "success"
                    this.snackbarDisplay = true
                }
                return cb();
            })
        }
    },

    validations: { ...formData.validations }
}
