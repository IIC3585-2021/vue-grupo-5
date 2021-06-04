<template>
    <!-- card -->
  <div v-bind:style="{display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', width: '150px', height: 'auto', padding: '5px', margin: '3px', borderRadius: '0.25rem'}">
        <h1>Raza</h1>
        <img>
        <!-- info -->
        <div v-bind:style="{display: 'flex', flexDirection: 'column', height: '160px'}">
            <h3>{{dog.bred_for}}</h3>
            <h3>{{dog.breed_group}}</h3>
        </div>
        <button @click="addDogToFavorites(dog)">Agregar</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        dog: {type: Object, required: true},
    },
    methods: {
        ...mapActions('favorites', {
            addDogToFavorites: 'addDogToFavorites'
        }),
    },
}
</script>
<style scoped>

</style>