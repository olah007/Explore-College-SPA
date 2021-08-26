<template>
  <div>
      <!-- <fa icon="search" /> -->
    <input 
        v-model="searchCollege" 
        @keyup.enter="fetchCollege(searchCollege)" 
        id="search-focus form1" 
        type="search" 
        class="form-control" 
        placeholder="Search for college" 
    />
  </div>
</template>

<script>
export default {
    name: 'SearchCollege',
    data: function() {
        return {
            searchCollege: ''
        }
    },
    props: {
        display : Boolean,
        method: { type: Function }
    },
    methods: {
        fetchCollege(value) {
            this.method(value)
            this.searchCollege = ''
        }
    }
}
</script>

<style scoped>

</style>