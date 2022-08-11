import FormInput from 'components/utils/input';
import Search from 'components/utils/svg/search';
import useSearch from 'hooks/useSearch';

export default function SearchForm() {
  const { register, errors, onSubmit } = useSearch();
  return (
    <form className="form form__search" onSubmit={onSubmit}>
      <div className="form_group">
        <FormInput
          type="search"
          placeholder="Type your search"
          register={register}
          inputName="query"
        />
      </div>
      <div className="form__search_submit">
        <button type="submit">
          <Search />
        </button>
      </div>
      <div
        className={`form__search_errors ${
          errors?.query
            ? 'form__search_errors__block'
            : 'form__search_errors__hidden'
        }`}
      >
        {errors?.query?.message}
      </div>
    </form>
  );
}
