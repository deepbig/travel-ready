import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { TravelHistoryData } from 'types/index';

export interface PlacesLikeState {
    PlacesLikeResult: TravelHistoryData[];
};

const initialState: PlacesLikeState = {
    PlacesLikeResult: []
};

export const placesLikeSlice = createSlice({
    name: 'placesLike',
    initialState,
    reducers: {
        setPlacesLikeResult: (state, action: PayloadAction<TravelHistoryData[]>) => {
            state.PlacesLikeResult = action.payload;
        },
        reset: () => initialState
    }
})

export const { setPlacesLikeResult, reset } = placesLikeSlice.actions;
export const getPlacesLikeResult = (state: RootState) => state.placesLike.PlacesLikeResult;
export default placesLikeSlice.reducer;