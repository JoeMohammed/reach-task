import { useAppSelector } from 'app/hooks';
import styles from './bar.module.scss';

export default function SearchBar() {
  const data = useAppSelector((state) => state.vidoes.data.data);
  return (
    <section style={{ paddingBottom: '10px' }}>
      <div className="container">
        <div className={styles.bar}>
          <p className={styles.bar_results}>
            About {data?.pageInfo?.totalResults} results
          </p>
          <button className={styles.bar_filter} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Filter</span>
          </button>
        </div>
        <div className={styles.dropdownBar}>
          <div className={styles.dropdownBar_box}>
            <select>
              <option value="0">All:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
            </select>
          </div>
          <div className={styles.dropdownBar_box}>
            <select>
              <option value="0">Any Time:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
