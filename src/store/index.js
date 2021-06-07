import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import dogs from './modules/dogs'
import favorites from './modules/favorites'
import applied from './modules/applied'
import filters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products,
        dogs,
        favorites,
        filters,
        applied
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

