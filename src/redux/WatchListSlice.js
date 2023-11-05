import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows: [],
    count: 0
};

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addToWatchList: (state, action)=>{
            state.shows.push(action.payload);    
        },
        removeFromWatchList: (state, action)=>{
            state.shows = state.shows.filter(show => show.imdbID!==action.payload);
        },
        resetWatchList: (state)=>{
            return initialState;
        }
    }
});

export const {addToWatchList, removeFromWatchList, resetWatchList} = watchListSlice.actions;

export default watchListSlice;