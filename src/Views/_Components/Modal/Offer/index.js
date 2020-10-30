// @ is an alias to /src

// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> import icons
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons';

export default {
	name: 'Modal-Offer',
	props: {
		content: {
			type: Object | Array,
			required: true,
			default: () => console.log('The content is required')
		}
	},
	components: {
    // -> icons
		ChevronLeftIcon,
    ChevronRightIcon,

    // -> helpers
    loadImage: LoadImage
	},
	mounted() {},
	computed: {}
};
