import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const Cookie = require('js-cookie')


interface initialStateProps {
    loading: boolean,
    data: [],
    error: any
}


export const getBuku = createAsyncThunk('buku/getBuku', async () => {
    try {
        const response = await axios.get('http://localhost:4500/api/buku')
        const data = await response.data.data
        return data
    } catch (err) {
        console.error(err)
    }
})
// optional
export const getBukuById = createAsyncThunk('buku/getBukuById', async (id) => {
    try {
        const response = await axios.get(`http://localhost:4500/api/buku/${id}`);
        const data = await response.data.data
        return data
    } catch (err) {
        console.log(err)
    }
})
// pr belum dirapihin
export const postBuku = createAsyncThunk('buku/postBuku', async (bookData, token) => {
    try {
        const create = await fetch('http://localhost:4500/api/buku', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(bookData)
        })
        const response = await create.json();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
})

export const deleteBuku = createAsyncThunk('buku/deleteBuku', async (id: number) => {
    const cookieToken = Cookie.get('token') 
    try {
        const deleteReq = await fetch(`http://localhost:4500/api/buku/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookieToken
            }
        })
        const response = await deleteReq.json();
        console.log(response)
    } catch (err) {
        console.log("dwuahdwuia", err)
        Cookie.remove('token')
    }
})



// type initialStateProps

const bukuSlice = createSlice({
    name: 'buku',
    initialState: {
        loading: false,
        data: [],
        error: null,
    } as initialStateProps,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getBuku.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(getBuku.fulfilled, (state, action) => {
                state.loading = false,
                    state.data = action.payload
            }),
            builder.addCase(getBuku.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            }),
            builder.addCase(getBukuById.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(getBukuById.fulfilled, (state, action) => {
                state.loading = false,
                    state.data = action.payload
            }),
            builder.addCase(getBukuById.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            }),
            builder.addCase(deleteBuku.fulfilled, (state, action) => {
                state.loading = false
                console.log('doiwjadioawj')
                // window.location.reload();
            }),
            builder.addCase(deleteBuku.rejected, (state, action ) => {
                state.error = action.payload
                console.log(state.error)
            })
    }
})




export default bukuSlice.reducer