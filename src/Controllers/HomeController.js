import axios from 'axios'

// -> import default controller
import Controller from './Controller'

class HomeController extends Controller {
	static view() {
		return () => import(/* webpackChunkName: "home" */ '../Views/Home/index.vue')
	}

	index () {
		this.dispatch('UserModel/saveUser', {
			name: "André",
			lastName: "Carello"
		})
	}

	getUsers () {
		axios.get('/users')
		.then(({ data }) => {
			this.dispatch('UserModel/saveUsers', data)
		})
	}
}

export default HomeController
