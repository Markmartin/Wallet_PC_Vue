function validateEmail(email) {
    var mailRegex = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (mailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validateAddress(address) {
    if (typeof address === 'undefined') {
        return false;
    }
    if (address.length !== 42) {
        return false;
    }
    if (address.substring(0, 2) != '0x' && address.substring(0, 2) != '0X') {
        return false;
    }
    return true;
}

const respJson = (status, data, msg) => ({
    status: (typeof status === undefined) ? false : status,
    data: (typeof data === undefined) ? {} : data,
    msg: (typeof msg === undefined) ? '' : msg
})

const tool = {
    validateEmail,
    respJson,
    validateAddress
}

export default tool
