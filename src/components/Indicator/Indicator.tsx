import { FC, useState, useEffect, ChangeEvent } from 'react';
import { Order, SortParam } from '../../api/api';
import s from './Indicator.module.css';

type Props = {
  currentPage: number,
  totalPages: number,
  category: string,
  sortHits: (param: SortParam, order: Order) => void
}

export const Indicator: FC<Props> = ({ currentPage, totalPages, category, sortHits }) => {
  const [sorting, setSorting] = useState({
    param: SortParam.Id,
    order: Order.ASC
  })

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    setSorting({
      ...sorting,
      [name]: value,
    });
  }

  useEffect(() => {
    const { param, order } = sorting;
    sortHits(param, order);
  }, [sorting])

  const categoryCapitalized = category[0].toUpperCase() + category.slice(1);
  return (
    <div className={s.indicator}>
      <p>Page {currentPage} / {totalPages}</p>
      <div>
        <span>Sort by</span>

        <select
          className={s['select-input']}
          name='param'
          onChange={handleChange}
        >
          <option label='Parameter' selected disabled />
          <option value={SortParam.Id} label='Id' />
          <option value={SortParam.Likes} label='Likes' />
        </select>

        <select
          className={s['select-input']}
          name='order'
          onChange={handleChange}
        >
          <option label='Order' selected disabled />
          <option value={Order.ASC} label='A -> Z' />
          <option value={Order.DESC} label='Z -> A' />
        </select>

      </div>
      <p>Category: {categoryCapitalized}</p>
    </div>
  );
}