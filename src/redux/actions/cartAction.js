export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

export const CLR = (item) => {
    return {
        type: "CRL_CART",
        payload: item
    }
}