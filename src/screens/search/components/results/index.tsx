import { useAppSelector } from 'app/hooks';
import Card from 'components/utils/cards/card';
import useGetSearch from 'screens/search/hooks/useGetSearch';

export default function ResultsSection() {
  const vidoes = useAppSelector((state) => state?.vidoes?.data.data);
  const { error, isError, isLoading } = useGetSearch();

  if (isLoading) {
    return (
      <div className="container">
        <h2 className="text-center">Loading ...</h2>;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h2 className="text-center">{error?.message}</h2>;
      </div>
    );
  }

  return (
    <section style={{ paddingTop: '10px' }}>
      <div className="container">
        {vidoes?.items?.map((item, idx) => {
          return (
            <Card
              key={idx}
              title={item?.snippet?.title}
              src={item?.snippet?.thumbnails?.high?.url}
              chanelName={item?.snippet?.channelTitle}
              createdAt={item?.snippet?.publishedAt}
              descripption={item?.snippet?.description}
            />
          );
        })}
      </div>
    </section>
  );
}
