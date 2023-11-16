import API_ENDPOINT from '../globals/api-endpoint';
import { createReviewTemplate } from '../views/templates/template-creator';

const AddReview = {
  async init({ id, button }) {
    this._id = id;
    this._button = button;
    await this._initialPostRewiew();
  },

  async _initialPostRewiew() {
    this._button.addEventListener('click', async (event) => {
      event.preventDefault();
      await this.postReview();
    });
  },

  _getValue() {
    return JSON.stringify({
      id: this._id,
      name: document.querySelector('#name').value,
      review: document.querySelector('#review').value,
    });
  },

   _clearForm() {
    document.querySelector('#name').value = '';
    document.querySelector('#review').value = '';
  },

  async postReview() {
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: this._getValue(),
      redirect: 'follow',
    };

    fetch(`${API_ENDPOINT.ADD_REVIEW}`, headers)
      .then((response) => response.json())
      .then((result) => this.updateRenderReview(result))
      .catch((error) => console.log('error', error));

    this._clearForm();
  },

  async updateRenderReview(data) {
    const reviewContainer = document.querySelector('.review');
    reviewContainer.innerHTML = '';
    data.customerReviews.forEach((review) => {
      reviewContainer.innerHTML += createReviewTemplate(review);
    });
  },
};
export default AddReview;
