import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import proyekSlice from './features/proyekSlice';

export const store = configureStore({
    reducer: {
        proyek: proyekSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch