import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class CollectionController extends Controller {
	model = 'collection';
	loading = 'loading';

	get(id) {
		const { msisdn } = _.model('auth');

		this.dispatch(this.loading, 'loading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/collections/' + id + '?page=1&phone=' + msisdn)
			.then(({ data }) => this.dispatch(this.model, 'collection', data))
			.catch((error) => console.log(error))
			.finally(() => this.dispatch(this.loading, 'loading', false));
	}

	getAll() {
		const { msisdn, cluster } = _.model('auth');
		this.dispatch(this.loading, 'loading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/collections?phone=55' + msisdn + '&cluster=' + cluster)
			.then(({ data }) => {
				this.dispatch(this.model, 'collections', data);
			})
			.catch((error) => console.log(error))
			.finally(() => this.dispatch(this.loading, 'loading', false));
	}
}

export default CollectionController;
