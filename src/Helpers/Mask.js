export const Masks = {

	msisdn: function (value) {
		let __regEx = value
					.replace(/\D/g, '')
					.replace(/(\d{2})(\d)/, '($1) $2')
					.replace(/(\d{5})(\d)/, '$1 $2')
					.replace(/(\d{5}).(\d{4})\d+?$/, '$1 $2');

		return __regEx;
	},

	pin: function (value) {
		let __regEx = value
					.replace(/\D/g, '')
					.replace(/(\d{4})\d+?$/, '$1');

		return __regEx;
  },

  user: function (value) {
    let __regEx = value.replace(/[A-Za-z, ]/g, '')

    return __regEx
  },

  unset: function (value) {
    return value.replace(/\D/g, "")
  }
}
