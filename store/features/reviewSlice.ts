import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const Cookie = require('js-cookie')


// token
const CookieToken = Cookie.get('token');

export const postReview = createAsyncThunk("review/postReview", async (data: any) => {
    const cookieToken = Cookie.get('token');
    try {
        const postReq = await fetch('https://api.literacypowerid.com/api/review', {
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

export const deleteReq = createAsyncThunk('review/deleteReq', async (id: any) => {
    try {
        const deleteReq = await fetch(`https://api.literacypowerid.com/api/review/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + CookieToken
            }
        })
        const response = await deleteReq.json();
        console.log(response)
    } catch (err) {
        console.log('error kocak')
    }
})


interface initialStateProps {
    loading: false,
    data: [],
    error: any
}

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        loading: false,
        data: [],
        error: null
    } as initialStateProps,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(postReview.fulfilled, (state, action) => {
            state.loading = false,
                console.log('alhamdullilah');
            window.location.reload();
        }),
            builder.addCase(deleteReq.fulfilled, (state, action) => {
                state.loading = false
                window.location.reload();
            }),
            builder.addCase(deleteReq.rejected, (state, action) => {
                state.error = action.payload
                console.log('rejected')
            })
    },

})


export default reviewSlice.reducer