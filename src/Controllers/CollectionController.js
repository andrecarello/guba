import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class CollectionController extends Controller {
	getCollections() {
		const { msisdn, cluster } = _.model('auth');
		this.dispatch('LoadingModel/saveLoading', true);

		axios
			.get(`http://api.oston.io/oi-fidelidade/v2/collections?phone=55${msisdn}&cluster=${cluster}`)
			.then(({ data }) => {
				this.dispatch('CollectionModel/saveCollections', data);
			})
			.catch((error) => console.log(error))
			.finally(() => this.dispatch('LoadingModel/saveLoading', false));
	}

	getUsers() {
		axios.get('/users').then(({ data }) => {
			this.dispatch('UserModel/saveUsers', data);
		});
	}
}

export default CollectionController;
