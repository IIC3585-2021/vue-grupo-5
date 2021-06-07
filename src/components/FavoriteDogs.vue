<template>
  <div> 
      <h1>Favorite Dogs</h1>
      <div v-if="favoriteDogs.length > 0"
        v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in favoriteDogs" 
        :key="dog.id"
        :dog="dog.dog" 
        :favorite="true"
        v-bind:style="{backgroundColor: 'lightpink'}"
        />

        
      </div>
      <p v-else>There are still no favorite dogs</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import DogCard from './DogCard'
export default {
    components: {
        DogCard
    },
    computed: {
        ...mapGetters({
            favoriteDogs: 'favorites/favoriteDogs'
        }),
    },
    methods: {
        ...mapActions('favorites', {
            removeDogFromFavorites: 'removeDogFromFavorites'
        }),
    },
}
</script>
<style scoped>

</style>