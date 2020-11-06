import Vue from 'vue';
import VueRouter from 'vue-router';

// -> import views
import HomeController from '@/Controllers/HomeController';
import AuthController from '@/Controllers/AuthController';
import OfferController from '@/Controllers/OfferController';
import SearchController from '@/Controllers/SearchController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeController.view(),
		meta: {
			KeepAlive: true, // Need to be cached
			requiresAuth: true
		}
  },
  {
    path: '/oferta/:id/:slug',
    name: 'Offer',
    component: OfferController.view(),
    meta: {
      KeepAlive: false, // Need to be cached
      requiresAuth: true
    }
  },
	{
		path: '/auth',
		name: 'Auth',
		component: AuthController.view(),
		meta: {
			KeepAlive: false, // Need to be cached
			requiresAuth: false
    },
    redirect: '/auth/msisdn',
		children: [
			{
        name: 'AuthMsisdn',
        path: 'msisdn',
				component: AuthController.view('Msisdn')
			},
			{
        name: 'AuthPin',
				path: 'pin',
				component: AuthController.view('Pin')
      }
		]
	},
	{
		path: '/busca/:query',
		name: 'Search',
		component: SearchController.view(),
		meta: {
			KeepAlive: false, // Need to be cached
			requiresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const { hash } = _.model('Auth');

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!hash && hash.length < 40) {
			next({ name: 'Auth' });
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
	}
});

export default router;
