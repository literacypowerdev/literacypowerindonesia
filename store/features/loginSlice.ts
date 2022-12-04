import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        token: '',
        error: false
    },
    reducers: {
        loginSetToken: (state, action) => {
            state.token = action.payload
        }
    }
})


export const { loginSetToken } = loginSlice.actions
export default loginSlice.reducer