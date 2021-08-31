<template>
  <div>
    <!-- <fa icon="search" /> -->
    <input
      v-model="searchCollege"
      id="search-focus form1"
      type="search"
      class="form-control"
      placeholder="Search for college"
      @input="fetchCollege"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchCollege',
  data: function () {
    return {
      searchCollege: ''
    }
  },
  props: {
    method: { type: Function }
  },
  methods: {
    fetchCollege() {
      this.method(this.searchCollege)
    },
    resetSearch() {
      this.searchCollege = ''
    }
  }
}
</script>

<style scoped></style>
