import dogBreeds from "@/api/dogs";

export default {
    namespaced: true,
    state: {
        dogsList: []
    },
    getters: {
    },
    mutations: {
        setDogs(state, dogs) {
            state.dogsList = dogs

        },
    },
    actions: {
        fetchDogBreeds({commit}) {
            return new Promise ((resolve, reject) => {
                console.log("estos son")
                dogBreeds.getDogs(dogs => {
                    commit('setDogs', dogs)
                    resolve()
                })
            })
        },

    }
}