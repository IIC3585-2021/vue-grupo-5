<template>
    <!-- card -->
  <div v-bind:style="{display: 'flex', flexDirection: 'column', backgroundColor: 'lightblue', width: 'auto', height: 'auto', padding: '5px', margin: '3px', borderRadius: '0.25rem'}">
        <img id="image" v-bind:src="`${dog.image.url}`" v-bind:style="{display: 'flex', height: '200px', width: '200px', margin: '20px'}">
        <!-- info -->
        <div  v-if="favorite == true" v-bind:style="{display: 'flex', flexDirection: 'column', height: 'auto', width: '200px', margin: '20px'}">
            <h4>Breed: {{dog.bred_for || "None"}}</h4>
            <h4>Group: {{dog.breed_group || "None"}}</h4>
            <p v-if="favorite == true" :id="dog.id">-</p>
        </div>
        <div  v-else v-bind:style="{display: 'flex', flexDirection: 'column', height: '150px', width: '200px', margin: '20px'}">
            <h4>Breed: {{dog.bred_for || "None"}}</h4>
            <h4>Group: {{dog.breed_group || "None"}}</h4>
        </div>
        <button v-if="favorite == true" :id="'seeMore-button' + dog.id" @click="moreInfo(dog)">See More</button>
        <button v-if="favorite == true" @click="removeFromFavorites(dog)">Delete from Favorites</button>
        
        <button v-if="filtered == true" :id="'add-button-filtered' + dog.id" onClick="this.disabled=true" @click="addToFavorites(dog)">Add to Favorites</button>

        <button v-if="favorite == false && filtered == false" :id="'add-button' + dog.id" onClick="this.disabled=true" @click="addToFavorites(dog)">Add to Favorites</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    props: {
        dog: {type: Object, required: true},
        favorite: {type: Boolean, required: true},
        filtered: {type: Boolean, required: true}
    },
    computed: {
        ...mapGetters({
            isInFilter: 'applied/isInFilter',
        }),
    },
    methods: {
        ...mapActions('favorites', {
            addDogToFavorites: 'addDogToFavorites',
            removeDogFromFavorites: 'removeDogFromFavorites'
        }),
        moreInfo: function(dog) {
            console.log(document.getElementById(dog.id).innerHTML)
            var id = "seeMore-button" + dog.id;
            var life = dog.life_span || "None"
            var origin = dog.origin || "None"
            var temperament = dog.temperament || "None"
            if (document.getElementById(dog.id).innerHTML == "-") {
                document.getElementById(dog.id).innerHTML= "Life Span: " + life + ";\n Origin: " + origin + ";\n Temperament: " + temperament;
                document.getElementById(id).innerHTML= 'See Less';
            } else {
                document.getElementById(dog.id).innerHTML= "-";
                document.getElementById(id).innerHTML= 'See More';
            }
        },
        addToFavorites: function(dog){
            if(this.isInFilter(dog)){
                    document.getElementById("add-button-filtered" + dog.id).disabled = true;
                }
                document.getElementById("add-button" + dog.id).disabled = true;
                this.addDogToFavorites(dog);
        },
        removeFromFavorites: function(dog){
                if(this.isInFilter(dog)){
                    document.getElementById("add-button-filtered" + dog.id).disabled = false;
                }
                document.getElementById("add-button" + dog.id).disabled = false;
                this.removeDogFromFavorites(dog);


        },
    },
}
</script>
<style scoped>

</style>