
import { handleFormErrors } from '../Client'
import * as $v from 'vuelidate/lib/validators'

const setFormData = (validation) => {
    let formObj = {}, validObj = {}

    for (let i = 0; i < validation.length; i++) {
        const cvalid = validation[i]

        formObj[cvalid.field] = { validations: [] }
        validObj[cvalid.field] = {}

        formObj[cvalid.field].form = [cvalid.field, cvalid.name]

        if (cvalid.required) {
            formObj[cvalid.field].validations.push(["required"])
            validObj[cvalid.field].required = $v.required
        }

        if (cvalid.email) {
            formObj[cvalid.field].validations.push(["email"])
            validObj[cvalid.field].email = $v.email
        }

        if (cvalid.max_length) {
            formObj[cvalid.field].validations.push(["maxLength", cvalid.max_length])
            validObj[cvalid.field].maxLength = $v.maxLength(cvalid.max_length)
        }

        if (cvalid.min_length) {
            formObj[cvalid.field].validations.push(["minLength", cvalid.min_length])
            validObj[cvalid.field].minLength = $v.minLength(cvalid.min_length)
        }

        if (cvalid.alpha_num) {
            formObj[cvalid.field].validations.push(["alphaNum"])
            validObj[cvalid.field].alphaNum = $v.alphaNum
        }
    }

    return { form: formObj, validations: validObj }
}

const getTypeMsg = (type, name, constr) => {
    switch(type) {
        case "required": { return `'${name}' is required.` } break;
        case "maxLength": { return `'${name}' cannot be longer than ${constr} characters.` } break;
        case "minLength": { return `'${name}' must be at least ${constr} characters long.` } break;
        case "email": { return "Must be a valid e-mail." } break;
        case "alphaNum": { return `'${name}' can only contain letters or numbers.` } break;
    }
}

const generateFormErrors = (v, form_object) => {
    let formErrorsObj = {}
    for (let key in form_object) {
        formErrorsObj[key] = handleFormErrors(v, form_object[key].form, form_object[key].validations)
    }
    return formErrorsObj
}

const isValid = (v) => {
    const   _isNil = require("lodash/isNil"),
            _isNull = require("lodash/isNull"),
            _isUndefined = require("lodash/isUndefined")
    return !(_isNil(v) || _isNull(v) || _isUndefined(v))
}

export {
    setFormData,
    generateFormErrors,
    getTypeMsg,

    isValid
}