import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const Cookie = require('js-cookie')


export const postReview = createAsyncThunk("review/postReview", async (dataReview) => {
    const cookieToken = Cookie.get('token');
    try {
        const postReq = await fetch('http://localhost:4500/api/review', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + cookieToken
            },
            body: JSON.stringify(dataReview)
        })
    } catch (err) {
        console.log('error kocak')
    }
})


const reviewSlice = createSlice({
    name: "review",
    initialState: {

    },
    reducers: {

    },
    extraReducers(builder) {
        
    },
    
})