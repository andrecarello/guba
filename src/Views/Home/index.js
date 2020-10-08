// -> vuex
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// @ is an alias to /src
import Container from '@/Views/_Components/Layout/Container/index.vue';
import Navbar from '@/Views/_Components/Navbar/index.vue';
import Search from '@/Views/_Components/Layout/Search/index.vue';
import CarouselBanner from '@/Views/_Components/Carousel/Banner/index.vue'

export default {
	name: 'Home',
	components: {
		container: Container,
		navbar: Navbar,
    search: Search,
    banner: CarouselBanner
	},
	mounted() {
		Settings.title('Home');

		_.controller('collection').getCollections();
	},
  computed: {
    ...mapGetters('CollectionModel', ['collections']),
    ...mapGetters('LoadingModel', ['loading'])
  },
};
