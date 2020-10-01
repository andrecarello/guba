// @ is an alias to /src

// -> import core
import Settings from '@/config/Settings';

// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> import components
import LayoutContainer from '@/Views/_Components/Layout/Container/index.vue';
import HeadersAuth from '@/Views/_Components/Headers/Auth/index.vue';

export default {
	name: 'Auth',
	mounted() {
		Settings.title('Login');
  },
  data() {
    return {
      partners: [
        {
          text: 'Marisa',
          icon: 'marisa'
        },
        {
          text: 'BK',
          icon: 'burger-king'
        },
        {
          text: 'Tok&amp;Stock',
          icon: 'tok-e-stock'
        },
        {
          text: 'Compra Certa',
          icon: 'compra-certa'
        },
        {
          text: 'Netshoes',
          icon: 'netshoes'
        }
      ]
    }
  },
	components: {
    // -> layout
		container: LayoutContainer,
		HeadersAuth,

		// -> helpers
		loadImage: LoadImage
	}
};
