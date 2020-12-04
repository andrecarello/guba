class ViewController {
	static load(file) {
		return () => import(/* webpackChunkName: "[request]" */ `@/Views/${file}/index.vue`);
  }
}

export default ViewController;
