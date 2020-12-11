// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';
import { slugify } from '@/Helpers/Misc';

// -> icons
import { ChevronDownIcon } from 'vue-feather-icons';

export default {
	name: 'CarouselPlanItem',
	components: {
		// -> helpers
		loadImage: LoadImage,

		// -> icons
		chevronIcon: ChevronDownIcon
	},
	data() {
		return {
			show: false
		};
	},
	props: {
		plan: {
			type: Object,
			required: true,
			default: () => console.log('CAROUSEL PLAN: The plan is required')
		}
	},
	methods: {
    slugify,
		apps: function(str) {
			if (typeof str !== 'string') {
				console.log('Apps need to be a string');
				return false;
			}

			return str.toLowerCase().split(',');
		}
	}
};
