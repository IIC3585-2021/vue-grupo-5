export default {
    namespaced: true,
    state: {
        favoriteDogsList: [],
    },
    getters: {
        favoriteDogs (state) {
            return state.favoriteDogsList
        },   
    },
    mutations: {
        pushDogToFavorites (state, dog) {
            state.favoriteDogsList.push({
                dog: dog
            })
        },
    },
    actions: {
        addDogToFavorites ({commit}, dog) {
            commit('pushDogToFavorites', dog)
        },
    }
}