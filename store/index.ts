import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import dampakReducer from './dampakData/dampakSlice'

export const store = configureStore({
    reducer: {
        dampak: dampakReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch