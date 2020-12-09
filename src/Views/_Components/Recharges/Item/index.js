export default {
	name: 'RechargesItem',
	props: {
		price: {
			type: Number,
			required: true,
			default: () => console.log('Recharge Item: The price is required')
    },
    bonus: {
      type: String,
      required: false,
      default: ''
    }
	}
};
