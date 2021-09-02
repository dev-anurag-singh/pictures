import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID 0AEy4g-Xmva-zkhLJXmJeDMt-NbWncAL3vij218dmM0`, //${process.env.REACT_APP_SECRET_KEY}
  },
});
