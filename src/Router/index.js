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
		component: ViewController.load('Home'),
		meta: {
			KeepAlive: true, // Need to be cached?
			requiresAuth: true
		}
  },

  {
    path: '/oferta/:id/:slug',
    name: 'Offer',
    component: ViewController.load('Offer'),
    meta: {
      KeepAlive: false, // Need to be cached?
      requiresAuth: true
    }
  },

  {
		path: '/colecao/:id/:slug',
		name: 'Collection',
		component: ViewController.load('Collection'),
		meta: {
			KeepAlive: false, // Need to be cached?
			requiresAuth: true
		}
  },

  {
    path: '/categoria/:id/:slug',
    name: 'Category',
    component: ViewController.load('Category'),
    meta: {
      KeepAlive: true,
      requiresAuth: true
    }
  },

  {
		path: '/busca/:query?',
		name: 'Search',
		component: ViewController.load('Search'),
		meta: {
			KeepAlive: false, // Need to be cached?
			requiresAuth: true
		}
  },

  {
    path: '/faq',
    name: 'Faq',
    component: ViewController.load('Faq'),
    meta: {
      KeepAlive: false, // Need to be cached?
      requiresAuth: true
    }
  },

  {
    path: '/termos',
    name: 'Terms',
    component: ViewController.load('Terms'),
    meta: {
      KeepAlive: false, // Need to be cached?
      requiresAuth: true
    }
  },

  {
    path: '/fale-conosco',
    name: 'Contact',
    component: ViewController.load('Contact'),
    meta: {
      KeepAlive: false, // Need to be cached
      requiresAuth: true
    }
  },

	{
		path: '/auth',
		name: 'Auth',
		component: ViewController.load('Auth'),
		meta: {
			KeepAlive: false, // Need to be cached?
			requiresAuth: false
    },
    redirect: '/auth/msisdn',
		children: [
			{
        name: 'AuthMsisdn',
        path: 'msisdn',
				component: ViewController.load('Auth/Msisdn')
			},
			{
        name: 'AuthPin',
				path: 'pin',
				component: ViewController.load('Auth/Pin')
      }
		]
	},

  // {
  //   path: '*',
  //   name: 'NOT_FOUND',
  //   component: ErrorController.load(404),
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
