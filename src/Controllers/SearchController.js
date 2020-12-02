import axios from 'axios';

// -> import default controller
import Controller from './Controller';

import { strOnlyNumber } from '../Helpers/Misc';

class SearchController extends Controller {
	model = 'search';
	loading = 'loading';

	reset() {
		this.dispatch(this.model, 'result', []);
	}

	get(value, page = 1, callback) {
		this.dispatch(this.loading, 'loading', true);

		const { msisdn } = _.model('auth');

		axios
			.get(
				`http://api.oston.io/oi-fidelidade/v2/services/1/search?q=${value}&page=${page}&phone=${strOnlyNumber(
					msisdn
				)}`
			)
			.then(({ data }) => {
				// -> get storage actual state
				let result = _.model(this.model).result;

				// -> concat actual state with the request array
				result = result.concat(data.pagination.data);

				// -> save on storage
				this.dispatch(this.model, {
          'result': result,
          'lastPage': data.pagination.last_page
        });
			})
			.catch(({ response }) => {
				console.error(response.statusText);
			})
			.finally(() => {
				callback();
			});
	}
}

export default SearchController;
