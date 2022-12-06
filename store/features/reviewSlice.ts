import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const Cookie = require('js-cookie')


export const postReview = createAsyncThunk("review/postReview", async (data: any) => {
    const cookieToken = Cookie.get('token');
    try {
        const postReq = await fetch('http://localhost:4500/api/review', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookieToken
            },
            body: JSON.stringify(data)
        })
        const response = await postReq.json();
        console.log(response)
    } catch (err) {
        console.log('error kocak')
    }
})


const reviewSlice = createSlice({
    name: "review",
    initialState: {
        loading: false,
        data: [],
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(postReview.fulfilled, (state, action) => {
            state.loading = false,
            console.log('alhamdullilah');
            window.location.reload();
        })
    },
    
})


export default reviewSlice.reducer