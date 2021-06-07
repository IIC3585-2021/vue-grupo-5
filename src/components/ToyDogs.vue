<template>
  <div> 
      <h1>Toy Dogs</h1>
      <div v-if="toyDogs.length > 0"
        v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in toyDogs" 
        :key="dog.id"
        :dog="dog"
        :favorite="false"
        v-bind:style="{backgroundColor: 'lightgreen'}"
        />
      </div>
      <p v-else>No hay perros Toy</p>
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
            toyDogs: 'dogs/toyDogs'
        }),
    },
    methods: {
    }
}
</script>
<style scoped>

</style>