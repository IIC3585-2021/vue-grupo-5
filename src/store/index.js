import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import dogs from './modules/dogs'
import favorites from './modules/favorites'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products,
        dogs,
        favorites
    },
    state: {  
    },
    getters: {
    },
    actions: actions,
    mutations: {  
    }
  })

//const debug = process.env.NODE_ENV !== 'production'

