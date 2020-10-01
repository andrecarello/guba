// -> vuex
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// @ is an alias to /src
import Navbar from '@/Views/_Components/Navbar/index.vue';

export default {
	name: 'Home',
	components: {
    navbar: Navbar
	},
	mounted() {
    Settings.title('Home');

		_.controller('collection').getCollections();
	},
	computed: {}
};
