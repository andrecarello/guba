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
	methods: {
    searchSubmit: function(e){
      console.log(this.text);

      this.$router.push({
          name: 'Search',
          params: {
              query: this.text
          }
      })
    },
  }
};
