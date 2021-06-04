import Vuex from 'vuex'
import Vue from 'vue'

import shop from '@/api/shop'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products:[]
    },
    getters: {
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)

        }
    },
    actions: {
        fetchProducts({commit}) {
            return new Promise ((resolve, reject) => {
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve()
                })
            })
            
        }
    },
    mutations: {
        setProducts(state, products) {

            state.products = products

        }
    }
  })

//const debug = process.env.NODE_ENV !== 'production'

