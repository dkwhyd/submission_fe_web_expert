import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurant() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT);
      if (response) {
        const responseJson = await response.json();
        return responseJson.restaurants;
      }
    } catch (error) {
      return error;
    }

    return 'error';
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.log(error);
    }
    return 'error';
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
    const responseJson = await response.json();
    return responseJson;
  }
}
export default RestaurantDbSource;
