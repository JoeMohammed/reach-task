export type TVidoes = {
  data: {
    etag: string;
    items: {
      etag: string;
      id: { kind: string; videoId: string };
      kind: string;
      snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: {
          default: {
            height: number;
            width: number;
            url: string;
          };
          high: {
            height: number;
            width: number;
            url: string;
          };
          medium: {
            height: number;
            width: number;
            url: string;
          };
        };
        title: string;
      };
    }[];
    kind: string;
    nextPageToken: string;
    pageInfo: {
      resultsPerPage: number;
      totalResults: number;
    };
    regionCode: string;
  };
};
