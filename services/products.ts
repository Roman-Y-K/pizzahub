import { Product } from '@prisma/client';

import { axiosInstance } from './instance';
import { ApiRoutes } from './api-routes';

export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PROGUCTS,
    {
      params: { query },
    }
  );

  return data;
};
