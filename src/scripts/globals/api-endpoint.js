import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  IMAGE_SMALL: (id) => `${CONFIG.BASE_IMAGE_SMALL}/${id}`,
  IMAGE_MEDIUM: (id) => `${CONFIG.BASE_IMAGE_MEDIUM}/${id}`,
  IMAGE_LARGE: (id) => `${CONFIG.BASE_IMAGE_LARGE}/${id}`,
};

export default API_ENDPOINT;
