<template>
  <div> 
      <h1>Breed Group filters</h1>
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
      <ul v-else>
          <li v-for="filter in filters" :key="filter">
            {{filter}} 
            <button 
            @click="addFilter(filter)">Add filter</button>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            loading:false
        }
    },
    computed: {
        ...mapState({
        filters: state => state.filters.allFilters,
        }),
        ...mapGetters({
            allFilters: 'availableFilters'
        }),
    },
    methods: {
        ...mapActions({
            fetchFilters: 'filters/fetchFilters',
            addFilter: 'applied/addFilter'
        }),
    },
    created(){
        this.loading = true
        this.fetchFilters()
            .then(() => this.loading = false)
    }
}
</script>
<style scoped>

</style>