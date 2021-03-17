import axios from 'axios';

const KEY = 'AIzaSyAhEl5Pam0veo9fMxAgQiXpUZuTNTRFv1M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
