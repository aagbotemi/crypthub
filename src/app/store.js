import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'
import { setupListeners } from '@reduxjs/toolkit/query'

// export default configureStore({
export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
})

setupListeners(store.dispatch)