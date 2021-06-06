import shop from "@/api/shop";

export default {
    namespaced: true,
    state: {
        allFilters: []
    },
    getters: {
        availableFilters(state, getters) {
            return state.allFilters

        }
       
    },
    mutations: {
        setFilters(state, filters) {
            console.log("setting filters", filters)
            state.allFilters = filters

        }
    },
    actions: {
        fetchFilters({commit}) {
            return new Promise ((resolve, reject) => {
                shop.getFilters(filters => {
                    console.log("hola", filters)
                    commit('setFilters', filters)
                    resolve()
                })
            })
        },
    }
}