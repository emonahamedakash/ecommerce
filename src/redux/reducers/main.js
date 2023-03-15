import { combineReducers } from '@reduxjs/toolkit'
import { cartReducer } from './cartReducer'
import { wishReducer } from './wishReducer'
import { userLoginReducer } from './userReducer'

export const mainReducer = combineReducers({
    cartReducer,
    wishReducer,
    userLoginReducer,
})
export default mainReducer