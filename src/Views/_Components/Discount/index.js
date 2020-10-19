// -> import core
import { strOnlyNumber } from '@/Helpers/Misc'

export default {
  name: 'DiscountComponent',
  props: {
    content: {
      type: String,
      required: true,
      default: () => console.log('The discount content is required')
    },
    tenths: {
      type: String,
      required: false,
      default: ''
    },
    unity: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    strOnlyNumber
  }
}
