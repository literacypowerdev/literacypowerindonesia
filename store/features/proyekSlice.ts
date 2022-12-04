import { createSlice, createAsyncThunk, PayloadAction, CreateSliceOptions } from "@reduxjs/toolkit";
import axios from "axios";
import { ReactNode } from "react";



// asyncThunk
// type



export const getProyek = createAsyncThunk('proyek/getAllProyek', async () => {
    try {
        const response = await fetch('http://localhost:4500/api/proyek')
        const data = await response.json();
        return data

    } catch (err) {
        console.log(err)
    }
})

export const postProyek = createAsyncThunk('proyek/postProyek', async ({ values }: any) => {
    return axios({
        method: "POST",
        url: "http://localhost:4500/api/proyek",
        data: values
    }).then((res) => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
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
        builder.addCase(getProyek.pending, (state) => {
            state.loading = true
        }),
            builder.addCase(getProyek.fulfilled, (state, action) => {
                state.loading = false,
                    state.proyek = action.payload
            }),
            builder.addCase(getProyek.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            }),
            builder.addCase(postProyek.pending, (state) => {
                state.loading = true
            }),
            builder.addCase(postProyek.fulfilled, (state, action) => {
                state.loading = false
                state.proyek = action.payload
            }),
            builder.addCase(postProyek.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})


export default proyekSlice.reducer