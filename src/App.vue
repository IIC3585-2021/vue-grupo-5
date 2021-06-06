<template>
  <div id="app">
    <h1> DOG ENCYCLOPEDIA </h1>
    <Dogs />
    <hr>
    <Filters />
    <hr>
    <Applied />
    <hr>
    <FilteredDogs />
    <hr>
    <FavoriteDogs />
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import Filters from './components/Filters'
import Applied from './components/Applied'
import Dogs from './components/Dogs'
import FavoriteDogs from './components/FavoriteDogs'
import FilteredDogs from './components/FilteredDogs'

export default {
  name: 'app',
  components:{
    ProductList,
    ShoppingCart,
    Dogs,
    FavoriteDogs,
    Filters,
    Applied,
    FilteredDogs
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
