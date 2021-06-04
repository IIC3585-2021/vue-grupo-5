<template>
  <div id="app">
    <ProductList/>
    <hr>
    <ShoppingCart />
    <hr>
    <Dogs />
    <hr>
    <FavoriteDogs />
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import Dogs from './components/Dogs'
import FavoriteDogs from './components/FavoriteDogs'

export default {
  name: 'app',
  components:{
    ProductList,
    ShoppingCart,
    Dogs,
    FavoriteDogs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
