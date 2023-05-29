import axios from 'axios';
import { IHit } from '../types/hits';

export type ResponseType = {
  totalHits: number;
  totalPages: number;
  prev: number | null;
  next: number | null;
  hits: IHit[];
}

const Api = axios.create({
  baseURL: 'https://ms-apps-server.onrender.com/hits',
});

export enum SortParam {
  Id = 'id',
  Likes = 'likes',
};
export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export const HitsApi = {
  getAllHits: async (q: string): Promise<void> => {
    await Api.get('/', { params: { q } });
  },

  sortHits: async (param: SortParam, order: Order): Promise<void> => {
    await Api.patch('/sort', {}, { params: { param, order } });
  },

  getHitsByPage: async (page: number): Promise<ResponseType> => (await Api.get(`/${page}`)).data,
}
