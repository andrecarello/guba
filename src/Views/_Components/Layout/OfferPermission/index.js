export default {
  name: 'OfferPermission',
	props: {
    cluster: {
      type: String,
      required: true,
      default: () => console.error('OFFER PERMISSION - The Cluster is required')
    }
  }
};
