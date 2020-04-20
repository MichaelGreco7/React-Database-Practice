import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID DR9qxQfIxJjbBh2hO4l6CEKXFwjPGPPxQu3FmmgZCD4',
  },
});
