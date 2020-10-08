// -> vuex
import { mapGetters } from 'vuex';
import {Masks} from '@/Helpers/Mask'

// @ is an alias to /src

export default {
	name: 'Msisdn',
	computed: {
    ...mapGetters('AuthModel', ['msisdn'])
  },
  methods: {
    formated(value) {
      return Masks.msisdn(value)
    }
  }
};
