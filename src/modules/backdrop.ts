import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface userState {
    backdrop: boolean;
};

const initialState: userState = {
    backdrop: false
};

export const backdropSlice = createSlice({
    name: 'backdrop',
    initialState,
    reducers: {
        setBackdrop: (state, action: PayloadAction<boolean>) => {
            state.backdrop = action.payload;
        },
        reset: () => initialState
    }
})

export const { setBackdrop, reset } = backdropSlice.actions;
export const getBackdrop = (state: RootState) => state.backdrop.backdrop;
export default backdropSlice.reducer;