import { configureStore } from "@reduxjs/toolkit"
import mainReducer from './redux/reducers/main'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer =  persistReducer(persistConfig, mainReducer);

export const store = configureStore({ reducer: persistedReducer, middleware: [thunk] });

export const persistor = persistStore(store);

export default store

