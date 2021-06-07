<template>
  <div> 
      <h1>Applied Filters</h1>
      <ul>
          <li v-for="filter in applied" :key="filter">
              {{filter}}
            <button @click="deleteFilter(filter)">Delete</button>

          </li>
      </ul>
      <button @click="clearFilters">Clear all</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters('applied', {
            applied: 'appliedFilters'
        }),
        
    },
    methods: {
        ...mapActions('applied', ['clearFilters', 'deleteFilter'])

    }
}
</script>
<style scoped>

</style>