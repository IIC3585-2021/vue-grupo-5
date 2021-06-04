<template>
    <!-- card -->
  <div v-bind:style="{display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', width: '150px', height: 'auto', padding: '5px', margin: '3px', borderRadius: '0.25rem'}">
        <h1>Raza</h1>
        <img>
        <!-- info -->
        <div>
            <h3>{{dog.bred_for}}</h3>
            <h3>{{dog.breed_group}}</h3>
        </div>
        <button @click="addDogToFavorites(dog)">Seleccionar</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        dog: {type: Object, required: true},
    },
    methods: {
        ...mapActions({
            addDogToFavorites: 'dogs/addDogToFavorites'
        }),
    },
}
</script>
<style scoped>

</style>