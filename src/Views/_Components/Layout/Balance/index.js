// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src

export default {
  name: 'Balance',
  computed: {
    ...mapGetters('AuthModel', ['balance'])
  }
};
