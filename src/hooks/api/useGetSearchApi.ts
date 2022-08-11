import api from 'services/api-service';
import { useQueryWrapper } from 'hooks/use-api-wrapper';
import type { UseQueryResult } from 'react-query';
import type { AxiosError } from 'axios';
import { TVidoes } from 'types/vidoes';
import { useAppDispatch } from 'app/hooks';
import { getvidoes } from 'app/video/reducers';

const endpoint = 'search';

type ReturnType = UseQueryResult<TVidoes, AxiosError>;

type TBody = {
  queryText: string ;
};

export function useGetSearchApi({ queryText }: TBody): ReturnType {
  const dispatch = useAppDispatch();
  const queryFn = async () => {
    const { data } = await api.get(endpoint, {
      params: {
        q: queryText,
      },
    });
    dispatch(getvidoes({ data: data }));
    return data;
  };

  return useQueryWrapper(endpoint, queryFn);
}
