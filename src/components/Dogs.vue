<template>
  <div> 
      <h1>Dogs List</h1>
      <div v-bind:style="{display: 'flex', overflow: 'scroll', height: 'auto', width: 'auto'}">
        <dog-card v-for="dog in dogs" 
        :key="dog.id"
        :dog="dog"
        :favorite="false"
        />
      </div>

  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import DogCard from './DogCard'

export default {
    components: {
        DogCard
    },
    computed: {
        ...mapState({
        dogs: state => state.dogs.dogsList,
        }),
    },
    methods: {
        ...mapActions({
            fetchDogBreeds: 'dogs/fetchDogBreeds'
        }),
    },
    created(){
        this.fetchDogBreeds()
    }
}
</script>
<style scoped>

</style>