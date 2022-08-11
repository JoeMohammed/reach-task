import { useAppDispatch } from 'app/hooks';
import { getvidoes } from 'app/video/reducers';
import { useGetSearchApi } from 'hooks/api/useGetSearchApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGetSearch() {
  const [queryTxt, setQueryTxt] = useState<string>('');
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    isLoading,
    isError,
    error,
    data: videosData,
    refetch,
  } = useGetSearchApi({ queryText: queryTxt });

  useEffect(() => {
    setQueryTxt(location.search.replace('?query=', ''));
  }, [location]);

  useEffect(() => {
    refetch();
    dispatch(getvidoes({ data: videosData }));
  }, [queryTxt, videosData]);

  return { isLoading, isError, error };
}
