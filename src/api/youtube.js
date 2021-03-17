import axios from 'axios';

const KEY = 'AIzaSyBq_AjaU7R-Nopxm6PKGWvUY5O0r6JsvMM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
