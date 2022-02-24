import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import countryReducer from './country';

export const store = configureStore({
    reducer: {
        user: userReducer,
        country: countryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;