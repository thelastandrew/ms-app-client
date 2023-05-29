import { FC } from 'react';
import loader from '../../assets/loader.gif';
import s from './Loader.module.css';


export const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <img src={loader} width={50} alt='loader' />
    </div>
  );
}