import { combineReducers } from 'redux';
import {
  CLEAR__IMAGES,
  FETCH_HERO_IMAGE,
  FETCH_IMAGES,
} from '../actions/types';

const imageState = {
  images: [],
  heroImage: null,
};

const imageReducer = (state = imageState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return { ...state, images: [...state.images, ...action.payload] };
    case FETCH_HERO_IMAGE:
      return { ...state, heroImage: action.payload };
    case CLEAR__IMAGES:
      return { ...state, images: [] };
    default:
      return state;
  }
};

export default combineReducers({
  images: imageReducer,
});
