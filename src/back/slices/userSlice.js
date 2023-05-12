import { createSlice } from '@reduxjs/toolkit'

const initState = { token: null, data: null, id: null }

export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {},
})

export default userSlice.reducer
export const { globalSetUser, globalClearUser, globalSetUserToken } =
    userSlice.actions
