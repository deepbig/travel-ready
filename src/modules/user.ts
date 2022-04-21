import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { UserData } from 'types/index';

export interface userState {
    user: UserData;
};

const initialState: userState = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
        },
        reset: () => initialState
    }
})

export const { setUser, reset } = userSlice.actions;
export const getUser = (state: RootState) => state.user.user;
export default userSlice.reducer;