Feature('Add review');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('Add a review', async ({ I }) => {
  I.waitForElement('.restaurant-card', 3);
  I.scrollTo('.content');

  const getRestaurant = locate('.restaurant_title').at(
    Math.floor(Math.random() * 15),
  );
  const getRestaurantTitle = await I.grabTextFrom(getRestaurant);
  I.click(getRestaurantTitle);
  I.scrollTo('.review-title');
  I.scrollPageToBottom();

  I.seeElement('#name');
  I.seeElement('#review');
  I.seeElement('#send');

  I.fillField('#name', 'John');
  I.fillField('#review', 'Tempatnya bagus dan makanannya enak!');
  I.click('#send');
  I.wait(2);
  I.refreshPage();
  I.scrollPageToBottom();
});
