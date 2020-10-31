window._ = require('lodash');

import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';

// -> begin: vue config
Vue.config.productionTip = false;
// -> end: vue config

// -> begin: set controllers
import { _CONTROLLER } from '@/bootstrap';
_.controller = _CONTROLLER;
_.controllers = [];

const files = require.context('@/Controllers/', true, /\.js$/i);
files.keys().map((key) => {
	const name = key.split('/').pop().split('.')[0];
	_.controllers.push(name);
});
// -> end: set controllers

// -> begin: project exclusive imports
import VueFormulate from '@braid/vue-formulate';
import { pt } from '@braid/vue-formulate-i18n';
import VueClipboard from 'vue-clipboard2';
// -> end: project exclusive imports

// -> begin: styles
// import './assets/scss/app.scss';
// -> end: styles

// -> begin: settings
import Settings, { ANONYMOUS, INTERACTIONS } from '@/config/Settings';
if (!localStorage.getItem(ANONYMOUS)) {
	Settings.anonymous();
}
if (INTERACTIONS) {
	Settings.interactions();
}
// -> end: settings

// mock
// import './mock';

// -> begin: uses
Vue.use(VueFormulate, {
	plugins: [ pt ]
});
Vue.use(VueClipboard)
// -> end: uses

new Vue({
	router: Router,
	store: Store,
  render: (h) => h(App)
}).$mount('#app');
