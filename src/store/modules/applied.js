export default {
    namespaced: true,
    state: {
        applied: []
    },
    getters: {
        appliedFilters(state, getters, rootState, rootGetters) {
            return state.applied
            
        },
        filteredDogs (state, getters, rootState, rootGetters) {
            const filtrados = rootState.dogs.dogsList.filter(dog => state.applied.includes(dog.breed_group))
            console.log(filtrados)
            return filtrados
            
        }
    },
    mutations: {
        addFilter (state, filter) {
            console.log("addeando filtro")
            state.applied.push(filter)
        },
        clearFilters(state) {
            state.applied = []
        }
    },
    actions: {
        addFilter ({state, getters, commit, rootState, rootGetters}, filter) {
            commit('addFilter', filter)
        },
        clearFilters ({state, getters, commit, rootState, rootGetters}, filter) {
            commit('clearFilters')
        }
        
    }
}