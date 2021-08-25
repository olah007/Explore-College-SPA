<template>
  <div>
      <!-- <fa icon="search" /> -->
      <input v-model="searchCollege" @keyup.enter="fetchCollege(searchCollege)" id="search-focus form1" type="search" class="form-control" placeholder="Search for college" />
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
        method: { type: Function }
    },
    methods: {
        fetchCollege(value) {
            this.method(value)
        }
    }
}
</script>

<style scoped>
div {
    width: 16em;
    margin: 2em 0;
}
</style>