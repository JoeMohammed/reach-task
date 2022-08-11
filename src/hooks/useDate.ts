import { useEffect, useState } from 'react';
import moment from 'moment';

type TDate = {
  createdAt: string;
};

export default function useDate({ createdAt }: TDate) {
  const [difDates, setDifDates] = useState<string>();

  let puplishedAt = moment(createdAt).format('YYYYMMDD');

  useEffect(() => {
    setDifDates(moment(puplishedAt, 'YYYYMMDD').fromNow());
  }, []);
  return { difDates };
}
