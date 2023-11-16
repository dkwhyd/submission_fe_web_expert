import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createDetailRestaurant,
  createFormReview,
  createReviewTemplate,
  dataNotFound,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReview from '../../utils/add-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurantdb';

const Detail = {
  async render() {
    return `
          <div id="content" class="content">
             <div id="container" class="container">
              <div class="loader"></div>
             </div>
             <div id="likeButtonContainer"></div>
          </div>`;
  },
  async afterRender() {
    const url = UrlParser.parseActivateUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const contentContainer = document.querySelector('#container');
    if (restaurant.menus) {
      contentContainer.innerHTML = '';
      contentContainer.innerHTML = createDetailRestaurant(restaurant);
      const reviewContainer = document.querySelector('.review');
      restaurant.customerReviews.forEach((review) => {
        reviewContainer.innerHTML += createReviewTemplate(review);
      });

      const formContainer = document.querySelector('#form');
      formContainer.innerHTML = createFormReview();

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });

      AddReview.init({
        id: restaurant.id,
        button: document.querySelector('#send'),
      });
    } else {
      contentContainer.innerHTML = '';
      contentContainer.innerHTML = dataNotFound();
    }
  },
};

export default Detail;
