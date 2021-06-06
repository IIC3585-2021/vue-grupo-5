<template>
    <!-- card -->
  <div v-bind:style="{display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', width: 'auto', height: 'auto', padding: '5px', margin: '3px', borderRadius: '0.25rem'}">
        <img id="image" v-bind:src="`${dog.image.url}`" v-bind:style="{display: 'flex', height: '100px', width: '100px', align: 'center'}">
        <!-- info -->
        <div v-bind:style="{display: 'flex', flexDirection: 'column', height: '160px', width: '200px'}">
            <h3>Breed: {{dog.bred_for}}</h3>
            <h3>Group: {{dog.breed_group}}</h3>
        </div>
        <button v-if="favorite == true" @click="removeDogFromFavorites(dog)">Eliminar</button>

        <button v-else @click="addDogToFavorites(dog)">Agregar</button>


  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        dog: {type: Object, required: true},
        favorite: {type: Boolean, required: true}
    },
    methods: {
        ...mapActions('favorites', {
            addDogToFavorites: 'addDogToFavorites',
            removeDogFromFavorites: 'removeDogFromFavorites'
        }),
    },
}
</script>
<style scoped>

</style>