import { HitsApi, Order, SortParam } from '../../api/api';
import { AppDispatch } from '../store';
import { hitSlice } from '../reducers/hitsSlice';
import { ResponseType } from '../../api/api';

type Error = {
  result: string,
  error: string,
}

const {
  setIsFetching,
  setError,
  setHits,
  setPage,
  setCategory,
} = hitSlice.actions;

const initHits: ResponseType = {
  hits: [],
  totalHits: 0,
  totalPages: 0,
  prev: null,
  next: null,
}

export const initializeApp = (category: string) => async (dispatch: AppDispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setHits(initHits))

  try {
    await HitsApi.getAllHits(category);
    dispatch(setCategory(category));
    dispatch(setPage(1))
  } catch (error) {
    dispatch(setError((error as Error).error));
  } finally {
    dispatch(setIsFetching(false));
  }
}

export const getHitsByPage = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(setPage(page));
  dispatch(setIsFetching(true));

  try {
    const response = await HitsApi.getHitsByPage(page);
    dispatch(setHits(response));
  } catch (error) {
    dispatch(setError((error as Error).error));
  } finally {
    dispatch(setIsFetching(false));
  }
}

export const updateCategory = (category: string) => (dispatch: AppDispatch) => {
  const categoryToUpdate = category.trim().toLocaleLowerCase();
  dispatch(setCategory(categoryToUpdate));
}

export const sortHits = (param: SortParam, order: Order) => async (dispatch: AppDispatch) => {
  dispatch(setIsFetching(true));

  try {
    await HitsApi.sortHits(param, order);
    const result = await HitsApi.getHitsByPage(1);
    dispatch(setHits(result));
    dispatch(setPage(1));
    dispatch(getHitsByPage(1));
  } catch (error) {
    dispatch(setError((error as Error).error));
  } finally {
    dispatch(setIsFetching(false))
  }
}
