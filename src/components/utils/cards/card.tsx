import useDate from 'hooks/useDate';
import Image from '../image';
import styles from './card.module.scss';

type TCard = {
  title: string;
  src: string;
  chanelName: string;
  createdAt: string;
  descripption: string;
};

export default function Card({
  src,
  title,
  chanelName,
  createdAt,
  descripption,
}: TCard) {
  const { difDates } = useDate({ createdAt });
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image width={200} height={150} alt={title} src={src} />
      </div>
      <div className={styles.card_body}>
        <h4 className={styles.card_body_title}>{title}</h4>
        <div className={styles.card_body_details}>
          <span>{chanelName}</span>
          <span>{difDates}</span>
        </div>
        <p className={styles.card_body_description}>{descripption}</p>
      </div>
    </div>
  );
}
