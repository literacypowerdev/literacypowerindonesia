import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



export const getBuku = createAsyncThunk('buku/getBuku', async () => {
    try {
        const response = await axios.get('http://localhost:4500/api/buku')
        const data = await response.data.data
        return data
    }catch (err) {
        console.error(err)
    }
})
// optional
export const getBukuById = createAsyncThunk('buku/getBukuById', async (id) => {
    try {
        const response = await axios.get(`http://localhost:4500/api/buku/${id}`);
        const data = await response.data.data
        return data
    }catch(err){
        console.log(err)
    }
})

// type initialStateProps
interface initialStateProps {
    loading: boolean,
    data: [],
    error: any
}
const bukuSlice = createSlice({
    name: 'buku',
    initialState: {
        loading: false,
        data: [],
        error: null
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
        })
    },
})




export default bukuSlice.reducer