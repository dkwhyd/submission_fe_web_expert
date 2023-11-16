Feature('Unlike_restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unlike favorite restaurant', async ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see('Data Not Found', '.data-not-found');

  I.amOnPage('/');
  I.seeElement('.restaurant-card');
  I.scrollTo('.content');

  for (let i = 1; i < 4; i++) {
    const getRestaurant = locate('.restaurant_title').at(
      Math.floor(Math.random() * 10),
    );
    const getRestaurantTitle = await I.grabTextFrom(getRestaurant);
    I.click(getRestaurantTitle);
    I.scrollTo('.content');

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/');
    I.scrollTo('.content');
  }

  I.amOnPage('/#/favorite');
  for (let i = 1; i < 3; i++) {
    const getRestaurant = locate('.restaurant_title').at(i);
    const getRestaurantTitle = await I.grabTextFrom(getRestaurant);
    I.click(getRestaurantTitle);
    I.scrollTo('.content');

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.scrollTo('.content');
  }
  I.wait(1);
});
