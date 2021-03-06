// -> vuex
import { mapGetters } from 'vuex';

// -> import helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import { slugify } from '@/Helpers/Misc';

// -> componentsÎ
import Discount from '@/Views/_Components/Discount/index.vue';
import Container from '@/Views/_Components/Layout/Container/index.vue';

// -> import skeleton
import SkeletonCollection from '@/Views/_Skeletons/Collection/index.vue';

export default {
	name: 'Category',
	data() {
		return {
			id: this.$route.params.id
		};
	},
	components: {
		container: Container,
		discount: Discount,

		// -> helpers
		InterseptedImage,

		// -> skeleton
		skeleton: SkeletonCollection
	},
	methods: {
		// -> helpers
		slugify
	},
	mounted() {
		_.controller('category').get(this.id);
		window.scrollTo(0, 0);
	},
	computed: {
		...mapGetters('CategoryModel', [ 'category' ]),
		...mapGetters('LoadingModel', [ 'loading' ])
	}
};
