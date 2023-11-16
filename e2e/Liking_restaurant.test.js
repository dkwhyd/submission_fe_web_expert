Feature('liking_restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.scrollTo('.content');
  I.see('Data Not Found', '.data-not-found');
});

Scenario('Like one restaurant', async ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('Data Not Found', '.data-not-found');
  I.amOnPage('/');
  I.scrollTo('.content');

  I.seeElement('.restaurant-card');
  const firstRestaurant = locate('.restaurant_title').first();
  const getRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(getRestaurantTitle);
  I.scrollTo('.content');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.scrollTo('.content');
});
