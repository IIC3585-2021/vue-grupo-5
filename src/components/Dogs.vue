<template>
  <div> 
      <h1>Dogs List</h1>
      <div v-bind:style="{display: 'flex'}">
        <dog-card v-for="dog in allDogs" 
        :key="dog.id"
        :dog="dog"
        />
      </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import DogCard from './DogCard'

export default {
    data() {
        return {
            allDogs: [{"bred_for": "Small rodent hunting", "breed_group": "Toy"},
            {"bred_for": "Bulldog", "breed_group": "Toy"},
            {"bred_for": "Doberman", "breed_group": "Giant"},
            {"bred_for": "Husky", "breed_group": "Toy"}]
        }
    },
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