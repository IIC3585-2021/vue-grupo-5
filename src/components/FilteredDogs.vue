<template>
  <div> 
      <h1>Filtered Dogs</h1>
      <div v-if="filteredDogs.length > 0"
        v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in filteredDogs" 
        :key="dog.id"
        :dog="dog"
        v-bind:style="{backgroundColor: 'lightgreen'}"
        />
      </div>
      <p v-else>No hay perros para las características seleccionadas</p>
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