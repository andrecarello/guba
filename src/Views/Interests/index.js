// -> core
import { mapGetters } from 'vuex';

// -> import components
import LayoutButton from '@/Views/_Components/Layout/Button/index.vue';

// -> import icons
import OiIcon from '@/Views/_Components/Icons/Oi.vue';

// -> import skeleton
import SkeletonInterests from '@/Views/_Skeletons/Interests/index.vue';

export default {
	name: 'Interests',
	data() {
		return {
			saving: false
		};
	},
	components: {
		btn: LayoutButton,

		// -> icons
		OiIcon,

		// -> skeleton
		skeleton: SkeletonInterests
	},
	mounted() {
		_.controller('interests').getAll(() => _.controller('interests').get());
	},
	methods: {
    save: function () {},
    check: function (id) {
      this.selected.find(function(a, i) {
        console.log(a.id === id);
        return a.id === id
      });
    }
	},
	computed: {
		...mapGetters('InterestsModel', [ 'areas', 'selected' ]),
		...mapGetters('LoadingModel', [ 'loading' ])
	}
};
