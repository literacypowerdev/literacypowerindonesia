import { createSlice, createAsyncThunk, PayloadAction, CreateSliceOptions } from "@reduxjs/toolkit";
const Cookie = require('js-cookie')
const token = Cookie.get('token')



export const postProyek = createAsyncThunk('proyek/postProyek', async (values: any) => {
    try {
        const response = await fetch('http://localhost:4500/api/proyek', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(values)
        })
        const res = await response.json();
        window.location.reload();

    } catch (err) {
        console.log("ini errornya: ", err)
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
            })
    },
})


export default proyekSlice.reducer