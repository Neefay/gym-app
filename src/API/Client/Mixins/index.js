
import { generateFormErrors } from "@/API/Lib/validation"

const BasicFormMixin = {
    data: () => ({
        submitStatus: 0
    }),

    directives: {
        validateInput: {
            bind: function(e, b, v) {
                v.componentInstance.$on("blur", () => v.context.$v[b.expression].$touch())
                v.componentInstance.$on("input", () => v.context.$v[b.expression].$touch())
            }
        }
    },

    computed: {
        formErrors() {
            return {
                ...generateFormErrors(this.$v, this.formData.form)
            }
        },
        canSubmit() { return ((this.submitStatus < 0) || this.$v.$invalid) },
        isLoading() { return (this.submitStatus === -1) }
    },

    methods: {
        validate () {
            if (this.$refs.form.validate()) {

            }
        },

        resetForm () {
            this.$refs.form.reset()
        },

        submitForm () {
            if (this.submitEventStart) this.submitEventStart()
            this.$v.$touch()
            if (this.$v.$invalid) return this.submitStatus = 1

            this.submitStatus = -1
            if (this.submitEventEnd) { this.submitEventEnd(() => this.submitStatus = 2) }
            else { this.submitStatus = 2 }
        }
    }
}

export { BasicFormMixin }