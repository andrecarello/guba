export const defaultState = {
	areas: [],
	selected: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		areas: (state) => state.areas,
		selected: (state) => state.selected
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveAreas({ commit }, value) {
			commit('setAreas', value);
		},
		saveSelected({ commit }, value) {
			commit('setSelected', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setAreas(state, value) {
			state.areas = value;
		},
		setSelected(state, value) {
			state.selected = value;
		}
	}
};
