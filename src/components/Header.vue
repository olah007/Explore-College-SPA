<template>
    <div class="top">
        <div class="heading">
            <h3 class="fw-bold title" 
                :style="{width : '80%'}"
                >
                {{ title }}
            </h3>
        </div>

        <div class="search">
            <search-college 
                :method="fetchCol" 
                class="input"
            />
            <button 
                :style="{ marginLeft: '2rem', display: display ? 'block' : 'none'}" 
                v-show="collegeList.length == 1" 
                type="button" 
                class="btn btn-primary" 
                @click="$emit('clearFiltering'); clearField"
                >
                Home 
            </button>
        </div>
    </div>
</template>

<script>
import SearchCollege from '@/components/SearchCollege'

export default {
    name: 'Header',
    data: function() {
        return {
            display: false
        }
    },
    props: {
        title: String,
        collegeList: Array,
        method: { type: Function }
    },
    emits: ['clearFiltering'],
    components: {
        SearchCollege
    },
    methods: {
        fetchCol(value) {
            this.method(value)
            this.display = false
        },
        clearField() {
            this.display = false
        },
  }
}
</script>

<style scoped>
.title {
    color: #151566;
}

.top {
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
}

.heading {
    width: 40%;
}

.search {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn {
    width: 30%;
    font-size: 14px;
}
</style>