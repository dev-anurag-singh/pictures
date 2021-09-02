import { FETCH_IMAGES, CLEAR__IMAGES, FETCH_HERO_IMAGE } from './types';
import unsplash from '../api/unsplash';

export const fetchImages = (term, page) => async dispatch => {
  if (term) {
    const response = await unsplash.get(
      `/search/photos?query=${term}&per_page=30&page=${page ? page : 1}`
    );

    dispatch({ type: FETCH_IMAGES, payload: response.data.results });
  } else {
    const response = await unsplash.get('/photos', {
      params: {
        page: page ? page : 1,
        per_page: 30,
        order_by: 'popular',
      },
    });
    dispatch({ type: FETCH_IMAGES, payload: response.data });
  }
};

// THIS ACTION CREATOR WILL REMOVE ALL THE IMAGES STORED IN REDUX STORE
export const clearImages = () => {
  return {
    type: CLEAR__IMAGES,
  };
};

// THIS ACTION CREATOR WILL ONLY FETCH A SINGLE HERO IMAGE

export const fetchHeroImage = () => async (dispatch, getState) => {
  if (getState().images.heroImage) {
    return;
  }
  const response = await unsplash.get(`/photos/random`, {
    params: {
      query: 'nature',
    },
  });
  dispatch({ type: FETCH_HERO_IMAGE, payload: response.data });
};
