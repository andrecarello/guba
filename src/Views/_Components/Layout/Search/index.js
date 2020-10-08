// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src
import loadImage from '@/Views/_Components/Helpers/Image/index.vue'

export default {
	name: 'search',
	components: {
    loadImage
  },
  mounted() {},
  data() {
    return {
      text: ''
    }
  },
	computed: {}
};
