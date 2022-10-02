import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import DampakModel from '../../utils/type'


export const getDampak = createAsyncThunk("dampak/getDampak", async (data, thunkApi) => {
    try {
        const response = await axios.get<DampakModel[]>("https://jsonplaceholder.typicode.com/posts?_limit=10");
        return response.data
    } catch (error: any) {
        const message = error.message;
        return thunkApi.rejectWithValue(message);
    }
})

interface DampakState {
    loading: boolean
    error: string | null
    data: DampakModel[] 
}

const initialState: DampakState = {
    loading: false,
    error: null,
    data: [],
}

const dampakSlice = createSlice({
    name: "dampak",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getDampak.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getDampak.fulfilled, (state, action: PayloadAction<DampakModel[]>) => {
          state.loading = false;
          state.data = action.payload;  
        })
        .addCase(getDampak.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload
        })
    }
})

export default dampakSlice.reducer