import { FC, useState, ChangeEvent } from 'react';
import s from './Controls.module.css';

type Props = {
  prev: number | null,
  next: number | null,
  getHitsByPage: (page: number) => void,
  updateCategory: (category: string) => void,
}

export const Controls: FC<Props> = ({ prev, next, getHitsByPage, updateCategory }) => {
  const [category, setCategory] = useState<string>('');

  const handlePrev = () => {
    if (prev) {
      getHitsByPage(prev);
    }
  }

  const handleNext = () => {
    if (next) {
      getHitsByPage(next);
    }
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  }

  const handleUpdateCategory = () => {
    updateCategory(category);
    setCategory('')
  }

  return (
    <header className={s.header}>
      <button
        onClick={handlePrev}
        className={s.btn}
        disabled={!prev}
      >Prev</button>

      <div>
        <input
          className={s.input}
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleOnChange}
        />
        <button
          className={s.btn}
          disabled={!category}
          onClick={handleUpdateCategory}
        >Find</button>
      </div>

      <button
        onClick={handleNext}
        className={s.btn}
        disabled={!next}
      >Next</button>
    </header>
  );
}