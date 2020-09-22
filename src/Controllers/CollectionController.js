import axios from 'axios'

// -> import default controller
import Controller from './Controller'

class CollectionController extends Controller {

	getCollections () {
		const { msisdn, cluster } = _.model('user')

		axios.get(`http://api.oston.io/oi-fidelidade/v2/collections?phone=55${msisdn}&cluster=${cluster}`)
		.then((response) => console.log(response))
	}

	getUsers () {
		axios.get('/users')
		.then(({ data }) => {
			this.dispatch('UserModel/saveUsers', data)
		})
	}
}

export default CollectionController
