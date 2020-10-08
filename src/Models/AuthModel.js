export const defaultState = {
	msisdn: '',
	pin: '',
	hash: '',
	cluster: '',
	balance: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		msisdn: (state) => state.msisdn,
		pin: (state) => state.pin,
		hash: (state) => state.hash,
		cluster: (state) => state.cluster,
		balance: (state) => state.balance
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
		},
		saveCluster({ commit }, value) {
			commit('setCluster', value);
		},
		saveBalance({ commit }, value) {
			commit('setBalance', value);
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
		},
		setCluster(state, value) {
			state.cluster = value;
		},
		setBalance(state, value) {
			state.balance = value;
		}
	}
};
