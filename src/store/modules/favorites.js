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
        removeDogFromFavorites (state, dog) {
            const clean = state.favoriteDogsList.filter(item => item.dog !== dog)
            state.favoriteDogsList = clean
        },
    },
    actions: {
        addDogToFavorites ({commit}, dog) {
            commit('pushDogToFavorites', dog)
        },
        removeDogFromFavorites ({commit}, dog) {
            commit('removeDogFromFavorites', dog)
        },
    }
}