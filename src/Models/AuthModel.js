export const defaultState = {
	pin: '',
	hash: '',
	msisdn: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		msisdn: (state) => state.msisdn,
		pin: (state) => state.pin,
		hash: (state) => state.hash
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveMsisdn({ commit }, value) {
			commit('setMsisdn', value);
		},
		savePin({ commit }, value) {
			commit('setPin', value);
		},
		saveHash({ commit }, value) {
			commit('setHash', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setMsisdn(state, value) {
			state.msisdn = value;
		},
		setPin(state, value) {
			state.pin = value;
		},
		setHash(state, value) {
			state.hash = value;
		}
	}
};
