
import { validationMixin } from 'vuelidate'
import { BasicFormMixin } from '@/API/Client/Mixins'

import { setFormData } from "@/API/Lib/validation"
import { requestPOST, requestGET } from "@/API/Client/Methods/requests"

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

        formData
    }),

    methods: {
        submitEventEnd (cb) { this.addNewUser(() => cb()) },

        addNewUser(cb) {
            const   { username, password, name, email } = this,
                    data = { username, password, name, email }

            requestPOST("api/user/post", data, { cb })
            .then(res => {
                console.log(res);
            })
        }
    },

    validations: { ...formData.validations }
}
