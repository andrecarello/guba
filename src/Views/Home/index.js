// -> vuex
import { mapGetters } from 'vuex';

// -> settings
import Settings from '@/config/Settings';

// @ is an alias to /src
import Container from '@/Views/_Components/Layout/Container/index.vue';
import Navbar from '@/Views/_Components/Navbar/index.vue';
import Search from '@/Views/_Components/Layout/Search/index.vue';
import CarouselBanner from '@/Views/_Components/Carousel/Banner/index.vue';
import Collections from '@/Views/_Components/Collections/index.vue';
import CategoryTabs from '@/Views/_Components/Layout/CategoryTabs/index.vue';

// -> import skeleton
import SkeletonCollections from '@/Views/_Skeletons/Collections/index.vue';

export default {
	name: 'Home',
	components: {
		container: Container,
		navbar: Navbar,
		search: Search,
		banner: CarouselBanner,
		Collections,
		CategoryTabs,

		// -> skeleton
		SkeletonCollections
	},
	mounted() {
		Settings.title('Home');

		_.controller('collection').getAll();
	},
	computed: {
		...mapGetters('CollectionModel', [ 'collections' ]),
		...mapGetters('LoadingModel', [ 'loading' ])
	}
};
