// -> import default controller
import Controller from './Controller';

class ErrorController extends Controller {
	static view(file) {
		if (!!file) {
			return () => import(/* webpackChunkName: "[request]" */ `@/Views/Error/${file}/index.vue`);
    }

    throw Error('The view file is required')
	}
}

export default ErrorController;
