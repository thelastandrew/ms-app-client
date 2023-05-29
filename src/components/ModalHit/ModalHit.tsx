import { FC, Dispatch, SetStateAction, MouseEvent } from 'react';
import { IHit } from '../../types/hits';
import s from './ModalHit.module.css';

type Props = {
  hit: IHit,
  setActiveHit: Dispatch<SetStateAction<IHit>>,
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const ModalHit: FC<Props> = ({ hit, setActiveHit, setIsVisible }) => {
  const handleCloseModal = () => {
    setIsVisible(false);
    setActiveHit({} as IHit);
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }

  return (
    <div className={s.modal} onClick={handleCloseModal}>
      <div
        className={s['modal-content']}
        onClick={handleClick}
      >
        <img
          src={hit.largeImageURL}
          width={'100%'}
        />
        <div className={s.info}>
          <p>Id: {hit.id}</p>
          <p>Author: {hit.user}</p>
          <p>Views: {hit.views}</p>
          <p>Likes: {hit.likes}</p>
        </div>
        <button className={s.btn} onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
}