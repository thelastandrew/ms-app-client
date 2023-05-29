import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IHit } from '../../types/hits';
import { ResponseType } from '../../api/api';

export interface HitsState {
  hits: IHit[],
  isFetching: boolean,
  prev: number | null,
  next: number | null,
  totalHits: number,
  totalPages: number,
  currentPage: number,
  category: string,
  error: string,
}

const initialState: HitsState = {
  hits: [],
  isFetching: false,
  prev: null,
  next: null,
  totalHits: 0,
  totalPages: 0,
  currentPage: 1,
  category: 'flowers',
  error: '',
}

export const hitSlice = createSlice({
  name: 'hit',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    setHits: (state, action: PayloadAction<ResponseType>) => {
      const { hits, totalHits, totalPages, prev, next } = action.payload;
      state.hits = hits;
      state.totalHits = totalHits;
      state.totalPages = totalPages;
      state.prev = prev;
      state.next = next;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    }
  },
})

export default hitSlice.reducer;