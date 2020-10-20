import axios from 'axios';

import { PROTOCOL } from '@/config/Settings';

import Controller from './Controller';

class CategoryController extends Controller {
	getCategories() {
		axios
			.get(`${PROTOCOL}//api.oston.io/oi-fidelidade/v2/categories`)
			.then(({ data }) => {
				this.dispatch('CategoryModel/saveCategories', data);
			})
			.catch((response) => console.error(response))
			.finally(() => {});
	}

	requestCategory(id, page = 1) {
		axios
			.get(`/categories/${id}?page=${page}&phone=55${msisdn}`)
			.then(({ data }) => {
				this.dispatch('CategoryModel/saveCategory', data);
			})
			.catch(() => {})
			.finally(() => {});
	}
}

export default CategoryController;
