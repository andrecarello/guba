import axios from 'axios';

import Controller from './Controller';

class CategoryController extends Controller {
  model = 'category';
  loading = 'loading';
	baseUrl = 'http://api.oston.io/oi-fidelidade/v2/categories';

	getAll() {
		axios
			.get(this.baseUrl)
			.then(({ data }) => {
				this.dispatch(this.model, 'categories', data);
			})
			.catch((response) => console.error(response))
			.finally(() => {});
	}

	get(id, page = 1) {
    const { msisdn } = _.model('auth');
    this.dispatch(this.loading, 'loading', true);

		axios
			.get(this.baseUrl + '/' + id + '?page=' + page + '&phone=55' + msisdn)
			.then(({ data }) => this.dispatch(this.model, 'category', data))
			.catch((response) => console.error(response))
			.finally(() => this.dispatch(this.loading, 'loading', false));
	}
}

export default CategoryController;
