import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class CollectionController extends Controller {
	get(id) {
		const { msisdn } = _.model('auth');

		this.dispatch('LoadingModel/saveLoading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/collections/' + id + '?page=1&phone=' + msisdn)
			.then(({ data }) => this.dispatch('CollectionModel/saveCollection', data))
			.catch((error) => console.log(error))
			.finally(() => this.dispatch('LoadingModel/saveLoading', false));
	}

	getAll() {
		const { msisdn, cluster } = _.model('auth');
		this.dispatch('LoadingModel/saveLoading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/collections?phone=55' + msisdn + '&cluster=' + cluster)
			.then(({ data }) => {
				this.dispatch('CollectionModel/saveCollections', data);
			})
			.catch((error) => console.log(error))
			.finally(() => this.dispatch('LoadingModel/saveLoading', false));
	}
}

export default CollectionController;
