// -> import helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import { slugify } from '@/Helpers/Misc';
import { offerPermission } from '@/Helpers/Auth';

// -> components
import Discount from '@/Views/_Components/Discount/index.vue';
import OfferPermission from '@/Views/_Components/Layout/OfferPermission/index.vue';

// -> import icons
import { ChevronRightIcon, Share2Icon } from 'vue-feather-icons';


export default {
	name: 'Collections',
	props: {
		content: {
			type: Object,
			required: true,
			default: () => console.log('The content are required')
		}
	},
	components: {
		discount: Discount,
		permission: OfferPermission,

		// -> helpers
		InterseptedImage,

		// -> icons
    chevronIcon: ChevronRightIcon,
    shareIcon: Share2Icon
	},
	methods: {
		// -> helpers
    slugify,
    offerPermission
	}
};
