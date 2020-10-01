// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src

export default {
	name: 'Msisdn',
	computed: {
    ...mapGetters('AuthModel', ['msisdn'])
  }
};
