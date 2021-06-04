<template>
  <div> 
      <h1>Shopping Cart</h1>
      <ul>
          <li v-for="product in products" :key="product.id">
              {{ product.title}} - {{ product.price | currency }} - {{ product.quantity }}
          </li>
      </ul>
      <p>Total: {{ total | currency }}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>
</template>

<script>
import DogCard from './DogCard'
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    components: {
        DogCard
    },
    computed: {
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotal'
        }),
        ...mapState('cart', {
            checkoutStatus: state => state.checkoutStatus
        })
    },
    methods: {
        ...mapActions('cart', ['checkout'])
    }
}
</script>
<style scoped>

</style>