import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { ControlsContainer, IndicatorContainer, HitsContainer } from './components';
import { initializeApp, getHitsByPage } from './store/reducers/ActionCreators';
import s from './App.module.css';

const App = () => {
  const { currentPage, category } = useAppSelector(state => state.hitReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApp(category))
  }, [category]);

  useEffect(() => {
    dispatch(getHitsByPage(currentPage));
  }, [currentPage, category])

  return (
    <div className={s.container}>
      <ControlsContainer />
      <IndicatorContainer />
      <HitsContainer />
    </div>
  )
}

export default App
