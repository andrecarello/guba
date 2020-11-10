export default {
	name: 'IconsLoading',
	props: {
		height: {
			type: Number,
			required: false,
			default: 20
		},
		width: {
			type: Number,
			required: false,
			default: 20
		},
		fill: {
			type: String,
			required: false,
			default: '#ffffff'
    },
    stroke: {
      type: String,
      required: false,
      default: '#ffffff'
    },
		strokeWidth: {
			type: Number,
			required: false,
			default: 1
		}
	}
};
