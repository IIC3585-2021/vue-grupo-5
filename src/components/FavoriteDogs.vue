<template>
  <div> 
      <h1>Favourite Dogs</h1>
      <div v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in favoriteDogs" 
        :key="dog.id"
        :dog="dog.dog"
        />
      </div>
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