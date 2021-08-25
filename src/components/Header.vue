<template>
    <div class="row header">
        <div class="title col-lg-6 col-md-6">
            <label for="explore-college" class="form-label fw-bold h4">{{ title }}</label>
        </div>
        <search-college :method="fetchCol"/>
    </div>
</template>

<script>
import SearchCollege from '@/components/SearchCollege'

export default {
    name: 'Header',
    props: {
        title: String,
        method: { type: Function }
    },
    components: {
        SearchCollege
    },
    methods: {
        fetchCol(value) {
            this.method(value)
        }
  }
}
</script>

<style scoped>
.title {
    width: 18em;
    margin: 2em 0;
}
label {
    color: #151566;
}
.header {
    display: flex;
    justify-content: space-between;
}

</style>