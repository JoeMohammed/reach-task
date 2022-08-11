import styles from './section.module.scss';

export default function MainSection() {
  return (
    <section className={styles.section}>
      <div className="container h-full">
        <h2 className={styles.section_title}>
          Welcome to Youtube, Search for you need...
        </h2>
      </div>
    </section>
  );
}
