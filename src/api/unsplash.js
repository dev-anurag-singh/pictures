import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID thTJV0R2pwx3gOBJW4bKkAQw7OzerB4aahrFzbenrkw',
  },
});
