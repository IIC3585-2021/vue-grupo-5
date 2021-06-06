<template>
    <!-- card -->
  <div v-bind:style="{display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', width: 'auto', height: 'auto', padding: '5px', margin: '3px', borderRadius: '0.25rem'}">
        <img id="image" v-bind:src="`${dog.image.url}`" v-bind:style="{display: 'flex', height: '200px', width: '200px', margin: '20px'}">
        <!-- info -->
        <div v-bind:style="{display: 'flex', flexDirection: 'column', height: '200px', width: '200px', margin: '20px'}">
            <h3>Breed: {{dog.bred_for || "None"}}</h3>
            <h3>Group: {{dog.breed_group || "None"}}</h3>
        </div>
        <button v-if="favorite == true" @click="removeDogFromFavorites(dog)">Delete from Favorites</button>

        <button v-else id="add" onClick="this.disabled=true" @click="addDogToFavorites(dog)">Add to Favorites</button>


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