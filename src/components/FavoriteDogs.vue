<template>
  <div> 
      <h1>Favourite Dogs</h1>
      <div v-if="favoriteDogs.length > 0"
        v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in favoriteDogs" 
        :key="dog.id"
        :dog="dog.dog"
        v-bind:style="{backgroundColor: 'lightpink'}"
        />
      </div>
      <p v-else>No tienes perros seleccionados</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
    }
}
</script>
<style scoped>

</style>