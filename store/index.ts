import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import proyekSlice from './features/proyekSlice';
import bukuSlice from './features/bukuSlice';
import loginSlice from './features/loginSlice';
import reviewSlice from './features/reviewSlice';

export const store = configureStore({
    reducer: {
        proyek: proyekSlice,
        buku: bukuSlice,
        login: loginSlice,
        review: reviewSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch