// -> components
import loadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> helpers
import { Toast as toast } from '@/Helpers/Toast';

export default {
	name: 'search',
	components: {
		loadImage
	},
	mounted() {},
	data() {
		return {
			text: ''
		};
	},
	methods: {
		searchSubmit: function(e) {
			if (!this.text) {
				toast('error', 'Por favor insira o que deseja buscar.');
				this.$refs.search.focus();
				return false;
			}

			this.$router.push({
				name: 'Search',
				params: {
					query: this.text
				}
			});
		}
	}
};
