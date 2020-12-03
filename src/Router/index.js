import Vue from 'vue';
import VueRouter from 'vue-router';

// -> import views
import ViewController from '@/Controllers/ViewController';
import ErrorController from '@/Controllers/ErrorController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: ViewController.view('Home'),
		meta: {
			KeepAlive: true, // Need to be cached
			requiresAuth: true
		}
  },
  {
    path: '/oferta/:id/:slug',
    name: 'Offer',
    component: ViewController.view('Offer'),
    meta: {
      KeepAlive: false, // Need to be cached
      requiresAuth: true
    }
  },
  {
		path: '/colecao/:id/:slug',
		name: 'Collection',
		component: ViewController.view('Collection'),
		meta: {
			KeepAlive: false, // Need to be cached
			requiresAuth: true
		}
  },

  {
		path: '/busca/:query?',
		name: 'Search',
		component: ViewController.view('Search'),
		meta: {
			KeepAlive: false, // Need to be cached
			requiresAuth: true
		}
  },

  {
    path: '/faq',
    name: 'Faq',
    component: ViewController.view('Faq'),
    meta: {
      KeepAlive: true,
      requiresAuth: true
    }
  },

	{
		path: '/auth',
		name: 'Auth',
		component: ViewController.view('Auth'),
		meta: {
			KeepAlive: false, // Need to be cached
			requiresAuth: false
    },
    redirect: '/auth/msisdn',
		children: [
			{
        name: 'AuthMsisdn',
        path: 'msisdn',
				component: ViewController.view('Auth/Msisdn')
			},
			{
        name: 'AuthPin',
				path: 'pin',
				component: ViewController.view('Auth/Pin')
      }
		]
	},

  // {
  //   path: '*',
  //   name: 'NOT_FOUND',
  //   component: ErrorController.view(404),
  //   meta: {
  //     KeepAliv: false,
  //     requiresAuth: false
  //   }
  // }
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
