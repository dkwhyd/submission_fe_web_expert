import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantTemplate = (data) => `
        <div class="restaurant-card">
        <p class="city" tabindex=0 > Kota ${data.city} </p>
        <picture>
        <source type="image/webp" srcset="${API_ENDPOINT.IMAGE_SMALL(
          data.pictureId,
        )}"> 
        <source type="image/jpeg" srcset="${API_ENDPOINT.IMAGE_SMALL(
          data.pictureId,
        )}">
        <img loading="lazy" class="restaurant-image lazyload" data-src="${API_ENDPOINT.IMAGE_SMALL(
          data.pictureId,
        )}" alt="foto ${data.name}" tabindex=0 >
        </picture>
        <div class="card-body">
        <p class="rating" tabindex=0 > <i class="fa-solid fa-star-half-stroke" aria-label="rating">${
          data.rating
        }</i>  </p>
        <h3 tabindex=0 class="restaurant_title"><a href="#/detail/${data.id}">${
  data.name
}</a></h3>
        <p class="desc" tabindex=0 >${data.description} </p>
        </div>  
`;

const createDetailRestaurant = (data) => `
        <h3 class="restaurant-name" tabindex=0>${data.name}</h3>
        <div class="information">
                <div>  
                        <img class="restaurant-image-detail lazyload" data-src="${API_ENDPOINT.IMAGE_MEDIUM(
                          data.pictureId,
                        )}" alt="Gambar ${data.name}" class="restaurant-image">
                </div>
                <div class="side-info">
                        <h4 class="info-title">Information</h3>
                        <p class="restaurant-rating" tabindex=0 >Rating : ${
                          data.rating
                        }</p>
                        <p class="restaurant-address" tabindex=0 >Alamat : ${
                          data.address
                        } ${data.city}</p>
                        <p class="restaurant-city" tabindex=0 >Kota :${
                          data.city
                        }</p>
                        <h4 class="desc-title" tabindex=0>Description</h4>
                        <p class="restaurant-description" tabindex=0>${
                          data.description
                        }</p>
                </div>
        </div>
        <div>
                <h4 class="menu-title" tabindex=0>Menu</h4>
                <h4 class="food-title" tabindex=0>Foods</h4>
                <ul class="food-menu">
                ${data.menus.foods
                  .map((food) => `<li tabindex=0>${food.name}</li>`)
                  .join('')}
                </ul>
                <h4 class="drink-title" tabindex=0>Drink</h4>
                <ul class="drink-menu">
                ${data.menus.drinks
                  .map((drink) => `<li tabindex=0>${drink.name}</li>`)
                  .join('')}
                </ul>
        </div>
       
       
        <h4 class="review-title" tabindex=0>Customer Reviews</h4>
  
        <div class="review">
        </div>
    <div >
    <h4>Add Review</h4>
    <div id="form" class="review-form" ></div>
    </div>
        </div>
`;
const createReviewTemplate = (data) => `
        <div class="review-content">
                <p class="review-name">${data.name}</p>
                <p class="review-text">${data.review}</p>
                <p class="review-date">${data.date}</p>
        </div>

`;
const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
         <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnlikedMovieButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReview = () => `
        <form>
                <div class="form-group">
                        <label for="name">Nama:</label>
                        <input type="text" id="name" name="nama" placeholder="Masukkan nama Anda" required>
                </div>
                <div class="form-group">
                        <label for="review">Review:</label>
                        <textarea id="review" name="review" placeholder="Tulis review Anda" required></textarea>
                </div>
                <div id="message"></divi>
                <button type="submit" id="send">Kirim</button>
        </form>

`;
const loadingData = () => `
        <div class="loader">
        </div>
`;
const dataNotFound = () => `
        <div class="data-not-found"> 
        <h4>Data Not Found</h4>
        </div>
`;
export {
  createRestaurantTemplate,
  createDetailRestaurant,
  createReviewTemplate,
  createLikeMovieButtonTemplate,
  createUnlikedMovieButtonTemplate,
  createFormReview,
  loadingData,
  dataNotFound,
};
