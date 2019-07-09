const { getType } = require("../../../API/Lib")

const validateParams = (req, res, params, errorMsg, code) => {
    let r = true
    const pErrorMsg = (errorMsg || config.messages().invalid_params);

    for (let i = 0, len = params.length; i < len; i++) {
        if (r) {
            const type = getType(params[i]);
            switch (type) {
                case "array": {
                    switch(true) {
                        case ((!(params[i][0])) && (params[i].length > 0)): {
                            r = false;
                            pErrorMsg = params[i][1];
                        } break;
                        case (params[i].length === 0): { r = false; } break;
                    }
                } break;
                default: { if (!(params[i])) { r = false; }	} break;
            }
        }
    }

    if (!r) {
        const { sendResponse } = require("../../Server/Methods/requests")
        return sendResponse(req, res, false, pErrorMsg, '', code);
    }

    return r;
}

module.exports = {
    validateParams
}