class ViewController {
	static view(file) {
		return () => import(/* webpackChunkName: "[request]" */ `@/Views/${file}/index.vue`);
	}
}

export default ViewController;
