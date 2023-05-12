import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import signApi from './services/signApi'
import userReduser from './slices/userSlice'

const rootReduser = combineReducers({
    user: userReduser,
    [signApi.reducerPath]: signApi.reducer,
})

export default configureStore({
    reducer: rootReduser,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signApi.middleware),
})
