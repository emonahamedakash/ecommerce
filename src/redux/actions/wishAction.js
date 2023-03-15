export const ADDWISH = (item) => {
    return {
        type: "ADD_WISH",
        payload: item
    }
}

export const DLTWISH = (id) => {
    return {
        type: "RMV_WISH",
        payload: id
    }
}