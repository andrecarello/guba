// -> vuex
import { mapGetters } from 'vuex';

// -> import helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import { slugify } from '@/Helpers/Misc';

// -> components
import Discount from '@/Views/_Components/Discount/index.vue';
import Container from '@/Views/_Components/Layout/Container/index.vue';
import LoadingIcon from '@/Views/_Components/Icons/Loading/index.vue';

// -> import skeleton
import SkeletonSearch from '@/Views/_Skeletons/Search/index.vue';

export default {
	name: 'Search',
	components: {
		container: Container,
		discount: Discount,
		LoadingIcon,

		// -> helpers
		InterseptedImage,

		// -> skeleton
		SkeletonSearch
	},
	methods: {
		// -> helpers
		slugify,

		// -> functions
		more: async function() {
			this.page = this.page + 1;

			this.loading = true;
			await _.controller('search').get(this.query, this.page, () => (this.loading = false));
		},

		submit: function() {
			this.skeleton = true;
      this.page = 1;

			_.controller('search').get(this.form.search, this.page, () => {
				this.$router.push({
					name: 'Search',
					params: {
						query: this.form.search
					}
        });
				this.skeleton = false;
			});
		}
	},
	data() {
		return {
			page: 1,
			query: this.$route.params.query,
			loading: false,

			form: {
				search: ''
			},

			skeleton: true
		};
	},
	mounted() {
		_.controller('search').reset();

		if (!!this.query) _.controller('Search').get(this.query, this.page, () => (this.skeleton = false));
		else this.$router.push({ name: 'Home' });
	},
	computed: {
		...mapGetters('SearchModel', [ 'result', 'lastPage' ])
	}
};
