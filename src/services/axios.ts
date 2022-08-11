import axios from 'axios';

const apiKey = 'AIzaSyBSGF8bPjl025MM4sgCn_Ljl8ib0H8oOq0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: '10',
    key: apiKey,
  },
});
