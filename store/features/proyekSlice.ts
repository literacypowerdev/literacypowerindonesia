import { createSlice, createAsyncThunk, PayloadAction, CreateSliceOptions } from "@reduxjs/toolkit";
const Cookie = require('js-cookie')
const token = Cookie.get('token')



export const postProyek = createAsyncThunk('proyek/postProyek', async (data: FormData) => {
    try {
        
        const response = await fetch('http://localhost:4500/api/proyek/', {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: data
            
        })
        const res = await response.json()
        console.log(data)
        console.log(res)
        

    } catch (err) {
        console.log("ini errornya: ", err)
    }
})



export const deleteReq = createAsyncThunk('proyek/deleteReq', async (id: any) => {
    try {
        const deleteReq = await fetch('https://api.literacypowerid.com/api/proyek/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        const response = await deleteReq.json();
        console.log(response)
    } catch (err) {
        console.log('error kocak')
    }
})


// type
interface initialStateProps {
    loading: boolean
    proyek: []
    error: any
}

const proyekSlice = createSlice({
    name: 'proyek',
    initialState: {
        loading: false,
        proyek: [],
        error: null
    } as initialStateProps | any,
    reducers: {},
    extraReducers(builder) {
            builder.addCase(postProyek.pending, (state) => {
                state.loading = true
            }),
            builder.addCase(postProyek.fulfilled, (state, action) => {
                state.loading = false
                console.log('post success')
            }),
            builder.addCase(postProyek.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            }),
            builder.addCase(deleteReq.fulfilled, (state, action) => {
                state.loading = false
                console.log('delete success')
                window.location.reload();
            }),
            builder.addCase(deleteReq.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

    },
})


export default proyekSlice.reducer