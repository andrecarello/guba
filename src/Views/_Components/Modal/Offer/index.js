// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';
import LoadingComponent from '@/Views/_Components/Helpers/Loading/index.vue';
import {isClient} from '@/Helpers/Auth'

// -> import icons
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons';

export default {
	name: 'ModalOffer',
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
    loadImage: LoadImage,
    loading: LoadingComponent
	},
	methods: {
    isClient
  }
};
