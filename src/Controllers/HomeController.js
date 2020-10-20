import axios from 'axios'

// -> import default controller
import Controller from './Controller'

class HomeController extends Controller {
	static view() {
		return () => import(/* webpackChunkName: "home" */ '../Views/Home/index.vue')
	}
}

export default HomeController
