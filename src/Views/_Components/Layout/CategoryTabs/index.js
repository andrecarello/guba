// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src
import { slugify } from '@/Helpers/Misc';
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

export default {
	name: 'CategoryTabs',
	data() {
		return {
			tabs: [],
			active: false,
			target: ''
		};
	},
	methods: {
		slugify,
		selectTab: function(e) {
			this.tabs.forEach((tab) => {
        tab.classList.remove('selected')
        this.$refs[tab.name].classList.remove('active')

				if (e.target.name === tab.name) {
          tab.classList.add('selected')
          this.$refs[e.target.name].classList.add('active')
        }
			});
		}
	},
	components: {
		// -> helpers
		loadImage: LoadImage
	},
	mounted() {
		this.tabs = this.$refs.tabs.children;

		_.controller('category').getCategories();
	},
	computed: {
		...mapGetters('CategoryModel', [ 'categories' ])
	}
};
