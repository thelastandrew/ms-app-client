import { configureStore, combineReducers } from '@reduxjs/toolkit';
import hitReducer from './reducers/hitsSlice';

const rootReducer = combineReducers({
  hitReducer,
});

const setupStore = () => configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];

export default setupStore;