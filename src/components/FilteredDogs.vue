<template>
  <div> 
      <h1>Filtered Dogs</h1>
      <div v-if="filteredDogs.length > 0"
        v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in filteredDogs" 
        :key="dog.id"
        :dog="dog"
        :favorite="false"
        v-bind:style="{backgroundColor: 'lightgreen'}"
        />
      </div>
      <p v-else>There are no dogs matching the selection</p>
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
            filteredDogs: 'applied/filteredDogs'
        }),
    },
    methods: {
    }
}
</script>
<style scoped>

</style>