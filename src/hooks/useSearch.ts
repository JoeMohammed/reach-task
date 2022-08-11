import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from 'schema/search.schema';
import { useAppDispatch } from 'app/hooks';
import { getvidoes } from 'app/video/reducers';
import { useNavigate, createSearchParams } from 'react-router-dom';
import api from 'services/api-service';
import { TVidoes } from 'types/vidoes';

type TFormData = {
  query: string;
};

export default function useSearch() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(searchSchema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    const { data }: TVidoes = await api.get('search', {
      params: {
        q: formData,
      },
    });
    dispatch(getvidoes({ data: data }));
    navigate({
      pathname: '/search',
      search: createSearchParams(formData).toString(),
    });
  });

  return { register, errors, onSubmit };
}
