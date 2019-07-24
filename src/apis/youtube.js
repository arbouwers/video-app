import axios from 'axios';

const KEY = 'AIzaSyA2-DoK_WLOIU9N7rBnADTgwURfcsPqnwY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
