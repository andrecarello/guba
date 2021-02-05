export default {
  name: 'OfferPermission',
	props: {
    cluster: {
      type: Number | String,
      required: true,
      default: () => console.error('OFFER PERMISSION - The Cluster is required')
    }
  }
};
