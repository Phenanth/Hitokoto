const state = {
	amount: 0,
	finished: 0,
	notFinished: 0
}

const getters = {
	showTodos: function (state) {
		let todos = {
			amount: state.amount,
			finished: state.finished,
			notFinished: state.notFinished
		}
		return todos
	}
}

const actions = {
	changeState: function ({ commit }, opts) {
		commit('CHANGESTATE', opts)
	},
	initState: function ({ commit }, opts) {
		commit('INITSTATE', opts)
	}
}

const mutations = {
	CHANGESTATE: function (state, opts) {
		state.finished += opts.finishedOpt
		state.notFinished += opts.notFinishedOpt
	},
	INITSTATE: function (state, opts) {
		state.amount = opts.amount
		state.finished = opts.finished
		state.notFinished = opts.notFinished
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}