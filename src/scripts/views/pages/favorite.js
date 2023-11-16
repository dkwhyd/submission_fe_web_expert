import FavoriteRestaurantIdb from '../../data/favorite-restaurantdb';
import {
  createRestaurantTemplate,
  dataNotFound,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
               <div class="content">
            <h2>Favorite</h2>
            <div id="restaurant-list" class="restaurant-list" >
            </div>
        </div>
          `;
  },
  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const moviesContainer = document.querySelector('#restaurant-list');
    if (restaurant.length) {
      restaurant.forEach((movie) => {
        moviesContainer.innerHTML += createRestaurantTemplate(movie);
      });
    } else {
      moviesContainer.innerHTML += dataNotFound();
    }
  },
};

export default Favorite;
