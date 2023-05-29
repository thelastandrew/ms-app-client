import { FC, useState } from 'react';
import { IHit } from '../../types/hits';
import { Loader, ModalHit } from '../../components';
import s from './Hits.module.css';

type Props = {
  isFetching: boolean,
  hits: IHit[],
}

export const Hits: FC<Props> = ({ isFetching, hits }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeHit, setActiveHit] = useState<IHit>({} as IHit);

  const handleClick = (hit: IHit) => {
    setActiveHit(hit);
    setIsVisible(true);
  }

  return (
    <div className={s.hits}>
      {isFetching && <Loader />}

      {hits.map(hit => (
        <button
          onClick={() => handleClick(hit)}
          key={hit.id}
          className={s['image-block']}
        >
          <img src={hit.previewURL} className={s.pic} />
        </button>
      ))}

      {isVisible && <ModalHit
        hit={activeHit}
        setActiveHit={setActiveHit}
        setIsVisible={setIsVisible}
      />}
    </div>
  )
}