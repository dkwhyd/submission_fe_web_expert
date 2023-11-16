import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantTemplate,
  dataNotFound,
} from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
        <div class="content">
            <h2>Restaurant</h2>
            <div id="restaurant-list" class="restaurant-list" >
              <div class="loader"></div>
            </div>
        </div>`;
  },
  async afterRender() {
    const restaurant = await RestaurantDbSource.restaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
      restaurantContainer.innerHTML = '';
    if (restaurant.length) {
      restaurant.forEach((data) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(data);
      });
    } else {
      restaurantContainer.innerHTML = '';
      restaurantContainer.innerHTML += dataNotFound();
    }
  },

  async offlineRender() {
    return `
    <h2>offline</h2>
    `;
  },
};

export default Restaurant;
